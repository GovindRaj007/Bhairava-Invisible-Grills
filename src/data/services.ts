export interface SubService {
  name: string;
  slug: string;
  description: string;
  heroTitle: string;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  applications: { icon: string; title: string; description: string }[];
  benefits: { icon: string; title: string; description: string }[];
  specs: { label: string; value: string }[];
  installationSteps: string[];
  safetyStandards: string[];
  faqs: { question: string; answer: string }[];
}

export interface ServiceCategory {
  name: string;
  slug: string;
  icon: string;
  label: string;
  headline: string;
  subtext: string;
  pills: string[];
  subServices: SubService[];
}

export const BUSINESS = {
  name: "Bhairava Invisible Grills",
  tagline: "Strong, Secure Invisible Grills",
  phone: "+91-6281226678",
  phone2: "+91-7386549528",
  whatsapp: "916281226678",
  email: "contact@bhairavainvisiblegrills.in",
  address: "125-923, Srinivas nagar, Sai Nagar, Marripalem, Visakhapatnam, Andhra Pradesh, 530018",
  hours: "Mon–Sat, 9AM–7PM",
  city: "Visakhapatnam",
  areas: ["Vizag", "Visakhapatnam", "All areas near me"],
  latitude: 17.2343585,
  longitude: 82.5294056,
};

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Invisible Grills",
    slug: "invisible-grills",
    icon: "Shield",
    label: "INVISIBLE GRILLS",
    headline: "Strong & Secure. Crystal Clear Views.",
    subtext: "Stainless steel invisible grills for balconies and windows in Visakhapatnam — maximum security without obstruction.",
    pills: ["Balconies", "Windows", "Installation"],
    subServices: [
      {
        name: "Invisible Grills Installation",
        slug: "installation",
        description: "Professional installation of stainless steel invisible grills for apartments and villas.",
        heroTitle: "Best Invisible Grills Installation in Andhra Pradesh",
        metaTitle: "Best Invisible Grills Installation in AP | Bhairava Invisible Grills",
        metaDescription: "Best invisible grills installation across Andhra Pradesh - Visakhapatnam, Rajahmundry, Vijayawada, Guntur, Chittoor, Tirupati, Anantapur. Strong, secure SS 316 stainless steel cable grills. 10-year warranty. Call near you.",
        overview: "Strong and secure invisible grills across Andhra Pradesh, including Visakhapatnam, Rajahmundry, Vijayawada, Guntur, Chittoor, Tirupati, and Anantapur. Made from high-tensile stainless steel cables that provide unobstructed views while ensuring complete safety. Our professional installation process is designed for precision, durability, and aesthetic appeal, perfect for high-rise apartments and villas across AP.",
        applications: [
          { icon: "Building2", title: "High-Rise Apartments", description: "Safety for balconies and windows in multi-story residential buildings." },
          { icon: "Home", title: "Independent Villas", description: "Elegant protection for villa terraces and open areas." },
          { icon: "Building", title: "Commercial Spaces", description: "Safety grills for office balconies and commercial buildings." },
        ],
        benefits: [
          { icon: "Eye", title: "Unobstructed Views", description: "Crystal-clear sightlines with virtually invisible cables." },
          { icon: "Shield", title: "Maximum Safety", description: "Load-tested cables that withstand extreme force." },
          { icon: "Wind", title: "Weather Resistant", description: "Marine-grade steel resists Vizag's coastal climate and humidity." },
          { icon: "Paintbrush", title: "Aesthetic Appeal", description: "Sleek modern look that enhances property value." },
          { icon: "Wrench", title: "Low Maintenance", description: "No painting, no rusting — built to last." },
          { icon: "Clock", title: "Quick Installation", description: "Most installations completed within a single day." },
        ],
        specs: [
          { label: "Material", value: "SS 316 Marine Grade" },
          { label: "Wire Diameter", value: "2.0 mm" },
          { label: "Load Capacity", value: "250 kg per cable" },
          { label: "Weather Rating", value: "Coastal Grade" },
          { label: "Finish", value: "Mirror / Satin" },
          { label: "Warranty", value: "10 Years" },
          { label: "Standards", value: "BIS Certified" },
        ],
        installationSteps: ["Site Survey & Measurement", "Custom Frame Fabrication", "Cable Threading & Tensioning", "Quality Check & Handover"],
        safetyStandards: ["BIS IS 6248 compliant cable tensioning", "Load-tested to 250 kg per cable", "UV-resistant components for outdoor durability", "Child-safe spacing (max 25mm gap)"],
        faqs: [
          { question: "Are invisible grills safe for children?", answer: "Absolutely. Our grills have a maximum gap of 25mm between cables, making them completely child-safe. Each cable is load-tested to 250 kg." },
          { question: "Will invisible grills block my view?", answer: "No — that's the whole point. The 2mm stainless steel cables are virtually invisible from a distance, giving you unobstructed views of the skyline." },
          { question: "How long does installation take?", answer: "Most standard installations are completed within 4–6 hours. Larger projects may take up to a full day." },
          { question: "Do invisible grills rust in Visakhapatnam's climate?", answer: "No. We use SS 316 marine-grade stainless steel, specifically chosen for coastal environments like Vizag." },
        ],
      },
      {
        name: "Invisible Grills for Balconies",
        slug: "balconies",
        description: "Transparent cable grills for high-rise balconies with panoramic city views.",
        heroTitle: "Best Balcony Invisible Grills in Andhra Pradesh",
        metaTitle: "Best Balcony Invisible Grills in AP | Bhairava",
        metaDescription: "Best balcony invisible grills in Andhra Pradesh - Vizag, Rajahmundry, Vijayawada, Guntur, Chittoor, Tirupati, Anantapur. Secure stainless steel cables for high-rise balconies. Free site visit near you.",
        overview: "Balcony invisible grills are the ideal solution for high-rise apartments across Andhra Pradesh including Visakhapatnam, Rajahmundry, Vijayawada, Guntur, Chittoor, Tirupati, and Anantapur. Strong and secure stainless steel cables provide complete safety for children and pets while maintaining the open, airy feel of your balcony with unobstructed panoramic city views. Available for immediate installation in all AP locations.",
        applications: [
          { icon: "Building2", title: "High-Rise Balconies", description: "Perfect for apartments above the 3rd floor." },
          { icon: "Baby", title: "Child Safety", description: "Keep children safe while they enjoy outdoor spaces." },
          { icon: "Dog", title: "Pet Protection", description: "Prevent pets from falling or escaping through balconies." },
        ],
        benefits: [
          { icon: "Eye", title: "Panoramic Views", description: "Enjoy your city skyline without visual barriers." },
          { icon: "Shield", title: "Fall Prevention", description: "Tested safety cables prevent accidental falls." },
          { icon: "Wind", title: "Ventilation Friendly", description: "Full airflow — no stuffy enclosed balconies." },
          { icon: "Paintbrush", title: "Modern Aesthetics", description: "Clean lines that complement any architecture." },
          { icon: "Wrench", title: "Zero Maintenance", description: "No painting or polishing required, ever." },
          { icon: "IndianRupee", title: "Cost Effective", description: "More affordable than traditional glass railings." },
        ],
        specs: [
          { label: "Material", value: "SS 316 Marine Grade" },
          { label: "Wire Diameter", value: "2.0 mm" },
          { label: "Cable Spacing", value: "25 mm max" },
          { label: "Load Capacity", value: "250 kg per cable" },
          { label: "Frame", value: "Aluminum / SS" },
          { label: "Warranty", value: "10 Years" },
        ],
        installationSteps: ["Free Site Visit", "Custom Measurement", "Frame & Cable Installation", "Tensioning & Handover"],
        safetyStandards: ["Child-safe 25mm gap spacing", "250 kg load-tested cables", "UV and salt-spray resistant", "Non-corrosive hardware"],
        faqs: [
          { question: "Can invisible grills be installed on all balcony types?", answer: "Yes — we install on concrete, glass-railing, and metal-railing balconies. Our team customizes the frame for any configuration." },
          { question: "Are they pet-safe?", answer: "Yes. The tight cable spacing prevents even small pets from slipping through or getting stuck." },
          { question: "Do they affect resale value?", answer: "They actually increase property value by adding a modern safety feature that buyers appreciate." },
          { question: "Can I remove them later?", answer: "Yes. Our installation is non-destructive and can be removed cleanly without damaging the balcony structure." },
        ],
      },
      {
        name: "Invisible Grills for Windows",
        slug: "windows",
        description: "Stainless steel cable grills for windows — safety without blocking light or air.",
        heroTitle: "Best Window Invisible Grills in Andhra Pradesh",
        metaTitle: "Best Window Invisible Grills in AP | Bhairava",
        metaDescription: "Best window invisible grills across Andhra Pradesh - Vizag, Rajahmundry, Vijayawada, Guntur, Chittoor, Tirupati, Anantapur. Strong, secure SS 316 stainless steel cables for child safety and burglar prevention. Free quote.",
        overview: "Window invisible grills across Andhra Pradesh (Visakhapatnam, Rajahmundry, Vijayawada, Guntur, Chittoor, Tirupati, and Anantapur) provide essential safety for homes with children while allowing full ventilation and natural light. Our stainless steel cable grills don't create a caged appearance and seamlessly blend with modern window designs. Perfect for child protection and burglar deterrence across all AP locations.",
        applications: [
          { icon: "LayoutGrid", title: "Casement Windows", description: "Fits all standard casement and sliding windows." },
          { icon: "Baby", title: "Children's Rooms", description: "Essential safety for bedrooms and play areas." },
          { icon: "Lock", title: "Burglar Deterrent", description: "High-tensile cables resist cutting attempts." },
        ],
        benefits: [
          { icon: "Sun", title: "Natural Light", description: "No visual obstruction to incoming sunlight." },
          { icon: "Wind", title: "Full Ventilation", description: "Open windows fully with complete safety." },
          { icon: "Shield", title: "Intrusion Resistant", description: "Cables cannot be cut with standard tools." },
          { icon: "Paintbrush", title: "Clean Look", description: "No rusty iron bars — ever." },
          { icon: "Ruler", title: "Custom Fit", description: "Made-to-measure for every window." },
          { icon: "Clock", title: "Fast Install", description: "Completed in 2–3 hours per window." },
        ],
        specs: [
          { label: "Material", value: "SS 316 Marine Grade" },
          { label: "Wire Diameter", value: "2.0 mm" },
          { label: "Cable Spacing", value: "25 mm" },
          { label: "Finish", value: "Powder Coated Frame" },
          { label: "Compliance", value: "BIS Certified" },
          { label: "Warranty", value: "10 Years" },
        ],
        installationSteps: ["Window Assessment", "Frame Fabrication", "Cable Installation", "Quality Inspection"],
        safetyStandards: ["BIS IS 6248 cable standard", "Anti-cut high-tensile grade", "Child-proof 25mm spacing", "Corrosion-resistant finish"],
        faqs: [
          { question: "Will it block my window from opening?", answer: "No. The grills are installed on the outer frame, allowing your windows to open and close freely." },
          { question: "Are they visible from outside?", answer: "From a distance of a few meters, the cables are practically invisible. They blend seamlessly with the window." },
          { question: "Can burglars cut through them?", answer: "The SS 316 high-tensile cables are extremely difficult to cut with ordinary tools, providing excellent intrusion resistance." },
          { question: "What about maintenance?", answer: "Zero maintenance. Just wipe with a damp cloth occasionally. No painting or anti-rust treatment needed." },
        ],
      },
    ],
  },
  {
    name: "Ceiling Cloth Drying Hangers",
    slug: "ceiling-hangers",
    icon: "Shirt",
    label: "CEILING CLOTH HANGERS",
    headline: "Smart Space. Modern Living.",
    subtext: "Pulley-based ceiling drying hangers for Vizag apartments — maximize space, minimize clutter.",
    pills: ["Pulley System", "Ceiling Mount", "Easy Install"],
    subServices: [
      {
        name: "Ceiling Cloth Drying Hangers Installation",
        slug: "ceiling-cloth-hangers",
        description: "Ceiling-mounted pulley drying rack systems for modern apartments.",
        heroTitle: "Space-Saving Ceiling Cloth Hangers in Andhra Pradesh",
        metaTitle: "Ceiling Cloth Hangers in AP | Strong & Secure | Bhairava",
        metaDescription: "Ceiling cloth drying hangers across Andhra Pradesh - Vizag, Rajahmundry, Vijayawada, Guntur, Chittoor, Tirupati, Anantapur. Space-saving pulley system for modern apartments. Professional installation near you.",
        overview: "Ceiling cloth drying hangers across Andhra Pradesh (Visakhapatnam, Rajahmundry, Vijayawada, Guntur, Chittoor, Tirupati, and Anantapur) are space-saving drying systems mounted directly to your ceiling. Using a simple pulley mechanism, clothes can be raised and lowered effortlessly. Perfect for apartments across AP where balcony space is limited. Professional installation available in all locations.",
        applications: [
          { icon: "Home", title: "Apartments", description: "Ideal for compact apartment utility areas." },
          { icon: "Building2", title: "Utility Rooms", description: "Maximize utility room space." },
          { icon: "Sun", title: "Balcony Drying", description: "Overhead drying on covered balconies." },
        ],
        benefits: [
          { icon: "Maximize2", title: "Space Saving", description: "No floor space occupied — everything at ceiling level." },
          { icon: "Wind", title: "Better Airflow", description: "Hot air rises — clothes dry faster at ceiling height." },
          { icon: "Wrench", title: "Easy Operation", description: "Simple pulley system — raise and lower with one hand." },
          { icon: "IndianRupee", title: "Affordable", description: "Costs less than standalone drying racks." },
          { icon: "Ruler", title: "Custom Lengths", description: "Available in 4ft, 6ft, and 8ft rod lengths." },
          { icon: "Clock", title: "Quick Install", description: "Installed in under 2 hours." },
        ],
        specs: [
          { label: "Material", value: "Stainless Steel Rods" },
          { label: "Rod Lengths", value: "4ft / 6ft / 8ft" },
          { label: "Number of Rods", value: "6 Rods Standard" },
          { label: "Weight Capacity", value: "25 kg per rod" },
          { label: "Pulley Type", value: "Nylon Coated" },
          { label: "Warranty", value: "2 Years" },
        ],
        installationSteps: ["Ceiling Assessment", "Bracket Mounting", "Pulley & Rod Setup", "Testing & Handover"],
        safetyStandards: ["Ceiling anchor tested for load", "Rust-proof stainless steel", "Nylon-coated pulleys for smooth operation", "Child-safe rope cleat lock"],
        faqs: [
          { question: "How much weight can each rod hold?", answer: "Each stainless steel rod can hold up to 25 kg of wet clothes. The standard 6-rod system supports up to 150 kg total." },
          { question: "Will it damage my ceiling?", answer: "We use precision ceiling anchors that create minimal holes. The system is designed for concrete ceilings common in Visakhapatnam apartments." },
          { question: "Can I adjust the height?", answer: "Yes. The pulley system lets you lower the rods to hanging height and raise them back to the ceiling when loaded." },
          { question: "Is it suitable for heavy items like blankets?", answer: "Yes. The 25 kg per rod capacity easily handles heavy items like blankets, bedsheets, and jeans." },
        ],
      },
    ],
  },
];

// Get all services in a flat list (Invisible Grills first, then Ceiling Hangers at the end)
export function getAllFlatServices(): { category: ServiceCategory; service: SubService }[] {
  const allServices: { category: ServiceCategory; service: SubService }[] = [];
  
  // Add Invisible Grills first
  const invisibleGrillsCategory = serviceCategories.find((c) => c.slug === 'invisible-grills')!;
  invisibleGrillsCategory.subServices.forEach((service) => {
    allServices.push({ category: invisibleGrillsCategory, service });
  });
  
  // Add Ceiling Cloth Drying Hangers at the end
  const ceilingHangersCategory = serviceCategories.find((c) => c.slug === 'ceiling-hangers')!;
  ceilingHangersCategory.subServices.forEach((service) => {
    allServices.push({ category: ceilingHangersCategory, service });
  });
  
  return allServices;
}

// Get a service by just the service slug
export function getServiceByServiceSlug(serviceSlug: string): { category: ServiceCategory; service: SubService } | null {
  for (const category of serviceCategories) {
    const service = category.subServices.find((s) => s.slug === serviceSlug);
    if (service) {
      return { category, service };
    }
  }
  return null;
}
