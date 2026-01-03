import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Philosophy() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Creative Work Should{" "}
            <span className="text-gradient">Move People</span>
          </h2>

          <p
            className={`text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            I believe the best creative work doesn't just capture attention—it creates momentum. 
            Every project I take on is an opportunity to build systems that amplify human connection, 
            tell stories that matter, and create experiences people remember.
          </p>

          <p
            className={`text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            From Lagos to the world, I'm on a mission to prove that African creativity 
            isn't just competing on the global stage—it's defining it.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 shadow-glow"
            >
              <Link to="/about">
                Learn More About Me
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
