
import React from 'react';
import TextReveal from './TextReveal';
import ImageReveal from './ImageReveal';

const WhyProud = () => {
  return (
    <section id="proud" className="py-20 md:py-32 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <TextReveal>
            <h2 className="text-sm uppercase tracking-[0.2em] text-taupe mb-3">My Admiration</h2>
          </TextReveal>
          
          <TextReveal delay={2}>
            <h3 className="text-3xl md:text-4xl font-serif mb-6">Why I'm Endlessly Proud</h3>
          </TextReveal>
          
          <TextReveal delay={3}>
            <p className="text-charcoal/80 leading-relaxed">
              Every day, you inspire me with your dedication and strength. Your accomplishments, 
              both professional and personal, fill me with immense pride.
            </p>
          </TextReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <div className="bg-white p-8 rounded-md subtle-shadow relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-sand/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <TextReveal delay={2} className="relative z-10">
              <span className="inline-block px-3 py-1 bg-sand/50 text-charcoal/80 text-xs rounded-full mb-6">
                Professional Growth
              </span>
              <h4 className="text-xl font-serif mb-4">Your Remarkable Career</h4>
              <p className="text-charcoal/80 leading-relaxed">
                Watching you excel in your career and overcome every professional challenge with grace 
                fills me with immense pride. Your work ethic and determination are truly inspirational.
              </p>
            </TextReveal>
          </div>
          
          <div className="bg-white p-8 rounded-md subtle-shadow relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-sand/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <TextReveal delay={3} className="relative z-10">
              <span className="inline-block px-3 py-1 bg-sand/50 text-charcoal/80 text-xs rounded-full mb-6">
                Inner Strength
              </span>
              <h4 className="text-xl font-serif mb-4">Your Resilience</h4>
              <p className="text-charcoal/80 leading-relaxed">
                The way you navigate life's challenges with strength and optimism never ceases to amaze me. 
                Your resilience in difficult times shows your incredible character.
              </p>
            </TextReveal>
          </div>
          
          <div className="bg-white p-8 rounded-md subtle-shadow relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-sand/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <TextReveal delay={4} className="relative z-10">
              <span className="inline-block px-3 py-1 bg-sand/50 text-charcoal/80 text-xs rounded-full mb-6">
                Perfect Balance
              </span>
              <h4 className="text-xl font-serif mb-4">Your Life Harmony</h4>
              <p className="text-charcoal/80 leading-relaxed">
                You masterfully balance your professional life with personal relationships, never 
                letting success in one area diminish your presence in the other.
              </p>
            </TextReveal>
          </div>
        </div>
        
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-sand/30 rounded-lg -z-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-12">
            <div className="flex flex-col justify-center">
              <TextReveal>
                <h4 className="text-2xl md:text-3xl font-serif mb-6">
                  "Behind every successful woman is herself."
                </h4>
              </TextReveal>
              
              <TextReveal delay={2}>
                <p className="text-charcoal/80 leading-relaxed mb-8">
                  Your independence and self-reliance are qualities I deeply admire. You've earned every 
                  bit of your success through hard work, determination, and an unwavering belief in yourself.
                </p>
              </TextReveal>
              
              <TextReveal delay={3}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="italic font-serif">Your partner, always in awe</p>
                </div>
              </TextReveal>
            </div>
            
            <div className="relative">
              <ImageReveal 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="A professional woman working on a laptop" 
                className="rounded-md overflow-hidden shadow-lg w-full h-full object-cover aspect-video md:aspect-auto"
                animation="slide-in-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyProud;
