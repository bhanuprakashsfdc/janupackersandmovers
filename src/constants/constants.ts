// =====================================================
// PREMIUM PACKERS & MOVERS - CONSTANTS FILE
// All business content stored here for scalability
// =====================================================

import { 
  Truck, 
  Home, 
  Building2, 
  Car, 
  Bike, 
  Package, 
  Warehouse, 
  Factory, 
  MapPin,
  Shield,
  Clock,
  Users,
  Award,
  ThumbsUp,
  Phone,
  Mail,
  CheckCircle2,
  Star
} from "lucide-react";

// =====================================================
// COMPANY INFORMATION
// =====================================================
export const COMPANY = {
  name: "Janu Packers and Movers",
  tagline: "India's Most Trusted Relocation Partner",
  description: "Premium packing and moving services across India with 15+ years of excellence. We handle your belongings with the care they deserve.",
  foundedYear: 2009,
  experience: "15+ Years",
  movesCompleted: "50,000+",
  happyCustomers: "45,000+",
  cities: "500+",
  phone: "+91-9392108148",
  alternatePhone: "",
  whatsapp: "+919392108148",
  email: "info@janupackersandmovers.com",
  address: "Janu Packers and Movers,Beside Canara Bank, Vaaikuntapuram Road, M.R.Palli, Tirupati",
  workingHours: "Mon - Sat: 8:00 AM - 8:00 PM",
  socialLinks: {
    facebook: "https://facebook.com/janupackersandmovers",
    instagram: "https://instagram.com/janupackersandmovers",
    twitter: "https://twitter.com/janupackersandmovers",
    linkedin: "https://linkedin.com/company/janupackersandmovers",
    youtube: "https://youtube.com/janupackersandmovers"
  }
};

// =====================================================
// NAVIGATION LINKS
// =====================================================
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

// =====================================================
// HERO CONTENT
// =====================================================
export const HERO_CONTENT = {
  badge: "🏆 India's #1 Rated Moving Company",
  title: "Seamless Relocations Across India",
  subtitle: "Experience stress-free moving with our professional team. From careful packing to safe delivery, we handle everything with precision and care.",
  primaryCTA: "Get Free Quote",
  secondaryCTA: "Call Now",
  stats: [
    { value: "50K+", label: "Successful Moves" },
    { value: "500+", label: "Cities Covered" },
    { value: "15+", label: "Years Experience" },
    { value: "4.9★", label: "Customer Rating" }
  ]
};

