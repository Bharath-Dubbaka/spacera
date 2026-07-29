// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function ContactPage() {
//    const router = useRouter();
//    const [formData, setFormData] = useState({
//       fullName: "",
//       email: "",
//       mobile: "",
//       city: "",
//       size: "2 BHK",
//       type: "Apartment",
//       budget: "₹12 to ₹15 Lakhs",
//       message: "",
//    });

//    const handleSubmit = (e) => {
//       e.preventDefault();
//       console.log("Submitted Form Data:", formData);
//       alert("Thank you! We will get back to you soon.");
//       router.push("/");
//    };

//    return (
//       <main className="min-h-screen bg-[#E6D8C7] pt-28 pb-16 px-4 flex items-center justify-center">
//          <div className="w-full max-w-3xl mx-auto p-6 sm:p-10 bg-[#1C1C1A] text-black border border-[#1C1C1A]/10 rounded-2xl shadow-2xl">
//             {/* Title Header */}
//             <div className="text-center mb-8">
//                <p className="text-[10px] sm:text-xs font-mono tracking-widest text-[#E6D8C7]/60 uppercase mb-2">
//                   This is what we define
//                </p>
//                <h1 className="text-2xl sm:text-4xl font-serif tracking-tight font-normal text-[#E6D8C7] mb-3 leading-tight uppercase">
//                   Ready to turn your dream home into a reality?
//                </h1>
//                <p className="text-xs sm:text-sm text-[#E6D8C7]/70 font-light max-w-xl mx-auto">
//                   Let us help bring your dreams to life with precision, passion,
//                   and unparalleled expertise.
//                </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//                {/* Full Name */}
//                <div>
//                   <input
//                      type="text"
//                      required
//                      placeholder="Full Name*"
//                      value={formData.fullName}
//                      onChange={(e) =>
//                         setFormData({ ...formData, fullName: e.target.value })
//                      }
//                      className="w-full px-4 py-3 bg-transparent border border-[#E6D8C7]/20 rounded-xl text-sm text-[#E6D8C7] placeholder-[#E6D8C7]/40 focus:outline-none focus:border-[#E6D8C7] transition-colors"
//                   />
//                </div>

//                {/* Email & Mobile Number Row */}
//                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <input
//                      type="email"
//                      required
//                      placeholder="Email Address*"
//                      value={formData.email}
//                      onChange={(e) =>
//                         setFormData({ ...formData, email: e.target.value })
//                      }
//                      className="w-full px-4 py-3 bg-transparent border border-[#E6D8C7]/20 rounded-xl text-sm text-[#E6D8C7] placeholder-[#E6D8C7]/40 focus:outline-none focus:border-[#E6D8C7] transition-colors"
//                   />
//                   <input
//                      type="tel"
//                      required
//                      placeholder="Mobile Number*"
//                      value={formData.mobile}
//                      onChange={(e) =>
//                         setFormData({ ...formData, mobile: e.target.value })
//                      }
//                      className="w-full px-4 py-3 bg-transparent border border-[#E6D8C7]/20 rounded-xl text-sm text-[#E6D8C7] placeholder-[#E6D8C7]/40 focus:outline-none focus:border-[#E6D8C7] transition-colors"
//                   />
//                </div>

//                {/* City */}
//                <div>
//                   <input
//                      type="text"
//                      required
//                      placeholder="City*"
//                      value={formData.city}
//                      onChange={(e) =>
//                         setFormData({ ...formData, city: e.target.value })
//                      }
//                      className="w-full px-4 py-3 bg-transparent border border-[#E6D8C7]/20 rounded-xl text-sm text-[#E6D8C7] placeholder-[#E6D8C7]/40 focus:outline-none focus:border-[#E6D8C7] transition-colors"
//                   />
//                </div>

//                {/* Dynamic Selection Pills Section */}
//                <div className="pt-2">
//                   <p className="text-[11px] font-semibold uppercase tracking-wider text-[#E6D8C7]/50 mb-3">
//                      Tell us about your home
//                   </p>

//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
//                      {/* Size Selector */}
//                      <div>
//                         <p className="text-xs text-[#E6D8C7]/80 mb-2 font-medium">
//                            Size:
//                         </p>
//                         <div className="flex flex-wrap gap-2">
//                            {["2 BHK", "3 BHK", "4 BHK or more"].map((item) => (
//                               <button
//                                  key={item}
//                                  type="button"
//                                  onClick={() =>
//                                     setFormData({ ...formData, size: item })
//                                  }
//                                  className={`px-4 py-2 text-xs rounded-full border transition-all ${
//                                     formData.size === item
//                                        ? "border-[#E6D8C7] bg-[#E6D8C7] text-[#1C1C1A] font-bold"
//                                        : "border-[#E6D8C7]/20 text-[#E6D8C7]/70 hover:border-[#E6D8C7]/50"
//                                  }`}
//                               >
//                                  o {item}
//                               </button>
//                            ))}
//                         </div>
//                      </div>

//                      {/* Type Selector */}
//                      <div>
//                         <p className="text-xs text-[#E6D8C7]/80 mb-2 font-medium">
//                            Type:
//                         </p>
//                         <div className="flex flex-wrap gap-2">
//                            {["Independent / Villa", "Apartment"].map((item) => (
//                               <button
//                                  key={item}
//                                  type="button"
//                                  onClick={() =>
//                                     setFormData({ ...formData, type: item })
//                                  }
//                                  className={`px-4 py-2 text-xs rounded-full border transition-all ${
//                                     formData.type === item
//                                        ? "border-[#E6D8C7] bg-[#E6D8C7] text-[#1C1C1A] font-bold"
//                                        : "border-[#E6D8C7]/20 text-[#E6D8C7]/70 hover:border-[#E6D8C7]/50"
//                                  }`}
//                               >
//                                  o {item}
//                               </button>
//                            ))}
//                         </div>
//                      </div>
//                   </div>

