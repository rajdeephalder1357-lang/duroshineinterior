import { motion } from "motion/react";
import { IMAGES, BRAND_CONFIG } from "@/lib/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { About } from "@/components/About";

const allSectorImages = [
  "/Senco_Jadavpur/senco_jadavpur.jpeg",
  "/Dhruva_LLP/Dhurva_interior_LLP1.jpeg",
  "/Brilliand_Minds/brilliant_mind5.jpeg",
  "/alpha_numero/alpha_numero.jpeg",
  "/guest_house/Gust_house (1).jpeg",
  "/Residential/residential1.jpeg"
];

function SlideshowBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allSectorImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {allSectorImages.map((src, idx) => (
        <img
          key={src}
          src={src}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          } scale-110`}
          alt="Sector"
        />
      ))}
      <div className="absolute inset-0 bg-primary opacity-70 group-hover:opacity-80 transition-opacity"></div>
    </>
  );
}

export function Hero() {
  return (
    <section id="home" className="min-h-screen bg-cream flex flex-col lg:flex-row overflow-hidden pt-20">
      {/* Left Column: Hero Text */}
      <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center relative">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-6 relative z-10"
        >
          {BRAND_CONFIG.name}
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-serif text-primary leading-[1.1] mb-6 relative z-10"
        >
          Designing Space <br/>
          <span className="block text-lg md:text-xl font-sans not-italic font-medium tracking-[0.1em] text-taupe uppercase mt-6">Interior, Architecture, Branding & Execution</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-taupe max-w-md mb-10 leading-relaxed font-light relative z-10"
        >
          {BRAND_CONFIG.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 relative z-10"
        >
          {/* Mobile View Projects (goes to Project Categories) */}
          <a
            href="#projects"
            className="block md:hidden px-8 py-4 bg-primary text-white uppercase tracking-[0.2em] text-xs font-semibold rounded-sm hover:bg-taupe transition-all text-center shadow-lg"
          >
            View Projects
          </a>
          {/* Desktop View Projects (goes to Portfolio) */}
          <a
            href="#portfolio"
            className="hidden md:block px-8 py-4 bg-primary text-white uppercase tracking-[0.2em] text-xs font-semibold rounded-sm hover:bg-taupe transition-all text-center shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-primary text-primary uppercase tracking-[0.2em] text-xs font-semibold rounded-sm hover:bg-primary hover:text-white transition-all text-center"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Mobile About (visible only on mobile, between Hero Text and Image Grid) */}
      <About id="about-mobile" className="block lg:hidden w-full order-none" />

      {/* Right Column: Featured Image & Categories Grid */}
      <div className="hidden lg:flex w-full lg:w-1/2 bg-warm-white p-8 flex-col gap-8 h-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex-1 rounded-2xl overflow-hidden shadow-2xl group border-4 border-white min-h-[400px]"
        >
          <img
            src="/front_page_retail_picture/front_page_retail_picture.jpeg"
            alt="Luxury Interior"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-125 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-40"></div>
          <div className="absolute top-6 left-6">
             <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white text-sm font-medium backdrop-blur-sm bg-white/20">01</div>
          </div>
          <div className="absolute bottom-8 left-8 text-white">
            <span className="text-gold uppercase tracking-widest text-xs font-bold">Featured Work</span>
            <h3 className="text-3xl font-serif mt-2">Retail Luxury Store, Kolkata</h3>
            <p className="text-sm text-gray-200 mt-1 italic">Senco Gold & Diamonds</p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="group cursor-pointer relative rounded-xl overflow-hidden bg-white shadow-md border border-beige h-40">
             <img src={IMAGES.categories.residential} alt="Residential" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-primary opacity-40 group-hover:opacity-60 transition-opacity"></div>
             <Link to="/portfolio/residential" className="relative z-10 p-4 flex flex-col h-full justify-between items-start">
               <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white text-xs font-medium backdrop-blur-sm bg-white/10">02</div>
               <span className="font-serif text-lg text-white group-hover:text-gold transition-colors drop-shadow-md">Residential</span>
             </Link>
          </div>
          <div className="group cursor-pointer relative rounded-xl overflow-hidden bg-white shadow-md border border-beige h-40">
             <img src={IMAGES.categories.office} alt="Office" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-primary opacity-40 group-hover:opacity-60 transition-opacity"></div>
             <Link to="/portfolio/office" className="relative z-10 p-4 flex flex-col h-full justify-between items-start">
               <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white text-xs font-medium backdrop-blur-sm bg-white/10">03</div>
               <span className="font-serif text-lg text-white group-hover:text-gold transition-colors drop-shadow-md">Office</span>
             </Link>
          </div>
          <div className="group cursor-pointer relative rounded-xl overflow-hidden bg-primary shadow-md h-40 col-span-2 md:col-span-1">
             <SlideshowBackground />
             <a href="#projects" className="relative z-10 p-4 flex flex-col h-full justify-between text-white items-start">
               <div className="w-8 h-8 rounded-full border border-gold bg-gold flex items-center justify-center text-primary font-bold text-lg">+</div>
               <span className="font-serif text-lg">All Sectors</span>
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
