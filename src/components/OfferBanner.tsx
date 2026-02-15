import { useState, useEffect } from "react";

const FORTY_EIGHT_HOURS = 48 * 60 * 60 * 1000;
const STORAGE_KEY = "offer_end_time";

const getTargetDate = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return parseInt(stored, 10);
  }
  const endTime = Date.now() + FORTY_EIGHT_HOURS;
  localStorage.setItem(STORAGE_KEY, endTime.toString());
  return endTime;
};

const calculateTimeLeft = (targetDate: number) => {
  const now = Date.now();
  const difference = targetDate - now;

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
  const [targetDate] = useState(() => getTargetDate());
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const playRingSound = () => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const playTone = (freq: number, start: number, duration: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.3, ctx.currentTime + start);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + start + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + start);
        osc.stop(ctx.currentTime + start + duration);
      };
      playTone(800, 0, 0.15);
      playTone(1000, 0.18, 0.15);
      playTone(1200, 0.36, 0.2);
    } catch (e) {}
  };

  // Play sound when notification becomes visible
  useEffect(() => {
    if (showNotification) {
      playRingSound();
      const hideTimeout = setTimeout(() => setShowNotification(false), 5000);
      return () => clearTimeout(hideTimeout);
    }
  }, [showNotification]);

  // Show notification every 60 seconds, starting after 1 minute
  useEffect(() => {
    const show = () => setShowNotification(true);
    const firstShowTimeout = setTimeout(show, 60000);
    const notificationInterval = setInterval(show, 60000);

    return () => {
      clearTimeout(firstShowTimeout);
      clearInterval(notificationInterval);
    };
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  // Calculate total hours including days
  const totalHours = timeLeft.days * 24 + timeLeft.hours;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* New student notification */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          showNotification ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-r from-amber-600 via-primary to-amber-600 border-b-2 border-amber-700/50">
          <div className="container mx-auto px-4 py-2.5">
            <p className="text-center text-primary-foreground font-bold text-sm lg:text-base">
              🎉 انضم طالب جديد للكورس الآن
            </p>
          </div>
        </div>
      </div>

      {/* Discount banner */}
      <div className="bg-secondary/95 backdrop-blur-sm border-b border-border">
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
    </div>
  );
};

export default OfferBanner;
