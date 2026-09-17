import React from 'react';
import { Instagram, Youtube, Sparkles, Star, Download, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onBookClick: () => void;
  onOpenCodeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick, onOpenCodeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="main-footer"
      className="bg-[#0B0F19] text-gray-400 border-t border-gray-800/80 pt-16 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Banner */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-12 border-b border-gray-800">
          <div className="text-center lg:text-left space-y-2">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="text-[#FFD166] text-2xl font-black">★</span>
              <span className="font-serif italic text-3xl text-[#FFD166] font-extrabold -ml-1">L</span>
              <span className="font-heading font-black tracking-wider text-2xl text-white">LOCGICIAN</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md">
              Creating magic for loc'd crowns without a wand. Tension-free loctician services & the home of @goodlocday.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onBookClick()}
              className="bg-[#FFD166] hover:bg-[#E5A93C] text-[#111827] font-black text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-md"
            >
              Book Crown Magic
            </button>

            <button
              onClick={onOpenCodeModal}
              className="bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-[#FFD166]" />
              <span>Download Single HTML</span>
            </button>
          </div>
        </div>

        {/* Middle Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-gray-800/80 text-xs">
          
          {/* Col 1: Studio Services */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold uppercase text-white tracking-wider text-sm">
              Loc Offerings
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-[#FFD166] transition-colors">Starter Locs Installation</a></li>
              <li><a href="#services" className="hover:text-[#FFD166] transition-colors">Precision Retwist & Parting</a></li>
              <li><a href="#services" className="hover:text-[#FFD166] transition-colors">Apple Cider Vinegar Detox</a></li>
              <li><a href="#services" className="hover:text-[#FFD166] transition-colors">Crown Petals & Gala Updos</a></li>
              <li><a href="#services" className="hover:text-[#FFD166] transition-colors">Loc Reattachment & Repair</a></li>
            </ul>
          </div>

          {/* Col 2: Sister Community */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold uppercase text-white tracking-wider text-sm">
              Community Presence
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://instagram.com/locgician" target="_blank" rel="noreferrer" className="hover:text-[#FFD166] flex items-center gap-1.5">
                  <Instagram className="w-3.5 h-3.5 text-[#FFD166]" />
                  <span>@locgician (Official Studio)</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/goodlocday" target="_blank" rel="noreferrer" className="hover:text-[#FFD166] flex items-center gap-1.5">
                  <Instagram className="w-3.5 h-3.5 text-[#FFD166]" />
                  <span>@goodlocday (241K+ Strong)</span>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#FFD166] flex items-center gap-1.5">
                  <Youtube className="w-3.5 h-3.5 text-[#FFD166]" />
                  <span>Locgician YouTube Channel</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Brand Hashtags */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold uppercase text-white tracking-wider text-sm">
              Community Tags
            </h4>
            <div className="flex flex-wrap gap-1.5">
              <span className="bg-gray-900 text-gray-300 border border-gray-800 px-2.5 py-1 rounded-md text-[11px] font-semibold">
                #locgician
              </span>
              <span className="bg-gray-900 text-[#FFD166] border border-gray-800 px-2.5 py-1 rounded-md text-[11px] font-semibold">
                #goodlocday
              </span>
              <span className="bg-gray-900 text-gray-300 border border-gray-800 px-2.5 py-1 rounded-md text-[11px] font-semibold">
                #crownmagic
              </span>
              <span className="bg-gray-900 text-gray-300 border border-gray-800 px-2.5 py-1 rounded-md text-[11px] font-semibold">
                #tensionfreelocs
              </span>
              <span className="bg-gray-900 text-gray-300 border border-gray-800 px-2.5 py-1 rounded-md text-[11px] font-semibold">
                #healthylocs
              </span>
            </div>
          </div>

          {/* Col 4: Studio Sanctuary */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold uppercase text-white tracking-wider text-sm">
              Studio Sanctuary
            </h4>
            <p className="text-gray-400">
              4822 Royal Palm Blvd, Suite 204
            </p>
            <p className="text-gray-400">
              Tue – Sat: 9am – 6:30pm
            </p>
            <p className="text-[#FFD166] font-semibold">
              Text: (555) 562-6244
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} LOCGICIAN | Professional Loctician. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-gray-400 hover:text-[#FFD166] transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
