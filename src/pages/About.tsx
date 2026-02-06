import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Zap, Globe, Sparkles, Linkedin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LinkedInCard } from "@/components/social/LinkedInCard";
import { linkedInContent, socialProfiles } from "@/data/socialMedia";
import animePhoto from "@/assets/adesoji-anime.png";
import realPhoto from "@/assets/adesoji-photo.png";

const highlights = [
  { icon: Award, label: "Award-Winning", value: "Creative Work" },
  { icon: Users, label: "Trusted By", value: "20+ Brands" },
  { icon: Zap, label: "Known For", value: "Bold Ideas" },
  { icon: Globe, label: "Based In", value: "Lagos, Nigeria" },
];

const journey = [
  { year: "2019", title: "Started Content Creation", description: "Began my journey as a content creator, learning the fundamentals of storytelling." },
  { year: "2020", title: "First Major Campaign", description: "Led my first major brand campaign, achieving 200% engagement growth." },
  { year: "2021", title: "Creative Director Role", description: "Stepped into creative direction, leading teams and shaping brand narratives." },
  { year: "2022", title: "International Projects", description: "Expanded to work with international brands and global campaigns." },
  { year: "2023", title: "Event Activations", description: "Launched successful live event productions and activations." },
  { year: "2024", title: "Scaling Impact", description: "Continuing to push boundaries and create meaningful work." },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <Layout>
      <section className="py-16 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Editorial Hero Card */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/90 via-primary/70 to-orange-600/80 mb-12">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
            
            {/* Animated grid lines */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `linear-gradient(white 1px, transparent 1px),
                               linear-gradient(90deg, white 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }} />

            <div ref={ref} className="relative z-10 py-16 sm:py-20 px-6 sm:px-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="text-white">
                  <p
                    className={`text-white/80 font-medium mb-3 text-sm tracking-wide uppercase transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    About Me
                  </p>
                  <h1
                    className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    The Story
                    <br />
                    Behind the Work
                  </h1>
                  <p
                    className={`text-lg text-white/80 leading-relaxed transition-all duration-700 delay-100 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    I'm Adesoji Adenuga, a creative director and content strategist based in Lagos, Nigeria. 
                    I help brands and creators build compelling narratives that connect with audiences.
                  </p>
                </div>

                {/* Right - Photo with swap effect */}
                <div
                  className={`flex justify-center lg:justify-end transition-all duration-700 delay-200 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="relative">
                    <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl photo-swap cursor-pointer group">
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
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-xl overflow-hidden shadow-xl border-2 border-white/20 animate-float bg-white">
                      <img
                        src={animePhoto}
                        alt="BigSurge Avatar"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Badge */}
                    <div className="absolute -top-3 -right-3 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-bold shadow-lg">
                      BigSurge ⚡
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Curved bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-background" style={{
              borderTopLeftRadius: '1.5rem',
              borderTopRightRadius: '1.5rem',
            }} />
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className={`p-6 rounded-2xl bg-card border border-border text-center transition-all duration-700 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                <div className="font-bold text-foreground">{item.value}</div>
              </div>
            ))}
          </div>

          {/* Bio Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase">My Approach</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-[1.1] mb-6">
                Creating Work That
                <br />
                <span className="bg-gradient-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Actually Matters
                </span>
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                With over 5 years of experience in content strategy and creative direction, 
                I've had the privilege of working with some of the most exciting brands and 
                creators in Nigeria and beyond.
              </p>
              <p>
                My approach is simple: understand the story you want to tell, identify who 
                needs to hear it, and craft experiences that make them feel something. 
                Great content should feel effortless to consume but powerful in its impact.
              </p>
            </div>
          </div>

          {/* LinkedIn Professional Highlights */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Professional Highlights</h3>
                  <p className="text-sm text-muted-foreground">Connect on LinkedIn</p>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white"
              >
                <a 
                  href={socialProfiles.find(p => p.platform === "LinkedIn")?.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Connect
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {linkedInContent.map((content) => (
                <LinkedInCard key={content.id} content={content} />
              ))}
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 mb-16">
            {/* Animated grid overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `linear-gradient(hsl(var(--background)) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />

            <div className="relative z-10 py-16 px-6 sm:px-12">
              <div className="text-center mb-12">
                <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">The Journey</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-background">
                  How I Got Here
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {journey.map((item) => (
                  <div
                    key={item.year}
                    className="p-6 rounded-2xl bg-background/5 backdrop-blur-sm border border-background/10 hover:bg-background/10 transition-all"
                  >
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-background mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-background/70 text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Curved edges */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-background" style={{
              borderBottomLeftRadius: '1.5rem',
              borderBottomRightRadius: '1.5rem',
            }} />
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-orange-500 mb-6">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              I'm always excited to work on new projects and collaborate with passionate people.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 rounded-full text-base px-8 py-6 font-medium group"
            >
              <Link to="/contact">
                Let's Connect
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
