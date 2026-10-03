import { imageSrc, type ImageSource } from "@/lib/image";
import type { Category, Post } from "@/types/blog";
import strategyImage from "@/assets/blog/strategy.jpg";
import ecommerceImage from "@/assets/blog/ecommerce.jpg";
import mobileImage from "@/assets/blog/mobile.jpg";
import growthImage from "@/assets/blog/growth.jpg";
import analyticsImage from "@/assets/blog/analytics.jpg";
import digitalStrategyImage from "@/assets/blog/digital-strategy.jpg";

const date = "2026-09-20T09:00:00.000Z";

const post = (id: number, title: string, slug: string, excerpt: string, categoryName: string, categorySlug: string, image: ImageSource, content: string, tags: string[]): Post => ({
  id, title, slug, excerpt, content, featured_image: imageSrc(image), category_id: id, category_name: categoryName, category_slug: categorySlug,
  author_name: "Nosyra Digital", status: "published", views: 0, meta_title: `${title} | Nosyra Digital`, meta_description: excerpt,
  meta_keywords: tags.join(", "), created_at: date, updated_at: date, published_at: date,
  tags: tags.map((name, index) => ({ id: id * 10 + index, name, slug: name.toLowerCase().replace(/\s+/g, "-") })),
});

export const STATIC_CATEGORIES: Category[] = [
  { id: 1, name: "Strategy", slug: "strategy", description: "Sharper decisions before design.", post_count: 2, created_at: date },
  { id: 2, name: "Web Design", slug: "web-design", description: "Better digital experiences.", post_count: 2, created_at: date },
  { id: 3, name: "Growth", slug: "growth", description: "Practical post-launch improvement.", post_count: 2, created_at: date },
];

export const STATIC_POSTS: Post[] = [
  post(1, "When your business has outgrown its website", "when-your-business-has-outgrown-its-website", "Five signs your website is slowing trust, leads, and growth.", "Strategy", "strategy", strategyImage,
    `<h2>The warning signs</h2><p>A website may look fine and still create friction. Repeated questions, manual explanations, and weak enquiries usually point to a structure problem.</p><h2>Start with the journey</h2><p>Map what visitors need to understand, trust, and do. Then fix the homepage, service pages, proof, and contact flow first.</p><h2>The goal</h2><p>Make the offer easier to understand and the next step easier to take.</p>`, ["Website strategy", "Conversion", "Growth"]),
  post(2, "A practical homepage structure for a growing business", "practical-homepage-structure-for-growing-business", "A simple framework for clearer messaging and stronger next steps.", "Web Design", "web-design", digitalStrategyImage,
    `<h2>Lead with clarity</h2><p>The first screen should say who you help, what you solve, and what visitors can do next.</p><h2>Show proof early</h2><p>Use a result, client, project, or specific capability before a long service list. Proof earns attention.</p><h2>Keep the path simple</h2><p>Follow with selected work, focused services, your process, and one clear project CTA.</p>`, ["Homepage design", "UX", "Copywriting"]),
  post(3, "What makes an e-commerce experience feel trustworthy", "what-makes-ecommerce-experience-trustworthy", "Trust comes from product clarity, familiar payments, and a calm checkout.", "Web Design", "web-design", ecommerceImage,
    `<h2>Remove uncertainty</h2><p>Customers want to know what they are buying, what it costs, when it arrives, and what happens next.</p><h2>Design for mobile buying</h2><p>Clear product pages, familiar payments, and helpful WhatsApp support can make the difference.</p><h2>Keep checkout focused</h2><p>Repeat the important details: price, delivery, payment, and confirmation. Remove distractions.</p>`, ["E-commerce", "Mobile commerce", "Trust"]),
  post(4, "Why case studies should explain decisions", "case-studies-should-explain-decisions", "A strong case study shows the problem, decision, work, and change—not only the screens.", "Strategy", "strategy", growthImage,
    `<h2>Show the problem</h2><p>Screenshots show what was made. A case study explains what changed for the client.</p><h2>Use a clear story</h2><p>Cover the challenge, approach, important work, and result in that order.</p><h2>Be honest with evidence</h2><p>Use real metrics when available. If a project is new, share early signals instead of invented percentages.</p>`, ["Case studies", "Portfolio", "Proof"]),
  post(5, "Performance is part of the brand experience", "performance-is-part-of-brand-experience", "Fast pages feel more considered. Protect mobile performance as your site grows.", "Growth", "growth", mobileImage,
    `<h2>Speed shapes trust</h2><p>A slow website can make a capable business feel less reliable.</p><h2>Start with heavy assets</h2><p>Resize hero images, use responsive formats, reserve image space, and avoid loading every asset at once.</p><h2>Measure real users</h2><p>Test on mobile networks and review field data after launch. Real visitors reveal the friction lab tests miss.</p>`, ["Performance", "Mobile", "Core Web Vitals"]),
  post(6, "The first 30 days after launching a new website", "first-30-days-after-launching-new-website", "Launch is the start of learning. Use the first month to improve the system.", "Growth", "growth", analyticsImage,
    `<h2>Track useful behaviour</h2><p>Watch enquiries, form starts, calls, WhatsApp clicks, and the pages that help people decide.</p><h2>Listen to questions</h2><p>Repeated sales and support questions show where the site still needs clearer content.</p><h2>Improve in small steps</h2><p>Choose a few high-impact changes each month. The best websites keep learning.</p>`, ["Website growth", "Analytics", "Optimisation"]),
];

export const STATIC_POST_BY_SLUG = new Map(STATIC_POSTS.map((item) => [item.slug, item]));
