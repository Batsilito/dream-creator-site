import { useState, useEffect, useRef } from "react";
import { Users, Clock, BookOpen, RefreshCw, GraduationCap } from "lucide-react";

interface StatItem {
  target: number;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const stats: StatItem[] = [
  { target: 500, label: "مشترك في الكورس", icon: Users },
  { target: 10, label: "سنة خبرة", icon: Clock },
  { target: 10, label: "فصل", icon: BookOpen },
  { target: 1000, label: "طالب", icon: GraduationCap },
];

interface AnimatedCounterProps {
  target?: number;
  duration?: number;
  label?: string;
  className?: string;
}

const AnimatedCounter = ({ duration = 2000, className }: AnimatedCounterProps) => {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentStat = stats[currentStatIndex];
  const Icon = currentStat.icon;

  // Cycle through stats every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStatIndex((prev) => (prev + 1) % stats.length);
        setIsTransitioning(false);
      }, 300);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Animate count when stat changes
  useEffect(() => {
    if (!hasAnimated) return;
    
    const target = currentStat.target;
    const startTime = Date.now();
    const animateDuration = 800;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animateDuration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [currentStatIndex, hasAnimated, currentStat.target]);

  // Initial animation on scroll into view
  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const target = currentStat.target;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * target));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [duration, hasAnimated, currentStat.target]);

  return (
    <div
      ref={ref}
      className={`bg-card/50 border border-border/50 rounded-xl px-4 py-2 inline-flex items-center gap-3 backdrop-blur-sm w-fit ${className || ''}`}
    >
      <div className={`w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center shrink-0 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div 
        dir="ltr" 
        className={`text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-amber-400 to-orange-500 bg-clip-text text-transparent transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      >
        {count}+
      </div>
      <p className={`text-muted-foreground text-sm transition-opacity duration-300 min-w-[100px] ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {currentStat.label}
      </p>
    </div>
  );
};

export default AnimatedCounter;
