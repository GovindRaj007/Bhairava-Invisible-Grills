import { Helmet } from 'react-helmet-async';
import HeroSlider from '@/components/HeroSlider';
import ServiceCategories from '@/components/ServiceCategories';
import MorSafeStandard from '@/components/MorSafeStandard';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import ServiceAreaChennai from '@/components/ServiceAreaChennai';
import CTASection from '@/components/CTASection';
import { BUSINESS } from '@/data/services';

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS.name,
  description: 'MorSafe provides invisible grills, safety nets, sports nets, and ceiling cloth drying hangers in Chennai.',
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  url: 'https://morsafe.in',
  openingHours: 'Mo-Sa 09:00-19:00',
};

export default function Index() {
  return (
    <>
      <Helmet>
        <title>MorSafe — Invisible Grills, Safety Nets & More in Chennai</title>
        <meta name="description" content="MorSafe provides premium invisible grills, safety nets, sports nets, and ceiling cloth drying hangers in Chennai.  Warranty-based. Free site visit. Call now." />
        <link rel="canonical" href="https://morsafe.in/" />
        <meta property="og:title" content="MorSafe — Exterior Safety Solutions in Chennai" />
        <meta property="og:description" content="Premium invisible grills, safety nets, sports nets & ceiling hangers in Chennai. Free quote." />
        <meta property="og:url" content="https://morsafe.in/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
      </Helmet>
      <HeroSlider />
      <ServiceCategories />
      <MorSafeStandard />
      <HowItWorks />
      <Testimonials />
      <ServiceAreaChennai />
      <CTASection />
    </>
  );
}
