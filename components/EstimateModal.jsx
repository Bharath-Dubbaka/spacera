"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowLeft, X } from "lucide-react";
import emailjs from "@emailjs/browser";

function PillGroup({ label, value, onChange, options }) {
   return (
      <div>
         <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">
            {label}
         </span>
         <div className="flex flex-wrap gap-2">
            {options.map((option) => {
               const active = value === option;
               return (
                  <button
                     key={option}
                     type="button"
                     onClick={() => onChange(option)}
                     className={`
                        rounded-full border px-4 py-2.5 text-[11px] uppercase tracking-[0.05em] transition-all
                        ${
                           active
                              ? "border-black bg-black text-white"
                              : "border-black/15 bg-transparent text-black/60 hover:border-black/40 hover:text-black"
                        }
                     `}
                  >
                     {option}
                  </button>
               );
            })}
         </div>
      </div>
   );
}

export default function EstimateModal({ isOpen, onClose }) {
   const formRef = useRef(null);
   const [step, setStep] = useState(1);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [form, setForm] = useState({
      phone: "",
      email: "",
      fullName: "",
      city: "",
      possessionDate: "",
      size: "",
      budget: "",
      type: "",
   });

   useEffect(() => {
      if (!isOpen) return;
      const scrollY = window.scrollY;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      return () => {
         document.documentElement.style.overflow = "";
         document.body.style.overflow = "";
         document.body.style.position = "";
         document.body.style.top = "";
         document.body.style.left = "";
         document.body.style.right = "";
         document.body.style.width = "";
         window.scrollTo(0, scrollY);
      };
   }, [isOpen]);

   useEffect(() => {
      if (!isOpen) return;
      const handleKeyDown = (e) => {
         if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
   }, [isOpen, onClose]);

   useEffect(() => {
      if (!isOpen) setStep(1);
   }, [isOpen]);

   if (!isOpen) return null;

   const updateField = (field, value) => {
      setForm((prev) => ({ ...prev, [field]: value }));
   };

   const nextStep = () => {
      if (step === 1) {
         if (!form.phone || !form.email) return;
         setStep(2);
      }
   };

   const previousStep = () => {
      if (step === 2) setStep(1);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!formRef.current || isSubmitting) return;

      setIsSubmitting(true);

      try {
         await emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            formRef.current,
            { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY },
         );
         alert("Thank you! We will get back to you soon.");
         onClose();
      } catch (error) {
         console.error("EmailJS submission error:", error);
         alert("Something went wrong. Please try again.");
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <div
         className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/55 px-4 py-5 backdrop-blur-[3px]"
         onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
         }}
      >
         <div
            style={{ maxHeight: "90vh" }}
            className="relative flex min-h-0 w-full max-w-[520px] flex-col overflow-hidden rounded-[26px] bg-[#E6D8C7] text-[#3A3A3A] shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
            onClick={(e) => e.stopPropagation()}
         >
            <button
               type="button"
               onClick={onClose}
               aria-label="Close estimate form"
               className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-[#E6D8C7] transition hover:bg-black hover:text-white"
            >
               <X className="h-4 w-4" />
            </button>

            <div className="shrink-0 px-7 pb-7 pt-8 sm:px-10 sm:pb-9 sm:pt-10">
               <div className="pr-12">
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#BC4424]">
                     Get a free estimate
                  </p>
                  <h2 className="font-[family-name:var(--font-display)] text-[36px] uppercase leading-[0.95] tracking-tight sm:text-[44px]">
                     {step === 1 ? (
                        <>
                           Let's start
                           <br />
                           with you.
                        </>
                     ) : (
                        <>
                           Tell us about
                           <br />
                           your project.
                        </>
                     )}
                  </h2>
               </div>

               <div className="mt-8">
                  <div className="mb-2 flex items-center justify-between">
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                        0{step}
                     </span>
                     <span className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                        02
                     </span>
                  </div>
                  <div className="h-[2px] w-full bg-black/10">
                     <div
                        className="h-full bg-[#BC4424] transition-all duration-500"
                        style={{ width: step === 1 ? "50%" : "100%" }}
                     />
                  </div>
               </div>
            </div>

            <form
               ref={formRef}
               data-lenis-prevent
               onSubmit={handleSubmit}
               className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-7 pb-8 pt-7 sm:px-10 sm:pb-10"
            >
               {/* Hidden inputs so EmailJS sendForm picks up pill selections
                   and step-1 fields even while step 2 is the visible DOM —
                   step 1's fields stay mounted (just visually hidden isn't
                   used here; see note below) */}
               <input type="hidden" name="home_size" value={form.size} />
               <input type="hidden" name="property_type" value={form.type} />
               <input type="hidden" name="budget" value={form.budget} />

               {/* Step 1 fields are kept in the DOM (hidden) once you move to
                   step 2, so sendForm still picks up phone/email — otherwise
                   unmounting step 1 would drop those values from the email. */}
               <div className={step === 1 ? "space-y-6" : "hidden"}>
                  <Input
                     label="Phone / WhatsApp"
                     name="mobile"
                     type="tel"
                     placeholder="+91 98765 43210"
                     value={form.phone}
                     onChange={(value) => updateField("phone", value)}
                     required
                  />
                  <Input
                     label="Email"
                     name="email"
                     type="email"
                     placeholder="you@example.com"
                     value={form.email}
                     onChange={(value) => updateField("email", value)}
                     required
                  />
                  {step === 1 && (
                     <button
                        type="button"
                        onClick={nextStep}
                        disabled={!form.phone || !form.email}
                        className="group mt-2 flex w-full items-center justify-between rounded-xl bg-[#BC4424] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#A63B1F] disabled:cursor-not-allowed disabled:opacity-40"
                     >
                        <span>Continue</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                     </button>
                  )}
               </div>

               {step === 2 && (
                  <div className="space-y-7">
                     <Input
                        label="Full Name"
                        name="full_name"
                        placeholder="Your full name"
                        value={form.fullName}
                        onChange={(value) => updateField("fullName", value)}
                        required
                     />
                     <Input
                        label="City"
                        name="city"
                        placeholder="Your city"
                        value={form.city}
                        onChange={(value) => updateField("city", value)}
                        required
                     />
                     <Input
                        label="Possession Date"
                        name="possession_date"
                        type="date"
                        value={form.possessionDate}
                        onChange={(value) =>
                           updateField("possessionDate", value)
                        }
                        required
                     />
                     <PillGroup
                        label="Size"
                        value={form.size}
                        onChange={(value) => updateField("size", value)}
                        options={["2 BHK", "3 BHK", "4 BHK or more"]}
                     />
                     <PillGroup
                        label="Type"
                        value={form.type}
                        onChange={(value) => updateField("type", value)}
                        options={["Independent / Villa", "Apartment"]}
                     />
                     <PillGroup
                        label="Tentative Budget"
                        value={form.budget}
                        onChange={(value) => updateField("budget", value)}
                        options={[
                           "₹3 to ₹5 Lakhs",
                           "₹5 to ₹8 Lakhs",
                           "₹8 to ₹12 Lakhs",
                           "₹12 to ₹15 Lakhs",
                        ]}
                     />
                     <div className="flex gap-3 pt-1">
                        <button
                           type="button"
                           onClick={previousStep}
                           className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-black/15 transition hover:bg-black/5"
                        >
                           <ArrowLeft className="h-4 w-4" />
                        </button>
                        <button
                           type="submit"
                           disabled={isSubmitting}
                           className="flex h-14 flex-1 items-center justify-center rounded-xl bg-black px-5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#BC4424] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                           {isSubmitting
                              ? "Submitting..."
                              : "Submit Quote Request"}
                        </button>
                     </div>
                  </div>
               )}
            </form>
         </div>
      </div>
   );
}

function Input({
   label,
   name,
   type = "text",
   placeholder,
   value,
   onChange,
   required = false,
}) {
   return (
      <label className="block">
         <span className="mb-2.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">
            {label}
         </span>
         <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            required={required}
            onChange={(e) => onChange(e.target.value)}
            className="h-14 w-full rounded-xl border border-black/15 bg-white/55 px-4 text-[15px] text-[#3A3A3A] outline-none transition placeholder:text-black/25 focus:border-[#BC4424] focus:bg-white/80"
         />
      </label>
   );
}
