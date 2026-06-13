import { Helmet } from 'react-helmet-async';
import Breadcrumb from '@/components/Breadcrumb';
import { useScrollRestoration } from '@/hooks/useScrollRestoration';
import { BUSINESS } from '@/data/services';

export default function PrivacyPolicy() {
  useScrollRestoration();
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Bhairava Invisible Grills</title>
        <meta name="description" content="Privacy policy for Bhairava Invisible Grills. Learn how we protect your personal information." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bhairavainvisiblegrills.in/privacy-policy" />
        <meta property="og:title" content="Privacy Policy - Bhairava Invisible Grills" />
        <meta property="og:description" content="Privacy policy for Bhairava Invisible Grills. We protect your personal information with appropriate security measures." />
        <meta property="og:url" content="https://bhairavainvisiblegrills.in/privacy-policy" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="section-dark py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-secondary-foreground mt-4">Privacy Policy</h1>
        </div>
      </div>
      <section className="section-light py-16">
          <div className="container mx-auto px-4 max-w-3xl prose prose-sm">
            <p className="text-muted-foreground">Last updated: March 2026</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-6 mb-3">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">We collect personal information you voluntarily provide when you contact us, request a quote, or use our services. This may include your name, phone number, email address, and service requirements.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-6 mb-3">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use your information solely to respond to your enquiries, provide quotes, schedule installations, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-6 mb-3">Data Security</h2>
            <p className="text-muted-foreground mb-4">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or disclosure.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-6 mb-3">Contact Us</h2>
            <p className="text-muted-foreground">If you have questions about this privacy policy, please contact us at contact@bhairavainvisiblegrills.in or call {BUSINESS.phone}.</p>
          </div>
        </section>
      </>
    );
  }

