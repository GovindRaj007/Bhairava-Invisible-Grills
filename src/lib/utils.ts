import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// GTM Event Tracking
export interface GTMEventParams {
  event: string;
  eventCategory?: string;
  eventAction?: string;
  eventLabel?: string;
  eventValue?: number;
  [key: string]: any;
}

/**
 * Push an event to Google Tag Manager dataLayer
 */
export function trackGTMEvent(params: GTMEventParams) {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push(params);
  }
}

/**
 * Track WhatsApp button clicks
 */
export function trackWhatsAppClick(source: string) {
  trackGTMEvent({
    event: 'whatsapp_click',
    eventCategory: 'engagement',
    eventAction: 'whatsapp_contact',
    eventLabel: source,
  });
}

/**
 * Track Phone call button clicks
 */
export function trackCallClick(source: string) {
  trackGTMEvent({
    event: 'call_click',
    eventCategory: 'engagement',
    eventAction: 'phone_contact',
    eventLabel: source,
  });
}
