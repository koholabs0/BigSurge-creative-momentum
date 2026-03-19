import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { supabase } from "@/integrations/supabase/client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  created_at: string;
  cover_image: string | null;
  medium_url: string | null;
}

const categoryColors: Record<string, string> = {
  "Creative Strategy": "bg-purple-500/10 text-purple-500",
  "Culture": "bg-blue-500/10 text-blue-500",
  "AI": "bg-green-500/10 text-green-500",
  "African Creator Economy": "bg-orange-500/10 text-orange-500",
};

export default function Writing() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, category, created_at, cover_image, medium_url")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (data) setPosts(data);
    }
    fetchPosts();
  }, []);

  const categories = ["", "Creative Strategy", "Culture", "AI", "African Creator Economy"];
  const filteredPosts = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts;

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
              Writing on <span className="text-gradient">Creative Strategy</span>
            </h1>
            <p
              className={`text-lg sm:text-xl text-muted-foreground max-w-2xl transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Essays and articles on creative strategy, storytelling, AI, culture, 
              and the African creator economy.
            </p>
          </div>

          {/* Category Filters */}
          <div
            className={`flex flex-wrap gap-3 mb-12 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {categories.map((category) => (
              <button
                key={category || "all"}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
                }`}
              >
                {category || "All Articles"}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/writing/${post.slug}`}
                className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover-lift transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  {post.cover_image ? (
                    <img
                      src={post.cover_image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-primary opacity-20">
                      <span className="text-6xl">✍️</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        categoryColors[post.category] || "bg-muted text-muted-foreground"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <ArrowUpRight className="w-5 h-5 text-foreground" />
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
