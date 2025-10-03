import { CheckCircle, Users, Search, MessageCircle, UserCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: CheckCircle,
      title: "B2B MQL & SQL Lead Generation",
      description: "Full-service of B2B campaigns focused on engaging your next best customer. Whether you're exploring new business to grow your business, we're going by setting qualified meetings that convert. And, we do it well."
    },
    {
      icon: Users,
      title: "Inbound Lead Generation",
      description: "We provide experienced lead generation automation email focused campaigns for driving revenue growth."
    },
    {
      icon: Search,
      title: "Channel-Optimized Lead Research",
      description: "Advanced research techniques to identify and qualify your ideal prospects across multiple channels."
    },
    {
      icon: MessageCircle,
      title: "Omni-Channel Sales Strategy",
      description: "Comprehensive multi-channel approach to maximize your outreach effectiveness and conversion rates."
    },
    {
      icon: UserCheck,
      title: "A done-for-you sales team.",
      description: "Hiring an internal sales development team is expensive and risky. We minimize your risk and maximize your revenue by providing an expert founder-led sales team focused on outbound strategy, data, content, technology, and prospecting.",
      isFullWidth: true
    }
  ];

  return (
    <section id="services" className="leadconnect-dark py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 animate-fade-in">
          <span className="text-accent text-xs md:text-sm font-semibold tracking-wider uppercase" data-testid="text-services-label">
            LEAD GENERATION SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6" data-testid="text-services-title">
            How LeadConnect Delivers<br className="hidden sm:block" />
            Revenue.
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl" data-testid="text-services-subtitle">
            We provide a complete revenue advantage by providing qualified sales leads, increasing sales demand, and becoming your strategic outbound partner.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl animate-slide-up">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group ${service.isFullWidth ? 'md:col-span-2' : ''}`}
                data-testid={`service-${index}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3" data-testid={`text-service-title-${index}`}>
                      {service.title}
                    </h3>
                    {service.description && (
                      <p className="text-gray-300 leading-relaxed max-w-3xl" data-testid={`text-service-description-${index}`}>
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
