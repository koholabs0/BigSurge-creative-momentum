import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function FeaturedWork() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const featuredProjects = projects.slice(0, 3);

  return (
    <section ref={ref} className="py-12 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className={`grid lg:grid-cols-2 gap-6 sm:gap-8 items-end mb-10 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">Portfolio</p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
              Selected Work
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-lg text-muted-foreground mb-6 max-w-md lg:ml-auto">
              A curated collection of projects spanning content strategy, digital campaigns, 
              video production, and live event activations.
            </p>
            <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
              <Link to="/work">
                View All Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/case-studies/${project.slug}`}
              className={`group relative overflow-hidden rounded-3xl bg-card border border-border transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-primary">#{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-sm font-medium text-primary">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.summary}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
