import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import Hero from "@/components/HeroSection";
import Image from "next/image";
import { ImagesSliderDemo } from "@/components/imgSlider/ImagesSliderDemo";
import ServicesCarousel from "@/components/ServicesCarousel";
import ServicesScrollDriven from "@/components/ServicesScrollDriven";
import EndToEndSolutions from "@/components/EndToEndSolutions";
import EssentialPackage from "@/components/EssentialPackage";
import FAQ from "@/components/FAQ";

export default function Home() {
   return (
      <main className="bg-[#E6D8C7]">
         <ImagesSliderDemo />
         <HeroSection />
         {/* <AboutSection /> */}
         {/* <ServicesCarousel /> */}
         <ServicesScrollDriven />
         {/*         <ServiceSection /> */}
         {/* <HeroSection /> */}
         <EndToEndSolutions />
         <EssentialPackage />
         <FAQ />
      </main>
   );
}
