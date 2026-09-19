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
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-1.5 bg-[#f2ee98] border-b-2 border-[#10380b]"
      aria-hidden="true"
    >
      <div
        ref={progressBarRef}
        className="h-full bg-[#10380b] relative"
      >
        {/* Little commuter train head gliding at the edge */}
        <div 
          ref={trainRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 rounded-full bg-[#fce519] border-2 border-[#10380b] flex items-center justify-center text-[#10380b] shadow-[1px_1px_0px_0px_#10380b]"
        >
          <Train className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};