// =====================================================
// SERVICES
// =====================================================
export const SERVICES = [
  {
    id: "household-shifting",
    icon: Home,
    title: "Household Shifting",
    shortDescription: "Complete home relocation with premium packing materials and trained professionals.",
    fullDescription: "Our household shifting service covers every aspect of your home move. From fragile antiques to heavy furniture, our trained professionals use premium quality packing materials including multi-layer bubble wrap, corrugated boxes, and specialized crating for valuables.",
    features: [
      "Premium quality packing materials",
      "Trained & verified moving professionals",
      "Furniture disassembly & reassembly",
      "Electronic items special handling",
      "Unpacking & arrangement services",
      "Transit insurance coverage"
    ],
    benefits: [
      "Zero damage guarantee",
      "On-time delivery promise",
      "Real-time tracking",
      "24/7 customer support"
    ],
    slug: "household-shifting"
  },
  {
    id: "office-relocation",
    icon: Building2,
    title: "Office Relocation",
    shortDescription: "Minimal downtime corporate moves with systematic planning and execution.",
    fullDescription: "Corporate relocations demand precision, speed, and zero disruption to business operations. Our specialized office moving team handles everything from IT infrastructure to sensitive documents with military precision.",
    features: [
      "Weekend & after-hours moving",
      "IT equipment specialized handling",
      "Document management & security",
      "Workstation setup services",
      "Furniture installation",
      "Asset tagging & tracking"
    ],
    benefits: [
      "Minimal business downtime",
      "Confidential document handling",
      "Project management support",
      "Dedicated move coordinator"
    ],
    slug: "office-relocation"
  },
  {
    id: "car-transportation",
    icon: Car,
    title: "Car Transportation",
    shortDescription: "Safe and secure vehicle transport with enclosed carriers across India.",
    fullDescription: "Transport your car anywhere in India with complete peace of mind. Our enclosed car carriers and open trailers are equipped with hydraulic loading systems and GPS tracking for real-time monitoring.",
    features: [
      "Enclosed & open carrier options",
      "Door-to-door pickup & delivery",
      "Hydraulic loading systems",
      "GPS tracking enabled",
      "Comprehensive insurance",
      "Pre & post inspection reports"
    ],
    benefits: [
      "No kilometer run on vehicle",
      "Weather-protected transport",
      "Express delivery available",
      "Insurance up to full value"
    ],
    slug: "car-transportation"
  },
  {
    id: "bike-transport",
    icon: Bike,
    title: "Bike Transport",
    shortDescription: "Specialized two-wheeler transport with custom crating and protection.",
    fullDescription: "Whether it's a premium superbike or a daily commuter, our bike transport service ensures your two-wheeler reaches its destination in pristine condition with custom-built crating solutions.",
    features: [
      "Custom wooden crating",
      "Anti-scratch protection",
      "Fuel draining service",
      "Battery disconnection",
      "Express delivery options",
      "Photo documentation"
    ],
    benefits: [
      "Scratch-free guarantee",
      "Insured transport",
      "Real-time updates",
      "Pan-India coverage"
    ],
    slug: "bike-transport"
  },
  {
    id: "local-shifting",
    icon: MapPin,
    title: "Local Shifting",
    shortDescription: "Same-day local moves within city limits with flexible scheduling.",
    fullDescription: "Moving within the same city? Our local shifting service offers flexible scheduling, competitive pricing, and the same premium care as our long-distance moves. Perfect for apartment moves, office shifts, or storage transfers.",
    features: [
      "Same-day service available",
      "Flexible time slots",
      "No minimum load requirement",
      "Professional packing optional",
      "Loading & unloading included",
      "Furniture protection"
    ],
    benefits: [
      "Affordable hourly rates",
      "Quick turnaround",
      "Verified local teams",
      "Transparent pricing"
    ],
    slug: "local-shifting"
  },
  {
    id: "domestic-shifting",
    icon: Truck,
    title: "Domestic Shifting",
    shortDescription: "Interstate relocations with dedicated trucks and route optimization.",
    fullDescription: "Relocating to a different state? Our domestic shifting service covers all major routes across India with dedicated trucks, experienced drivers, and comprehensive transit insurance for complete peace of mind.",
    features: [
      "Dedicated truck allocation",
      "Experienced long-haul drivers",
      "Route optimization",
      "Multiple checkpoint inspections",
      "Warehousing enroute if needed",
      "Customs handling for UT territories"
    ],
    benefits: [
      "Single point of contact",
      "No transshipment",
      "Scheduled delivery dates",
      "Full value protection"
    ],
    slug: "domestic-shifting"
  },
  {
    id: "packing-unpacking",
    icon: Package,
    title: "Packing & Unpacking",
    shortDescription: "Expert packing services with premium materials for maximum protection.",
    fullDescription: "Our professional packing team uses industry-leading materials and techniques perfected over 15 years. Every item receives individual attention with appropriate packaging based on its fragility and value.",
    features: [
      "Multi-layer bubble wrap",
      "Custom corrugated boxes",
      "Thermocol protection",
      "Stretch film wrapping",
      "Fragile item crating",
      "Systematic labeling"
    ],
    benefits: [
      "Damage-free assurance",
      "Time-saving convenience",
      "Professional organization",
      "Easy unpacking process"
    ],
    slug: "packing-unpacking"
  },
  {
    id: "warehouse-storage",
    icon: Warehouse,
    title: "Warehouse Storage",
    shortDescription: "Secure climate-controlled storage facilities across major cities.",
    fullDescription: "Need temporary or long-term storage? Our modern warehouses offer climate-controlled units, 24/7 security surveillance, pest control, and flexible rental terms. Perfect for furniture, inventory, or household goods.",
    features: [
      "Climate-controlled units",
      "24/7 CCTV surveillance",
      "Fire safety systems",
      "Pest control treatment",
      "Individual unit access",
      "Flexible rental periods"
    ],
    benefits: [
      "Safe & secure storage",
      "Easy access scheduling",
      "Inventory management",
      "Insurance available"
    ],
    slug: "warehouse-storage"
  },
  {
    id: "industrial-relocation",
    icon: Factory,
    title: "Industrial Relocation",
    shortDescription: "Heavy machinery and factory equipment moving with specialized equipment.",
    fullDescription: "Relocating industrial equipment requires specialized expertise, heavy-duty machinery, and strict safety protocols. Our industrial relocation team handles manufacturing plants, warehouses, and heavy equipment with precision.",
    features: [
      "Heavy machinery handling",
      "Crane & forklift services",
      "Rigging & dismantling",
      "Specialized transporters",
      "Safety compliance",
      "Project planning & execution"
    ],
    benefits: [
      "Minimal production downtime",
      "Expert project management",
      "Safety-first approach",
      "Turnkey solutions"
    ],
    slug: "industrial-relocation"
  }
];

