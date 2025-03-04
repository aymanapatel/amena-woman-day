
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: 1 | 2 | 3 | 4;
  animation?: 'fade-in' | 'fade-up' | 'slide-in-right' | 'slide-in-left';
}

const TextReveal = ({ 
  children, 
  className, 
  threshold = 0.1,
  delay = 1,
  animation = 'fade-up'
}: TextRevealProps) => {
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
      {children}
    </div>
  );
};

export default TextReveal;
