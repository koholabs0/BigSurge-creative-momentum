import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { AnimatePresence, motion } from "framer-motion";
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative z-[60]">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-primary/30 group-hover:border-primary/60 transition-colors duration-300">
              <img src={animeAvatar} alt="BigSurge" className="w-full h-full object-cover" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              BigSurge <span className="text-primary">⚡</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 bg-muted/50 backdrop-blur-sm rounded-full px-1.5 py-1 border border-border/50">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-1.5 text-[13px] font-medium rounded-full transition-all duration-300 ${
                  location.pathname === item.href
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {location.pathname === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 relative z-[60]">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-[18px] h-[18px]" />
              ) : (
                <Moon className="w-[18px] h-[18px]" />
              )}
            </button>

            <Link
              to="/contact"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
            >
              Let's Talk
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full text-foreground hover:bg-muted/80 transition-all"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation — Full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-50 bg-background/98 backdrop-blur-2xl"
          >
            <div className="flex flex-col justify-between h-full pt-24 pb-10 px-8">
              {/* Nav links */}
              <div className="flex flex-col gap-1">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={item.href}
                      className={`group flex items-center justify-between py-3.5 border-b border-border/30 transition-colors duration-200 ${
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-foreground/80 hover:text-primary"
                      }`}
                    >
                      <span className="text-[1.65rem] font-light tracking-tight">{item.name}</span>
                      {location.pathname === item.href && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-colors"
                >
                  Let's Talk
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
                <p className="text-center text-muted-foreground text-xs mt-4 tracking-wide">
                  © {new Date().getFullYear()} BigSurge
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
