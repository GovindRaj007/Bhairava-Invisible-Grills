import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAllFlatServices } from '@/data/services';
import { serviceCardImagesBySlug } from '@/data/images';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ServiceCategories() {
  const location = useLocation();
  const allServices = getAllFlatServices();

  return (
    <section id="services" className="py-8 md:py-12">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Our Services
          </span>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Complete Safety Solutions for Your Property
          </h2>
          <p className="text-lg text-muted-foreground">
            From invisible grills to ceiling hangers, we provide comprehensive 
            products tailored to your specific needs and requirements.
          </p>
        </div>

        {/* All Services - New card design */}
        <div className="flex flex-wrap gap-6 justify-center sm:justify-center md:justify-start lg:justify-start animate-fade-in">
          {allServices.map((serviceItem) => {
            const { category, service } = serviceItem;
            // Get image by service slug
            const cardImage = serviceCardImagesBySlug[service.slug];
            
            return (
              <div key={`${category.slug}-${service.slug}`} className="w-full sm:w-[18rem] md:w-76 lg:w-80 min-w-[18rem] max-w-[470px]">
                <Link
                  to={`/services/${service.slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="group relative overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col h-full"
                >
                  {/* Service Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={cardImage}
                      alt={service.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      width={400}
                      height={160}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(222,47%,11%,0.7)]" />
                    {/* Badge */}
                    <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                      Popular
                    </span>
                  </div>

                  {/* Content with gradient background */}
                  <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-5 flex flex-col flex-1">
                    {/* Title */}
                    <h3 className="mb-2 font-heading text-lg font-semibold text-white">
                      {service.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="mb-4 text-sm text-white/70 line-clamp-3">{service.description}</p>

                    {/* Features */}
                    <ul className="mb-4 space-y-1">
                      {service.benefits.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-white/60">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature.title}
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary mt-auto">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2">
              Request Free Site Visit
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
