
import React from 'react';
import TextReveal from './TextReveal';
import ImageReveal from './ImageReveal';

const WhyProud = () => {
  return (
    <section id="proud" className="py-20 md:py-32 px-6">
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
          <div className="bg-white p-8 rounded-md subtle-shadow relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-sand/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <TextReveal delay={2} className="relative z-10">
              <h4 className="text-xl font-serif mb-4">Your Job</h4>
              <p className="text-charcoal/80 leading-relaxed">
                Some days are not easy for you. Yet you do the right thing always. Never take shortcuts and always learn everything so fast.
              </p>
            </TextReveal>
          </div>
          
          <div className="bg-white p-8 rounded-md subtle-shadow relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-sand/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <TextReveal delay={3} className="relative z-10">
              <h4 className="text-xl font-serif mb-4">Your Resilience</h4>
              <p className="text-charcoal/80 leading-relaxed">
                There is a concept called "Anti-fragile". "Antifragile" describes things that not only withstand stress but actually improve and grow stronger as a result of them.
                Every story you say makes me think how you are "anti-fragile". You might not be 100% proud of yourself, but I am. Look back at your like and see how far you have come.
              </p>
            </TextReveal>
          </div>
          
          <div className="bg-white p-8 rounded-md subtle-shadow relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-sand/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <TextReveal delay={4} className="relative z-10">
              <h4 className="text-xl font-serif mb-4">Your Smartness</h4>
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
