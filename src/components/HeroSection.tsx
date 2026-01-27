import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import AnimatedCounter from "./AnimatedCounter";
import heroImage from "@/assets/hero-instructor.jpg";
 
interface HeroSectionProps {
  onBookingClick: () => void;
}

const HeroSection = ({ onBookingClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-0 lg:min-h-screen pt-20 lg:pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Desktop: 2 columns, Mobile: single column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:min-h-[80vh]">
          
          <div className="lg:hidden space-y-4 text-center animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              كورس صناعة الفيديوهات{" "}
              <span className="text-gradient-gold">والإعلانات بالذكاء الاصطناعي</span>
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-foreground">
              من الصفر للاحتراف
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

          {/* Desktop: Full content */}
          <div className="hidden lg:block space-y-8 animate-fade-in-up">
            <div>
              <h1 className="text-6xl font-bold leading-tight">
                كورس صناعة الفيديوهات{" "}
                <span className="text-gradient-gold">والإعلانات بالذكاء الاصطناعي</span>
              </h1>
              <p className="text-5xl font-bold text-foreground">
                من الصفر للاحتراف
              </p>
            </div>
            
            <AnimatedCounter target={500} label="مشترك في الكورس" />
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              انضمّ إلى متعلمين حوّلوا أفكارهم إلى صور وفيديوهات وإعلانات
              <br />
              باستخدام الذكاء الاصطناعي.
            </p>

            <CountdownTimer />

            <div className="flex flex-row gap-4">
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

          {/* Hero Image - Desktop only */}
          <div className="hidden lg:flex relative flex-col items-end gap-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <img
                src={heroImage}
                alt="مدرب الدورة"
                className="relative z-10 w-full max-w-[22rem] aspect-[3/4] rounded-3xl glow-gold-strong object-cover object-[48%_top]"
              />
            </div>
            <div className="text-center max-w-[22rem]">
              <h3 className="text-5xl font-bold text-gradient-gold mb-3">
                بسام إيهاب
              </h3>
              <p className="text-base text-primary font-medium mb-2">
                خبير الذكاء الاصطناعي وصناعة المحتوى
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                متخصص في تحويل أدوات الذكاء الاصطناعي إلى صور، فيديوهات، ومشاريع إبداعية قابلة للتطبيق في الإعلانات والسوشيال ميديا.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;