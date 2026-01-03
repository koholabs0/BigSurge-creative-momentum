import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function FeaturedWork() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const featuredProjects = projects.slice(0, 3);

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className={`flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Selected Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              A curated collection of projects spanning content strategy, digital campaigns, 
              video production, and live event activations.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <Link to="/work">
              View All Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/case-studies/${project.slug}`}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover-lift transition-all duration-700 ${
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
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-sm font-medium text-primary mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.summary}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <ArrowUpRight className="w-5 h-5 text-foreground" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
