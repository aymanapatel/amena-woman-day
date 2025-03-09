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
            <p className="relative inline-block px-6 py-2 text-sm uppercase tracking-[0.2em] text-pink-700 font-medium">
              <span className="relative z-10">From your darling</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full transform -rotate-1 shadow-sm"></span>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-200 rounded-full animate-pulse"></span>
              <span className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-200 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></span>
              <span className="absolute top-1/2 -translate-y-1/2 -left-6 text-pink-400">❤️</span>
              <span className="absolute top-1/2 -translate-y-1/2 -right-6 text-pink-400">❤️</span>
            </p>
          </TextReveal>
          
          <TextReveal 
            delay={2}
            className="mb-6"
          >
            <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight">
              <span className="relative inline-block">
                <span className="relative z-10">To the Woman Who</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-pink-200/50 transform -rotate-1 rounded-full"></span>
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="font-medium italic relative z-10 bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">Is a queen</span>
                <span className="mx-2">👸</span>
                <span className="font-medium italic relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">and a boss lady!</span>
                <span className="mx-2">👩‍💼</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-pink-200 to-purple-200 transform -rotate-1 rounded-full"></span>
              </span>
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-24 bg-gradient-to-b from-pink-300 to-purple-300 rounded-full opacity-40"></div>
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-24 bg-gradient-to-b from-purple-300 to-pink-300 rounded-full opacity-40"></div>
            </h1>
          </TextReveal>
          
          <TextReveal 
            delay={3}
            className="max-w-2xl mb-10"
          >
            <p className="relative text-lg leading-relaxed px-8 py-4">
              <span className="relative z-10 text-charcoal/90">
                This is my celebration of you, <span className="font-medium text-pink-600">Amena.</span>
                <br className="md:hidden" />
                <span className="inline-block mt-2">
                  To <span className="font-medium text-pink-600"> one of the two most important</span> women in my life.
                  <span className="inline-block ml-2 animate-pulse">💖</span>
                </span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg opacity-80 transform rotate-1"></span>
              <span className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-pink-300 to-purple-300 rounded-l-lg"></span>
              <span className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded-b-lg"></span>
            </p>
          </TextReveal>
          
          <TextReveal delay={4}>
            <a 
              href="#about" 
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg group hover:scale-105"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-purple-600 to-pink-500 group-hover:translate-x-0 ease-in-out">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
                Check more about how I am proud of you
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease-in-out">
                Check more about how I am proud of you
              </span>
              <span className="relative invisible">Check more about how I am proud of you</span>
              
              {/* Shadow elements */}
              <span className="absolute -bottom-2 left-1 right-1 h-10 bg-pink-700/30 blur-md rounded-lg -z-10"></span>
              <span className="absolute -bottom-1 left-2 right-2 h-8 bg-pink-700/20 blur-sm rounded-lg -z-10"></span>
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
