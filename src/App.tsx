/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { PoliciesAndLocation } from './components/PoliciesAndLocation';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { StandaloneHtmlModal } from './components/StandaloneHtmlModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const [codeModalOpen, setCodeModalOpen] = useState(false);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#111827] text-[#F9FAFB] flex flex-col font-sans selection:bg-[#FFD166] selection:text-[#111827]">
      {/* Sticky Top Navbar */}
      <Navbar
        onBookClick={handleOpenBooking}
        onOpenCodeModal={() => setCodeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onBookClick={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* Loc Care Services Grid with Category Filter Tabs */}
        <ServicesSection
          onBookService={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* Crown Transformation Gallery with Interactive Before/After Slider */}
        <GallerySection
          onBookStyle={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* About Locgician & @goodlocday 241K+ Community Spotlight */}
        <AboutSection
          onBookClick={() => handleOpenBooking()}
        />

        {/* Booking Guidelines & Studio Location */}
        <PoliciesAndLocation
          onBookClick={() => handleOpenBooking()}
        />
      </main>

      {/* Footer */}
      <Footer
        onBookClick={() => handleOpenBooking()}
        onOpenCodeModal={() => setCodeModalOpen(true)}
      />

      {/* Interactive Booking Wizard Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preSelectedServiceId={selectedServiceId}
      />

      {/* Standalone Single-File HTML Exporter Modal */}
      <StandaloneHtmlModal
        isOpen={codeModalOpen}
        onClose={() => setCodeModalOpen(false)}
      />
    </div>
  );
}
