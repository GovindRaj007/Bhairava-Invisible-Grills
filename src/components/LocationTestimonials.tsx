import { useRef } from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';

interface LocationTestimonialsProps {
  locationName: string;
  testimonials: Testimonial[];
}

export default function LocationTestimonials({ locationName, testimonials }: LocationTestimonialsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchRef = useRef({ startX: 0, startTime: 0 });

  const handleTouchStart = (e: React.TouchEvent) => {
    touchRef.current.startX = e.touches[0].clientX;
    touchRef.current.startTime = Date.now();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;

    const endX = e.changedTouches[0].clientX;
    const endTime = Date.now();
    const distance = touchRef.current.startX - endX;
    const duration = endTime - touchRef.current.startTime;

    // Minimum swipe distance (40px) and not a long drag (< 800ms)
    if (Math.abs(distance) > 40 && duration < 800) {
      const scrollAmount = distance > 0 ? 340 : -340; // Card width + gap

      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="section-surface pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="golden-label mb-2 block">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            What {locationName} Customers Say
          </h2>
        </div>
        <div
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-6 shadow-sm border-t-2 border-primary flex-shrink-0 w-[300px] sm:w-[340px] snap-start transition-shadow hover:shadow-md"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-sm mb-2 italic">"{t.text}"</p>
              {t.service && (
                <p className="text-muted-foreground text-xs mb-3">Service: {t.service}</p>
              )}
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-foreground text-sm">{t.name}</span>
                <span className="golden-pill text-[10px]">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
