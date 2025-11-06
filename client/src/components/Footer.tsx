import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";

export default function Footer() {
  const menuItems = [
    { name: "Appointment Setting", href: "/appointment-settings" },
    { name: "B2B Lead Generation", href: "/b2b-lead-generation" },
    { name: "About Us", href: "/About" },
    { name: "Contact", href: "/Contact" },
  ];
  
  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Instagram, label: "Instagram" },
  ];

  return (
    <footer className="leadconnect-dark border-t border-leadconnect-teal py-12 md:py-16">
      <div className="site-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3
              className="text-white text-2xl font-bold mb-4"
              data-testid="text-footer-logo"
            >
              LeadoConnect<span className="text-accent">.</span>
            </h3>
            <p className="text-gray-400 mb-4" data-testid="text-footer-email">
              <a 
                href="mailto:fueling@leadoconnect.com" 
                className="hover:text-accent transition-colors"
              >
                fueling@leadoconnect.com
              </a>
            </p>
            <address
              className="text-gray-400 not-italic leading-relaxed"
              data-testid="text-footer-address"
            >
              Ghanshyam Enclave Office No. – 1111, Wing A<br />
              New Link Road Gandhi Nagar, Kandivali West<br />
              Mumbai 400067
            </address>
          </div>

          {/* Menu Links */}
          <div>
            <h4
              className="text-white text-lg font-bold mb-4"
              data-testid="text-footer-menu-title"
            >
              Menu
            </h4>
            <nav className="space-y-3">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-gray-400 hover:text-accent transition-colors"
                  data-testid={`link-footer-menu-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4
              className="text-white text-lg font-bold mb-4"
              data-testid="text-footer-social-title"
            >
              Social Links
            </h4>
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center text-white hover:text-leadconnect-dark transition-all"
                    data-testid={`link-footer-social-${social.label.toLowerCase()}`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>

            {/* Trust Badges - Extra Large Logos */}
            <div className="flex space-x-6">
              <div
                className="w-32 h-32 rounded-2xl bg-accent/20 flex items-center justify-center border border-accent/30 shadow-lg"
                data-testid="badge-trust-1"
              >
                <img 
                  src={logo1} 
                  alt="Trust Badge 1" 
                  className="w-28 h-28 object-contain" 
                />
              </div>
              <div
                className="w-32 h-32 rounded-2xl bg-accent/20 flex items-center justify-center border border-accent/30 shadow-lg"
                data-testid="badge-trust-2"
              >
                <img 
                  src={logo2} 
                  alt="Trust Badge 2" 
                  className="w-28 h-28 object-contain" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p
            className="text-gray-400 text-sm"
            data-testid="text-footer-copyright"
          >
            © 2025 LeadoConnect. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
