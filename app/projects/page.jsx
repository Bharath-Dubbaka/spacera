"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECT_SECTIONS } from "./projectsData";
import Image from "next/image";

function Carousel({ projects }) {
   const trackRef = useRef(null);
   const [active, setActive] = useState(0);
   const [isPaused, setIsPaused] = useState(false);
   const activeRef = useRef(0);

   const scrollTo = (index, smooth = true) => {
      const el = trackRef.current;
      if (!el) return;

      const cards = el.querySelectorAll("[data-card]");
      const card = cards[index];

      if (!card) return;

      el.scrollTo({
         left: card.offsetLeft,
         behavior: smooth ? "smooth" : "auto",
      });

      activeRef.current = index;
      setActive(index);
   };

   const next = () => {
      if (active < projects.length - 1) {
         scrollTo(active + 1);
      }
   };

   const prev = () => {
      if (active > 0) {
         scrollTo(active - 1);
      }
   };

   useEffect(() => {
      if (!projects?.length || projects.length <= 1 || isPaused) {
         return;
      }

      const interval = setInterval(() => {
         const current = activeRef.current;
         const isLast = current >= projects.length - 1;

         if (isLast) {
            // Go back to the first card
            scrollTo(0);
         } else {
            scrollTo(current + 1);
         }
      }, 4000);

      return () => clearInterval(interval);
   }, [projects.length, isPaused]);

   return (
      <div className="relative mt-10">
         <button
            onClick={prev}
            disabled={active === 0}
            className="absolute left-0 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg md:flex disabled:opacity-30"
         >
            <ArrowLeft size={18} />
         </button>

         <button
            onClick={next}
            disabled={active === projects.length - 1}
            className="absolute right-0 top-1/2 z-20 hidden translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg md:flex disabled:opacity-30"
         >
            <ArrowRight size={18} />
         </button>

         <div
            ref={trackRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth"
         >
            {projects.map((project, index) => (
               <div
                  key={index}
                  data-card
                  className="group w-[85%] shrink-0 snap-start sm:w-[48%] lg:w-[32%]"
               >
                  <div className="overflow-hidden rounded-[2rem]">
                     <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={1000}
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 32vw"
                        className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                     />
                  </div>

                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl uppercase tracking-wide text-[#3A3A3A]">
                     {project.title}
                  </h3>
               </div>
            ))}
         </div>

         <div className="mt-8 flex justify-center gap-2">
            {projects.map((_, i) => (
               <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`h-2 rounded-full transition-all ${
                     active === i ? "w-8 bg-[#BC4424]" : "w-2 bg-black/20"
                  }`}
               />
            ))}
         </div>
      </div>
   );
}

export default function ProjectsPage() {
   return (
      <main className="bg-[#E6D8C7] text-[#3A3A3A]">
         {/* Hero */}
         {/* Hero */}
         <section
            className="relative overflow-hidden border-b border-black/10 px-6 py-24 md:px-12"
            style={{
               backgroundImage:
                  "url('/gallery/optimized/kitchen/kitchen-1.webp')",
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
         >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35" />

            <div className="relative z-10 mx-auto max-w-6xl text-center text-white">
               <span className="text-xs uppercase tracking-[0.35em] text-white/80">
                  Portfolio
               </span>

               <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl uppercase leading-none md:text-7xl">
                  Crafted
                  <br />
                  Spaces
               </h1>

               <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/80">
                  Explore a curated collection of residential and commercial
                  interiors designed with timeless aesthetics and thoughtful
                  functionality.
               </p>
            </div>
         </section>

         <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            {PROJECT_SECTIONS.map((section) => (
               <section
                  key={section.id}
                  id={section.id}
                  className="mb-28 scroll-mt-28"
               >
                  <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                     <div className="max-w-2xl">
                        <span className="text-[11px] uppercase tracking-[0.3em] text-[#BC4424]">
                           {section.eyebrow}
                        </span>

                        <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl uppercase leading-tight md:text-5xl">
                           {section.title}
                        </h2>

                        <p className="mt-5 max-w-xl leading-8 text-black/60">
                           {section.description}
                        </p>
                     </div>

                     <Link
                        href="/contact"
                        className="inline-flex w-fit items-center gap-2 rounded-full bg-[#BC4424] px-6 py-3 text-sm uppercase tracking-[0.15em] text-white transition hover:bg-[#a93d20]"
                     >
                        {section.cta}
                        <ArrowUpRight size={16} />
                     </Link>
                  </div>

                  <Carousel projects={section.projects} />
               </section>
            ))}{" "}
         </div>
      </main>
   );
}

<style jsx global>{`
   .hide-scrollbar {
      scrollbar-width: none;
      -ms-overflow-style: none;
   }

   .hide-scrollbar::-webkit-scrollbar {
      display: none;
   }

   html {
      scroll-behavior: smooth;
   }
`}</style>;
