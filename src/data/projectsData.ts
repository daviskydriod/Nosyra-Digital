import ecoHero from "@/assets/eco-hero.png";
import lianHero from "@/assets/lian-hero.png";
import catglobalHero from "@/assets/catglobal-hero.png";
import vikHero from "@/assets/vik-hero.png";
import gtHero from "@/assets/gt-hero.png";
import urhuHero from "@/assets/urhu-hero.png";
import honHero from "@/assets/hon-hero.png";
import thmHero from "@/assets/thm-hero.png";
import zunanyaHero from "@/assets/zunanya-hero.png";
import swanilitaHero from "@/assets/swanilita-hero.png";
import maybeenHero from "@/assets/maybeen-hero.png";
import handygidiHero from "@/assets/handygidi-hero.png";
import micdebHero from "@/assets/micdeb-hero.png";
import joyaboHero from "@/assets/joyabo-hero.png";
import woodCoffiePreview from "@/assets/portfolio-sites/wood-coffie-hero.jpg";
import mandariLive from "@/assets/portfolio-sites/live/mandari-construction-supplies.webp";
import africaTomorrowLive from "@/assets/portfolio-sites/live/africa-tomorrow.webp";
import easeGraceLive from "@/assets/portfolio-sites/live/ease-n-grace-autos.webp";
import samanadeLive from "@/assets/portfolio-sites/live/samanade-crd.webp";

// ── Social Media Assets ──────────────────────────────────────────────────────
import joyaboSm1 from "@/assets/Joyabo (1).jpeg";
import joyaboSm2 from "@/assets/Joyabo (2).jpeg";
import joyaboSm3 from "@/assets/Joyabo (3).jpeg";

import ecoSm1 from "@/assets/Ekoconnect Concierge  (1).png";
import ecoSm2 from "@/assets/Ekoconnect Concierge  (2).png";
import ecoSm3 from "@/assets/Ekoconnect Concierge  (3).png";

import maybenSm1 from "@/assets/Mayben Engineering  (1).png";
import maybenSm2 from "@/assets/Mayben Engineering  (2).png";
import maybenSm3 from "@/assets/Mayben Engineering  (3).png";

import pearlSm1 from "@/assets/Pearl Paradise Resort  (1).png";
import pearlSm2 from "@/assets/Pearl Paradise Resort  (2).png";
import pearlSm3 from "@/assets/Pearl Paradise Resort  (3).png";

import teabeazSm1 from "@/assets/Teabeaz Foods  (1).png";
import teabeazSm2 from "@/assets/Teabeaz Foods  (2).png";
import teabeazSm3 from "@/assets/Teabeaz Foods  (3).png";

import zunanyaSm1 from "@/assets/Zunanyasluxury (1).png";
import zunanyaSm2 from "@/assets/Zunanyasluxury (2).png";
import zunanyaSm3 from "@/assets/Zunanyasluxury (3).png";

import mandariSm1 from "@/assets/Mandari  (1).png";
import mandariSm2 from "@/assets/Mandari  (2).png";
import mandariSm3 from "@/assets/Mandari  (3).png";

import thmSm1 from "@/assets/Thm Wellness Co (1).png";
import thmSm2 from "@/assets/Thm Wellness Co (2).png";
import thmSm3 from "@/assets/Thm Wellness Co (3).png";

