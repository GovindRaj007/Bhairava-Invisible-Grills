import { Helmet } from 'react-helmet-async';
import Breadcrumb from '@/components/Breadcrumb';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import ServiceAreaChennai from '@/components/ServiceAreaChennai';
import { BUSINESS, serviceCategories } from '@/data/services';
import { heroImages } from '@/data/images';
import { Shield, ShieldCheck, Eye, Wind, Wrench, Clock, Building2, Home, Sun } from 'lucide-react';

const benefits = [
  { icon: Building2, title: 'High-Rise Apartments', description: 'Essential safety for Chennai\'s growing skyline of multi-story buildings.' },
  { icon: Sun, title: 'Coastal Climate Ready', description: 'Marine-grade SS 316 steel resists Chennai\'s humid coastal environment.' },
  { icon: Eye, title: 'Unobstructed Views', description: 'Enjoy sea-facing and city views without visual barriers.' },
  { icon: Shield, title: 'Child & Pet Safety', description: 'Complete fall prevention for families in high-rise homes.' },
  { icon: Wind, title: 'Full Ventilation', description: 'Natural airflow maintained — no stuffy enclosed spaces.' },
  { icon: Wrench, title: 'Zero Maintenance', description: 'No painting, no rusting — built to last in Chennai weather.' },
];

const trustSignals = [
  { title: '500+', description: 'Installations in Chennai' },
  { title: 'Warranty-based', description: 'Warranty on All Work' },
  { title: '4.9/5', description: 'Customer Rating' },
  { title: 'Same Day', description: 'Free Site Visit' },
];

const faqs = [
  { question: 'Do you serve all areas of Chennai?', answer: `Yes, MorSafe serves all areas of Chennai including ${BUSINESS.areas.join(', ')}, and surrounding neighborhoods.` },
  { question: 'How quickly can you install invisible grills?', answer: 'Most standard installations are completed within a single day. We offer same-day site visits and can schedule installation within 2-3 days of confirmation.' },
  { question: 'Are your products suitable for Chennai\'s climate?', answer: 'Absolutely. We use SS 316 marine-grade stainless steel specifically chosen for coastal environments like Chennai. All materials are UV-treated and corrosion-resistant.' },
  { question: 'Do you offer free site visits?', answer: 'Yes. We provide free site visits across Chennai for assessment, measurement, and quotation — with zero obligation.' },
  { question: 'What is the warranty on your installations?', answer: 'We offer a 10-year warranty on invisible grills and 5-year warranty on safety nets and sports nets, covering both materials and workmanship.' },
  { question: 'Can you install in both apartments and independent houses?', answer: 'Yes. We install in apartments, villas, independent houses, commercial buildings, and sports facilities across Chennai.' },
];

export default function ChennaiLocation() {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'MorSafe — Invisible Grills in Chennai',
    description: 'Professional invisible grills, safety nets, sports nets, and ceiling hangers installation in Chennai.',
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: { '@type': 'PostalAddress', addressLocality: 'Chennai', addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
    areaServed: { '@type': 'City', name: 'Chennai' },
  };

  return (
    <>
      <Helmet>
        <title>Invisible Grills in Chennai | MorSafe Exterior Safety</title>
        <meta name="description" content="MorSafe provides invisible grills, safety nets, sports nets, and ceiling hangers across Chennai. SS 316 marine-grade. 10-year warranty. Free site visit." />
        <link rel="canonical" href="https://morsafe.in/invisible-grills-chennai" />
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
      </Helmet>

      <div className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img src={heroImages['invisible-grills']} alt="Invisible grills in Chennai" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(26,26,26,0.88) 40%, rgba(245,168,0,0.18) 100%)' }} />
          <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-4 pb-12">
            <Breadcrumb items={[{ label: 'Chennai' }]} />
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-foreground mt-3">
              Invisible Grills in <span className="text-primary">Chennai</span>
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="section-light py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed text-center">
              Chennai's rapidly growing skyline of high-rise apartments, sea-facing condominiums, and modern villas demands advanced safety solutions that don't compromise on aesthetics. MorSafe brings invisible grills, safety nets, sports nets, and ceiling cloth drying hangers to homes and buildings across every Chennai neighborhood — from Anna Nagar to OMR, Adyar to Tambaram.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-surface py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">
              Why Chennai Residents Choose MorSafe
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-3 p-4 bg-card rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-sm mb-1">{b.title}</h3>
                    <p className="text-muted-foreground text-xs">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="section-dark py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {trustSignals.map((t) => (
                <div key={t.title} className="text-center">
                  <div className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-1">{t.title}</div>
                  <p className="text-secondary-foreground/60 text-sm">{t.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="section-light py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">Our Installation Process</h2>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-0">
              {['Free Enquiry', 'Site Visit', 'Custom Quote', 'Installation', 'Handover'].map((step, i) => (
                <div key={step} className="flex items-center gap-4 md:gap-0">
                  <div className="flex flex-col items-center text-center min-w-[120px]">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-heading font-bold text-foreground text-sm mb-3">{i + 1}</div>
                    <span className="text-foreground text-sm">{step}</span>
                  </div>
                  {i < 4 && <div className="hidden md:block w-10 h-0.5 bg-primary/40 mx-1" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceAreaChennai />
        <FAQAccordion faqs={faqs} />
        <CTASection />
      </div>
    </>
  );
}
