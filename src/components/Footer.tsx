import { Link } from "react-router-dom";
import { getAllFlatServices, BUSINESS } from "@/data/services";
import { getAllLocations } from "@/data/locations";
import { trackCallClick } from "@/lib/utils";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import BhairavaLogo from "@/assets/Bhairava-logo.jpg";

export default function Footer() {
  const allServices = getAllFlatServices();
  const allLocations = getAllLocations();

  const handleCallClick = () => {
    trackCallClick('footer');
  };

  return (
    <footer className="section-dark py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          
          {/* Column 1: Brand & Contact */}
          <div>
            <Link 
              to="/" 
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center gap-2 mb-4 inline-block"
            >
              <div className="bg-white rounded-md py-2 px-2 flex items-center justify-center shadow-md">
                <img 
                  src={BhairavaLogo} 
                  alt="Bhairava Invisible Grills Logo" 
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <h3 className="font-heading font-bold text-secondary-foreground mb-2">Bhairava</h3>
            <p className="text-secondary-foreground/60 text-xs mb-4 leading-relaxed">
              Andhra Pradesh's trusted provider of strong, secure invisible grills and ceiling cloth hangers.
            </p>
            <div className="flex flex-col gap-2 text-xs text-secondary-foreground/70 space-y-2">
              <a
                href={`tel:${BUSINESS.phone}`}
                onClick={handleCallClick}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-primary flex-shrink-0" /> 
                <span>{BUSINESS.phone}</span>
              </a>
              <a
                href={`tel:${BUSINESS.phone2}`}
                onClick={handleCallClick}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-primary flex-shrink-0" /> 
                <span>{BUSINESS.phone2}</span>
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-primary flex-shrink-0" /> 
                <span className="truncate">{BUSINESS.email}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" /> 
                <span className="text-xs leading-tight">{BUSINESS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" /> 
                <span>{BUSINESS.hours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-heading font-bold text-primary text-sm mb-5">Services</h4>
            <ul className="space-y-2">
              {allServices.map((serviceItem) => (
                <li key={`${serviceItem.category.slug}-${serviceItem.service.slug}`}>
                  <Link
                    to={`/services/${serviceItem.service.slug}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-secondary-foreground/70 hover:text-primary text-xs transition-colors"
                  >
                    {serviceItem.service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div>
            <h4 className="font-heading font-bold text-primary text-sm mb-5">Our Locations</h4>
            <ul className="space-y-2">
              {allLocations.slice(0, 5).map((location) => (
                <li key={location.slug}>
                  <Link
                    to={`/locations/${location.slug}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-secondary-foreground/70 hover:text-primary text-xs transition-colors"
                  >
                    {location.displayName}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/locations"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-secondary-foreground/70 hover:text-primary text-xs transition-colors font-medium"
                >
                  All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="font-heading font-bold text-primary text-sm mb-5">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-secondary-foreground/70 hover:text-primary text-xs transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-secondary-foreground/70 hover:text-primary text-xs transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-secondary-foreground/70 hover:text-primary text-xs transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 text-center">
          <p className="text-secondary-foreground/40 text-xs">
            © {new Date().getFullYear()} Bhairava Invisible Grills — Advanced Security.
            All rights reserved.
          </p>
          <p className="mt-3 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-foreground">
            Made with ❤️ in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
