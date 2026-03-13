import { Link } from "react-router-dom";
import { serviceCategories, BUSINESS } from "@/data/services";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import MorsafeLogo from "@/assets/Morsafe-logo.jpg";

export default function Footer() {
  return (
    <footer className="section-dark py-[24px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link 
              to="/" 
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center gap-2 mb-4 inline-block"
            >
              <div className="bg-white rounded-md py-3 flex items-center justify-center shadow-md">
                <img 
                  src={MorsafeLogo} 
                  alt="MorSafe Logo" 
                  className="h-14 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-secondary-foreground/60 text-sm mb-4">
              Chennai's trusted provider of invisible grills, safety nets,
              sports nets, and ceiling cloth drying hangers.
            </p>
            <div className="flex flex-col gap-2 text-sm text-secondary-foreground/70">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" /> {BUSINESS.phone}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" /> {BUSINESS.email}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> {BUSINESS.address}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" /> {BUSINESS.hours}
              </span>
            </div>
          </div>

          {/* Services */}
          {serviceCategories.slice(0, 2).map((cat) => (
            <div key={cat.slug}>
              <h4 className="font-heading font-bold text-primary text-sm mb-4">
                {cat.name}
              </h4>
              <ul className="space-y-2">
                {cat.subServices.map((sub) => (
                  <li key={sub.slug}>
                    <Link
                      to={`/services/${cat.slug}/${sub.slug}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* More */}
          <div>
            {serviceCategories.slice(2).map((cat) => (
              <div key={cat.slug} className="mb-6">
                <h4 className="font-heading font-bold text-primary text-sm mb-3">
                  {cat.name}
                </h4>
                <ul className="space-y-2">
                  {cat.subServices.map((sub) => (
                    <li key={sub.slug}>
                      <Link
                        to={`/services/${cat.slug}/${sub.slug}`}
                        onClick={() => window.scrollTo(0, 0)}
                        className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="mt-4">
              <Link
                to="/about"
                onClick={() => window.scrollTo(0, 0)}
                className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors block mb-2"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors block mb-2"
              >
                Contact Us
              </Link>
              <Link
                to="/privacy-policy"
                onClick={() => window.scrollTo(0, 0)}
                className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors block"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 text-center">
          <p className="text-secondary-foreground/40 text-xs">
            © {new Date().getFullYear()} MorSafe — Exterior Safety Solutions.
            All rights reserved. Chennai, Tamil Nadu.
          </p>
          <p className="mt-3 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-foreground">
            Made with ❤️ in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
