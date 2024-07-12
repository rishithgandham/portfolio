import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots{
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/'
        },
      ],
      sitemap: 'http://rishithgandham.vercel.app/sitemap.xml',
      host: 'http://rishithgandham.vercel.app',
    };
  }