"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function EssentialPackage() {
   const [showDetails, setShowDetails] = useState(false);
   const [activeImage, setActiveImage] = useState(0);
   const packageImages = [
      "/gallery/bedrooms/06.png",
      "/gallery/kitchen/kitchen-2.jpg",
      "/gallery/kitchen/kitchen-1.jpg",
      "/gallery/bedrooms/03.png",
   ];

   const rooms = [
      {
         name: "Foyer",
         items: ["Shoe rack unit with cabinets and shutters"],
      },
      {
         name: "Living Room",
         items: [
            "Premium TV display unit with aluminium profile & glass shutter",
         ],
      },
      {
         name: "Dining Room",
         items: [
            "Medley black finish dining table 6 Seater",
            "Briano dining chair (3 Nos)",
            "3 Seater dining bench - (1 No)",
         ],
      },
      {
         name: "Master Bedroom",
         items: [
            "Soft close 3 door hinged wardrobe with grey wooden handles",
            "Queen size bed with head board, without bottom drawer",
            "Open type bed side table (2 Nos)",
         ],
      },
      {
         name: "Guest Bedroom",
         items: [
            "Soft close 3 door hinged wardrobe with grey wooden handles",
            "Queen size bed with head board, without bottom drawer",
            "Open type bed side table (2 Nos)",
         ],
      },
      {
         name: "Modular Kitchen",
         items: [
            "Bottom cabinets",
            "Over head cabinets",
            "Hettich (German Made – 15 years warranty) Accessories – 6 Nos*",
            "Hood and Hob – Faber",
         ],
      },
   ];

   useEffect(() => {
      const interval = setInterval(() => {
         setActiveImage((prev) => (prev + 1) % packageImages.length);
      }, 500);

      return () => clearInterval(interval);
   }, []);

   return (
      <section className="px-6 py-20 md:px-10 md:py-28">
         <div className="mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="mb-12 flex flex-col gap-8 border-b border-black/10 pb-8 md:flex-row md:items-end md:justify-between">
               <div>
                  <span className="text-[11px] uppercase tracking-[0.35em] text-[#BC4424]">
                     Everything Essential
                  </span>

                  <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl uppercase leading-[0.95] text-[#292929] md:text-6xl">
                     One package.
                     <br />
                     Everything you need.
                  </h2>
               </div>

               <p className="max-w-sm text-sm leading-7 text-black/50 md:text-right">
                  A thoughtfully curated interior package covering the essential
                  spaces of your home, designed to work together as one cohesive
                  space.
               </p>
            </div>

            {/* Main Package */}
            <div className="overflow-hidden rounded-[2rem] bg-[#EFE4D5]">
               <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                  {/* Left */}
                  {/* Left — Image Slideshow */}
                  <div className="relative min-h-[420px] overflow-hidden md:min-h-[620px]">
                     {/* Images */}
                     {packageImages.map((image, index) => (
                        <div
                           key={image}
                           className={`absolute inset-0 transition-opacity duration-[1200ms] ${
                              activeImage === index
                                 ? "opacity-100"
                                 : "opacity-0"
                           }`}
                        >
                           <img
                              src={image}
                              alt=""
                              className="h-full w-full object-cover"
                           />
                        </div>
                     ))}

                     {/* Dark overlay */}
                     <div className="absolute inset-0 bg-black/35" />

                     {/* Content */}
                     <div className="relative z-10 flex min-h-[420px] flex-col justify-between p-8 text-white md:min-h-[620px] md:p-12">
                        <div>
                           <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                              Spacera Interiors
                           </span>

                           <div className="mt-8 font-[family-name:var(--font-display)] text-[7rem] leading-none tracking-[-0.08em] md:text-[10rem]">
                              01
                           </div>

                           <h3 className="mt-2 max-w-sm font-[family-name:var(--font-display)] text-4xl uppercase leading-none md:text-5xl">
                              Essential
                              <br />
                              Package
                           </h3>
                        </div>

                        <div className="mt-16">
                           <div className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/70">
                              Starting from
                           </div>

                           <span className="font-[family-name:var(--font-display)] text-4xl md:text-5xl">
                              ₹6.37 Lac*
                           </span>

                           <p className="mt-3 max-w-xs text-xs leading-5 text-white/70">
                              Essential woodwork package for a thoughtfully
                              designed 2 BHK home.
                           </p>
                        </div>
                     </div>

                     {/* Slide indicators */}
                     <div className="absolute bottom-6 right-8 z-20 flex gap-1.5">
                        {packageImages.map((_, index) => (
                           <button
                              key={index}
                              onClick={() => setActiveImage(index)}
                              className={`h-1.5 rounded-full transition-all duration-500 ${
                                 activeImage === index
                                    ? "w-8 bg-white"
                                    : "w-1.5 bg-white/40"
                              }`}
                           />
                        ))}
                     </div>
                  </div>

                  {/* Right */}
                  <div className="p-6 md:p-10 lg:p-12">
                     <div className="mb-8 flex items-center justify-between">
                        <div>
                           <span className="text-[10px] uppercase tracking-[0.3em] text-black/40">
                              Package includes
                           </span>

                           <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl uppercase">
                              Spaces &amp; Details
                           </h3>
                        </div>

                        <span className="hidden text-xs text-black/30 sm:block">
                           06 Spaces
                        </span>
                     </div>

                     {/* Room List */}
                     <div className="border-t border-black/10">
                        {rooms.map((room, index) => (
                           <div
                              key={room.name}
                              className="group border-b border-black/10 py-5"
                           >
                              <div className="flex gap-4">
                                 <span className="pt-1 text-[10px] text-[#BC4424]">
                                    0{index + 1}
                                 </span>

                                 <div className="flex-1">
                                    <h4 className="font-[family-name:var(--font-display)] text-lg uppercase tracking-wide text-[#292929]">
                                       {room.name}
                                    </h4>

                                    <div className="mt-2 space-y-1">
                                       {room.items.map((item, itemIndex) => (
                                          <p
                                             key={itemIndex}
                                             className="max-w-xl text-xs leading-5 text-black/55"
                                          >
                                             {item}
                                          </p>
                                       ))}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>

                     {/* Bottom */}
                     <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <button
                           onClick={() => setShowDetails(!showDetails)}
                           className="text-left text-[10px] uppercase tracking-[0.2em] text-black/50 transition hover:text-[#BC4424]"
                        >
                           {showDetails
                              ? "− Hide details"
                              : "+ View package details"}
                        </button>

                        <Link
                           href="/contact"
                           className="inline-flex w-fit items-center rounded-full bg-[#292929] px-6 py-3 text-xs uppercase tracking-[0.15em] text-[#F5EBDD] transition hover:bg-[#BC4424]"
                        >
                           Get a Quote
                        </Link>
                     </div>

                     {/* Extra Details */}
                     {showDetails && (
                        <div className="mt-6 border-t border-black/10 pt-6">
                           <div className="grid gap-4 text-xs leading-6 text-black/50 sm:grid-cols-2">
                              <p>
                                 <strong className="text-black/80">
                                    Material:
                                 </strong>{" "}
                                 Premium interior-grade materials with selected
                                 hardware and finishes.
                              </p>

                              <p>
                                 <strong className="text-black/80">
                                    Design:
                                 </strong>{" "}
                                 Complete design coordination across the
                                 included spaces.
                              </p>

                              <p>
                                 <strong className="text-black/80">
                                    Hardware:
                                 </strong>{" "}
                                 Soft-close mechanisms and selected branded
                                 accessories.
                              </p>

                              <p>
                                 <strong className="text-black/80">
                                    Customisation:
                                 </strong>{" "}
                                 Finishes, colours and configurations can be
                                 discussed during consultation.
                              </p>
                           </div>
                        </div>
                     )}
                  </div>
               </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-4 text-[9px] uppercase tracking-[0.12em] text-black/35">
               *Indicative pricing. Final pricing may vary based on selected
               materials, finishes, dimensions and site requirements.
            </p>
         </div>
      </section>
   );
}
