import React, { useState } from 'react';
import { LOC_SERVICES } from '../data/locServices';
import { ServiceCategory, LocService } from '../types';
import { Sparkles, Clock, CheckCircle2, ChevronRight, Scissors, RefreshCw, Flame, Droplets, Star } from 'lucide-react';

interface ServicesSectionProps {
  onBookService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ServiceCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Services', icon: <Star className="w-4 h-4" /> },
    { id: 'starter-locs', label: 'Starter Locs', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'maintenance', label: 'Maintenance & Retwist', icon: <RefreshCw className="w-4 h-4" /> },
    { id: 'styling', label: 'Loc Styling & Updos', icon: <Scissors className="w-4 h-4" /> },
    { id: 'detox-treatments', label: 'Detox & Treatments', icon: <Droplets className="w-4 h-4" /> },
  ];

  const filteredServices = LOC_SERVICES.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getServiceIcon = (cat: string) => {
    switch (cat) {
      case 'starter-locs':
        return <Sparkles className="w-5 h-5 text-[#111827]" />;
      case 'maintenance':
        return <RefreshCw className="w-5 h-5 text-[#111827]" />;
      case 'styling':
        return <Scissors className="w-5 h-5 text-[#111827]" />;
      case 'detox-treatments':
        return <Droplets className="w-5 h-5 text-[#111827]" />;
      default:
        return <Star className="w-5 h-5 text-[#111827]" />;
    }
  };

  return (
    <section 
      id="services" 
      className="py-16 lg:py-24 bg-[#F9FAFB] text-[#111827] border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5A93C] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Locgician Menu of Offerings</span>
            </div>
            <h2 
              id="services-heading"
              className="font-heading font-black text-3xl sm:text-4xl text-[#111827] tracking-tight"
            >
              Featured Loc Care Services
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl">
              Precision interlocking, organic palm-roll retwisting, holistic herbal detoxes, and crown sculpture designed for healthy longevity.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-500 uppercase">
              Showing {filteredServices.length} offerings
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div 
          id="service-category-tabs" 
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              id={`category-tab-${cat.id}`}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                activeCategory === cat.id
                  ? 'bg-[#111827] text-[#FFD166] border-[#111827] shadow-md shadow-black/10'
                  : 'bg-white text-gray-700 hover:text-[#111827] border-gray-300 hover:border-gray-400'
              }`}
            >
              <span className={activeCategory === cat.id ? 'text-[#FFD166]' : 'text-[#E5A93C]'}>
                {cat.icon}
              </span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div 
          id="services-cards-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#E5A93C]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Card Bar with Icon & Title */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFD166] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.category)}
                  </div>
                  
                  {service.popular && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider bg-[#111827] text-[#FFD166] px-2.5 py-1 rounded-full">
                      <Sparkles className="w-3 h-3" /> Signature
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-black text-lg text-[#111827] tracking-tight uppercase group-hover:text-[#E5A93C] transition-colors mb-2">
                  {service.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.summary}
                </p>

                {/* Service Details & Inclusions */}
                <div className="border-t border-gray-100 pt-3 mb-4 space-y-1.5">
                  {service.includes.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A93C] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Bar: Pricing & CTA */}
              <div className="border-t border-gray-100 pt-4 flex items-center justify-between mt-2">
                <div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-0.5">
                    <Clock className="w-3 h-3" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="font-heading font-black text-xl text-[#111827]">
                    {service.price}
                  </div>
                </div>

                <button
                  onClick={() => onBookService(service.id)}
                  id={`book-service-btn-${service.id}`}
                  className="bg-[#111827] hover:bg-[#FFD166] text-white hover:text-[#111827] text-xs font-black uppercase tracking-wider px-4 py-2.5 rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-sm active:scale-95"
                >
                  <span>Book Service</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Loc Care Package Highlight Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#111827] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-800 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[#FFD166] text-xs font-black uppercase tracking-widest flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> The Locgician Experience
            </span>
            <h4 className="font-heading font-black text-2xl text-white">
              First Time in the Locgician Chair?
            </h4>
            <p className="text-gray-300 text-sm max-w-xl">
              All appointments include our signature organic botanical steam wash, essential oil scalp hydration seal, and tension-free promise.
            </p>
          </div>

          <button
            onClick={() => onBookService('retwist-loc-treatment')}
            className="shrink-0 bg-[#FFD166] hover:bg-[#E5A93C] text-[#111827] font-black text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-md shadow-[#FFD166]/20"
          >
            Reserve Consultation & Style
          </button>
        </div>

      </div>
    </section>
  );
};
