import { motion } from "motion/react";
import { BRAND_CONFIG } from "@/lib/constants";
import { Team } from "./Team";

export function ClientsAndBrands() {
  return (
    <>
      <section id="clients" className="pt-24 md:pt-32 bg-cream border-t border-beige overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] font-bold text-xl md:text-2xl mb-4">Partners & Clientele</p>
          <h2 className="text-2xl md:text-3xl font-serif text-primary leading-[1.1] italic font-light">Trusted by the Best</h2>
        </div>
      </section>

      <Team />

      <section className="pb-24 md:pb-32 bg-cream overflow-hidden pt-12 md:pt-16">
        <div className="mb-12">
          <h3 className="text-center font-serif text-2xl text-taupe mb-8">Our Premium Clients</h3>
          <div className="flex flex-wrap justify-center gap-6 px-6 max-w-5xl mx-auto">
            {BRAND_CONFIG.clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white py-6 px-8 rounded-xl shadow-md border border-beige flex items-center justify-center min-w-[200px]"
              >
                <h4 className="font-serif text-primary text-xl text-center italic">{client}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay border-t border-b border-gold/30"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-gold uppercase tracking-[0.2em] font-bold text-sm md:text-base mb-3">Our Network</h3>
            <h2 className="text-3xl md:text-4xl font-serif text-white italic font-light">Premium Brand Tie-ups</h2>
            <div className="w-24 h-[1px] bg-gold mx-auto mt-6 opacity-50"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {BRAND_CONFIG.brands.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 hover:bg-gold/10 backdrop-blur-md transition-all duration-300 py-4 px-8 border border-gold/40 flex items-center justify-center min-w-[160px] group cursor-default shadow-lg shadow-black/20"
              >
                <span className="font-sans font-medium text-white group-hover:text-gold tracking-widest transition-colors uppercase text-sm">{brand}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-white border border-beige p-10 md:p-14 rounded-2xl shadow-xl flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-primary italic font-light mb-4 text-center">Company Profile & Brochure</h3>
            <p className="text-taupe max-w-lg mx-auto mb-8 text-center text-sm md:text-base">
              Discover our complete portfolio, design philosophy, and detailed process in our comprehensive company brochure.
            </p>
            <a
              href="https://drive.google.com/file/d/1w3CLf9AgWHxUikKQGYDq8hAWUdePx7e0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white hover:bg-gold transition-colors duration-300 px-8 py-4 uppercase tracking-[0.15em] text-xs font-bold w-auto mx-auto"
            >
              <span>View PDF Brochure</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
