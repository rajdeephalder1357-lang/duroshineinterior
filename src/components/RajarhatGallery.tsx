import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function RajarhatGallery() {
  const images: string[] = [
    "/Rajarhat_interior/Rajarhat_Interior1.jpeg",
    "/Rajarhat_interior/Rajarhat_Interior2.jpeg",
    "/Rajarhat_interior/Rajarhat_Interior3.jpeg",
    "/Rajarhat_interior/Rajarhat_Interior4.jpeg",
    "/Rajarhat_interior/Rajarhat_Interior5.jpeg",
    "/Rajarhat_interior/Rajarhat_Interior6.jpeg",
    "/Rajarhat_interior/Rajarhat_Interior7.jpeg",
    "/Rajarhat_interior/Rajarhat_Interior8.jpeg",
    "/Rajarhat_interior/Rajarhat_Interior9.jpeg",
    "/Rajarhat_interior/Rajarhat_Interior10.jpeg",
    "/Rajarhat_interior/Rajarhat_Interior11.jpeg",
    "/Rajarhat_interior/Rajarhat_Interior12.jpeg",
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
          
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-primary">Garia Hat Interior</h1>
          <p className="text-lg text-primary/70 max-w-2xl mb-12">
            A look into our elegant and modern residential design at Garia Hat, tailored to create a beautiful and functional living space.
          </p>

          {images.length > 0 ? (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {images.map((src, index) => (
                <div key={index} className="rounded-sm overflow-hidden bg-gray-100 group block relative break-inside-avoid shadow-sm hover:shadow-md transition-shadow duration-300">
                  <img 
                    src={src} 
                    alt={`Garia Hat residential interior ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500 text-lg">Images are coming soon!</p>
              <p className="text-gray-400 text-sm mt-2">Upload your Garia Hat images to see them here.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
