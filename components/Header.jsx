"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const LINKS = [
   { title: "Home", href: "/", src: "gallery/bedrooms/01.jpg" },
   { title: "Projects", href: "/projects", src: "gallery/02.png" },
   { title: "About Us", href: "/about", src: "gallery/bedrooms/03.png" },
   // { title: "Lookbook", href: "/", src: "gallery/04.png" },
   { title: "Contact", href: "/contact", src: "gallery/01.jpg" },
];

const heightAnim = {
   initial: { height: 0 },
   enter: {
      height: "auto",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
   },
   exit: { height: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } },
};

const blurAnim = {
   initial: { filter: "blur(0px)", opacity: 1 },
   open: { filter: "blur(4px)", opacity: 0.4, transition: { duration: 0.3 } },
   closed: { filter: "blur(0px)", opacity: 1, transition: { duration: 0.3 } },
};

const opacityAnim = {
   initial: { opacity: 0 },
   open: { opacity: 1, transition: { duration: 0.35 } },
   closed: { opacity: 0, transition: { duration: 0.35 } },
};

export default function Header() {
   const [isActive, setIsActive] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const [isHovered, setIsHovered] = useState(false);
   const [selectedLink, setSelectedLink] = useState({
      isActive: false,
      index: 0,
   });
   const [isModalOpen, setIsModalOpen] = useState(false);
   // Handle scroll tracking
   useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   // Condition to turn header background from transparent to blur/color
   const shouldApplyBlur = scrolled || isHovered || isActive;

   return (
      <div
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         className={`fixed top-0 left-0 z-50 w-full px-6 py-4 box-border border-b transition-all duration-500 ease-in-out ${
            shouldApplyBlur
               ? "backdrop-blur-2xl border-neutral-50/10"
               : "bg-[#E6D8C7] border-transparent"
         }`}
      >
         {/* Top Bar Layout */}
         <div className="relative flex justify-center items-center text-[12px] font-normal text-gray-850 tracking-wider h-12 uppercase">
            <Link
               href="/"
               className="absolute text-md md:text-xl left-0 flex items-center text-black gap-2 font-[family-name:var(--font-display)]"
            >
               <Image
                  src="/gallery/logo.png"
                  alt="Logo"
                  width={190}
                  height={190}
                  priority
                  className="h-8 w-auto bg-transparent"
               />{" "}
               SPACERA
            </Link>

            {/* Center Toggle Button */}
            <div
               onClick={() => setIsActive(!isActive)}
               className="flex items-center gap-2 cursor-pointer select-none py-1 h-full relative"
            >
               <div className="w-4 h-4 relative flex items-center justify-center mr-1">
                  <span
                     className={`absolute h-0.5 w-4 bg-black transition-transform duration-300 ${isActive ? "rotate-45" : "-translate-y-1"}`}
                  />
                  <span
                     className={`absolute h-0.5 w-4 bg-black font-montreal transition-transform duration-300 ${isActive ? "-rotate-45" : "translate-y-1"}`}
                  />
               </div>

               <div className="relative w-12 h-4 ">
                  <motion.p
                     className="absolute m-0 text-white"
                     variants={opacityAnim}
                     animate={!isActive ? "open" : "closed"}
                  >
                     Menu
                  </motion.p>
                  <motion.p
                     className="absolute m-0 text-black font-bold"
                     variants={opacityAnim}
                     animate={isActive ? "open" : "closed"}
                  >
                     Close
                  </motion.p>
               </div>
            </div>
            {/* NEW CODE */}
            <div className="absolute right-6 flex items-center h-full">
               <Link
                  href="/contact"
                  className="px-5 py-2.5 bg-[#C39F73] text-black text-xs uppercase tracking-wider font-bold rounded-lg hover:bg-white transition-all"
               >
                  Get Quote
               </Link>
            </div>
         </div>

         {/* Dropdown Menu Container */}
         <AnimatePresence mode="wait">
            {isActive && (
               <motion.div
                  variants={heightAnim}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="overflow-hidden w-full bg-blur-md"
               >
                  <div className="flex flex-col min-[1000px]:flex-row gap-8 justify-between pt-12 pb-6 px-6 items-start">
                     <div className="flex flex-col justify-between flex-1 w-full min-h-[250px]">
                        {/* Large Links Area: Intercepts onClick to automatically hide menu */}
                        <div
                           onClick={() => setIsActive(false)}
                           className="flex flex-wrap max-w-[800px] items-baseline content-start gap-y-2"
                        >
                           {LINKS.map((link, index) => (
                              <Link
                                 key={index}
                                 href={link.href}
                                 className="no-underline text-neutral-900 uppercase hover:text-white"
                              >
                                 <motion.p
                                    onMouseOver={(e) => {
                                       e.stopPropagation(); // Stop bubbling to prevent parent hover triggers
                                       setSelectedLink({
                                          isActive: true,
                                          index,
                                       });
                                    }}
                                    onMouseLeave={(e) => {
                                       e.stopPropagation();
                                       setSelectedLink({
                                          isActive: false,
                                          index,
                                       });
                                    }}
                                    variants={blurAnim}
                                    animate={
                                       selectedLink.isActive &&
                                       selectedLink.index !== index
                                          ? "open"
                                          : "closed"
                                    }
                                    className="m-0 inline-flex text-4xl sm:text-5xl min-[1000px]:text-[5.5vw] font-light tracking-tight pr-6 sm:pr-8 uppercase select-none leading-none transition-all cursor-pointer"
                                 >
                                    {link.title.replace(/\s+/g, "")}
                                 </motion.p>
                              </Link>
                           ))}
                        </div>

                        {/* Metadata Row */}
                        <div className="grid grid-cols-2 min-[1000px]:flex min-[1000px]:justify-between items-end gap-2 text-[10px] uppercase text-amber-800 tracking-wider pt-12 border-t border-neutral-900/40">
                           <div>
                              <span className=" mr-1">Made by:</span>
                              spacera
                           </div>
                           <div className="sm:text-end ">
                              {/* <span className="mr-1">
                                 Typography:
                              </span> */}
                              Designer Studio
                           </div>
                           <div>
                              <span className=" mr-1">Privacy</span>
                              Policy
                           </div>
                           <div
                              className="flex flex-col gap-1 sm:text-end"
                              onClick={() => setIsActive(false)}
                           >
                              {/* <Link href="/privacy" className="hover:underline">
                      Privacy Policy
                    </Link> */}
                              <Link href="/terms" className="hover:underline">
                                 Terms of Service
                              </Link>
                           </div>
                        </div>
                     </div>

                     {/* Image Preview Window */}
                     {/* <motion.div
                variants={opacityAnim}
                animate={selectedLink.isActive ? "open" : "closed"}
                className="hidden min-[1000px]:block relative w-[480px] h-[400px] shrink-0 bg-neutral-100"
              >
                <Image
                  src={`/${LINKS[selectedLink.index].src}`}
                  fill
                  className="object-cover"
                  alt="Navigation Preview"
                  sizes="480px"
                  priority
                />
              </motion.div> */}
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
}
