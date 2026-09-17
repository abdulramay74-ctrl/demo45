import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Star, Calendar, Download, Phone } from 'lucide-react';

interface NavbarProps {
  onBookClick: (serviceId?: string) => void;
  onOpenCodeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, onOpenCodeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'LOC SERVICES', href: '#services' },
    { name: 'CROWN GALLERY', href: '#gallery' },
    { name: 'GOOD LOC DAY', href: '#goodlocday' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header 
      id="main-nav-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#111827]/95 backdrop-blur-md border-b border-gray-800 shadow-xl py-3' 
          : 'bg-[#111827] border-b border-gray-800/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo matching screenshot */}
        <a 
          href="#" 
          id="nav-logo-link"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="relative flex items-center">
            {/* Gold/Yellow Star Emblem */}
            <span className="text-[#FFD166] text-xl sm:text-2xl font-black transform -rotate-12 transition-transform group-hover:rotate-12">
              ★
            </span>
            <span className="font-serif italic text-2xl sm:text-3xl text-[#FFD166] font-extrabold -ml-0.5 mr-0.5">
              L
            </span>
            <span className="font-heading font-black tracking-wider text-xl sm:text-2xl text-white group-hover:text-[#FFD166] transition-colors">
              LOCGICIAN
            </span>
          </div>
          <span className="hidden xl:inline-block text-[10px] uppercase font-semibold tracking-widest text-[#FFD166] bg-[#FFD166]/10 px-2 py-0.5 rounded-full border border-[#FFD166]/30">
            Crown Magic
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xs font-bold tracking-widest text-gray-300 hover:text-[#FFD166] transition-colors uppercase py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCodeModal}
            id="nav-standalone-code-btn"
            title="Get Single-File HTML"
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-[#FFD166] bg-gray-800/80 hover:bg-gray-800 border border-gray-700 px-3 py-2 rounded-full transition-all"
          >
            <Download className="w-3.5 h-3.5 text-[#FFD166]" />
            <span>Single HTML</span>
          </button>

          <button
            onClick={() => onBookClick()}
            id="nav-book-crown-magic-btn"
            className="flex items-center gap-2 bg-[#FFD166] hover:bg-[#E5A93C] text-[#111827] font-black text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md shadow-[#FFD166]/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>BOOK CROWN MAGIC</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onBookClick()}
            className="bg-[#FFD166] text-[#111827] font-bold text-[11px] px-3.5 py-1.5 rounded-full uppercase tracking-wider"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-nav-toggle-btn"
            className="p-2 text-gray-300 hover:text-[#FFD166] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#111827] border-b border-gray-800 px-6 py-5 space-y-4 animate-in slide-in-from-top-2"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold tracking-wider text-gray-200 hover:text-[#FFD166] uppercase py-1 border-b border-gray-800/50"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#FFD166] text-[#111827] font-black text-sm uppercase py-3 rounded-xl shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Crown Magic</span>
            </button>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCodeModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-gray-800 text-gray-200 border border-gray-700 font-semibold text-xs py-2.5 rounded-xl hover:text-[#FFD166]"
            >
              <Download className="w-3.5 h-3.5 text-[#FFD166]" />
              <span>Download Executable Single HTML</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
