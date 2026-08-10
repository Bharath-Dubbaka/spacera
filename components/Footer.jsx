"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

const NAV = [
   { href: "/", label: "Home" },
   { href: "/about", label: "About" },
   { href: "/contact", label: "Contact" },
   { href: "/faq", label: "FAQ" },
];

const SOCIALS = [
   { href: "https://instagram.com", label: "Instagram" },
   { href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

   return (
      <footer className="relative border-t border-bronze-deep/40 bg-black px-6 py-16 sm:px-12 text-neutral-100/80">
         <div className="mx-auto flex max-w-6xl flex-col gap-12 sm:flex-row sm:justify-between">
            <div className="max-w-sm">
               <span className="font-mono text-xs uppercase tracking-[0.25em] text-paper">
                  spacera Studios
               </span>
               <p className="mt-4 text-sm leading-relaxed text-stone">
                  We create refined residential and commercial interiors that
                  blend functionality, comfort, and timeless aesthetics.
               </p>
            </div>

            <div className="flex gap-16">
               <div className="flex flex-col gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze">
                     Navigate
                  </span>
                  {NAV.map((link) => (
                     <Link
                        key={link.href}
                        href={link.href}
                        className="font-mono text-xs text-stone hover:text-paper transition-colors"
                     >
                        {link.label}
                     </Link>
                  ))}
               </div>

               <div className="flex flex-col gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze">
                     Connect
                  </span>
                  {SOCIALS.map((link) => (
                     <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs text-stone hover:text-paper transition-colors"
                     >
                        {link.label}
                     </a>
                  ))}
               </div>
            </div>
         </div>

         <div className="mx-auto mt-16 flex max-w-6xl flex-col-reverse items-center gap-6 border-t border-bronze-deep/30 pt-6 sm:flex-row sm:justify-between">
            <span className="font-mono text-[11px] text-stone">
               © {new Date().getFullYear()} Spacera Studios
            </span>
            <Image
               src="/gallery/logo.png"
               alt="Logo"
               width={190}
               height={190}
               priority
               className="h-8 w-auto bg-transparent"
            />{" "}
            {/* <motion.button
               onClick={scrollToTop}
               whileHover={{ rotate: 180 }}
               transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
               aria-label="Back to top"
               className="flex h-9 w-9 items-center justify-center rounded-full border border-bronze/60"
            >
               <svg viewBox="0 0 24 24" className="h-4 w-4">
                  <circle
                     cx="12"
                     cy="12"
                     r="9"
                     fill="none"
                     stroke="#B8763E"
                     strokeWidth="1.4"
                  />
               </svg>
            </motion.button> */}
         </div>
      </footer>
   );
}
