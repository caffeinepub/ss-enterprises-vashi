import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "होम" },
    { to: "/about", label: "आमच्याबद्दल" },
    { to: "/services", label: "सेवा" },
    { to: "/contact", label: "संपर्क" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground lg:h-12 lg:w-12">
              <span className="text-xl font-bold lg:text-2xl">SS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-tight text-foreground lg:text-base">
                S S ENTERPRISES
              </span>
              <span className="text-xs text-muted-foreground lg:text-sm">आपले सरकार सेवा केंद्र</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary [&.active]:text-foreground"
                activeProps={{ className: "text-foreground font-semibold" }}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="gap-2">
              <a href="tel:8070404099">
                <Phone className="h-4 w-4" />
                <span>संपर्क करा</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary [&.active]:text-foreground"
                  activeProps={{ className: "text-foreground font-semibold" }}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="sm" className="w-full gap-2">
                <a href="tel:8070404099">
                  <Phone className="h-4 w-4" />
                  <span>संपर्क करा</span>
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
