import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingSectionProps {
  onBookingClick: () => void;
  sectionId?: string;
}

const PricingSection = ({ onBookingClick, sectionId = "courses" }: PricingSectionProps) => {
  const [isEgypt, setIsEgypt] = useState(true);

  const plans = [
    {
      name: "كورس أونلاين مُسجل",
      description: "متاح في أي وقت - بعد الاشتراك يتم استلام رابط الكورس عالإيميل",
      priceEGP: { original: 4000, discounted: 1500 },
      priceUSD: { original: 100, discounted: 40 },
      features: ["الوصول للمحتوى المسجل", "تواصل مباشر للأسئلة", "ميتنج متابعة اسبوعي", "شهادة إتمام"],
      popular: true,
    },
    {
      name: "كورس أونلاين حضوري",
      description: "جلسات حية مباشرة من خلال Google Meets",
      priceEGP: { original: 6000, discounted: 2500 },
      priceUSD: { original: 200, discounted: 80 },
      features: [
        "الوصول للمحتوى المسجل",
        "تواصل مباشر للأسئلة",
        "جلسات حية تفاعلية",
        "متابعة شخصية مكثفة",
      ],
      popular: false,
    },
  ];

  const currency = isEgypt ? "EGP" : "USD";

  return (
    <section id={sectionId || undefined} className="py-12 lg:py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12 space-y-3 lg:space-y-4">
          <h2 className="text-2xl lg:text-4xl font-bold">اختر خطتك</h2>
          <p className="text-sm lg:text-base text-muted-foreground">كورس مًسجل أو حضوري</p>
          
          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-2 mt-4 lg:mt-6">
            <button
              onClick={() => setIsEgypt(true)}
              className={`px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all ${
                isEgypt
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              🇪🇬 داخل مصر
            </button>
            <button
              onClick={() => setIsEgypt(false)}
              className={`px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all ${
                !isEgypt
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              🌍 خارج مصر
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:gap-8 max-w-4xl mx-auto items-stretch">
          {plans.map((plan) => {
            const price = isEgypt ? plan.priceEGP : plan.priceUSD;
            
            return (
              <div
                key={plan.name}
                className={`relative bg-card border rounded-2xl p-6 lg:p-8 flex flex-col transition-all hover:scale-105 hover:border-primary/50 ${
                  plan.popular
                    ? "border-primary"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 right-6 bg-gradient-gold text-primary-foreground px-3 lg:px-4 py-1 rounded-full text-xs lg:text-sm font-medium">
                    الأكثر شعبية
                  </div>
                )}

                <div className="mb-4 lg:mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold">{plan.name}</h3>
                  <p className="text-sm lg:text-base text-muted-foreground">{plan.description}</p>
                </div>

                <div className="space-y-1 lg:space-y-2 mb-4 lg:mb-6">
                  <p className="text-muted-foreground line-through text-base lg:text-lg">
                    {price.original} {currency}
                  </p>
                  <p className="flex items-baseline gap-2">
                    <span className="text-3xl lg:text-4xl font-bold text-gradient-gold">
                      {price.discounted}
                    </span>
                    <span className="text-muted-foreground text-sm lg:text-base">{currency}</span>
                    <span className="text-destructive text-xs lg:text-sm font-medium">
                      خصم 33%!
                    </span>
                  </p>
                </div>

                <ul className="space-y-2 lg:space-y-3 flex-grow mb-4 lg:mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 lg:gap-3">
                      <Check className="w-4 h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0" />
                      <span className="text-sm lg:text-base text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="gold"
                  size="lg"
                  className="w-full"
                  onClick={onBookingClick}
                >
                  احجز مكانك الآن
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;