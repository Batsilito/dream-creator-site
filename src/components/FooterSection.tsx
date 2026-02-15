import { Button } from "@/components/ui/button";

const FooterSection = () => {
  const scrollToPricing = () => {
    const isMobile = window.innerWidth < 1024;
    const targetId = isMobile ? "courses-mobile" : "courses-desktop";
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-8 lg:py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 lg:gap-6 text-center">
          <a href="#" className="text-xl lg:text-2xl font-bold">
            Bassam<span className="text-gradient-gold">TalksAI</span>
          </a>
          
          <p className="text-sm lg:text-base text-muted-foreground max-w-md">
            احترف صناعة المحتوى بالذكاء الاصطناعي وابدأ رحلتك في عالم الإبداع
          </p>
          
          <Button variant="gold" size="lg" onClick={scrollToPricing}>
            احجز مكانك الآن
          </Button>
          
          
          <p className="text-muted-foreground text-xs lg:text-sm">
            © 2026 BassamTalksAI. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;