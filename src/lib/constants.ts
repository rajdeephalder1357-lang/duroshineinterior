// This file contains image configuration.
// IMPORTANT: Since direct downloading from Google Drive links requires authentication, 
// high-quality placeholder images of interior design are used here for the preview.
// 
// TO USE YOUR REAL DRIVE IMAGES:
// 1. Download your images from the Google Drive folders.
// 2. Upload them to the 'public/images' folder in this project (create the folder if it doesn't exist).
// 3. Update the URLs in this file to point to your new images.

export const IMAGES = {
  logo: {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=200&h=100", 
    alt: "Duroshine Interior LLP Logo"
  },
  hero: [
    "/Senco_Jadavpur/senco_jadavpur.jpeg",
    "/Dhruva_LLP/Dhurva_interior_LLP1.jpeg",
    "/Residential/residential1.jpeg",
  ],
  about: "/About_us_Picture/Dhruva_interior_LLP7.png",
  categories: {
    retail: "/senco_Tallygunge/senco_tallygunge2.jpg",
    office: "/Dhruva_LLP/Dhurva_interior_LLP1.jpeg",
    residential: "/Residential/residential1.jpeg",
    guesthouse: "/guest_house/Gust_house (2).jpeg",
    school: "/Brilliand_Minds/brilliant_mind7.jpeg",
    autocad: "/AutoCAD_Drawing/autocad_Drawing (1).jpg",
  },
  portfolio: [
    { src: "/senco_Tallygunge/senco_tallygunge2.jpg", caption: "Senco Gold & Diamonds", category: "Retail", link: "/portfolio/senco" },
    { src: "/Dhruva_LLP/Dhurva_interior_LLP1.jpeg", caption: "Office", category: "Office", link: "/portfolio/office" },
    { src: "/Residential/residential1.jpeg", caption: "Residential Interiors", category: "Residential", link: "/portfolio/residential" },
    { src: "/Brilliand_Minds/brilliant_mind7.jpeg", caption: "School", category: "School", link: "/portfolio/school" },
    { src: "/guest_house/Gust_house (2).jpeg", caption: "Guest Houses", category: "Guesthouse", link: "/portfolio/guest-house" },
    { src: "/AutoCAD_Drawing/autocad_Drawing (1).jpg", caption: "AutoCAD & 3D Rendering", category: "Design", link: "/portfolio/autocad-3d" },
  ],
  beforeAfter: [
    {
      before: "/before_after/before_after (2).jpeg",
      after: "/before_after/before_after (1).jpeg",
      title: "Site Transformation 1"
    },
    {
      before: "/before_after/before_after (3).jpeg",
      after: "/before_after/before_after (5).jpeg",
      title: "Site Transformation 2"
    }
  ]
};

export const BRAND_CONFIG = {
  name: "Duroshine Interior LLP",
  tagline: "Designing Spaces with Elegance and Precision",
  subtext: "We create premium interiors that blend functionality, craftsmanship, and timeless aesthetics.",
  address: "21B Hindustan Road,\nGaria Hat,\nKolkata 700019",
  phone: "8420133496",
  email: "duroshineinteriorLLP@gmail.com",
  clients: [
    "Senco Gold & Diamonds",
    "Dhruva LLP",
    "Brilliant Mind Academy",
    "Alpha Numero"
  ],
  brands: [
    "Century Ply", "Greenply", "Berger", "Havells", "Kajaria", "Jaquar", "Asian Paints", "Merino", "Crompton"
  ]
}
