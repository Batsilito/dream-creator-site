import { useState, useEffect } from "react";

// Fixed end date: 7 days from first deployment (set a specific date)
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

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-card border border-border rounded-xl px-4 py-3 min-w-[70px]">
        <span className="text-3xl font-bold text-foreground">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-sm text-muted-foreground mt-2">{label}</span>
    </div>
  );

  return (
    <div className="bg-card/50 border border-border rounded-2xl p-6 space-y-4 backdrop-blur-sm">
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <TimeBox value={timeLeft.seconds} label="ثانية" />
        <span className="text-2xl text-muted-foreground">:</span>
        <TimeBox value={timeLeft.minutes} label="دقيقة" />
        <span className="text-2xl text-muted-foreground">:</span>
        <TimeBox value={timeLeft.hours} label="ساعة" />
        <span className="text-2xl text-muted-foreground">:</span>
        <TimeBox value={timeLeft.days} label="يوم" />
      </div>
      
      <div className="flex items-center justify-center gap-4">
        <span className="bg-destructive/20 text-destructive px-3 py-1 rounded-full text-sm font-medium">
          خصم محدود!
        </span>
        <span className="text-gradient-gold font-bold text-xl">33% خصم</span>
        <span className="text-muted-foreground text-sm">العرض ينتهي قريباً</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
