import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getAllLocations } from '@/data/locations';
import { trackCallClick } from '@/lib/utils';
import { MapPin, Phone, Mail } from 'lucide-react';
import { BUSINESS } from '@/data/services';
import Breadcrumb from '@/components/Breadcrumb';

export default function LocationsIndex() {
  const locations = getAllLocations();

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    description: 'Bhairava Invisible Grills serves invisible grills and ceiling cloth hangers across Andhra Pradesh locations.',
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
    areaServed: [
      { '@type': 'City', name: 'Visakhapatnam' },
      { '@type': 'City', name: 'Rajahmundry' },
      { '@type': 'City', name: 'Vijayawada' },
      { '@type': 'City', name: 'Guntur' },
      { '@type': 'City', name: 'Chittoor' },
      { '@type': 'City', name: 'Tirupati' },
      { '@type': 'City', name: 'Anantapur' },
    ],
    url: 'https://bhairavainvisiblegrills.in/locations',
  };

  return (
    <>
      <Helmet>
        <title>Invisible Grills in Andhra Pradesh | Bhairava Service Locations</title>
        <meta
          name="description"
          content="Find Bhairava Invisible Grills near you in Visakhapatnam, Rajahmundry, Vijayawada, Guntur, Chittoor, Tirupati, and Anantapur. Strong, secure stainless steel grills and ceiling hangers."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bhairavainvisiblegrills.in/locations" />
        <meta property="og:title" content="Invisible Grills Across Andhra Pradesh | Bhairava" />
        <meta property="og:description" content="Invisible grills in AP cities — Vizag, Rajahmundry, Vijayawada, Guntur, Chittoor, Tirupati, Anantapur." />
        <meta property="og:url" content="https://bhairavainvisiblegrills.in/locations" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
      </Helmet>

      <div>
        {/* Hero */}
        <section className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(26,26,26,0.85) 40%, rgba(245,168,0,0.15) 100%)' }} />
          <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-4 pb-12">
            <Breadcrumb items={[{ label: 'All Locations' }]} />
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-foreground mt-3">
              Best Invisible Grills Across <span className="text-primary">Andhra Pradesh</span>
            </h1>
            <p className="text-secondary-foreground/80 text-sm md:text-base mt-2">
              Serving Vizag, Rajahmundry, Vijayawada, Guntur, Chittoor, Tirupati, and Anantapur
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="section-light py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed text-center">
              Bhairava Invisible Grills is Andhra Pradesh's trusted provider of strong, secure invisible grills and ceiling cloth hangers. With expertise across all major AP cities, we bring proven safety solutions tailored to each location's unique climate and architectural needs.
            </p>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="section-surface py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center mb-12">
              Find Bhairava Near You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  to={`/locations/${location.slug}`}
                  className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all hover:border-primary border border-border"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {location.displayName}
                      </h3>
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{location.heroSubtitle}</p>

                    <div className="space-y-2 mb-5">
                      <p className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span className="flex-1">{location.trustMetrics[0].number} {location.trustMetrics[0].label.toLowerCase()}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-primary font-bold">•</span> Free site visit & quote
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <span className="text-primary group-hover:translate-x-1 transition-transform font-medium text-sm inline-flex items-center gap-1">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Multiple Locations */}
        <section className="section-light py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center mb-8">
              Local Expertise, Andhra Pradesh-Wide
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-bold text-foreground mb-2">Climate-Adapted Solutions</h3>
                <p className="text-muted-foreground">
                  Each AP location has unique climate challenges — from Visakhapatnam's coastal humidity to Anantapur's semi-arid environment. We tailor our materials and installation techniques for each region.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-2">Local Installation Teams</h3>
                <p className="text-muted-foreground">
                  Our teams in each city provide same-day site visits, rapid turnaround, and local after-sales support. When you need service, help is nearby.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-2">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Across all 7 locations, we've completed 1,700+ successful installations with consistent 4.8-4.9 ratings. Your neighbors have trusted us — now it's your turn.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="section-surface py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">
              Consistent Excellence Across All Locations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-bold text-foreground mb-3">10-Year Warranty</h3>
                <p className="text-muted-foreground text-sm">Grills warranty on all installations across AP — materials and workmanship guaranteed.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-bold text-foreground mb-3">SS 316 Stainless Steel</h3>
                <p className="text-muted-foreground text-sm">Marine-grade material proven in diverse AP climates — no rust, no corrosion.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-bold text-foreground mb-3">Free Site Visit</h3>
                <p className="text-muted-foreground text-sm">No obligation assessment and custom quotation in any AP location.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-bold text-foreground mb-3">Local Support</h3>
                <p className="text-muted-foreground text-sm">After-sales support with responsive teams in your city.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-light py-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">
              Contact Bhairava Today
            </h2>
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg shadow-sm flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">Call Us</h3>
                  <p className="text-foreground text-lg"><a href={`tel:${BUSINESS.phone}`} onClick={() => trackCallClick('locations_index')} className="hover:text-primary">{BUSINESS.phone}</a></p>
                  <p className="text-foreground text-lg"><a href={`tel:${BUSINESS.phone2}`} onClick={() => trackCallClick('locations_index')} className="hover:text-primary">{BUSINESS.phone2}</a></p>
                  <p className="text-muted-foreground text-sm mt-1">Available Mon-Sat, 9 AM - 7 PM</p>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">Email Us</h3>
                  <p className="text-foreground">{BUSINESS.email}</p>
                  <p className="text-muted-foreground text-sm mt-1">We respond within 2 hours</p>
                </div>
              </div>

              <div className="bg-secondary/20 p-6 rounded-lg text-center">
                <p className="text-foreground font-medium mb-3">Choose Your Location</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {locations.map((location) => (
                    <Link
                      key={location.slug}
                      to={`/locations/${location.slug}`}
                      className="px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary font-medium text-xs rounded transition-colors"
                    >
                      {location.displayName}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
