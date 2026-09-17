import React from 'react';
import { Sparkles, Star, Heart, Users, Award, ShieldCheck, Instagram, Quote } from 'lucide-react';
import { CLIENT_TESTIMONIALS } from '../data/locServices';

interface AboutSectionProps {
  onBookClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookClick }) => {
  return (
    <section 
      id="about" 
      className="py-16 lg:py-24 bg-[#111827] text-white relative overflow-hidden border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main About Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Portrait & Credibility */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#FFD166]/40 shadow-2xl bg-gray-900 aspect-[4/5] max-w-md mx-auto">
              <img
                src="/images/master_loctician_portrait_1789677337104.jpg"
                alt="Master Loctician founder of Locgician and @goodlocday"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-75" />

              {/* Founder Tag */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#111827]/90 backdrop-blur-md p-4 rounded-2xl border border-gray-700 shadow-xl">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-heading font-black text-lg text-white">
                    Master Loctician
                  </h3>
                  <span className="text-[#FFD166] text-xs font-bold uppercase tracking-wider bg-[#FFD166]/10 px-2 py-0.5 rounded-full border border-[#FFD166]/30">
                    Lead Alchemist
                  </span>
                </div>
                <p className="text-gray-300 text-xs">
                  "Your locs are not just hair. They are sacred antennas of ancestry, patience, and royalty."
                </p>
              </div>
            </div>

            {/* Experience Floating Badge */}
            <div className="hidden sm:flex absolute -top-4 -left-4 bg-[#FFD166] text-[#111827] p-4 rounded-2xl shadow-xl flex-col items-center justify-center font-black border-2 border-[#111827]">
              <span className="text-2xl font-black">12+</span>
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-center leading-tight">
                Years Crown<br />Craftsmanship
              </span>
            </div>
          </div>

          {/* Right Column: The Philosophy & Loc Magic */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD166]/10 border border-[#FFD166]/30 text-[#FFD166] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Locgician Standard</span>
            </div>

            <h2 
              id="about-headline"
              className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
            >
              CROWNS CRAFTED WITH <span className="text-[#FFD166]">PURPOSE</span>, NOT TENSION.
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              We founded <strong>Locgician</strong> to overturn decades of painful retwists, heavy beeswax buildup, and scalp damage. Our studio operates as a sacred sanctuary where natural 4C to 3A curl patterns receive scientific hydration, bespoke grid architecture, and holistic scalp care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800">
                <div className="w-8 h-8 rounded-lg bg-[#FFD166]/10 text-[#FFD166] flex items-center justify-center mb-2 font-bold">
                  ✓
                </div>
                <h4 className="font-heading font-bold text-sm text-white mb-1">
                  Zero Beeswax or Petrolatum
                </h4>
                <p className="text-gray-400 text-xs leading-normal">
                  Pure botanical flaxseed, aloe vera, and rose water formulations that rinse 100% clean.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800">
                <div className="w-8 h-8 rounded-lg bg-[#FFD166]/10 text-[#FFD166] flex items-center justify-center mb-2 font-bold">
                  ✓
                </div>
                <h4 className="font-heading font-bold text-sm text-white mb-1">
                  Tension-Free Parting
                </h4>
                <p className="text-gray-400 text-xs leading-normal">
                  Protects edges, follicles, and temples from traction alopecia for lifelong loc longevity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800">
                <div className="w-8 h-8 rounded-lg bg-[#FFD166]/10 text-[#FFD166] flex items-center justify-center mb-2 font-bold">
                  ✓
                </div>
                <h4 className="font-heading font-bold text-sm text-white mb-1">
                  Ozonated Steam Infusions
                </h4>
                <p className="text-gray-400 text-xs leading-normal">
                  Opens stubborn loc cuticle layers to drink deep hydration from inside out.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800">
                <div className="w-8 h-8 rounded-lg bg-[#FFD166]/10 text-[#FFD166] flex items-center justify-center mb-2 font-bold">
                  ✓
                </div>
                <h4 className="font-heading font-bold text-sm text-white mb-1">
                  Custom Parting Geometry
                </h4>
                <p className="text-gray-400 text-xs leading-normal">
                  Diamond, square, and crescent brick-lay designs tailored to your natural scalp density.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onBookClick}
                className="bg-[#FFD166] hover:bg-[#E5A93C] text-[#111827] font-black text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-md shadow-[#FFD166]/20"
              >
                Experience Crown Magic
              </button>
              
              <a
                href="#goodlocday"
                className="text-gray-300 hover:text-[#FFD166] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <span>Discover @goodlocday</span>
                <span className="text-[#FFD166]">→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Good Loc Day Spotlight Section */}
        <div 
          id="goodlocday"
          className="bg-gradient-to-br from-[#1F2937] via-[#111827] to-[#111827] border-2 border-[#FFD166]/30 rounded-3xl p-8 sm:p-12 mb-20 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle star decorations */}
          <div className="absolute top-6 right-8 text-[#FFD166]/20 text-7xl font-serif select-none pointer-events-none">
            ★
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-[#FFD166] text-[#111827] text-xs font-black uppercase px-3 py-1 rounded-full">
                  Sister Community
                </span>
                <span className="text-[#E5A93C] font-black text-sm tracking-wider">
                  ⭐ 241K+ COMMUNITY STRONG
                </span>
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                HOME OF THE <span className="text-[#FFD166]">@GOODLOCDAY</span> MOVEMENT
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                What started as a daily affirmation in the styling chair became a global community of over 241,000 loc enthusiasts celebrating every phase of their crown—from the fuzzy frizzy starter coils to floor-sweeping mature locs.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700/60 max-w-lg">
                <div>
                  <div className="font-heading font-black text-2xl sm:text-3xl text-[#FFD166]">
                    241K+
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                    Global Fam
                  </div>
                </div>
                <div>
                  <div className="font-heading font-black text-2xl sm:text-3xl text-white">
                    1.4M+
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                    Monthly Reach
                  </div>
                </div>
                <div>
                  <div className="font-heading font-black text-2xl sm:text-3xl text-[#FFD166]">
                    10K+
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                    #GoodLocDay Tags
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-gray-900/90 rounded-2xl border border-gray-700">
              <Instagram className="w-12 h-12 text-[#FFD166] mb-3" />
              <h4 className="font-heading font-bold text-lg text-white mb-1">
                Join @goodlocday
              </h4>
              <p className="text-gray-400 text-xs mb-4">
                Daily loc care rituals, product spotlights, retwist inspiration, and member shoutouts.
              </p>
              <a
                href="https://instagram.com/goodlocday"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#FFD166] hover:bg-[#E5A93C] text-[#111827] font-black text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-md"
              >
                Follow on Instagram
              </a>
            </div>

          </div>
        </div>

        {/* Client Reviews / Testimonials */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD166] mb-2 block">
              Crown Praise & Healing
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
              Words from Crown Holders
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-gray-900/80 rounded-2xl p-6 border border-gray-800 flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-[#FFD166] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-300 text-sm italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-gray-800 pt-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-[#FFD166]/40"
                  />
                  <div>
                    <h5 className="font-heading font-bold text-xs text-white">
                      {t.name}
                    </h5>
                    <div className="text-[11px] text-[#FFD166] font-medium">
                      {t.crownAge} • {t.service}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
