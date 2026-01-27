import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingSectionProps {
  onBookingClick: () => void;
}

const PricingSection = ({ onBookingClick }: PricingSectionProps) => {
  const [isEgypt, setIsEgypt] = useState(true);

  const plans = [
    {
      name: "كورس أونلاين مُسجل",
      description: "متاح في أي وقت",
      priceEGP: { original: 1500, discounted: 1000 },
      priceUSD: { original: 60, discounted: 40 },
      features: ["الوصول للمحتوى المسجل", "تواصل مباشر للأسئلة", "شهادة إتمام"],
      popular: true,
    },
    {
      name: "كورس أونلاين حضوري",
      description: "جلسات حية مباشرة",
      priceEGP: { original: 3000, discounted: 2000 },
      priceUSD: { original: 120, discounted: 80 },
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
    <section id="courses" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold">اختر خطتك</h2>
          <p className="text-muted-foreground">خيارات مرنة تناسب احتياجاتك</p>
          
          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setIsEgypt(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isEgypt
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              🇪🇬 داخل مصر
            </button>
            <button
              onClick={() => setIsEgypt(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !isEgypt
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              🌍 خارج مصر
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {plans.map((plan) => {
            const price = isEgypt ? plan.priceEGP : plan.priceUSD;
            
            return (
              <div
                key={plan.name}
                className={`relative bg-card border rounded-2xl p-8 flex flex-col transition-all hover:scale-105 hover:border-primary/50 ${
                  plan.popular
                    ? "border-primary"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 right-6 bg-gradient-gold text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    الأكثر شعبية
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <div className="space-y-2 mb-6">
                  <p className="text-muted-foreground line-through text-lg">
                    {price.original} {currency}
                  </p>
                  <p className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gradient-gold">
                      {price.discounted}
                    </span>
                    <span className="text-muted-foreground">{currency}</span>
                    <span className="text-destructive text-sm font-medium">
                      خصم 33%!
                    </span>
                  </p>
                </div>

                <ul className="space-y-3 flex-grow mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{feature}</span>
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