//                   {/* Tentative Budget Selector */}
//                   <div className="mb-4">
//                      <p className="text-xs text-[#E6D8C7]/80 mb-2 font-medium">
//                         Tentative Budget:
//                      </p>
//                      <div className="flex flex-wrap gap-2">
//                         {[
//                            "₹12 to ₹15 Lakhs",
//                            "₹16 - ₹20 Lakhs",
//                            "₹21 - ₹30 Lakhs",
//                            "₹31 L - 1 Cr+",
//                         ].map((item) => (
//                            <button
//                               key={item}
//                               type="button"
//                               onClick={() =>
//                                  setFormData({ ...formData, budget: item })
//                               }
//                               className={`px-4 py-2 text-xs rounded-full border transition-all ${
//                                  formData.budget === item
//                                     ? "border-[#E6D8C7] bg-[#E6D8C7] text-[#1C1C1A] font-bold"
//                                     : "border-[#E6D8C7]/20 text-[#E6D8C7]/70 hover:border-[#E6D8C7]/50"
//                               }`}
//                            >
//                               o {item}
//                            </button>
//                         ))}
//                      </div>
//                   </div>
//                </div>

//                {/* Message */}
//                <div>
//                   <textarea
//                      rows="3"
//                      placeholder="Message*"
//                      value={formData.message}
//                      onChange={(e) =>
//                         setFormData({ ...formData, message: e.target.value })
//                      }
//                      className="w-full px-4 py-3 bg-transparent border border-[#E6D8C7]/20 rounded-xl text-sm text-[#E6D8C7] placeholder-[#E6D8C7]/40 focus:outline-none focus:border-[#E6D8C7] transition-colors resize-none"
//                   ></textarea>
//                </div>

//                {/* Submit Button */}
//                <button
//                   type="submit"
//                   className="w-full py-3.5 bg-[#E6D8C7] text-[#1C1C1A] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-lg cursor-pointer"
//                >
//                   Submit Quote Request
//                </button>
//             </form>
//          </div>
//       </main>
//    );
// }

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
   const router = useRouter();
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
      alert("Thank you! We will get back to you soon.");
      router.push("/");
   };

   return (
      <main className="min-h-screen bg-[#E6D8C7] pt-28 pb-16 px-4 flex items-center justify-center">
         <div className="w-full max-w-3xl mx-auto p-6 sm:p-10 bg-[#E6D8C7] text-black border border-black/10 rounded-2xl shadow-xl">
            {/* Title Header */}
            <div className="text-center mb-8">
               <p className="text-[10px] sm:text-xs font-mono tracking-widest text-black/60 uppercase mb-2">
                  This is what we define
               </p>
               <h1 className="text-2xl sm:text-4xl font-serif tracking-tight font-normal text-black mb-3 leading-tight uppercase">
                  Ready to turn your dream home into a reality?
               </h1>
               <p className="text-xs sm:text-sm text-black/70 font-light max-w-xl mx-auto">
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
                     className="w-full px-4 py-3 bg-white/40 border border-black/20 rounded-xl text-sm text-black placeholder-black/50 focus:outline-none focus:border-black transition-colors"
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
                     className="w-full px-4 py-3 bg-white/40 border border-black/20 rounded-xl text-sm text-black placeholder-black/50 focus:outline-none focus:border-black transition-colors"
                  />
                  <input
                     type="tel"
                     required
                     placeholder="Mobile Number*"
                     value={formData.mobile}
                     onChange={(e) =>
                        setFormData({ ...formData, mobile: e.target.value })
                     }
                     className="w-full px-4 py-3 bg-white/40 border border-black/20 rounded-xl text-sm text-black placeholder-black/50 focus:outline-none focus:border-black transition-colors"
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
                     className="w-full px-4 py-3 bg-white/40 border border-black/20 rounded-xl text-sm text-black placeholder-black/50 focus:outline-none focus:border-black transition-colors"
                  />
               </div>

               {/* Dynamic Selection Pills Section */}
               <div className="pt-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-black/60 mb-3">
                     Tell us about your home
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
                     {/* Size Selector */}
                     <div>
                        <p className="text-xs text-black/80 mb-2 font-medium">
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
                                       ? "border-black bg-black text-[#E6D8C7] font-bold"
                                       : "border-black/20 text-black/80 hover:border-black/50 bg-white/20"
                                 }`}
                              >
                                 {item}
                              </button>
                           ))}
                        </div>
                     </div>

                     {/* Type Selector */}
                     <div>
                        <p className="text-xs text-black/80 mb-2 font-medium">
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
                                       ? "border-black bg-black text-[#E6D8C7] font-bold"
                                       : "border-black/20 text-black/80 hover:border-black/50 bg-white/20"
                                 }`}
                              >
                                 {item}
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Tentative Budget Selector */}
                  <div className="mb-4">
                     <p className="text-xs text-black/80 mb-2 font-medium">
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
                                    ? "border-black bg-black text-[#E6D8C7] font-bold"
                                    : "border-black/20 text-black/80 hover:border-black/50 bg-white/20"
                              }`}
                           >
                              {item}
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
                     className="w-full px-4 py-3 bg-white/40 border border-black/20 rounded-xl text-sm text-black placeholder-black/50 focus:outline-none focus:border-black transition-colors resize-none"
                  ></textarea>
               </div>

               {/* Submit Button */}
               <button
                  type="submit"
                  className="w-full py-3.5 bg-black text-[#E6D8C7] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-neutral-800 transition-all shadow-md cursor-pointer"
               >
                  Submit Quote Request
               </button>
            </form>
         </div>
      </main>
   );
}
