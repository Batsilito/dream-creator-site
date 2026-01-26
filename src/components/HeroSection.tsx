import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import AnimatedCounter from "./AnimatedCounter";
import heroImage from "@/assets/hero-instructor.jpg";
 
 interface HeroSectionProps {
   onBookingClick: () => void;
 }
 
 const HeroSection = ({ onBookingClick }: HeroSectionProps) => {
   return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Heading Group */}
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

            {/* Countdown */}
            <CountdownTimer />

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="gold" 
                size="xl" 
                className="animate-pulse-glow"
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              >
                احجز مكانك الآن
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex flex-col items-end gap-6">
            {/* Instructor Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <img
                src={heroImage}
                alt="مدرب الدورة"
                className="relative z-10 w-full max-w-[22rem] aspect-[3/4] rounded-3xl glow-gold-strong object-cover object-[48%_top]"
              />
            </div>
            {/* Instructor Bio */}
            <div className="text-right max-w-[22rem]">
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
