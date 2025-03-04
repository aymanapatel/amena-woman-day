
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  threshold?: number;
  delay?: 1 | 2 | 3 | 4;
  animation?: 'fade-in' | 'fade-up' | 'scale-in' | 'slide-in-right' | 'slide-in-left';
}

const ImageReveal = ({ 
  src, 
  alt, 
  className, 
  imgClassName,
  threshold = 0.1,
  delay = 1,
  animation = 'fade-in'
}: ImageRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && elementRef.current) {
          elementRef.current.classList.add(`animate-${animation}`);
        }
      },
      {
        threshold: threshold,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, animation]);

  return (
    <div 
      ref={elementRef} 
      className={cn(`reveal-delay-${delay}`, className)}
    >
      <img 
        src={src} 
        alt={alt} 
        className={cn("w-full h-full object-cover", imgClassName)}
        loading="lazy" 
      />
    </div>
  );
};

export default ImageReveal;
