export default function Services() {
  const services = [
    {
      title: "B2B MQL & SQL Lead Generation",
      description:
        "We run full service B2B email campaigns designed to strategically engage your ideal customers. Our goal is simple: book qualified meetings that convert and we do it exceptionally well.",
    },
    {
      title: "Inbound Lead Generation",
      description:
        "LeadoConnect delivers leads within 24 hours by acting as an extension of your sales team. We enrich data, qualify intent, nurture prospects, and convert cold leads into hot MQLs and SQLs a complete inbound sales solution.",
    },
    {
      title: "Channel-Optimized Lead Research",
      description:
        "Our research team combines software, data sources, and the open web to uncover high-accuracy contacts that databases miss. We also optimize each lead by channel email, phone, or social so you know how to best reach them.",
    },
    {
      title: "Omni-Channel Sales Strategy",
      description:
        "Building a consistent top-of-funnel pipeline depends on a strategy you can execute, test, and optimize. Reaching prospects through the right channels at the right time boosts reach, efficiency, and personalized engagement.",
    },
    {
      title: "A done-for-you sales team.",
      description:
        "Hiring an internal sales development team is expensive and risky. We minimize your risk and maximize your revenue by providing an expert founder led sales team focused on outbound marketing, strategy, data, content, technology, automation and prospecting.",
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-gradient-to-br from-gray-900 via-leadconnect-dark to-gray-800 py-3 md:py-6 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="site-container relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-4 md:mb-5 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-px bg-accent"></div>
            <span
              className="text-accent text-sm font-semibold tracking-wider uppercase"
              data-testid="text-services-label"
            >
              LEAD GENERATION SERVICES
            </span>
            <div className="w-8 h-px bg-accent"></div>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-2 leading-tight"
            data-testid="text-services-title"
          >
            How LeadoConnect Delivers
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Revenue.
            </span>
          </h2>

          <p
            className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed"
            data-testid="text-services-subtitle"
          >
            We provide a complete revenue advantage by providing qualified sales
            leads, increasing sales demand, and becoming your strategic outbound
            partner.
          </p>
        </div>

        {/* Services Compact Timeline Layout */}
        <div className="max-w-4xl mx-auto animate-slide-up relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent/10 via-accent to-accent/10 hidden md:block"></div>

          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center mb-2 md:mb-3 relative ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              data-testid={`service-card-${index}`}
            >
              {/* Service Number Circle with pulse animation - hidden to avoid duplication */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center z-10 shadow-md shadow-accent/20 hidden">
                <span className="text-white font-bold text-xs">
                  0{index + 1}
                </span>
                <span className="absolute w-full h-full rounded-full bg-accent/30 animate-ping opacity-75"></span>
              </div>

              {/* Service Content with reveal animation */}
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-3" : "md:pl-3"
                } relative opacity-0 translate-y-4`}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${
                    0.1 + index * 0.05
                  }s forwards`,
                }}
              >
                {/* Service Title */}
                <h3
                  className="text-sm md:text-base font-bold text-white mb-0.5 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                  data-testid={`service-title-${index}`}
                >
                  {service.title}
                </h3>
              </div>

              {/* Service Visual Element with reveal animation */}
              <div
                className={`w-full md:w-5/12 mt-1 md:mt-0 ${
                  index % 2 === 0 ? "md:pl-3" : "md:pr-3"
                } opacity-0 translate-y-4`}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${
                    0.15 + index * 0.05
                  }s forwards`,
                }}
              >
                <div className="aspect-[16/10] md:aspect-[16/9] min-h-[190px] md:min-h-[210px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-3 shadow-md border border-gray-700 flex flex-col items-center justify-center overflow-auto modern-scrollbar relative max-w-[280px] mx-auto">
                  {/* Service Number (always visible) */}
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center z-10">
                    <span className="text-white font-bold text-xs">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Description (always visible) */}
                  <div className="p-4 text-gray-300 text-xs md:text-sm leading-relaxed overflow-y-auto max-h-full text-justify">
                    {service.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
