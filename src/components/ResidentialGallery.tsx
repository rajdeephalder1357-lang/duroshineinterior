import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export function ResidentialGallery() {
  const projects = [
    {
      id: "rajarhat",
      title: "Garia Hat Interior",
      desc: "Our elegant interior design for a residential project in Garia Hat.",
      img: "/Residential/residential1.jpeg",
      link: "/portfolio/residential/rajarhat"
    },
    {
      id: "general",
      title: "Newtown",
      desc: "Our elegant interior design for a residential project in Newtown.",
      img: "/Residential/residential2.jpg",
      link: "/portfolio/residential/general"
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
          
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-primary">Residential Interiors</h1>
          <p className="text-lg text-primary/70 max-w-2xl mb-12">
            Explore our elegant and modern residential design projects, tailored to create beautiful and functional living spaces.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="aspect-square md:aspect-[4/5] rounded-sm overflow-hidden bg-gray-100 group block relative cursor-pointer"
              >
                <Link to={project.link} className="block w-full h-full relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-serif text-white mb-2 italic">{project.title}</h3>
                    <p className="text-white/80 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.desc}
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
