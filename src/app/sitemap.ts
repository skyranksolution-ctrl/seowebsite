import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://skyranksolution-bice.vercel.app";
  const routes = [
    "",
    "/about",
    "/services",
    "/tools",
    "/pricing",
    "/portfolio",
    "/case-studies",
    "/blog",
    "/careers",
    "/contact",
    "/audit",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "daily",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
