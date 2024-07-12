import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
        url: 'http://rishithgandham.vercel.app',
        lastModified: new Date(),
        priority: 1,
    }
  ]
}   