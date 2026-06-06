import { Building2, Home, Sun, Eye, Wind, Wrench, Shield, Zap } from 'lucide-react';

export interface LocationData {
  id: string;
  name: string;
  displayName: string;
  slug: string;
  region: string;
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  introText: string;
  benefits: { icon: string; title: string; description: string }[];
  trustMetrics: { number: string; label: string }[];
  uniqueApproach: string;
  serviceAreas: string[];
  faqHighlights: { question: string; answer: string }[];
}

export const locations: LocationData[] = [
  {
    id: 'visakhapatnam',
    name: 'Visakhapatnam',
    displayName: 'Visakhapatnam (Vizag)',
    slug: 'visakhapatnam',
    region: 'Andhra Pradesh',
    heroTitle: 'Best Invisible Grills in Vizag',
    heroSubtitle: 'Strong, Secure Window & Balcony Grills for Coastal Living',
    metaTitle: 'Best Invisible Grills in Visakhapatnam (Vizag) | Bhairava',
    metaDescription: 'Best invisible grills in Visakhapatnam. Strong, secure stainless steel grills for balconies and windows. Ceiling cloth hangers. Free quote near you. Call now.',
    canonicalUrl: 'https://bhairavainvisiblegrills.in/visakhapatnam',
    introText: `Visakhapatnam's rapidly growing skyline of high-rise apartments, sea-facing condominiums, and modern villas demands strong, secure safety solutions that don't compromise on aesthetics. Bhairava brings the best invisible grills and ceiling cloth hangers to homes and buildings across every Vizag neighborhood.`,
    benefits: [
      { icon: 'Building2', title: 'High-Rise Apartments', description: 'Essential safety for Visakhapatnam\'s growing skyline of multi-story buildings.' },
      { icon: 'Sun', title: 'Coastal Climate Ready', description: 'Marine-grade SS 316 steel resists Vizag\'s humid coastal environment.' },
      { icon: 'Eye', title: 'Unobstructed Views', description: 'Enjoy sea-facing and city views without visual barriers.' },
      { icon: 'Shield', title: 'Child & Pet Safety', description: 'Complete fall prevention for families in high-rise homes.' },
      { icon: 'Wind', title: 'Full Ventilation', description: 'Natural airflow maintained — no stuffy enclosed spaces.' },
      { icon: 'Wrench', title: 'Zero Maintenance', description: 'No painting, no rusting — built to last in Vizag weather.' },
    ],
    trustMetrics: [
      { number: '500+', label: 'Installations in Visakhapatnam' },
      { number: 'Warranty-based', label: 'Warranty on All Work' },
      { number: '4.9/5', label: 'Customer Rating' },
      { number: 'Same Day', label: 'Free Site Visit' },
    ],
    uniqueApproach: 'We specialize in Visakhapatnam\'s coastal requirements with marine-grade materials and installation expertise refined across 500+ local installations.',
    serviceAreas: ['Visakhapatnam', 'Vizag', 'Waltair', 'Dwaraka Nagar', 'Gajuwaka', 'All areas near me'],
    faqHighlights: [
      { question: 'Do you serve all areas of Visakhapatnam?', answer: 'Yes, Bhairava serves all areas of Visakhapatnam (Vizag) including Waltair, Dwaraka Nagar, Gajuwaka, and surrounding neighborhoods.' },
      { question: 'Are your products suitable for Visakhapatnam\'s climate?', answer: 'Absolutely. We use SS 316 marine-grade stainless steel specifically chosen for coastal environments like Vizag. All materials are UV-treated and corrosion-resistant.' },
      { question: 'How quickly can you install invisible grills in Vizag?', answer: 'Most standard installations are completed within a single day. We offer same-day site visits and can schedule installation within 2-3 days of confirmation.' },
      { question: 'Do you offer free site visits in Visakhapatnam?', answer: 'Yes. We provide free site visits across Visakhapatnam for assessment, measurement, and quotation — with zero obligation.' },
    ],
  },
  {
    id: 'rajahmundry',
    name: 'Rajahmundry',
    displayName: 'Rajahmundry',
    slug: 'rajahmundry',
    region: 'Andhra Pradesh',
    heroTitle: 'Invisible Grills in Rajahmundry',
    heroSubtitle: 'Premium Safety Solutions for East Godavari Homes',
    metaTitle: 'Best Invisible Grills in Rajahmundry | Bhairava Invisible Grills',
    metaDescription: 'Invisible grills in Rajahmundry. Strong, secure stainless steel grills for balconies and windows. Professional installation near you. Free site visit.',
    canonicalUrl: 'https://bhairavainvisiblegrills.in/rajahmundry',
    introText: `Rajahmundry, nestled along the Godavari River, combines traditional charm with modern urban growth. Bhairava brings strong, secure invisible grills to Rajahmundry's residential apartments, colonial villas, and riverfront homes. Our marine-grade stainless steel construction ensures durability even in Rajahmundry's humid climate.`,
    benefits: [
      { icon: 'Building2', title: 'River-Facing Homes', description: 'Secure protection for Rajahmundry\'s riverside villas and apartments with unobstructed river views.' },
      { icon: 'Sun', title: 'Climate Resilient', description: 'SS 316 construction handles Rajahmundry\'s humidity and seasonal variations perfectly.' },
      { icon: 'Eye', title: 'Heritage Respect', description: 'Modern invisible grills complement Rajahmundry\'s architectural heritage.' },
      { icon: 'Shield', title: 'Family Protection', description: 'Complete safety for multi-generational homes in Rajahmundry.' },
      { icon: 'Wind', title: 'Godavari Breeze', description: 'Full ventilation maintained for natural airflow across homes.' },
      { icon: 'Wrench', title: 'Low Maintenance', description: 'No rust or degradation even with river proximity.' },
    ],
    trustMetrics: [
      { number: '200+', label: 'Installations in Rajahmundry' },
      { number: '10-Year', label: 'Warranty on Grills' },
      { number: '4.8/5', label: 'Local Rating' },
      { number: '2-Days', label: 'Average Turnaround' },
    ],
    uniqueApproach: 'Rajahmundry\'s unique geography demands river-resistant materials and specialized installation techniques we\'ve perfected over 200+ local projects.',
    serviceAreas: ['Rajahmundry City', 'Godavari Nagar', 'Railway New Colony', 'Lakshmi Puram', 'All Rajahmundry areas'],
    faqHighlights: [
      { question: 'Do you serve all areas of Rajahmundry?', answer: 'Yes, we serve the entire Rajahmundry city including Godavari Nagar, Railway New Colony, Lakshmi Puram, and surrounding areas.' },
      { question: 'Are invisible grills suitable for Rajahmundry\'s river climate?', answer: 'Absolutely. Our SS 316 marine-grade steel is specifically designed for humid, river-adjacent environments like Rajahmundry.' },
      { question: 'How do invisible grills protect river-facing homes?', answer: 'They provide robust safety without obstructing your precious river views — perfect for Rajahmundry\'s scenic locations.' },
      { question: 'What\'s the installation timeline in Rajahmundry?', answer: 'We typically complete installations within 2-3 days of your free site visit, often faster for standard configurations.' },
    ],
  },
  {
    id: 'vijayawada',
    name: 'Vijayawada',
    displayName: 'Vijayawada',
    slug: 'vijayawada',
    region: 'Andhra Pradesh',
    heroTitle: 'Invisible Grills in Vijayawada',
    heroSubtitle: 'Strong & Secure Solutions for AP\'s Growth City',
    metaTitle: 'Best Invisible Grills in Vijayawada | Bhairava',
    metaDescription: 'Invisible grills in Vijayawada. Strong, secure stainless steel grills for balconies and windows. Ceiling cloth hangers installation. Free quote nearby.',
    canonicalUrl: 'https://bhairavainvisiblegrills.in/vijayawada',
    introText: `Vijayawada, Andhra Pradesh's commercial and industrial hub, is experiencing rapid urban growth with luxury apartment complexes and modern residential developments. Bhairava provides strong, secure invisible grills tailored for Vijayawada's bustling cityscape, ensuring maximum security without compromising your urban lifestyle.`,
    benefits: [
      { icon: 'Building2', title: 'Urban Apartment Experts', description: 'Specialized in high-density residential complexes across Vijayawada.' },
      { icon: 'Zap', title: 'Fast Installation', description: 'Quick turnaround for Vijayawada\'s busy professionals and families.' },
      { icon: 'Eye', title: 'City Views Protected', description: 'Invisible grills enhance Vijayawada\'s modern architectural aesthetic.' },
      { icon: 'Shield', title: 'Security + Style', description: 'Strong protection that complements contemporary interiors.' },
      { icon: 'Wind', title: 'Full Airflow', description: 'Cooling benefits essential for Vijayawada\'s climate.' },
      { icon: 'Wrench', title: 'Hassle-Free Maintenance', description: 'Durable stainless steel for busy city living.' },
    ],
    trustMetrics: [
      { number: '350+', label: 'Vijayawada Installations' },
      { number: 'Same-Day', label: 'Site Assessments' },
      { number: '4.9/5', label: 'Urban Ratings' },
      { number: '48-Hour', label: 'Installation' },
    ],
    uniqueApproach: 'As Vijayawada grows, we\'ve developed rapid, efficient installation processes perfect for the city\'s fast-paced environment while maintaining our premium quality standard.',
    serviceAreas: ['Vijayawada City Center', 'Bhavanipuram', 'Ramalayam', 'Patamata', 'Prakasam Nagar', 'All Vijayawada locations'],
    faqHighlights: [
      { question: 'Can you install in Vijayawada\'s multi-story apartment complexes?', answer: 'Yes. We specialize in high-rise apartment installations and have completed 350+ projects across Vijayawada\'s major residential complexes.' },
      { question: 'How quickly can you serve Vijayawada?', answer: 'We offer same-day site assessments and typically complete installations within 24-48 hours of your confirmation.' },
      { question: 'Are your products durable for Vijayawada\'s climate?', answer: 'Absolutely. Our SS 316 stainless steel and UV-resistant materials are proven across 350+ Vijayawada installations.' },
      { question: 'Do you provide after-sales support in Vijayawada?', answer: 'Yes, complete 10-year warranty with dedicated after-sales support and quick-response maintenance.' },
    ],
  },
  {
    id: 'guntur',
    name: 'Guntur',
    displayName: 'Guntur',
    slug: 'guntur',
    region: 'Andhra Pradesh',
    heroTitle: 'Invisible Grills in Guntur',
    heroSubtitle: 'Secure Home Protection for Guntur Families',
    metaTitle: 'Best Invisible Grills in Guntur | Bhairava',
    metaDescription: 'Invisible grills in Guntur. Strong, secure stainless steel grills for balconies and windows. Professional installation and free quote.',
    canonicalUrl: 'https://bhairavainvisiblegrills.in/guntur',
    introText: `Guntur, the spice capital of Andhra Pradesh, is a vibrant city combining agricultural heritage with modern urbanization. Bhairava brings trusted invisible grill solutions to Guntur's growing residential developments, ensuring families enjoy strong, secure protection without compromising natural light and ventilation.`,
    benefits: [
      { icon: 'Building2', title: 'Residential Specialists', description: 'Trusted by Guntur families for secure home protection.' },
      { icon: 'Sun', title: 'Climate Adapted', description: 'Materials perfected for Guntur\'s warm, semi-arid climate.' },
      { icon: 'Eye', title: 'View Enhancement', description: 'Invisible grills preserve Guntur\'s natural landscape views.' },
      { icon: 'Shield', title: 'Child Safety First', description: 'Complete fall prevention for growing families.' },
      { icon: 'Wind', title: 'Natural Cooling', description: 'Maintain fresh air without compromising security.' },
      { icon: 'Wrench', title: 'Minimal Maintenance', description: 'Durable construction for Guntur\'s weather.' },
    ],
    trustMetrics: [
      { number: '250+', label: 'Guntur Families Protected' },
      { number: '10-Year', label: 'Material Warranty' },
      { number: '4.8/5', label: 'Family Ratings' },
      { number: '2-3 Days', label: 'Installation Time' },
    ],
    uniqueApproach: 'Guntur\'s warm climate and diverse architectural styles have taught us to create customized invisible grill solutions that fit each family\'s unique needs perfectly.',
    serviceAreas: ['Guntur City', 'Patamata Road', 'Arundelpet', 'Krishna Nagar', 'All Guntur areas'],
    faqHighlights: [
      { question: 'Are invisible grills good for Guntur\'s hot climate?', answer: 'Yes. They provide security without blocking air flow, allowing natural ventilation — essential for Guntur\'s warm weather.' },
      { question: 'Do you install in all Guntur neighborhoods?', answer: 'We serve all Guntur areas including Patamata Road, Arundelpet, Krishna Nagar, and surrounding neighborhoods.' },
      { question: 'How much do invisible grills cost in Guntur?', answer: 'Costs vary by window size and configuration. We provide free site visits and custom quotes for Guntur homes.' },
      { question: 'Can you handle ceiling hangers installation in Guntur?', answer: 'Yes. We install both invisible grills and ceiling cloth hangers across Guntur with the same quality and warranty.' },
    ],
  },
  {
    id: 'chittoor',
    name: 'Chittoor',
    displayName: 'Chittoor',
    slug: 'chittoor',
    region: 'Andhra Pradesh',
    heroTitle: 'Invisible Grills in Chittoor',
    heroSubtitle: 'Strong Safety for the Temple City',
    metaTitle: 'Best Invisible Grills in Chittoor | Bhairava',
    metaDescription: 'Invisible grills in Chittoor. Strong, secure stainless steel grills for balconies and windows. Expert installation and free assessment.',
    canonicalUrl: 'https://bhairavainvisiblegrills.in/chittoor',
    introText: `Chittoor, home to the sacred Tirupati pilgrimage sites and a thriving residential community, demands safety solutions that respect the city's spiritual heritage. Bhairava provides modern, unobtrusive invisible grills that protect Chittoor homes while maintaining the city's traditional aesthetic.`,
    benefits: [
      { icon: 'Building2', title: 'Heritage Aware', description: 'Invisible grills respect Chittoor\'s spiritual and traditional architecture.' },
      { icon: 'Sun', title: 'Weather Resilient', description: 'Built for Chittoor\'s varied seasonal climate and temperature changes.' },
      { icon: 'Eye', title: 'Aesthetic Harmony', description: 'Modern protection that blends with traditional Chittoor homes.' },
      { icon: 'Shield', title: 'Family Guardians', description: 'Trust Bhairava for complete household protection.' },
      { icon: 'Wind', title: 'Open-Air Living', description: 'Full ventilation while maintaining security.' },
      { icon: 'Wrench', title: 'Long-Lasting', description: 'Minimal maintenance for years of reliable service.' },
    ],
    trustMetrics: [
      { number: '180+', label: 'Chittoor Installations' },
      { number: '10-Year', label: 'Comprehensive Warranty' },
      { number: '4.9/5', label: 'Community Rating' },
      { number: '2-Days', label: 'Service Commitment' },
    ],
    uniqueApproach: 'Chittoor\'s blend of sacred and secular spaces demands respectful installation practices we\'ve developed through deep community engagement.',
    serviceAreas: ['Chittoor City', 'Raya Puram', 'A. Rangapuram', 'New Town', 'All Chittoor areas'],
    faqHighlights: [
      { question: 'Do your invisible grills suit traditional Chittoor homes?', answer: 'Absolutely. Their invisible design complements any architectural style, from traditional to modern.' },
      { question: 'Which areas of Chittoor do you serve?', answer: 'We serve all Chittoor areas including Raya Puram, A. Rangapuram, New Town, and surrounding regions.' },
      { question: 'What warranty do you offer in Chittoor?', answer: 'Full 10-year warranty on grills and 5-year on ceiling hangers, covering materials and workmanship.' },
      { question: 'How long does installation take?', answer: 'Most installations complete within 2-3 days, often faster for standard window configurations.' },
    ],
  },
  {
    id: 'tirupati',
    name: 'Tirupati',
    displayName: 'Tirupati',
    slug: 'tirupati',
    region: 'Andhra Pradesh',
    heroTitle: 'Invisible Grills in Tirupati',
    heroSubtitle: 'Sacred Security for the Temple City',
    metaTitle: 'Best Invisible Grills in Tirupati | Bhairava',
    metaDescription: 'Invisible grills in Tirupati. Strong, secure stainless steel grills for balconies and windows. Free site visit and professional installation.',
    canonicalUrl: 'https://bhairavainvisiblegrills.in/tirupati',
    introText: `Tirupati, home to the world-renowned Tirupati Temple and a rapidly growing residential community, deserves safety solutions that match the city's spiritual significance. Bhairava delivers invisible grills that provide strong, secure protection while respecting Tirupati's sacred character.`,
    benefits: [
      { icon: 'Building2', title: 'Pilgrimage City Experts', description: 'Specialized knowledge of Tirupati\'s unique residential patterns.' },
      { icon: 'Sun', title: 'Climate Optimized', description: 'Materials suited for Tirupati\'s warm to cool seasonal transitions.' },
      { icon: 'Eye', title: 'Spiritual Harmony', description: 'Invisible designs blend seamlessly with Tirupati\'s sacred environment.' },
      { icon: 'Shield', title: 'Secure Living', description: 'Strong protection for pilgrims\' homes and permanent residents.' },
      { icon: 'Wind', title: 'Fresh Air Access', description: 'Open living spaces with complete fall prevention.' },
      { icon: 'Wrench', title: 'Durable Security', description: 'Built to last through Tirupati\'s varied climate.' },
    ],
    trustMetrics: [
      { number: '220+', label: 'Tirupati Households' },
      { number: '10-Year', label: 'Grills Warranty' },
      { number: '4.8/5', label: 'Resident Rating' },
      { number: 'Same-Day', label: 'Free Assessment' },
    ],
    uniqueApproach: 'Tirupati\'s pilgrimage focus and residential growth require specialized service understanding we\'ve built across 220+ local installations.',
    serviceAreas: ['Tirupati City', 'Tirumala', 'Chandragiri', 'Sri Kalahasthi Road', 'All Tirupati areas'],
    faqHighlights: [
      { question: 'Do you serve all Tirupati neighborhoods?', answer: 'Yes, we serve all Tirupati areas including Tirumala, Chandragiri, Sri Kalahasthi Road, and surrounding locations.' },
      { question: 'Are invisible grills suitable for Tirupati\'s climate?', answer: 'Perfect fit. Our materials handle Tirupati\'s warm dry climate and seasonal temperature variations.' },
      { question: 'Can you install for temporary/pilgrim accommodations?', answer: 'Yes, we install in both permanent homes and temporary pilgrim accommodations with flexible scheduling.' },
      { question: 'What\'s included in your Tirupati service?', answer: 'Free site visit, custom quote, professional installation, and complete 10-year warranty with local support.' },
    ],
  },
  {
    id: 'anantapur',
    name: 'Anantapur',
    displayName: 'Anantapur',
    slug: 'anantapur',
    region: 'Andhra Pradesh',
    heroTitle: 'Invisible Grills in Anantapur',
    heroSubtitle: 'Smart Security for Rayalaseema\'s Growing City',
    metaTitle: 'Best Invisible Grills in Anantapur | Bhairava',
    metaDescription: 'Invisible grills in Anantapur. Strong, secure stainless steel grills for balconies and windows. Ceiling cloth hangers installation. Free quote.',
    canonicalUrl: 'https://bhairavainvisiblegrills.in/anantapur',
    introText: `Anantapur, the historic center of Rayalaseema region, is experiencing steady residential growth with modern apartment complexes and upgraded homes. Bhairava brings proven invisible grill solutions to Anantapur families, combining strong security with the durability needed for the region's semi-arid climate.`,
    benefits: [
      { icon: 'Building2', title: 'Rayalaseema Specialists', description: 'Tailored solutions for Anantapur\'s unique regional climate and architecture.' },
      { icon: 'Sun', title: 'Dry Climate Ready', description: 'Materials optimized for Anantapur\'s semi-arid, low-humidity environment.' },
      { icon: 'Eye', title: 'Space Preservation', description: 'Invisible design maximizes perceived space in compact homes.' },
      { icon: 'Shield', title: 'Strong Protection', description: 'Robust security for Anantapur\'s growing urban areas.' },
      { icon: 'Wind', title: 'Maximum Ventilation', description: 'Essential for staying cool in Anantapur\'s warm climate.' },
      { icon: 'Wrench', title: 'Extreme Durability', description: 'Built for Anantapur\'s harsh sun and dust conditions.' },
    ],
    trustMetrics: [
      { number: '150+', label: 'Anantapur Installations' },
      { number: '10-Year', label: 'Material Coverage' },
      { number: '4.8/5', label: 'Regional Rating' },
      { number: '3-Days', label: 'Typical Timeline' },
    ],
    uniqueApproach: 'Anantapur\'s semi-arid climate and regional building styles have shaped our expertise in creating long-lasting, low-maintenance safety solutions.',
    serviceAreas: ['Anantapur City', 'Dhone', 'Kadapa Road', 'Cantonment Area', 'All Anantapur locations'],
    faqHighlights: [
      { question: 'Are invisible grills durable in Anantapur\'s climate?', answer: 'Extremely durable. Our SS 316 stainless steel resists dust, UV rays, and temperature extremes of Rayalaseema region.' },
      { question: 'Do you serve all Anantapur areas?', answer: 'We cover all Anantapur including Dhone, Kadapa Road, Cantonment Area, and surrounding regions.' },
      { question: 'What\'s the maintenance requirement in Anantapur\'s dusty climate?', answer: 'Minimal — just occasional water rinse. Stainless steel naturally resists corrosion and dust accumulation.' },
      { question: 'How quickly can you install in Anantapur?', answer: 'Typically 3 days from your free site visit to installation completion, depending on configuration.' },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export function getAllLocations(): LocationData[] {
  return locations;
}

export function getLocationMetaData(slug: string) {
  const location = getLocationBySlug(slug);
  return location ? {
    title: location.metaTitle,
    description: location.metaDescription,
    canonical: location.canonicalUrl,
  } : null;
}
