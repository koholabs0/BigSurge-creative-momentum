import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Philosophy() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="py-12 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase">Philosophy</p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6 sm:mb-8">
              Creative Work Should{" "}
              <span className="bg-gradient-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Move People
              </span>
            </h2>

            {/* Decorative element */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Lagos to the World</p>
                <p className="text-sm text-muted-foreground">African creativity defining the global stage</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div
            className={`lg:pt-8 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed mb-6">
              I believe the best creative work doesn't just capture attention—it creates momentum.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every project I take on is an opportunity to build systems that amplify human connection, 
              tell stories that matter, and create experiences people remember.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 rounded-full text-base px-6 py-6 font-medium group"
              >
                <Link to="/about">
                  Learn More About Me
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
