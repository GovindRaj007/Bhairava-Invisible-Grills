import { Helmet } from 'react-helmet-async';
import { BUSINESS } from '@/data/services';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact MorSafe — Get a Free Quote in Chennai</title>
        <meta name="description" content="Contact MorSafe for a free quote on invisible grills, safety nets, sports nets, and ceiling hangers in Chennai. Call or WhatsApp us today." />
        <link rel="canonical" href="https://morsafe.in/contact" />
      </Helmet>

      <div className="section-dark py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Breadcrumb items={[{ label: 'Contact' }]} />
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-secondary-foreground mt-4">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-secondary-foreground/60 mt-2">Free site visit and custom quote — no obligations.</p>
          </div>
        </div>

        <section className="section-light py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Form */}
              <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-xl mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">We'll get back to you within 24 hours. For immediate assistance, call us directly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="font-heading text-xl font-bold text-foreground mb-4">Request a Free Quote</h2>
                    <input type="text" placeholder="Full Name" required className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary outline-none" />
                    <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary outline-none" />
                    <input type="email" placeholder="Email (optional)" className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary outline-none" />
                    <select required className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary outline-none">
                      <option value="">Select Service</option>
                      <option>Invisible Grills</option>
                      <option>Safety Nets</option>
                      <option>Ceiling Cloth Hangers</option>
                      <option>Sports Nets</option>
                    </select>
                    <textarea placeholder="Tell us about your requirement" rows={4} className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary outline-none resize-none" />
                    <button type="submit" className="btn-golden w-full text-center">Send Enquiry</button>
                  </form>
                )}
              </div>

              {/* Contact info + map */}
              <div className="flex flex-col gap-6">
                <div className="bg-secondary rounded-lg p-6">
                  <h3 className="font-heading font-bold text-secondary-foreground text-lg mb-4">Contact Details</h3>
                  <div className="space-y-3 text-secondary-foreground/70 text-sm">
                    <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary" /> {BUSINESS.phone}
                    </a>
                    <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                      <Mail className="w-5 h-5 text-primary" /> {BUSINESS.email}
                    </a>
                    <p className="flex items-center gap-3"><MapPin className="w-5 h-5 text-primary" /> {BUSINESS.address}</p>
                    <p className="flex items-center gap-3"><Clock className="w-5 h-5 text-primary" /> {BUSINESS.hours}</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden flex-1 min-h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.55843576!2d79.87893!3d13.04996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1"
                    width="100%" height="100%" style={{ border: 0, minHeight: 300 }} allowFullScreen loading="lazy" title="MorSafe Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
