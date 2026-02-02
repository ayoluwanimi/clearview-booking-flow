import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "Reviews", href: "#reviews" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => scrollToSection("#home")}
          >
            <div className={cn(
              "p-2 rounded-xl transition-all duration-300",
              isScrolled ? "bg-primary" : "bg-white/20 backdrop-blur-sm"
            )}>
              <Droplets className={cn(
                "h-6 w-6 transition-colors",
                isScrolled ? "text-primary-foreground" : "text-white"
              )} />
            </div>
            <span className={cn(
              "font-heading font-bold text-xl transition-colors",
              isScrolled ? "text-primary" : "text-white"
            )}>
              Crystal Clear
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "font-medium transition-colors relative group",
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                  isScrolled ? "bg-primary" : "bg-white"
                )} />
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant={isScrolled ? "outline" : "heroOutline"}
              size="sm"
              onClick={() => scrollToSection("#booking")}
            >
              Get Quote
            </Button>
            <Button
              variant={isScrolled ? "hero" : "hero"}
              size="sm"
              onClick={() => scrollToSection("#booking")}
              className={!isScrolled ? "animate-none" : ""}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-white")} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={cn(
            "lg:hidden mt-4 p-4 rounded-xl animate-fade-in",
            isScrolled ? "bg-white shadow-lg" : "glass"
          )}>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    "text-left py-2 px-3 rounded-lg font-medium transition-colors",
                    isScrolled
                      ? "text-foreground hover:bg-muted"
                      : "text-white hover:bg-white/10"
                  )}
                >
                  {link.name}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-white/20">
                <Button
                  variant="hero"
                  onClick={() => scrollToSection("#booking")}
                  className="w-full animate-none"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