const ALL_PROJECTS = [
  // ── WEB DESIGN PROJECTS ────────────────────────────────────────────────────
  {
    id: 1,
    type: "web" as const,
    slug: "eko-connect-concierge",
    title: "Eko Connect Concierge",
    category: "Web Design",
    image: ecoHero,
    link: "https://www.ekoconnectconcierge.com.ng/",
    description: "Professional concierge services platform with seamless booking and customer management.",
    fullDescription:
      "Eko Connect Concierge is a premium digital platform designed to bridge the gap between discerning clients and world-class concierge services in Lagos, Nigeria. The platform offers an intuitive interface for booking a wide range of lifestyle services  from airport transfers and event planning to personal shopping and luxury experiences. We engineered a robust customer management portal allowing both clients and service agents to track requests in real-time, communicate seamlessly, and manage bookings end-to-end.",
    tags: ["React", "Booking System", "Customer Portal"],
    challenge:
      "The client needed to digitise a previously phone-based concierge operation while maintaining the personalised, high-touch feel their clients expected. The challenge was balancing automation efficiency with a luxury brand experience.",
    solution:
      "We built a custom React application with a real-time booking engine, role-based dashboards for agents and clients, and a refined design language that communicates exclusivity and trust. Smooth micro-interactions and a thoughtful information architecture make complex workflows feel effortless.",
    results: [
      "Launched January 2026  early results already showing strong client uptake",
      "Manual booking errors significantly reduced within the first weeks",
      "Service request turnaround noticeably faster since go-live",
    ],
    year: "2026",
    duration: "6 weeks",
    services: ["UI/UX Design", "Frontend Development", "Backend Integration", "QA Testing"],
  },
  {
    id: 2,
    type: "web" as const,
    slug: "liana-flowers",
    title: "Liana Flowers",
    category: "E-Commerce",
    image: lianHero,
    link: "https://www.liananaflowers.com.ng",
    description: "Premium flower delivery service with elegant design and a simple, seamless checkout experience.",
    fullDescription:
      "Liana Flowers is a premium floral brand delivering handcrafted arrangements across Nigeria. We created a full e-commerce experience that mirrors the elegance of the brand  from a beautifully curated product catalogue to a straightforward checkout flow. Customers complete their orders via WhatsApp and bank transfer, keeping the process personal, familiar, and friction-free.",
    tags: ["E-Commerce", "WhatsApp Integration", "Product Catalog"],
    challenge:
      "Flowers are highly time-sensitive products. The platform needed to handle perishable inventory, same-day delivery slots, and emotionally driven purchase decisions  all while looking stunning on mobile.",
    solution:
      "We designed an emotion-first shopping experience with rich imagery and a clean, simple checkout flow. Orders are confirmed through WhatsApp for a personal touch, with bank transfer as the payment method  keeping things accessible and trusted for Nigerian customers. The mobile-first approach ensured the majority of customers on phones had an experience as polished as desktop.",
    results: [
      "Launched January 2026  order volume picking up steadily week on week",
      "WhatsApp checkout driving strong early engagement from mobile users",
      "Minimal drop-off reported since launch  customers completing orders with ease",
    ],
    year: "2026",
    duration: "4 weeks",
    services: ["E-Commerce Strategy", "UI/UX Design", "WhatsApp Checkout Integration", "SEO Setup"],
  },
  {
    id: 3,
    type: "web" as const,
    slug: "cat-global",
    title: "CAT Global",
    category: "Corporate Website",
    image: catglobalHero,
    link: "https://www.cat-ag.com/",
    description: "Modern corporate website showcasing professional services and company expertise.",
    fullDescription:
      "CAT Global required a commanding digital presence that reflected their authority in the international professional services space. We crafted a corporate website that communicates credibility, scale, and expertise through clean architecture, purposeful typography, and a confident visual language. Every section guides prospects through a trust-building journey that ends in a clear call-to-action.",
    tags: ["Corporate", "Professional", "Responsive"],
    challenge:
      "The client had outdated brand collateral and needed a site that could serve enterprise clients and government partners across multiple regions.",
    solution:
      "We built a modular, CMS-driven site with a scalable design system. The content hierarchy was restructured to prioritise key service pillars. Performance was a primary concern  the site loads in under 1.5 seconds on 3G connections.",
    results: [
      "Launched January 2026  early enquiries already coming in from new regions",
      "Bounce rate trending downward in the first weeks post-launch",
      "Site performance hitting green scores across Core Web Vitals from day one",
    ],
    year: "2026",
    duration: "5 weeks",
    services: ["Brand Strategy", "Web Design", "CMS Integration", "Performance Optimisation"],
  },
  {
    id: 4,
    type: "web" as const,
    slug: "viktrotech",
    title: "Viktrotech",
    category: "Waste Management",
    image: vikHero,
    link: "https://www.viktrotech.com/",
    description: "Nigeria's premier bio-sewage and waste management company delivering innovative biological sewer treatment systems for homes and businesses.",
    fullDescription:
      "Viktrotech needed a digital presence that clearly communicated their specialized expertise in bio-sewage systems to a broad audience  from homeowners to commercial developers and NGOs. We built a platform that positions them as Nigeria's leading waste management innovator, showcasing their unique ability to design and install biological sewer treatment systems in both dry and waterlogged areas.",
    tags: ["Waste Management", "Bio-Sewage", "Environmental Solutions"],
    challenge:
      "Translating a highly technical and niche service  biological sewage treatment systems  into a compelling digital experience that resonates with both individual homeowners and large commercial clients, while building trust in an industry where credibility is everything.",
    solution:
      "We structured the site around the environments Viktrotech serves  domestic, commercial, waterlogged, and dry areas  making it easy for any visitor to immediately see themselves in the solution. Clean visual storytelling and outcome-focused copy replaced technical jargon, highlighting environmental impact and reliability.",
    results: [
      "Launched January 2026  commercial enquiries coming in within the first weeks",
      "Early visitor data shows strong time-on-site from target audiences",
      "Key service pages already gaining traction in search results",
    ],
    year: "2026",
    duration: "4 weeks",
    services: ["Web Design", "Content Strategy", "SEO"],
  },
  {
    id: 5,
    type: "web" as const,
    slug: "gt-green-petrochemical",
    title: "GT Green Petrochemical",
    category: "Corporate Website",
    image: gtHero,
    link: "https://www.gtgreenpetrochemical.com.ng/",
    description: "Professional petrochemical company website showcasing industry leadership and sustainability.",
    fullDescription:
      "GT Green Petrochemical operates in one of Nigeria's most competitive industries. We built a website that positioned them as a modern, sustainability-focused leader  moving away from the typically dated aesthetic of the sector toward a clean, confident digital identity that appeals to international partners and investors.",
    tags: ["Corporate", "Industrial", "Sustainability"],
    challenge:
      "The petrochemical industry has a reputation for outdated web presence. The client wanted to stand out while still appearing credible and established to large institutional partners.",
    solution:
      "We combined authoritative typography with clean, data-driven layouts and subtle green accents that nod to sustainability without feeling greenwashed. The investor relations section was built with a clear information hierarchy.",
    results: [
      "Launched January 2026 already generating interest from international partners",
      "Brand perception noticeably elevated since the relaunch",
      "Site passing Core Web Vitals with green scores from day one",
    ],
    year: "2026",
    duration: "5 weeks",
    services: ["Brand Positioning", "Web Design", "Content Writing", "Technical SEO"],
  },
  {
    id: 6,
    type: "web" as const,
    slug: "uruhu-solutions",
    title: "Uruhu Solutions",
    category: "Web Design",
    image: urhuHero,
    link: "https://uruhusolutions.com.ng/",
    description: "Comprehensive business solutions platform with modern design and client-focused approach.",
    fullDescription:
      "Uruhu Solutions offers a diverse range of business consulting and support services. We designed a platform that clearly communicates their value proposition across multiple service verticals, helping potential clients quickly find the specific solution they need and take action.",
    tags: ["Business Solutions", "Consulting", "Modern Design"],
    challenge:
      "With a broad service offering, there was a risk of the site feeling unfocused. The navigation and content architecture needed to route different visitor types to the right destination without confusion.",
    solution:
      "We implemented a needs-based navigation model where visitors self-select their primary problem. Each service has a dedicated landing zone with tailored messaging, social proof, and a clear next step.",
    results: [
      "Launched January 2026 contact form submissions climbing steadily",
      "Early lead quality strong, with visitors engaging across multiple service pages",
      "Pages per session averaging well above typical industry benchmarks",
    ],
    year: "2026",
    duration: "4 weeks",
    services: ["UX Strategy", "Web Design", "Copywriting", "Analytics Setup"],
  },
  {
    id: 7,
    type: "web" as const,
    slug: "honters-cruise",
    title: "Honters Cruise",
    category: "E-Commerce",
    image: honHero,
    link: "https://www.honterscruise.com.ng/",
    description: "Premium cruise booking platform with seamless reservation system and travel packages.",
    fullDescription:
      "Honters Cruise is a premium travel brand offering curated cruise packages and travel experiences. We built a booking-first platform that makes discovering and reserving dream vacations as pleasurable as the trips themselves immersive visuals, clear package structures, and a streamlined reservation flow.",
    tags: ["Travel", "Booking System", "E-Commerce"],
    challenge:
      "Travel is an aspiration-driven purchase. The site needed to inspire and sell simultaneously  creating emotional desire while also handling the practical complexity of a multi-variable booking system.",
    solution:
      "We led with cinematic imagery and destination storytelling, then transitioned into a clean booking funnel that reduces friction at each step.",
    results: [
      "Customers moving from browsing to booking faster than anticipated",
      "Support queries minimal post-launch thanks to clear self-service information",
    ],
    year: "2026",
    duration: "5 weeks",
    services: ["Booking System"],
  },
  {
    id: 8,
    type: "web" as const,
    slug: "thm-wellness-company",
    title: "THM Wellness Company",
    category: "Wellness & Health",
    image: thmHero,
    link: "https://www.thmwellnessco.com.ng/",
    description: "Holistic wellness platform offering counseling, therapy, life coaching, and healing services to clients online and globally.",
    fullDescription:
      "THM Wellness Company is a holistic wellness brand dedicated to providing solutions to life's complex problems. We built a warm, trust-driven digital presence that clearly communicates their full suite of services  from counseling and therapy to wellness workshops, healing seminars, public speaking, and life coaching. The platform serves clients online and globally, making professional wellness support accessible to everyone, anywhere in the world.",
    tags: ["Wellness", "Health", "Life Coaching"],
    challenge:
      "Wellness is a deeply personal space. The platform needed to feel safe, approachable, and credible all at once  converting visitors who may be in vulnerable moments into confident first-time clients, while also communicating professional authority.",
    solution:
      "We led with empathetic, human-first design  soft visuals, clear service pathways, and trust signals woven throughout. Each service was given its own clear destination, and booking touchpoints were made as frictionless as possible to lower the barrier for someone taking that first step.",
    results: [
      "Launched February 2026  early sessions booked within the first weeks of going live",
      "Global reach confirmed with inquiries from clients outside Nigeria",
      "Service pages driving strong organic visibility for wellness-related searches",
    ],
    year: "2026",
    duration: "6 weeks",
    services: ["Web Design", "Content Strategy", "SEO", "UI/UX Design"],
  },
  {
    id: 9,
    type: "web" as const,
    slug: "zunanyas-luxury",
    title: "Zunanya's Luxury",
    category: "E-Commerce",
    image: zunanyaHero,
    link: "https://zunanyasluxury.com.ng",
    description: "Premium fashion, fragrance, and art platform offering curated elegance and authentic luxury products.",
    fullDescription:
      "Zunanya's Luxury is a premium digital platform redefining luxury for modern Nigerians, offering fashion, fragrance (perfumes, reed diffusers, scented candles, car diffusers), and art (handcrafted gypsum artworks with scent infusion). The platform emphasizes curated elegance, authentic products, fast nationwide delivery, easy returns, and dedicated WhatsApp support, providing a high-touch customer experience.",
    tags: ["Luxury", "Fashion", "Fragrance", "Art", "E-Commerce"],
    challenge:
      "To digitize a luxury brand experience across diverse product categories while maintaining exclusivity and high-touch customer service, ensuring the online presence reflects the brand's premium quality.",
    solution:
      "Developed a platform with a refined design, showcasing premium products through visual storytelling and clear categorization. Integrated seamless customer support via WhatsApp and optimized for a luxurious user journey.",
    results: [
      "Strong client testimonials and positive brand perception.",
      "Featured in prominent lifestyle publications like Vogue Africa, Guardian Style, and ThisDay Style.",
    ],
    year: "2026",
    duration: "8 weeks",
    services: ["Web Design", "E-Commerce Development", "Brand Strategy", "UI/UX Design"],
  },
  {
    id: 10,
    type: "web" as const,
    slug: "swanilita-studio",
    title: "Swanilita Studio",
    category: "Beauty & Wellness",
    image: swanilitaHero,
    link: "https://swanilitastudio.com.ng",
    description: "Kaduna's premier piercing studio offering professional piercing services and premium jewelry.",
    fullDescription:
      "Swanilita Studio is a professional piercing studio and premium jewelry retailer in Kaduna, Nigeria. Specializing in various piercing types including Conch, Daith, Tragus, Earlobe, Mid Helix, and Catflap, the studio emphasizes artistry, hygiene, and a personalized experience. The platform provides an elegant showcase for services and jewelry, alongside an easy online booking system.",
    tags: ["Piercing", "Jewelry", "Studio", "Beauty", "Booking System"],
    challenge:
      "To establish a premium brand identity in a niche market, ensuring trust and professionalism in body art, and providing a seamless online booking and shopping experience for clients.",
    solution:
      "Created an elegant website showcasing detailed piercing services, high-quality jewelry collections, and an intuitive online booking system. The design emphasizes hygiene, artistry, and integrates customer testimonials to build trust.",
    results: [
      "Successfully positioned as Kaduna's premier piercing studio.",
      "Enhanced online presence with clear service offerings and streamlined appointment scheduling.",
    ],
    year: "2026",
    duration: "4 weeks",
    services: ["Web Design", "Booking System Integration", "E-Commerce Development", "UI/UX Design"],
  },
  {
    id: 11,
    type: "web" as const,
    slug: "mayben-engineering",
    title: "Mayben Engineering",
    category: "Agricultural Machinery",
    image: maybeenHero,
    link: "https://maybenengineering.com/",
    description: "Ghanaian company specializing in precision-fabricated agricultural machinery, including automated feed mixing machines.",
    fullDescription:
      "Mayben Engineering, based in Kumasi, Ghana, specializes in precision-fabricated agricultural machinery for African farmers. They offer a range of products including automated feed mixing machines, grinding mills, cereal dryers, toasters, and conveyors. Their solutions address the challenges of manual feed mixing by providing efficient, consistent, and labor-saving equipment, with a focus on durability and on-site support.",
    tags: ["Agricultural Machinery", "Feed Mills", "Ghana", "Engineering", "Automation"],
    challenge:
      "To provide African farmers with durable, efficient, and easy-to-operate agricultural machinery that addresses the inefficiencies and inconsistencies of manual feed preparation, while building trust and offering comprehensive support.",
    solution:
      "Developed a range of automated machines for cleaning, grinding, and mixing feed, along with other essential agricultural equipment. The company emphasizes local fabrication, on-site installation, operator training, and a 12-month warranty with ongoing technical support.",
    results: [
      "Significant reduction in feed preparation time and labor costs for farmers.",
      "Increased production capacity and consistent feed quality, leading to healthier livestock and improved profits.",
      "Strong customer testimonials highlighting ease of operation, durability, and excellent support.",
    ],
    year: "2026",
    duration: "5 weeks",
    services: ["Product Design", "Manufacturing", "Web Design", "Customer Support"],
  },
  {
    id: 12,
    type: "web" as const,
    slug: "handygidi-training-centre",
    title: "HandyGidi Training Centre",
    category: "Education & Training",
    image: handygidiHero,
    link: "https://handygiditrainingcentre.com",
    description: "Abuja's practical digital & business skills academy offering hands-on training for career development.",
    fullDescription:
      "HandyGidi Training Centre is Abuja's leading hands-on digital and business skills academy, dedicated to equipping individuals with practical, job-ready skills. They offer a diverse range of courses including Computer Appreciation, AI & Data Analysis, Social Media Management, Graphic Design, Web Design, and Digital Marketing. The center focuses on transforming learners through practical application and real-world experience, ensuring high employability.",
    tags: ["Education", "Training", "Digital Skills", "Business Skills", "Abuja"],
    challenge:
      "To effectively showcase a broad range of practical courses and attract students seeking career-oriented digital and business skills training in a competitive market.",
    solution:
      "Designed an engaging and informative website that highlights their diverse course offerings, success stories, and unique teaching methodology. Integrated clear calls-to-action for course exploration and enrollment, along with student testimonials.",
    results: [
      "Increased student inquiries and enrollments across various digital and business skill courses.",
      "Established a strong online presence as a reputable training center in Abuja.",
    ],
    year: "2026",
    duration: "4 weeks",
    services: ["Web Design", "Content Strategy", "Course Management System Integration", "UI/UX Design"],
  },
  {
    id: 13,
    type: "web" as const,
    slug: "micdeb-global-motors",
    title: "MicDeb Global Motors",
    category: "Automotive",
    image: micdebHero,
    link: "https://micdebglobalmotors.com.ng",
    description: "Lagos-based car importer specializing in brand new and pre-owned German, American, and Dubai spec vehicles.",
    fullDescription:
      "MicDeb Global Motors is a premier car importer in Lagos, Nigeria, offering a wide selection of brand new and pre-owned vehicles. They specialize in sourcing high-quality German, American, and Dubai specification cars, including luxury brands like Mercedes-Benz, BMW, Porsche, Audi, Range Rover, Rolls-Royce, and Bentley, as well as popular models from Lexus, Toyota, Honda, Ford, Chevrolet, Dodge, and Volkswagen. The company prides itself on a seamless import process and exceptional customer service.",
    tags: ["Automotive", "Car Import", "Luxury Cars", "Lagos", "E-Commerce"],
    challenge:
      "To create a sophisticated online platform that effectively showcases a diverse inventory of luxury and premium vehicles, builds trust with potential buyers, and streamlines the car purchasing process.",
    solution:
      "Developed a visually rich website with a comprehensive inventory display, detailed vehicle specifications, and clear calls-to-action for inquiries and pre-orders. The design emphasizes luxury, reliability, and a customer-centric approach.",
    results: [
      "Enhanced online visibility for their extensive vehicle inventory.",
      "Improved customer engagement through a professional and easy-to-navigate platform for car browsing and inquiries.",
    ],
    year: "2026",
    duration: "5 weeks",
    services: ["Web Design", "Inventory Management System", "E-Commerce Development", "UI/UX Design"],
  },
  {
    id: 14,
    type: "web" as const,
    slug: "joyabo-edu-consult",
    title: "Joyabo Edu Consult",
    category: "Education Consulting",
    image: joyaboHero,
    link: "https://joyaboeduconsult.com",
    description: "Ghanaian educational consultancy connecting individuals to global work, study, and travel opportunities.",
    fullDescription:
      "Joyabo Edu Consult is a Ghanaian educational consultancy dedicated to connecting ambitious individuals to global opportunities in education and employment. They offer comprehensive services including work abroad programs (full-time employment in Europe & Canada), study & work programs (enrollment in top universities with legal work rights), and fast-track travel services (visa assistance, travel planning, documentation support). The consultancy aims to provide a gateway to international experiences and career development.",
    tags: ["Education", "Consulting", "Ghana", "Study Abroad", "Work Abroad", "Travel"],
    challenge:
      "To clearly communicate a wide range of complex international education, work, and travel services to a diverse audience, building trust and simplifying the application process.",
    solution:
      "Designed an intuitive and informative website that categorizes their services, provides clear application guidance, and highlights success stories. The platform emphasizes reliability, global reach, and personalized consultation.",
    results: [
      "Increased inquiries and successful placements for global work, study, and travel programs.",
      "Established a credible online presence as a trusted educational consultancy in Ghana.",
    ],
    year: "2026",
    duration: "4 weeks",
    services: ["Web Design", "Content Strategy", "Application Management System", "UI/UX Design"],
  },

  {
    id: 26,
    type: "web" as const,
    slug: "mandari-construction-supplies",
    title: "Mandari Construction Supplies",
    category: "Construction Supplies",
    image: mandariLive,
    link: "https://mandariconstructionsupplies.com/",
    description: "A Ghana-wide construction supplies platform for materials, chemicals, formworks, and rentals.",
    fullDescription:
      "Mandari Construction Supplies is a Ghanaian construction supply partner offering hardware, waterproofing solutions, construction chemicals, concrete admixtures, formworks, and rentals. We shaped the website around a clear product discovery and quote journey, helping contractors and developers find trusted supplies and request pricing with confidence.",
    tags: ["Construction", "E-Commerce", "Ghana", "Product Catalogue", "Web Design"],
    challenge: "Make a broad construction supply catalogue easy to browse while building trust with contractors, developers, and procurement teams.",
    solution: "Created a product-led digital storefront with clear category navigation, featured ISONEM products, quote-focused calls to action, and trust signals for Ghana-wide delivery.",
    results: ["Clearer route from product discovery to quote request", "Stronger presentation for Mandari's construction supply range"],
    year: "2026",
    duration: "5 weeks",
    services: ["E-Commerce Strategy", "Web Design", "Product Catalogue", "Development"],
  },

  {
    id: 22,
    type: "web" as const,
    slug: "africa-tomorrow",
    title: "Africa Tomorrow",
    category: "Education & AI",
    image: africaTomorrowLive,
    link: "https://africantomorrow.com/",
    description: "A bold learning platform helping Africa’s next generation build practical AI skills.",
    fullDescription: "Africa Tomorrow needed a clear platform for its AI learning mission. We shaped the experience around the learner journey: understand the opportunity, explore the programme, and take the next step.",
    tags: ["Education", "AI", "Ghana", "Web Design"],
    challenge: "Make a new learning initiative feel credible, useful, and easy to join.",
    solution: "A focused landing experience with strong programme messaging, clear calls to action, and a future-facing visual direction.",
    results: ["Clearer programme positioning", "Stronger first impression for learners and partners"],
    year: "2026",
    duration: "4 weeks",
    services: ["Strategy", "Web Design", "Development", "Content Structure"],
  },
  {
    id: 23,
    type: "web" as const,
    slug: "ease-n-grace-autos",
    title: "Ease n Grace Autos",
    category: "Automotive",
    image: easeGraceLive,
    link: "https://easengrace.com/",
    description: "A polished Ghanaian mobility platform for reliable car hire and airport transfers.",
    fullDescription: "Ease n Grace Autos needed a simple digital route from travel intent to booking. We positioned the service around reliability, clear vehicle choices, and easy contact.",
    tags: ["Automotive", "Car Hire", "Ghana", "Booking"],
    challenge: "Turn a service people often book by phone into a more confident online decision.",
    solution: "A clean service structure with direct booking actions and trust-led messaging for airport and everyday travel.",
    results: ["Clearer offer presentation", "A more credible booking entry point"],
    year: "2026",
    duration: "4 weeks",
    services: ["UX Strategy", "Web Design", "Development"],
  },
  {
    id: 24,
    type: "web" as const,
    slug: "wood-coffie-furniture-works",
    title: "Wood Coffie Furniture Works",
    category: "Furniture & Interiors",
    image: woodCoffiePreview,
    link: "https://www.woodcoffiefurnitureworks.com/",
    description: "A premium Ghanaian furniture site built to showcase custom craft and considered spaces.",
    fullDescription: "Wood Coffie Furniture Works needed its online presence to communicate the quality behind its furniture. The experience gives the craft, materials, and finished spaces more room to speak.",
    tags: ["Furniture", "Ghana", "Craft", "Web Design"],
    challenge: "Make a physical product and custom service feel premium before the first conversation.",
    solution: "A visual-first structure that gives the work priority and makes custom enquiries simple.",
    results: ["Stronger premium positioning", "Clearer path to custom enquiries"],
    year: "2026",
    duration: "4 weeks",
    services: ["Art Direction", "Web Design", "Development"],
  },
  {
    id: 25,
    type: "web" as const,
    slug: "samanade-crd",
    title: "Samanade C.R.D Enterprise",
    category: "Construction & Interiors",
    image: samanadeLive,
    link: "https://www.samanadecrd.com/",
    description: "A complete construction and fabrication showcase for a growing Ghanaian enterprise.",
    fullDescription: "Samanade C.R.D brings construction, drafting, fabrication, interiors, and rentals together. The website turns that broad capability into a clear route through services, work, and contact.",
    tags: ["Construction", "Architecture", "Ghana", "Fabrication"],
    challenge: "Present many connected services without making the business feel scattered.",
    solution: "A service-led structure with direct contact actions, project context, and a strong visual introduction.",
    results: ["A clearer service architecture", "More professional digital presence for new enquiries"],
    year: "2026",
    duration: "5 weeks",
    services: ["Information Architecture", "Web Design", "Development", "Content Structure"],
  },

  // ── SOCIAL MEDIA PROJECTS ──────────────────────────────────────────────────
  {
    id: 15,
    type: "social" as const,
    slug: "joyabo-social-media",
    title: "Joyabo Montessori",
    category: "Social Media",
    image: joyaboSm1,
    gallery: [joyaboSm1, joyaboSm2, joyaboSm3],
    link: "https://joyaboeduconsult.com",
    description: "Strategic social media content designed to build trust and drive inquiries for a Ghanaian educational consultancy.",
    fullDescription:
      "We created a cohesive social media content system for Joyabo Montessori Educational Consult & Travel Services, positioning them as the go-to authority for international study, work, and travel placements. Every post was crafted to educate, inspire, and convert  moving followers from awareness to direct inquiry.",
    tags: ["Social Media", "Content Design", "Education", "Ghana"],
    challenge:
      "Building credibility and generating quality inquiries in a market flooded with untrustworthy visa and travel consultancies. The content needed to communicate professionalism and proven results instantly.",
    solution:
      "We developed a branded content framework  consistent typography, colour palette, and tone  with a mix of testimonial posts, service explainers, and urgency-driven CTAs tailored for Instagram and Facebook.",
    results: [
      "Consistent brand voice established across all social platforms.",
      "Engagement and direct message inquiries increased following content rollout.",
      "Audience trust strengthened through client success story posts.",
    ],
    year: "2026",
    duration: "Ongoing",
    platforms: ["Instagram", "Facebook"],
    postsDelivered: "15 Posts",
    services: ["Social Media Design", "Content Strategy", "Copywriting"],
  },
  {
    id: 16,
    type: "social" as const,
    slug: "ekoconnect-social-media",
    title: "Eko Connect Concierge",
    category: "Social Media",
    image: ecoSm1,
    gallery: [ecoSm1, ecoSm2, ecoSm3],
    link: "https://www.ekoconnectconcierge.com.ng/",
    description: "Luxury-toned social media content that reinforces Eko Connect's premium concierge brand across Instagram and Facebook.",
    fullDescription:
      "For Eko Connect Concierge, we produced social media content that mirrors the exclusivity of their service offering. Each post communicates speed, professionalism, and the high-touch experience that sets them apart in the Lagos concierge market — from airport transfers to bespoke event management.",
    tags: ["Social Media", "Content Design", "Luxury", "Lagos"],
    challenge:
      "Conveying a premium, trust-heavy service on social media  where attention spans are short and competitors are loud  without compromising the brand's refined identity.",
    solution:
      "We designed content around visual restraint and confident messaging. Clean layouts, muted luxury tones, and sharp copy made each post feel elevated rather than promotional.",
    results: [
      "Brand presence elevated on Instagram with a polished, consistent aesthetic.",
      "High-value service enquiries driven directly from social content.",
      "Audience engagement growing steadily post content rollout.",
    ],
    year: "2026",
    duration: "Ongoing",
    platforms: ["Instagram", "Facebook"],
    postsDelivered: "15 Posts",
    services: ["Social Media Design", "Content Strategy", "Copywriting"],
  },
  {
    id: 17,
    type: "social" as const,
    slug: "mayben-social-media",
    title: "Mayben Engineering",
    category: "Social Media",
    image: maybenSm1,
    gallery: [maybenSm1, maybenSm2, maybenSm3],
    link: "https://maybenengineering.com/",
    description: "Industrial-strength social media content that showcases Mayben Engineering's machinery and drives B2B leads from Ghanaian farmers.",
    fullDescription:
      "We developed a results-focused social media content strategy for Mayben Engineering, translating their technical agricultural machinery into compelling visual stories for Facebook and Instagram. The content was engineered to reach farm owners, agribusiness operators, and cooperative managers — turning complex product specs into clear, benefit-led messaging.",
    tags: ["Social Media", "Content Design", "Agriculture", "Ghana", "B2B"],
    challenge:
      "Agricultural machinery is not a naturally visual or exciting product category for social media. The content had to simplify complexity, communicate ROI, and cut through in feeds dominated by consumer brands.",
    solution:
      "We led with outcome-first messaging  showing what life looks like after buying the machine  paired with clean product visuals and real customer outcomes. Posts were structured to educate and convert farm-owning decision makers.",
    results: [
      "Product visibility significantly increased among target farming communities.",
      "Direct WhatsApp inquiries traced back to social media posts.",
      "Strong engagement from Ghanaian agribusiness audiences.",
    ],
    year: "2026",
    duration: "Ongoing",
    platforms: ["Instagram", "Facebook"],
    postsDelivered: "15 Posts",
    services: ["Social Media Design", "Content Strategy", "Copywriting"],
  },
  {
    id: 18,
    type: "social" as const,
    slug: "pearl-paradise-resort-social-media",
    title: "Pearl Paradise Resort",
    category: "Social Media",
    image: pearlSm1,
    gallery: [pearlSm1, pearlSm2, pearlSm3],
    link: "#",
    description: "Aspirational resort social media content crafted to inspire getaways and drive direct bookings.",
    fullDescription:
      "Pearl Paradise Resort needed content that sold an experience, not just a room. We built a social media presence that captured the feeling of escape  warm visuals, evocative copy, and strategic posting cadence designed to turn followers into guests. Every piece of content was crafted to make scrollers stop, dream, and book.",
    tags: ["Social Media", "Content Design", "Hospitality", "Resort"],
    challenge:
      "The hospitality space on social media is saturated. Standing out required a distinct visual identity and storytelling approach that went beyond generic 'beautiful room' photography.",
    solution:
      "We created a content system built around the guest experience journey  from discovery and dreaming to arrival and checkout  matching each content type to the right stage of the customer decision process.",
    results: [
      "Brand aesthetic cohesively established across Instagram and Facebook.",
      "Direct booking inquiries attributed to social media content.",
      "Follower engagement rate above industry benchmarks for hospitality brands.",
    ],
    year: "2026",
    duration: "Ongoing",
    platforms: ["Instagram", "Facebook"],
    postsDelivered: "15 Posts",
    services: ["Social Media Design", "Content Strategy", "Copywriting"],
  },
  {
    id: 19,
    type: "social" as const,
    slug: "teabeaz-foods-social-media",
    title: "Teabeaz Foods",
    category: "Social Media",
    image: teabeazSm1,
    gallery: [teabeazSm1, teabeazSm2, teabeazSm3],
    link: "#",
    description: "Vibrant, appetite-driven social media content that builds brand love and drives sales for a food brand.",
    fullDescription:
      "Teabeaz Foods required social media content that made people hungry  instantly. We crafted a visual content system that combined bold food photography direction with punchy, flavour-forward copy. The content was built to perform on Instagram and Facebook, driving both brand awareness and repeat purchase behaviour.",
    tags: ["Social Media", "Content Design", "Food & Beverage", "FMCG"],
    challenge:
      "Food brand content lives and dies by appetite appeal. With a crowded FMCG social space, Teabeaz needed a distinct visual language and voice that felt fresh, craveable, and true to the brand.",
    solution:
      "We built a content calendar around key consumption moments  morning, snack time, and social occasions  pairing vibrant visuals with short, punchy captions that spoke directly to the target audience's daily life.",
    results: [
      "Recognisable brand aesthetic established within the first content cycle.",
      "Post saves and shares above average — key signals of strong content resonance.",
      "Direct product inquiries and stockist requests driven from social activity.",
    ],
    year: "2026",
    duration: "Ongoing",
    platforms: ["Instagram", "Facebook"],
    postsDelivered: "15 Posts",
    services: ["Social Media Design", "Content Strategy", "Copywriting"],
  },
  {
    id: 20,
    type: "social" as const,
    slug: "zunanyas-luxury-social-media",
    title: "Zunanya's Luxury",
    category: "Social Media",
    image: zunanyaSm1,
    gallery: [zunanyaSm1, zunanyaSm2, zunanyaSm3],
    link: "https://zunanyasluxury.com.ng",
    description: "Curated luxury social media content that drives desire and positions Zunanya's as Nigeria's premium lifestyle brand.",
    fullDescription:
      "We created an elevated social media content system for Zunanya's Luxury  a Nigerian luxury lifestyle brand spanning fashion, fragrance, and art. Every post was designed to feel like a page from a high-end editorial, communicating the brand's premium positioning while driving direct sales through Instagram and Facebook.",
    tags: ["Social Media", "Content Design", "Luxury", "Fashion", "Nigeria"],
    challenge:
      "Luxury brands on social media must walk a fine line  too promotional and they lose prestige, too editorial and they lose conversions. Zunanya's needed content that did both flawlessly.",
    solution:
      "We developed a dual-track content system: aspirational editorial posts for brand building, and product-led posts with clear purchase CTAs  all unified by a consistent luxury visual language.",
    results: [
      "Brand perceived as a premium lifestyle authority in the Nigerian market.",
      "DM inquiries and website traffic driven directly from social content.",
      "Engagement quality high, with saves and shares from target luxury consumers.",
    ],
    year: "2026",
    duration: "Ongoing",
    platforms: ["Instagram", "Facebook"],
    postsDelivered: "15 Posts",
    services: ["Social Media Design", "Content Strategy", "Copywriting"],
  },
  {
    id: 21,
    type: "social" as const,
    slug: "mandari-construction-social-media",
    title: "Mandari Construction Supplies",
    category: "Social Media",
    image: mandariSm1,
    gallery: [mandariSm1, mandariSm2, mandariSm3],
    link: "#",
    description: "Professional B2B social media content positioning Mandari as the trusted supplier for construction professionals.",
    fullDescription:
      "Mandari Construction Supplies needed a social media presence that spoke directly to contractors, developers, and procurement managers. We built a content system focused on product quality, reliability, and availability  making it easy for construction professionals to choose Mandari with confidence.",
    tags: ["Social Media", "Content Design", "Construction", "B2B"],
    challenge:
      "Construction supplies is a traditionally offline, relationship-driven industry. Creating social media content that felt relevant and valuable to a B2B professional audience required a different approach from consumer-facing brands.",
    solution:
      "We designed content around the buying triggers of construction professionals: product availability, lead times, quality guarantees, and bulk pricing. Posts were direct, credibility-first, and always ended with a clear next step.",
    results: [
      "Professional brand image established consistently across platforms.",
      "Supplier inquiries and RFQs attributed to social media activity.",
      "Content resonating well with target contractor and developer audience.",
    ],
    year: "2026",
    duration: "Ongoing",
    platforms: ["Instagram", "Facebook"],
    postsDelivered: "38 Posts + Cover Pages",
    services: ["Social Media Design", "Content Strategy", "Copywriting"],
  },
  {
    id: 22,
    type: "social" as const,
    slug: "thm-wellness-social-media",
    title: "THM Wellness Company",
    category: "Social Media",
    image: thmSm1,
    gallery: [thmSm1, thmSm2, thmSm3],
    link: "https://www.thmwellnessco.com.ng/",
    description: "Empathetic, trust-building social media content that nurtures audiences toward booking their first wellness session.",
    fullDescription:
      "We developed a social media content system for THM Wellness Company designed around empathy and trust. Wellness audiences require a softer, more considered approach  content needed to meet people where they are emotionally, offer genuine value, and gently guide them toward taking the step of booking a session.",
    tags: ["Social Media", "Content Design", "Wellness", "Health"],
    challenge:
      "Mental health and wellness content must avoid feeling preachy or clinical. The challenge was creating content that felt genuinely supportive without being generic  content that actually resonated with people going through real challenges.",
    solution:
      "We built a content calendar around emotional relevance timely posts tied to real-life stressors, value-led educational content, and gentle CTAs that reduced the perceived barrier to booking. Visuals were warm, human, and carefully considered.",
    results: [
      "Engaged, loyal community growing around the brand's social presence.",
      "Session bookings attributed to social media content touchpoints.",
      "Audience consistently responding positively to educational and supportive posts.",
    ],
    year: "2026",
    duration: "Ongoing",
    platforms: ["Instagram", "Facebook"],
    postsDelivered: "15 Posts",
    services: ["Social Media Design", "Content Strategy", "Copywriting"],
  },
];

