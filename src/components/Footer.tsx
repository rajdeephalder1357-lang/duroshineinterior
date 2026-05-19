import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative bg-[#2A1D17] text-cream pt-24 pb-12 border-t border-gold/10 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <h3 className="text-3xl font-serif mb-6 text-gold bg-clip-text text-transparent bg-gradient-to-r from-gold to-cream italic tracking-wide">
              {BRAND_CONFIG.name}
            </h3>
            <p className="text-cream/70 font-light mb-8 leading-relaxed max-w-md">
              {BRAND_CONFIG.subtext}
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/duroshineinterior?igsh=YjFleDZuNHF3d2ps" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-primary transition-all duration-300 text-cream/70">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/1DkeYvrMth/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-primary transition-all duration-300 text-cream/70">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-primary transition-all duration-300 text-cream/70">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.2em] uppercase mb-8 font-semibold text-gold">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/#${item.split(' ')[0].toLowerCase()}`} 
                    className="inline-flex items-center gap-2 text-cream/70 hover:text-gold transition-colors font-light group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-gold" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.2em] uppercase mb-8 font-semibold text-gold">Expertise</h4>
            <ul className="space-y-4">
              <li><Link to="/portfolio/residential" className="inline-block text-cream/70 hover:text-gold transition-colors font-light relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Residential</Link></li>
              <li><Link to="/portfolio/office" className="inline-block text-cream/70 hover:text-gold transition-colors font-light relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Commercial</Link></li>
              <li><Link to="/portfolio/autocad-3d" className="inline-block text-cream/70 hover:text-gold transition-colors font-light relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">3D Rendering</Link></li>
              <li><Link to="/#services" className="inline-block text-cream/70 hover:text-gold transition-colors font-light relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Management</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-[0.2em] uppercase mb-8 font-semibold text-gold">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                  <MapPin className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-cream/70 font-light whitespace-pre-line text-sm leading-relaxed pt-1">
                  {BRAND_CONFIG.address}
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                  <Phone className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-cream/70 font-light text-sm">
                  +91 {BRAND_CONFIG.phone}
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                  <Mail className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-cream/70 font-light text-sm">
                  {BRAND_CONFIG.email}
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-cream/40 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} {BRAND_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs tracking-wide">
            <a href="#" className="text-cream/40 hover:text-gold transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-gold after:scale-x-0 after:transition-transform hover:after:scale-x-100 after:origin-right hover:after:origin-left">Privacy Policy</a>
            <a href="#" className="text-cream/40 hover:text-gold transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-gold after:scale-x-0 after:transition-transform hover:after:scale-x-100 after:origin-right hover:after:origin-left">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
