import { BUSINESS } from '@/data/services';
import { Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 md:py-20" style={{ background: 'linear-gradient(135deg, #F5A800, #C98A00)' }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-foreground mb-4">
          Ready to Secure Your Home?
        </h2>
        <p className="text-foreground/80 mb-8 max-w-lg mx-auto">
          Get a free site visit and custom quote — no obligations, no hidden charges.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`tel:${BUSINESS.phone}`} className="btn-charcoal flex items-center gap-2">
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a
            href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi%20MorSafe,%20I'm%20interested%20in%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-foreground font-heading font-bold px-6 py-3 rounded-lg border-2 border-foreground/30 transition-all hover:border-foreground"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
