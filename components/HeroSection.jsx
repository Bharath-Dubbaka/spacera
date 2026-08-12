"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = ["Residential", "Commercial", "Renovations", "Get a Quote"];

export default function MiniHero() {
   return (
      <section className="relative w-full bg-[#E6D8C7] pt-28 pb-16 px-6 md:px-12 md:pt-36">
         <div className="mb-4 text-center">
            <span className="font-[family-name:var(--font-neue-montreal)] text-[11px] uppercase tracking-[0.3em] text-[#BC4424]">
               This Is What We Define
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl uppercase tracking-wide text-[#3A3A3A] sm:text-5xl">
               Why Us
            </h2>
         </div>
         <div className="grid max-w-full grid-cols-1 gap-6 md:grid-cols-12 md:gap-6 p-2 lg:p-20">
            {/* Left: large portrait image with overlaid title + quick links */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-[#3A3A3A] md:col-span-7 md:aspect-auto">
               <Image
                  src="/gallery/optimized/bedrooms/05.webp"
                  alt="Artistry in progress"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 380px"
               />
               <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/10 to-black/20" />

               <div className="relative z-10 flex h-full md:min-h-[480px] flex-col justify-between p-2 md:min-h-[600px] md:p-4 lg:p-10">
                  <div>
                     {/* <span className="font-[family-name:var(--font-neue-montreal)] text-[11px] uppercase tracking-[0.3em] text-[#E6D8C7]/80 ">
                        Est. 2018 — SPACERA
                     </span> */}
                     <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl uppercase leading-[0.95] text-[#E6D8C7] sm:text-5xl md:text-6xl">
                        Designing <br />
                        Spaces That
                        <br />
                        Inspire
                     </h1>
                  </div>

                  <ul className="flex flex-col gap-2">
                     {QUICK_LINKS.map((item) => (
                        <li
                           key={item}
                           className="w-fit font-[family-name:var(--font-neue-montreal)] text-xs uppercase tracking-[0.15em] text-white transition-colors hover:text-[#BC4424]"
                        >
                           {item === "Get a Quote" ? (
                              <Link href="/contact">{item}</Link>
                           ) : (
                              item
                           )}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Right: two stacked feature cards */}
            <div className="flex flex-col gap-6 md:col-span-5 ">
               <FeatureCard
                  image="/gallery/optimized/02.webp"
                  label="Interior Design"
                  caption="Thoughtfully crafted interiors that balance aesthetics, functionality, and timeless elegance for every lifestyle."
                  cta="View Projects"
               />
               <FeatureCard
                  image="/gallery/optimized/bedrooms/03.webp"
                  label="Consultation"
                  caption="From concept to completion, our design experts guide you through every step to create spaces tailored to your vision."
                  cta="Book Consultation"
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
            <Image
               src={image}
               alt={label}
               fill
               className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
               sizes="(max-width: 768px) 90vw, 380px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <span className="absolute right-4 top-4 rotate-180 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] text-[#E6D8C7] [writing-mode:vertical-rl]">
               {label}
            </span>
         </div>
         <div className="flex flex-1 flex-col justify-between gap-4 bg-neutral-100/[0.01] backdrop-blur-sm p-5">
            <p className="text-xs leading-relaxed text-[#3A3A3A]/80 sm:text-sm">
               {caption}
            </p>

            <Link
               href="/projects"
               className="inline-flex w-fit items-center gap-1 text-[11px] uppercase tracking-[0.15em] text-[#BC4424] transition-all hover:gap-2"
            >
               {cta}
               <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
         </div>
      </div>
   );
}
