import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const menuItems = ["Blog", "Pricing", "Contact"];
  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Instagram, label: "Instagram" }
  ];

  return (
    <footer className="leadconnect-dark border-t border-leadconnect-teal py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4" data-testid="text-footer-logo">
              LeadConnect<span className="text-accent">.</span>
            </h3>
            <p className="text-gray-400 mb-4" data-testid="text-footer-email">
              fuel@yleadconnect.com
            </p>
            <address className="text-gray-400 not-italic leading-relaxed" data-testid="text-footer-address">
              A-305, Om Heera Panna Mall,<br />
              Link Road, Oshiwara,<br />
              IIN Wing A Link Road Goregaon<br />
              Nagar Andheri West Mumbai<br />
              400061
            </address>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4" data-testid="text-footer-menu-title">Menu</h4>
            <nav className="space-y-3">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-400 hover:text-accent transition-colors"
                  data-testid={`link-footer-menu-${item.toLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4" data-testid="text-footer-social-title">Social Links</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center text-white hover:text-leadconnect-dark transition-all"
                    data-testid={`link-footer-social-${social.label.toLowerCase()}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Trust Badges */}
            <div className="flex space-x-4">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center" data-testid="badge-trust-1">
                <span className="text-xs text-white font-bold">Badge 1</span>
              </div>
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center" data-testid="badge-trust-2">
                <span className="text-xs text-white font-bold">Badge 2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm" data-testid="text-footer-copyright">
            © 2025 LeadConnect. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
