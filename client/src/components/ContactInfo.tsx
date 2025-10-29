import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";

export default function ContactInfo() {
  const contactInfo = [
    {
      icon: <Mail className="text-accent" size={24} />,
      title: "Email Us",
      details: "fueling@leadoconnect.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="text-accent" size={24} />,
      title: "Call Us",
      details: "+91 98342 81898",
      description: "Mon-Fri from 9am-6pm"
    },
    {
      icon: <MapPin className="text-accent" size={24} />,
      title: "Visit Us",
      details: "Ghanshyam Enclave Office No. 1111, Wing A",
      description: "New Link Road, Kandivali West, Mumbai 400067"
    },
    {
      icon: <Clock className="text-accent" size={24} />,
      title: "Response Time",
      details: "Within 24 hours",
      description: "For all inquiries"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-leadconnect-dark to-gray-800 py-12 md:py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-accent"></div>
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              CONTACT
            </span>
            <div className="w-8 h-px bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Other Ways to <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Choose the communication method that works best for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-5 border border-gray-700 hover:border-accent/50 transition-all duration-300 text-center hover:transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-accent font-semibold mb-2 text-sm">{item.details}</p>
              <p className="text-gray-300 text-xs">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 max-w-xl mx-auto hover:border-accent/30 transition-all duration-300">
            <MessageCircle className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Prefer a Live Demo?
            </h3>
            <p className="text-gray-300 mb-6 text-base">
              Schedule a personalized demo with our experts and see how we can transform your lead generation process.
            </p>
            <CalendlyButton className="bg-accent text-leadconnect-dark px-6 py-3 font-semibold hover:bg-leadconnect-accent-hover transition-colors text-base rounded-lg">
              Book a Live Demo
            </CalendlyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
