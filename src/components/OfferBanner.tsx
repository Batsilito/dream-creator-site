import { useState, useEffect } from "react";

const OfferBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 58,
    seconds: 4,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds =
          prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;

        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-2 text-sm lg:text-base">
          <span className="text-foreground">خصم</span>
          <span className="text-primary font-bold text-lg lg:text-xl">%33</span>
          <span className="text-foreground">على الكورس لأول</span>
          <span className="text-primary font-bold">100 طالب</span>
          <span className="text-muted-foreground mx-2">—</span>
          <span className="text-foreground">ينتهي خلال</span>
          <div
            className="inline-flex items-center bg-background/80 rounded-lg px-3 py-1 border border-border font-mono text-foreground"
            dir="ltr"
          >
            <span>{formatTime(timeLeft.hours)}</span>
            <span className="text-primary mx-1">:</span>
            <span>{formatTime(timeLeft.minutes)}</span>
            <span className="text-primary mx-1">:</span>
            <span>{formatTime(timeLeft.seconds)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
