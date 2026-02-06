import { useState } from "react";
import { Play, X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { InstagramFeed } from "@/components/social/InstagramFeed";

const videos = {
  shortForm: [
    {
      id: "1",
      title: "Brand Storytelling Reel",
      platform: "Instagram",
      thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80",
      description: "Short-form content designed for maximum engagement.",
    },
    {
      id: "2",
      title: "Product Launch Teaser",
      platform: "TikTok",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
      description: "Viral-ready content for product launches.",
    },
    {
      id: "3",
      title: "Behind The Scenes",
      platform: "Instagram",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
      description: "Authentic BTS content that builds connection.",
    },
  ],
  longForm: [
    {
      id: "4",
      title: "Creative Process Documentary",
      platform: "YouTube",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80",
      description: "Deep dive into the creative process behind major campaigns.",
    },
    {
      id: "5",
      title: "Industry Insights Series",
      platform: "YouTube",
      thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80",
      description: "Thought leadership content exploring industry trends.",
    },
  ],
  events: [
    {
      id: "6",
      title: "SOSSA Connects Recap",
      platform: "YouTube",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      description: "Full event coverage and highlights reel.",
    },
    {
      id: "7",
      title: "Brand Activation Highlights",
      platform: "Instagram",
      thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
      description: "Campus activation event documentation.",
    },
  ],
};

interface Video {
  id: string;
  title: string;
  platform: string;
  thumbnail: string;
  description: string;
}

function VideoCard({ video, onClick }: { video: Video; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border hover-lift text-left w-full"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-glow">
            <Play className="w-8 h-8 text-primary-foreground ml-1" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <span className="text-xs font-medium text-primary mb-2 block uppercase tracking-wider">
          {video.platform}
        </span>
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {video.title}
        </h3>
        <p className="text-sm text-muted-foreground">{video.description}</p>
      </div>
    </button>
  );
}

export default function VideoMedia() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <Layout>
      <section className="py-24 bg-background min-h-screen">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div ref={ref} className="mb-16">
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Video & <span className="text-gradient">Media Production</span>
            </h1>
            <p
              className={`text-lg sm:text-xl text-muted-foreground max-w-2xl transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              High-retention video editing for Instagram, TikTok, and YouTube. 
              Short-form reels, event coverage, and storytelling-driven edits.
            </p>
          </div>

          {/* Short Form Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Short-Form Social Media</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.shortForm.map((video) => (
                <VideoCard key={video.id} video={video} onClick={() => setSelectedVideo(video)} />
              ))}
            </div>
          </div>

          {/* Long Form Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Long-Form Content & Vlogs</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {videos.longForm.map((video) => (
                <VideoCard key={video.id} video={video} onClick={() => setSelectedVideo(video)} />
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Event Coverage</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {videos.events.map((video) => (
                <VideoCard key={video.id} video={video} onClick={() => setSelectedVideo(video)} />
              ))}
            </div>
          </div>

          {/* Instagram Reels Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Instagram Reels</h2>
            <InstagramFeed category="campaign" limit={6} showHeader={true} />
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-background border-border overflow-hidden">
          <div className="aspect-video bg-muted flex items-center justify-center">
            <div className="text-center p-8">
              <Play className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">{selectedVideo?.title}</h3>
              <p className="text-muted-foreground">Video player placeholder - Add your video embed here</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
