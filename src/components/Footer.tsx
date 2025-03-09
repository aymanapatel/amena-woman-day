import React from 'react';
import TextReveal from './TextReveal';

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-gradient-to-b from-charcoal to-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-pink-500 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full opacity-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">With All My Admiration and Love</h2>
          </TextReveal>
          
          <TextReveal delay={2}>
            <p className="text-white/80 leading-relaxed mb-10">
              Thank you for being the AMAzEiNg woman that you are.
            </p>
          </TextReveal>
          
          <TextReveal delay={3}>
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500/20 to-blue-500/20 border border-white/20 rounded-lg shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-pink-500/20">
              <p className="font-serif italic text-lg relative">
                <span className="absolute -top-3 -left-3 text-pink-400 opacity-70 text-2xl">"</span>
                Forever your biggest fan 
                <span className="text-pink-300"> (copycat; I had to say it babe)</span>
                <span className="absolute -bottom-3 -right-3 text-pink-400 opacity-70 text-2xl">"</span>
              </p>
            </div>
          </TextReveal>
          
          <div className="mt-16 flex justify-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center hover:bg-pink-500/30 transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/30 transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
              </svg>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center hover:bg-blue-500/30 transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <p className="text-white/50 text-sm">For you, Amena</p>
          <a 
            href="#" 
            className="text-white/50 text-sm hover:text-white transition-colors flex items-center group" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            <span className="mr-2 transform transition-transform group-hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </span>
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
