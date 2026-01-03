import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Creative Director & Content Strategist
          </div>

          {/* Name */}
          <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Adesoji Adenuga</span>
            <br />
            <span className="text-gradient">(BigSurge ⚡)</span>
          </h1>

          {/* Title */}
          <h2 className="animate-fade-up-delay-2 text-xl sm:text-2xl lg:text-3xl font-medium text-foreground/90 mb-6">
            Creative Director & Strategic Content Architect in Lagos
          </h2>

          {/* Subtitle */}
          <p className="animate-fade-up-delay-3 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            I design creative systems that turn culture, narrative, and technology into momentum. 
            From content strategy to live events, I help brands and creators grow.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-8 py-6"
            >
              <Link to="/contact">
                Book a Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2"
            >
              <Link to="/work">View Selected Work</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
