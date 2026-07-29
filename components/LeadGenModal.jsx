"use client";
import { useState } from "react";

export default function LeadGenModal({ isOpen, onClose }) {
   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      mobile: "",
      city: "",
      size: "2 BHK",
      type: "Apartment",
      budget: "₹12 to ₹15 Lakhs",
      message: "",
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted Form Data:", formData);
      // Add your submit handler or API endpoint here
      alert("Thank you! We will get back to you soon.");
      if (onClose) onClose();
   };

   const formContent = (
      <div className="w-full max-w-3xl mx-auto p-6 sm:p-10 bg-[#0d0d0f] text-white border border-white/10 rounded-2xl shadow-2xl">
         {/* Title Header */}
         <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#f2e2be] mb-3 leading-tight">
               Ready to turn your dream home into a reality?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xl mx-auto">
               Let us help bring your dreams to life with precision, passion,
               and unparalleled expertise.
            </p>
         </div>

         <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
               <input
                  type="text"
                  required
                  placeholder="Full Name*"
                  value={formData.fullName}
                  onChange={(e) =>
                     setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-xl text-sm focus:outline-none focus:border-[#f2e2be] transition-colors"
               />
            </div>

            {/* Email & Mobile Number Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <input
                  type="email"
                  required
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={(e) =>
                     setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-xl text-sm focus:outline-none focus:border-[#f2e2be] transition-colors"
               />
               <input
                  type="tel"
                  required
                  placeholder="Mobile Number*"
                  value={formData.mobile}
                  onChange={(e) =>
                     setFormData({ ...formData, mobile: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-xl text-sm focus:outline-none focus:border-[#f2e2be] transition-colors"
               />
            </div>

            {/* City */}
            <div>
               <input
                  type="text"
                  required
                  placeholder="City*"
                  value={formData.city}
                  onChange={(e) =>
                     setFormData({ ...formData, city: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-xl text-sm focus:outline-none focus:border-[#f2e2be] transition-colors"
               />
            </div>

            {/* Dynamic Selection Pills Section */}
            <div className="pt-2">
               <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  Tell us about your home
               </p>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
                  {/* Size Selector */}
                  <div>
                     <p className="text-xs text-gray-300 mb-2 font-medium">
                        Size:
                     </p>
                     <div className="flex flex-wrap gap-2">
                        {["2 BHK", "3 BHK", "4 BHK or more"].map((item) => (
                           <button
                              key={item}
                              type="button"
                              onClick={() =>
                                 setFormData({ ...formData, size: item })
                              }
                              className={`px-4 py-2 text-xs rounded-full border transition-all ${
                                 formData.size === item
                                    ? "border-[#f2e2be] bg-[#f2e2be]/10 text-[#f2e2be] font-bold"
                                    : "border-white/20 text-gray-300 hover:border-white/50"
                              }`}
                           >
                              o {item}
                           </button>
                        ))}
                     </div>
                  </div>

                  {/* Type Selector */}
                  <div>
                     <p className="text-xs text-gray-300 mb-2 font-medium">
                        Type:
                     </p>
                     <div className="flex flex-wrap gap-2">
                        {["Independent / Villa", "Apartment"].map((item) => (
                           <button
                              key={item}
                              type="button"
                              onClick={() =>
                                 setFormData({ ...formData, type: item })
                              }
                              className={`px-4 py-2 text-xs rounded-full border transition-all ${
                                 formData.type === item
                                    ? "border-[#f2e2be] bg-[#f2e2be]/10 text-[#f2e2be] font-bold"
                                    : "border-white/20 text-gray-300 hover:border-white/50"
                              }`}
                           >
                              o {item}
                           </button>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Tentative Budget Selector */}
               <div className="mb-4">
                  <p className="text-xs text-gray-300 mb-2 font-medium">
                     Tentative Budget:
                  </p>
                  <div className="flex flex-wrap gap-2">
                     {[
                        "₹12 to ₹15 Lakhs",
                        "₹16 - ₹20 Lakhs",
                        "₹21 - ₹30 Lakhs",
                        "₹31 L - 1 Cr+",
                     ].map((item) => (
                        <button
                           key={item}
                           type="button"
                           onClick={() =>
                              setFormData({ ...formData, budget: item })
                           }
                           className={`px-4 py-2 text-xs rounded-full border transition-all ${
                              formData.budget === item
                                 ? "border-[#f2e2be] bg-[#f2e2be]/10 text-[#f2e2be] font-bold"
                                 : "border-white/20 text-gray-300 hover:border-white/50"
                           }`}
                        >
                           o {item}
                        </button>
                     ))}
                  </div>
               </div>
            </div>

            {/* Message */}
            <div>
               <textarea
                  rows="3"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={(e) =>
                     setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-xl text-sm focus:outline-none focus:border-[#f2e2be] transition-colors resize-none"
               ></textarea>
            </div>

            {/* Submit Button */}
            <button
               type="submit"
               className="w-full py-3.5 bg-[#f2e2be] text-black font-semibold text-sm rounded-xl hover:bg-white transition-all shadow-lg"
            >
               Submit Quote Request
            </button>
         </form>
      </div>
   );

   // If used as popup modal on click of "Get Quote" header button
   // Replace the bottom return condition in LeadGenModal.jsx
   if (isOpen) {
      return (
         <div
            onClick={onClose} // 1. Outer backdrop handles click outside
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto cursor-pointer"
         >
            <div
               onClick={(e) => e.stopPropagation()} // 2. Prevents modal interior clicks from triggering close
               className="relative w-full max-w-3xl my-8 cursor-default"
            >
               <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl z-10 p-2"
               >
                  ✕
               </button>
               {formContent}
            </div>
         </div>
      );
   }

   // Standalone embed on Contact Page
   return formContent;
}