// =====================================================
// LOCATIONS (City-wise SEO Pages)
// =====================================================
export const LOCATIONS = [
  {
    id: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    slug: "packers-and-movers-in-hyderabad",
    metaTitle: "Best Packers and Movers in Hyderabad | Janu Packers and Movers",
    metaDescription: "Top-rated packers and movers in Hyderabad. Professional household & office shifting services with free quotes. Call now for reliable relocation services.",
    heroTitle: "Premium Packers & Movers in Hyderabad",
    heroDescription: "Experience seamless relocations in the City of Pearls. Our Hyderabad team specializes in IT corridor moves, gated community relocations, and interstate shifting with local expertise.",
    areas: ["Gachibowli", "HITEC City", "Banjara Hills", "Jubilee Hills", "Kondapur", "Madhapur", "Kukatpally", "Secunderabad", "LB Nagar", "Uppal"],
    features: [
      "Same-day local shifting within Hyderabad",
      "IT corridor & tech park specialists",
      "Gated community moving experts",
      "Telugu-speaking support team"
    ]
  },
  {
    id: "bangalore",
    city: "Bangalore",
    state: "Karnataka",
    slug: "packers-and-movers-in-bangalore",
    metaTitle: "Best Packers and Movers in Bangalore | Janu Packers and Movers",
    metaDescription: "Trusted packers and movers in Bangalore. Affordable home & office relocation services. Get free estimate today for safe moving experience.",
    heroTitle: "Trusted Packers & Movers in Bangalore",
    heroDescription: "Navigate the Silicon Valley of India with our expert moving services. From Electronic City to Whitefield, we understand Bangalore's unique moving challenges.",
    areas: ["Whitefield", "Electronic City", "Koramangala", "HSR Layout", "Indiranagar", "Marathahalli", "Jayanagar", "Bellandur", "Sarjapur", "BTM Layout"],
    features: [
      "Tech park & startup office moves",
      "Express weekend shifting",
      "Premium apartment specialists",
      "Kannada & English support"
    ]
  },
  {
    id: "chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    slug: "packers-and-movers-in-chennai",
    metaTitle: "Best Packers and Movers in Chennai | Janu Packers and Movers",
    metaDescription: "Professional packers and movers in Chennai. Safe household & corporate relocation services at best prices. Book your move today!",
    heroTitle: "Professional Packers & Movers in Chennai",
    heroDescription: "Reliable relocations in the Gateway to South India. Our Chennai team excels in handling monsoon-season moves and coastal humidity challenges.",
    areas: ["T. Nagar", "Anna Nagar", "Velachery", "OMR", "Adyar", "Tambaram", "Porur", "Thoraipakkam", "Guindy", "Nungambakkam"],
    features: [
      "Monsoon-proof packing solutions",
      "IT corridor expertise (OMR/Porur)",
      "Factory & industrial moves",
      "Tamil-speaking coordination"
    ]
  },
  {
    id: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    slug: "packers-and-movers-in-mumbai",
    metaTitle: "Best Packers and Movers in Mumbai | Janu Packers and Movers",
    metaDescription: "Reliable packers and movers in Mumbai. Affordable shifting services for home & office. Free survey and quote. Call us now!",
    heroTitle: "Reliable Packers & Movers in Mumbai",
    heroDescription: "Moving in the city that never sleeps requires expertise. Our Mumbai team specializes in high-rise relocations, space-constrained moves, and time-sensitive corporate shifts.",
    areas: ["Andheri", "Bandra", "Powai", "Thane", "Navi Mumbai", "Goregaon", "Malad", "Worli", "Lower Parel", "BKC"],
    features: [
      "High-rise apartment specialists",
      "Narrow lane navigation experts",
      "24/7 moving services",
      "Hindi & Marathi support"
    ]
  },
  {
    id: "delhi",
    city: "Delhi",
    state: "Delhi NCR",
    slug: "packers-and-movers-in-delhi",
    metaTitle: "Best Packers and Movers in Delhi NCR | Janu Packers and Movers",
    metaDescription: "Top packers and movers in Delhi NCR. Complete relocation solutions for Noida, Gurgaon, Ghaziabad. Get instant quote now!",
    heroTitle: "Expert Packers & Movers in Delhi NCR",
    heroDescription: "Navigate the capital region with confidence. Our NCR network covers Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad with seamless coordination.",
    areas: ["South Delhi", "Dwarka", "Rohini", "Noida", "Gurgaon", "Greater Noida", "Ghaziabad", "Faridabad", "Vasant Kunj", "Janakpuri"],
    features: [
      "Pan-NCR seamless coverage",
      "Embassy & diplomatic moves",
      "Corporate HQ relocations",
      "Hindi & English support"
    ]
  },
  {
    id: "pune",
    city: "Pune",
    state: "Maharashtra",
    slug: "packers-and-movers-in-pune",
    metaTitle: "Best Packers and Movers in Pune | Janu Packers and Movers",
    metaDescription: "Affordable packers and movers in Pune. Professional home & office shifting services. Free estimate and on-time delivery guaranteed.",
    heroTitle: "Affordable Packers & Movers in Pune",
    heroDescription: "From Hinjewadi's IT hubs to Koregaon Park's premium residences, our Pune team delivers quality moves at competitive prices.",
    areas: ["Hinjewadi", "Kharadi", "Wakad", "Baner", "Koregaon Park", "Viman Nagar", "Hadapsar", "Pimpri-Chinchwad", "Magarpatta", "Aundh"],
    features: [
      "IT park moving specialists",
      "Student & bachelor moves",
      "Defense area clearance",
      "Marathi & Hindi support"
    ]
  },
  {
    id: "kolkata",
    city: "Kolkata",
    state: "West Bengal",
    slug: "packers-and-movers-in-kolkata",
    metaTitle: "Best Packers and Movers in Kolkata | Janu Packers and Movers",
    metaDescription: "Trusted packers and movers in Kolkata. Safe and affordable household & commercial shifting services across West Bengal.",
    heroTitle: "Trusted Packers & Movers in Kolkata",
    heroDescription: "Experience the warmth of Bengali hospitality in our moving services. We navigate Kolkata's heritage buildings and modern townships with equal expertise.",
    areas: ["Salt Lake", "New Town", "Park Street", "Howrah", "Behala", "Dum Dum", "Garia", "Ballygunge", "Alipore", "EM Bypass"],
    features: [
      "Heritage building specialists",
      "Narrow lane maneuvering",
      "Monsoon-proof services",
      "Bengali & English support"
    ]
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    slug: "packers-and-movers-in-ahmedabad",
    metaTitle: "Best Packers and Movers in Ahmedabad | Janu Packers and Movers",
    metaDescription: "Professional packers and movers in Ahmedabad. Quality packing and safe transportation for household & commercial goods.",
    heroTitle: "Quality Packers & Movers in Ahmedabad",
    heroDescription: "From the old city's pol houses to SG Highway's modern apartments, we understand Ahmedabad's diverse moving requirements.",
    areas: ["SG Highway", "Prahlad Nagar", "Satellite", "Navrangpura", "Vastrapur", "Bopal", "Gandhinagar", "Maninagar", "Chandkheda", "Thaltej"],
    features: [
      "Industrial GIDC relocations",
      "Textile machinery transport",
      "Sunday moving services",
      "Gujarati & Hindi support"
    ]
  },
  {
    id: "tirupati",
    city: "Tirupati",
    state: "Andhra Pradesh",
    slug: "packers-and-movers-in-tirupati",
    metaTitle: "Best Packers and Movers in Tirupati | Janu Packers and Movers",
    metaDescription: "Reliable packers and movers in Tirupati. Affordable household & office shifting with temple town expertise. Get free quote!",
    heroTitle: "Reliable Packers & Movers in Tirupati",
    heroDescription: "The sacred city of Lord Venkateshwara deserves respectful moving services. We handle religious artifacts, brass items, and household goods with devotion and care.",
    areas: ["Tirumala", "Alipiri", "RC Road", "Balaji Colony", "Sri Padmavathi Nagar", "Renigunta", "Chandragiri", "Railway Station Area"],
    features: [
      "Religious item specialists",
      "Brass & antique handling",
      "Pilgrimage storage services",
      "Telugu & English support"
    ]
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    slug: "packers-and-movers-in-visakhapatnam",
    metaTitle: "Best Packers and Movers in Visakhapatnam | Janu Packers and Movers",
    metaDescription: "Professional packers and movers in Vizag. Complete relocation services for household, office, and industrial moves.",
    heroTitle: "Professional Packers & Movers in Visakhapatnam",
    heroDescription: "The Jewel of the East Coast trusts us for reliable relocations. Port city expertise with humidity-resistant packing and coastal route knowledge.",
    areas: ["MVP Colony", "Dwaraka Nagar", "Gajuwaka", "Madhurawada", "Seethammadhara", "Beach Road", "Rushikonda", "NAD Junction"],
    features: [
      "Port & naval area moves",
      "Coastal humidity protection",
      "Industrial corridor expertise",
      "Telugu & Hindi support"
    ]
  }
];

