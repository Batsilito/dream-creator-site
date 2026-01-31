import { useState, useEffect } from "react";

// Same target date as CountdownTimer
const TARGET_DATE = new Date("2026-02-01T23:59:59").getTime();

const calculateTimeLeft = () => {
  const now = new Date().getTime();
  const difference = TARGET_DATE - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
};

const OfferBanner = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  // Calculate total hours including days
  const totalHours = timeLeft.days * 24 + timeLeft.hours;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-2 text-sm lg:text-base flex-wrap">
          <span className="text-foreground">خصم</span>
          <span className="text-primary font-bold text-lg lg:text-xl">%33</span>
          <span className="text-foreground">على الكورس لأول</span>
          <span className="text-primary font-bold">100 طالب</span>
          <span className="text-muted-foreground mx-1 lg:mx-2">—</span>
          <span className="text-foreground">ينتهي خلال</span>
          <div
            className="inline-flex items-center bg-background/80 rounded-lg px-3 py-1 border border-border font-mono text-foreground"
            dir="ltr"
          >
            <span>{formatTime(totalHours)}</span>
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
