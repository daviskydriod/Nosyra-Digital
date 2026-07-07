// src/data/testimonials.ts
// Only add REAL testimonials here — real client, real quote, real rating.
// Better to have 2 real entries than a full row of fabricated ones.

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  source?: string; // e.g. "Google Review"
  link?: string; // optional link back to the original review
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ebenezer Aryee",
    role: "Africa Tomorrow",
    content:
      "These guys know what they do. They delivered the Africa Tomorrow website within specified time. They are professionals who closely work with me to perfectly respond to our needs. We are happy and satisfied clients. What's more they continue to provide aftersales support responding quickly to our requests.",
    rating: 5,
    source: "Google Review",
    link: "https://www.google.com/maps/place/Nosyra+Digital/data=!4m7!3m6!1s0x47f552349e525ba1:0x7f7cd5d8972d9a0b!8m2!3d9.0338725!4d8.6707713!16s%2Fg%2F11z694b83l!19sChIJoVtSnjRS9UcRC5otl9jVfH8",
  },
  {
    id: 2,
    name: "Darren Doyle",
    role: "Web Design Client",
    content:
      "They're truly exceptional at what they do. From start to finish, the team demonstrated professionalism, creativity, and a deep understanding of web design. They paid attention to every detail, communicated clearly throughout the process, and delivered a website that exceeded my expectations. I highly recommend them to anyone looking for a reliable and talented web design agency.",
    rating: 5,
    source: "Google Review",
    link: "https://www.google.com/maps/place/Nosyra+Digital/data=!4m7!3m6!1s0x47f552349e525ba1:0x7f7cd5d8972d9a0b!8m2!3d9.0338725!4d8.6707713!16s%2Fg%2F11z694b83l!19sChIJoVtSnjRS9UcRC5otl9jVfH8",
  },
  {
    id: 3,
    name: "Wood Coffie",
    role: "Wood Coffie Furniture Works",
    content:
      "Nosyra Digital, they are a trustworthy company that I contacted for a website for my company, and it took 1 week for me to have work done. His payment duration are very understandable, I recommend them to everyone.",
    rating: 5,
    source: "Google Review",
    link: "https://www.google.com/maps/place/Nosyra+Digital/data=!4m7!3m6!1s0x47f552349e525ba1:0x7f7cd5d8972d9a0b!8m2!3d9.0338725!4d8.6707713!16s%2Fg%2F11z694b83l!19sChIJoVtSnjRS9UcRC5otl9jVfH8",
  },
  {
    id: 4,
    name: "Pharrell Banks",
    role: "Website Client",
    content:
      "I got my website on the scheduled time he gave. He's got great human relations skills and I'm happy to have worked with him.",
    rating: 5,
    source: "Google Review",
    link: "https://www.google.com/maps/place/Nosyra+Digital/data=!4m7!3m6!1s0x47f552349e525ba1:0x7f7cd5d8972d9a0b!8m2!3d9.0338725!4d8.6707713!16s%2Fg%2F11z694b83l!19sChIJoVtSnjRS9UcRC5otl9jVfH8",
  },
  // Add more real testimonials here as you collect them — MicDeb Global Motors
  // and Allison Victoria left Google reviews too, but their text wasn't fully
  // captured yet (MicDeb's content was cut off, Allison's was just "Nice").
  // Grab the full text from the listing and add them here if worth including.
];