const BASE_URL =
   process.env.NEXT_PUBLIC_SITE_URL || "https://spacerastudios.com";

export default function sitemap() {
   return [
      {
         url: BASE_URL,
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 1,
      },
      {
         url: `${BASE_URL}/about`,
         lastModified: new Date(),
         changeFrequency: "monthly",
         priority: 0.8,
      },
      {
         url: `${BASE_URL}/projects`,
         lastModified: new Date(),
         changeFrequency: "monthly",
         priority: 0.9,
      },
      {
         url: `${BASE_URL}/contact`,
         lastModified: new Date(),
         changeFrequency: "monthly",
         priority: 0.8,
      },
      {
         url: `${BASE_URL}/faq`,
         lastModified: new Date(),
         changeFrequency: "yearly",
         priority: 0.5,
      },
   ];
}
