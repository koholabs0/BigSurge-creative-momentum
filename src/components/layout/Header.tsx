import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import animeAvatar from "@/assets/adesoji-anime.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Video & Media", href: "/video-media" },
  { name: "Writing", href: "/writing" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Animated Logo with Anime Avatar */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            {/* Anime Avatar Logo */}
            <div className="relative anime-logo w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50 shadow-glow">
              <img
                src={animeAvatar}
                alt="BigSurge"
                className="w-full h-full object-cover"
              />
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20" />
            </div>
            
            {/* Glitch Text Logo */}
            <span 
              className="text-xl font-bold text-foreground glitch relative"
              data-text="BigSurge ⚡"
            >
              BigSurge <span className="text-primary">⚡</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative ${
                  location.pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary animate-glow-pulse" />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle with Neon Effect */}
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300 group"
              aria-label="Toggle theme"
            >
              <div className="relative z-10">
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                ) : (
                  <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" />
                )}
              </div>
              <div className="absolute inset-0 rounded-lg bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
            </button>

            {/* CTA Button with Neon Border */}
            <Button
              asChild
              className="hidden sm:flex bg-gradient-primary hover:opacity-90 shadow-glow animate-glow-pulse relative neon-border"
            >
              <Link to="/contact">Book a Strategy Call</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation — Full-screen overlay */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-0 left-0 z-40 bg-background/95 backdrop-blur-xl animate-fade-in">
            <div className="flex flex-col items-center justify-center h-full gap-3 px-8">
              {navigation.map((item, i) => (
                <Link
                  key={item.name}
                  to={item.href}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className={`animate-fade-in opacity-0 fill-mode-forwards px-6 py-3 text-2xl font-semibold rounded-xl transition-colors duration-300 ${
                    location.pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                size="lg"
                className="mt-6 animate-fade-in opacity-0 fill-mode-forwards bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-8"
                style={{ animationDelay: `${navigation.length * 60}ms` }}
              >
                <Link to="/contact">Book a Strategy Call</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
