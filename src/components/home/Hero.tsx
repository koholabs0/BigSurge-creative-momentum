import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import animePhoto from "@/assets/adesoji-anime.jpg";
import realPhoto from "@/assets/adesoji-photo.jpeg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        {/* Anime-style grid lines */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(hsl(262, 83%, 58%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(262, 83%, 58%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 neon-border">
              <Sparkles className="w-4 h-4" />
              Creative Director & Content Strategist
            </div>

            {/* Name with Glitch Effect */}
            <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Adesoji Adenuga</span>
              <br />
              <span 
                className="text-gradient glitch inline-block"
                data-text="(BigSurge ⚡)"
              >
                (BigSurge ⚡)
              </span>
            </h1>

            {/* Title */}
            <h2 className="animate-fade-up-delay-2 text-lg sm:text-xl lg:text-2xl font-medium text-foreground/90 mb-6">
              Creative Director & Strategic Content Architect in Lagos
            </h2>

            {/* Subtitle */}
            <p className="animate-fade-up-delay-3 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10">
              I design creative systems that turn culture, narrative, and technology into momentum. 
              From content strategy to live events, I help brands and creators grow.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-8 py-6 neon-border"
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
                className="text-lg px-8 py-6 border-2 hover:border-primary transition-colors"
              >
                <Link to="/work">View Selected Work</Link>
              </Button>
            </div>
          </div>

          {/* Profile Images with Swap Effect */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-fade-up-delay-2">
              {/* Main photo with swap effect */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden shadow-glow border-2 border-primary/30 photo-swap cursor-pointer cyber-corners scanlines">
                <img
                  src={realPhoto}
                  alt="Adesoji Adenuga"
                  className="photo-real object-top"
                />
                <img
                  src={animePhoto}
                  alt="BigSurge Anime"
                  className="photo-anime"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none z-20" />
                
                {/* Hover hint */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/80 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity z-30">
                  Hover to reveal
                </div>
              </div>
              
              {/* Anime avatar floating card with neon border */}
              <div className="absolute -bottom-6 -left-6 w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-card border-4 border-background bg-card animate-float neon-border">
                <img
                  src={animePhoto}
                  alt="BigSurge Anime Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative badge with glitch */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-glow animate-glow-pulse glitch" data-text="Lagos ⚡">
                Lagos ⚡
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-1/4 -right-8 w-2 h-2 rounded-full bg-primary animate-float" style={{ animationDelay: "0.5s" }} />
              <div className="absolute bottom-1/3 -left-10 w-3 h-3 rounded-full bg-primary/60 animate-float" style={{ animationDelay: "1.2s" }} />
              <div className="absolute top-1/2 -right-12 w-1.5 h-1.5 rounded-full bg-primary/40 animate-float" style={{ animationDelay: "0.8s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
