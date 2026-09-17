import React from 'react';
import { MapPin, Clock, ShieldAlert, Phone, Mail, Instagram, Sparkles, CheckCircle, Calendar } from 'lucide-react';
import { STUDIO_POLICIES } from '../data/locServices';

interface PoliciesAndLocationProps {
  onBookClick: () => void;
}

export const PoliciesAndLocation: React.FC<PoliciesAndLocationProps> = ({ onBookClick }) => {
  return (
    <section 
      id="contact" 
      className="py-16 lg:py-24 bg-[#111827] text-white border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FFD166] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Studio Sanctuary & Guidelines</span>
          </div>
          <h2 
            id="policies-heading"
            className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight"
          >
            Booking & Studio Sanctuary
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Everything you need to know before stepping into the magical chair. We prioritize your hair health and peaceful studio experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Studio Location & Hours Card */}
          <div className="lg:col-span-6 bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-xl space-y-6">
            
            <div className="flex items-center gap-3 pb-4 border-b border-gray-800">
              <div className="w-10 h-10 rounded-xl bg-[#FFD166] text-[#111827] flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-black text-lg text-white">
                  Locgician Studio Sanctuary
                </h3>
                <p className="text-xs text-[#FFD166] font-semibold">
                  Private Boutique Crown Suite
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-1">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Location & Parking
              </div>
              <p className="text-sm text-gray-200 font-medium">
                4822 Royal Palm Blvd, Suite 204
              </p>
              <p className="text-xs text-gray-400">
                Dedicated client parking in rear courtyard. Buzzer code #204.
              </p>
            </div>

            {/* Studio Hours */}
            <div className="space-y-2 pt-2 border-t border-gray-800">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FFD166]" />
                <span>Operating Hours</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-gray-950 border border-gray-800/80">
                  <span className="font-bold text-white block">Tue – Fri:</span>
                  <span className="text-gray-400">9:00 AM – 6:30 PM</span>
                </div>
                <div className="p-2.5 rounded-lg bg-gray-950 border border-gray-800/80">
                  <span className="font-bold text-white block">Saturday:</span>
                  <span className="text-[#FFD166] font-bold">8:30 AM – 7:00 PM</span>
                </div>
                <div className="p-2.5 rounded-lg bg-gray-950 border border-gray-800/80 col-span-2">
                  <span className="font-bold text-white block">Sun & Mon:</span>
                  <span className="text-gray-400">Closed (Crown Rest & Herbal Sourcing)</span>
                </div>
              </div>
            </div>

            {/* Direct Connect */}
            <div className="space-y-2 pt-2 border-t border-gray-800">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Direct Channels
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <a
                  href="tel:5555626244"
                  className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 text-gray-200 px-3 py-2 rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFD166]" />
                  <span>(555) 562-6244</span>
                </a>

                <a
                  href="mailto:crowns@locgician.com"
                  className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 text-gray-200 px-3 py-2 rounded-lg transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FFD166]" />
                  <span>crowns@locgician.com</span>
                </a>

                <a
                  href="https://instagram.com/locgician"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 text-gray-200 px-3 py-2 rounded-lg transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#FFD166]" />
                  <span>@locgician</span>
                </a>
              </div>
            </div>

            <button
              onClick={onBookClick}
              className="w-full bg-[#FFD166] hover:bg-[#E5A93C] text-[#111827] font-black text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Session Now</span>
            </button>

          </div>

          {/* Client Policies & Preparation Rules */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert className="w-5 h-5 text-[#E5A93C]" />
              <h3 className="font-heading font-black text-xl text-white">
                Studio House Policies
              </h3>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              To honor every client's time and create an unhurried, elevated crown session, please review our essential guidelines:
            </p>

            <div className="space-y-3">
              {STUDIO_POLICIES.map((policy, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900/90 rounded-2xl p-5 border border-gray-800 hover:border-gray-700 transition-colors"
                >
                  <h4 className="font-heading font-bold text-sm text-[#FFD166] mb-1 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#FFD166]/10 text-[#FFD166] text-xs flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <span>{policy.title}</span>
                  </h4>
                  <p className="text-gray-300 text-xs leading-relaxed pl-7">
                    {policy.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick FAQ note */}
            <div className="p-4 rounded-xl bg-[#111827] border border-[#FFD166]/30 text-xs text-gray-300 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#FFD166] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Have questions about starter locs or loc repair?</strong> You can add consultation notes directly during checkout or text a clear photo of your crown to our studio line.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
