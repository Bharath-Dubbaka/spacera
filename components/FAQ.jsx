"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
   {
      question: "How much does home interior design cost?",
      answer:
         "The cost of home interiors depends on the size of your home, the number of rooms, materials, finishes, furniture and the level of customization. At Spacera, we create solutions around your requirements and budget, with a clear understanding of the scope before the project begins.",
   },
   {
      question: "How does the interior design process work with Spacera?",
      answer:
         "Our process begins with a consultation to understand your lifestyle, preferences and requirements. We then work through space planning, concept development, material and finish selection, 3D visualizations, detailed design and execution. Our team coordinates the project through installation to help bring the final space together smoothly.",
   },
   {
      question: "Can I customize the design to suit my taste?",
      answer:
         "Absolutely. Every Spacera interior is designed around the people who use the space. You can choose your preferred colours, materials, finishes, furniture styles, lighting and overall design direction. We help refine your ideas into a cohesive and functional interior.",
   },
   {
      question: "How long does it take to complete an interior design project?",
      answer:
         "The timeline depends on the size and scope of the project, the level of customization and the materials selected. During the planning stage, Spacera provides a project timeline so you have a clear understanding of the major stages from design through installation.",
   },
   {
      question: "Can Spacera help with furniture selection and procurement?",
      answer:
         "Yes. We can help you select furniture, furnishings and décor that complement the overall interior design. Our team considers proportions, functionality, materials and aesthetics so the individual pieces work together as part of the complete space.",
   },
   {
      question: "Can you work with existing furniture and décor?",
      answer:
         "Yes. If you already have furniture, artwork, lighting or décor that you would like to keep, we can incorporate suitable pieces into the new design wherever practical. This allows us to refresh your space while retaining elements that are meaningful to you.",
   },
   {
      question: "Do you provide lighting design?",
      answer:
         "Yes. Lighting is an important part of our interior design approach. We consider ambient, task and accent lighting to create comfortable and visually balanced spaces while complementing the furniture, finishes and architectural elements.",
   },
   {
      question: "Do you provide a warranty for your work?",
      answer:
         "Warranty and service coverage depends on the products, materials and work involved in your project. The applicable terms are discussed with you before execution so you have clarity about product warranties, workmanship and after-sales support.",
   },
   {
      question: "How do I get started with my home interiors?",
      answer:
         "Getting started is simple. Contact Spacera and tell us about your home, requirements, preferred style and project scope. Our team can then understand your needs, discuss the possibilities and guide you through the next steps.",
   },
];

export default function FAQ() {
   const [openIndex, setOpenIndex] = useState(null);

   const toggleFAQ = (index) => {
      setOpenIndex((current) => (current === index ? null : index));
   };

   return (
      <section className="border-t border-black/10 bg-[#E6D8C7] px-6 py-20 md:px-12 md:py-28">
         <div className="mx-auto max-w-5xl">
            {/* Heading */}
            <div className="mb-10 text-center md:mb-14">
               <span className="text-[11px] uppercase tracking-[0.35em] text-[#BC4424]">
                  FAQs
               </span>

               <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl uppercase leading-none text-[#3A3A3A] md:text-6xl">
                  Frequently Asked Questions
               </h2>

               <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/60 md:text-base">
                  Answers to some of the most common questions about home
                  interiors, our design process and working with Spacera.
               </p>
            </div>

            {/* FAQ List */}
            <div className="overflow-hidden border border-black/10 bg-neutral-200">
               {FAQS.map((faq, index) => {
                  const isOpen = openIndex === index;

                  return (
                     <div
                        key={faq.question}
                        className="border-b border-black/10 last:border-b-0"
                     >
                        <button
                           type="button"
                           onClick={() => toggleFAQ(index)}
                           aria-expanded={isOpen}
                           className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition hover:bg-black/[0.02] md:px-7"
                        >
                           <span
                              className={`text-sm font-medium leading-6 transition-colors md:text-base ${
                                 isOpen ? "text-[#BC4424]" : "text-[#3A3A3A]"
                              }`}
                           >
                              {faq.question}
                           </span>

                           <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/10">
                              {isOpen ? (
                                 <Minus size={14} />
                              ) : (
                                 <Plus size={14} />
                              )}
                           </span>
                        </button>

                        <div
                           className={`grid transition-all duration-300 ${
                              isOpen
                                 ? "grid-rows-[1fr] opacity-100"
                                 : "grid-rows-[0fr] opacity-0"
                           }`}
                        >
                           <div className="overflow-hidden">
                              <p className="px-5 pb-6 text-sm leading-7 text-black/60 md:px-7 md:pb-7">
                                 {faq.answer}
                              </p>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