const REMOVED_PUBLIC_PROJECTS = new Set(["viktrotech", "handygidi-training-centre", "honters-cruise", "gt-green-petrochemical"]);

type SafeCopy = {
  category: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
  services: string[];
};

const VERIFIED_CASE_STUDIES: Record<string, SafeCopy> = {
  "eko-connect-concierge": {
    category: "Business Website / Service Showcase",
    description: "A service-focused website helping Eko Connect Concierge present concierge and lifestyle services and receive enquiries.",
    fullDescription: "Eko Connect Concierge provides concierge and lifestyle-related services, including travel and customer assistance offerings. Nosyra Digital developed a central online presence where visitors can understand the services and make enquiries.",
    challenge: "The business needed a dedicated online platform to communicate its services rather than relying entirely on social media posts and direct messages.",
    solution: "We developed a service-focused showcase website that organises the business offerings into accessible sections, with enquiry forms, contact pathways, and a blog section.",
    results: ["A central online catalogue of services", "Structured service information and blog content", "Clearer pathways for prospective customers to submit enquiries"],
    tags: ["Business Website", "Service Showcase", "Enquiries"],
    services: ["Website Design & Development", "Service Showcase", "Enquiry Forms", "Blog Functionality"],
  },
  "liana-flowers": {
    category: "E-commerce Website / Online Product Catalogue",
    description: "An online product catalogue giving Liana Flowers customers a central place to discover products and access ordering information.",
    fullDescription: "Liana Flowers needed a digital storefront where customers could discover and explore its products without relying exclusively on social media. Nosyra Digital developed an online product catalogue with product collections, individual product presentation, pricing where provided, and customer ordering and enquiry pathways.",
    challenge: "Product information scattered across social media made it difficult for customers to find specific products, revisit previous posts, or browse the available collection.",
    solution: "We created a dedicated catalogue experience with organised product collections, individual product pages, business information, and straightforward contact and ordering pathways.",
    results: ["A central destination for product discovery", "Organised collections and individual product presentation", "Accessible business, ordering, and enquiry information"],
    tags: ["E-commerce", "Product Catalogue", "Product Discovery"],
    services: ["Website Design & Development", "Product Catalogue", "Product Presentation", "Ordering Pathways"],
  },
  "zunanyas-luxury": {
    category: "E-commerce Website / Product Catalogue",
    description: "A luxury product catalogue with browsing, search, product information, and administration functionality for Zunanya's Luxury.",
    fullDescription: "Zunanya's Luxury required a dedicated digital storefront for presenting its luxury product collections. Nosyra Digital developed a product catalogue website with product browsing and search functionality, supported by a custom administration dashboard for managing product listings.",
    challenge: "The business needed an organised online catalogue where customers could browse products, search for items, and access product information beyond individual social media posts.",
    solution: "We built a catalogue-led website with product listing and search functionality, a custom administration dashboard, and customer contact and enquiry pathways.",
    results: ["A dedicated luxury product discovery platform", "Searchable and organised product listings", "A practical way to add and update catalogue products"],
    tags: ["E-commerce", "Product Search", "Admin Dashboard"],
    services: ["Website Design & Development", "Product Catalogue", "Product Search", "Custom Administration Dashboard"],
  },
  "thm-wellness-company": {
    category: "Wellness Website / Service Website",
    description: "A service-focused wellness website with organised services, booking-related functionality, blog content, and contact pathways.",
    fullDescription: "THM Wellness Company needed a professional online presence to communicate its wellness services and make it easier for prospective customers to learn about the business. Nosyra Digital developed a service-focused website with organised service information, booking calendar functionality, a blog, and customer contact pathways.",
    challenge: "The business needed to present its services clearly, build an organised online presence, and provide visitors with ways to engage with its offerings and ongoing content.",
    solution: "We combined structured wellness service content with booking-related interactions, blog functionality, and clear customer contact pathways.",
    results: ["A central digital presence for wellness services", "Booking-related interactions and contact pathways", "A structured place for useful content and updates"],
    tags: ["Wellness", "Booking Website", "Blog"],
    services: ["Website Design & Development", "Service Presentation", "Booking Functionality", "Blog Functionality"],
  },
  "swanilita-studio": {
    category: "Product Catalogue / Booking Website",
    description: "A product catalogue and booking website bringing Swanilita Studio's products and piercing services together.",
    fullDescription: "Swanilita Studio needed an online platform to present its products, communicate its piercing services, and help customers engage with its offerings. Nosyra Digital developed a product catalogue website with custom booking functionality for piercing services and an administration dashboard for managing product listings.",
    challenge: "The business needed one central online presence for product discovery, service-related bookings, and practical product-listing maintenance.",
    solution: "We brought product presentation, piercing-service booking, customer contact, and catalogue management together in one digital destination.",
    results: ["Product presentation and service booking in one place", "A manageable product catalogue", "Clearer customer discovery and contact pathways"],
    tags: ["Product Catalogue", "Booking", "Admin Dashboard"],
    services: ["Website Design & Development", "Product Catalogue", "Booking Functionality", "Custom Administration Dashboard"],
  },
  "mayben-engineering": {
    category: "Corporate Website / Engineering & Machinery",
    description: "A corporate engineering website presenting Mayben Engineering's machinery, services, business information, and WhatsApp contact pathway.",
    fullDescription: "Mayben Engineering operates in the engineering and machinery space, presenting equipment and related business offerings. Nosyra Digital developed a corporate website that organises the company's business information, machinery and product information, service content, and direct WhatsApp contact pathway.",
    challenge: "The business needed a professional website where prospective customers could learn about the company, explore its machinery and services, and make direct enquiries.",
    solution: "We organised the company, machinery, product, and service information into a professional website with WhatsApp contact integration.",
    results: ["A dedicated digital presence for business offerings", "Structured machinery and service information", "A direct WhatsApp enquiry pathway"],
    tags: ["Corporate Website", "Engineering", "WhatsApp Integration"],
    services: ["Website Design & Development", "Business Information", "Machinery Presentation", "WhatsApp Contact Integration"],
  },
  "micdeb-global-motors": {
    category: "Automotive Website / Vehicle Catalogue",
    description: "An automotive catalogue website with vehicle listings, information display, enquiry pathways, and listing administration for MicDeb Global Motors.",
    fullDescription: "MicDeb Global Motors needed an online platform where customers could discover and explore available vehicles. Nosyra Digital developed an automotive catalogue website with vehicle listings and a custom administration dashboard for adding and managing vehicle listings.",
    challenge: "The business needed a clear way to present available listings, display vehicle information, and make it easier for interested customers to enquire about specific vehicles.",
    solution: "We created a dedicated vehicle catalogue with structured listing presentation, vehicle information display, customer enquiry pathways, and listing management.",
    results: ["A dedicated platform for vehicle discovery", "Structured vehicle information and listings", "A practical way to maintain online vehicle listings"],
    tags: ["Automotive", "Vehicle Catalogue", "Admin Dashboard"],
    services: ["Website Design & Development", "Vehicle Catalogue", "Listing Management", "Enquiry Pathways"],
  },
  "joyabo-edu-consult": {
    category: "Corporate Website / Education Consultancy",
    description: "A business website presenting Joyabo Edu Consult's services with enquiry functionality and administration support.",
    fullDescription: "Joyabo Edu Consult is an education consultancy supporting individuals with education and international opportunity-related services. Nosyra Digital developed a business website with structured service information, an enquiry form, and a custom administration dashboard.",
    challenge: "The business needed a professional digital presence to communicate its services, provide useful information, and create a clear channel for prospective client enquiries.",
    solution: "We organised the business and service content around an enquiry flow and added administration functionality for relevant website content.",
    results: ["A central place to communicate consultancy services", "A clear prospective-client enquiry channel", "Administration support for relevant website content"],
    tags: ["Education Consultancy", "Corporate Website", "Enquiries"],
    services: ["Website Design & Development", "Service Content", "Enquiry Form", "Custom Administration Dashboard"],
  },
  "mandari-construction-supplies": {
    category: "Product Catalogue / Construction Supplies",
    description: "A construction product catalogue with product-specific enquiry forms and administration functionality for Mandarin Construction Supplies.",
    fullDescription: "Mandarin Construction Supplies provides construction-related products and materials. Nosyra Digital developed a product catalogue website with organised product listings, custom product enquiry forms, product-specific enquiry pathways, and a custom administration dashboard.",
    challenge: "The business needed a structured way to display its product range and allow customers to enquire about specific products rather than using a general contact page alone.",
    solution: "We organised the construction product catalogue around product listings and enquiry forms, with functionality for adding and updating products.",
    results: ["A central construction product catalogue", "Product-specific enquiry pathways", "A practical way to maintain product listings"],
    tags: ["Product Catalogue", "Construction Supplies", "Admin Dashboard"],
    services: ["Website Design & Development", "Product Catalogue", "Product Enquiry Forms", "Custom Administration Dashboard"],
  },
  "africa-tomorrow": {
    category: "Corporate Website / Brand Visibility",
    description: "A brand-focused website presenting Africa Tomorrow's identity, mission, work, and visitor contact pathways.",
    fullDescription: "Africa Tomorrow is an initiative focused on AI education, learning, skills development, and future opportunities. Nosyra Digital developed a brand-focused website that presents the organisation and communicates its work through structured website content.",
    challenge: "The organisation needed a dedicated online presence to communicate its mission, explain its work, and give visitors a central place to learn about the initiative.",
    solution: "We developed a structured organisational website focused on brand presentation, information architecture, visitor navigation, and contact pathways.",
    results: ["A central digital presence for the initiative", "Clearer presentation of identity, mission, and work", "Structured information and visitor contact pathways"],
    tags: ["Corporate Website", "Brand Visibility", "Organisational Website"],
    services: ["Website Design & Development", "Brand Presentation", "Content Structure", "Navigation and Contact"],
  },
  "ease-n-grace-autos": {
    category: "Automotive Website / Business Showcase",
    description: "An automotive-focused business website presenting Ease n Grace Autos' offerings and customer contact pathways.",
    fullDescription: "Ease n Grace Autos operates in the automotive and mobility space, providing customers with access to vehicle-related offerings. Nosyra Digital developed an automotive-focused website following a showcase and catalogue approach, with structured information and clear enquiry pathways.",
    challenge: "The business needed a dedicated online presence where visitors could explore its offerings and find a straightforward way to contact the company.",
    solution: "We created a professional automotive showcase with business and vehicle-related content presentation, structured information sections, and contact pathways.",
    results: ["A central digital presence for the business", "Structured presentation of vehicle-related offerings", "Clear customer contact and enquiry pathways"],
    tags: ["Automotive", "Business Showcase", "Enquiries"],
    services: ["Website Design & Development", "Business Showcase", "Vehicle Content Presentation", "Contact Pathways"],
  },
  "wood-coffie-furniture-works": {
    category: "Product Catalogue / Furniture Website",
    description: "A catalogue-style furniture website presenting Wood Coffie Furniture Works' products, services, and enquiry pathways.",
    fullDescription: "Wood Coffie Furniture Works operates in the furniture and interior solutions space, presenting furniture products and related services. Nosyra Digital developed a catalogue-style business website with furniture product presentation, catalogue structure, business information, and customer enquiry pathways.",
    challenge: "The business needed a digital platform to showcase its furniture offerings, help customers explore available products, and provide a straightforward way to make enquiries.",
    solution: "We adapted a catalogue-style website approach to the furniture industry, combining product presentation, business information, and customer enquiries.",
    results: ["A dedicated online destination for furniture offerings", "Clearer product and service presentation", "A straightforward way for prospective customers to enquire"],
    tags: ["Furniture", "Product Catalogue", "Business Website"],
    services: ["Website Design & Development", "Furniture Product Presentation", "Catalogue Structure", "Enquiry Pathways"],
  },
  "samanade-crd": {
    category: "Corporate Website / Business Services",
    description: "A business showcase website presenting Samanade CRD Enterprise's construction, architectural, fabrication, furniture, and installation services.",
    fullDescription: "Samanade CRD Enterprise operates across construction-related work, architectural drawings, fabrication, furniture, and installation. Nosyra Digital developed a business showcase website with organised service information and clear customer contact pathways.",
    challenge: "The business needed a central digital presence where prospective customers could understand its activities and explore the services it provides.",
    solution: "We organised the business presentation and service showcase sections around clear information and contact and enquiry pathways.",
    results: ["A central platform for presenting business activities", "Structured service information", "Clearer pathways for prospective customer enquiries"],
    tags: ["Corporate Website", "Business Services", "Service Showcase"],
    services: ["Website Design & Development", "Business Presentation", "Service Information", "Contact Pathways"],
  },
  "cat-global": {
    category: "Corporate Website / Energy Services",
    description: "A corporate website presenting CAT Global's energy-related service categories and customer enquiry pathways.",
    fullDescription: "CAT Global is an energy-focused business based in Lagos, Nigeria. Its website presents power generation, renewable energy, energy consulting, grid solutions, maintenance and support, and energy storage. Nosyra Digital developed the corporate website to organise this business information and direct prospective customers towards enquiries.",
    challenge: "The business needed a professional online presence capable of communicating its energy-related service offerings in a structured and accessible way.",
    solution: "We developed a clear corporate website structure for business content, energy service categories, navigation, and contact and enquiry pathways.",
    results: ["A structured digital presence for CAT Global", "Clearer presentation of energy service categories", "Accessible navigation and customer enquiry pathways"],
    tags: ["Corporate Website", "Energy Services", "Business Presentation"],
    services: ["Website Design & Development", "Business Content Structure", "Service Category Presentation", "Contact Pathways"],
  },
  "uruhu-solutions": {
    category: "Corporate Website / Financial & Business Advisory",
    description: "A corporate advisory website presenting Uruhu Solutions' services, process, FAQs, client perspectives, and consultation pathways.",
    fullDescription: "Uruhu Solutions is a boutique business and financial advisory firm helping businesses and individuals structure their finances, solve business problems, prepare for appropriate funding opportunities, and make informed decisions. Its positioning is built around “Building Value. Managing Risk.” Nosyra Digital developed the corporate advisory website and its presentation functionality.",
    challenge: "The business needed a professional website to explain its related business, financial, and risk advisory offerings and give prospective clients a clear way to discuss their needs.",
    solution: "We developed dedicated service category sections, About and Why Us content, an advisory process presentation, FAQs, client perspectives, and consultation and contact pathways.",
    results: ["A clearer presentation of advisory expertise", "Structured service categories and process information", "Consultation pathways for prospective clients"],
    tags: ["Advisory", "Corporate Website", "Professional Services"],
    services: ["Website Design & Development", "Advisory Content Structure", "Service Categories", "FAQ and Process Sections", "Consultation Pathways"],
  },
};


