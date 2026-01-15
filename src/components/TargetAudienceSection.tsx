import { Briefcase, Video, Lightbulb, Camera, Shirt, TrendingUp } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    title: "صاحب براند",
    description: "حابب ينفذ ابداعته وتخيله لشغله بنفسه عن طريق صناعة الإعلانات التسويقية",
  },
  {
    icon: Video,
    title: "صانع محتوى",
    description: "حابب تعمل محتوي كامل بالذكاء الاصطناعي",
  },
  {
    icon: Lightbulb,
    title: "شخص مبدع",
    description: "عنده افكار ومش عارف توظف الأدوات في تنفيذ افكارك في عالم الذكاء الاصطناعي",
  },
  {
    icon: Camera,
    title: "فوتوغرافر",
    description: "حابب تدمج شغلك بالذكاء الاصطناعي",
  },
  {
    icon: Shirt,
    title: "صاحب براند ملابس",
    description: "عايز توفر لنفسك (مودلز-لوكيشن-اضاءة) تقدر تنفذ شغلك بالذكاء الاصطناعي",
  },
  {
    icon: TrendingUp,
    title: "مستثمر في نفسه",
    description: "حابب يستثمر في نفسه عن طريق يتعلم مجال جديد مليان بالابداع والتفكير",
  },
];

const TargetAudienceSection = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <p className="text-primary font-medium">الكورس ده لمين؟</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            الكورس مناسب لـ<span className="text-gradient-gold">كل المستويات</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            سواء كنت مبتدئ أو متوسط، الكورس مصمم خصيصاً علشان يساعدك تحقق أهدافك
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-2xl p-6 space-y-4 transition-all hover:border-primary/50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
