import { useState } from 'react';
import { BUSINESS } from '@/data/services';
import { Phone, Mail, MapPin, Clock, Map } from 'lucide-react';

export default function ServiceAreaVisakhapatnam() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section className="section-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-secondary-foreground">
            Serving All of <span className="text-primary">Visakhapatnam</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden relative" style={{ minHeight: '400px' }}>
            {/* Map loading placeholder */}
            {!mapLoaded && (
              <div className="absolute inset-0 bg-surface-darker rounded-lg flex flex-col items-center justify-center gap-4 z-10">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Map className="w-8 h-8 text-primary" />
                </div>
                <p className="text-secondary-foreground/70 text-sm font-medium">Loading Map...</p>
                <div className="w-32 h-1 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '60%' }} />
                </div>
              </div>
            )}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d378882.14436215!2d82.20!3d17.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d00a7f5f5f5f5%3A0x1234567890ab!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bhairava Invisible Grills Visakhapatnam Service Area"
              onLoad={() => setMapLoaded(true)}
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-surface-darker rounded-lg p-6 mb-6">
              <h3 className="font-heading font-bold text-lg mb-4">
                <span className="text-secondary-foreground">Bhairava</span>
                <span className="text-primary"> Invisible Grills</span>
              </h3>
              <div className="space-y-3 text-secondary-foreground/70 text-sm">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {BUSINESS.address}</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> <a href={`tel:${BUSINESS.phone}`} className="hover:text-primary">{BUSINESS.phone}</a></p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> <a href={`mailto:${BUSINESS.email}`} className="hover:text-primary">{BUSINESS.email}</a></p>
                <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {BUSINESS.hours}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {BUSINESS.areas.map((area) => (
                <span key={area} className="golden-pill">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
