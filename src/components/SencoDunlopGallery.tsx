import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function SencoDunlopGallery() {
  const images: string[] = [
    "/senco_dunlop/senco_dunlop2.png",
    "/senco_dunlop/senco_dunlop3.jpeg",
    "/senco_dunlop/senco_dunlop4.png",
    "/senco_dunlop/senco_dunlop5.jpeg",
    "/senco_dunlop/senco_dunlop6.png",
    "/senco_dunlop/senco_dunlop7.jpeg",
    "/senco_dunlop/senco_dunlop8.png",
    "/senco_dunlop/senco_dunlop9.jpeg",
  ];

  return (
    <div className="font-sans text-primary pb-0">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <Link to="/portfolio/senco" className="inline-flex items-center text-sm font-medium hover:text-gold transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Senco Hub
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-primary">Senco Gold & Diamonds - Dunlop</h1>
          <p className="text-lg text-primary/70 max-w-2xl mb-12">
            A closer look at the elegant interior design we created for Senco Gold & Diamonds Dunlop outlet.
          </p>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((src, index) => (
              <div key={index} className="rounded-sm overflow-hidden bg-gray-100 group block relative break-inside-avoid shadow-sm hover:shadow-md transition-shadow duration-300">
                <img 
                  src={src} 
                  alt={`Senco Dunlop interior ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
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
