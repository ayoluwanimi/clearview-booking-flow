import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contacts", href: "#contact" },
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
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-background py-5"
      )}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-12">
            {/* Nav Links - Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Center Logo */}
          <Link
            to="/"
            className="flex items-center"
            onClick={() => scrollToSection("#home")}
          >
            <span className="font-heading font-bold text-2xl italic text-primary">
              GEB
            </span>
          </Link>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/447577306168?text=Hi.%20I%20want%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-sm"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 rounded-xl bg-background shadow-lg animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-2 px-3 rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <a
                  href="https://wa.me/447577306168?text=Hi.%20I%20want%20to%20place%20an%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left py-2 px-3 rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
                >
                  WhatsApp
                </a>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("#contact")}
                  className="w-full border-foreground text-foreground"
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
