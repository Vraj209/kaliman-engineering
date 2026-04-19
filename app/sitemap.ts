import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kali-engineering.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${BASE_URL}/`, lastModified, priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified, priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified, priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified, priority: 0.8 },
  ];
}
