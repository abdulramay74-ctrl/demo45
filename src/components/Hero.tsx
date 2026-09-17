import React from 'react';
import { Sparkles, Star, Calendar, ChevronRight, ShieldCheck, Heart, Award } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreServices }) => {
  return (
    <section 
      id="hero-section" 
      className="relative bg-[#111827] text-white overflow-hidden border-b border-gray-800"
    >
      {/* Subtle radial ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD166]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#E5A93C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px] lg:min-h-[620px] items-stretch">
          
          {/* Left Hero Column: Copy & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 py-12 lg:py-16 flex flex-col justify-center pr-0 lg:pr-8 z-10">
            
            {/* Crown Magic Pre-heading badge */}
            <div className="inline-flex items-center gap-2 mb-4 w-fit px-3.5 py-1.5 rounded-full bg-gray-800/80 border border-gray-700/80">
              <span className="text-[#FFD166] text-sm animate-pulse">✨</span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFD166]">
                Premier Crown Alchemy & Loc Studio
              </span>
            </div>

            {/* Main Headline matching screenshot */}
            <h1 
              id="hero-headline" 
              className="font-heading font-black text-3xl sm:text-4xl md:text-5xl xl:text-6xl tracking-tight leading-[1.08] text-white mb-6"
            >
              CREATING <span className="text-[#FFD166] underline decoration-[#FFD166]/40 decoration-4 underline-offset-4">MAGIC</span> FOR{' '}
              <span className="text-[#FFD166]">LOC'D CROWNS</span> WITHOUT A WAND.
            </h1>

            {/* Subheadline matching screenshot */}
            <p 
              id="hero-subheadline" 
              className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl mb-8"
            >
              Master Loctician services specializing in installations, retwists, styling, and healthy loc care. Join the community{' '}
              <a 
                href="#goodlocday" 
                className="text-[#FFD166] hover:underline font-semibold"
              >
                @goodlocday
              </a>.
            </p>

            {/* Action Buttons matching screenshot */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onBookClick}
                id="hero-book-appointment-btn"
                className="bg-[#FFD166] hover:bg-[#E5A93C] text-[#111827] font-black text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#FFD166]/25 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#111827]" />
                <span>BOOK APPOINTMENT</span>
              </button>

              <button
                onClick={onExploreServices}
                id="hero-explore-services-btn"
                className="bg-transparent hover:bg-white/5 border-2 border-white/80 hover:border-white text-white font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-200 flex items-center gap-2"
              >
                <span>EXPLORE SERVICES</span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </button>
            </div>

            {/* Status Badges pill matching screenshot */}
            <div 
              id="hero-status-badges"
              className="inline-flex flex-wrap items-center gap-2 sm:gap-3 bg-white/95 text-[#111827] px-4 py-2.5 rounded-full shadow-md w-fit border border-gray-200 text-xs sm:text-sm font-extrabold tracking-wide"
            >
              <span className="flex items-center gap-1.5">
                <span className="text-base">🧙‍♂️</span>
                <span className="text-[#111827]">MASTER LOCTICIAN</span>
              </span>
              <span className="text-gray-400">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#E5A93C]">⭐</span>
                <span className="text-[#111827]">241K+ COMMUNITY</span>
              </span>
              <span className="text-gray-400">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#111827]">✨</span>
                <span className="text-[#111827]">#LOCGICIAN</span>
              </span>
            </div>

          </div>

          {/* Right Hero Column: Loctician Visual with Palette Swatches */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center py-6 lg:py-10">
            <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-full rounded-2xl overflow-hidden border-2 border-gray-800 shadow-2xl bg-gray-900 group">
              
              {/* Main Loctician Photograph */}
              <img
                src="/images/locgician_hero_banner_1789677292274.jpg"
                alt="Master Loctician styling healthy locs on client with palm leaves background"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80 lg:opacity-60" />

              {/* Floating Star Magic Badge */}
              <div className="absolute top-4 right-4 bg-[#111827]/90 backdrop-blur-md border border-[#FFD166]/40 text-[#FFD166] px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Clean Parts • Zero Tension</span>
              </div>

              {/* Color Swatch Badge Strip matching screenshot */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 flex flex-wrap items-center gap-2 bg-[#111827]/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-gray-700/70 shadow-lg text-[11px] font-bold">
                <div className="flex items-center gap-1.5 text-gray-200">
                  <span className="w-3 h-3 rounded-full bg-[#E5A93C] inline-block shadow-sm" />
                  <span className="tracking-wider">WARM GOLD ACCENT</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-200">
                  <span className="w-3 h-3 rounded-full bg-[#F9FAFB] border border-gray-400 inline-block shadow-sm" />
                  <span className="tracking-wider">OFF-WHITE</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-200">
                  <span className="w-3 h-3 rounded-full bg-[#374151] inline-block shadow-sm" />
                  <span className="tracking-wider">CHARCOAL GRAY</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
