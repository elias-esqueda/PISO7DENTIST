import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandMarquee } from "@/components/BrandMarquee";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Doctors } from "@/components/Doctors";
import { Ambience } from "@/components/Ambience";
import { Values } from "@/components/Values";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BrandMarquee />
        <About />
        <Services />
        <Doctors />
        <Ambience />
        <Values />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
