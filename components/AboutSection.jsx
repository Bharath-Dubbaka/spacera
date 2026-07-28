"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-[#E6D8C7] text-[#e4e2e6] py-24 px-6 md:px-12 border-b border-black/[0.05]">
    
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Side: Editorial Image Block with Offset Border */}
        <div className="md:col-span-5 relative group">
          <div className="absolute -inset-2 border border-white/10 rounded-lg translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300 pointer-events-none" />
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-neutral-900 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&auto=format&fit=crop"
              alt="Tattoo Artistry Close Up"
              className="w-full h-full object-cover grayscale contrast-125 brightness-90 transition-transform duration-500 group-hover:scale-105"
            />

          </div>
        </div>

        {/* Right Side: Editorial Content */}
        <div className="md:col-span-7 space-y-6 md:pl-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-800 font-semibold">
              Our Story
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wider text-neutral-900 uppercase">
              About DBK
            </h2>
          </div>

          {/* Structured Text Box */}
          <div className="bg-black/[0.02] border border-black/[0.06] rounded-xl p-8 space-y-4 backdrop-blur-sm">
            <p className="text-sm sm:text-base font-light leading-relaxed text-neutral-900/80">
              DBK tattoo studio and gallery was founded in 2012. Since then, we
              have grown to be the leading tattoo studio in Latvia with a
              unique, professional and individual style.
            </p>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-neutral-900/80">
              Our studio provides safe and custom-made design solutions with a
              fresh, developing style that has our unique signature.
            </p>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-neutral-900/80">
              Our team includes diverse artists with an ambition to grow their
              personal style and the hunger to find new challenges in the minds
              of our customers.
            </p>
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between pt-4 border-t border-black/[0.85]">
            <span className="text-xs uppercase tracking-widest text-neutral-900">
              Est. 2012
            </span>
            <button className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold border border-white/15 hover:border-white/40 px-6 py-2.5 rounded-full transition duration-300">
              Our Team
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
