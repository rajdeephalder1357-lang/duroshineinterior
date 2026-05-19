import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/constants";

export function About({ id = "about", className = "" }: { id?: string; className?: string }) {
  return (
    <section id={id} className={`py-24 md:py-32 bg-white relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold uppercase tracking-widest font-bold text-xl md:text-2xl mb-4">About Us</p>
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 leading-[1.1] italic font-light">
            Crafting Premium Spaces Blend Safety, Functionality, Aesthetic
          </h2>
          <div className="space-y-6 text-taupe font-light text-[17px] leading-relaxed">
            <p>
              At Duroshine Interior, we create premium interior spaces with elegance, 
              precision, and functionality. Our team specializes in luxury commercial, 
              residential, office, retail, and hospitality interiors.
            </p>
            <p>
              We believe every space should be beautifully designed, professionally 
              executed, and timeless in appeal. From conceptualization to final execution, 
              our commitment to quality craftsmanship ensures the best results.
            </p>
          </div>
          
          <div className="mt-12 flex items-center gap-12">
            <div>
              <p className="text-4xl font-serif mb-2 italic text-left">15+</p>
              <p className="text-xs uppercase tracking-widest font-bold text-taupe/80">Years Experience</p>
            </div>
            <div className="w-px h-16 bg-taupe/20" />
            <div>
              <p className="text-4xl font-serif mb-2 italic text-left">45+</p>
              <p className="text-xs uppercase tracking-widest font-bold text-taupe/80">Projects Delivered</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-t-full overflow-hidden bg-cream p-4 border border-beige shadow-lg">
            <img 
              src={IMAGES.about} 
              alt="Designer working" 
              className="w-full h-full object-cover rounded-t-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
