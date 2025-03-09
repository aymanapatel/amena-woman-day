import React from 'react';
import TextReveal from './TextReveal';
import ImageReveal from './ImageReveal';
import forklift from './images/forklift.png';
import musings from './images/musings.png';
import blog from './images/blog.png';
import telescope from './images/telescope.png';
import star from './images/star.png';
import graduation from './images/graduation.png';
import olympiad from './images/olympiad.png';
import suit from './images/suit.png';

const Gallery = () => {
  const images = [
    {
      src: olympiad,
      alt: "My woman won multiple olympiads. She is so talented!",
      delay: 1,
    },
    {
      src: blog,
      alt: "My woman has the most amazing ways of writing. She is so eloquent!",
      delay: 1,
    },
    {
      src: musings,
      alt: "My woman is such a great poet. Maybe our writings inspite of being polar opposite were meant to use 'musings'!",
      delay: 1,
    },
    {
      src: forklift,
      alt: "My woman doing such a heavy job. She is so strong!",
      delay: 1,
    },
    {
      src: telescope,
      alt: "My woman learning about the stars on a terrace. She is so curious!",
      delay: 2,
    },
    {
      src: star,
      alt: "My woman explaining about the stars. She knows so much about it!",
      delay: 3,
    },
    {
      src: graduation,
      alt: "My woman celebrating her graduation. She is so AMAZeiNG!",
      delay: 4,
    },
    {
      src: suit,
      alt: "My woman looks amazing in a suit. She is such a boss lady!",
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
              Each image captures a moment in your wins in life you have described to me in an illustrated manner.
            </p>
            <span className="font-bold italic">
              If mobile, click on image. If laptop, hover over image.
            </span>
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
