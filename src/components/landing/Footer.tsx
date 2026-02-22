import { Link } from "react-router-dom";

const usefulLinks = [
  { name: "Home cleaning", href: "#services" },
  { name: "Company History", href: "#about" },
  { name: "Office Cleaning", href: "#services" },
  { name: "Window cleaning", href: "#services" },
];

const companyLinks = [
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Contact Us", href: "#contact" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="font-heading font-bold text-xl text-foreground">
              GEB Company
            </Link>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Address */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Office Address
            </h3>
            <p className="text-muted-foreground mb-4">
              Mellon St, Newport NP20 1EP
            </p>
            <p className="font-semibold text-foreground mb-1">Email Us:</p>
            <a 
              href="mailto:Gebcompany@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Gebcompany@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
