"use client";

function DimensionLine({ label }) {
   return (
      <div className="flex items-center gap-2 mb-4">
         <span className="h-2 w-px bg-[#2C4A52]/50" />
         <div className="flex-1 h-px bg-[#2C4A52]/30" />
         <span className="px-2 text-[9px] font-mono uppercase tracking-[0.2em] text-[#2C4A52]/70 whitespace-nowrap">
            {label}
         </span>
         <div className="flex-1 h-px bg-[#2C4A52]/30" />
         <span className="h-2 w-px bg-[#2C4A52]/50" />
      </div>
   );
}

function CornerBracket({ position }) {
   const base = "absolute h-6 w-6 border-[#BC4424]";
   const map = {
      "top-left": "top-0 left-0 border-t-2 border-l-2",
      "top-right": "top-0 right-0 border-t-2 border-r-2",
      "bottom-left": "bottom-0 left-0 border-b-2 border-l-2",
      "bottom-right": "bottom-0 right-0 border-b-2 border-r-2",
   };
   return <span className={`${base} ${map[position]}`} />;
}

const FOUNDERS = [
   {
      tag: "01",
      name: "Vinay",
      role: "Business & Spatial Design",
      credentials: ["B.A. Business Administration", "Interior Design"],
      bio: "A dual background in business administration and design. His command of project management, client engagement, and spatial design lets him bridge ideation and execution with precision and intent.",
   },
   {
      tag: "02",
      name: "Vaishnavi",
      role: "Design & Materials",
      credentials: ["Diploma, Interior Design", "Bachelor of Design"],
      bio: "Deep design rigor across two qualifications. Guided by an understanding of space planning, material selection, and aesthetic balance, she crafts environments that are timeless, functional, and resonant.",
   },
];

