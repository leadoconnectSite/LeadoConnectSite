import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import CalendlyButton from "@/components/CalendlyButton";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  let solutionsTimeout;

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Navigate to about page
    window.location.href = "/About";
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Navigate to contact page
    window.location.href = "/Contact";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 leadconnect-dark border-b border-leadconnect-teal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="text-white text-xl md:text-2xl font-bold tracking-tight"
              data-testid="link-logo"
            >
              LeadoConnect<span className="text-accent">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {/* Home */}
            <a
              href="/"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
              data-testid="button-home"
            >
              Home
            </a>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                clearTimeout(solutionsTimeout);
                setIsSolutionsOpen(true);
              }}
              onMouseLeave={() => {
                solutionsTimeout = setTimeout(() => {
                  setIsSolutionsOpen(false);
                }, 200);
              }}
            >
              <button
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center whitespace-nowrap"
                data-testid="button-services"
                aria-expanded={isSolutionsOpen}
                onClick={() => setIsSolutionsOpen((prev) => !prev)}
              >
                Solutions
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 top-full mt-1 w-56 bg-leadconnect-dark border border-leadconnect-teal rounded-md shadow-lg z-50 transition-opacity duration-150 ${
                  isSolutionsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => clearTimeout(solutionsTimeout)}
                onMouseLeave={() => {
                  solutionsTimeout = setTimeout(() => {
                    setIsSolutionsOpen(false);
                  }, 200);
                }}
              >
                <a
                  href="/appointment-settings"
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  Appointment Setting
                </a>
                <a
                  href="/b2b-lead-generation"
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  B2B Lead Generation
                </a>
              </div>
            </div>

            {/* About Us */}
            <a
              href="/About"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
              data-testid="button-about"
              onClick={handleAboutClick}
            >
              About Us
            </a>

            {/* Contact */}
            <a
              href="/Contact"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
              data-testid="button-contact"
              onClick={handleContactClick}
            >
              Contact
            </a>

            {/* Book a Demo */}
            <CalendlyButton className="bg-accent text-leadconnect-dark px-6 py-2.5 font-semibold hover:bg-leadconnect-accent-hover transition-colors text-sm whitespace-nowrap">
              Book a Demo
            </CalendlyButton>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-white p-2"
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
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden leadconnect-dark border-t border-leadconnect-teal">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            {/* Home */}
            <a
              href="/"
              className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2 w-full text-left"
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid="button-mobile-home"
            >
              Home
            </a>

            {/* Solutions */}
            <div className="space-y-2">
              <button
                className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2 w-full text-left"
                data-testid="button-mobile-services"
              >
                Solutions
              </button>
              <div className="pl-4 space-y-2">
                <a
                  href="/appointment-settings"
                  className="block text-gray-300 hover:text-white transition-colors text-sm font-medium py-1 w-full text-left"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Appointment Setting
                </a>
                <a
                  href="/b2b-lead-generation"
                  className="block text-gray-300 hover:text-white transition-colors text-sm font-medium py-1 w-full text-left"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  B2B Lead Generation
                </a>
              </div>
            </div>

            {/* About Us */}
            <a
              href="/About"
              className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2 w-full text-left"
              onClick={(e) => { handleAboutClick(e); setIsMobileMenuOpen(false); }}
              data-testid="button-mobile-about"
            >
              About Us
            </a>

            {/* Contact */}
            <a
              href="/Contact"
              className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2 w-full text-left"
              onClick={(e) => { handleContactClick(e); setIsMobileMenuOpen(false); }}
              data-testid="button-mobile-contact"
            >
              Contact
            </a>

            {/* Book a Demo */}
            <CalendlyButton className="bg-accent text-leadconnect-dark px-6 py-2.5 font-semibold hover:bg-leadconnect-accent-hover transition-colors text-sm w-full mt-2">
              Book a Demo
            </CalendlyButton>
          </nav>
        </div>
      )}
    </header>
  );
}