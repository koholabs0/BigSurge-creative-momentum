import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { projects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CaseStudies() {
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
              Case Studies & <span className="text-gradient">Results</span>
            </h1>
            <p
              className={`text-lg sm:text-xl text-muted-foreground max-w-2xl transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Detailed case studies showcasing creative strategy, campaign execution, 
              and real-world results across content, events, and digital marketing.
            </p>
          </div>

          {/* Case Studies List */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                to={`/case-studies/${project.slug}`}
                className={`group flex flex-col lg:flex-row gap-8 p-6 lg:p-8 rounded-2xl bg-card border border-border hover-lift transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Image */}
                <div className="lg:w-1/3 aspect-video lg:aspect-[4/3] overflow-hidden rounded-xl shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <span className="text-sm font-medium text-primary mb-2">
                    {project.category}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {project.summary}
                  </p>
                  <div className="inline-flex items-center gap-2 text-primary font-medium">
                    View Case Study
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
