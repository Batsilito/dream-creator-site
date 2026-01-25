import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import heroImage from "@/assets/hero-instructor.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              احترف صناعه الإعلانات{" "}
              <span className="text-gradient-gold">والأفلام السينمائية</span>{" "}
              بالذكاء الاصطناعي{" "}
              <span className="text-muted-foreground">من الصفر للاحتراف</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              بعد مشاركة أكثر من 1500 جرافيك ديزاينر قدر إنه يحترف ويتأهل لسوق العمل حقيقي
              <br />
              ودى فرصتك انك تطور وتستثمر فى نفسك عشان تتاهل لسوق العمل
            </p>

            {/* Countdown */}
            <CountdownTimer />

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl" className="animate-pulse-glow">
                احجز مكانك الآن
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex flex-col items-center lg:items-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <img
                src={heroImage}
                alt="مدرب الدورة"
                className="relative z-10 w-full max-w-[22rem] aspect-[3/4] rounded-3xl glow-gold-strong object-cover object-[48%_top]"
              />
            </div>
            {/* Instructor Bio */}
            <div className="mt-6 text-center max-w-[22rem]">
              <h3 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-3">
                بسام إيهاب
              </h3>
              <p className="text-base text-primary font-medium mb-2">
                خبير الذكاء الاصطناعي وصناعة المحتوى - خبرة 3 سنوات
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
