import { useState } from "react";
import { Send, Mail, MapPin, Instagram, Linkedin, Sparkles, ArrowRight, Facebook, Twitter, MessageCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert([{ name, email, message }]);

      if (dbError) throw dbError;

      // Try to send email notification
      try {
        await supabase.functions.invoke("send-contact-email", {
          body: { name, email, message },
        });
      } catch (emailError) {
        // Email sending is optional, don't fail the whole submission
        console.log("Email notification skipped:", emailError);
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adenugaadesoji01@gmail.com",
      href: "mailto:adenugaadesoji01@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: null,
    },
  ];

  const socials = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/BigSurge__" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/adesojiadenuga" },
  ];

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
              <div className="max-w-2xl">
                <p
                  className={`text-white/80 font-medium mb-3 text-sm tracking-wide uppercase transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  Get In Touch
                </p>
                <h1
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  Let's Work
                  <br />
                  Together
                </h1>
                <p
                  className={`text-lg text-white/80 transition-all duration-700 delay-100 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  Have a project in mind? Looking for a creative partner? Or just want to chat 
                  about ideas? I'd love to hear from you.
                </p>
              </div>
            </div>

            {/* Curved bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-background" style={{
              borderTopLeftRadius: '1.5rem',
              borderTopRightRadius: '1.5rem',
            }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div>
              {/* Contact Info Cards */}
              <div
                className={`space-y-4 mb-8 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:shadow-lg hover:shadow-primary/5 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-foreground font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div
                className={`transition-all duration-700 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-sm text-muted-foreground mb-4">Follow me on</div>
                <div className="flex gap-4">
                  {socials.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all"
                      aria-label={item.label}
                    >
                      <item.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick CTA */}
              <div
                className={`mt-12 p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-orange-500/10 border border-primary/20 transition-all duration-700 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-semibold text-foreground">Prefer a quick call?</div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Book a 15-minute intro call to discuss your project and see if we're a good fit.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="mailto:adenugaadesoji01@gmail.com?subject=Strategy%20Call%20Request">
                    Schedule a Call
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Form */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-3xl bg-card border border-border shadow-xl"
              >
                <h2 className="text-2xl font-bold text-foreground mb-2">Send a Message</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="mt-2 rounded-xl"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="mt-2 rounded-xl"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project..."
                      required
                      className="mt-2 min-h-[150px] rounded-xl"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 rounded-full py-6 text-base font-medium"
                    size="lg"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
