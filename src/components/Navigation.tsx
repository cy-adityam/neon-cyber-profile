
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

interface NavLink {
  id: string;
  label: string;
}

const links: NavLink[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar opacity based on scroll
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = links.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        if (!section) return;
        
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-2 neo-box bg-white/5 dark:bg-black/50 backdrop-blur-lg"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-orbitron font-bold text-foreground">
            <span className="text-cyber-neon">&lt;</span>CYBER<span className="text-cyber-neon">&gt;</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "nav-link text-sm font-medium tracking-wider",
                activeSection === link.id ? "text-cyber-neon after:w-full" : ""
              )}
            >
              {link.label}
            </button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            className="bg-transparent border-cyber-silver/30"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full neo-box py-4 backdrop-blur-lg animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "px-4 py-2 text-left text-sm font-medium",
                  activeSection === link.id
                    ? "text-cyber-neon bg-white/5 dark:bg-black/20 rounded"
                    : ""
                )}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
