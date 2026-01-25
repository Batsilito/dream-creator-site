import { Star } from "lucide-react";

const testimonials = [
  {
    name: "أحمد محمود",
    initial: "أ",
    rating: 5,
    text: "كورس ممتاز جداً، اتعلمت حاجات كتير مكنتش أعرفها عن الذكاء الاصطناعي وازاي أستخدمه في شغلي",
  },
  {
    name: "سارة علي",
    initial: "س",
    rating: 5,
    text: "المحتوى عملي جداً والمدرب بيشرح بطريقة سهلة ومفهومة، أنصح الكل يجربه",
  },
  {
    name: "محمد حسن",
    initial: "م",
    rating: 5,
    text: "الكورس غير طريقة شغلي تماماً، دلوقتي بقيت بعمل إعلانات احترافية في وقت قليل",
  },
  {
    name: "نورا أحمد",
    initial: "ن",
    rating: 5,
    text: "تجربة رائعة! الدعم والمتابعة كانوا ممتازين والمحتوى محدث بأحدث الأدوات",
  },
  {
    name: "يوسف عمر",
    initial: "ي",
    rating: 5,
    text: "استثمار حقيقي في نفسي، الكورس فتحلي أبواب كتير في مجال صناعة المحتوى",
  },
  {
    name: "هدى سامي",
    initial: "هـ",
    rating: 5,
    text: "من أفضل الكورسات اللي أخدتها، المعلومات عملية وتقدر تطبقها فوراً",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-[350px] bg-card border border-border rounded-2xl p-6 space-y-4">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
        <span className="text-primary font-bold text-lg">
          {testimonial.initial}
        </span>
      </div>
      <div>
        <p className="font-bold">{testimonial.name}</p>
        <div className="flex items-center gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-primary text-primary"
            />
          ))}
        </div>
      </div>
    </div>
    <p className="text-muted-foreground leading-relaxed">
      {testimonial.text}
    </p>
  </div>
);

const TestimonialsSection = () => {
  // Double the testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-card/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <p className="text-primary font-medium">آراء الطلاب</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            آراء الطلاب <span className="text-gradient-gold">والمتدربين</span>
          </h2>
          <p className="text-muted-foreground">شوف تجارب الطلاب اللي خلصوا الكورس</p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <span className="text-primary font-bold">+80</span>
            <span className="text-muted-foreground">تقييم من الطلاب</span>
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
