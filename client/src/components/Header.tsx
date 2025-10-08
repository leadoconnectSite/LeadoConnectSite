import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 leadconnect-dark border-b border-leadconnect-teal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-white text-xl md:text-2xl font-bold tracking-tight" data-testid="link-logo">
              LeadoConnect<span className="text-accent">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => {}} 
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              data-testid="button-home"
            >
              Home
            </button>
            <button 
              onClick={() => {}} 
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              data-testid="button-about"
            >
              About Us
            </button>
            <div className="relative group">
              <button 
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center"
                data-testid="button-services"
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-leadconnect-dark border border-leadconnect-teal rounded-md mt-2">
                <button 
                  onClick={() => {}}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Appointment Setting
                </button>
                <button 
                  onClick={() => {}}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  B2B Lead Generation
                </button>
              </div>
            </div>
            <Button 
              onClick={() => {}}
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
              onClick={() => {}}
              className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2 w-full text-left"
              data-testid="button-mobile-home"
            >
              Home
            </button>
            <button
              onClick={() => {}}
              className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2 w-full text-left"
              data-testid="button-mobile-about"
            >
              About Us
            </button>
            <div className="space-y-2">
              <button
                onClick={() => {}}
                className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2 w-full text-left"
                data-testid="button-mobile-services"
              >
                Services
              </button>
              <div className="pl-4 space-y-2">
                <button
                  onClick={() => {}}
                  className="block text-gray-300 hover:text-white transition-colors text-sm font-medium py-1 w-full text-left"
                >
                  Appointment Setting
                </button>
                <button
                  onClick={() => {}}
                  className="block text-gray-300 hover:text-white transition-colors text-sm font-medium py-1 w-full text-left"
                >
                  B2B Lead Generation
                </button>
              </div>
            </div>
            <Button
              onClick={() => {}}
              className="leadconnect-accent text-leadconnect-dark px-6 py-2.5 font-semibold hover:bg-leadconnect-accent-hover transition-colors text-sm w-full"
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
