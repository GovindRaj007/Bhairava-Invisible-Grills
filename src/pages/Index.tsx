import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSlider from '@/components/HeroSlider';
import { ImageShowcase } from '@/components/ImageShowcase';
import ServiceCategories from '@/components/ServiceCategories';
import { BUSINESS } from '@/data/services';
import { useScrollRestoration } from '@/hooks/useScrollRestoration';

// Lazy load below-the-fold components
const BhairavaStandard = lazy(() => import('@/components/MorSafeStandard'));
const HowItWorks = lazy(() => import('@/components/HowItWorks'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const CTASection = lazy(() => import('@/components/CTASection'));

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS.name,
  description: 'Bhairava Invisible Grills provides best invisible grills installation in Visakhapatnam. Strong, secure stainless steel cable grills for balconies and windows. Also serves in major cities across Andhra Pradesh and offers ceiling cloth hangers.',
  telephone: [BUSINESS.phone, BUSINESS.phone2],
  email: BUSINESS.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '125-923, Srinivas nagar, Sai Nagar, Marripalem',
    addressLocality: 'Visakhapatnam',
    addressRegion: 'Andhra Pradesh',
    postalCode: '530018',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.latitude,
    longitude: BUSINESS.longitude,
  },
  url: 'https://bhairavainvisiblegrills.in',
  openingHours: 'Mo-Sa 09:00-19:00',
};

export default function Index() {
  useScrollRestoration();
  
  return (
    <>
      <Helmet>
        <title>Best Invisible Grills in Visakhapatnam (Vizag) | Bhairava</title>
        <meta name="description" content="Best invisible grills in Visakhapatnam. Strong, secure SS 316 stainless steel grills for balconies and windows. Also ceiling cloth hangers. Free site visit near you. Call now." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bhairavainvisiblegrills.in/" />
        <meta property="og:title" content="Best Invisible Grills in Vizag - Balcony & Window | Bhairava" />
        <meta property="og:description" content="Strong & secure invisible grills in Visakhapatnam. Best balcony and window grills. Stainless steel construction. Free quote. Call Bhairava near me." />
        <meta property="og:url" content="https://bhairavainvisiblegrills.in/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
      </Helmet>
      <HeroSlider />
      <ImageShowcase />
      <ServiceCategories />
      <Suspense fallback={<div className="h-96" />}>
        <BhairavaStandard />
      </Suspense>
      <Suspense fallback={<div className="h-96" />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<div className="h-96" />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="h-96" />}>
        <CTASection />
      </Suspense>
    </>
  );
}
