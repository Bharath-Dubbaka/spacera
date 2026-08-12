"use client";

import Link from "next/link";
// import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import EstimateModal from "@/components/EstimateModal";

const LINKS = [
   { title: "Home", href: "/", src: "gallery/optimized/bedrooms/01.webp" },
   { title: "Projects", href: "/projects", src: "gallery/optimized/02.webp" },
   { title: "FAQ's", href: "/faq", src: "gallery/optimized/bedrooms/03.webp" },
   // { title: "Lookbook", href: "/", src: "gallery/optimized/04.webp" },
   { title: "Contact", href: "/contact", src: "gallery/optimized/01.webp" },
   { title: "About", href: "/about", src: "gallery/optimized/01.webp" },
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
   const headerRef = useRef(null);

   const [isActive, setIsActive] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const [isHovered, setIsHovered] = useState(false);
   const [selectedLink, setSelectedLink] = useState({
      isActive: false,
      index: 0,
   });
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isEstimateOpen, setIsEstimateOpen] = useState(false);
   // Handle scroll tracking
   useEffect(() => {
      const onScroll = () => {
         setScrolled(window.scrollY > 20);
      };

      const handleOutsideClick = (event) => {
         if (
            isActive &&
            headerRef.current &&
            !headerRef.current.contains(event.target)
         ) {
            setIsActive(false);
         }
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      document.addEventListener("mousedown", handleOutsideClick);

      return () => {
         window.removeEventListener("scroll", onScroll);
         document.removeEventListener("mousedown", handleOutsideClick);
      };
   }, [isActive]);
   useEffect(() => {
      const timer = setTimeout(() => {
         setIsEstimateOpen(true);
      }, 15000);

      return () => clearTimeout(timer);
   }, []);
   // Condition to turn header background from transparent to blur/color
   const shouldApplyBlur = scrolled || isHovered || isActive;

   return (
      <>
         <div
            ref={headerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`fixed top-0 left-0 z-50 w-full px-6 py-2 sm:px-6 sm:py-4 box-border border-b transition-all duration-500 ease-in-out ${
               shouldApplyBlur
                  ? "bg-[#E6D8C7]/90 backdrop-blur-sm border-black/10"
                  : "bg-[#E6D8C7] border-transparent"
            }`}
         >
            {/* Top Bar Layout */}
            {/* Top Bar Layout */}
            <>
               {/* MOBILE BAR — flex, hamburger+logo grouped on the left, estimate on right */}
               <div className="flex sm:hidden items-center justify-between h-12 text-[12px] uppercase tracking-wider">
                  <div className="flex items-center gap-3 justify-self-start sm:contents">
                     <div
                        onClick={() => setIsActive((prev) => !prev)}
                        className="flex items-center justify-center cursor-pointer select-none"
                     >
                        <div className="relative w-5 h-5 flex items-center justify-center">
                           <span
                              className={`absolute h-[2px] w-5 bg-black transition-transform duration-300 ${
                                 isActive ? "rotate-45" : "-translate-y-1"
                              }`}
                           />
                           <span
                              className={`absolute h-[2px] w-5 bg-black transition-transform duration-300 ${
                                 isActive ? "-rotate-45" : "translate-y-1"
                              }`}
                           />
                        </div>
                     </div>

                     <Link
                        href="/"
                        className="flex items-center gap-2 text-black font-[family-name:var(--font-display)]"
                     >
                        <Image
                           src="/gallery/optimized/logo.webp"
                           alt="Logo"
                           width={190}
                           height={190}
                           priority
                           className="h-9 w-auto"
                        />
                        <span className="text-sm tracking-normal hidden sm:inline">
                           SPACERA
                        </span>
                     </Link>
                  </div>

                  <button
                     type="button"
                     onClick={() => setIsEstimateOpen(true)}
                     className="
    flex items-center justify-center
    h-7 sm:h-10
    px-3 sm:px-5
    bg-[#C39F73]
    text-black
    text-[10px] sm:text-xs
    uppercase
    tracking-wider
    font-bold
    rounded-md sm:rounded-lg
    whitespace-nowrap
    hover:bg-white
    transition-all
  "
                  >
                     <span className="sm:hidden text-[8px]">
                        Get Free Estimate
                     </span>

                     <span className="hidden sm:inline">Get Free Estimate</span>
                  </button>
               </div>

               {/* DESKTOP BAR — your original grid, untouched */}
               <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] items-center h-12 text-[12px] uppercase tracking-wider">
                  <Link
                     href="/"
                     className="relative justify-self-start flex items-center gap-2 text-black font-[family-name:var(--font-display)]"
                  >
                     <Image
                        src="/gallery/optimized/logo.webp"
                        alt="Logo"
                        width={190}
                        height={190}
                        priority
                        className="h-8 w-auto"
                     />
                     <span className="text-xl tracking-normal">SPACERA</span>
                  </Link>

                  <div
                     onClick={() => setIsActive((prev) => !prev)}
                     className="justify-self-center flex items-center gap-2 cursor-pointer select-none"
                  >
                     <div className="relative w-5 h-5 flex items-center justify-center">
                        <span
                           className={`absolute h-[2px] w-5 bg-black transition-transform duration-300 ${
                              isActive ? "rotate-45" : "-translate-y-1"
                           }`}
                        />
                        <span
                           className={`absolute h-[2px] w-5 bg-black transition-transform duration-300 ${
                              isActive ? "-rotate-45" : "translate-y-1"
                           }`}
                        />
                     </div>
                     <div className="relative w-12 h-4">
                        <motion.p
                           className="absolute m-0 text-black font-bold"
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

                  <button
                     type="button"
                     onClick={() => setIsEstimateOpen(true)}
                     className="justify-self-end flex items-center justify-center h-10 px-5 bg-[#C39F73] text-black text-xs uppercase tracking-wider font-bold rounded-lg whitespace-nowrap hover:bg-white transition-all"
                  >
                     Get Free Estimate
                  </button>
               </div>
            </>

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
                                    className="no-underline text-neutral-900 uppercase hover:text-[#8B6B48]"
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
                                 <Link
                                    href="/terms"
                                    className="hover:underline"
                                 >
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
         <EstimateModal
            isOpen={isEstimateOpen}
            onClose={() => setIsEstimateOpen(false)}
         />
      </>
   );
}
