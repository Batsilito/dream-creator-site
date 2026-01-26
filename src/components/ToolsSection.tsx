const tools = [
  { name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png" },
  { name: "Veo 3", logo: "https://static-00.iconduck.com/assets.00/google-icon-512x512-6z2b8wpe.png" },
  { name: "Sora 2", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png" },
  { name: "Midjourney", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png" },
  { name: "Runway", logo: "https://images.seeklogo.com/logo-png/52/1/runway-ml-logo-png_seeklogo-522738.png" },
  { name: "Kling", logo: "https://framerusercontent.com/images/vNO8tU3CiEYcBvBLkcVfHh8fQ.png" },
  { name: "Gemini", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/2560px-Google_Gemini_logo.svg.png" },
  { name: "Flux", logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/flux.png" },
  { name: "Ideogram", logo: "https://ideogram.ai/ideogram-logo.svg" },
  { name: "Freepik", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Freepik_logo.svg/1280px-Freepik_logo.svg.png" },
  { name: "Google AI Studio", logo: "https://static-00.iconduck.com/assets.00/google-icon-512x512-6z2b8wpe.png" },
  { name: "Wan", logo: "https://framerusercontent.com/images/vNO8tU3CiEYcBvBLkcVfHh8fQ.png" },
];

const ToolsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <p className="text-primary font-medium">أدوات احترافية</p>
          <h2 className="text-4xl font-bold">
            أدوات <span className="text-gradient-gold">AI</span> هتتعلمها
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            جميع الأدوات اللي هتحتاجها لتبدأ رحلتك في عالم الذكاء الاصطناعي
          </p>
        </div>

        <div className="grid grid-cols-6 gap-6 max-w-4xl mx-auto">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-8 h-8 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
