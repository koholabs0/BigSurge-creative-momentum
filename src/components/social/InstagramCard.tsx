import { Instagram, Play, Image, Images } from "lucide-react";
import { InstagramPost } from "@/data/socialMedia";

interface InstagramCardProps {
  post: InstagramPost;
}

const typeIcons = {
  reel: Play,
  post: Image,
  carousel: Images,
};

export function InstagramCard({ post }: InstagramCardProps) {
  const TypeIcon = typeIcons[post.type];

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl bg-card border border-border hover-lift block"
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={post.thumbnail}
          alt={post.caption}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Type Badge */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border">
        <TypeIcon className="w-3.5 h-3.5 text-primary" />
        <span className="text-xs font-medium text-foreground capitalize">{post.type}</span>
      </div>

      {/* Instagram Badge */}
      <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-lg">
        <Instagram className="w-4 h-4 text-white" />
      </div>

      {/* Caption on Hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-sm text-foreground line-clamp-2">{post.caption}</p>
      </div>
    </a>
  );
}
