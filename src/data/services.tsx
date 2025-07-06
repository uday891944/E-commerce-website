import React from 'react';
import { ServiceType } from '../types';
import { Flower, Home, SunMoon, Coffee } from 'lucide-react';

export const services: ServiceType[] = [
  {
    id: 's1',
    title: 'Floral Styling',
    description: 'Bespoke floral arrangements that bring life and color to any space, crafted with seasonal blooms and artistic vision.',
    icon: <Flower className="w-10 h-10 text-primary-500" />
  },
  {
    id: 's3',
    title: 'Home Interior Makeovers',
    description: 'Revitalize your living spaces with our complete interior styling services that balance aesthetics and functionality.',
    icon: <Home className="w-10 h-10 text-primary-500" />
  },
  {
    id: 's4',
    title: 'Seasonal Decor Updates',
    description: 'Keep your space fresh with seasonal decor refreshes that reflect the changing beauty of nature throughout the year.',
    icon: <SunMoon className="w-10 h-10 text-primary-500" />
  },
  {
    id: 's5',
    title: 'Commercial Space Styling',
    description: 'Enhance your business environment with curated decor that reflects your brand identity and creates the right atmosphere.',
    icon: <Coffee className="w-10 h-10 text-primary-500" />
  }
];