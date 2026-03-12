import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { serviceCategories } from '@/data/services';
import { serviceCardImages } from '@/data/images';
import { Shield, ShieldCheck, Shirt, Trophy } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = { Shield, ShieldCheck, Shirt, Trophy };

export default function ServiceCategories() {
  const location = useLocation();
  const [active, setActive] = useState<string>(() => {
    const stored = sessionStorage.getItem('activeServiceCategory');
    if (stored) {
      sessionStorage.removeItem('activeServiceCategory');
      return stored;
    }
    return serviceCategories[0].slug;
  });

  // Check for category change via navigation
  useEffect(() => {
    const stored = sessionStorage.getItem('activeServiceCategory');
    if (stored) {
      setActive(stored);
      sessionStorage.removeItem('activeServiceCategory');
    }
  }, [location]);

  const activeCat = serviceCategories.find((c) => c.slug === active)!;

  return (
    <section id="services" className="section-light pt-16 md:pt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="golden-label mb-2 block">Our Services</span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Solutions Built Around Your Safety
          </h2>
        </div>

        {/* Category tabs - equal size cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {serviceCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Shield;
            const isActive = active === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => setActive(cat.slug)}
                className={`rounded-lg p-5 text-center transition-all duration-300 border-t-4 ${
                  isActive
                    ? 'bg-secondary border-primary shadow-lg scale-[1.02]'
                    : 'bg-secondary/60 border-transparent hover:border-primary/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                  isActive ? 'bg-primary/20' : 'bg-primary/10'
                }`}>
                  <Icon className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-primary/70'}`} />
                </div>
                <h3 className={`font-heading text-sm font-bold ${
                  isActive ? 'text-secondary-foreground' : 'text-secondary-foreground/70'
                }`}>
                  {cat.name}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active category services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in" key={active}>
          {activeCat.subServices.map((sub) => (
            <Link
              key={sub.slug}
              to={`/services/${activeCat.slug}/${sub.slug}`}
              className="group rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300 card-hover"
            >
              <div className="relative h-[14rem] overflow-hidden">
                <img
                  src={serviceCardImages[`${activeCat.slug}/${sub.slug}`]}
                  alt={sub.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={400}
                  height={200}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.75) 0%, transparent 100%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-heading text-sm font-bold text-secondary-foreground">{sub.name}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-3">{sub.description}</p>
                <span className="text-primary text-xs font-semibold">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
