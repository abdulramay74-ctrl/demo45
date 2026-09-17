export type ServiceCategory = 
  | 'all'
  | 'starter-locs' 
  | 'maintenance' 
  | 'styling' 
  | 'detox-treatments';

export interface LocService {
  id: string;
  name: string;
  category: 'starter-locs' | 'maintenance' | 'styling' | 'detox-treatments';
  price: string;
  priceNumeric: number;
  duration: string;
  summary: string;
  popular?: boolean;
  includes: string[];
  recommendedFor: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  category: string;
  clientTime: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  handle?: string;
  crownAge: string;
  quote: string;
  service: string;
  rating: number;
  avatar: string;
}

export interface BookingFormData {
  serviceId: string;
  date: string;
  time: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  locLength: 'starter' | 'shoulder' | 'mid-back' | 'waist-length' | 'thigh-length';
  addOns: string[];
  acceptedPolicies: boolean;
  notes: string;
}
