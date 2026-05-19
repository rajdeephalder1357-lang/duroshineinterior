import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function GuestHouseGallery() {
  const images: string[] = [
    "/guest_house/Gust_house (1).jpeg",
    "/guest_house/Gust_house (1).png",
    "/guest_house/Gust_house (2).jpeg",
    "/guest_house/Gust_house (2).png",
    "/guest_house/Gust_house (3).png",
    "/guest_house/Gust_house (4).jpeg",
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
          
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-primary">Guest Houses</h1>
          <p className="text-lg text-primary/70 max-w-2xl mb-12">
            A showcase of our inviting and comfortable guest house interior designs, balancing style and hospitality.
          </p>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((src, index) => (
              <div key={index} className="rounded-sm overflow-hidden bg-gray-100 group block relative break-inside-avoid shadow-sm hover:shadow-md transition-shadow duration-300">
                <img 
                  src={src} 
                  alt={`Guest house interior ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Ensure the error state is clear and visible to the user
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
