import { motion } from "motion/react";
import { IMAGES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function ProjectCategories() {
  const categories = [
    { id: "retail", title: "Retail", desc: "Experience spaces that drive sales.", img: IMAGES.categories.retail, link: "/portfolio/senco" },
    { id: "office", title: "Office", desc: "Inspiring workspaces for productivity.", img: IMAGES.categories.office, link: "/portfolio/office" },
    { id: "residential", title: "Residential", desc: "Elegant homes designed for living.", img: IMAGES.categories.residential, link: "/portfolio/residential" },
    { id: "guesthouse", title: "Guesthouse", desc: "Welcoming spaces for hospitality.", img: IMAGES.categories.guesthouse, link: "/portfolio/guest-house" },
    { id: "school", title: "School", desc: "Inspiring environments for learning.", img: IMAGES.categories.school, link: "/portfolio/school" },
    { id: "autocad", title: "AutoCAD Drawing & 3D Rendering", desc: "Precision planning and visualization.", img: IMAGES.categories.autocad, link: "/portfolio/autocad-3d" },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-cream border-t border-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-gold uppercase tracking-[0.2em] font-bold text-xl md:text-2xl mb-4">Project Categories</p>
            <h2 className="text-2xl md:text-3xl font-serif text-primary leading-[1.1] italic font-light">Spaces We Transform</h2>
          </div>
          <a href="#portfolio" className="flex items-center gap-2 text-taupe hover:text-gold uppercase tracking-[0.2em] text-xs font-bold transition-colors">
            View All Projects <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer border-4 border-white shadow-xl ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              } ${
                category.id === "autocad" ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              } h-[400px]`}
            >
              {category.link ? (
                <Link to={category.link} className="block w-full h-full relative">
                  <img
                    src={category.img}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-serif text-white mb-2 italic">{category.title}</h3>
                    <p className="text-white/80 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {category.desc}
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="block w-full h-full relative">
                  <img
                    src={category.img}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-serif text-white mb-2 italic">{category.title}</h3>
                    <p className="text-white/80 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {category.desc}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
