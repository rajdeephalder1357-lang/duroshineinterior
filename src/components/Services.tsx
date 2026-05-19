import { motion } from "motion/react";
import { Compass, Hammer, Building, Monitor, Sofa, Stamp } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Compass className="w-6 h-6 stroke-[1.5]" />,
      title: "Full-scale Interior Design",
      desc: "Complete planning, material selection, lighting, furniture, and finishing solutions.",
      bgImage: "/full_scale_interior_design/full_scale_interior_design.png"
    },
    {
      icon: <Hammer className="w-6 h-6 stroke-[1.5]" />,
      title: "Project Execution",
      desc: "Professional execution with quality craftsmanship and precision.",
      bgImage: "/Project_execution/Project_execution.png"
    },
    {
      icon: <Building className="w-6 h-6 stroke-[1.5]" />,
      title: "Architectural Design",
      desc: "Modern architectural planning and spatial design.",
      bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
    },
    {
      icon: <Monitor className="w-6 h-6 stroke-[1.5]" />,
      title: "AutoCAD & 3D Rendering",
      desc: "Detailed AutoCAD drawings and realistic 3D visualization.",
      bgImage: "/Autocad_&_3D_Rendering/Autocad_&_3D_rendering.jpeg"
    },
    {
      icon: <Sofa className="w-6 h-6 stroke-[1.5]" />,
      title: "Furniture & Accessories",
      desc: "Customized furniture and curated accessories for elegant interiors.",
      bgImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80"
    },
    {
      icon: <Stamp className="w-6 h-6 stroke-[1.5]" />,
      title: "Branding",
      desc: "Strategic brand identity design and visual communication.",
      bgImage: "/Branding/Branding.jpeg"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-warm-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cream -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-20">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-[0.2em] font-bold text-xl md:text-2xl mb-4">Our Services</p>
            <h2 className="text-2xl md:text-3xl font-serif text-primary leading-[1.1] italic font-light">Expertise & Solutions</h2>
          </div>
          <div className="max-w-md rounded-xl p-6 bg-cream border border-beige shadow-md">
            <p className="text-taupe font-light">
              We offer comprehensive interior design services, tailored to meet the unique 
              demands of high-end residential and commercial projects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-beige hover:border-gold transition-colors shadow-sm hover:shadow-xl"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={service.bgImage} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-8 relative flex-grow flex flex-col pt-10">
                <div className="absolute -top-7 right-8 w-14 h-14 bg-white border border-gold shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-gold transition-all duration-300 z-10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif text-primary mb-4 pr-8">{service.title}</h3>
                <p className="text-taupe font-light leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
