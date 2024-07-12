import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots{
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/'
        },
      ],
      sitemap: 'https://rishithgandham.vercel.app/sitemap.xml',
      host: 'https://rishithgandham.vercel.app',
    };
  }