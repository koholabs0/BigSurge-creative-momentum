import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import animePhoto from "@/assets/adesoji-anime.png";
import realPhoto from "@/assets/adesoji-photo.png";

export default function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const workWith = [
    "Brands looking to break through the noise",
    "Creators ready to scale their impact",
    "Startups building their narrative",
    "Organizations planning impactful events",
    "Agencies seeking creative direction",
  ];

  const howIWork = [
    { title: "Strategy First", description: "Every project starts with understanding your goals, audience, and constraints." },
    { title: "Systems Thinking", description: "I build repeatable creative systems, not one-off solutions." },
    { title: "Culture-Driven", description: "The best creative work is rooted in genuine cultural understanding." },
    { title: "Results-Focused", description: "Beautiful work means nothing without measurable impact." },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-hero">
        <div ref={ref} className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 transition-all duration-700 neon-border ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <Zap className="w-4 h-4" />
                About BigSurge
              </div>

              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Hi, I'm <span className="text-gradient glitch" data-text="Adesoji Adenuga">Adesoji Adenuga</span>
              </h1>

              <p
                className={`text-lg text-muted-foreground mb-6 leading-relaxed transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                I'm a Lagos-based Creative Director and Content Strategist working at the intersection 
                of storytelling, strategy, and culture. For over 5 years, I've helped brands and 
                creators build narratives that resonate and systems that scale.
              </p>

              <p
                className={`text-lg text-muted-foreground mb-8 leading-relaxed transition-all duration-700 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                My work spans content strategy, digital marketing, video production, and event 
                activations. I'm passionate about proving that African creativity isn't just 
                competing on the global stage—it's defining it.
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 shadow-glow neon-border"
                >
                  <Link to="/contact">
                    Let's Work Together
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:border-primary transition-colors">
                  <Link to="/work">View My Work</Link>
                </Button>
              </div>
            </div>

            {/* Profile Images with Swap Effect */}
            <div
              className={`relative flex justify-center lg:justify-end transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <div className="relative">
                {/* Main photo with swap effect */}
                <div className="aspect-[4/5] w-72 sm:w-80 rounded-2xl overflow-hidden shadow-glow border-2 border-primary/30 photo-swap cursor-pointer cyber-corners scanlines">
                  <img
                    src={realPhoto}
                    alt="Adesoji Adenuga - Creative Director"
                    className="photo-real object-top"
                  />
                  <img
                    src={animePhoto}
                    alt="BigSurge Anime"
                    className="photo-anime"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none z-20" />
                </div>
                
                {/* Anime avatar floating card with neon border */}
                <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-2xl overflow-hidden bg-card border-4 border-background shadow-card animate-float neon-border">
                  <img
                    src={animePhoto}
                    alt="BigSurge Anime Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Experience badge with glitch */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-card border border-border p-3 shadow-card flex flex-col items-center justify-center animate-glow-pulse">
                  <div className="text-2xl font-bold text-gradient glitch" data-text="5+">5+</div>
                  <div className="text-xs text-muted-foreground text-center">Years Experience</div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-1/4 -right-6 w-2 h-2 rounded-full bg-primary animate-float" style={{ animationDelay: "0.5s" }} />
                <div className="absolute bottom-1/3 -left-10 w-3 h-3 rounded-full bg-primary/60 animate-float" style={{ animationDelay: "1.2s" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            How I Work
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howIWork.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-card border border-border hover-lift"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Who I Work With
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                I partner with ambitious teams and individuals who believe in the power 
                of creative excellence to drive real results.
              </p>
              <ul className="space-y-4">
                {workWith.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center">
                <span className="text-6xl">🎯</span>
              </div>
              <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center mt-8">
                <span className="text-6xl">🚀</span>
              </div>
              <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center -mt-8">
                <span className="text-6xl">💡</span>
              </div>
              <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center">
                <span className="text-6xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Whether you have a clear vision or just a spark of an idea, 
            I'd love to hear from you.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary hover:opacity-90 shadow-glow animate-glow-pulse"
          >
            <Link to="/contact">
              Book a Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
