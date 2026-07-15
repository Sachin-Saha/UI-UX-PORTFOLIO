import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Expertise from "@/components/Expertise";
import Process from "@/components/Process";
import Collaboration from "@/components/Collaboration";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tools />
        <Expertise />
        <Process />
        <Collaboration />
        <FeaturedCaseStudy />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
