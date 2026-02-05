import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
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
      <section className="py-16 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Editorial Header Card */}
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
              <div className="grid lg:grid-cols-2 gap-8 items-end">
                <div>
                  <p
                    className={`text-white/80 font-medium mb-3 text-sm tracking-wide uppercase transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    Portfolio
                  </p>
                  <h1
                    className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    Creative Work &
                    <br />
                    Case Studies
                  </h1>
                </div>
                <div
                  className={`lg:text-right transition-all duration-700 delay-100 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <p className="text-lg text-white/80 max-w-md lg:ml-auto">
                    Explore the creative portfolio of Adesoji Adenuga — content strategy, 
                    digital marketing campaigns, video editing, and event activations.
                  </p>
                </div>
              </div>
            </div>

            {/* Curved bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-background" style={{
              borderTopLeftRadius: '1.5rem',
              borderTopRightRadius: '1.5rem',
            }} />
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
                    ? "bg-gradient-to-r from-primary to-orange-500 text-white shadow-lg shadow-primary/30"
                    : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.slug}
                to={`/case-studies/${project.slug}`}
                className={`group relative overflow-hidden rounded-3xl bg-card border border-border transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 ${
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
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-primary">#{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-medium text-primary">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {project.summary}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 rounded-3xl bg-card border border-border">
              <p className="text-muted-foreground text-lg mb-4">
                No projects found in this category.
              </p>
              <Button
                variant="outline"
                onClick={() => setSearchParams({})}
                className="rounded-full"
              >
                View All Projects
              </Button>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Have a project in mind?</p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 rounded-full text-base px-8 py-6 font-medium group"
            >
              <Link to="/contact">
                Let's Work Together
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
