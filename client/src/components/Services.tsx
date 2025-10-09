import { useState } from "react";

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      title: "B2B MQL & SQL Lead Generation",
      description: "Full-service of B2B campaigns focused on engaging your next best customer strategically through email. We are in business to grow your business by setting qualified meetings that convert. And, we do it well!",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V22H13V11C14.1 11 15 10.1 15 9H21ZM7 12V14H5V12H7ZM19 12V14H17V12H19ZM7 16V18H5V16H7ZM19 16V18H17V16H19ZM7 20V22H5V20H7ZM19 20V22H17V20H19Z"/>
        </svg>
      )
    },
    {
      title: "Inbound Lead Generation",
      description: "Speed to lead within 24 hours. We convert cold leads into (MQLs) & sales-qualified leads (SQLs) by becoming an Extension of your Sales Team. By, enriching the data, pre-qualifying their buying intent, nurturing them into opportunities,and ultimately converting them to hot leads LeadoConnect is a complete inbound sales solution.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
        </svg>
      )
    },
    {
      title: "Channel-Optimized Lead Research",
      description: "Power your sales and marketing teams with 100% human-\nsourced and validated connections. Our research team utilizes\nsoftware, public/private data sources, and the open web to\ncurate lead lists that databases just don't have. We then\nchannel-optimize each contact to let you know whether your\nleads are more likely to respond by email, phone, or social.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
          <circle cx="12" cy="8" r="2"/>
          <path d="M4,18V20H20V18C20,15.79 16.42,14 12,14C7.58,14 4,15.79 4,18Z"/>
        </svg>
      )
    },
    {
      title: "Omni-Channel Sales Strategy",
      description: "Establishing a consistent top-of-funnel revenue pipeline is\nwholly dependent on the strategy you execute, test, and\noptimize. When reaching potential customers through the most\neffective channels at the most opportune time you increase\nreach, have greater flexibility, improve efficiency, and provide a\nmore personalized engagement.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M22,21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21M16,8H18V15H16V8M12,2H14V15H12V2M8,9H10V15H8V9M4,11H6V15H4V11Z"/>
        </svg>
      )
    },
    {
      title: "A done-for-you sales team.",
      description: "Hiring an internal sales development team is expensive and\nrisky. We minimize your risk and maximize your revenue by\nproviding an expert founder-led sales team focused on\noutbound marketing, strategy, data, content, technology,\nautomation and prospecting.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M16,4C16.88,4 17.67,4.5 18,5.26L19,7H20A2,2 0 0,1 22,9V16A2,2 0 0,1 20,18H19L18,19.74C17.67,20.5 16.88,21 16,21H8C7.12,21 6.33,20.5 6,19.74L5,18H4A2,2 0 0,1 2,16V9A2,2 0 0,1 4,7H5L6,5.26C6.33,4.5 7.12,4 8,4H16M8.5,7A1.5,1.5 0 0,0 7,8.5A1.5,1.5 0 0,0 8.5,10A1.5,1.5 0 0,0 10,8.5A1.5,1.5 0 0,0 8.5,7M15.5,7A1.5,1.5 0 0,0 14,8.5A1.5,1.5 0 0,0 15.5,10A1.5,1.5 0 0,0 17,8.5A1.5,1.5 0 0,0 15.5,7M12,11A3,3 0 0,0 9,14A3,3 0 0,0 12,17A3,3 0 0,0 15,14A3,3 0 0,0 12,11Z"/>
        </svg>
      )
    }
  ];

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="relative bg-gradient-to-br from-gray-900 via-leadconnect-dark to-gray-800 py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-accent"></div>
            <span className="text-accent text-sm font-semibold tracking-wider uppercase" data-testid="text-services-label">
              LEAD GENERATION SERVICES
            </span>
            <div className="w-8 h-px bg-accent"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="text-services-title">
            How LeadConnect Delivers<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Revenue.
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" data-testid="text-services-subtitle">
            We provide a complete revenue advantage by providing qualified sales leads, increasing sales demand, and becoming your strategic outbound partner.
          </p>
        </div>

        {/* Simple Services List */}
        <div className="max-w-4xl mx-auto animate-slide-up px-4">
          <div className="space-y-0">
            {services.map((service, index) => (
              <div key={index} className="overflow-hidden transition-all duration-500 ease-in-out">
                {/* Service Title */}
                <button
                  onClick={() => toggleService(index)}
                  className={`w-full text-left py-4 transition-all duration-300 ${
                    expandedService === index 
                      ? 'text-accent' 
                      : 'text-white hover:text-accent'
                  }`}
                  data-testid={`service-toggle-${index}`}
                >
                  <div className="flex items-center gap-3">
                    {/* Modern Arrow Icon */}
                    <div className={`transition-all duration-300 ${
                      expandedService === index 
                        ? 'transform rotate-90 text-accent' 
                        : 'text-gray-400 hover:text-accent'
                    }`}>
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="transition-all duration-300"
                      >
                        <path 
                          d="M9 18L15 12L9 6" 
                          stroke="currentColor" 
                          strokeWidth="2.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="drop-shadow-sm"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold" data-testid={`service-title-${index}`}>
                      {service.title}
                    </h3>
                  </div>
                </button>

                {/* Service Description - Appears below when clicked with smooth animation */}
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    expandedService === index 
                      ? 'max-h-96 opacity-100 pb-6' 
                      : 'max-h-0 opacity-0 pb-0'
                  }`}
                >
                  <div className={`${index === 0 || index === 1 || index === 2 || index === 3 || index === 4 ? 'flex flex-col lg:flex-row lg:items-start lg:gap-12' : ''}`}>
                    <div className={`${index === 0 || index === 1 || index === 2 || index === 3 || index === 4 ? 'lg:flex-1' : ''}`}>
                      <p className="text-gray-300 leading-relaxed text-base md:text-lg pl-4 whitespace-pre-line" data-testid={`service-description-${index}`}>
                        {service.description}
                      </p>
                    </div>
                    
                    {/* SVG Illustration for first service only */}
                    {index === 0 && (
                      <div className="lg:flex-1 lg:max-w-md mt-2 lg:-mt-4 pl-8 lg:pl-4">
                        <svg viewBox="0 0 400 300" className="w-full h-auto max-w-sm mx-auto lg:mx-0">
                          {/* Background */}
                          <rect width="400" height="300" fill="#1e293b" rx="20"/>
                          
                          {/* Main Dashboard Window */}
                          <rect x="40" y="40" width="320" height="220" fill="#0f172a" rx="12" stroke="#334155" strokeWidth="2"/>
                          
                          {/* Window Header */}
                          <rect x="40" y="40" width="320" height="40" fill="#1e293b" rx="12"/>
                          <circle cx="60" cy="60" r="4" fill="#ef4444"/>
                          <circle cx="75" cy="60" r="4" fill="#f59e0b"/>
                          <circle cx="90" cy="60" r="4" fill="#10b981"/>
                          
                          {/* Title */}
                          <text x="120" y="65" fill="#e2e8f0" fontSize="12" fontFamily="Arial">Lead Generation Dashboard</text>
                          
                          {/* Lead Cards */}
                          <rect x="60" y="100" width="140" height="50" fill="#065f46" rx="8" opacity="0.8"/>
                          <text x="70" y="115" fill="#10b981" fontSize="10" fontWeight="bold">Brad Bronson</text>
                          <text x="70" y="130" fill="#6ee7b7" fontSize="8">MQL - Tech Industry</text>
                          <text x="70" y="142" fill="#6ee7b7" fontSize="8">Engagement Score: 85%</text>
                          
                          <rect x="60" y="160" width="140" height="50" fill="#1e40af" rx="8" opacity="0.8"/>
                          <text x="70" y="175" fill="#3b82f6" fontSize="10" fontWeight="bold">Jenn Fisher</text>
                          <text x="70" y="190" fill="#93c5fd" fontSize="8">SQL - Healthcare</text>
                          <text x="70" y="202" fill="#93c5fd" fontSize="8">Ready for Demo</text>
                          
                          <rect x="220" y="100" width="120" height="110" fill="#7c2d12" rx="8" opacity="0.8"/>
                          <text x="230" y="115" fill="#f97316" fontSize="10" fontWeight="bold">Campaign Stats</text>
                          
                          {/* Stats Bars */}
                          <rect x="230" y="125" width="80" height="8" fill="#292524" rx="4"/>
                          <rect x="230" y="125" width="60" height="8" fill="#f97316" rx="4"/>
                          <text x="230" y="145" fill="#fed7aa" fontSize="8">Email Open Rate: 75%</text>
                          
                          <rect x="230" y="155" width="80" height="8" fill="#292524" rx="4"/>
                          <rect x="230" y="155" width="45" height="8" fill="#10b981" rx="4"/>
                          <text x="230" y="175" fill="#a7f3d0" fontSize="8">Conversion Rate: 12%</text>
                          
                          <rect x="230" y="185" width="80" height="8" fill="#292524" rx="4"/>
                          <rect x="230" y="185" width="70" height="8" fill="#3b82f6" rx="4"/>
                          <text x="230" y="205" fill="#bfdbfe" fontSize="8">Response Rate: 28%</text>
                          
                          {/* Floating Elements */}
                          <circle cx="320" cy="120" r="15" fill="#10b981" opacity="0.7">
                            <animate attributeName="cy" values="120;110;120" dur="3s" repeatCount="indefinite"/>
                          </circle>
                          <text x="315" y="125" fill="white" fontSize="8">+5</text>
                          
                          <circle cx="80" cy="240" r="12" fill="#3b82f6" opacity="0.7">
                            <animate attributeName="cx" values="80;90;80" dur="2s" repeatCount="indefinite"/>
                          </circle>
                          <text x="77" y="244" fill="white" fontSize="7">📧</text>
                          
                          {/* Connection Lines */}
                          <path d="M200 125 Q250 100 300 120" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.6">
                            <animate attributeName="stroke-dasharray" values="0,100;10,90;0,100" dur="2s" repeatCount="indefinite"/>
                          </path>
                          
                          <path d="M200 185 Q250 160 300 180" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.6">
                            <animate attributeName="stroke-dasharray" values="0,100;10,90;0,100" dur="2.5s" repeatCount="indefinite"/>
                          </path>
                        </svg>
                       </div>
                     )}
                     
                     {/* SVG Illustration for second service only */}
                     {index === 1 && (
                       <div className="lg:flex-1 lg:max-w-md mt-2 lg:-mt-4 pl-8 lg:pl-4">
                         <svg viewBox="0 0 400 300" className="w-full h-auto max-w-sm mx-auto lg:mx-0">
                           {/* Background */}
                           <rect width="400" height="300" fill="#1e293b" rx="20"/>
                           
                           {/* Main Pipeline Container */}
                           <rect x="30" y="30" width="340" height="240" fill="#0f172a" rx="15" stroke="#334155" strokeWidth="2"/>
                           
                           {/* Title */}
                           <text x="200" y="55" fill="#e2e8f0" fontSize="14" fontWeight="bold" textAnchor="middle">24-Hour Lead Pipeline</text>
                           
                           {/* Timer Circle */}
                           <circle cx="80" cy="90" r="25" fill="#1e40af" stroke="#3b82f6" strokeWidth="3"/>
                           <text x="80" y="85" fill="#93c5fd" fontSize="10" textAnchor="middle" fontWeight="bold">24H</text>
                           <text x="80" y="98" fill="#93c5fd" fontSize="8" textAnchor="middle">SPEED</text>
                           
                           {/* Pipeline Stages */}
                           {/* Cold Lead */}
                           <rect x="50" y="130" width="70" height="35" fill="#7f1d1d" rx="8" opacity="0.9"/>
                           <text x="85" y="145" fill="#fca5a5" fontSize="9" textAnchor="middle" fontWeight="bold">Cold Lead</text>
                           <text x="85" y="157" fill="#fca5a5" fontSize="7" textAnchor="middle">Raw Data</text>
                           
                           {/* Arrow 1 */}
                           <path d="M125 147 L145 147" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowhead1)"/>
                           
                           {/* MQL */}
                           <rect x="150" y="130" width="70" height="35" fill="#065f46" rx="8" opacity="0.9"/>
                           <text x="185" y="145" fill="#6ee7b7" fontSize="9" textAnchor="middle" fontWeight="bold">MQL</text>
                           <text x="185" y="157" fill="#6ee7b7" fontSize="7" textAnchor="middle">Qualified</text>
                           
                           {/* Arrow 2 */}
                           <path d="M225 147 L245 147" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowhead2)"/>
                           
                           {/* SQL */}
                           <rect x="250" y="130" width="70" height="35" fill="#1e40af" rx="8" opacity="0.9"/>
                           <text x="285" y="145" fill="#93c5fd" fontSize="9" textAnchor="middle" fontWeight="bold">SQL</text>
                           <text x="285" y="157" fill="#93c5fd" fontSize="7" textAnchor="middle">Sales Ready</text>
                           
                           {/* Hot Lead */}
                           <rect x="150" y="190" width="100" height="35" fill="#7c2d12" rx="8" opacity="0.9"/>
                           <text x="200" y="205" fill="#fed7aa" fontSize="9" textAnchor="middle" fontWeight="bold">🔥 Hot Lead</text>
                           <text x="200" y="217" fill="#fed7aa" fontSize="7" textAnchor="middle">Ready to Convert</text>
                           
                           {/* Curved Arrow to Hot Lead */}
                           <path d="M285 170 Q285 180 250 207" stroke="#f97316" strokeWidth="3" fill="none" markerEnd="url(#arrowhead3)"/>
                           
                           {/* Data Enrichment Process */}
                           <rect x="330" y="80" width="50" height="80" fill="#581c87" rx="8" opacity="0.8"/>
                           <text x="355" y="95" fill="#c4b5fd" fontSize="8" textAnchor="middle" fontWeight="bold">Data</text>
                           <text x="355" y="107" fill="#c4b5fd" fontSize="8" textAnchor="middle">Enrichment</text>
                           
                           {/* Data points */}
                           <circle cx="340" cy="120" r="3" fill="#a78bfa"/>
                           <circle cx="355" cy="125" r="3" fill="#a78bfa"/>
                           <circle cx="370" cy="130" r="3" fill="#a78bfa"/>
                           <circle cx="345" cy="140" r="3" fill="#a78bfa"/>
                           <circle cx="365" cy="145" r="3" fill="#a78bfa"/>
                           
                           {/* Nurturing Waves */}
                           <path d="M50 250 Q70 240 90 250 Q110 260 130 250 Q150 240 170 250" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.7">
                             <animate attributeName="d" values="M50 250 Q70 240 90 250 Q110 260 130 250 Q150 240 170 250;M50 250 Q70 260 90 250 Q110 240 130 250 Q150 260 170 250;M50 250 Q70 240 90 250 Q110 260 130 250 Q150 240 170 250" dur="3s" repeatCount="indefinite"/>
                           </path>
                           <text x="110" y="270" fill="#6ee7b7" fontSize="8" textAnchor="middle">Nurturing Process</text>
                           
                           {/* Floating Analytics */}
                           <circle cx="320" cy="200" r="12" fill="#f59e0b" opacity="0.8">
                             <animate attributeName="cy" values="200;190;200" dur="2s" repeatCount="indefinite"/>
                           </circle>
                           <text x="320" y="205" fill="white" fontSize="7" textAnchor="middle">📊</text>
                           
                           {/* Connection Lines */}
                           <path d="M330 120 Q300 110 285 130" stroke="#a78bfa" strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="5,5">
                             <animate attributeName="stroke-dashoffset" values="0;10;0" dur="2s" repeatCount="indefinite"/>
                           </path>
                           
                           {/* Arrow Markers */}
                           <defs>
                             <marker id="arrowhead1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                               <polygon points="0 0, 10 3.5, 0 7" fill="#10b981"/>
                             </marker>
                             <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                               <polygon points="0 0, 10 3.5, 0 7" fill="#10b981"/>
                             </marker>
                             <marker id="arrowhead3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                               <polygon points="0 0, 10 3.5, 0 7" fill="#f97316"/>
                             </marker>
                           </defs>
                         </svg>
                        </div>
                      )}
                      
                      {/* SVG Illustration for third service only */}
                      {index === 2 && (
                        <div className="lg:flex-1 lg:max-w-md mt-2 lg:-mt-4 pl-8 lg:pl-4">
                          <svg viewBox="0 0 400 300" className="w-full h-auto max-w-sm mx-auto lg:mx-0">
                            {/* Background */}
                            <rect width="400" height="300" fill="#1e293b" rx="20"/>
                            
                            {/* Main Research Hub */}
                            <rect x="25" y="25" width="350" height="250" fill="#0f172a" rx="15" stroke="#334155" strokeWidth="2"/>
                            
                            {/* Title */}
                            <text x="200" y="50" fill="#e2e8f0" fontSize="14" fontWeight="bold" textAnchor="middle">Lead Research Hub</text>
                            
                            {/* Human Researcher Icon */}
                            <circle cx="80" cy="90" r="20" fill="#065f46" stroke="#10b981" strokeWidth="2"/>
                            <circle cx="80" cy="85" r="8" fill="#6ee7b7"/>
                            <path d="M65 105 Q80 95 95 105" stroke="#6ee7b7" strokeWidth="3" fill="none"/>
                            <text x="80" y="125" fill="#10b981" fontSize="8" textAnchor="middle" fontWeight="bold">Human Validated</text>
                            
                            {/* Data Sources */}
                            <rect x="130" y="70" width="80" height="25" fill="#1e40af" rx="6" opacity="0.9"/>
                            <text x="170" y="85" fill="#93c5fd" fontSize="9" textAnchor="middle" fontWeight="bold">Public Data</text>
                            
                            <rect x="130" y="100" width="80" height="25" fill="#7c2d12" rx="6" opacity="0.9"/>
                            <text x="170" y="115" fill="#fed7aa" fontSize="9" textAnchor="middle" fontWeight="bold">Private Sources</text>
                            
                            <rect x="130" y="130" width="80" height="25" fill="#581c87" rx="6" opacity="0.9"/>
                            <text x="170" y="145" fill="#c4b5fd" fontSize="9" textAnchor="middle" fontWeight="bold">Open Web</text>
                            
                            {/* Channel Optimization Panel */}
                            <rect x="240" y="70" width="120" height="100" fill="#0f172a" rx="8" stroke="#374151" strokeWidth="1"/>
                            <text x="300" y="85" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontWeight="bold">Channel Optimizer</text>
                            
                            {/* Email Channel */}
                            <rect x="250" y="95" width="30" height="20" fill="#dc2626" rx="4" opacity="0.8"/>
                            <text x="265" y="107" fill="white" fontSize="8" textAnchor="middle">📧</text>
                            <text x="290" y="107" fill="#fca5a5" fontSize="8">Email: 85%</text>
                            
                            {/* Phone Channel */}
                            <rect x="250" y="120" width="30" height="20" fill="#059669" rx="4" opacity="0.8"/>
                            <text x="265" y="132" fill="white" fontSize="8" textAnchor="middle">📞</text>
                            <text x="290" y="132" fill="#6ee7b7" fontSize="8">Phone: 65%</text>
                            
                            {/* Social Channel */}
                            <rect x="250" y="145" width="30" height="20" fill="#2563eb" rx="4" opacity="0.8"/>
                            <text x="265" y="157" fill="white" fontSize="8" textAnchor="middle">💬</text>
                            <text x="290" y="157" fill="#93c5fd" fontSize="8">Social: 45%</text>
                            
                            {/* Lead Profile Cards */}
                            <rect x="40" y="180" width="100" height="40" fill="#065f46" rx="6" opacity="0.9"/>
                            <text x="90" y="195" fill="#10b981" fontSize="9" textAnchor="middle" fontWeight="bold">Sarah Johnson</text>
                            <text x="90" y="207" fill="#6ee7b7" fontSize="7" textAnchor="middle">CTO - Tech Startup</text>
                            <text x="90" y="217" fill="#6ee7b7" fontSize="7" textAnchor="middle">Best: Email</text>
                            
                            <rect x="160" y="180" width="100" height="40" fill="#1e40af" rx="6" opacity="0.9"/>
                            <text x="210" y="195" fill="#3b82f6" fontSize="9" textAnchor="middle" fontWeight="bold">Mike Chen</text>
                            <text x="210" y="207" fill="#93c5fd" fontSize="7" textAnchor="middle">VP Sales - Enterprise</text>
                            <text x="210" y="217" fill="#93c5fd" fontSize="7" textAnchor="middle">Best: Phone</text>
                            
                            <rect x="280" y="180" width="100" height="40" fill="#7c2d12" rx="6" opacity="0.9"/>
                            <text x="330" y="195" fill="#f97316" fontSize="9" textAnchor="middle" fontWeight="bold">Lisa Park</text>
                            <text x="330" y="207" fill="#fed7aa" fontSize="7" textAnchor="middle">CMO - Mid-Market</text>
                            <text x="330" y="217" fill="#fed7aa" fontSize="7" textAnchor="middle">Best: Social</text>
                            
                            {/* Data Flow Lines */}
                            <path d="M100 90 L130 82" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow1)"/>
                            <path d="M100 90 L130 112" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow2)"/>
                            <path d="M100 90 L130 142" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow3)"/>
                            
                            {/* Processing to Channel Optimization */}
                            <path d="M210 112 L240 112" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow4)"/>
                            <path d="M210 130 L240 130" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow5)"/>
                            <path d="M210 148 L240 148" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow6)"/>
                            
                            {/* Validation Checkmarks */}
                            <circle cx="350" cy="100" r="8" fill="#10b981" opacity="0.8">
                              <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                            </circle>
                            <text x="350" y="104" fill="white" fontSize="8" textAnchor="middle">✓</text>
                            
                            <circle cx="350" cy="125" r="8" fill="#10b981" opacity="0.8">
                              <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite"/>
                            </circle>
                            <text x="350" y="129" fill="white" fontSize="8" textAnchor="middle">✓</text>
                            
                            <circle cx="350" cy="150" r="8" fill="#10b981" opacity="0.8">
                              <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
                            </circle>
                            <text x="350" y="154" fill="white" fontSize="8" textAnchor="middle">✓</text>
                            
                            {/* Floating Research Icons */}
                            <circle cx="60" cy="160" r="10" fill="#f59e0b" opacity="0.7">
                              <animate attributeName="cy" values="160;150;160" dur="3s" repeatCount="indefinite"/>
                            </circle>
                            <text x="60" y="164" fill="white" fontSize="7" textAnchor="middle">🔍</text>
                            
                            <circle cx="320" cy="240" r="10" fill="#8b5cf6" opacity="0.7">
                              <animate attributeName="cx" values="320;330;320" dur="2s" repeatCount="indefinite"/>
                            </circle>
                            <text x="320" y="244" fill="white" fontSize="7" textAnchor="middle">📊</text>
                            
                            {/* Arrow Markers */}
                            <defs>
                              <marker id="arrow1" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                                <polygon points="0 0, 8 3, 0 6" fill="#10b981"/>
                              </marker>
                              <marker id="arrow2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                                <polygon points="0 0, 8 3, 0 6" fill="#10b981"/>
                              </marker>
                              <marker id="arrow3" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                                <polygon points="0 0, 8 3, 0 6" fill="#10b981"/>
                              </marker>
                              <marker id="arrow4" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                                <polygon points="0 0, 8 3, 0 6" fill="#f59e0b"/>
                              </marker>
                              <marker id="arrow5" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                                <polygon points="0 0, 8 3, 0 6" fill="#f59e0b"/>
                              </marker>
                              <marker id="arrow6" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                                <polygon points="0 0, 8 3, 0 6" fill="#f59e0b"/>
                              </marker>
                            </defs>
                           </svg>
                         </div>
                       )}
                       
                       {/* SVG Illustration for fourth service only */}
                       {index === 3 && (
                         <div className="lg:flex-1 lg:max-w-md mt-2 lg:-mt-4 pl-8 lg:pl-4">
                           <svg viewBox="0 0 400 300" className="w-full h-auto max-w-sm mx-auto lg:mx-0">
                             {/* Background */}
                             <rect width="400" height="300" fill="#0f172a" rx="20"/>
                             
                             {/* Central Strategy Hub */}
                             <circle cx="200" cy="150" r="45" fill="#1e40af" stroke="#3b82f6" strokeWidth="3" opacity="0.9"/>
                             <text x="200" y="145" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">OMNI</text>
                             <text x="200" y="158" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">CHANNEL</text>
                             <text x="200" y="171" fill="#93c5fd" fontSize="8" textAnchor="middle">STRATEGY</text>
                             
                             {/* Channel Nodes */}
                             {/* Email Channel */}
                             <circle cx="120" cy="80" r="25" fill="#dc2626" opacity="0.8">
                               <animate attributeName="r" values="25;28;25" dur="3s" repeatCount="indefinite"/>
                             </circle>
                             <text x="120" y="85" fill="white" fontSize="12" textAnchor="middle">📧</text>
                             <text x="120" y="55" fill="#fca5a5" fontSize="9" fontWeight="bold" textAnchor="middle">Email</text>
                             <text x="120" y="110" fill="#fca5a5" fontSize="7" textAnchor="middle">85% Open Rate</text>
                             
                             {/* Phone Channel */}
                             <circle cx="280" cy="80" r="25" fill="#059669" opacity="0.8">
                               <animate attributeName="r" values="25;28;25" dur="2.5s" repeatCount="indefinite"/>
                             </circle>
                             <text x="280" y="85" fill="white" fontSize="12" textAnchor="middle">📞</text>
                             <text x="280" y="55" fill="#6ee7b7" fontSize="9" fontWeight="bold" textAnchor="middle">Phone</text>
                             <text x="280" y="110" fill="#6ee7b7" fontSize="7" textAnchor="middle">65% Connect</text>
                             
                             {/* Social Channel */}
                             <circle cx="80" cy="220" r="25" fill="#7c3aed" opacity="0.8">
                               <animate attributeName="r" values="25;28;25" dur="3.5s" repeatCount="indefinite"/>
                             </circle>
                             <text x="80" y="225" fill="white" fontSize="12" textAnchor="middle">💬</text>
                             <text x="80" y="195" fill="#c4b5fd" fontSize="9" fontWeight="bold" textAnchor="middle">Social</text>
                             <text x="80" y="250" fill="#c4b5fd" fontSize="7" textAnchor="middle">45% Response</text>
                             
                             {/* Direct Mail Channel */}
                             <circle cx="320" cy="220" r="25" fill="#f59e0b" opacity="0.8">
                               <animate attributeName="r" values="25;28;25" dur="2s" repeatCount="indefinite"/>
                             </circle>
                             <text x="320" y="225" fill="white" fontSize="12" textAnchor="middle">📮</text>
                             <text x="320" y="195" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">Direct</text>
                             <text x="320" y="250" fill="#fbbf24" fontSize="7" textAnchor="middle">30% Engage</text>
                             
                             {/* Connection Lines with Data Flow */}
                             <path d="M145 105 L175 130" stroke="#3b82f6" strokeWidth="3" opacity="0.7" markerEnd="url(#arrowBlue)">
                               <animate attributeName="stroke-dasharray" values="0,100;20,80;0,100" dur="2s" repeatCount="indefinite"/>
                             </path>
                             <path d="M255 105 L225 130" stroke="#3b82f6" strokeWidth="3" opacity="0.7" markerEnd="url(#arrowBlue)">
                               <animate attributeName="stroke-dasharray" values="0,100;20,80;0,100" dur="2.2s" repeatCount="indefinite"/>
                             </path>
                             <path d="M105 195 L175 170" stroke="#3b82f6" strokeWidth="3" opacity="0.7" markerEnd="url(#arrowBlue)">
                               <animate attributeName="stroke-dasharray" values="0,100;20,80;0,100" dur="2.8s" repeatCount="indefinite"/>
                             </path>
                             <path d="M295 195 L225 170" stroke="#3b82f6" strokeWidth="3" opacity="0.7" markerEnd="url(#arrowBlue)">
                               <animate attributeName="stroke-dasharray" values="0,100;20,80;0,100" dur="2.4s" repeatCount="indefinite"/>
                             </path>
                             
                             {/* Optimization Metrics Panel */}
                             <rect x="20" y="20" width="120" height="80" fill="#1e293b" rx="8" stroke="#475569" strokeWidth="1" opacity="0.9"/>
                             <text x="80" y="35" fill="#e2e8f0" fontSize="9" fontWeight="bold" textAnchor="middle">Strategy Metrics</text>
                             
                             <text x="25" y="50" fill="#10b981" fontSize="7">✓ Reach: +340%</text>
                             <text x="25" y="62" fill="#10b981" fontSize="7">✓ Flexibility: High</text>
                             <text x="25" y="74" fill="#10b981" fontSize="7">✓ Efficiency: +85%</text>
                             <text x="25" y="86" fill="#10b981" fontSize="7">✓ Personalization: Max</text>
                             
                             {/* Revenue Pipeline */}
                             <rect x="260" y="20" width="120" height="80" fill="#1e293b" rx="8" stroke="#475569" strokeWidth="1" opacity="0.9"/>
                             <text x="320" y="35" fill="#e2e8f0" fontSize="9" fontWeight="bold" textAnchor="middle">Revenue Pipeline</text>
                             
                             {/* Pipeline Bars */}
                             <rect x="270" y="45" width="60" height="8" fill="#374151" rx="4"/>
                             <rect x="270" y="45" width="48" height="8" fill="#10b981" rx="4">
                               <animate attributeName="width" values="0;48;0" dur="4s" repeatCount="indefinite"/>
                             </rect>
                             <text x="340" y="52" fill="#10b981" fontSize="6">80%</text>
                             
                             <rect x="270" y="58" width="60" height="8" fill="#374151" rx="4"/>
                             <rect x="270" y="58" width="42" height="8" fill="#f59e0b" rx="4">
                               <animate attributeName="width" values="0;42;0" dur="3.5s" repeatCount="indefinite"/>
                             </rect>
                             <text x="340" y="65" fill="#f59e0b" fontSize="6">70%</text>
                             
                             <rect x="270" y="71" width="60" height="8" fill="#374151" rx="4"/>
                             <rect x="270" y="71" width="36" height="8" fill="#3b82f6" rx="4">
                               <animate attributeName="width" values="0;36;0" dur="3s" repeatCount="indefinite"/>
                             </rect>
                             <text x="340" y="78" fill="#3b82f6" fontSize="6">60%</text>
                             
                             <text x="320" y="92" fill="#94a3b8" fontSize="6" textAnchor="middle">Consistent Growth</text>
                             
                             {/* Customer Journey Path */}
                             <path d="M50 150 Q100 120 150 150 Q200 180 250 150 Q300 120 350 150" 
                                   stroke="#f59e0b" strokeWidth="2" fill="none" strokeDasharray="5,5" opacity="0.8">
                               <animate attributeName="stroke-dashoffset" values="0;-20" dur="2s" repeatCount="indefinite"/>
                             </path>
                             
                             {/* Customer Icons along the path */}
                             <circle cx="50" cy="150" r="8" fill="#065f46">
                               <animate attributeName="fill" values="#065f46;#10b981;#065f46" dur="2s" repeatCount="indefinite"/>
                             </circle>
                             <text x="50" y="154" fill="white" fontSize="6" textAnchor="middle">👤</text>
                             
                             <circle cx="150" cy="150" r="8" fill="#1e40af">
                               <animate attributeName="fill" values="#1e40af;#3b82f6;#1e40af" dur="2.5s" repeatCount="indefinite"/>
                             </circle>
                             <text x="150" y="154" fill="white" fontSize="6" textAnchor="middle">👤</text>
                             
                             <circle cx="250" cy="150" r="8" fill="#7c2d12">
                               <animate attributeName="fill" values="#7c2d12;#f97316;#7c2d12" dur="3s" repeatCount="indefinite"/>
                             </circle>
                             <text x="250" y="154" fill="white" fontSize="6" textAnchor="middle">👤</text>
                             
                             <circle cx="350" cy="150" r="8" fill="#581c87">
                               <animate attributeName="fill" values="#581c87;#8b5cf6;#581c87" dur="2.2s" repeatCount="indefinite"/>
                             </circle>
                             <text x="350" y="154" fill="white" fontSize="6" textAnchor="middle">👤</text>
                             
                             {/* Floating Strategy Icons */}
                             <circle cx="40" cy="40" r="12" fill="#1e40af" opacity="0.6">
                               <animate attributeName="cy" values="40;30;40" dur="4s" repeatCount="indefinite"/>
                             </circle>
                             <text x="40" y="44" fill="white" fontSize="8" textAnchor="middle">🎯</text>
                             
                             <circle cx="360" cy="260" r="12" fill="#7c3aed" opacity="0.6">
                               <animate attributeName="cx" values="360;370;360" dur="3s" repeatCount="indefinite"/>
                             </circle>
                             <text x="360" y="264" fill="white" fontSize="8" textAnchor="middle">⚡</text>
                             
                             {/* Arrow Markers */}
                             <defs>
                               <marker id="arrowBlue" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                                 <polygon points="0 0, 8 3, 0 6" fill="#3b82f6"/>
                               </marker>
                             </defs>
                            </svg>
                          </div>
                        )}
                        
                        {/* SVG Illustration for fifth service only */}
                        {index === 4 && (
                          <div className="lg:flex-1 lg:max-w-md mt-2 lg:-mt-4 pl-8 lg:pl-4">
                            <svg viewBox="0 0 400 300" className="w-full h-auto max-w-sm mx-auto lg:mx-0">
                              {/* Background */}
                              <rect width="400" height="300" fill="#1e293b" rx="20"/>
                              
                              {/* Office Environment */}
                              <rect x="20" y="20" width="360" height="260" fill="#0f172a" rx="15" stroke="#334155" strokeWidth="2"/>
                              
                              {/* Title */}
                              <text x="200" y="45" fill="#e2e8f0" fontSize="14" fontWeight="bold" textAnchor="middle">Expert Sales Team</text>
                              
                              {/* Team Members */}
                              {/* Founder/Leader */}
                              <circle cx="200" cy="80" r="18" fill="#7c2d12" stroke="#f97316" strokeWidth="2"/>
                              <circle cx="200" cy="75" r="8" fill="#fed7aa"/>
                              <path d="M185 95 Q200 85 215 95" stroke="#fed7aa" strokeWidth="3" fill="none"/>
                              <text x="200" y="110" fill="#f97316" fontSize="8" textAnchor="middle" fontWeight="bold">Founder-Led</text>
                              <circle cx="190" cy="70" r="3" fill="#fbbf24">
                                <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
                              </circle>
                              
                              {/* Strategy Expert */}
                              <circle cx="120" cy="130" r="16" fill="#1e40af" stroke="#3b82f6" strokeWidth="2"/>
                              <circle cx="120" cy="126" r="7" fill="#93c5fd"/>
                              <path d="M107 143 Q120 135 133 143" stroke="#93c5fd" strokeWidth="2" fill="none"/>
                              <text x="120" y="160" fill="#3b82f6" fontSize="7" textAnchor="middle" fontWeight="bold">Strategy</text>
                              <rect x="110" y="115" width="20" height="8" fill="#3b82f6" rx="2" opacity="0.7"/>
                              <text x="120" y="120" fill="white" fontSize="5" textAnchor="middle">📊</text>
                              
                              {/* Data Specialist */}
                              <circle cx="280" cy="130" r="16" fill="#065f46" stroke="#10b981" strokeWidth="2"/>
                              <circle cx="280" cy="126" r="7" fill="#6ee7b7"/>
                              <path d="M267 143 Q280 135 293 143" stroke="#6ee7b7" strokeWidth="2" fill="none"/>
                              <text x="280" y="160" fill="#10b981" fontSize="7" textAnchor="middle" fontWeight="bold">Data Expert</text>
                              <rect x="270" y="115" width="20" height="8" fill="#10b981" rx="2" opacity="0.7"/>
                              <text x="280" y="120" fill="white" fontSize="5" textAnchor="middle">📈</text>
                              
                              {/* Content Creator */}
                              <circle cx="80" cy="180" r="16" fill="#581c87" stroke="#8b5cf6" strokeWidth="2"/>
                              <circle cx="80" cy="176" r="7" fill="#c4b5fd"/>
                              <path d="M67 193 Q80 185 93 193" stroke="#c4b5fd" strokeWidth="2" fill="none"/>
                              <text x="80" y="210" fill="#8b5cf6" fontSize="7" textAnchor="middle" fontWeight="bold">Content</text>
                              <rect x="70" y="165" width="20" height="8" fill="#8b5cf6" rx="2" opacity="0.7"/>
                              <text x="80" y="170" fill="white" fontSize="5" textAnchor="middle">✍️</text>
                              
                              {/* Tech Specialist */}
                              <circle cx="200" cy="180" r="16" fill="#7c2d12" stroke="#f97316" strokeWidth="2"/>
                              <circle cx="200" cy="176" r="7" fill="#fed7aa"/>
                              <path d="M187 193 Q200 185 213 193" stroke="#fed7aa" strokeWidth="2" fill="none"/>
                              <text x="200" y="210" fill="#f97316" fontSize="7" textAnchor="middle" fontWeight="bold">Technology</text>
                              <rect x="190" y="165" width="20" height="8" fill="#f97316" rx="2" opacity="0.7"/>
                              <text x="200" y="170" fill="white" fontSize="5" textAnchor="middle">⚙️</text>
                              
                              {/* Automation Expert */}
                              <circle cx="320" cy="180" r="16" fill="#dc2626" stroke="#f87171" strokeWidth="2"/>
                              <circle cx="320" cy="176" r="7" fill="#fca5a5"/>
                              <path d="M307 193 Q320 185 333 193" stroke="#fca5a5" strokeWidth="2" fill="none"/>
                              <text x="320" y="210" fill="#f87171" fontSize="7" textAnchor="middle" fontWeight="bold">Automation</text>
                              <rect x="310" y="165" width="20" height="8" fill="#f87171" rx="2" opacity="0.7"/>
                              <text x="320" y="170" fill="white" fontSize="5" textAnchor="middle">🤖</text>
                              
                              {/* Collaboration Lines */}
                              <path d="M185 85 L135 125" stroke="#f59e0b" strokeWidth="2" opacity="0.6" strokeDasharray="3,3">
                                <animate attributeName="stroke-dashoffset" values="0;-12" dur="2s" repeatCount="indefinite"/>
                              </path>
                              <path d="M215 85 L265 125" stroke="#f59e0b" strokeWidth="2" opacity="0.6" strokeDasharray="3,3">
                                <animate attributeName="stroke-dashoffset" values="0;-12" dur="2.2s" repeatCount="indefinite"/>
                              </path>
                              <path d="M200 98 L200 162" stroke="#f59e0b" strokeWidth="2" opacity="0.6" strokeDasharray="3,3">
                                <animate attributeName="stroke-dashoffset" values="0;-12" dur="1.8s" repeatCount="indefinite"/>
                              </path>
                              <path d="M135 140 L95 170" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" strokeDasharray="2,2">
                                <animate attributeName="stroke-dashoffset" values="0;-8" dur="2.5s" repeatCount="indefinite"/>
                              </path>
                              <path d="M265 140 L305 170" stroke="#10b981" strokeWidth="1.5" opacity="0.5" strokeDasharray="2,2">
                                <animate attributeName="stroke-dashoffset" values="0;-8" dur="2.3s" repeatCount="indefinite"/>
                              </path>
                              
                              {/* Expertise Badges */}
                              <rect x="30" y="230" width="80" height="35" fill="#1e293b" rx="6" stroke="#475569" strokeWidth="1" opacity="0.9"/>
                              <text x="70" y="245" fill="#e2e8f0" fontSize="8" fontWeight="bold" textAnchor="middle">Risk Minimized</text>
                              <text x="70" y="255" fill="#10b981" fontSize="6" textAnchor="middle">✓ No Hiring Costs</text>
                              <text x="70" y="263" fill="#10b981" fontSize="6" textAnchor="middle">✓ Instant Expertise</text>
                              
                              <rect x="130" y="230" width="80" height="35" fill="#1e293b" rx="6" stroke="#475569" strokeWidth="1" opacity="0.9"/>
                              <text x="170" y="245" fill="#e2e8f0" fontSize="8" fontWeight="bold" textAnchor="middle">Revenue Maximized</text>
                              <text x="170" y="255" fill="#f59e0b" fontSize="6" textAnchor="middle">⚡ Proven Results</text>
                              <text x="170" y="263" fill="#f59e0b" fontSize="6" textAnchor="middle">⚡ Scalable Growth</text>
                              
                              <rect x="230" y="230" width="80" height="35" fill="#1e293b" rx="6" stroke="#475569" strokeWidth="1" opacity="0.9"/>
                              <text x="270" y="245" fill="#e2e8f0" fontSize="8" fontWeight="bold" textAnchor="middle">Full-Service</text>
                              <text x="270" y="255" fill="#8b5cf6" fontSize="6" textAnchor="middle">🎯 Complete Solution</text>
                              <text x="270" y="263" fill="#8b5cf6" fontSize="6" textAnchor="middle">🎯 End-to-End</text>
                              
                              <rect x="330" y="230" width="50" height="35" fill="#1e293b" rx="6" stroke="#475569" strokeWidth="1" opacity="0.9"/>
                              <text x="355" y="245" fill="#e2e8f0" fontSize="8" fontWeight="bold" textAnchor="middle">Expert</text>
                              <text x="355" y="255" fill="#f87171" fontSize="6" textAnchor="middle">🏆 Proven</text>
                              <text x="355" y="263" fill="#f87171" fontSize="6" textAnchor="middle">🏆 Elite</text>
                              
                              {/* Floating Success Indicators */}
                              <circle cx="50" cy="70" r="10" fill="#10b981" opacity="0.7">
                                <animate attributeName="cy" values="70;60;70" dur="3s" repeatCount="indefinite"/>
                              </circle>
                              <text x="50" y="74" fill="white" fontSize="7" textAnchor="middle">💰</text>
                              
                              <circle cx="350" cy="100" r="10" fill="#3b82f6" opacity="0.7">
                                <animate attributeName="cx" values="350;360;350" dur="2.5s" repeatCount="indefinite"/>
                              </circle>
                              <text x="350" y="104" fill="white" fontSize="7" textAnchor="middle">📈</text>
                              
                              <circle cx="60" cy="250" r="8" fill="#8b5cf6" opacity="0.6">
                                <animate attributeName="r" values="8;12;8" dur="4s" repeatCount="indefinite"/>
                              </circle>
                              <text x="60" y="254" fill="white" fontSize="6" textAnchor="middle">⭐</text>
                              
                              <circle cx="340" cy="60" r="8" fill="#f59e0b" opacity="0.6">
                                <animate attributeName="cy" values="60;50;60" dur="3.5s" repeatCount="indefinite"/>
                              </circle>
                              <text x="340" y="64" fill="white" fontSize="6" textAnchor="middle">🚀</text>
                              
                              {/* Team Synergy Waves */}
                              <ellipse cx="200" cy="150" rx="120" ry="40" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.3" strokeDasharray="5,5">
                                <animate attributeName="stroke-dashoffset" values="0;-20" dur="3s" repeatCount="indefinite"/>
                              </ellipse>
                              <ellipse cx="200" cy="150" rx="90" ry="30" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3" strokeDasharray="3,3">
                                <animate attributeName="stroke-dashoffset" values="0;-15" dur="2.5s" repeatCount="indefinite"/>
                              </ellipse>
                            </svg>
                          </div>
                        )}
                      </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
