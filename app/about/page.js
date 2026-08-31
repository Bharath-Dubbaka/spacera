import AboutUs from "@/components/Aboutus";

export const metadata = {
   title: "About Us",
   description:
      "Learn about Spacera Studios and our founders—bridging creative vision and meticulous interior execution.",
   alternates: {
      canonical: "/about",
   },
};
export default function About() {
   return (
      <main className="bg-[#E6D8C7]">
         <AboutUs />
      </main>
   );
}
