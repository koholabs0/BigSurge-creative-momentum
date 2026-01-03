import { Link } from "react-router-dom";
import { Zap, Mail, Instagram, Linkedin } from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Video & Media", href: "/video-media" },
    { name: "Writing", href: "/writing" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://instagram.com/BigSurge__",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/adesojiadenuga",
      icon: Linkedin,
    },
    {
      name: "Medium",
      href: "https://medium.com/@bigsurge",
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <span>BigSurge</span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              Creative Director & Strategic Content Architect based in Lagos, Nigeria. 
              Designing creative systems that turn culture, narrative, and technology into momentum.
            </p>
            <a
              href="mailto:adenugaadesoji01@gmail.com"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              adenugaadesoji01@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.main.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              More
            </h3>
            <ul className="space-y-3">
              {navigation.main.slice(4).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Adesoji Adenuga. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={item.name}
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
