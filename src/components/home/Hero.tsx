import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import animePhoto from "@/assets/adesoji-anime.png";
import realPhoto from "@/assets/adesoji-photo.png";
import sossaFestLogo from "@/assets/sossa-fest-logo.png";
import sossaLogo from "@/assets/sossa-logo.png";
import cartrackerLogo from "@/assets/cartracker-logo.png";

const services = [
  { num: "01", label: "Content Strategy" },
  { num: "02", label: "Creative Direction" },
  { num: "03", label: "Brand Storytelling" },
  { num: "04", label: "Live Events" },
];

const brands = [
  { name: "SOSSA Fest", logo: sossaFestLogo },
  { name: "SOSSA", logo: sossaLogo },
  { name: "CarTracker Nigeria", logo: cartrackerLogo },
];

export function Hero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-screen bg-background overflow-hidden">
      {/* Main Hero Card */}
      <div className="relative mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/90 via-primary/70 to-orange-600/80">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px),
                           linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />

        <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[50vh] sm:min-h-[70vh]">
            {/* Left Content */}
            <div className="text-white order-2 lg:order-1">
              {/* Intro text */}
              <p className="animate-fade-up text-primary-foreground/80 text-lg sm:text-xl mb-4 font-medium">
                Hey, I'm a
              </p>

              {/* Main Title */}
              <h1 className="animate-fade-up-delay-1 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9] mb-6 sm:mb-8">
                Creative
                <br />
                Director
              </h1>

              {/* Services Grid */}
              <div className="animate-fade-up-delay-2 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12">
                {services.map((service, index) => (
                  <div key={index} className="group">
                    <span className="text-orange-400 font-mono text-sm">#{service.num}</span>
                    <p className="text-white/90 text-sm mt-1 group-hover:text-orange-300 transition-colors">
                      {service.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Photo & Quote */}
            <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end gap-8">
              {/* Profile Photo with Swap Effect */}
              <div className="relative animate-fade-up-delay-1">
                <div className="relative w-48 h-60 sm:w-80 sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl photo-swap cursor-pointer group">
                  <img
                    src={realPhoto}
                    alt="Adesoji Adenuga"
                    className="photo-real object-cover object-top"
                  />
                  <img
                    src={animePhoto}
                    alt="BigSurge Anime"
                    className="photo-anime object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Hover hint */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    ⚡ Hover to reveal
                  </div>
                </div>

                {/* Floating anime card */}
                <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shadow-xl border-2 border-white/20 animate-float bg-white">
                  <img
                    src={animePhoto}
                    alt="BigSurge Avatar"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Location badge */}
                <div className="absolute -top-3 -right-3 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-bold shadow-lg animate-glow-pulse">
                  Lagos ⚡
                </div>
              </div>

              {/* Quote Section */}
              <div className="animate-fade-up-delay-2 text-right max-w-xs hidden lg:block">
                <p className="text-xl sm:text-2xl font-semibold text-white leading-tight">
                  Great content should feel effortless.
                </p>
                <p className="text-white/70 text-sm mt-3 leading-relaxed">
                  From strategy to execution, I build narratives that connect and convert.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-up-delay-3 flex justify-center lg:justify-start mt-8 lg:mt-0 lg:absolute lg:bottom-12 lg:right-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-full text-base px-6 py-6 font-medium group"
            >
              <Link to="/contact">
                Get in touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-background" style={{
          borderTopLeftRadius: '2rem',
          borderTopRightRadius: '2rem',
        }} />
      </div>

      {/* Brands Strip */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <p className="text-muted-foreground text-sm">
            Trusted by Brands I've<br className="sm:hidden" /> Helped Shape
          </p>
          <div className="flex items-center gap-6 sm:gap-10">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <img src={brand.logo} alt={brand.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
                <span className="font-medium text-sm text-foreground hidden sm:inline">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Behind the Designs Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <p className="text-primary font-medium mb-3 sm:mb-4">Behind the Designs</p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
              Shaping Experiences That Make Life Simpler
            </h2>
          </div>
          <div className="lg:pt-8">
            <p className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed mb-6">
              I'm a creative director focused on building compelling narratives and systems that solve real-world problems.
            </p>
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground text-sm">
                Let's Build Something<br />Meaningful Together
              </p>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
              >
                <Link to="/contact">
                  Get in touch
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
