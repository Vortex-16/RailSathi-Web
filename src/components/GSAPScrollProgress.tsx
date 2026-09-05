import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Train } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const GSAPScrollProgress: React.FC = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const trainRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    const bar = progressBarRef.current;
    const train = trainRef.current;
    if (!bar) return;

    const ctx = gsap.context(() => {
      // Scrub progress bar from 0% to 100% width
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.1,
            onUpdate: (self) => {
              const p = Math.round(self.progress * 100);
              setPercent(p);
            },
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-1 bg-[#191919] border-b border-[#42433d]/40"
      aria-hidden="true"
    >
      <div
        ref={progressBarRef}
        className="h-full bg-gradient-to-r from-[#0ae448] via-[#00bae2] to-[#ff8709] relative shadow-[0_0_8px_rgba(10,228,72,0.6)]"
      >
        {/* Little commuter train head gliding at the edge */}
        <div 
          ref={trainRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-[#0e100f] border border-[#0ae448] flex items-center justify-center text-[#0ae448] shadow-md shadow-[#0ae448]/30"
        >
          <Train className="w-2.5 h-2.5" />
        </div>
      </div>
    </div>
  );
};
