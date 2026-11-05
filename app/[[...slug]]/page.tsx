import type { Metadata } from "next";
import App from "@/App";
import { projects } from "@/data/projectsData";

type CatchAllPageProps = { params: Promise<{ slug?: string[] }> };

export async function generateMetadata({ params }: CatchAllPageProps): Promise<Metadata> {
  const { slug = [] } = await params;
  if (slug[0] !== "portfolio" || !slug[1]) return {};

  const project = projects.find((item) => item.slug === slug[1]);
  if (!project || project.type !== "web") return {};

  const title = `${project.title} Website Case Study | Nosyra Digital`;
  const description = project.description.length > 160
    ? `${project.description.slice(0, 157).trimEnd()}…`
    : project.description;
  const canonical = `/portfolio/${project.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "Nosyra Digital",
      title,
      description,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${project.title} website case study` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default function CatchAllPage() {
  return <App />;
}
