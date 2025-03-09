
import React from 'react';
import TextReveal from './TextReveal';
import ImageReveal from './ImageReveal';
import diamond from './images/diamond.png';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-sand/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <TextReveal>
              <h2 className="text-sm tracking-[0.2em] text-taupe mb-3">What makes you an AMAzEiNg person!</h2>
            </TextReveal>
            
            <TextReveal delay={2}>
              <h3 className="text-3xl md:text-4xl font-serif mb-6">Loving and Hardworking in Every Way</h3>
            </TextReveal>
            
            <TextReveal delay={3} className="mb-6">
              <p className="text-charcoal/80 leading-relaxed">
                You inspire me everyday to be better. Both in terms of hardwork and also loving your closed ones.
              </p>
            </TextReveal>
            
            <div className="space-y-4">
              <TextReveal delay={3} className="flex items-start gap-3">
                <div className="w-8 h-8 mt-1 rounded-full bg-charcoal/10 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-charcoal/80">
                  <span className="font-medium text-rose/80">Loving</span> — You make everyone feel <span className="font-medium bg-red-500 text-white px-2 py-1 rounded-sm">loved</span> and <span className="font-medium bg-emerald-500 text-white px-2 py-1 rounded-sm">important</span>. You are everyone's <span className="font-medium bg-blue-500 text-white px-2 py-1 rounded-sm">best friend</span>. 
                </p>
              </TextReveal>
              
              <TextReveal delay={3} className="flex items-start gap-3">
                <div className="w-8 h-8 mt-1 rounded-full bg-charcoal/10 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-charcoal/80">
                  <span className="font-medium text-charcoal">Resilient</span> — No matter the setbacks, you push through.
                </p>
              </TextReveal>
              
              <TextReveal delay={4} className="flex items-start gap-3">
                <div className="w-8 h-8 mt-1 rounded-full bg-charcoal/10 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-charcoal/80">
                  <span className="font-medium text-charcoal">Smart</span> — You might not know <code className="font-mono rounded-sm bg-charcoal/10 px-1">class</code> vs <code className="font-mono rounded-sm bg-charcoal/10 px-1">interface</code>; but damn you teach me on the most important <code className="font-mono rounded-sm bg-charcoal/10 px-1">CLASS</code> — i.e. Life; and how it <code className="font-mono rounded-sm bg-charcoal/10 px-1">INTERFACES</code> with us humans.
                </p>
                
              </TextReveal>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-[3/4] w-full max-w-md mx-auto md:ml-auto relative">
              <ImageReveal 
                src={diamond}
                alt="A professional woman working" 
                className="rounded-md overflow-hidden shadow-lg w-full h-full"
                animation="scale-in"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-lg rounded-sm w-48">
                <TextReveal delay={4} animation="fade-in">
                  <p className="text-sm italic font-serif text-charcoal">
                    "She makes everyone happy everyday."
                  </p>
                </TextReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
