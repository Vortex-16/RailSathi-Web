import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  className?: string;
  id?: string;
  threshold?: string; // e.g. "top 85%"
  staggerChildren?: number | string; // selector like "> *" or number for direct children
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 36,
  duration = 0.8,
  className = '',
  id,
  threshold = 'top 88%',
  staggerChildren,
}) => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, x: 0, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      let x = 0;
      let y = 0;

      if (direction === 'up') y = distance;
      else if (direction === 'down') y = -distance;
      else if (direction === 'left') x = distance;
      else if (direction === 'right') x = -distance;

      if (staggerChildren) {
        const targets = typeof staggerChildren === 'string' 
          ? el.querySelectorAll(staggerChildren)
          : el.children;

        gsap.fromTo(
          targets,
          { opacity: 0, x, y },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration,
            delay,
            stagger: typeof staggerChildren === 'number' ? staggerChildren : 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: threshold,
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      } else {
        gsap.fromTo(
          el,
          { opacity: 0, x, y },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: threshold,
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }
    }, elRef);

    return () => ctx.revert();
  }, [delay, direction, distance, duration, threshold, staggerChildren]);

  return (
    <div id={id} ref={elRef} className={className}>
      {children}
    </div>
  );
};
