import { Link } from "react-router-dom";
import { ArrowRight, Compass, Target, TrendingUp, Calendar } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  compass: Compass,
  target: Target,
  "trending-up": TrendingUp,
  calendar: Calendar,
};

export default function Services() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <Layout>
      <section className="py-24 bg-background min-h-screen">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div ref={ref} className="mb-16 text-center max-w-3xl mx-auto">
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Creative Strategy & <span className="text-gradient">Consulting Services</span>
            </h1>
            <p
              className={`text-lg sm:text-xl text-muted-foreground transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Creative strategy, content consulting, digital campaigns, and event design services 
              for brands, creators, and organizations in Nigeria and beyond.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Compass;
              return (
                <div
                  key={service.title}
                  className={`group p-8 rounded-2xl bg-card border border-border hover-lift transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's have a conversation. I'll help you identify the right approach 
              for your goals and create a custom plan that works.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 shadow-glow"
            >
              <Link to="/contact">
                Book a Free Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