// =====================================================
// PROCESS STEPS
// =====================================================
export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Request Quote",
    description: "Share your moving requirements through our form, call, or WhatsApp. Get a detailed quote within 30 minutes.",
    icon: Phone
  },
  {
    step: 2,
    title: "Survey & Estimate",
    description: "Our expert visits your location for a thorough survey. Receive transparent pricing with no hidden charges.",
    icon: CheckCircle2
  },
  {
    step: 3,
    title: "Professional Packing",
    description: "Our trained team packs your belongings using premium materials. Every item labeled and inventoried.",
    icon: Package
  },
  {
    step: 4,
    title: "Safe Transportation",
    description: "Dedicated GPS-enabled trucks transport your goods. Real-time tracking keeps you informed.",
    icon: Truck
  },
  {
    step: 5,
    title: "Delivery & Setup",
    description: "On-time delivery with unpacking and arrangement. We don't leave until you're satisfied.",
    icon: Home
  }
];

// =====================================================
// TRUST BADGES / WHY CHOOSE US
// =====================================================
export const TRUST_BADGES = [
  {
    icon: Shield,
    title: "100% Safe & Secure",
    description: "Comprehensive transit insurance and trained handlers ensure your belongings reach safely."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time. 98% on-time delivery record speaks for our commitment."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Background-verified, trained professionals with 5+ years average experience."
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized as 'Best Packers & Movers' by India Moving Association 3 years running."
  },
  {
    icon: ThumbsUp,
    title: "Customer First",
    description: "4.9★ rating from 45,000+ happy customers. Your satisfaction is our reputation."
  },
  {
    icon: MapPin,
    title: "Pan-India Network",
    description: "500+ cities covered with own fleet. No middlemen, no transshipment points."
  }
];

