import { useState, useEffect, useRef } from "react";
import { Users } from "lucide-react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  label: string;
}

const AnimatedCounter = ({ target, duration = 2000, label }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * target));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <div
      ref={ref}
      className="bg-card/50 border border-border/50 rounded-2xl p-6 flex flex-col items-center justify-center space-y-4 backdrop-blur-sm"
    >
      <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center">
        <Users className="w-7 h-7 text-primary" />
      </div>
      <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-amber-400 to-orange-500 bg-clip-text text-transparent">
        {count}+
      </div>
      <p className="text-muted-foreground text-lg">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
