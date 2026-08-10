"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

const INITIAL_FORM_DATA = {
   fullName: "",
   email: "",
   mobile: "",
   city: "",
   possessionDate: "",
   size: "2 BHK",
   type: "Apartment",
   budget: "₹3 to ₹5 Lakhs",
};

export default function ContactPage() {
   const router = useRouter();
   const formRef = useRef(null);

   const [formData, setFormData] = useState(INITIAL_FORM_DATA);
   const [isSubmitting, setIsSubmitting] = useState(false);

   const updateField = (field, value) => {
      setFormData((current) => ({
         ...current,
         [field]: value,
      }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!formRef.current) return;

      setIsSubmitting(true);

      try {
         await emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            formRef.current,
            {
               publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
            },
         );

         alert(
            "Thank you! Your enquiry has been submitted successfully. We will get back to you soon.",
         );

         setFormData(INITIAL_FORM_DATA);

         router.push("/");
      } catch (error) {
         console.error("EmailJS submission error:", error);

         alert(
            "Something went wrong while submitting your enquiry. Please try again.",
         );
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <main
         className="relative min-h-screen overflow-hidden px-4 pb-16 pt-28 sm:px-6"
         style={{
            backgroundImage: "url('/gallery/optimized/bedrooms/03.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
         }}
      >
         {/* Background overlay */}
         <div className="absolute inset-0 bg-[#E6D8C7]/40" />

         <div className="relative z-10 flex min-h-[calc(100vh-7rem)] items-center justify-center">
            <div className="w-full max-w-3xl rounded-2xl border border-white/50 bg-[#E6D8C7]/95 p-6 text-black shadow-2xl backdrop-blur-sm sm:p-10">
               {/* Header */}
               <div className="mb-8 text-center">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-black/50">
                     This is what we define
                  </span>

                  <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl uppercase leading-[0.95] sm:text-5xl">
                     Ready to turn your dream home
                     <br />
                     into a reality?
                  </h1>

                  <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-black/60">
                     Let us help bring your dream home to life with precision,
                     passion, and unparalleled expertise.
                  </p>
               </div>

               {/* Form */}
               <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-4"
               >
                  {/* Hidden values for EmailJS */}
                  <input type="hidden" name="home_size" value={formData.size} />

                  <input
                     type="hidden"
                     name="property_type"
                     value={formData.type}
                  />

                  <input type="hidden" name="budget" value={formData.budget} />

                  {/* Name */}
                  <div>
                     <input
                        type="text"
                        name="full_name"
                        placeholder="Full Name*"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                           updateField("fullName", e.target.value)
                        }
                        className="w-full rounded-xl border border-black/15 bg-white/40 px-4 py-3 text-sm placeholder:text-black/50 focus:border-black/40 focus:outline-none focus:ring-0"
                     />
                  </div>

                  {/* Email + Mobile */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                     <input
                        type="email"
                        name="email"
                        placeholder="Email Address*"
                        required
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="w-full rounded-xl border border-black/15 bg-white/40 px-4 py-3 text-sm placeholder:text-black/50 focus:border-black/40 focus:outline-none focus:ring-0"
                     />

                     <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile Number*"
                        required
                        inputMode="tel"
                        value={formData.mobile}
                        onChange={(e) => updateField("mobile", e.target.value)}
                        className="w-full rounded-xl border border-black/15 bg-white/40 px-4 py-3 text-sm placeholder:text-black/50 focus:border-black/40 focus:outline-none focus:ring-0"
                     />
                  </div>

                  {/* City + Possession Date */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                     <input
                        type="text"
                        name="city"
                        placeholder="City*"
                        required
                        value={formData.city}
                        onChange={(e) => updateField("city", e.target.value)}
                        className="w-full rounded-xl border border-black/15 bg-white/40 px-4 py-3 text-sm placeholder:text-black/50 focus:border-black/40 focus:outline-none focus:ring-0"
                     />

                     <div className="relative">
                        <label
                           htmlFor="possessionDate"
                           className="pointer-events-none absolute left-4 top-1.5 z-10 text-[9px] uppercase tracking-[0.08em] text-black/45"
                        >
                           Possession Date
                        </label>

                        <input
                           id="possessionDate"
                           type="date"
                           name="possession_date"
                           required
                           value={formData.possessionDate}
                           onChange={(e) =>
                              updateField("possessionDate", e.target.value)
                           }
                           className="w-full rounded-xl border border-black/15 bg-white/40 px-4 pb-2 pt-6 text-sm text-black focus:border-black/40 focus:outline-none focus:ring-0"
                        />
                     </div>
                  </div>

                  {/* Home Details */}
                  <div className="pt-3">
                     <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/60">
                        Tell us about your home
                     </p>

                     {/* Home Size */}
                     <div className="mb-5">
                        <p className="mb-2 text-[10px] text-black/55">Size:</p>

                        <div className="flex flex-wrap gap-2">
                           {["2 BHK", "3 BHK", "4 BHK or more"].map(
                              (option) => {
                                 const selected = formData.size === option;

                                 return (
                                    <button
                                       key={option}
                                       type="button"
                                       onClick={() =>
                                          updateField("size", option)
                                       }
                                       className={`rounded-full px-4 py-2 text-[10px] uppercase tracking-wide transition ${
                                          selected
                                             ? "bg-black text-white"
                                             : "border border-black/15 bg-white/30 text-black/60 hover:bg-white/60"
                                       }`}
                                    >
                                       {option}
                                    </button>
                                 );
                              },
                           )}
                        </div>
                     </div>

                     {/* Property Type */}
                     <div className="mb-5">
                        <p className="mb-2 text-[10px] text-black/55">Type:</p>

                        <div className="flex flex-wrap gap-2">
                           {["Independent / Villa", "Apartment"].map(
                              (option) => {
                                 const selected = formData.type === option;

                                 return (
                                    <button
                                       key={option}
                                       type="button"
                                       onClick={() =>
                                          updateField("type", option)
                                       }
                                       className={`rounded-full px-4 py-2 text-[10px] uppercase tracking-wide transition ${
                                          selected
                                             ? "bg-black text-white"
                                             : "border border-black/15 bg-white/30 text-black/60 hover:bg-white/60"
                                       }`}
                                    >
                                       {option}
                                    </button>
                                 );
                              },
                           )}
                        </div>
                     </div>

                     {/* Budget */}
                     <div>
                        <p className="mb-2 text-[10px] text-black/55">
                           Tentative Budget:
                        </p>

                        <div className="flex flex-wrap gap-2">
                           {[
                              "₹3 to ₹5 Lakhs",
                              "₹5 to ₹8 Lakhs",
                              "₹8 to ₹12 Lakhs",
                              "₹12 to ₹15 Lakhs",
                           ].map((option) => {
                              const selected = formData.budget === option;

                              return (
                                 <button
                                    key={option}
                                    type="button"
                                    onClick={() =>
                                       updateField("budget", option)
                                    }
                                    className={`rounded-full px-4 py-2 text-[10px] uppercase tracking-wide transition ${
                                       selected
                                          ? "bg-black text-white"
                                          : "border border-black/15 bg-white/30 text-black/60 hover:bg-white/60"
                                    }`}
                                 >
                                    {option}
                                 </button>
                              );
                           })}
                        </div>
                     </div>
                  </div>

                  {/* Submit */}
                  <button
                     type="submit"
                     disabled={isSubmitting}
                     className="mt-4 flex w-full items-center justify-center rounded-xl bg-black px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#BC4424] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                     {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                  </button>
               </form>
            </div>
         </div>
      </main>
   );
}
