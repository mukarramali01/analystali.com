import type { MetadataRoute } from "next";
import { site, work } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...work.map((w) => ({ url: `${site.url}/work/${w.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.8 })),
  ];
}