// =====================================================
// TESTIMONIALS
// =====================================================
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Bangalore to Chennai",
    rating: 5,
    text: "Exceptional service! Shifted my entire 3BHK from Whitefield to OMR. The team was professional, punctual, and extremely careful with my antique furniture. Not a single scratch. Highly recommend Janu packers and movers!",
    image: "/testimonials/user1.jpg",
    date: "December 2024"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Delhi to Mumbai",
    rating: 5,
    text: "Was worried about my piano and art collection during interstate move. Janu packers and movers team handled everything with utmost care. The custom crating for my piano was impressive. Best decision I made!",
    image: "/testimonials/user2.jpg",
    date: "November 2024"
  },
  {
    id: 3,
    name: "Anand Mehta",
    location: "Hyderabad Office Relocation",
    rating: 5,
    text: "Relocated our 200-seater office over the weekend with zero business disruption. IT infrastructure setup was seamless. The project manager kept us updated throughout. True professionals!",
    image: "/testimonials/user3.jpg",
    date: "November 2024"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    location: "Pune to Hyderabad",
    rating: 5,
    text: "First time using packers and movers and I'm so glad I chose Janu packers and movers. The team was friendly, the packing was top-notch, and everything arrived on the promised date. Will definitely use again!",
    image: "/testimonials/user4.jpg",
    date: "October 2024"
  },
  {
    id: 5,
    name: "Mohammed Irfan",
    location: "Chennai Car Transport",
    rating: 5,
    text: "Transported my BMW from Chennai to Delhi. Was anxious but the enclosed carrier and GPS tracking gave me peace of mind. Car arrived in perfect condition. Premium service at reasonable price!",
    image: "/testimonials/user5.jpg",
    date: "October 2024"
  },
  {
    id: 6,
    name: "Lakshmi Venkatesh",
    location: "Tirupati Local Shifting",
    rating: 5,
    text: "Shifted within Tirupati during a busy temple season. Despite the traffic, the team managed everything efficiently. Special thanks for handling my brass puja items with such care!",
    image: "/testimonials/user6.jpg",
    date: "September 2024"
  }
];

