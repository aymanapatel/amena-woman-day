import React from 'react';
import TextReveal from './TextReveal';
import '../styles/animations.css';

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
            <h2 className="text-3xl md:text-4xl font-serif mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
              With All My Admiration and Love
            </h2>
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="90" fill="#f8f8f8" stroke="#e0e0e0" stroke-width="2" />
                <path
                  d="M100 150 C85 130 55 110 55 80 C55 60 70 50 85 50 C95 50 100 55 100 65 C100 55 105 50 115 50 C130 50 145 60 145 80 C145 110 115 130 100 150 Z"
                  fill="#ff4d6d"
                  stroke="#e02f48"
                  stroke-width="1.5"
                />
                <path
                  d="M75 75 C75 65 85 60 90 65 C95 70 90 80 75 75 Z"
                  fill="#ff8fa3"
                  stroke="none"
                />
              </svg>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/30 transition-colors cursor-pointer">
              <img src="https://52wqgtbctcod7mvv.public.blob.vercel-storage.com/images/star_shooting-e6G6ynJor8DQ4PWJY1U5E4TqNTe8U9.png" alt="Shooting star" className="rounded-full"/>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center hover:bg-blue-500/30 transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <path
                  d="M100 180 L100 120"
                  stroke="#2d8c3c"
                  stroke-width="6"
                  stroke-linecap="round"
                />

                <path
                  d="M100 150 Q120 145 130 155 Q120 165 100 160"
                  fill="#2d8c3c"
                  stroke="#2d8c3c"
                  stroke-width="1"
                />

                <path
                  d="M70 80 Q55 65 60 45 Q75 40 85 55 Q90 35 110 35 Q120 50 115 65 Q135 60 145 45 Q150 65 135 80 Q155 90 155 110 Q135 115 125 105 Q125 125 110 135 Q95 125 95 105 Q85 120 65 110 Q65 90 85 85 Z"
                  fill="#e8456b"
                  stroke="#c62c4e"
                  stroke-width="1"
                />

                <path
                  d="M80 85 Q70 70 75 60 Q85 58 95 65 Q100 55 110 55 Q115 65 110 75 Q125 70 130 60 Q135 75 125 85 Q140 95 135 105 Q125 110 115 100 Q115 115 105 120 Q95 115 95 100 Q85 110 75 105 Q70 95 85 90 Z"
                  fill="#e84175"
                  stroke="#c62c4e"
                  stroke-width="1"
                />

                <path
                  d="M90 90 Q85 80 90 70 Q95 68 100 75 Q105 68 110 70 Q115 80 110 85 Q120 90 115 100 Q105 102 100 95 Q95 102 85 100 Q80 90 90 85 Z"
                  fill="#d90f50"
                  stroke="#c62c4e"
                  stroke-width="1"
                />

                <circle
                  cx="100"
                  cy="85"
                  r="10"
                  fill="#b30d43"
                />

                <path
                  d="M97 130 L90 137"
                  stroke="#2d8c3c"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M103 145 L110 152"
                  stroke="#2d8c3c"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <div className="relative group">
            <p className="font-['Montserrat'] text-white/80 text-sm tracking-wider">
              <span className="mr-2 flying-dove" style={{ animationDelay: '0s' }}>🕊️</span>
              <span className="group-hover:text-white transition-colors">For you, Amena</span>
              <span className="ml-2 flying-dove" style={{ animationDelay: '0.5s' }}>🕊️</span>
            </p>
            <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </div>
          <a
            href="#"
            className="text-white/50 text-sm hover:text-white transition-colors flex items-center group bounce-up"
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
