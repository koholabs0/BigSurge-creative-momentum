import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import realPhoto from "@/assets/adesoji-photo.jpeg";

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

const portfolioItems = [
  {
    title: "Creative Strategy",
    image: "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?w=400&h=400&fit=crop"
  },
  {
    title: "Brand Design",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop"
  },
  {
    title: "Content Production",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop"
  }
];

export function Hero() {
  return (
    <>
      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <div className="animate-fade-up">
                <p className="text-sm font-medium text-muted-foreground mb-4">Hey, I'm a</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                  <span className="text-foreground">Creative</span>
                  <br />
                  <span className="text-primary">Director</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
                  I design creative systems that turn culture, narrative, and technology into momentum.
                  From content strategy to live events, I help brands and creators grow.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-8 py-6 w-fit"
                >
                  <Link to="/contact">
                    Book a Strategy Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Image and Tagline */}
            <div className="relative">
              <div className="animate-fade-up-delay-1">
                {/* Main Photo */}
                <div className="relative mb-8">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-card border-2 border-primary/20">
                    <img
                      src={realPhoto}
                      alt="Adesoji Adenuga"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Right Tagline Card */}
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Great design should feel invisible.
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    From logo to language, I build brands that connect and convert.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="text-primary border-primary hover:bg-primary/10"
                  >
                    <Link to="/work">Let's Build Something</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 bg-card border-t border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.number}
                className="animate-fade-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-full p-6 rounded-xl bg-background border border-border hover:border-primary transition-colors duration-300">
                  <p className="text-4xl font-bold text-primary mb-4">{service.number}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Designs Section */}
      <section className="relative py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <p className="text-primary font-medium mb-2">Behind the Designs</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Shaping Experiences That Make Life Simpler
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I'm a creative director focused on building clean, intuitive interfaces that solve real-world problems.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <div
                key={item.title}
                className="animate-fade-up group relative overflow-hidden rounded-2xl aspect-square"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between bg-card border border-border rounded-2xl p-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                I'm a product designer focused on building clean, intuitive interfaces
              </h3>
              <p className="text-muted-foreground">
                Let's Build Something
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 shadow-glow"
            >
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