export default function AboutUs() {
   return (
      <section
         className="relative w-full bg-[#F3ECDE] py-20 sm:py-28"
         style={{
            backgroundSize: "48px 48px",
            backgroundPosition: "center",
         }}
      >
         {/* faint grid overlay tint so the paper reads as texture, not a chart */}
         <div className="absolute inset-0 bg-[#E6D8C7]/95" />

         <div className="relative mx-auto max-w-[1100px] px-6 sm:px-10">
            {/* Eyebrow + heading */}
            <div className="mb-16 flex items-end justify-between gap-6 flex-wrap">
               <div>
                  <p className="mb-4 flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#BC4424]">
                     <span className="h-1.5 w-1.5 rounded-full bg-[#BC4424]" />
                     Fig. 01 — Studio
                  </p>
                  <h2 className="font-[family-name:var(--font-display)] text-[42px] sm:text-[64px] uppercase leading-[0.92] tracking-tight text-[#221E19]">
                     Two disciplines.
                     <br />
                     One studio.
                  </h2>
               </div>

               <p className="max-w-[260px] text-[11px] font-mono uppercase tracking-[0.15em] text-[#2C4A52]/70 leading-relaxed">
                  Spacera Design Studio
                  <br />
                  Hyderabad, India
                  <br />
                  Est. by two designers
               </p>
            </div>

            {/* Framed lead paragraph — blueprint corner brackets */}
            <div className="relative mb-20 px-8 py-10 sm:px-14 sm:py-14">
               <CornerBracket position="top-left" />
               <CornerBracket position="top-right" />
               <CornerBracket position="bottom-left" />
               <CornerBracket position="bottom-right" />

               <p className="mx-auto max-w-[740px] text-center font-[family-name:var(--font-display)] text-[22px] sm:text-[28px] leading-[1.35] tracking-tight text-[#221E19]">
                  Spacera was founded on the conviction that exceptional
                  interiors emerge at the intersection of{" "}
                  <span className="text-[#BC4424]">creative vision</span> and{" "}
                  <span className="text-[#BC4424]">meticulous execution</span> —
                  a balanced perspective where aesthetics, functionality, and
                  practical utility coexist seamlessly.
               </p>
            </div>

            {/* Founders — spec-sheet index cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mb-20">
               {FOUNDERS.map((founder) => (
                  <div key={founder.name} className="relative">
                     {/* rotated tab */}
                     <div
                        className="absolute -top-3 left-6 flex items-center gap-2 bg-[#2C4A52] px-3 py-1.5 shadow-md"
                        style={{ transform: "rotate(-1deg)" }}
                     >
                        <span className="font-mono text-[10px] text-white/60">
                           {founder.tag}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">
                           {founder.name}
                        </span>
                     </div>

                     <div className="border border-[#2C4A52]/25 bg-[#F9F5EC] px-6 pt-9 pb-7 sm:px-8 sm:pt-10 sm:pb-8 h-full">
                        <p className="mb-5 text-[10px] font-mono uppercase tracking-[0.2em] text-[#BC4424]">
                           {founder.role}
                        </p>

                        <DimensionLine label="Credentials" />

                        <ul className="mb-6 space-y-1.5">
                           {founder.credentials.map((c) => (
                              <li
                                 key={c}
                                 className="flex items-center gap-2 text-[13px] text-[#221E19]/80"
                              >
                                 <span className="font-mono text-[10px] text-[#2C4A52]/50">
                                    →
                                 </span>
                                 {c}
                              </li>
                           ))}
                        </ul>

                        <p className="text-[14px] leading-relaxed text-[#221E19]/70">
                           {founder.bio}
                        </p>
                     </div>
                  </div>
               ))}
            </div>

            {/* Alumni stamp — rotating architect's seal */}
            <div className="flex flex-col items-center mb-20">
               <div className="relative h-[150px] w-[150px] sm:h-[170px] sm:w-[170px]">
                  <svg
                     viewBox="0 0 200 200"
                     className="absolute inset-0 h-full w-full"
                     style={{
                        animation: "spacera-seal-spin 40s linear infinite",
                     }}
                  >
                     <defs>
                        <path
                           id="sealCircle"
                           d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
                           fill="none"
                        />
                     </defs>
                     <circle
                        cx="100"
                        cy="100"
                        r="78"
                        fill="none"
                        stroke="#2C4A52"
                        strokeOpacity="0.3"
                        strokeWidth="1"
                     />
                     <text fontSize="10.5" letterSpacing="3" fill="#2C4A52">
                        <textPath href="#sealCircle" startOffset="0%">
                           SCHOOL OF PLANNING &amp; ARCHITECTURE • JNAFAU
                           HYDERABAD •
                        </textPath>
                     </text>
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full border border-[#2C4A52]/25">
                     <span className="font-[family-name:var(--font-display)] text-[13px] uppercase tracking-wide text-[#221E19]">
                        Alumni
                     </span>
                     <span className="mt-1 text-[9px] font-mono uppercase tracking-[0.15em] text-[#2C4A52]/60">
                        Both Founders
                     </span>
                  </div>
               </div>

               <style>{`
                  @media (prefers-reduced-motion: reduce) {
                     svg[style] { animation: none !important; }
                  }
                  @keyframes spacera-seal-spin {
                     from { transform: rotate(0deg); }
                     to { transform: rotate(360deg); }
                  }
               `}</style>
            </div>

            {/* Closing manifesto line */}
            <div className="border-t border-[#2C4A52]/20 pt-10">
               <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                  {["Quality", "Creative depth", "Attention to detail"].map(
                     (word, i, arr) => (
                        <span key={word} className="flex items-center gap-6">
                           <span className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#221E19]">
                              {word}
                           </span>
                           {i < arr.length - 1 && (
                              <span className="h-1 w-1 rounded-full bg-[#BC4424]" />
                           )}
                        </span>
                     ),
                  )}
               </div>

               <p className="max-w-[680px] text-[15px] leading-relaxed text-[#221E19]/70">
                  Our strength lies in pairing design artistry with strategic
                  execution. Whether it's a residence, workplace, or commercial
                  space, we craft tailored environments that reflect
                  individuality and elevate daily living — turning our clients'
                  aspirations into lasting realities.
               </p>
            </div>
         </div>
      </section>
   );
}
