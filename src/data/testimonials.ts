export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating?: number;
  service?: string;
}

export interface LocationTestimonials {
  locationSlug: string;
  locationName: string;
  testimonials: Testimonial[];
}

export const locationTestimonials: LocationTestimonials[] = [
  {
    locationSlug: 'visakhapatnam',
    locationName: 'Visakhapatnam',
    testimonials: [
      {
        name: 'Alaguvelu Gopal.',
        location: 'Vizag Central',
        text: 'Bhairava installed invisible grills on our 12th-floor balcony. The view is crystal clear, and my kids are safe. Excellent work!',
        rating: 5,
        service: 'Invisible Grills - Balcony',
      },
      {
        name: 'K.Venkataraman.',
        location: 'Visakhapatnam',
        text: 'Needed ceiling cloth hangers in our small apartment. Bhairava team installed it professionally within a day. Best investment!',
        rating: 5,
        service: 'Ceiling Cloth Hangers',
      },
      {
        name: 'S.Selvi.',
        location: 'Visakhapatnam',
        text: 'The ceiling cloth hanger is a game changer. So much space saved in our utility area. Highly recommend Bhairava.',
        rating: 5,
        service: 'Ceiling Cloth Hangers',
      },
      {
        name: 'Mudaliar Krishnamurthi.',
        location: 'Visakhapatnam',
        text: 'Invisible grills for all our windows — best investment for child safety in Vizag. Bhairava delivered beyond expectations.',
        rating: 5,
        service: 'Invisible Grills - Windows',
      },
    ],
  },
  {
    locationSlug: 'rajahmundry',
    locationName: 'Rajahmundry',
    testimonials: [
      {
        name: 'Rajesh Kumar.',
        location: 'Rajahmundry City',
        text: 'Living in a river-facing villa, I was worried about security without obstruction. Bhairava\'s invisible grills were the perfect solution. Crystal clear river views, perfect safety!',
        rating: 5,
        service: 'Invisible Grills - River View',
      },
      {
        name: 'Priya Sharma.',
        location: 'Godavari Nagar',
        text: 'The humidity here is intense, but the stainless steel grills installed by Bhairava show zero rust even after 6 months. Outstanding quality!',
        rating: 5,
        service: 'Invisible Grills - Marine Grade',
      },
      {
        name: 'Dr. Anand Rao.',
        location: 'Railway New Colony',
        text: 'Quick installation, excellent customer service, and the workmanship is impeccable. They understood Rajahmundry\'s unique climate needs perfectly.',
        rating: 5,
        service: 'Invisible Grills - Installation',
      },
      {
        name: 'Divya Reddy.',
        location: 'Lakshmi Puram',
        text: 'My kids felt safer after invisible grill installation. No more worries, and the view from our balcony is still beautiful. Bhairava is the best!',
        rating: 5,
        service: 'Invisible Grills - Safety',
      },
    ],
  },
  {
    locationSlug: 'vijayawada',
    locationName: 'Vijayawada',
    testimonials: [
      {
        name: 'Vikram Singh.',
        location: 'Vijayawada City Center',
        text: 'Got invisible grills installed in our high-rise apartment complex. The speed of service was amazing — quoted, approved, and installed within 2 days!',
        rating: 5,
        service: 'Invisible Grills - Installation',
      },
      {
        name: 'Neha Verma.',
        location: 'Bhavanipuram',
        text: 'As a working professional, I needed quick service without quality compromise. Bhairava delivered exactly that. Highly professional team!',
        rating: 5,
        service: 'Invisible Grills - Urban',
      },
      {
        name: 'Suresh Nair.',
        location: 'Patamata',
        text: 'Multiple quotes for my apartment building, but Bhairava\'s pricing, quality, and service were unbeatable. They also coordinated seamlessly with our society management.',
        rating: 5,
        service: 'Invisible Grills - Commercial',
      },
      {
        name: 'Rajeshwari Devi.',
        location: 'Prakasam Nagar',
        text: 'The installation team was punctual, clean, and professional. My invisible grills look like part of the architecture. Very impressive work!',
        rating: 5,
        service: 'Invisible Grills - Aesthetic',
      },
    ],
  },
  {
    locationSlug: 'guntur',
    locationName: 'Guntur',
    testimonials: [
      {
        name: 'Ramakrishna.',
        location: 'Guntur City',
        text: 'Bhairava understood our home\'s traditional architecture and installed modern invisible grills that complement perfectly. Beautiful and secure!',
        rating: 5,
        service: 'Invisible Grills - Custom',
      },
      {
        name: 'Lakshmi S.',
        location: 'Arundelpet',
        text: 'Hot climate in Guntur is tough on materials. These stainless steel grills from Bhairava are still shining after a year. Zero maintenance, maximum durability!',
        rating: 5,
        service: 'Invisible Grills - Durable',
      },
      {
        name: 'Mohan Babu.',
        location: 'Krishna Nagar',
        text: 'Roof ceiling hangers gave us so much extra space in our compact Guntur home. Game changer for storage! Professional installation too.',
        rating: 5,
        service: 'Ceiling Cloth Hangers',
      },
      {
        name: 'Sridevi.',
        location: 'Guntur',
        text: 'The team explained everything clearly, addressed my concerns, and delivered exactly as promised. My kids are safe and I sleep peacefully.',
        rating: 5,
        service: 'Invisible Grills - Safety',
      },
    ],
  },
  {
    locationSlug: 'chittoor',
    locationName: 'Chittoor',
    testimonials: [
      {
        name: 'Sai Kumar.',
        location: 'Chittoor City',
        text: 'Living near the Tirupati pilgrimage area, we get lots of guests. Invisible grills provide security without making our home look fortified. Perfect balance!',
        rating: 5,
        service: 'Invisible Grills - Aesthetic',
      },
      {
        name: 'Sarada Devi.',
        location: 'Raya Puram',
        text: 'The installation was done with minimal disruption. Bhairava\'s team was respectful and efficient. Very happy with the result!',
        rating: 5,
        service: 'Invisible Grills - Installation',
      },
      {
        name: 'Prakash Reddy.',
        location: 'A. Rangapuram',
        text: 'Great service from inquiry to installation. They even provided after-care tips. Would definitely recommend to fellow Chittoor residents!',
        rating: 5,
        service: 'Invisible Grills - Service',
      },
      {
        name: 'Anjali.',
        location: 'New Town',
        text: 'My apartment building needed safety solutions for multiple units. Bhairava coordinated everything perfectly with bulk pricing. Excellent experience!',
        rating: 5,
        service: 'Invisible Grills - Bulk',
      },
    ],
  },
  {
    locationSlug: 'tirupati',
    locationName: 'Tirupati',
    testimonials: [
      {
        name: 'Narasimhan.',
        location: 'Tirupati City',
        text: 'As a permanent resident and pilgrim hostel owner, security is crucial. Bhairava\'s invisible grills provide that without compromising the sacred atmosphere.',
        rating: 5,
        service: 'Invisible Grills - Institutional',
      },
      {
        name: 'Savitri Amma.',
        location: 'Tirumala',
        text: 'The installation team was respectful of our home\'s sanctity and completed work on time. Very pleased with Bhairava\'s professionalism!',
        rating: 5,
        service: 'Invisible Grills - Residential',
      },
      {
        name: 'Venkatesh.',
        location: 'Chandragiri',
        text: 'Seasonal temperature variations here are intense, but these SS 316 grills handle everything perfectly. Truly durable and reliable!',
        rating: 5,
        service: 'Invisible Grills - Climate',
      },
      {
        name: 'Lakshmi Narasimhan.',
        location: 'Tirupati',
        text: 'Free site visit, transparent pricing, and no hidden charges. Bhairava\'s integrity is as strong as their products. Highly recommended!',
        rating: 5,
        service: 'Invisible Grills - Value',
      },
    ],
  },
  {
    locationSlug: 'anantapur',
    locationName: 'Anantapur',
    testimonials: [
      {
        name: 'Farmer Ravi.',
        location: 'Anantapur City',
        text: 'The harsh sun and dust in Anantapur is brutal on most materials. Bhairava\'s grills still look new after the intense season. Best choice for Rayalaseema!',
        rating: 5,
        service: 'Invisible Grills - Climate',
      },
      {
        name: 'Priya Rao.',
        location: 'Dhone',
        text: 'Quality materials, skilled installation, and fair pricing. Bhairava brought professional safety solutions to our small Anantapur town beautifully.',
        rating: 5,
        service: 'Invisible Grills - Community',
      },
      {
        name: 'Ramesh.',
        location: 'Cantonment Area',
        text: 'The installation was quick and clean. Team cleaned up perfectly after finishing. Very professional approach throughout the project!',
        rating: 5,
        service: 'Invisible Grills - Installation',
      },
      {
        name: 'Sudha.',
        location: 'Anantapur',
        text: 'My home now feels safer and the view is unobstructed. Amazing invisible grills that are invisible in the best way! Bhairava deserves all praise.',
        rating: 5,
        service: 'Invisible Grills - Result',
      },
    ],
  },
];

export function getTestimonialsByLocation(locationSlug: string): Testimonial[] {
  const location = locationTestimonials.find((loc) => loc.locationSlug === locationSlug);
  return location ? location.testimonials : [];
}

export function getAllTestimonials(): Testimonial[] {
  return locationTestimonials.flatMap((loc) => loc.testimonials);
}
