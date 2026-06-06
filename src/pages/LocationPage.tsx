import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import LocationTestimonials from '@/components/LocationTestimonials';
import { BUSINESS, serviceCategories } from '@/data/services';
import { getLocationBySlug, getAllLocations } from '@/data/locations';
import { getTestimonialsByLocation } from '@/data/testimonials';
import { heroImages } from '@/data/images';
import { MapPin, Phone, Mail, Clock, Building2, Home, Sun, Eye, Shield, Wind, Wrench, Zap } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-5 h-5" />,
  Home: <Home className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5" />,
  Eye: <Eye className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Wind: <Wind className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
};

export default function LocationPage() {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  const location = getLocationBySlug(locationSlug || '');
  const allLocations = getAllLocations();

  if (!location) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p className="text-lg text-muted-foreground">Location not found</p>
      </div>
    );
  }

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Bhairava Invisible Grills — Best in ${location.displayName}`,
    description: `Best invisible grills in ${location.displayName}. Strong, secure stainless steel grills for balconies and windows.`,
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
    areaServed: { '@type': 'City', name: location.displayName },
    url: location.canonicalUrl,
    openingHours: 'Mo-Sa 09:00-19:00',
  };

  const breadcrumbItems = [{ label: location.displayName, href: `/locations/${location.slug}` }];

  // Other locations for internal linking
  const otherLocations = allLocations.filter((loc) => loc.slug !== location.slug);

  return (
    <>
      <Helmet>
        <title>{location.metaTitle}</title>
        <meta name="description" content={location.metaDescription} />
        <link rel="canonical" href={location.canonicalUrl} />
        <meta property="og:title" content={location.metaTitle} />
        <meta property="og:description" content={location.metaDescription} />
        <meta property="og:url" content={location.canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
      </Helmet>

      <div>
        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={heroImages['invisible-grills']}
            alt={`Best invisible grills in ${location.displayName}`}
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(26,26,26,0.88) 40%, rgba(245,168,0,0.18) 100%)' }} />
          <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-4 pb-12">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-foreground mt-3">
              Invisible Grills <span className="text-primary">in {location.name}</span>
            </h1>
            <p className="text-secondary-foreground/80 text-sm md:text-base mt-2 max-w-2xl">{location.heroSubtitle}</p>
          </div>
        </section>

        {/* Intro */}
        <section className="section-light pt-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed text-center">{location.introText}</p>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-surface py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">
              Why {location.name} Residents Choose Bhairava
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {location.benefits.map((b) => (
                <div key={b.title} className="flex gap-3 p-4 bg-card rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                    {iconMap[b.icon] || <Building2 className="w-5 h-5" />}
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
              {location.trustMetrics.map((t) => (
                <div key={t.number} className="text-center">
                  <div className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-1">{t.number}</div>
                  <p className="text-secondary-foreground/60 text-sm">{t.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="section-light pt-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center mb-6">
              Our {location.name} Expertise
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center mb-8">{location.uniqueApproach}</p>

            {/* Service Areas */}
            <div className="bg-card p-6 rounded-lg shadow-sm mb-8">
              <h3 className="font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                We Serve All {location.name} Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {location.serviceAreas.map((area) => (
                  <span key={area} className="bg-secondary px-3 py-1 rounded-full text-sm font-medium text-white">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-secondary/20 p-6 rounded-lg">
              <h3 className="font-heading font-bold text-foreground mb-4">Contact Us for {location.name}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-foreground"><a href={`tel:${BUSINESS.phone}`} className="hover:text-primary">{BUSINESS.phone}</a></p>
                    <p className="text-foreground"><a href={`tel:${BUSINESS.phone2}`} className="hover:text-primary">{BUSINESS.phone2}</a></p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{BUSINESS.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Mon-Sat: 9 AM - 7 PM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="section-surface py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">Our Installation Process</h2>
            
            {/* Desktop */}
            <div className="hidden md:flex items-start justify-center">
              {['Free Enquiry', 'Site Visit', 'Custom Quote', 'Installation', 'Handover'].map((step, i) => (
                <div key={step} className="flex items-start">
                  <div className="flex flex-col items-center text-center min-w-[140px]">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-heading font-bold text-foreground text-sm">
                      {i + 1}
                    </div>
                    <span className="text-foreground text-sm mt-3">{step}</span>
                  </div>
                  {i < 4 && (
                    <div className="flex items-center" style={{ height: '40px' }}>
                      <div className="w-10 h-0.5 bg-primary/40 mx-1" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile */}
            <div className="flex md:hidden flex-col items-center">
              {['Free Enquiry', 'Site Visit', 'Custom Quote', 'Installation', 'Handover'].map((step, i) => (
                <div key={step} className="flex flex-col items-center">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-heading font-bold text-foreground text-sm mb-2">
                      {i + 1}
                    </div>
                    <span className="text-foreground text-sm">{step}</span>
                  </div>
                  {i < 4 && (
                    <div className="w-0.5 h-8 bg-primary/40 my-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services We Offer */}
        <section className="section-light pt-16">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">
              Our Services in {location.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {serviceCategories.map((category) => (
                <div key={category.slug} className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="font-heading font-bold text-foreground mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">Professional installation of {category.name.toLowerCase()} in {location.name}.</p>
                  <Link to={`/services/${category.subServices[0].slug}`} className="text-primary hover:underline font-medium text-sm">
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-surface">
          <div className="container mx-auto px-4 max-w-3xl">
            <FAQAccordion
              faqs={location.faqHighlights.map((faq) => ({
                question: faq.question,
                answer: faq.answer,
              }))}
            />
          </div>
        </section>

        {/* Testimonials */}
        <LocationTestimonials 
          locationName={location.displayName} 
          testimonials={getTestimonialsByLocation(location.slug)} 
        />

        {/* Other Locations */}
        {otherLocations.length > 0 && (
          <section className="section-light py-16">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">
                We Also Serve Other Andhra Pradesh Cities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {otherLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/locations/${loc.slug}`}
                    className="p-4 bg-card rounded-lg hover:shadow-md transition-shadow border border-border hover:border-primary"
                  >
                    <h3 className="font-heading font-bold text-foreground mb-2">{loc.displayName}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{loc.heroSubtitle}</p>
                    <span className="text-primary hover:underline font-medium text-sm">View details →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </div>
    </>
  );
}
