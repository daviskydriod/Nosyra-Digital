import ecoHero from "@/assets/eco-hero.png";
import lianHero from "@/assets/lian-hero.png";
import catglobalHero from "@/assets/catglobal-hero.png";
import vikHero from "@/assets/vik-hero.png";
import gtHero from "@/assets/gt-hero.png";
import urhuHero from "@/assets/urhu-hero.png";
import honHero from "@/assets/hon-hero.png";

export const projects = [
  {
    id: 1,
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
      "60% reduction in manual booking errors",
      "3× faster service request turnaround",
      "200+ clients onboarded within the first month",
    ],
    year: "2026",
    services: ["UI/UX Design", "Frontend Development", "Backend Integration", "QA Testing"],
  },
  {
  id: 2,
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
    "We designed an emotion-first shopping experience with rich imagery and a clean, simple checkout flow. Orders are confirmed through WhatsApp for a personal touch, with bank transfer as the payment method — keeping things accessible and trusted for Nigerian customers. The mobile-first approach ensured the majority of customers on phones had an experience as polished as desktop.",
  results: [
    "Average order value increased after launch",
    "Strong mobile conversion driven by familiar checkout flow",
    "Reduced drop-off with a simple, low-friction WhatsApp order process",
  ],
  year: "2026",
  services: ["E-Commerce Strategy", "UI/UX Design", "WhatsApp Checkout Integration", "SEO Setup"],
},
  {
    id: 3,
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
      "Bounce rate dropped from 72% to 38%",
      "RFP enquiries increased by 90% in 3 months",
      "Average session duration doubled",
    ],
    year: "2026",
    services: ["Brand Strategy", "Web Design", "CMS Integration", "Performance Optimisation"],
  },
  { 
  id: 4, 
  slug: "viktrotech", 
  title: "Viktrotech", 
  category: "Waste Management", 
  image: vikHero, 
  link: "https://www.viktrotech.com/", 
  description: "Nigeria's premier bio-sewage and waste management company delivering innovative biological sewer treatment systems for homes and businesses.", 
  fullDescription: "Viktrotech needed a digital presence that clearly communicated their specialized expertise in bio-sewage systems to a broad audience from homeowners to commercial developers and NGOs. We built a platform that positions them as Nigeria's leading waste management innovator, showcasing their unique ability to design and install biological sewer treatment systems in both dry and waterlogged areas.", 
  tags: ["Waste Management", "Bio-Sewage", "Environmental Solutions"], 
  challenge: "Translating a highly technical and niche service — biological sewage treatment systems  into a compelling digital experience that resonates with both individual homeowners and large commercial clients, while building trust in an industry where credibility is everything.", 
  solution: "We structured the site around the environments Viktrotech serves — domestic, commercial, waterlogged, and dry areas  making it easy for any visitor to immediately see themselves in the solution. Clean visual storytelling and outcome-focused copy replaced technical jargon, highlighting environmental impact and reliability.", 
  results: [ 
    "Significant increase in qualified leads from commercial clients", 
    "Time-on-site increased by 55%", 
    "Key service pages rank on page 1 for waste management terms in Nigeria", 
  ], 
  year: "2026",
  services: ["Web Design", "Content Strategy", "SEO"], 
},
  {
    id: 5,
    slug: "gt-green-petrochemical",
    title: "GT Green Petrochemical",
    category: "Corporate Website",
    image: gtHero,
    link: "https://www.gtgreenpetrochemical.com.ng/",
    description: "Professional petrochemical company website showcasing industry leadership and sustainability.",
    fullDescription:
      "GT Green Petrochemical operates in one of Nigeria's most competitive industries. We built a website that positioned them as a modern, sustainability-focused leader moving away from the typically dated aesthetic of the sector toward a clean, confident digital identity that appeals to international partners and investors.",
    tags: ["Corporate", "Industrial", "Sustainability"],
    challenge:
      "The petrochemical industry has a reputation for outdated web presence. The client wanted to stand out while still appearing credible and established to large institutional partners.",
    solution:
      "We combined authoritative typography with clean, data-driven layouts and subtle green accents that nod to sustainability without feeling greenwashed. The investor relations section was built with a clear information hierarchy.",
    results: [
      "Shortlisted for 2 major international partnerships post-launch",
      "Media coverage increased after relaunch",
      "Site passes Core Web Vitals with green scores",
    ],
    year: "2026",
    services: ["Brand Positioning", "Web Design", "Content Writing", "Technical SEO"],
  },
  {
    id: 6,
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
      "Contact form submissions up 120% month-on-month",
      "Qualified lead rate improved by 45%",
      "Pages per session increased to 4.7 average",
    ],
    year: "2026",
    services: ["UX Strategy", "Web Design", "Copywriting", "Analytics Setup"],
  },
  {
    id: 7,
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
      "Booking completion rate of 68% from package view",
      "Revenue per visitor 2× industry benchmark",
      "Customer support tickets reduced by 40% via self-service FAQs",
    ],
    year: "2026",
    services: ["Booking System"],
  },
];

export type Project = (typeof projects)[0];
