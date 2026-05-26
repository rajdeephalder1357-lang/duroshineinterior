import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function OfficeGallery() {
  const offices = [
    {
      id: "lawyers-chamber",
      title: "Lawyers Chamber",
      desc: "Our interior design for Lawyers Chamber.",
      img: "/lawyers_chember/lawyer_chamber.jpeg",
      link: "/portfolio/lawyers-chamber"
    },
    {
      id: "dhruva-llp",
      title: "Dhruva LLP",
      desc: "Our interior design for Dhruva LLP.",
      img: "/Dhruva_LLP/Dhurva_interior_LLP1.jpeg",
      link: "/portfolio/dhruva-llp"
    }
  ];

  return (
    <div className="font-sans text-primary pb-0">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-sm font-medium hover:text-gold transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-primary">Office Interiors</h1>
          <p className="text-lg text-primary/70 max-w-2xl mb-12">
            Explore our interior design work across various premium offices we have designed. Click on an office to see its full gallery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="aspect-square md:aspect-[4/5] rounded-sm overflow-hidden bg-gray-100 group block relative cursor-pointer"
              >
                <Link to={office.link} className="block w-full h-full relative">
                  <img
                    src={office.img}
                    alt={office.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/800x600?text=Upload+Image";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* View Gallery Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 text-center pointer-events-none">
                    <span className="inline-flex items-center gap-2 bg-gold/90 hover:bg-gold text-primary font-serif font-bold text-lg md:text-xl px-8 md:px-10 py-3 md:py-4 rounded-full shadow-2xl transition-transform hover:scale-105 pointer-events-auto">
                      View Gallery <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-serif text-white mb-2 italic">{office.title}</h3>
                    <p className="text-white/80 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {office.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
