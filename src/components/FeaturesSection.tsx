import { 
  Wand2, 
  Film, 
  Camera, 
  Video, 
  Sparkles, 
  Mic2, 
  Music, 
  MonitorPlay, 
  Clapperboard, 
  ImageIcon, 
  Palette,
  Layers
} from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "Prompt Engineering",
    description: "هتقدر تحترف جميع أدوات الذكاء الاصطناعي",
  },
  {
    icon: Film,
    title: "إعلانات تسويقية",
    description: "ازاي تعمل إعلانات تسويقية احترافية",
  },
  {
    icon: Palette,
    title: "أفلام كرتونية",
    description: "ازاي تعمل فيلم كرتوني كامل",
  },
  {
    icon: Camera,
    title: "AI Photoshoot",
    description: "ازاي تعمل جلسة تصوير بالذكاء الاصطناعي",
  },
  {
    icon: Sparkles,
    title: "CGI + VFX",
    description: "ازاي تعمل فيديوهات مؤثرات بصرية",
  },
  {
    icon: Video,
    title: "UGC Videos",
    description: "ازاي تعمل فيديوهات UGC",
  },
  {
    icon: Music,
    title: "Sound Design",
    description: "ازاي تعمل تصميم صوتي بالذكاء الاصطناعي",
  },
  {
    icon: Mic2,
    title: "Voice Over",
    description: "ازاي تعمل تعليق صوتي احترافي",
  },
  {
    icon: MonitorPlay,
    title: "Lip Sync",
    description: "ازاي تعمل مزامنة شفاه احترافية",
  },
  {
    icon: Layers,
    title: "Motion Capture",
    description: "ازاي تعمل التقاط حركة",
  },
  {
    icon: Clapperboard,
    title: "أفلام سينمائية",
    description: "ازاي تعمل فيلم سينمائي كامل",
  },
  {
    icon: ImageIcon,
    title: "صور AI",
    description: "كيفية صناعة الصور بالذكاء الاصطناعي",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
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
