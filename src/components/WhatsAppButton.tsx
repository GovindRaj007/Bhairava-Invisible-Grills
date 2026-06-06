import { BUSINESS } from '@/data/services';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi%20Bhairava,%20I'd%20like%20to%20know%20more%20about%20invisible%20grills%20in%20Vizag.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-110"
      style={{ background: 'linear-gradient(135deg, #F5A800, #C98A00)', boxShadow: '0 4px 20px rgba(245,168,0,0.4)' }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-foreground" />
    </a>
  );
}
