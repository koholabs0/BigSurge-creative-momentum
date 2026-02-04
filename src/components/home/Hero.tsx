import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    number: "01",
    title: "Creative Strategy",
    description: "Strategic direction and messaging"
  },
  {
    number: "02",
    title: "Brand Identity Design",
    description: "Visual system and brand guidelines"
  },
  {
    number: "03",
    title: "Content Creation",
    description: "Stories that resonate and convert"
  },
  {
    number: "04",
    title: "Creative Direction",
    description: "End-to-end vision and execution"
  }
];

export function Hero() {
  return (
    <>
      {/* Main Hero Section - Full Screen Portrait */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-primary/10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
            {/* Left Content */}
            <div className="flex flex-col justify-center py-20">
              <div className="animate-fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 w-fit">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Creative Director & Content Strategist
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  <span className="text-foreground">Adesoji</span>
                  <br />
                  <span className="text-foreground">Adenuga</span>
                  <br />
                  <span className="text-gradient">(BigSurge ⚡)</span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
                  I design creative systems that turn culture, narrative, and technology into momentum.
                  From content strategy to live events, I help brands and creators grow.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
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
                    className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10"
                  >
                    <Link to="/work">View Selected Work</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side - Professional Portrait */}
            <div className="relative animate-fade-up-delay-1 h-full hidden lg:flex items-center justify-center">
              {/* Decorative background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl" />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

              {/* Main Portrait Container */}
              <div className="relative w-full max-w-md aspect-[9/12] rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F220ee1b1b6f947f8927cae362eba3127%2F647df20904654f439eab76655495d221"
                  alt="Adesoji Adenuga - BigSurge Creative Director"
                  className="w-full h-full object-cover"
                />

                {/* Shine Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                {/* Floating Badge - Bottom Left */}
                <div className="absolute bottom-8 left-8 bg-card/95 backdrop-blur-sm border border-primary/30 rounded-xl px-6 py-4 animate-float">
                  <p className="text-sm font-bold text-foreground">Shot with Google Studio AI</p>
                  <p className="text-xs text-muted-foreground">Professional Portrait • 2026</p>
                </div>
              </div>
            </div>

            {/* Mobile Portrait - Optimized for smaller screens */}
            <div className="lg:hidden relative animate-fade-up-delay-1 w-full max-w-sm mx-auto mt-8">
              <div className="relative w-full aspect-[9/12] rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F220ee1b1b6f947f8927cae362eba3127%2F647df20904654f439eab76655495d221"
                  alt="Adesoji Adenuga - BigSurge Creative Director"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.number}
                className="animate-fade-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-full p-6 rounded-xl bg-background border border-border hover:border-primary hover:shadow-glow transition-all duration-300 cursor-pointer">
                  <p className="text-4xl font-bold text-primary mb-4">{service.number}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to create <span className="text-gradient">something amazing?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need strategic direction, visual identity, or full creative production, let's collaborate on your next big idea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-8 py-6"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10"
              >
                <Link to="/work">See My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
