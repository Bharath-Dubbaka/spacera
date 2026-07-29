import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import Hero from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
   return (
      <main className="bg-[#E6D8C7]">
         <HeroSection />
         <AboutSection />
         <ServiceSection />
      </main>
   );
}
