"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/servicesData";

export default function ServicesCarousel() {
   const trackRef = useRef(null);
   const [activeIndex, setActiveIndex] = useState(0);

   const updateActive = useCallback(() => {
      const el = trackRef.current;
      if (!el) return;
      const cards = el.querySelectorAll("[data-card]");
      if (!cards.length) return;

      const center = el.scrollLeft + el.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, i) => {
         const cardCenter = card.offsetLeft + card.offsetWidth / 2;
         const dist = Math.abs(cardCenter - center);
         if (dist < minDist) {
            minDist = dist;
            closest = i;
         }
      });
      setActiveIndex(closest);
   }, []);

   useEffect(() => {
      const el = trackRef.current;
      if (!el) return;
      updateActive();
      el.addEventListener("scroll", updateActive, { passive: true });
      window.addEventListener("resize", updateActive);
      return () => {
         el.removeEventListener("scroll", updateActive);
         window.removeEventListener("resize", updateActive);
      };
   }, [updateActive]);

   const goToIndex = (index) => {
      const el = trackRef.current;
      if (!el) return;
      const card = el.querySelectorAll("[data-card]")[index];
      if (!card) return;
      el.scrollTo({
         left: card.offsetLeft - el.offsetLeft,
         behavior: "smooth",
      });
   };

   return (
      <section className="w-full border-b border-black/[0.05] bg-[#E6D8C7] py-24">
         <div className="mx-auto max-w-6xl px-6 md:px-12">
            <div className="mb-14 text-center">
               <span className="font-[family-name:var(--font-neue-montreal)] text-[11px] uppercase tracking-[0.3em] text-[#BC4424]">
                  This Is What We Do
               </span>
               <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl uppercase tracking-wide text-[#3A3A3A] sm:text-5xl">
                  Our Services
               </h2>
            </div>
         </div>

         {/* Horizontal scroll-snap track, presented like a carousel */}
         <div
            ref={trackRef}
            className="hide-scrollbar flex mx-auto snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth px-6 pb-4 md:max-w-[73rem] md:px-12"
         >
            {SERVICES.map((s) => (
               <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  data-card
                  className="group flex max-w-[78%] shrink-0 snap-start flex-col text-left sm:w-[46%] lg:w-[33%]"
               >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-b-2xl rounded-t-[999px] border border-black/10 bg-[#3A3A3A]">
                     <img
                        src={s.image}
                        alt={s.title}
                        className="h-full w-full object-cover grayscale-[15%] transition-transform duration-500 group-hover:scale-105"
                     />
                  </div>
                  <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl uppercase tracking-wide text-[#3A3A3A]">
                     {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#3A3A3A]/70">
                     {s.description}
                  </p>
                  <span className="mt-4 inline-flex w-fit items-center gap-1 text-[11px] uppercase tracking-[0.15em] text-[#BC4424] transition-all group-hover:gap-2">
                     Read More
                     <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
               </Link>
            ))}
         </div>

         {/* Dot pagination indicator */}
         <div className="mt-8 flex items-center justify-center gap-2">
            {SERVICES.map((s, i) => (
               <button
                  key={s.slug}
                  type="button"
                  aria-label={`Go to ${s.title}`}
                  onClick={() => goToIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                     i === activeIndex
                        ? "w-6 bg-[#BC4424]"
                        : "w-2 bg-[#3A3A3A]/25 hover:bg-[#3A3A3A]/40"
                  }`}
               />
            ))}
         </div>

         <style jsx global>{`
            .hide-scrollbar {
               scrollbar-width: none;
               -ms-overflow-style: none;
            }
            .hide-scrollbar::-webkit-scrollbar {
               display: none;
            }
         `}</style>
      </section>
   );
}
