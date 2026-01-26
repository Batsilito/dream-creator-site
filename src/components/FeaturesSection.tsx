import { 
  ImageIcon, 
  Sparkles, 
  Film, 
  Megaphone, 
  Play, 
  Mic2, 
  Music, 
  ArrowUpCircle, 
  Clapperboard, 
  Layout,
  TrendingUp,
  MessageSquare
} from "lucide-react";

const features = [
  {
    icon: ImageIcon,
    title: "AI Image Creation",
    description: "تعلّم كيف تنشئ صورًا احترافية بالذكاء الاصطناعي وتدمج الأشخاص أو المنتجات في مشاهد واقعية.",
  },
  {
    icon: Sparkles,
    title: "Prompt Mastery",
    description: "تعلّم كتابة برومبتات احترافية للحصول على أفضل نتائج من أدوات الذكاء الاصطناعي.",
  },
  {
    icon: Film,
    title: "AI Video Generation",
    description: "حوّل النصوص والصور إلى فيديوهات سينمائية باستخدام أدوات الذكاء الاصطناعي.",
  },
  {
    icon: Megaphone,
    title: "AI Advertising",
    description: "تعلّم كيف تصنع إعلانات احترافية جاهزة للنشر على السوشيال ميديا.",
  },
  {
    icon: Play,
    title: "Animation with AI",
    description: "تعلّم تحريك الصور الثابتة وصناعة مشاهد ديناميكية بالذكاء الاصطناعي.",
  },
  {
    icon: MessageSquare,
    title: "Lip Sync",
    description: "تعلّم مزامنة الشفاه مع الصوت لصور وفيديوهات بطريقة احترافية.",
  },
  {
    icon: Mic2,
    title: "Voice Over with AI",
    description: "أنشئ تعليقًا صوتيًا احترافيًا وغيّر الأصوات باستخدام الذكاء الاصطناعي.",
  },
  {
    icon: Music,
    title: "Sound & Music with AI",
    description: "أنشئ موسيقى خلفية ومؤثرات صوتية مناسبة لفيديوهاتك.",
  },
  {
    icon: ArrowUpCircle,
    title: "AI Upscaling",
    description: "ارفع جودة الصور والفيديوهات لتصبح مناسبة للنشر الاحترافي.",
  },
  {
    icon: Clapperboard,
    title: "Video Editing",
    description: "تعلّم المونتاج النهائي وتجهيز الفيديوهات للنشر على السوشيال ميديا.",
  },
  {
    icon: Layout,
    title: "Storyboard & Project",
    description: "تعلّم تخطيط الفيديو خطوة بخطوة وتنفيذ مشروع كامل من الفكرة للنشر.",
  },
  {
    icon: TrendingUp,
    title: "AI Trends",
    description: "تعلّم كيف تصنع محتوى تريندي وتدمج الذكاء الاصطناعي مع التريندات.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="course-content" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            هاتتعلم ايه في كورس الـ{" "}
            <span className="text-gradient-gold">AI Content Creation</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card border border-border rounded-2xl p-6 space-y-4 transition-all hover:border-primary/50 hover:bg-card/80"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
