import { LocService, TransformationItem, Testimonial } from '../types';

export const LOC_SERVICES: LocService[] = [
  {
    id: 'starter-locs-install',
    name: 'STARTER LOCS INSTALL',
    category: 'starter-locs',
    price: '$180 - $280',
    priceNumeric: 180,
    duration: '3.5 - 5.0 hrs',
    summary: 'Custom parting grid (diamond, square, or organic triangle), scalp prep, tension-free coil or two-strand twist install for your crown journey.',
    popular: true,
    includes: ['Organic botanical scalp cleanse', 'Custom precision grid parting', 'Locking botanical serum application', 'Starter loc care home ritual kit'],
    recommendedFor: 'Natural hair queens & kings beginning their sacred loc journey.'
  },
  {
    id: 'retwist-style',
    name: 'RETWIST & STYLE',
    category: 'maintenance',
    price: '$95 - $145',
    priceNumeric: 95,
    duration: '2.0 - 2.5 hrs',
    summary: 'Precision root retwist using palm-roll or interlocking technique paired with designer loc styling (barrels, two-strand twists, or braided crown).',
    popular: true,
    includes: ['Clarifying mint herbal wash', 'Hydrating rosewater steam mist', 'Neat palm-roll retwist', 'Designer loc style of choice'],
    recommendedFor: 'Clients 4-8 weeks post-wash desiring a crisp, camera-ready crown.'
  },
  {
    id: 'loc-detox-treatment',
    name: 'LOC DETOX & TREATMENT',
    category: 'detox-treatments',
    price: '$75 - $110',
    priceNumeric: 75,
    duration: '1.5 - 2.0 hrs',
    summary: 'Deep-penetrating Apple Cider Vinegar, baking soda, and essential oil basin soak that breaks down lint, product buildup, and scalp residue.',
    popular: false,
    includes: ['Double bubbling ACV + lemon soak', 'Deep clarifying scalp scrub', 'Warm herbal steam infusion', 'Cold botanical rinse & seal'],
    recommendedFor: 'Locs feeling heavy, dull, or carrying lint/excess oil.'
  },
  {
    id: 'retwist-loc-treatment',
    name: 'RETWIST LOC & TREATMENT',
    category: 'maintenance',
    price: '$135 - $175',
    priceNumeric: 135,
    duration: '2.5 - 3.0 hrs',
    summary: 'The all-in-one signature maintenance package: thorough clarifying shampoo, deep herbal steam conditioner, fresh retwist, and scalp massage.',
    popular: true,
    includes: ['Scalp stimulation therapy', 'Intense moisture loc steam', 'Precision root retwist', 'Essential oil seal & finishing shine'],
    recommendedFor: 'Crowns needing restoration, hydration, and clean structure.'
  },
  {
    id: 'instant-locs-crochet',
    name: 'INSTANT LOCS (CROCHET METHOD)',
    category: 'starter-locs',
    price: '$350 - $650',
    priceNumeric: 350,
    duration: '5.0 - 8.0 hrs',
    summary: 'Skip the unraveling stage. Tiny crochet needle technique that binds mature locs instantly on day one with maximum structural integrity.',
    popular: false,
    includes: ['Consultation & density check', 'Precision interlocking/crochet', 'Steam lock setting', '1-month checkup appointment'],
    recommendedFor: 'Those who want mature, frizz-resistant locs immediately.'
  },
  {
    id: 'loc-repair-reconstruction',
    name: 'LOC REPAIR & RECONSTRUCTION',
    category: 'maintenance',
    price: '$45 - $160',
    priceNumeric: 45,
    duration: '1.0 - 2.5 hrs',
    summary: 'Surgical repair of thinning roots, combining neighboring locs (congos), reattaching severed locs, or reinforcing weak points.',
    popular: false,
    includes: ['Structural tension assessment', 'Organic human hair bonding if required', 'Needle reinforcement', 'Crown preservation plan'],
    recommendedFor: 'Thinning locs, weak spots, or locs in need of reinforcement.'
  },
  {
    id: 'designer-loc-updo',
    name: 'CROWN LOC UPDO & EVENT STYLING',
    category: 'styling',
    price: '$65 - $115',
    priceNumeric: 65,
    duration: '1.0 - 1.5 hrs',
    summary: 'Sculptural red-carpet updos, loc petals, bun halos, intricate fishbone braids, and golden cuffs styling for weddings, galas, and milestones.',
    popular: false,
    includes: ['Hydration mist refresh', 'Artisanal styling & pin sculpting', 'Golden or wooden loc cuff accents', 'Setting spray for all-day hold'],
    recommendedFor: 'Weddings, galas, photo shoots, and celebration events.'
  },
  {
    id: 'two-strand-loc-twist',
    name: 'ROPE TWISTS & SPIRAL CURLS',
    category: 'styling',
    price: '$50 - $85',
    priceNumeric: 50,
    duration: '1.0 - 1.5 hrs',
    summary: 'Juicy two-strand or three-strand rope twists that can be worn as a protective style for weeks or unraveled for voluminous crimped waves.',
    popular: true,
    includes: ['Flaxseed gel setting', 'Uniform tension twists', 'Dryer hooded bake', 'Style unraveling advice'],
    recommendedFor: 'Long-lasting versatile styling with bounce and texture.'
  },
  {
    id: 'hot-oil-herbal-steam',
    name: 'HOT OIL & MOISTURE STEAM RITUAL',
    category: 'detox-treatments',
    price: '$40 - $60',
    priceNumeric: 40,
    duration: '45 mins',
    summary: 'A luxurious warm infusion of rosemary, jojoba, Jamaican black castor oil, and peppermint steamed deep into loc shafts and hair follicles.',
    popular: false,
    includes: ['Heated botanical oil massage', '20-min ozonated steam tent', 'Cooling peppermint rinse', 'Scalp circulation activation'],
    recommendedFor: 'Dry, brittle locs, itchy winter scalp, or slow growth.'
  }
];