// =====================================================
// FAQ
// =====================================================
export const FAQ = [
  {
    question: "How much do packers and movers cost in India?",
    answer: "The cost depends on various factors including distance, volume of goods, floor level, and additional services required. For local shifting within a city, prices typically range from ₹3,000 to ₹15,000. For interstate moves, costs can range from ₹15,000 to ₹1,50,000 depending on the distance and load. Contact us for a free, accurate quote based on your specific requirements."
  },
  {
    question: "How far in advance should I book movers?",
    answer: "We recommend booking at least 7-10 days in advance for local moves and 2-3 weeks for interstate relocations. During peak season (May-July, year-end), booking 3-4 weeks ahead is advisable. However, we also accommodate last-minute moves based on availability."
  },
  {
    question: "Is transit insurance included in the moving quote?",
    answer: "Basic transit insurance is included in all our packages at no extra cost. This covers damage during transit up to a specified value. For high-value items like electronics, artwork, or antiques, we recommend our comprehensive insurance add-on that covers full replacement value."
  },
  {
    question: "How do you ensure the safety of fragile items?",
    answer: "We use multi-layer packing with bubble wrap, foam sheets, corrugated boxes, and thermocol corners. Fragile items receive custom wooden crating when needed. Each item is labeled 'FRAGILE' and handled separately. Our packers undergo specialized training for delicate items including glassware, electronics, and antiques."
  },
  {
    question: "Can you help with vehicle transportation?",
    answer: "Yes, we offer both car and bike transportation services across India. We use enclosed carriers for premium cars and specialized crating for bikes. All vehicles are loaded using hydraulic systems to prevent any damage. GPS tracking and insurance are included."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept multiple payment methods including cash, UPI (Google Pay, PhonePe, Paytm), bank transfers (NEFT/IMPS), credit/debit cards, and cheques. A 30% advance is required at booking, with the balance payable upon successful delivery."
  },
  {
    question: "Do you provide storage services?",
    answer: "Yes, we have secure, climate-controlled warehouses in major cities. Storage is available for both short-term (days to weeks) and long-term (months to years) requirements. Facilities include 24/7 CCTV, fire safety systems, pest control, and individual unit access."
  },
  {
    question: "How do I track my shipment during transit?",
    answer: "Every shipment is tracked via GPS. You'll receive a unique tracking ID and login to our customer portal. Real-time location updates are available 24/7. Additionally, our dedicated coordinator provides regular phone/WhatsApp updates at key checkpoints."
  },
  {
    question: "What items are not allowed for transport?",
    answer: "We cannot transport hazardous materials (flammable liquids, explosives), perishable food items, live plants, pets, illegal substances, or items prohibited by law. Valuables like cash, jewelry, and important documents should be carried personally."
  },
  {
    question: "Can I reschedule my moving date?",
    answer: "Yes, you can reschedule free of charge up to 48 hours before the scheduled move. Changes within 48 hours may attract a nominal rescheduling fee. We understand plans change and try to accommodate as flexibly as possible."
  },
  {
    question: "Do you provide unpacking and arrangement services?",
    answer: "Absolutely! Our comprehensive package includes unpacking all boxes, placing furniture as per your direction, reassembling any dismantled furniture, and proper disposal of packing materials. This service can also be added separately to basic packages."
  },
  {
    question: "What is your damage claim process?",
    answer: "In the rare event of damage, report it immediately upon delivery and note it on the delivery receipt. Submit photos and the damage claim form within 24 hours. Our claims team investigates promptly, and eligible claims are settled within 7-14 working days."
  },
  {
    question: "Are your workers verified and trained?",
    answer: "All our workers undergo thorough background verification including police verification and address checks. They receive 3 weeks of training covering packing techniques, handling equipment, customer service, and safety protocols. We also conduct regular skill upgrades."
  },
  {
    question: "Do you move during weekends and holidays?",
    answer: "Yes, we operate 7 days a week including Sundays and most public holidays. Weekend and holiday bookings are popular for office relocations to minimize business disruption. Advance booking is recommended for these slots."
  },
  {
    question: "How do you handle monsoon season moves?",
    answer: "Our monsoon-ready fleet features weatherproof containers and waterproof packaging materials. We use additional plastic wrapping and tarpaulin covers. Moisture-sensitive items receive extra protection with silica gel packets. We also monitor weather forecasts to optimize timing."
  }
];

