import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  cover_image: string | null;
  created_at: string;
}

export default function WritingDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;

      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      setPost(data);
      setLoading(false);
    }
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="py-24 min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="py-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/writing">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Writing
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const readingTime = Math.ceil(post.content.split(" ").length / 200);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-hero">
        <div ref={ref} className="container mx-auto px-6">
          <Link
            to="/writing"
            className={`inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Writing
          </Link>

          <div
            className={`flex items-center gap-4 mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-sm font-medium text-primary px-4 py-1 rounded-full bg-primary/10">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {new Date(post.created_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {readingTime} min read
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {post.title}
          </h1>

          <p
            className={`text-lg sm:text-xl text-muted-foreground max-w-2xl transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Cover Image */}
      {post.cover_image && (
        <section className="relative -mt-8">
          <div className="container mx-auto px-6">
            <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-card">
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <article className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            <div className="text-lg text-foreground leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Enjoyed this article?
              </h3>
              <p className="text-muted-foreground">
                Let's connect and discuss more ideas.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild variant="outline">
                <Link to="/writing">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  More Articles
                </Link>
              </Button>
              <Button asChild className="bg-gradient-primary hover:opacity-90 shadow-glow">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
