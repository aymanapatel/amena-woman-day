import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
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

  const toggleMenu = () => setIsOpen(!isOpen);

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
            onClick={toggleMenu}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="currentColor" />
            </svg>
            <span className="text-sm uppercase tracking-wider">Menu</span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-4">
          <div className="flex flex-col space-y-2">
            <a 
              href="#about" 
              className="text-sm uppercase tracking-wider hover:text-stone transition-colors"
              onClick={toggleMenu}
            >
              About Her
            </a>
            <a 
              href="#proud" 
              className="text-sm uppercase tracking-wider hover:text-stone transition-colors"
              onClick={toggleMenu}
            >
              Why I'm Proud
            </a>
            <a 
              href="#gallery" 
              className="text-sm uppercase tracking-wider hover:text-stone transition-colors"
              onClick={toggleMenu}
            >
              Gallery
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
