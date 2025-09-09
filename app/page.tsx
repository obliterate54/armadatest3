'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutAccordion from '@/components/AboutAccordion';
import AppPreview from '@/components/AppPreview';
import HowItWorks from '@/components/HowItWorks';
import MapMock from '@/components/MapMock';
import FeatureGrid from '@/components/FeatureGrid';
import GalleryMasonry from '@/components/GalleryMasonry';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import ContactForm from '@/components/ContactForm';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-canvas text-text-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutAccordion />
      <AppPreview />
      <HowItWorks />
      <MapMock />
      <FeatureGrid />
      <GalleryMasonry />
      <TestimonialCarousel />
      <FAQAccordion />
      <ContactForm />
      <CTABanner />
      <Footer />
      <FloatingDock />
    </main>
  );
}