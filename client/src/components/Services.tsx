import { useState } from "react";

export default function Services() {
  // State to track which service descriptions are visible
  const [visibleDescriptions, setVisibleDescriptions] = useState<number[]>([]);
  
  // Toggle description visibility
  const toggleDescription = (index: number) => {
    setVisibleDescriptions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };
  
  const services = [
    {
      title: "B2B MQL & SQL Lead Generation",
      description: "We run full service B2B email campaigns designed to strategically engage your ideal customers. Our goal is simple: book qualified meetings that convert and we do it exceptionally well.",
    },
    {
      title: "Inbound Lead Generation",
      description: "LeadoConnect delivers leads within 24 hours by acting as an extension of your sales team. We enrich data, qualify intent, nurture prospects, and convert cold leads into hot MQLs and SQLs a complete inbound sales solution.",
    },
    {
      title: "Channel-Optimized Lead Research",
      description: "Our research team combines software, data sources, and the open web to uncover high-accuracy contacts that databases miss. We also optimize each lead by channel email, phone, or social so you know how to best reach them.",
    },
    {
      title: "Omni-Channel Sales Strategy",
      description: "Building a consistent top-of-funnel pipeline depends on a strategy you can execute, test, and optimize. Reaching prospects through the right channels at the right time boosts reach, efficiency, and personalized engagement.",
    },
    {
      title: "A done-for-you sales team.",
      description: "Hiring an internal sales development team is expensive and risky. We minimize your risk and maximize your revenue by providing an expert founder led sales team focused on outbound marketing, strategy, data, content, technology, automation and prospecting.",
    }
  ];

  return (
    <section id="services" className="relative bg-gradient-to-br from-gray-900 via-leadconnect-dark to-gray-800 py-3 md:py-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-4 md:mb-5 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-px bg-accent"></div>
            <span className="text-accent text-sm font-semibold tracking-wider uppercase" data-testid="text-services-label">
              LEAD GENERATION SERVICES
            </span>
            <div className="w-8 h-px bg-accent"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-2 leading-tight" data-testid="text-services-title">
            How LeadConnect Delivers<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Revenue.
            </span>
          </h2>
          
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed" data-testid="text-services-subtitle">
            We provide a complete revenue advantage by providing qualified sales leads, increasing sales demand, and becoming your strategic outbound partner.
          </p>
        </div>

        {/* Services Compact Timeline Layout */}
        <div className="max-w-4xl mx-auto animate-slide-up relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent/10 via-accent to-accent/10 hidden md:block"></div>
          
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center mb-2 md:mb-3 relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              data-testid={`service-card-${index}`}
            >
              {/* Service Number Circle with pulse animation - hidden to avoid duplication */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center z-10 shadow-md shadow-accent/20 hidden">
                <span className="text-white font-bold text-xs">0{index + 1}</span>
                <span className="absolute w-full h-full rounded-full bg-accent/30 animate-ping opacity-75"></span>
              </div>

              {/* Service Content with reveal animation */}
              <div 
                className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-3' : 'md:pl-3'} relative opacity-0 translate-y-4`}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${0.1 + index * 0.05}s forwards`
                }}
              >
                {/* Service Title */}
                <h3 className="text-sm md:text-base font-bold text-white mb-0.5 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300" data-testid={`service-title-${index}`}>
                  {service.title}
                </h3>
                {/* Description is now shown in the visual element card */}
                {/* Learn More Button with hover effect */}
                <button 
                  onClick={() => toggleDescription(index)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-full text-accent hover:text-white transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10">
                    {visibleDescriptions.includes(index) ? "Show less" : "Learn more"}
                  </span>
                  <span className="relative z-10 text-xs group-hover:translate-x-1 transition-transform duration-300">
                    {visibleDescriptions.includes(index) ? "↑" : "→"}
                  </span>
                  <span className="absolute inset-0 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
              </div>
              
              {/* Service Visual Element with reveal animation */}
              <div 
                className={`w-full md:w-5/12 mt-1 md:mt-0 ${index % 2 === 0 ? 'md:pl-3' : 'md:pr-3'} opacity-0 translate-y-4`}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${0.15 + index * 0.05}s forwards`
                }}
              >
                <div className="aspect-[16/10] md:aspect-[16/9] min-h-[190px] md:min-h-[210px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-3 shadow-md border border-gray-700 flex flex-col items-center justify-center overflow-auto modern-scrollbar group relative max-w-[280px] mx-auto">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Service Number (always visible) */}
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center z-10">
                    <span className="text-white font-bold text-xs">0{index + 1}</span>
                  </div>
                  
                  {/* Description (shown when toggled) or Icon (when not toggled) */}
                  {visibleDescriptions.includes(index) ? (
                    <div className="p-4 animate-fadeIn text-gray-300 text-xs md:text-sm leading-relaxed overflow-y-auto max-h-full text-justify">
                      {service.description}
                    </div>
                  ) : (
                    <div 
                      className="text-3xl md:text-4xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors duration-500 flex items-center justify-center w-full h-full"
                      style={{
                        animation: 'floating 2s ease-in-out infinite'
                      }}
                    >
                      {/* Advanced SVGs related to data in different shapes */}
                      {index === 0 && (
                        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-6">
                          <path d="M10,50 Q25,25 40,45 T70,30 T90,50" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                          <circle cx="10" cy="50" r="4" fill="currentColor" />
                          <circle cx="40" cy="45" r="4" fill="currentColor" />
                          <circle cx="70" cy="30" r="4" fill="currentColor" />
                          <circle cx="90" cy="50" r="4" fill="currentColor" />
                          <path d="M10,70 L90,70" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                          <path d="M10,90 L90,90" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-3">
                          <path d="M20,80 L50,20 L80,80 Z" stroke="currentColor" strokeWidth="3" fill="none" />
                          <circle cx="50" cy="20" r="6" fill="currentColor" />
                          <path d="M30,50 L70,50" stroke="currentColor" strokeWidth="2" />
                          <path d="M35,65 L65,65" stroke="currentColor" strokeWidth="2" />
                          <path d="M40,35 L60,35" stroke="currentColor" strokeWidth="2" />
                          <circle cx="20" cy="80" r="4" fill="currentColor" />
                          <circle cx="80" cy="80" r="4" fill="currentColor" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-12">
                          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="3" fill="none" />
                          <path d="M50,20 L50,80" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" />
                          <path d="M20,50 L80,50" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" />
                          <circle cx="50" cy="50" r="5" fill="currentColor" />
                          <path d="M70,30 L85,15" stroke="currentColor" strokeWidth="3" />
                          <circle cx="85" cy="15" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-6">
                          <rect x="25" y="15" width="50" height="70" rx="5" stroke="currentColor" strokeWidth="3" fill="none" />
                          <rect x="35" y="25" width="30" height="15" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                          <circle cx="50" cy="60" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                          <path d="M50,70 L50,75" stroke="currentColor" strokeWidth="2" />
                          <path d="M40,60 L60,60" stroke="currentColor" strokeWidth="2" />
                          <path d="M50,50 L50,70" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      )}
                      {index === 4 && (
                        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-3">
                          <circle cx="35" cy="40" r="15" stroke="currentColor" strokeWidth="3" fill="none" />
                          <circle cx="65" cy="40" r="15" stroke="currentColor" strokeWidth="3" fill="none" />
                          <path d="M35,55 Q50,80 65,55" stroke="currentColor" strokeWidth="3" fill="none" />
                          <path d="M20,30 L50,30" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
                          <path d="M50,30 L80,30" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
                          <circle cx="50" cy="30" r="4" fill="currentColor" />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
