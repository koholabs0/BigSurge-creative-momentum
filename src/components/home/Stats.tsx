import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "50+", label: "Projects Delivered", accent: "from-primary to-orange-500" },
  { value: "300%", label: "Avg. Engagement Growth", accent: "from-orange-500 to-amber-500" },
  { value: "20+", label: "Brands & Creators", accent: "from-amber-500 to-yellow-500" },
  { value: "5+", label: "Years Experience", accent: "from-yellow-500 to-primary" },
];

export function Stats() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="py-10 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Editorial Stats Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90">
          {/* Animated grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(hsl(var(--background)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          <div className="relative z-10 py-16 sm:py-20 px-6 sm:px-12">
            {/* Section Header */}
            <div
              className={`text-center mb-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">The Numbers</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background">
                Results That Speak
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`relative group text-center p-6 rounded-2xl bg-background/5 backdrop-blur-sm border border-background/10 hover:bg-background/10 transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Accent line */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-gradient-to-r ${stat.accent}`} />
                  
                  <div className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-background/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Curved top edge */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-background" style={{
            borderBottomLeftRadius: '1.5rem',
            borderBottomRightRadius: '1.5rem',
          }} />
        </div>
      </div>
    </section>
  );
}
