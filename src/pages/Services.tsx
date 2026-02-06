import { Link } from "react-router-dom";
import { ArrowRight, Compass, Target, TrendingUp, Calendar, Sparkles, Code, Share2, Video } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  compass: Compass,
  target: Target,
  "trending-up": TrendingUp,
  calendar: Calendar,
  code: Code,
  "share-2": Share2,
  video: Video,
};

export default function Services() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <Layout>
      <section className="py-16 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Editorial Header Card */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 mb-12">
            {/* Animated grid overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `linear-gradient(hsl(var(--background)) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />

            {/* Gradient orb */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-primary/20 via-orange-500/15 to-amber-500/20 rounded-full blur-3xl" />

            <div ref={ref} className="relative z-10 py-16 sm:py-20 px-6 sm:px-12">
              <div className="grid lg:grid-cols-2 gap-8 items-end">
                <div>
                  <p
                    className={`text-primary font-medium mb-3 text-sm tracking-wide uppercase transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    What I Offer
                  </p>
                  <h1
                    className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-background leading-[1.1] transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    Creative Strategy
                    <br />
                    & Consulting
                  </h1>
                </div>
                <div
                  className={`lg:text-right transition-all duration-700 delay-100 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <p className="text-lg text-background/70 max-w-md lg:ml-auto">
                    Creative strategy, content consulting, digital campaigns, and event design services 
                    for brands, creators, and organizations.
                  </p>
                </div>
              </div>
            </div>

            {/* Curved bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-background" style={{
              borderTopLeftRadius: '1.5rem',
              borderTopRightRadius: '1.5rem',
            }} />

            {/* Curved top edge */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-background" style={{
              borderBottomLeftRadius: '1.5rem',
              borderBottomRightRadius: '1.5rem',
            }} />
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Compass;
              return (
                <div
                  key={service.title}
                  className={`group relative p-8 rounded-3xl bg-card border border-border transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  {/* Service number */}
                  <span className="absolute top-6 right-6 text-xs font-mono text-primary">
                    #{String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-orange-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Card */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/90 via-primary/70 to-orange-600/80">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

            <div className="relative z-10 py-16 px-6 sm:px-12 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Let's have a conversation. I'll help you identify the right approach 
                for your goals and create a custom plan that works.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 rounded-full text-base px-8 py-6 font-medium group"
              >
                <Link to="/contact">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
