import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { HavenzLogo } from "@/components/HavenzLogo";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-havenz-navy/95 backdrop-blur-xl shadow-2xl shadow-havenz-navy/20"
          : "bg-havenz-navy"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 h-16 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <HavenzLogo size="sm" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "relative text-[13px] font-body font-medium tracking-wide px-5 py-2 rounded-full transition-all duration-300",
                location.pathname === link.to
                  ? "text-primary-foreground"
                  : "text-primary-foreground/60 hover:text-primary-foreground"
              )}
            >
              {location.pathname === link.to && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-primary-foreground/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
          <Link to="/contact" className="ml-4">
            <Button
              size="sm"
              className="bg-gradient-brand text-accent-foreground hover:opacity-90 font-body text-[13px] font-medium tracking-wide rounded-full px-6 h-9 shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
            >
              Let's Talk
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-havenz-navy border-t border-primary-foreground/5 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "text-sm font-body font-medium tracking-wide py-3 px-4 rounded-lg transition-all duration-200",
                    location.pathname === link.to
                      ? "text-primary-foreground bg-primary-foreground/10"
                      : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="mt-3">
                <Button className="bg-gradient-brand text-accent-foreground font-body text-sm rounded-full w-full h-10 shadow-lg shadow-accent/20">
                  Let's Talk
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
