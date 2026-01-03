import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { projects, categories } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Work() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "";

  const filteredProjects = activeCategory
    ? projects.filter((p) => p.categorySlug === activeCategory)
    : projects;

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
              Creative Work & <span className="text-gradient">Case Studies</span>
            </h1>
            <p
              className={`text-lg sm:text-xl text-muted-foreground max-w-2xl transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Explore the creative portfolio of Adesoji Adenuga — content strategy, 
              digital marketing campaigns, video editing, and event activations across Nigeria and beyond.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            className={`flex flex-wrap gap-3 mb-12 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => {
                  if (category.slug) {
                    setSearchParams({ category: category.slug });
                  } else {
                    setSearchParams({});
                  }
                }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.slug
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.slug}
                to={`/case-studies/${project.slug}`}
                className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover-lift transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <span className="text-sm font-medium text-primary mb-3 block">
                    {project.category}
                  </span>
                  <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {project.summary}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <ArrowUpRight className="w-6 h-6 text-foreground" />
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
