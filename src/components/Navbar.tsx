import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { IMAGES, BRAND_CONFIG } from "@/lib/constants";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "About", "Services", "Projects", "Portfolio", "Clients", "Contact"];

  const getHref = (link: string) => {
    const id = link.toLowerCase();
    return isHome ? `#${id}` : `/#${id}`;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-beige",
        isScrolled ? "bg-warm-white/95 backdrop-blur-md shadow-sm py-4" : "bg-warm-white py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/Duroshine_interior_LLP_Logo/Duroshine_interior_LLP_Logo.png" 
            alt="Duroshine Interior Logo" 
            className="h-10 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
              if (nextSibling) {
                nextSibling.style.display = 'flex';
              }
            }}
          />
          <div style={{ display: 'none' }} className="w-10 h-10 bg-primary rounded-full items-center justify-center text-gold font-serif text-xl font-bold">D</div>
          <span className="text-xl font-serif font-bold tracking-tight text-primary">
            DUROSHINE <span className="text-gold">INTERIOR</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={getHref(link)}
              className="text-sm uppercase tracking-widest font-semibold transition-colors text-primary hover:text-gold"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-warm-white border-b border-beige shadow-xl py-6 px-6 flex flex-col gap-6 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link}
                href={link === "About" ? getHref("about-mobile") : getHref(link)}
                onClick={() => setMobileMenuOpen(false)}
                className="text-primary uppercase tracking-widest text-sm font-semibold hover:text-gold transition-colors"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
