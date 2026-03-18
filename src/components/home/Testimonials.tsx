import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Testimonial {
  id: string;
  quote: string;
  client_name: string;
  client_role: string;
  company: string;
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  useEffect(() => {
    async function fetchTestimonials() {
      const { data } = await supabase
        .from("testimonials")
        .select("*")
        .eq("featured", true)
        .order("created_at", { ascending: false })
        .limit(4);

      if (data) setTestimonials(data);
    }
    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <section ref={ref} className="py-10 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Editorial Card Container */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/90 via-primary/70 to-orange-600/80">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30" />
          
          {/* Animated grid lines */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px),
                             linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />

          <div className="relative z-10 py-10 sm:py-20 px-4 sm:px-12">
            {/* Header */}
            <div
              className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-white/80 font-medium mb-3 text-sm tracking-wide uppercase">Testimonials</p>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                What Clients Say
              </h2>
              <p className="text-lg text-white/70 max-w-xl mx-auto">
                Trusted by brands, creators, and organizations across Nigeria and beyond.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`relative p-5 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                    <Quote className="w-5 h-5 text-white" />
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-base sm:text-lg text-white mb-4 sm:mb-6 leading-relaxed pt-2">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Attribution */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {testimonial.client_name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.client_name}
                      </div>
                      <div className="text-sm text-white/70">
                        {testimonial.client_role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Curved bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-background" style={{
            borderTopLeftRadius: '1.5rem',
            borderTopRightRadius: '1.5rem',
          }} />
        </div>
      </div>
    </section>
  );
}
