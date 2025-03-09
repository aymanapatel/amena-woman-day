import React from 'react';
import TextReveal from './TextReveal';
import ImageReveal from './ImageReveal';

const WhyProud = () => {
  return (
    <section id="proud" className="py-20 md:py-32 px-6 bg-gradient-to-b from-white to-sand/10">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <TextReveal delay={2}>
            <h3 className="text-3xl md:text-4xl font-serif mb-6">Why I admire you Amena</h3>
          </TextReveal>
          
          <TextReveal delay={3}>
            <p className="text-charcoal/80 leading-relaxed">
              Every day, I am glad to find you who loves me. I love you so much for being the best woman I have ever met.
            </p>
          </TextReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <div className="bg-white p-8 rounded-lg border border-sand shadow-lg relative overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-pink-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-pink-100 rounded-full opacity-30"></div>
            <div className="absolute top-4 right-4 text-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            
            <TextReveal delay={2} className="relative z-10">
              <h4 className="text-xl font-serif mb-4 text-pink-800 flex items-center">
                <span className="inline-block mr-2 bg-pink-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </span>
                Your Job
              </h4>
              <p className="text-charcoal/80 leading-relaxed">
                Some days are not easy for you. Yet you do the right thing always. Never take shortcuts and always learn everything so fast.
              </p>
            </TextReveal>
          </div>
          
          <div className="bg-white p-8 rounded-lg border border-sand shadow-lg relative overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-100 rounded-full opacity-30"></div>
            <div className="absolute top-4 right-4 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            
            <TextReveal delay={3} className="relative z-10">
              <h4 className="text-xl font-serif mb-4 text-blue-800 flex items-center">
                <span className="inline-block mr-2 bg-blue-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 18a5 5 0 0 0-10 0"></path>
                    <line x1="12" y1="2" x2="12" y2="9"></line>
                    <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
                    <line x1="1" y1="18" x2="3" y2="18"></line>
                    <line x1="21" y1="18" x2="23" y2="18"></line>
                    <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
                    <line x1="23" y1="22" x2="1" y2="22"></line>
                    <polyline points="8 6 12 2 16 6"></polyline>
                  </svg>
                </span>
                Your Resilience
              </h4>
              <p className="text-charcoal/80 leading-relaxed">
                There is a concept called "Anti-fragile". "Antifragile" describes things that not only withstand stress but actually improve and grow stronger as a result of them.
                Every story you say makes me think how you are "anti-fragile". You might not be 100% proud of yourself, but I am. Look back at your life and see how far you have come.
              </p>
            </TextReveal>
          </div>
          
          <div className="bg-white p-8 rounded-lg border border-sand shadow-lg relative overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-100 rounded-full opacity-30"></div>
            <div className="absolute top-4 right-4 text-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            
            <TextReveal delay={4} className="relative z-10">
              <h4 className="text-xl font-serif mb-4 text-emerald-800 flex items-center">
                <span className="inline-block mr-2 bg-emerald-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                Your Smartness
              </h4>
              <p className="text-charcoal/80 leading-relaxed">
                You tell how smart I am. But you are smart too my dear. You learnt to code and made a site for me. You have got distinctions and won medals. I am in awe of that my love.
              </p>
            </TextReveal>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WhyProud;