const safeCopyFor = (project: (typeof ALL_PROJECTS)[number]): SafeCopy => {
  const verified = VERIFIED_CASE_STUDIES[project.slug];
  if (verified) return verified;
  if (project.type === "social") {
    return {
      category: "Additional Creative Service",
      description: `A supporting social media content kit for ${project.title}.`,
      fullDescription: `We created a supporting social media content kit for ${project.title} to help the business communicate consistently across its selected channels.`,
      challenge: "The business needed supporting visual content for regular communication.",
      solution: "We developed a focused set of social media designs and content assets for the agreed communication needs.",
      results: ["A more consistent visual presence", "Supporting content for selected channels", "A clearer way to communicate business updates"],
      tags: ["Social Media", "Content Design"],
      services: ["Social Media Design", "Content Kit"],
    };
  }
  return {
    category: project.category,
    description: `A professional digital presence for ${project.title}, focused on clear business, product, or service presentation.`,
    fullDescription: `We developed a professional website for ${project.title} to present the business, products, or services and provide clear customer contact pathways. This public summary is limited to the functionality verified for the current portfolio update.`,
    challenge: "The business needed a clearer and more structured digital presence for its offering and customer enquiries.",
    solution: "We organised the website around clear information, relevant project content, responsive presentation, and direct contact actions.",
    results: ["A clearer digital presentation", "Structured business, product, or service information", "Direct customer contact options"],
    tags: [project.category, "Business Website"],
    services: ["Website Development", "Content Structure", "Contact Flow"],
  };
};

export const projects = ALL_PROJECTS
  .filter((project) => !REMOVED_PUBLIC_PROJECTS.has(project.slug))
  .map((project) => ({ ...project, ...safeCopyFor(project) }));
export type Project = (typeof projects)[number];
