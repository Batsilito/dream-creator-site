import { Button } from "@/components/ui/button";
import AnimatedCounter from "./AnimatedCounter";
 
interface HeroSectionProps {
  onBookingClick: () => void;
}

const HeroSection = ({ onBookingClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-0 lg:min-h-screen pt-20 lg:pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Single column layout, centered */}
        <div className="flex flex-col items-center justify-center lg:min-h-[80vh]">
          
          <div className="lg:hidden space-y-4 text-center animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              كورس صناعة الفيديوهات{" "}
              <span className="text-gradient-gold">والإعلانات بالذكاء الاصطناعي</span>
            </h1>
            <p className="text-base sm:text-lg text-foreground/90">
              كورس عملي يأخذك من الأساسيات إلى أول فيديو ليك بخطوات بسيطة وواضحة.
            </p>
            
            <AnimatedCounter target={500} label="مشترك في الكورس" className="justify-center mx-auto" />
            
            <Button 
              variant="gold" 
              size="lg" 
              className="animate-pulse-glow w-full max-w-xs"
              onClick={() => document.getElementById('courses-mobile')?.scrollIntoView({ behavior: 'smooth' })}
            >
              احجز مكانك الآن
            </Button>
          </div>

          {/* Desktop: Full content - centered */}
          <div className="hidden lg:flex flex-col items-center text-center space-y-8 animate-fade-in-up max-w-4xl">
            <div>
              <h1 className="text-6xl font-bold leading-tight">
                كورس صناعة الفيديوهات{" "}
                <span className="text-gradient-gold">والإعلانات بالذكاء الاصطناعي</span>
              </h1>
              <p className="text-xl text-foreground/90 mt-4">
                كورس عملي يأخذك من الأساسيات إلى أول فيديو ليك بخطوات بسيطة وواضحة.
              </p>
            </div>
            
            <AnimatedCounter target={500} label="مشترك في الكورس" className="justify-center" />
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              انضمّ إلى متعلمين حوّلوا أفكارهم إلى صور وفيديوهات وإعلانات
              <br />
              باستخدام الذكاء الاصطناعي.
            </p>

            <Button 
              variant="gold" 
              size="xl" 
              className="animate-pulse-glow"
              onClick={() => document.getElementById('courses-desktop')?.scrollIntoView({ behavior: 'smooth' })}
            >
              احجز مكانك الآن
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;