// =====================================================
// CTA CONTENT
// =====================================================
export const CTA_CONTENT = {
  primary: {
    title: "Ready to Move?",
    subtitle: "Get Your Free Quote in 30 Minutes",
    description: "Join 45,000+ happy customers who trusted us with their precious belongings.",
    buttonText: "Get Free Quote",
    secondaryButton: "Call Now"
  },
  floating: {
    phone: "Call Us",
    whatsapp: "WhatsApp",
    quote: "Quick Quote"
  }
};

// =====================================================
// INDUSTRIES SERVED
// =====================================================
export const INDUSTRIES = [
  { name: "IT & Technology", icon: "💻", count: "5000+" },
  { name: "Healthcare", icon: "🏥", count: "800+" },
  { name: "Education", icon: "🎓", count: "1200+" },
  { name: "Manufacturing", icon: "🏭", count: "600+" },
  { name: "Retail & E-commerce", icon: "🛒", count: "2000+" },
  { name: "Banking & Finance", icon: "🏦", count: "400+" },
  { name: "Government", icon: "🏛️", count: "300+" },
  { name: "Hospitality", icon: "🏨", count: "500+" }
];

// =====================================================
// SEO DATA
// =====================================================
export const SEO_DATA = {
  home: {
    title: "Janu Packers and Movers - Best Packers and Movers in India | Trusted Since 2009",
    description: "India's most trusted packers and movers. Professional household, office, car & bike shifting services across 500+ cities. Get free quote now! 50,000+ successful moves.",
    keywords: "packers and movers, best packers and movers India, household shifting, office relocation, car transport, bike transport, moving company India"
  },
  about: {
    title: "About Janu Packers and Movers | 15+ Years of Trusted Relocations",
    description: "Learn about India's leading moving company. 15+ years experience, 50,000+ successful moves, and 4.9★ customer rating. Discover our story and values.",
    keywords: "about Janu Packers and Movers, moving company history, trusted movers India, relocation experts"
  },
  services: {
    title: "Our Services | Packing, Moving, Storage & Transportation",
    description: "Complete relocation services - household shifting, office moves, car transport, bike shipping, storage solutions. Professional service across India.",
    keywords: "moving services, packing services, transportation services, storage services, relocation services India"
  },
  contact: {
    title: "Contact Janu Packers and Movers | Get Free Moving Quote",
    description: "Contact us for free moving quote. Call +91-9392108148 or WhatsApp. Expert consultation for household, office, and vehicle relocation needs.",
    keywords: "contact packers movers, moving quote, relocation consultation, packers movers phone number"
  },
  gallery: {
    title: "Our Work Gallery | Moving Excellence in Pictures",
    description: "See our professional packing, moving and delivery work. High-quality packaging, modern fleet, and satisfied customers across India.",
    keywords: "packers movers gallery, moving photos, packing quality, fleet images"
  },
  locations: {
    title: "Service Locations | Packers and Movers Across India",
    description: "We serve 500+ cities across India. Find professional packers and movers in your city. Hyderabad, Bangalore, Chennai, Mumbai, Delhi & more.",
    keywords: "packers movers locations, moving services cities, relocation India cities"
  }
};

