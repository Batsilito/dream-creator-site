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
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <img
                src={heroImage}
                alt="مدرب الدورة"
                className="relative z-10 w-full max-w-md aspect-[3/4] rounded-3xl glow-gold-strong object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
