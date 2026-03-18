import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="py-10 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Editorial CTA Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90">
          {/* Animated grid overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(hsl(var(--background)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          {/* Gradient orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-primary/30 via-orange-500/20 to-amber-500/30 rounded-full blur-3xl" />

          <div className="relative z-10 py-12 sm:py-28 px-4 sm:px-12">
            <div
              className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-500 mb-8 shadow-lg shadow-primary/30">
                <Zap className="w-8 h-8 text-white" />
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-background mb-4 sm:mb-6 leading-tight">
                Ready to Start a Project?
              </h2>

              {/* Description */}
              <p className="text-lg sm:text-xl text-background/70 mb-10 max-w-xl mx-auto">
                Whether you're launching a campaign, building a brand, or creating content that matters,
                I'd love to hear about your vision.
              </p>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 rounded-full text-base px-8 py-6 font-medium group shadow-lg shadow-primary/30 animate-glow-pulse"
              >
                <Link to="/contact">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              {/* Bottom tagline */}
              <p className="mt-8 text-sm text-background/50">
                Let's build something meaningful together
              </p>
            </div>
          </div>

          {/* Curved edges */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-background" style={{
            borderBottomLeftRadius: '1.5rem',
            borderBottomRightRadius: '1.5rem',
          }} />
        </div>
      </div>
    </section>
  );
}
