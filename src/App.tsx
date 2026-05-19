import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { SencoGallery } from "@/components/SencoGallery";
import { SencoDunlopGallery } from "@/components/SencoDunlopGallery";
import { SencoJadavpurGallery } from "@/components/SencoJadavpurGallery";
import { SencoTallygungeGallery } from "@/components/SencoTallygungeGallery";
import { ResidentialGallery } from "@/components/ResidentialGallery";
import { RajarhatGallery } from "@/components/RajarhatGallery";
import { GeneralResidentialGallery } from "@/components/GeneralResidentialGallery";
import { LawyersChamberGallery } from "@/components/LawyersChamberGallery";
import { SchoolGallery } from "@/components/SchoolGallery";
import { BrilliantMindsGallery } from "@/components/BrilliantMindsGallery";
import { OfficeGallery } from "@/components/OfficeGallery";
import { DhruvaLLPGallery } from "@/components/DhruvaLLPGallery";
import { AlphaNumeroGallery } from "@/components/AlphaNumeroGallery";
import { AutoCAD3DHubGallery } from "@/components/AutoCAD3DHubGallery";
import { AutoCadDrawingGallery } from "@/components/AutoCadDrawingGallery";
import { ThreeDRenderingGallery } from "@/components/ThreeDRenderingGallery";
import { GuestHouseGallery } from "@/components/GuestHouseGallery";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <div className="font-sans text-primary">
      <Navbar />
      <Hero />
      <div className="hidden lg:block">
        <About />
      </div>
      <Services />
      <ProjectCategories />
      <Portfolio />
      <BeforeAfter />
      <ClientsAndBrands />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio/senco" element={<SencoGallery />} />
        <Route path="/portfolio/senco-dunlop" element={<SencoDunlopGallery />} />
        <Route path="/portfolio/senco-tallygunge" element={<SencoTallygungeGallery />} />
        <Route path="/portfolio/senco-jadavpur" element={<SencoJadavpurGallery />} />
        <Route path="/portfolio/residential" element={<ResidentialGallery />} />
        <Route path="/portfolio/residential/rajarhat" element={<RajarhatGallery />} />
        <Route path="/portfolio/residential/general" element={<GeneralResidentialGallery />} />
        <Route path="/portfolio/guest-house" element={<GuestHouseGallery />} />
        <Route path="/portfolio/lawyers-chamber" element={<LawyersChamberGallery />} />
        <Route path="/portfolio/dhruva-llp" element={<DhruvaLLPGallery />} />
        <Route path="/portfolio/school" element={<SchoolGallery />} />
        <Route path="/portfolio/brilliant-minds" element={<BrilliantMindsGallery />} />
        <Route path="/portfolio/office" element={<OfficeGallery />} />
        <Route path="/portfolio/alpha-numero" element={<AlphaNumeroGallery />} />
        <Route path="/portfolio/autocad-3d" element={<AutoCAD3DHubGallery />} />
        <Route path="/portfolio/autocad-drawing" element={<AutoCadDrawingGallery />} />
        <Route path="/portfolio/3d-rendering" element={<ThreeDRenderingGallery />} />
      </Routes>
    </BrowserRouter>
  );
}
