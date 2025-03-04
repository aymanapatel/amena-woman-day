
import React from 'react';
import TextReveal from './TextReveal';

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-charcoal text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">With All My Love</h2>
          </TextReveal>
          
          <TextReveal delay={2}>
            <p className="text-white/80 leading-relaxed mb-10">
              Thank you for being the extraordinary person you are. Your hard work, 
              dedication, and passion inspire me every day. I'm endlessly proud to be by your side.
            </p>
          </TextReveal>
          
          <TextReveal delay={3}>
            <div className="inline-block px-4 py-2 border border-white/20 rounded-sm">
              <p className="font-serif italic">Forever your biggest fan</p>
            </div>
          </TextReveal>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <p className="text-white/50 text-sm">Created with love</p>
          <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