export const ADD_ON_SERVICES = [
  { id: 'herbal-steam', name: 'Herbal Moisture Steam Bath', price: 25 },
  { id: 'acv-soak', name: 'ACV Detox Soak Upgrade', price: 35 },
  { id: 'gold-jewelry', name: 'Artisan Golden Loc Cuffs & Rings (Set of 6)', price: 15 },
  { id: 'scalp-massage', name: '15-Min Rosemary Scalp Stimulation Therapy', price: 20 },
  { id: 'loc-wash', name: 'Clarifying Botanical Shampoo & Condition', price: 20 }
];

export const GALLERY_TRANSFORMATIONS: TransformationItem[] = [
  {
    id: 't1',
    title: 'Precision Diamond Grid Retwist & Barrels',
    category: 'Maintenance & Style',
    clientTime: '2.5 Year Loc Crown',
    description: 'Clean geometry parts with palm-roll retwist and dual crown barrel twists with 14k gold loc cuffs.',
    beforeImg: 'https://images.unsplash.com/photo-1584297091622-af8e5fdcf1bd?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
    tag: '#CrownMagic'
  },
  {
    id: 't2',
    title: 'ACV Detox & Deep Moisture Reset',
    category: 'Detox & Treatment',
    clientTime: '4 Year Mature Locs',
    description: 'Removed 18 months of trapped dry shampoo and workout residue, restoring bounce and shine.',
    beforeImg: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
    tag: '#DeepCleanse'
  },
  {
    id: 't3',
    title: 'Fresh Starter Locs Installation',
    category: 'Starter Locs',
    clientTime: 'Day 1 Installation',
    description: '140 medium comb coils mapped along natural scalp whorls for balanced maturation.',
    beforeImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    tag: '#LocJourney'
  },
  {
    id: 't4',
    title: 'Crown Petals & High Loc Bun Sculpt',
    category: 'Creative Styling',
    clientTime: '5 Year Royal Crown',
    description: 'High architectural loc bun framed by pinned loc petal loops for an unforgettable gala appearance.',
    beforeImg: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    tag: '#EventStyling'
  }
];

export const CLIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Kendra Washington',
    handle: '@kendra.crowns',
    crownAge: 'Loc\'d 4 Years',
    quote: 'Locgician transformed my locs when other stylists told me my thinning crown could not be saved. Tension-free, gentle hands, and pure magic.',
    service: 'Loc Repair & Retwist',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-2',
    name: 'Marcus Adebayo',
    handle: '@adebayo_m',
    crownAge: 'Loc\'d 2 Years',
    quote: 'The ACV detox and hot steam treatment took 5 pounds of heaviness off my head. My scalp can finally breathe and the retwist lines are razor sharp.',
    service: 'Loc Detox & Retwist',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-3',
    name: 'Simone Clark',
    handle: '@simone_wellness',
    crownAge: 'Loc\'d 18 Months',
    quote: 'The @goodlocday movement taught me to love every frizz stage of my baby locs. Booking here is an act of self-care and spiritual crowning.',
    service: 'Starter Loc Maintenance',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  }
];

export const STUDIO_POLICIES = [
  {
    title: 'Clean Hair Policy',
    desc: 'Unless booking a service with wash/detox included, hair must be thoroughly washed within 24 hours and completely product-free (no heavy waxes or grease).'
  },
  {
    title: 'Punctuality & Grace Period',
    desc: 'Please arrive on time. We honor a 15-minute grace period. After 15 minutes, a $20 late fee applies. After 25 minutes, appointments may need rescheduling to respect other clients.'
  },
  {
    title: 'Deposit & Rescheduling',
    desc: 'A non-refundable 30% deposit secures your time slot. Rescheduling is permitted up to 48 hours in advance without forfeiting your deposit.'
  },
  {
    title: 'Private Suite Atmosphere',
    desc: 'To maintain a peaceful, therapeutic healing environment for all crown holders, no extra guests or unsupervised children are permitted.'
  }
];
