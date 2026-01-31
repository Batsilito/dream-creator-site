import { useState, useEffect, useRef } from "react";
import { Users, BookOpen, Clock, Sparkles } from "lucide-react";

interface StatItem {
  target: number;
  label: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  { target: 500, label: "مشترك في الكورس", icon: <Users className="w-4 h-4 text-primary" /> },
  { target: 11, label: "فصل", icon: <BookOpen className="w-4 h-4 text-primary" /> },
  { target: 5, label: "سنة خبرة", icon: <Clock className="w-4 h-4 text-primary" /> },
  { target: 0, label: "محتوى متجدد", icon: <Sparkles className="w-4 h-4 text-primary" /> },
];

interface AnimatedCounterProps {
  target?: number;
  duration?: number;
  label?: string;
  className?: string;
}

const AnimatedCounter = ({ duration = 2000, className }: AnimatedCounterProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  // Rotate through stats every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Animate count when index changes
  useEffect(() => {
    const currentStat = stats[currentIndex];
    if (currentStat.target === 0) {
      setCount(0);
      return;
    }

    setIsAnimating(true);
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * currentStat.target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [currentIndex, duration]);

  const currentStat = stats[currentIndex];

  return (
    <div
      ref={ref}
      className={`bg-card/50 border border-border/50 rounded-xl px-4 py-2 inline-flex items-center gap-3 backdrop-blur-sm w-fit transition-all duration-300 ${className || ''}`}
    >
      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
        {currentStat.icon}
      </div>
      <div dir="ltr" className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-amber-400 to-orange-500 bg-clip-text text-transparent min-w-[60px]">
        {currentStat.target > 0 ? `${count}+` : ""}
      </div>
      <p className="text-muted-foreground text-sm whitespace-nowrap">
        {currentStat.target > 0 ? currentStat.label : `أكثر من ${currentStat.label}`}
      </p>
    </div>
  );
};

export default AnimatedCounter;
