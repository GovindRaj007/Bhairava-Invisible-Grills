import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { serviceCategories, BUSINESS } from '@/data/services';
import { Menu, X, Phone, ChevronDown, ChevronRight } from 'lucide-react';
import MorsafeLogo from '@/assets/Morsafe-logo.jpg';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const location = useLocation();
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setServicesOpen(false);
    setExpandedCategory(null);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? 'bg-card/95 backdrop-blur-md shadow-lg' : 'bg-card/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-2 relative z-[120] bg-transparent"
          >
            <img 
              src={MorsafeLogo} 
              alt="MorSafe Logo" 
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-foreground hover:text-primary text-sm font-medium transition-colors">
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
              ref={megaRef}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary text-sm font-medium transition-colors">
                Services <ChevronDown className="w-3 h-3" />
              </button>
              {megaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[700px]">
                  <div className="bg-secondary rounded-lg shadow-xl border border-primary/10 p-6 grid grid-cols-4 gap-6">
                    {serviceCategories.map((cat) => (
                      <div key={cat.slug}>
                        <h4 className="text-primary font-heading font-bold text-sm mb-3">{cat.name}</h4>
                        <ul className="space-y-2">
                          {cat.subServices.map((sub) => (
                            <li key={sub.slug}>
                              <Link
                                to={`/services/${cat.slug}/${sub.slug}`}
                                onClick={() => window.scrollTo(0, 0)}
                                className="text-secondary-foreground/70 hover:text-primary text-xs transition-colors"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-foreground hover:text-primary text-sm font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-foreground hover:text-primary text-sm font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hidden lg:block btn-golden text-sm py-2 px-5">
            Get Free Quote
          </Link>

          {/* Mobile Menu Trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button 
                className="text-primary relative z-[120]"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0 flex flex-col bg-background pt-12">
              {/* Accessibility - Hidden but available for screen readers */}
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Browse MorSafe services and pages</SheetDescription>
              
              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto px-6 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* Home */}
                <Link 
                  to="/" 
                  onClick={() => {
                    setMobileOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="block py-4 pt-[2rem] text-foreground font-medium hover:text-primary transition-colors"
                >
                  Home
                </Link>

                {/* Services */}
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full py-4 flex items-center justify-between text-foreground font-medium hover:text-primary transition-colors"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {servicesOpen && (
                    <div>
                      {serviceCategories.map((category) => (
                        <div key={category.slug}>
                          {/* Category Button */}
                          <button
                            onClick={() => {
                              // Close current category if same one is clicked, otherwise open the new one
                              if (expandedCategory === category.slug) {
                                setExpandedCategory(null);
                              } else {
                                setExpandedCategory(category.slug);
                              }
                            }}
                            className={`w-full px-2 py-3 flex items-center justify-between text-sm transition-colors ${
                              expandedCategory === category.slug
                                ? 'text-primary font-semibold'
                                : 'text-foreground hover:text-primary'
                            }`}
                          >
                            <span>{category.name}</span>
                            <ChevronRight className={`w-4 h-4 transition-transform ${expandedCategory === category.slug ? 'rotate-90' : ''}`} />
                          </button>

                          {/* Sub-services */}
                          {expandedCategory === category.slug && (
                            <div>
                              {category.subServices.map((subService) => (
                                <Link
                                  key={subService.slug}
                                  to={`/services/${category.slug}/${subService.slug}`}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    window.scrollTo(0, 0);
                                  }}
                                  className="block px-6 py-2.5 text-xs text-yellow-700 hover:text-yellow-600 transition-colors font-medium"
                                >
                                  {subService.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* About */}
                <Link 
                  to="/about" 
                  onClick={() => {
                    setMobileOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="block py-4 text-foreground font-medium hover:text-primary transition-colors"
                >
                  About
                </Link>

                {/* Contact */}
                <Link 
                  to="/contact" 
                  onClick={() => {
                    setMobileOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="block py-4 text-foreground font-medium hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* CTA Buttons - Fixed at bottom */}
              <div className="bg-background p-6 space-y-2 w-full">
                <a 
                  href={`tel:${BUSINESS.phone}`} 
                  className="btn-golden w-full block text-center text-sm font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-charcoal w-full block text-center text-sm font-semibold py-3 rounded-lg transition-all hover:shadow-lg"
                >
                  WhatsApp
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
