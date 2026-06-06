import serviceInvisibleGrills2 from '@/assets/service-invisible-grills-2.jpg';
import serviceInvisibleGrills3 from '@/assets/service-invisible-grills-3.jpg';
import serviceInvisibleGrills4 from '@/assets/service-invisible-grills-4.jpg';
import serviceInvisibleGrills5 from '@/assets/service-invisible-grills-5.jpg';
import serviceInvisibleGrills6 from '@/assets/service-invisible-grills-6.jpg';
import heroInvisibleGrills from '@/assets/hero-invisible-grills.jpg';
import serviceWindowGrills from '@/assets/service-window-grills.jpg';
import serviceWindowGrills2 from '@/assets/service-window-grills-2.jpg';
import serviceWindowGrills3 from '@/assets/service-window-grills-3.jpg';
import heroCeilingHangers from '@/assets/hero-ceiling-hangers.jpg';
import serviceCeilingHangers2 from '@/assets/service-ceiling-hangers-2.jpg';
import serviceCeilingHangers3 from '@/assets/service-ceiling-hangers-3.jpg';


export const heroImages: Record<string, string> = {
  'invisible-grills': serviceInvisibleGrills4,
  'ceiling-hangers': heroCeilingHangers,
};

// Flat service images structure by service slug
export const serviceImagesBySlug: Record<string, string[]> = {
  'installation': [heroInvisibleGrills, serviceInvisibleGrills5, serviceInvisibleGrills3],
  'balconies': [serviceInvisibleGrills4, serviceInvisibleGrills3, serviceInvisibleGrills6],
  'windows': [serviceWindowGrills, serviceWindowGrills2, serviceWindowGrills3],
  'ceiling-cloth-hangers': [serviceCeilingHangers3, heroCeilingHangers, serviceCeilingHangers2],
};

export const serviceCardImagesBySlug: Record<string, string> = {
  'installation': serviceInvisibleGrills2,
  'balconies': serviceInvisibleGrills5,
  'windows': serviceWindowGrills2,
  'ceiling-cloth-hangers': heroCeilingHangers,
};
