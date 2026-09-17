import React, { useState } from 'react';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { GALLERY_TRANSFORMATIONS } from '../data/locServices';
import { Sparkles, Instagram, ArrowUpRight, Heart, Star, Check } from 'lucide-react';

interface GallerySectionProps {
  onBookStyle: (serviceId?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onBookStyle }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const galleryItems = [
    {
      id: 'g1',
      title: 'Precision Diamond Parting Retwist',
      tag: 'Maintenance',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80',
      description: 'Razor-clean parts, organic tea tree scalp hydration, tension-free finish.',
      likes: 1420
    },
    {
      id: 'g2',
      title: 'Loc Petals & Royal Crown Halo',
      tag: 'Styling',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      description: 'Gala-ready architectural updo featuring loc flower petals and gold wire accents.',
      likes: 2180
    },
    {
      id: 'g3',
      title: 'Healthy Loc Journey: 3 Year Milestone',
      tag: 'Journey',
      image: '/images/loc_transformation_showcase_1789677316911.jpg',
      description: 'Thick, lustrous locs nourished with cold-pressed jojoba and pure rosewater.',
      likes: 3840
    },
    {
      id: 'g4',
      title: 'Two-Strand Rope Twists on Mature Locs',
      tag: 'Styling',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      description: 'Extended protective style with crisp line work and natural botanical sheen.',
      likes: 1890
    },
    {
      id: 'g5',
      title: 'ACV Detox & Buildup Eradication',
      tag: 'Detox',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
      description: 'Restored bounce and weightlessness after 3-stage clarifying soak.',
      likes: 2450
    },
    {
      id: 'g6',
      title: 'Starter Comb Coils Day One',
      tag: 'Starter Locs',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      description: 'The sacred beginning of a lifelong journey with calibrated coil density.',
      likes: 1970
    },
  ];

  const filteredGallery = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.tag.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section 
      id="gallery" 
      className="py-16 lg:py-24 bg-[#111827] text-white border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-gray-800 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FFD166] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Real Crowns • Real Magic</span>
            </div>
            <h2 
              id="gallery-heading"
              className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight"
            >
              Before & After Transformations
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
              From frizzy roots to immaculate geometric parts. Experience the healing power of master loc care.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/locgician"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full text-xs font-bold transition-all border border-gray-700"
            >
              <Instagram className="w-4 h-4 text-[#FFD166]" />
              <span>@locgician</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
            </a>
          </div>
        </div>

        {/* Featured Interactive Comparison Slider */}
        <div className="mb-14 bg-gradient-to-b from-gray-900 to-gray-950 p-4 sm:p-8 rounded-3xl border border-gray-800">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD166] bg-[#FFD166]/10 px-3 py-1 rounded-full border border-[#FFD166]/20 inline-block mb-2">
              Interactive Crown Reveal
            </span>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-white">
              Drag to Reveal the Magic
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Compare 6-week overgrown new growth with the signature Locgician precision retwist & botanical scalp soak.
            </p>
          </div>

          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1584297091622-af8e5fdcf1bd?auto=format&fit=crop&w=1200&q=80"
            afterImage="/images/loc_transformation_showcase_1789677316911.jpg"
            beforeLabel="Before: 8 Weeks Overgrowth"
            afterLabel="After: Locgician Crown Magic"
          />
        </div>

        {/* Gallery Filter Chips */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {['all', 'maintenance', 'styling', 'detox', 'starter locs'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeTab === tab
                    ? 'bg-[#FFD166] text-[#111827] border-[#FFD166]'
                    : 'bg-gray-900 text-gray-400 hover:text-white border-gray-800'
                }`}
              >
                {tab === 'all' ? 'All Transformations' : tab}
              </button>
            ))}
          </div>

          <span className="text-xs font-semibold text-gray-500">
            Tap heart to save favorite style
          </span>
        </div>

        {/* Transformations Showcase Grid */}
        <div 
          id="gallery-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900/90 rounded-2xl overflow-hidden border border-gray-800 hover:border-[#FFD166]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-950">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-[#111827]/85 backdrop-blur-md text-[#FFD166] text-[11px] font-black uppercase px-2.5 py-1 rounded-md border border-gray-700">
                  {item.tag}
                </div>

                {/* Like Button */}
                <button
                  onClick={() => toggleLike(item.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors ${
                    likedItems[item.id] 
                      ? 'bg-rose-600 text-white' 
                      : 'bg-black/50 text-white/80 hover:text-white'
                  }`}
                  aria-label="Favorite style"
                >
                  <Heart className={`w-4 h-4 ${likedItems[item.id] ? 'fill-current' : ''}`} />
                </button>

                {/* Title overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="font-heading font-black text-sm text-white leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex items-center justify-between border-t border-gray-800 pt-3">
                  <span className="text-[11px] text-gray-400 flex items-center gap-1 font-semibold">
                    <Heart className="w-3 h-3 text-rose-400 inline" />
                    {(item.likes + (likedItems[item.id] ? 1 : 0)).toLocaleString()} loves
                  </span>

                  <button
                    onClick={() => onBookStyle('retwist-style')}
                    className="text-xs font-black uppercase tracking-wider text-[#FFD166] hover:text-[#E5A93C] flex items-center gap-1"
                  >
                    <span>Get This Look</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
