import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ProjectCategories } from "@/components/ProjectCategories";
import { Portfolio } from "@/components/Portfolio";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ClientsAndBrands } from "@/components/ClientsAndBrands";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export function Home() {
  return (
    <div className="font-sans text-primary selection:bg-gold selection:text-white pb-0">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ProjectCategories />
        <Portfolio />
        <BeforeAfter />
        <ClientsAndBrands />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
