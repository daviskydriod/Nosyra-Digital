import type { Category, Post } from "@/types/blog";
import heroImage from "@/assets/hero-main.png";
import ecoImage from "@/assets/eco-hero.png";
import lianImage from "@/assets/lian-hero.png";
import catImage from "@/assets/catglobal-hero.png";
import vikImage from "@/assets/vik-hero.png";
import gtImage from "@/assets/gt-hero.png";

const date = "2026-09-20T09:00:00.000Z";

const post = (
  id: number,
  title: string,
  slug: string,
  excerpt: string,
  categoryName: string,
  categorySlug: string,
  image: string,
  content: string,
  tags: string[]
): Post => ({
  id,
  title,
  slug,
  excerpt,
  content,
  featured_image: image,
  category_id: id,
  category_name: categoryName,
  category_slug: categorySlug,
  author_name: "Nosyra Digital",
  status: "published",
  views: 0,
  meta_title: `${title} | Nosyra Digital`,
  meta_description: excerpt,
  meta_keywords: tags.join(", "),
  created_at: date,
  updated_at: date,
  published_at: date,
  tags: tags.map((name, index) => ({ id: id * 10 + index, name, slug: name.toLowerCase().replace(/\s+/g, "-") })),
});

export const STATIC_CATEGORIES: Category[] = [
  { id: 1, name: "Strategy", slug: "strategy", description: "Clearer decisions before design and development.", post_count: 2, created_at: date },
  { id: 2, name: "Web Design", slug: "web-design", description: "Better digital experiences for real businesses.", post_count: 2, created_at: date },
  { id: 3, name: "Growth", slug: "growth", description: "Practical ways to improve performance after launch.", post_count: 2, created_at: date },
];

export const STATIC_POSTS: Post[] = [
  post(
    1,
    "When your business has outgrown its website",
    "when-your-business-has-outgrown-its-website",
    "Five signs your website is slowing down trust, leads, and growth—and what to fix first.",
    "Strategy",
    "strategy",
    heroImage,
    `<h2>The website is often the first symptom</h2><p>A website can look polished and still create friction. If customers keep asking the same questions, your team is manually explaining the offer, or good traffic is not turning into enquiries, the problem may be structure rather than visibility.</p><h2>Start with the customer journey</h2><p>Before changing colours or adding features, map what a new visitor needs to understand, believe, and do. A stronger website makes the offer clearer, reduces uncertainty, and gives every important audience a direct next step.</p><h2>Fix the highest-friction pages first</h2><p>Prioritise the homepage, key service pages, proof, and contact flow. Small changes to these pages often create more value than a large redesign with no clear business goal.</p>`,
    ["Website strategy", "Conversion", "Growth"]
  ),
  post(
    2,
    "A practical homepage structure for a growing business",
    "practical-homepage-structure-for-growing-business",
    "A simple homepage framework that helps visitors understand your offer and take the next step.",
    "Web Design",
    "web-design",
    catImage,
    `<h2>Make the first screen do one job</h2><p>The opening section should answer three questions quickly: who is this for, what problem does it solve, and what should I do next?</p><h2>Use proof before a long service list</h2><p>Show a relevant result, client, project, or specific capability early. Proof gives the visitor a reason to keep reading.</p><h2>Build a clear path</h2><p>Follow the hero with selected work, focused services, your process, and a clear project conversation. A homepage does not need to say everything; it needs to make the next decision easy.</p>`,
    ["Homepage design", "UX", "Copywriting"]
  ),
  post(
    3,
    "What makes an e-commerce experience feel trustworthy",
    "what-makes-ecommerce-experience-trustworthy",
    "Trust is built through small details: product clarity, familiar payments, delivery information, and a calm checkout.",
    "Web Design",
    "web-design",
    lianImage,
    `<h2>Good commerce removes uncertainty</h2><p>Customers want to know what they are buying, when it will arrive, what it costs, and what happens if something goes wrong.</p><h2>Design for the buying context</h2><p>For many African businesses, mobile and messaging are central to the purchase. A strong store can combine a focused product page with familiar payment or WhatsApp support without making the process feel improvised.</p><h2>Keep checkout focused</h2><p>Reduce distractions, state the next step clearly, and repeat the information that matters: price, delivery, payment, and confirmation.</p>`,
    ["E-commerce", "Mobile commerce", "Trust"]
  ),
  post(
    4,
    "Why case studies should explain decisions, not just deliverables",
    "case-studies-should-explain-decisions",
    "A strong case study shows the problem, the decision, the work, and the business change—not just a gallery of screens.",
    "Strategy",
    "strategy",
    ecoImage,
    `<h2>A project gallery is not a case study</h2><p>Screenshots show what was made. Case studies explain why it was made and what changed for the client.</p><h2>Use a simple narrative</h2><p>Start with the business challenge. Explain the chosen approach. Show the important work. Finish with a verified result or a careful early indicator.</p><h2>Be precise about evidence</h2><p>Use real metrics when they are available. When a project is new, say so. Honest launch signals are more credible than invented percentages.</p>`,
    ["Case studies", "Portfolio", "Proof"]
  ),
  post(
    5,
    "Performance is part of the brand experience",
    "performance-is-part-of-brand-experience",
    "Fast pages feel more considered. A practical checklist for protecting mobile performance as a site grows.",
    "Growth",
    "growth",
    vikImage,
    `<h2>Speed changes perception</h2><p>A slow website makes a capable business feel less reliable. Performance is not only a technical score; it shapes trust before a visitor reads the copy.</p><h2>Start with the largest assets</h2><p>Resize hero images, use responsive formats, reserve image dimensions, and avoid loading every portfolio asset on the first view.</p><h2>Measure real users</h2><p>Test on mobile networks and review field data after launch. Lab tests are useful for diagnosis, but real visitors show where the experience actually breaks.</p>`,
    ["Performance", "Mobile", "Core Web Vitals"]
  ),
  post(
    6,
    "The first 30 days after launching a new website",
    "first-30-days-after-launching-new-website",
    "Launch is the start of learning. Use the first month to find friction, improve content, and turn the new site into a working system.",
    "Growth",
    "growth",
    gtImage,
    `<h2>Watch behaviour, not vanity numbers</h2><p>Track project enquiries, contact starts, completed forms, phone clicks, WhatsApp clicks, and the pages that help people decide.</p><h2>Review real questions</h2><p>Support messages and sales calls reveal what the website still fails to explain. Turn repeated questions into clearer page content.</p><h2>Keep a short improvement list</h2><p>Every month, choose a few high-impact changes rather than redesigning everything. A website becomes valuable when the team keeps learning from it.</p>`,
    ["Website growth", "Analytics", "Optimisation"]
  ),
];

export const STATIC_POST_BY_SLUG = new Map(STATIC_POSTS.map((item) => [item.slug, item]));
