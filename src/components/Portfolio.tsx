import { motion } from "motion/react";
import { IMAGES } from "@/lib/constants";
import { Link } from "react-router-dom";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-cream border-t border-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-gold uppercase tracking-[0.2em] font-bold text-xl md:text-2xl mb-4">Our Portfolio</p>
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-6 leading-[1.1] italic font-light">Featured Work</h2>
          <p className="text-taupe font-light max-w-2xl mx-auto">
            A curated selection of our most prestigious interior design projects across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {IMAGES.portfolio.map((item, index) => {
            const CardContent = (
              <>
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-gold text-xs uppercase tracking-widest mb-2 font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 flex items-center justify-between">
                    {item.caption}
                    {/* @ts-ignore */}
                    {item.link && <span className="text-sm font-sans bg-gold/20 text-gold px-3 py-1 rounded-full border border-gold/50 ml-2">View Gallery</span>}
                  </h3>
                </div>
              </>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl group aspect-[4/3] border-4 border-white shadow-xl"
              >
                {/* @ts-ignore */}
                {item.link ? (
                  // @ts-ignore
                  <Link to={item.link} className="block w-full h-full relative">
                    {CardContent}
                  </Link>
                ) : (
                  <div className="block w-full h-full relative">
                    {CardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
