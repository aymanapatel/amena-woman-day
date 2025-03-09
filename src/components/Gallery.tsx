import React from 'react';
import TextReveal from './TextReveal';
import ImageReveal from './ImageReveal';


const Gallery = () => {
  const images = [
    {
      src: "https://52wqgtbctcod7mvv.public.blob.vercel-storage.com/images/olympiad-XTElHG0KDDAUujOnmCUWjToBQo1Uqe.png",
      alt: "My woman won multiple olympiads. She is so talented!",
      delay: 1,
    },
    {
      src: "https://52wqgtbctcod7mvv.public.blob.vercel-storage.com/images/blog-Yla3eC2oGtf5wU35cu4al363D3ECQA.png",
      alt: "My woman has the most amazing ways of writing. She is so eloquent!",
      delay: 1,
    },
    {
      src: "https://52wqgtbctcod7mvv.public.blob.vercel-storage.com/images/musings-oqauTEL2UbGFIP6WhO92m9bpugFzB7.png",
      alt: "My woman is such a great poet. Maybe our writings inspite of being polar opposite were meant to use 'musings'!",
      delay: 1,
    },
    {
      src: "https://52wqgtbctcod7mvv.public.blob.vercel-storage.com/images/forklift-ScbkeDFj9PRfStf7Yq36ti8XCMa9WM.png",
      alt: "My woman doing such a heavy job. She is so strong!",
      delay: 1,
    },
    {
      src: "https://52wqgtbctcod7mvv.public.blob.vercel-storage.com/images/telescope-5Pkb5PCKpZCk1bNorn5VD9IErwY0wW.png",
      alt: "My woman learning about the stars on a terrace. She is so curious!",
      delay: 2,
    },
    {
      src: "https://52wqgtbctcod7mvv.public.blob.vercel-storage.com/images/star-iOsLIHeQ2wUkpMrPlJEtZY0wG3o8Pc.png",
      alt: "My woman explaining about the stars. She knows so much about it!",
      delay: 3,
    },
    {
      src: "https://52wqgtbctcod7mvv.public.blob.vercel-storage.com/images/graduation-SQr3fqD1veWvUq6cXfWRq6OCqqE7xn.png",
      alt: "My woman celebrating her graduation. She is so AMAzEiNg!",
      delay: 4,
    },
    {
      src: "https://52wqgtbctcod7mvv.public.blob.vercel-storage.com/images/suit-Me7MlnyDjfecYD9Dt4R2pkH684UZle.png",
      alt: "My woman looks amazing in a suit. She is such a boss lady!",
      delay: 4,
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 px-6 bg-sand/20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <TextReveal delay={2}>
            <h3 className="relative inline-block text-3xl md:text-4xl font-serif mb-10">
              <span className="relative z-10">
                <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">A Gallery of</span>
                <span className="relative mx-2">
                  <span className="relative z-10">Illustrations</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-2 bg-yellow-200/70 transform -rotate-1"></span>
                </span>
                <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">of your Victories!</span>
              </span>
              
              {/* Decorative elements */}
              <span className="absolute -top-6 -left-6 text-yellow-400 text-3xl">🏆</span>
              <span className="absolute -top-6 -right-6 text-yellow-400 text-3xl">🏆</span>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></span>
              
              {/* Sparkle effects */}
              <span className="absolute top-0 left-1/4 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }}>✨</span>
              <span className="absolute bottom-0 right-1/4 text-yellow-400 animate-pulse">✨</span>
            </h3>
          </TextReveal>
          
          <TextReveal delay={3}>
            <p className="font-['Montserrat'] text-lg text-charcoal/90 leading-relaxed tracking-wide max-w-2xl mx-auto mb-8 relative">
              <span className="relative">
                Each image captures a moment in your wins in life you have described to me in an illustrated manner.
                <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-300 to-transparent"></span>
              </span>
            </p>
          </TextReveal>
          
          <TextReveal delay={3}>
            <div className="relative inline-block py-3 px-6 mx-auto bg-gradient-to-r from-yellow-50 to-amber-50 rounded-full border border-amber-200/50 shadow-sm hover:scale-105 transition-transform">
              <span className="font-['Montserrat'] text-sm tracking-wide text-amber-900/90 flex items-center gap-3">
                <span className="animate-pulse">📱</span>
                <span>If mobile, tap on image</span>
                <span className="text-amber-300">•</span>
                <span className="animate-pulse">💻</span>
                <span>If laptop, hover over image</span>
              </span>
              <span className="absolute inset-0 rounded-full border border-amber-200/30"></span>
            </div>
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
