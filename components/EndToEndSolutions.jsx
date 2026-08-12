"use client";

import {
   ChefHat,
   Archive,
   CupSoda,
   Armchair,
   Tv,
   Table2,
   PanelTop,
   Lightbulb,
   Wallpaper,
   PaintRoller,
   Bath,
   BriefcaseBusiness,
   DoorOpen,
   ArmchairIcon,
   Baby,
   CookingPot,
} from "lucide-react";

const SOLUTIONS = [
   {
      title: "Modular Kitchen",
      icon: CookingPot,
   },
   {
      title: "Storage and\nwardrobe",
      icon: Archive,
   },
   {
      title: "Crockery Units",
      icon: CupSoda,
   },
   {
      title: "Space Saving\nFurniture",
      icon: Armchair,
   },
   {
      title: "TV Units",
      icon: Tv,
   },
   {
      title: "Study Tables",
      icon: Table2,
   },
   {
      title: "False Ceiling",
      icon: PanelTop,
   },
   {
      title: "Lights",
      icon: Lightbulb,
   },
   {
      title: "Wallpaper",
      icon: Wallpaper,
   },
   {
      title: "Wall Paint",
      icon: PaintRoller,
   },
   {
      title: "Bathroom",
      icon: Bath,
   },
   {
      title: "Pooja Unit",
      icon: BriefcaseBusiness,
   },
   {
      title: "Foyer Designs",
      icon: DoorOpen,
   },
   {
      title: "Movable furniture",
      icon: ArmchairIcon,
   },
   {
      title: "Kids Bedroom",
      icon: Baby,
   },
];

export default function EndToEndSolutions() {
   return (
      <section className="w-full bg-[#E6D8C7] px-5 py-12 sm:px-8 md:py-16 pt-10">
         <div className="mx-auto max-w-5xl text-center">
            {/* <section className="relative w-full bg-[#E6D8C7] pt-28 pb-16 px-6 md:px-12 md:pt-36"> */}

            {/* Heading */}
            {/* <h2 className="my-3 mb-20 underline font-[family-name:var(--font-display)] text-4xl uppercase tracking-wide text-[#3A3A3A] sm:text-5xl">
               End-to-End Interior Solutions
            </h2> */}
            <div className="my-20 md:my-32 text-center">
               <span className="font-[family-name:var(--font-neue-montreal)] text-[11px] uppercase tracking-[0.3em] text-[#BC4424]">
                  Specialized in Every Aspect of Interior Design
               </span>
               <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl uppercase tracking-wide text-[#3A3A3A] sm:text-5xl">
                  End-to-End Interior Solutions
               </h2>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-2 gap-y-9 sm:grid-cols-3 sm:gap-y-10 md:grid-cols-5 md:gap-y-11">
               {SOLUTIONS.map((item) => {
                  const Icon = item.icon;

                  return (
                     <div
                        key={item.title}
                        className="group flex cursor-pointer flex-col items-center text-center"
                     >
                        {/* Icon */}
                        <div className="flex h-full w-full items-center justify-center">
                           <Icon
                              strokeWidth={1.25}
                              className="h-20 w-20 sm:h-28 sm:w-28 text-[#BC4424] transition-all duration-300 group-hover:scale-115 group-hover:text-[#5b5b5b]"
                           />
                        </div>

                        {/* Label */}
                        <p className="mt-2 whitespace-pre-line text-[12px] font-bold leading-[1.25] text-[#3f3f3f] sm:text-[14px]">
                           {item.title}
                        </p>
                     </div>
                  );
               })}
            </div>
         </div>

         {/* WhatsApp Floating Button */}
         <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-5 z-50 flex h-[46px] w-[46px] sm:h-[56px] sm:w-[56px] items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 hover:scale-110 sm:bottom-8 sm:right-8"
         >
            <svg
               viewBox="0 0 32 32"
               className="h-8 w-8 fill-white"
               aria-hidden="true"
            >
               <path d="M19.11 17.17c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.89 1.08-.16.19-.33.21-.61.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.87-2.11-.23-.55-.46-.47-.64-.48h-.54c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.34s1 2.71 1.14 2.9c.14.19 1.97 3.01 4.78 4.22.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.12-.26-.19-.54-.33z" />
               <path d="M16.03 3.2c-7.05 0-12.78 5.73-12.78 12.78 0 2.25.59 4.45 1.71 6.39L3.2 28.8l6.58-1.72a12.75 12.75 0 0 0 6.25 1.64h.01c7.05 0 12.78-5.73 12.78-12.78S23.08 3.2 16.03 3.2zm0 23.35h-.01a10.58 10.58 0 0 1-5.39-1.47l-.39-.23-3.91 1.02 1.04-3.81-.25-.39a10.6 10.6 0 1 1 8.91 4.88z" />
            </svg>
         </a>
      </section>
   );
}
