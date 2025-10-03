import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 leadconnect-dark border-b border-leadconnect-teal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-white text-xl md:text-2xl font-bold tracking-tight" data-testid="link-logo">
              LeadConnect<span className="text-accent">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              data-testid="button-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              data-testid="button-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('team')} 
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              data-testid="button-team"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              data-testid="button-testimonials"
            >
              Testimonials
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="leadconnect-accent text-leadconnect-dark px-6 py-2.5 font-semibold hover:bg-leadconnect-accent-hover transition-colors text-sm"
              data-testid="button-book-demo"
            >
              Book a Demo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden leadconnect-dark border-t border-leadconnect-teal">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('services')}
              className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2 w-full text-left"
              data-testid="button-mobile-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2 w-full text-left"
              data-testid="button-mobile-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2 w-full text-left"
              data-testid="button-mobile-team"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2 w-full text-left"
              data-testid="button-mobile-testimonials"
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="block leadconnect-accent text-leadconnect-dark px-6 py-3 font-semibold hover:bg-leadconnect-accent-hover transition-colors text-center w-full"
              data-testid="button-mobile-book-demo"
            >
              Book a Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
