import "./globals.css";
import {
   Fraunces,
   Inter,
   IBM_Plex_Mono,
   Geist,
   Geist_Mono,
} from "next/font/google";
import AppShell from "@/components/AppShell";
import "lenis/dist/lenis.css";
import localFont from "next/font/local";
import { GoogleTagManager } from "@next/third-parties/google";

// Point directly to where you already dropped them
const neueWorld = localFont({
   src: "../public/fonts/PPNeueWorld-Regular.ttf",
   variable: "--font-neue-world",
});

const neueMontreal = localFont({
   src: "../public/fonts/PPNeueMontreal-Regular.ttf",
   variable: "--font-neue-montreal",
});

const fraunces = Fraunces({
   subsets: ["latin"],
   variable: "--font-display",
   weight: ["400", "500", "600"],
});

const inter = Inter({
   subsets: ["latin"],
   variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
   subsets: ["latin"],
   weight: ["400", "500"],
   variable: "--font-mono",
});

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata = {
   title: {
      default: "SPACERA - Interior Design & Renovation",
      template: "%s | SPACERA",
   },
   description:
      "Spacera Studios crafts premium residential and commercial interiors in Hyderabad. End-to-end interior design, modular kitchens, and bespoke renovations.",
   keywords: [
      "Interior Design",
      "Interior Designers Hyderabad",
      "Home Renovation",
      "Modular Kitchens",
      "Commercial Interiors",
      "Luxury Interiors",
      "SPACERA",
   ],
   authors: [{ name: "Spacera Studios" }],
   creator: "Spacera Studios",
   publisher: "Spacera Studios",
   metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "https://spacerastudios.com",
   ),
   alternates: {
      canonical: "/",
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
      },
   },
   openGraph: {
      title: "SPACERA - Interior Design & Renovation",
      description:
         "We create refined residential and commercial interiors blending functionality, comfort, and timeless aesthetics.",
      url: "https://spacerastudios.com",
      siteName: "SPACERA",
      locale: "en_IN",
      type: "website",
   },
   verification: {
      google: "0GU2GfzHVano9yFyO-PT6AtPRJBH3dnB75BEcbDzomg",
   },
};

export default function RootLayout({ children }) {
   return (
      <html
         lang="en"
         className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} ${neueWorld.variable} ${neueMontreal.variable}`}
      >
         <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />

         <body className="bg-[#E6D8C7] text-paper font-body antialiased">
            <AppShell>{children}</AppShell>
         </body>
      </html>
   );
}
