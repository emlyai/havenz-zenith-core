import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "ABOUT US", to: "/about" },
  { label: "SERVICES", to: "/services" },
  { label: "CONTACT", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-havenz-navy/98 backdrop-blur-md shadow-lg"
          : "bg-havenz-navy"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          {/* Geometric logo icon */}
          <div className="w-10 h-10 relative flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
              <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" stroke="hsl(170, 65%, 50%)" strokeWidth="1.5" fill="none" />
              <polygon points="20,8 30,14 30,26 20,32 10,26 10,14" stroke="hsl(170, 65%, 50%)" strokeWidth="1" fill="none" opacity="0.6" />
              <circle cx="20" cy="20" r="3" fill="hsl(170, 65%, 50%)" opacity="0.8" />
              <line x1="20" y1="2" x2="20" y2="8" stroke="hsl(170, 65%, 50%)" strokeWidth="1" opacity="0.5" />
              <line x1="20" y1="32" x2="20" y2="38" stroke="hsl(170, 65%, 50%)" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-body font-medium tracking-[0.35em] text-primary-foreground">
              H A V E N Z
            </span>
            <span className="text-[10px] font-body tracking-[0.25em] text-havenz-teal">
              SMART COMMUNITIES
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "relative text-xs font-body font-medium tracking-wider px-4 py-6 transition-all",
                location.pathname === link.to
                  ? "text-primary-foreground bg-havenz-dark"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              )}
            >
              {link.label}
              {location.pathname === link.to && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-havenz-dark" 
                  style={{ bottom: '-8px' }}
                />
              )}
            </Link>
          ))}
          <Link to="/contact" className="ml-4">
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body text-xs tracking-wider rounded-full px-6 py-2">
              LET'S TALK!
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-havenz-navy border-t border-primary-foreground/10">
          <div className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-sm font-body font-medium tracking-wider py-3 px-4 transition-colors",
                  location.pathname === link.to
                    ? "text-primary-foreground bg-havenz-dark"
                    : "text-primary-foreground/70"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-4">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-body text-xs tracking-wider rounded-full w-full">
                LET'S TALK!
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
