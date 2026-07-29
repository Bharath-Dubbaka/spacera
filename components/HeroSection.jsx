"use client";

import { ArrowUpRight } from "lucide-react";

const QUICK_LINKS = ["Custom Work", "Fine Line", "Cover-Ups", "Book Now"];

export default function Hero() {
   return (
      <section className="relative w-full bg-[#E6D8C7] pt-28 pb-16 px-6 md:px-12 md:pt-36">
         <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-12 md:gap-6">
            {/* Left: large portrait image with overlaid title + quick links */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-[#3A3A3A] md:col-span-7 md:aspect-auto">
               <img
                  src="/gallery/01.jpg"
                  alt="Tattoo artistry in progress"
                  className="absolute inset-0 h-full w-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20" />

               <div className="relative z-10 flex h-full min-h-[480px] flex-col justify-between p-8 md:min-h-[600px] md:p-10">
                  <div>
                     <span className="font-[family-name:var(--font-neue-montreal)] text-[11px] uppercase tracking-[0.3em] text-[#E6D8C7]/80">
                        Est. 2012 — Tattoo Studio
                     </span>
                     <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl uppercase leading-[0.95] text-[#E6D8C7] sm:text-6xl md:text-7xl">
                        Ink That
                        <br />
                        Tells Your
                        <br />
                        Story
                     </h1>
                  </div>

                  <ul className="flex flex-col gap-2">
                     {QUICK_LINKS.map((item) => (
                        <li
                           key={item}
                           className="w-fit cursor-pointer font-[family-name:var(--font-neue-montreal)] text-xs uppercase tracking-[0.15em] text-[#E6D8C7]/70 transition-colors hover:text-[#BC4424]"
                        >
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Right: two stacked feature cards */}
            <div className="flex flex-col gap-6 md:col-span-5">
               <FeatureCard
                  image="/gallery/02.png"
                  label="Tattoo Art"
                  caption="From bold blackwork to delicate fine line, every piece is designed around your story before the needle touches skin."
                  cta="Explore The Work"
               />
               <FeatureCard
                  image="/gallery/03.png"
                  label="Consultations"
                  caption="Free design consultations, in-studio or virtual, before every session — no piece starts without one."
                  cta="Book A Session"
               />
            </div>
         </div>
      </section>
   );
}

function FeatureCard({ image, label, caption, cta }) {
   return (
      <div className="group relative flex flex-1 flex-col overflow-hidden rounded-lg border border-black/[0.06] bg-[#3A3A3A]/5">
         <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img
               src={image}
               alt={label}
               className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <span className="absolute right-4 top-4 rotate-180 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] text-[#E6D8C7] [writing-mode:vertical-rl]">
               {label}
            </span>
         </div>
         <div className="flex flex-1 flex-col justify-between gap-4 bg-[#C39F73]/15 p-5">
            <p className="text-xs leading-relaxed text-[#3A3A3A]/80 sm:text-sm">
               {caption}
            </p>
            <button className="inline-flex w-fit items-center gap-1 text-[11px] uppercase tracking-[0.15em] text-[#BC4424] transition-all hover:gap-2">
               {cta}
               <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
         </div>
      </div>
   );
}
