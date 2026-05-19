import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function SencoTallygungeGallery() {
  const images: string[] = [
    "/senco_Tallygunge/senco_tallygunge1.jpeg",
    "/senco_Tallygunge/senco_tallygunge5.jpeg",
    "/senco_Tallygunge/senco_tallygunge6.jpeg",
    "/senco_Tallygunge/senco_tallygunge7.jpeg",
    "/senco_Tallygunge/senco_tallygunge8.jpeg",
    "/senco_Tallygunge/senco_tallygunge9.jpeg",
    "/senco_Tallygunge/senco_tallygunge10.jpeg",
    "/senco_Tallygunge/senco_tallygunge11.jpeg",
    "/senco_Tallygunge/senco_tallygunge13.jpeg",
    "/senco_Tallygunge/senco_tallygunge14.jpeg",
    "/senco_Tallygunge/senco_tallygunge15.jpeg",
    "/senco_Tallygunge/senco_tallygunge16.jpeg",
    "/senco_Tallygunge/senco_tallygunge18.jpeg",
    "/senco_Tallygunge/senco_tallygunge21.jpeg",
    "/senco_Tallygunge/senco_tallygunge22.jpeg",
    "/senco_Tallygunge/senco_tallygunge25.jpeg",
    "/senco_Tallygunge/senco_tallygunge26.jpeg",
    "/senco_Tallygunge/senco_tallygunge27.jpeg",
    "/senco_Tallygunge/senco_tallygunge28.jpeg",
    "/senco_Tallygunge/senco_tallygunge29.jpeg",
    "/senco_Tallygunge/senco_tallygunge31.jpeg",
    "/senco_Tallygunge/senco_tallygunge32.jpeg",
    "/senco_Tallygunge/senco_tallygunge35.jpeg",
    "/senco_Tallygunge/senco_tallygunge36.jpeg",
    "/senco_Tallygunge/senco_tallygunge37.jpeg",
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
          
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-primary">Senco Gold & Diamonds - Tallygunge</h1>
          <p className="text-lg text-primary/70 max-w-2xl mb-12">
            A closer look at the elegant interior design we created for Senco Gold & Diamonds Tallygunge outlet.
          </p>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((src, index) => (
              <div key={index} className="rounded-sm overflow-hidden bg-gray-100 group block relative break-inside-avoid shadow-md hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={src} 
                  alt={`Senco Tallygunge interior ${index + 1}`}
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
