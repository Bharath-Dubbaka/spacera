"use client";

import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    title: "Custom Tattoos",
    image: "/gallery/02.png",
    description:
      "One-of-a-kind designs built around your story, sketched and refined with you before the needle ever touches skin.",
  },
  {
    title: "Fine Line & Micro",
    image: "/gallery/03.png",
    description:
      "Delicate linework and micro-realism for pieces that read as quiet, permanent details rather than statements.",
  },
  {
    title: "Cover-Ups & Restoration",
    image: "/gallery/04.png",
    description:
      "Thoughtful reworking of older pieces — softened, reimagined, or fully transformed into something new.",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full border-b border-black/[0.05] bg-[#E6D8C7] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="font-[family-name:var(--font-neue-montreal)] text-[11px] uppercase tracking-[0.3em] text-[#BC4424]">
            This Is What We Do
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl uppercase tracking-wide text-[#3A3A3A] sm:text-5xl">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative aspect-[3/4] w-full max-w-[240px] overflow-hidden rounded-b-2xl rounded-t-[999px] border border-black/10 bg-[#3A3A3A]">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover grayscale-[15%] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl uppercase tracking-wide text-[#3A3A3A]">
                {s.title}
              </h3>
              <p className="mt-3 max-w-[260px] text-sm leading-relaxed text-[#3A3A3A]/70">
                {s.description}
              </p>
              <button className="mt-4 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.15em] text-[#BC4424] transition-all hover:gap-2">
                Read More
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}