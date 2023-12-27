import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://youtubehero.vercel.app",
      lastModified: new Date(),
    },
  ];
}
