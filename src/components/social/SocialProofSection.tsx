import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InstagramCard } from "./InstagramCard";
import { LinkedInCard } from "./LinkedInCard";
import { instagramPosts, linkedInContent, socialProfiles } from "@/data/socialMedia";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function SocialProofSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  
  const featuredPosts = instagramPosts.filter(post => post.featured).slice(0, 3);
  const featuredLinkedIn = linkedInContent.slice(0, 1);
  const instagramProfile = socialProfiles.find(p => p.platform === "Instagram");
  const linkedinProfile = socialProfiles.find(p => p.platform === "LinkedIn");

  return (
    <section ref={ref} className="py-12 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Social Proof</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            See the <span className="text-gradient">Work in Action</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Follow along for behind-the-scenes content, campaign launches, 
            and insights into the creative process.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Instagram Featured Posts */}
          <div className="lg:col-span-2 space-y-6">
            <div
              className={`flex items-center justify-between transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Instagram</h3>
                  <p className="text-sm text-muted-foreground">{instagramProfile?.handle}</p>
                </div>
              </div>
              <Button
                asChild
                variant="ghost"
                className="text-primary hover:text-primary hover:bg-primary/10"
              >
                <a href={instagramProfile?.url} target="_blank" rel="noopener noreferrer">
                  Follow
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4">
              {featuredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <InstagramCard post={post} />
                </div>
              ))}
            </div>
          </div>

          {/* LinkedIn Highlight */}
          <div className="space-y-6">
            <div
              className={`flex items-center justify-between transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">Connect</p>
                </div>
              </div>
              <Button
                asChild
                variant="ghost"
                className="text-primary hover:text-primary hover:bg-primary/10"
              >
                <a href={linkedinProfile?.url} target="_blank" rel="noopener noreferrer">
                  View
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
            
            {featuredLinkedIn.map((content, index) => (
              <div
                key={content.id}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${(index + 7) * 100}ms` }}
              >
                <LinkedInCard content={content} />
              </div>
            ))}

            {/* Quick Connect CTA */}
            <div
              className={`p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-orange-500/10 border border-primary/20 transition-all duration-700 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-sm text-muted-foreground mb-3">
                Ready to create something together?
              </p>
              <Button
                asChild
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link to="/contact">
                  Let's Connect
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
