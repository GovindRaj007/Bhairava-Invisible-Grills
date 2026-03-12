import { useRef, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Alaguvelu Gopal.', location: 'Anna Nagar', text: 'MorSafe installed invisible grills on our 12th-floor balcony. The view is untouched, and my kids are safe. Excellent work!' },
  { name: 'K.Venkataraman.', location: 'OMR', text: 'We had a serious pigeon problem. The MorSafe team installed nets within a day. Clean, professional, and affordable.' },
  { name: 'S.Selvi.', location: 'Velachery', text: 'The ceiling cloth hanger is a game changer. So much space saved in our utility area. Highly recommend MorSafe.' },
  { name: 'Arun D.', location: 'T. Nagar', text: 'Got terrace cricket nets installed for my son. The quality is top-notch and the installation was quick and clean.' },
  { name: 'V.Deepa.', location: 'Adyar', text: 'Safety nets for our duct area were installed perfectly. The team was punctual and pricing was transparent.' },
  { name: 'Mudaliar Krishnamurthi.', location: 'Tambaram', text: 'Invisible grills for all our windows — best investment for child safety. MorSafe delivered beyond expectations.' },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 30) {
      scrollRef.current.scrollBy({ left: diff > 0 ? 300 : -300, behavior: 'smooth' });
    }
  };

  return (
    <section className="section-surface py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="golden-label mb-2 block">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            What Chennai Families Say
          </h2>
        </div>
        <div
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-6 shadow-sm border-t-2 border-primary flex-shrink-0 w-[300px] sm:w-[340px] snap-start"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-sm mb-4 italic">"{t.text}"</p>
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