// =====================================================
// GALLERY CATEGORIES
// =====================================================
export const GALLERY_CATEGORIES = [
  { id: "packing", label: "Professional Packing" },
  { id: "loading", label: "Loading & Unloading" },
  { id: "fleet", label: "Our Fleet" },
  { id: "warehouse", label: "Warehouse Facilities" },
  { id: "team", label: "Our Team" },
  { id: "delivery", label: "Successful Deliveries" }
];

// =====================================================
// QUOTE FORM OPTIONS
// =====================================================
export const QUOTE_FORM = {
  moveTypes: [
    "Household Shifting",
    "Office Relocation",
    "Car Transportation",
    "Bike Transport",
    "Local Shifting",
    "Interstate Moving",
    "Warehouse Storage",
    "Industrial Relocation"
  ],
  homeTypes: [
    "1 RK / Studio",
    "1 BHK",
    "2 BHK",
    "3 BHK",
    "4 BHK",
    "Villa / Bungalow",
    "Office",
    "Other"
  ],
  budgetRanges: [
    "Under ₹5,000",
    "₹5,000 - ₹15,000",
    "₹15,000 - ₹30,000",
    "₹30,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "Above ₹1,00,000"
  ],
  timeframes: [
    "Within 3 days",
    "Within 1 week",
    "Within 2 weeks",
    "Within 1 month",
    "Flexible"
  ]
};
