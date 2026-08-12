"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/servicesData";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

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

      const cards = el.querySelectorAll("[data-card]");
      const card = cards[index];
      if (!card) return;

      const paddingLeft = parseFloat(window.getComputedStyle(el).paddingLeft);

      el.scrollTo({
         left: card.offsetLeft - paddingLeft,
         behavior: "smooth",
      });
   };

   const goNext = () => {
      if (activeIndex < SERVICES.length - 1) {
         goToIndex(activeIndex + 1);
      }
   };

   const goPrev = () => {
      if (activeIndex > 0) {
         goToIndex(activeIndex - 1);
      }
   };

   return (
      <section className="w-full border-b border-black/[0.05] bg-[#E6D8C7] py-16 sm:py-24">
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
         <div className="relative">
            {/* left/right buttons here */}

            {/* Left button (place before the track) */}
            <button
               type="button"
               onClick={goPrev}
               disabled={activeIndex === 0}
               className="absolute left-2 sm:left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow transition hover:bg-white disabled:pointer-events-none disabled:opacity-40"
            >
               <ArrowLeft className="h-5 w-5 text-black" />
            </button>
            {/* Right button (also before the track) */}
            <button
               type="button"
               onClick={goNext}
               disabled={activeIndex === SERVICES.length - 1}
               className="absolute right-2 sm:right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-black shadow transition hover:bg-white disabled:pointer-events-none disabled:opacity-40"
            >
               <ArrowRight className="h-5 w-5" />
            </button>
            <div
               ref={trackRef}
               className="hide-scrollbar flex mx-auto snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 sm:gap-8 sm:px-6 md:max-w-[73rem] lg:max-w-[83rem] md:px-12"
            >
               {SERVICES.map((s) => (
                  <Link
                     key={s.slug}
                     href={`/projects`}
                     data-card
                     className="group flex w-[calc(100vw-32px)] shrink-0 flex-col text-left sm:w-[380px]"
                  >
                     <div className="relative aspect-[4/3.8] md:aspect-[3/4] w-full overflow-hidden rounded-b-2xl rounded-t-[999px] border border-black/10 bg-[#3A3A3A]">
                        <Image
                           src={s.image}
                           alt={s.title}
                           className="h-full w-full object-cover grayscale-[15%] transition-transform duration-500 group-hover:scale-105"
                           fill
                           sizes="(max-width: 768px) 90vw, 380px"
                        />
                     </div>
                     <h3 className="mt-2 md:mt-4 lg:mt-6 font-[family-name:var(--font-display)] text-lg sm:text-xl uppercase tracking-wide text-[#3A3A3A]">
                        {s.title}
                     </h3>
                     <p className="md:mt-1 lg:mt-3 text-xs sm:text-sm leading-relaxed text-[#3A3A3A]/70">
                        {s.description}
                     </p>
                     <span className="md:mt-1 lg:mt-4 inline-flex w-fit items-center gap-1 text-[11px] uppercase tracking-[0.15em] text-[#BC4424] transition-all group-hover:gap-2">
                        Read More
                        <ArrowUpRight className="h-3.5 w-3.5" />
                     </span>
                  </Link>
               ))}
            </div>
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
