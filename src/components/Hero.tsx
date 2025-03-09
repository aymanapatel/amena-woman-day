
import React from 'react';
import TextReveal from './TextReveal';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 py-20 md:py-0">
      <div className="absolute inset-0 bg-gradient-to-b from-cream to-transparent opacity-50 z-0"></div>
      
      <div className="container mx-auto max-w-5xl z-10">
        <div className="flex flex-col items-center text-center">
          <TextReveal 
            delay={1}
            className="mb-3"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-taupe">From your darling</p>
          </TextReveal>
          
          <TextReveal 
            delay={2}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight">
              To the Woman Who <br />
              <span className="font-medium italic">Is a queen</span>&nbsp;👸&nbsp;<span className="font-medium italic">and a boss lady!</span>&nbsp;👩‍💼
            </h1>
          </TextReveal>
          
          <TextReveal 
            delay={3}
            className="max-w-2xl mb-10"
          >
            <p className="text-lg text-charcoal/80 leading-relaxed">
              This is my celebration of you, Amena, on the occasion of Women's Day. <br/> To one of the two most important woman in my life
            </p>
          </TextReveal>
          
          <TextReveal delay={4}>
            <a 
              href="#about" 
              className="inline-block px-8 py-4 bg-pink-500 text-white rounded-sm hover:bg-pink-600 transition-all duration-300 shadow-sm"
            >
              Check more about how I am proud of you
            </a>
          </TextReveal>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('about');
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="opacity-50"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
