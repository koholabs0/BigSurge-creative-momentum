import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  if (!project) {
    return (
      <Layout>
        <div className="py-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/case-studies">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const sections = [
    { title: "Context", content: project.context },
    { title: "Problem", content: project.problem },
    { title: "Strategy", content: project.strategy },
    { title: "Execution", content: project.execution },
    { title: "Results", content: project.results },
    { title: "Reflection", content: project.reflection },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-hero">
        <div ref={ref} className="container mx-auto px-6">
          <Link
            to="/case-studies"
            className={`inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <span
            className={`text-sm font-medium text-primary mb-4 block transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {project.category}
          </span>

          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {project.title}
          </h1>

          <p
            className={`text-lg sm:text-xl text-muted-foreground max-w-2xl transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {project.summary}
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative -mt-8">
        <div className="container mx-auto px-6">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-card">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {sections.map((section, index) => (
              <div key={section.title} className="mb-16 last:mb-0">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Like what you see?
              </h3>
              <p className="text-muted-foreground">
                Let's discuss how we can create something amazing together.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild variant="outline">
                <Link to="/work">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Work
                </Link>
              </Button>
              <Button asChild className="bg-gradient-primary hover:opacity-90 shadow-glow">
                <Link to="/contact">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
