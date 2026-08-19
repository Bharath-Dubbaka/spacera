"use client";

import Image from "next/image";
import Link from "next/link";

const HIGHLIGHTS = ["Modern", "Minimalist", "Bespoke"];

export default function CustomInteriors({ onEstimateClick }) {
   return (
      <section className="relative w-full bg-[#E6D8C7] overflow-hidden">
         <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1fr] gap-14 lg:gap-10 items-center">
               {/* IMAGE COLUMN — hourglass mask + badges */}
               <div className="relative w-full aspect-[3/5] mx-auto max-w-[440px] order-2 lg:order-1">
                  <div
                     className="relative h-full w-full overflow-hidden bg-[white]/5"
                     style={{ clipPath: "url(#interiorsHourglassClip)" }}
                  >
                     <Image
                        src="/gallery/optimized/showcaseimg.webp"
                        alt="Custom interior — bedroom"
                        fill
                        sizes="440px"
                        className="object-cover"
                     />
                  </div>

                  <svg width="0" height="0" className="absolute">
                     <defs>
                        <clipPath
                           id="interiorsHourglassClip"
                           clipPathUnits="objectBoundingBox"
                        >
                           <path
                              d="
                                 M0.15,0 H0.85
                                 Q1,0 1,0.15
                                 L1,0.35
                                 Q0.68,0.5 1,0.65
                                 L1,0.85
                                 Q1,1 0.85,1
                                 H0.15
                                 Q0,1 0,0.85
                                 L0,0.65
                                 Q0.32,0.5 0,0.35
                                 L0,0.15
                                 Q0,0 0.15,0
                                 Z
                              "
                           />
                        </clipPath>
                     </defs>
                  </svg>

                  {/* Ribbon badge */}
                  <div className="absolute -left-3 top-8 flex flex-col items-start">
                     <div className="bg-[#BC4424] px-4 py-2 shadow-lg">
                        <span className="font-[family-name:var(--font-display)] text-lg uppercase leading-none text-white">
                           Custom Interiors
                        </span>
                     </div>
                     <div className="border-l-[14px] border-l-transparent border-t-[10px] border-t-[#8a3119] ml-0" />
                  </div>

                  {/* Budget tag circle */}
                  <div className="absolute top-24 left-8 flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 border-[#C39F73] bg-white/90 text-center shadow-xl">
                     <span className="font-[family-name:var(--font-display)] text-lg leading-none text-black">
                        ₹1.49Lakhs
                     </span>
                     <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.15em] text-black/50">
                        onwards
                     </span>
                  </div>

                  {/* Bottom pill */}
                  <div className="absolute bottom-6 right-2 flex items-center gap-2 rounded-full bg-[#E6D8C7] px-5 py-2.5 whitespace-nowrap">
                     <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black">
                        Spacera Studio
                     </span>
                  </div>
               </div>

               {/* TEXT COLUMN */}
               <div className="order-1 lg:order-2 relative">
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#BC4424]">
                     Custom interiors
                  </p>

                  <div className="flex items-start gap-6">
                     <h2 className="font-[family-name:var(--font-display)] text-[52px] sm:text-[76px] uppercase leading-[0.88] tracking-tight text-black">
                        Spaces,
                        <br />
                        shaped for
                        <br />
                        how you
                        <br />
                        live.
                     </h2>

                     {/* Vertical rotated word — signature element */}
                     <span
                        className="hidden sm:block shrink-0 self-stretch font-[family-name:var(--font-display)] text-[13px] uppercase tracking-[0.5em] text-black/40"
                        style={{ writingMode: "vertical-rl" }}
                     >
                        Interiors
                     </span>
                  </div>

                  <div className="mt-6 mb-8 flex flex-wrap items-center gap-x-5 gap-y-2">
                     {HIGHLIGHTS.map((tag, i) => (
                        <span
                           key={tag}
                           className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-black/60"
                        >
                           <span className="h-1.5 w-1.5 rounded-full bg-[#C39F73]" />
                           {tag}
                        </span>
                     ))}
                  </div>

                  <p className="max-w-[440px] text-[15px] leading-relaxed text-black/60 mb-10">
                     Every project is built around how a space is actually lived
                     in — from layout and material selection to the smallest
                     finishing details. Residence, workplace, or commercial
                     space, we craft environments tailored to individuality.
                  </p>

                  {onEstimateClick ? (
                     <button
                        type="button"
                        onClick={onEstimateClick}
                        className="inline-flex items-center justify-center rounded-lg bg-[#C39F73] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-white"
                     >
                        Get Free Estimate
                     </button>
                  ) : (
                     <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-lg bg-[#C39F73] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-white"
                     >
                        Get Free Estimate
                     </Link>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
}
