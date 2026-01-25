import { Button } from "@/components/ui/button";

const FooterSection = () => {
  const scrollToPricing = () => {
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#" className="text-2xl font-bold">
            Bassam<span className="text-gradient-gold">TalksAI</span>
          </a>
          
          <p className="text-muted-foreground max-w-md">
            احترف صناعة المحتوى بالذكاء الاصطناعي وابدأ رحلتك في عالم الإبداع
          </p>
          
          <Button variant="gold" size="lg" onClick={scrollToPricing}>
            احجز مكانك الآن
          </Button>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              الشروط والأحكام
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              تواصل معنا
            </a>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © 2025 BassamTalksAI. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
