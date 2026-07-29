"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "./images-slider";
import Link from "next/link";
import Image from "next/image";

export function ImagesSliderDemo() {
   const images = ["/gallery/06.png", "/gallery/03.png", "/gallery/04.png"];
   return (
      <ImagesSlider
         className="min-h-[90vh] mx-auto max-w-[90vw] rounded-2xl mt-20 justify-start"
         images={images}
      >
         {/* <motion.div
            initial={{
               opacity: 0,
               y: -80,
            }}
            animate={{
               opacity: 1,
               y: 0,
            }}
            transition={{
               duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
         >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
               The hero section slideshow <br /> nobody asked for
            </motion.p>
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
               <span>Join now →</span>
               <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
         </motion.div> */}
         <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-50 max-w-3xl px-8 md:px-16"
         >
            <span className="hidden mb-4 md:inline-block text-xs uppercase tracking-[0.35em] text-white/80">
               Premium Interior Design Studio
            </span>

            <div className="space-y-8">
               {/* Brand */}
               <Link href="/" className="inline-flex items-center gap-4 group">
                  <div className="relative h-16 w-16">
                     <Image
                        src="/gallery/logo.png"
                        alt="Spacera"
                        fill
                        className="object-contain"
                        priority
                     />
                  </div>

                  <div className="flex flex-col">
                     <span className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-semibold tracking-[0.15em] text-[#E6D8C7]">
                        SPACERA
                     </span>

                     <span className="mt-1 text-xs md:text-sm uppercase tracking-[0.4em] text-white/70">
                        Interior Design Studio
                     </span>
                  </div>
               </Link>

               {/* Hero Content */}
               <div className="space-y-6">
                  <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] text-white">
                     Designing
                     <br />
                     Timeless
                     <br />
                     Spaces
                  </h1>

                  {/* <p className="max-w-xl text-base md:text-lg leading-8 text-white/75">
                     Creating refined interiors that blend elegance, comfort,
                     and functionality for homes and commercial spaces.
                  </p> */}
               </div>
            </div>
            <p className="mt-8 max-w-lg text-base leading-7 text-white/75 md:text-lg">
               We create refined residential and commercial interiors that blend
               functionality, comfort, and timeless aesthetics.
            </p>

            <button className="mt-10 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:bg-white hover:text-black">
               View Projects
            </button>
         </motion.div>
      </ImagesSlider>
   );
}
