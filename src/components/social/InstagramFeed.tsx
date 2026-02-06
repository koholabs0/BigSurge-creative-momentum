import { Instagram, ExternalLink } from "lucide-react";
import { InstagramCard } from "./InstagramCard";
import { instagramPosts, socialProfiles } from "@/data/socialMedia";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface InstagramFeedProps {
  featured?: boolean;
  category?: string;
  limit?: number;
  showHeader?: boolean;
}

export function InstagramFeed({ 
  featured = false, 
  category, 
  limit = 6,
  showHeader = true 
}: InstagramFeedProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  
  const instagramProfile = socialProfiles.find(p => p.platform === "Instagram");
  
  let filteredPosts = instagramPosts;
  
  if (featured) {
    filteredPosts = filteredPosts.filter(post => post.featured);
  }
  
  if (category) {
    filteredPosts = filteredPosts.filter(post => post.category === category);
  }
  
  const displayPosts = filteredPosts.slice(0, limit);

  return (
    <div ref={ref} className="space-y-8">
      {showHeader && (
        <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Instagram</h3>
              <p className="text-sm text-muted-foreground">{instagramProfile?.handle}</p>
            </div>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a href={instagramProfile?.url} target="_blank" rel="noopener noreferrer">
              Follow
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {displayPosts.map((post, index) => (
          <div
            key={post.id}
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${(index + 1) * 100}ms` }}
          >
            <InstagramCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
