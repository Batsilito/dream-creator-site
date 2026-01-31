import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToPricing = () => {
    const isMobile = window.innerWidth < 1024;
    const targetId = isMobile ? "courses-mobile" : "courses-desktop";
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-12 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-3 lg:py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 lg:gap-8">
          <a href="#" className="text-lg lg:text-xl font-bold text-foreground">
            Bassam<span className="text-gradient-gold">TalksAI</span>
          </a>
          {/* Desktop nav links - hidden on mobile since those sections are hidden */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#course-content" className="text-muted-foreground hover:text-foreground transition-colors">
              محتوى الكورس
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              من نحن
            </a>
          </div>
        </div>
        <Button variant="gold" size="sm" onClick={scrollToPricing} className="hidden lg:inline-flex">
          احجز الآن
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;