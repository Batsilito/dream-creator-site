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
          <h2 className="text-4xl font-bold">
            الكورس مناسب لـ<span className="text-gradient-gold">كل المستويات</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            سواء كنت مبتدئ أو متوسط، الكورس مصمم خصيصاً علشان يساعدك تحقق أهدافك
          </p>
        </div>

      </div>
    </section>
  );
};

export default TargetAudienceSection;
