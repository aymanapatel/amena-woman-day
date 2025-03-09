
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 sm:px-4",
        scrolled ? "py-4 glassmorphism" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg md:text-xl lg:text-2xl font-serif italic">To My Nightingale 🕊️</div>
        
        <div className="hidden lg:flex space-x-8">
          <a 
            href="#about" 
            className="text-sm uppercase tracking-wider hover:text-stone transition-colors"
          >
            About Her
          </a>
          <a 
            href="#proud" 
            className="text-sm uppercase tracking-wider hover:text-stone transition-colors"
          >
            Why I'm Proud
          </a>
          <a 
            href="#gallery" 
            className="text-sm uppercase tracking-wider hover:text-stone transition-colors"
          >
            Gallery
          </a>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            className="flex space-x-2 bg-transparent border border-stone rounded-md p-2 hover:border-stone-500 transition-colors"
          >
            <img src="/images/hamburger.svg" alt="Menu" />
            <span className="text-sm uppercase tracking-wider">Menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
