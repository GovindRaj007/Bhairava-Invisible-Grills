import { Helmet } from 'react-helmet-async';
import { BUSINESS, serviceCategories } from '@/data/services';
import { Phone, Mail, Clock, CheckCircle, MapPin } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { useState } from 'react';
import { useScrollRestoration } from '@/hooks/useScrollRestoration';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

export default function Contact() {
  useScrollRestoration();
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });
  
  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
  });
  
  const { toast } = useToast();

  // Validation functions
  const isNameValid = (name: string) => {
    const trimmedName = name.trim();
    const letterCount = trimmedName.replace(/\s/g, '').length;
    return letterCount >= 7 && /^[a-zA-Z\s]+$/.test(trimmedName) && trimmedName.length > 0;
  };

  const isPhoneValid = (phone: string) => /^\d{10}$/.test(phone);

  const isEmailValid = (email: string) => {
    if (email.trim() === "") return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const isFormValid = 
    isNameValid(formData.name) && 
    isPhoneValid(formData.phone) && 
    isEmailValid(formData.email) &&
    formData.service !== "";

  // Form handlers
  const handleNameChange = (value: string) => {
    setFormData({...formData, name: value});
    
    if (touched.name) {
      if (value.trim().length === 0) {
        setErrors({...errors, name: ""});
      } else if (!isNameValid(value)) {
        setErrors({...errors, name: "Enter a valid full name"});
      } else {
        setErrors({...errors, name: ""});
      }
    }
  };

  const handleNameBlur = () => {
    setTouched({...touched, name: true});
    if (formData.name.trim().length > 0 && !isNameValid(formData.name)) {
      setErrors({...errors, name: "Enter a valid full name"});
    }
  };

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    const limitedDigits = digitsOnly.slice(0, 10);
    
    setFormData({...formData, phone: limitedDigits});
    
    if (touched.phone) {
      if (limitedDigits.length === 0) {
        setErrors({...errors, phone: ""});
      } else if (!isPhoneValid(limitedDigits)) {
        setErrors({...errors, phone: "Enter a valid 10-digit phone number"});
      } else {
        setErrors({...errors, phone: ""});
      }
    }
  };

  const handlePhoneBlur = () => {
    setTouched({...touched, phone: true});
    if (formData.phone.length > 0 && !isPhoneValid(formData.phone)) {
      setErrors({...errors, phone: "Enter a valid 10-digit phone number"});
    }
  };

  const handleEmailChange = (value: string) => {
    setFormData({...formData, email: value});
    
    if (touched.email) {
      if (value.trim().length === 0) {
        setErrors({...errors, email: ""});
      } else if (!isEmailValid(value)) {
        setErrors({...errors, email: "Enter a valid email address"});
      } else {
        setErrors({...errors, email: ""});
      }
    }
  };

  const handleEmailBlur = () => {
    setTouched({...touched, email: true});
    if (formData.email.trim().length > 0 && !isEmailValid(formData.email)) {
      setErrors({...errors, email: "Enter a valid email address"});
    } else {
      setErrors({...errors, email: ""});
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      toast({
        title: "Validation Error",
        description: "Please fill all required fields correctly.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://formspree.io/f/mdalzypl";
      form.style.display = "none";

      const fields = {
        name: formData.name.trim(),
        phone: formData.phone,
        email: formData.email.trim() || "no-email@provided.com",
        service: formData.service,
        message: formData.message.trim() || "",
      };

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);

      toast({
        title: "Success!",
        description: "Your enquiry has been submitted. We'll contact you within 2 hours.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
      setErrors({ name: "", phone: "", email: "" });
      setTouched({ name: false, phone: false, email: false });

      setTimeout(() => {
        form.submit();
      }, 1000);

    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again or contact us directly.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Bhairava - Best Invisible Grills Quote in Vizag</title>
        <meta name="description" content="Contact Bhairava Invisible Grills for a free quote on invisible grills and ceiling hangers in Visakhapatnam. Call or WhatsApp us near you today." />
        <link rel="canonical" href="https://bhairavainvisiblegrills.in/contact" />
        <meta property="og:title" content="Contact Bhairava Invisible Grills - Free Quote in Vizag" />
        <meta property="og:description" content="Get a free quote on invisible grills and ceiling hangers in Visakhapatnam. Contact Bhairava Invisible Grills now." />
        <meta property="og:url" content="https://bhairavainvisiblegrills.in/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="section-dark relative py-12 md:py-16">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container relative z-10 mx-auto px-4">
          <Breadcrumb items={[{ label: 'Contact' }]} />
          <h1 className="mt-4 font-heading text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Ready to protect your property? Get in touch for a free consultation and quote - no obligations.
          </p>
        </div>
      </section>

      {/* Contact & Form Section */}
      <section className="section-light relative py-8 md:py-12">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 shadow-lg md:p-8">
              <h2 className="mb-6 font-heading text-2xl font-bold text-white">Get Free Quote</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/90">Full Name *</Label>
                    <Input 
                      id="name" 
                      placeholder="Your full name" 
                      required 
                      value={formData.name}
                      onChange={(e) => handleNameChange(e.target.value)}
                      onBlur={handleNameBlur}
                      className={`bg-white/10 text-white placeholder:text-white/50 ${
                        errors.name 
                          ? "border-red-500 border-2" 
                          : touched.name && isNameValid(formData.name)
                          ? "border-green-500 border-2"
                          : "border-white/20"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-400 font-medium">{errors.name}</p>
                    )}
                    {!errors.name && touched.name && isNameValid(formData.name) && (
                      <p className="text-sm text-green-400 font-medium flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" /> Valid name
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white/90">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="10-digit mobile number" 
                      required 
                      value={formData.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      onBlur={handlePhoneBlur}
                      maxLength={10}
                      className={`bg-white/10 text-white placeholder:text-white/50 ${
                        errors.phone 
                          ? "border-red-500 border-2" 
                          : touched.phone && isPhoneValid(formData.phone)
                          ? "border-green-500 border-2"
                          : "border-white/20"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-400 font-medium">{errors.phone}</p>
                    )}
                    {!errors.phone && touched.phone && isPhoneValid(formData.phone) && (
                      <p className="text-sm text-green-400 font-medium flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" /> Valid phone number
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/90">Email Address (Optional)</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    value={formData.email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    onBlur={handleEmailBlur}
                    className={`bg-white/10 text-white placeholder:text-white/50 ${
                      errors.email 
                        ? "border-red-500 border-2" 
                        : touched.email && formData.email.trim().length > 0 && isEmailValid(formData.email)
                        ? "border-green-500 border-2"
                        : "border-white/20"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-400 font-medium">{errors.email}</p>
                  )}
                  {!errors.email && touched.email && formData.email.trim().length > 0 && isEmailValid(formData.email) && (
                    <p className="text-sm text-green-400 font-medium flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" /> Valid email
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-white/90">Service Required *</Label>
                  <Select 
                    value={formData.service} 
                    onValueChange={(value) => setFormData({...formData, service: value})}
                    required
                  >
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceCategories.map((cat) => (
                        <SelectItem key={cat.slug} value={cat.name}>{cat.name}</SelectItem>
                      ))}
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/90">Additional Details (Optional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your requirements" 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50" 
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={loading || !isFormValid}
                  className="w-full bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </Button>

                {!isFormValid && (touched.name || touched.phone || touched.email) && (
                  <p className="text-sm text-amber-400 text-center">
                    Please fill all required fields correctly to submit
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Get in Touch</h2>
                <p className="text-muted-foreground">Prefer to reach out directly? Use any of the methods below.</p>
              </div>

              <div className="space-y-4">
                {/* Call */}
                <a href={`tel:${BUSINESS.phone}`} data-track="call" className="flex items-center gap-4 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">Call Us (Primary)</p>
                    <p className="text-white/70">{BUSINESS.phone}</p>
                  </div>
                </a>

                {/* Call Secondary */}
                <a href={`tel:${BUSINESS.phone2}`} data-track="call-secondary" className="flex items-center gap-4 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">Call Us (Secondary)</p>
                    <p className="text-white/70">{BUSINESS.phone2}</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a href={`https://wa.me/${BUSINESS.whatsapp}`} data-track="whatsapp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/20">
                    <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">WhatsApp</p>
                    <p className="text-white/70">Chat with us instantly</p>
                  </div>
                </a>

                {/* Email */}
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-4 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-white/70">{BUSINESS.email}</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p className="text-white/70 text-sm">{BUSINESS.address}</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 shadow-lg">
                <h3 className="mb-4 font-heading text-lg font-semibold text-white">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-primary" />
                    <div className="text-white/70">
                      <p>{BUSINESS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="section-surface py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Our Service Locations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bhairava Invisible Grills serves all major cities across Andhra Pradesh. Find us in your city and get professional invisible grills installation.
            </p>
          </div>

          {/* Google Map Embed */}
          <div className="w-full rounded-xl overflow-hidden shadow-lg mb-12 h-[500px]">
            <iframe
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1939592!2d77.5946!3d16.9891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1625097600"
              title="Bhairava Invisible Grills Service Locations across Andhra Pradesh"
            />
          </div>

          {/* Location Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-card p-6 shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
              <h3 className="font-heading font-bold text-foreground mb-2">Visakhapatnam</h3>
              <p className="text-muted-foreground text-sm mb-3">Coastal city specializing in marine-grade installations. 500+ completed projects.</p>
              <a href="/locations/visakhapatnam" className="text-primary hover:underline text-sm font-medium">View details →</a>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
              <h3 className="font-heading font-bold text-foreground mb-2">Rajahmundry</h3>
              <p className="text-muted-foreground text-sm mb-3">River-facing home specialists with 200+ installations along Godavari.</p>
              <a href="/locations/rajahmundry" className="text-primary hover:underline text-sm font-medium">View details →</a>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
              <h3 className="font-heading font-bold text-foreground mb-2">Vijayawada</h3>
              <p className="text-muted-foreground text-sm mb-3">Fast urban installation service for apartments and complexes. 350+ projects.</p>
              <a href="/locations/vijayawada" className="text-primary hover:underline text-sm font-medium">View details →</a>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
              <h3 className="font-heading font-bold text-foreground mb-2">Guntur</h3>
              <p className="text-muted-foreground text-sm mb-3">Climate-adapted solutions for warm regions. 250+ satisfied families.</p>
              <a href="/locations/guntur" className="text-primary hover:underline text-sm font-medium">View details →</a>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
              <h3 className="font-heading font-bold text-foreground mb-2">Chittoor</h3>
              <p className="text-muted-foreground text-sm mb-3">Heritage-aware installations for traditional and modern homes. 180+ projects.</p>
              <a href="/locations/chittoor" className="text-primary hover:underline text-sm font-medium">View details →</a>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
              <h3 className="font-heading font-bold text-foreground mb-2">Tirupati</h3>
              <p className="text-muted-foreground text-sm mb-3">Sacred-space respecting professional service. 220+ residential installations.</p>
              <a href="/locations/tirupati" className="text-primary hover:underline text-sm font-medium">View details →</a>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
              <h3 className="font-heading font-bold text-foreground mb-2">Anantapur</h3>
              <p className="text-muted-foreground text-sm mb-3">Harsh-climate durable stainless steel solutions. 150+ projects in Rayalaseema.</p>
              <a href="/locations/anantapur" className="text-primary hover:underline text-sm font-medium">View details →</a>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
              <h3 className="font-heading font-bold text-foreground mb-2">All AP Cities</h3>
              <p className="text-muted-foreground text-sm mb-3">1,700+ total installations with expert teams across all Andhra Pradesh.</p>
              <a href="/locations" className="text-primary hover:underline text-sm font-medium">View all locations →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
