import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function GeneralResidentialGallery() {
  const images: string[] = [
    "/Residential/residential1.jpeg",
    "/Residential/residential2.jpg",
    "/Residential/residential3.png",
    "/Residential/residential5.jpg",
    "/Residential/residential6.png",
    "/Residential/residential7.jpeg",
    "/Residential/residential8.png",
    "/Residential/residential11.png",
  ];

  return (
    <div className="font-sans text-primary pb-0">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <Link to="/portfolio/residential" className="inline-flex items-center text-sm font-medium hover:text-gold transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Residential Projects
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-primary">Newtown</h1>
          <p className="text-lg text-primary/70 max-w-2xl mb-12">
            A look into our elegant and modern residential design at Newtown, tailored to create a beautiful and functional living space.
          </p>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((src, index) => (
              <div key={index} className="rounded-sm overflow-hidden bg-gray-100 group block relative break-inside-avoid shadow-sm hover:shadow-md transition-shadow duration-300">
                <img 
                  src={src} 
                  alt={`General residential interior ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
