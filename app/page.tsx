import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import Marquee from "@/components/ui/marquee";
import Services from "@/components/ui/services";
import CaseStudies from "@/components/ui/casestudies";
import Process from "@/components/ui/process";
import Proof from "@/components/ui/proof";
import Testimonials from "@/components/ui/testimonials";
import Contact from "@/components/ui/contact";

export default function Home() {
  return (
    <main className="bg-[#0d1117] min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <CaseStudies />
      <Process />
      <Proof />
      <Testimonials />
      <Contact />
    </main>
  );
}
