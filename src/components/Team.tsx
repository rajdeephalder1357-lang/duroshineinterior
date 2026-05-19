import { motion } from "motion/react";

export function Team() {
  return (
    <section className="py-24 bg-primary text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-16 leading-[1.1] italic font-light">Our Partners</h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-32 md:max-w-40 lg:max-w-48 mx-auto w-full"
          >
             <div className="absolute -inset-4 border border-gold/30 rounded-xl transform rotate-2 transition-transform duration-500 hover:rotate-0"></div>
             <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group">
                <img 
                  src="/Partners_picture/Partners_picture.jpeg" 
                  alt="Our Partners" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
             </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif text-gold font-light mb-6 hidden md:block">Leading with Vision & Elegance</h3>
            <p className="text-white/80 font-light text-lg leading-relaxed">
              Driven by a passion for sophisticated design, our team is committed to transforming ordinary spaces into extraordinary environments. We blend innovative ideas with meticulous craftsmanship to ensure flawless execution in every project.
            </p>
            <p className="text-white/80 font-light text-lg leading-relaxed">
              Our approach goes beyond mere aesthetics; we focus on crafting immersive spatial experiences that harmonize seamlessly with your lifestyle. We hold the conviction that genuine luxury is found in purposeful design and remarkable attention to detail.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
