"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/servicesData";

export default function ServicesScrollDriven() {
   const wrapperRef = useRef(null);
   const trackRef = useRef(null);
   const [wrapperHeight, setWrapperHeight] = useState(null);
   const [translateX, setTranslateX] = useState(0);
   const [activeIndex, setActiveIndex] = useState(0);
   const [reducedMotion, setReducedMotion] = useState(false);

   // Respect accessibility preference — fall back to a normal
   // horizontally-scrollable row instead of scroll-jacking.
   useEffect(() => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mq.matches);
      const handler = (e) => setReducedMotion(e.matches);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
   }, []);

   // The wrapper needs extra vertical height so scrolling through it
   // gives us scroll distance to convert into horizontal movement.
   useEffect(() => {
      if (reducedMotion) return;
      const calcHeight = () => {
         const track = trackRef.current;
         if (!track) return;
         const extraScroll = Math.max(track.scrollWidth - window.innerWidth, 0);
         setWrapperHeight(window.innerHeight + extraScroll);
      };
      calcHeight();
      window.addEventListener("resize", calcHeight);
      return () => window.removeEventListener("resize", calcHeight);
   }, [reducedMotion]);

   const handleScroll = useCallback(() => {
      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      if (!wrapper || !track) return;

      const scrollableDistance = wrapper.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const rect = wrapper.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);
      const maxTranslate = track.scrollWidth - window.innerWidth;

      setTranslateX(progress * maxTranslate);
      setActiveIndex(
         Math.min(
            SERVICES.length - 1,
            Math.round(progress * (SERVICES.length - 1)),
         ),
      );
   }, []);

   useEffect(() => {
      if (reducedMotion) return;
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
   }, [handleScroll, reducedMotion, wrapperHeight]);

   const cards = (
      <>
         {SERVICES.map((s) => (
            <Link
               key={s.slug}
               href={`/services/${s.slug}`}
               className="group flex w-[80vw] shrink-0 flex-col text-left sm:w-[380px]"
            >
               <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden rounded-b-2xl rounded-t-[999px] border border-black/10 bg-[#3A3A3A]">
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
      </>
   );

   const heading = (
      <div className="mb-10 px-6 text-center md:px-12 mt-10">
         <span className="font-[family-name:var(--font-neue-montreal)] text-[11px] uppercase tracking-[0.3em] text-[#BC4424]">
            This Is What We Do
         </span>
         <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl uppercase tracking-wide text-[#3A3A3A] sm:text-5xl">
            Our Services
         </h2>
      </div>
   );

   // Reduced motion / no-JS-measurement fallback: plain scrollable row.
   if (reducedMotion) {
      return (
         <section className="w-full border-b border-black/[0.05] bg-[#E6D8C7] py-24">
            {heading}
            <div className="hide-scrollbar flex gap-8 overflow-x-auto px-6 pb-4 md:px-12">
               {cards}
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

   return (
      <section
         ref={wrapperRef}
         style={{ height: wrapperHeight ? `${wrapperHeight}px` : "200vh" }}
         className="relative w-full border-b border-black/[0.05] bg-[#E6D8C7]"
      >
         <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden py-10">
            {heading}

            <div
               ref={trackRef}
               style={{ transform: `translateX(-${translateX}px)` }}
               className="flex w-max gap-8 pl-6 will-change-transform md:pl-16"
            >
               {cards}
               <div className="w-2 shrink-0 sm:w-6" />
            </div>

            {/* Dot pagination reflecting scroll progress */}
            <div className="mt-10 flex items-center justify-center gap-2">
               {SERVICES.map((s, i) => (
                  <span
                     key={s.slug}
                     className={`h-2 rounded-full transition-all duration-300 ${
                        i === activeIndex
                           ? "w-6 bg-[#BC4424]"
                           : "w-2 bg-[#3A3A3A]/25"
                     }`}
                  />
               ))}
            </div>
         </div>
      </section>
   );
}
