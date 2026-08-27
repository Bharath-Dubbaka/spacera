import { SERVICES } from "@/lib/servicesData";

const BASE_URL =
   process.env.NEXT_PUBLIC_SITE_URL || "https://spacerastudios.com";

export default function sitemap() {
   const staticRoutes = [
      {
         url: BASE_URL,
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 1,
      },
      {
         url: `${BASE_URL}/contact`,
         lastModified: new Date(),
         changeFrequency: "monthly",
         priority: 0.8,
      },
   ];

   const serviceRoutes = SERVICES.map((service) => ({
      url: `${BASE_URL}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
   }));

   return [...staticRoutes, ...serviceRoutes];
}
