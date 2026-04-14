import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/ja`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja`,
          en: `${BASE_URL}/en`,
          "x-default": `${BASE_URL}/ja`,
        },
      },
    },
    {
      url: `${BASE_URL}/en`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja`,
          en: `${BASE_URL}/en`,
          "x-default": `${BASE_URL}/ja`,
        },
      },
    },
  ];
}
