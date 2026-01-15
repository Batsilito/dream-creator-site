import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 23,
    minutes: 59,
    seconds: 54,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
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
