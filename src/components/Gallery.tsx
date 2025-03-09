import React from 'react';
import TextReveal from './TextReveal';
import ImageReveal from './ImageReveal';
import temp1 from './temp1.jpeg';

const Gallery = () => {
  const images = [
    {
      src: temp1,
      alt: "Woman working on laptop",
      delay: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      alt: "Woman sitting on bed with laptop",
      delay: 2,
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "Person using MacBook Pro",
      delay: 3,
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Woman in white long sleeve using laptop",
      delay: 4,
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 px-6 bg-sand/20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <TextReveal>
            <h2 className="text-sm uppercase tracking-[0.2em] text-taupe mb-3">Cherished Moments</h2>
          </TextReveal>
          
          <TextReveal delay={2}>
            <h3 className="text-3xl md:text-4xl font-serif mb-6">A Gallery of Illustration of your wins!</h3>
          </TextReveal>
          
          <TextReveal delay={3}>
            <p className="text-charcoal/80 leading-relaxed">
              Each image captures a moment in your life you have described to me in a illustrated manner.
            </p>
          </TextReveal>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-md aspect-[3/4]">
              <ImageReveal 
                src={image.src} 
                alt={image.alt} 
                delay={image.delay as 1 | 2 | 3 | 4}
                className="w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                animation="fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <TextReveal>
            <p className="italic font-serif text-lg text-charcoal/80">
              "Success is not measured by what you accomplish, but by the opposition you have encountered, 
              and the courage with which you have maintained the struggle against overwhelming odds."
            </p>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
