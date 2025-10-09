export default function Results() {
  const metrics = [
    {
      label: "CLIENTS ACQUIRED",
      value: "457+",
      color: "text-white"
    },
    {
      label: "TOTAL FUNDING",
      value: "$5.12M",
      color: "text-accent"
    },
    {
      label: "TOTAL CAMPAIGNS", 
      value: "512+",
      color: "text-white"
    }
  ];

  const partners = ["LinkedIn", "Salesforce", "HubSpot"];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-leadconnect-dark to-gray-800 py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Label */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-12">
            <div className="w-8 h-px bg-accent"></div>
            <span className="text-accent text-sm font-semibold tracking-wider uppercase" data-testid="text-results-label">
              RESULTS ORIENTED
            </span>
            <div className="w-8 h-px bg-accent"></div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            {/* Section Header */}
            <div className="mb-12">
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="text-results-title">
                Acquisitions &<br />
                <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                  Funding Success
                </span>
              </h2>
              
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed" data-testid="text-results-description">
                We focus on top-of-funnel data and generate hot leads so you can get in front of more prospects, 
                win more deals, book more revenue, and achieve their funding goals.
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 animate-slide-up">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20"
                  data-testid={`metric-${index}`}
                >
                  {/* Card content */}
                  <div className="relative z-10 text-center">
                    <div className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2 sm:mb-3 group-hover:text-gray-300 transition-colors duration-300" data-testid={`text-metric-label-${index}`}>
                      {metric.label}
                    </div>
                    <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${metric.color} group-hover:text-accent transition-colors duration-300`} data-testid={`text-metric-value-${index}`}>
                      {metric.value}
                    </div>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-accent/30 group-hover:border-accent transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-accent/30 group-hover:border-accent transition-colors duration-300"></div>
                </div>
              ))}
            </div>

            {/* Logo Carousel */}
            <div className="animate-fade-in">
              <p className="text-gray-400 text-sm font-semibold tracking-wider uppercase mb-6">
                Trusted by Industry Leaders
              </p>
              <div className="flex items-center space-x-8 flex-wrap gap-6 opacity-60 hover:opacity-80 transition-opacity duration-300">
                {partners.map((partner, index) => (
                  <div key={index} className="flex items-center justify-center group" data-testid={`partner-${partner.toLowerCase()}`}>
                    <span className="text-white text-lg font-semibold group-hover:text-accent transition-colors duration-300">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Professional Business Illustration */}
          <div className="hidden lg:flex justify-center items-center animate-slide-up">
            <div className="relative">
              {/* Professional Business SVG */}
              <svg
                width="400"
                height="400"
                viewBox="0 0 400 400"
                className="drop-shadow-lg"
              >
                <defs>
                  <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e40af" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0891b2" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <linearGradient id="successGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>

                {/* Animated Background Circle */}
                <circle cx="200" cy="200" r="180" fill="rgba(59, 130, 246, 0.05)" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="2">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 200 200;360 200 200"
                    dur="20s"
                    repeatCount="indefinite"/>
                </circle>

                {/* Main Chart Container with subtle pulse */}
                <rect x="60" y="120" width="280" height="180" rx="12" fill="white" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2">
                  <animate attributeName="opacity" values="0.9;0.95;0.9" dur="3s" repeatCount="indefinite"/>
                </rect>

                {/* Chart Grid */}
                <g stroke="rgba(156, 163, 175, 0.3)" strokeWidth="1">
                  <line x1="80" y1="140" x2="320" y2="140" />
                  <line x1="80" y1="170" x2="320" y2="170" />
                  <line x1="80" y1="200" x2="320" y2="200" />
                  <line x1="80" y1="230" x2="320" y2="230" />
                  <line x1="80" y1="260" x2="320" y2="260" />
                  <line x1="100" y1="130" x2="100" y2="280" />
                  <line x1="150" y1="130" x2="150" y2="280" />
                  <line x1="200" y1="130" x2="200" y2="280" />
                  <line x1="250" y1="130" x2="250" y2="280" />
                  <line x1="300" y1="130" x2="300" y2="280" />
                </g>

                {/* Animated Growth Bars */}
                <rect x="90" y="240" width="20" height="40" fill="url(#primaryGradient)" rx="2">
                  <animate attributeName="height" values="40;45;40" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="240;237.5;240" dur="2s" repeatCount="indefinite"/>
                </rect>
                <rect x="140" y="220" width="20" height="60" fill="url(#primaryGradient)" rx="2">
                  <animate attributeName="height" values="60;68;60" dur="2.5s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="220;216;220" dur="2.5s" repeatCount="indefinite"/>
                </rect>
                <rect x="190" y="190" width="20" height="90" fill="url(#accentGradient)" rx="2">
                  <animate attributeName="height" values="90;100;90" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="190;185;190" dur="3s" repeatCount="indefinite"/>
                </rect>
                <rect x="240" y="160" width="20" height="120" fill="url(#accentGradient)" rx="2">
                  <animate attributeName="height" values="120;132;120" dur="2.2s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="160;154;160" dur="2.2s" repeatCount="indefinite"/>
                </rect>
                <rect x="290" y="140" width="20" height="140" fill="url(#successGradient)" rx="2">
                  <animate attributeName="height" values="140;155;140" dur="2.8s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="140;132.5;140" dur="2.8s" repeatCount="indefinite"/>
                </rect>

                {/* Animated Growth Line */}
                <polyline
                  points="100,250 150,230 200,200 250,170 300,150"
                  fill="none"
                  stroke="url(#successGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="4s" repeatCount="indefinite"/>
                </polyline>

                {/* Pulsing Data Points */}
                <circle cx="100" cy="250" r="4" fill="#059669">
                  <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="150" cy="230" r="4" fill="#059669">
                  <animate attributeName="r" values="4;6;4" dur="2.2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="200" cy="200" r="4" fill="#059669">
                  <animate attributeName="r" values="4;6;4" dur="2.4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="250" cy="170" r="4" fill="#059669">
                  <animate attributeName="r" values="4;6;4" dur="2.6s" repeatCount="indefinite"/>
                </circle>
                <circle cx="300" cy="150" r="4" fill="#059669">
                  <animate attributeName="r" values="4;6;4" dur="2.8s" repeatCount="indefinite"/>
                </circle>

                {/* Animated Business Building Icon */}
                 <g transform="translate(80, 60)">
                   <animateTransform attributeName="transform" type="translate" values="80,60;80,55;80,60" dur="4s" repeatCount="indefinite"/>
                   <rect x="-15" y="-10" width="30" height="25" rx="2" fill="url(#primaryGradient)"/>
                   <rect x="-12" y="-15" width="8" height="20" rx="1" fill="url(#accentGradient)"/>
                   <rect x="-2" y="-15" width="8" height="20" rx="1" fill="url(#accentGradient)"/>
                   <rect x="8" y="-15" width="8" height="20" rx="1" fill="url(#accentGradient)"/>
                   {/* Blinking Windows */}
                   <rect x="-10" y="-12" width="2" height="2" fill="white">
                     <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite"/>
                   </rect>
                   <rect x="-6" y="-12" width="2" height="2" fill="white">
                     <animate attributeName="opacity" values="1;0.3;1" dur="3.5s" repeatCount="indefinite"/>
                   </rect>
                   <rect x="-10" y="-8" width="2" height="2" fill="white">
                     <animate attributeName="opacity" values="1;0.3;1" dur="2.8s" repeatCount="indefinite"/>
                   </rect>
                   <rect x="-6" y="-8" width="2" height="2" fill="white">
                     <animate attributeName="opacity" values="1;0.3;1" dur="4.2s" repeatCount="indefinite"/>
                   </rect>
                   <rect x="0" y="-12" width="2" height="2" fill="white">
                     <animate attributeName="opacity" values="1;0.3;1" dur="3.2s" repeatCount="indefinite"/>
                   </rect>
                   <rect x="4" y="-12" width="2" height="2" fill="white">
                     <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite"/>
                   </rect>
                   <rect x="0" y="-8" width="2" height="2" fill="white">
                     <animate attributeName="opacity" values="1;0.3;1" dur="3.8s" repeatCount="indefinite"/>
                   </rect>
                   <rect x="4" y="-8" width="2" height="2" fill="white">
                     <animate attributeName="opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite"/>
                   </rect>
                   <rect x="10" y="-12" width="2" height="2" fill="white">
                     <animate attributeName="opacity" values="1;0.3;1" dur="2.2s" repeatCount="indefinite"/>
                   </rect>
                   <rect x="14" y="-12" width="2" height="2" fill="white">
                     <animate attributeName="opacity" values="1;0.3;1" dur="3.7s" repeatCount="indefinite"/>
                   </rect>
                   <rect x="10" y="-8" width="2" height="2" fill="white">
                     <animate attributeName="opacity" values="1;0.3;1" dur="4.5s" repeatCount="indefinite"/>
                   </rect>
                   <rect x="14" y="-8" width="2" height="2" fill="white">
                     <animate attributeName="opacity" values="1;0.3;1" dur="2.7s" repeatCount="indefinite"/>
                   </rect>
                 </g>

                 {/* Animated Rupee (₹) Icon */}
                 <g transform="translate(330, 70)">
                   <animateTransform attributeName="transform" type="translate" values="330,70;330,65;330,70" dur="3s" repeatCount="indefinite"/>
                   {/* Top horizontal line */}
                   <line x1="-10" y1="-12" x2="10" y2="-12" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round">
                     <animate attributeName="stroke-width" values="3;4;3" dur="2s" repeatCount="indefinite"/>
                   </line>
                   {/* Second horizontal line */}
                   <line x1="-10" y1="-6" x2="8" y2="-6" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round">
                     <animate attributeName="stroke-width" values="3;4;3" dur="2.2s" repeatCount="indefinite"/>
                   </line>
                   {/* Curved part */}
                   <path d="M -10,-6 Q -10,-2 -6,-2 L 2,-2 Q 6,-2 6,2 Q 6,6 2,6 L -6,6" 
                         stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                     <animate attributeName="stroke-width" values="3;4;3" dur="2.4s" repeatCount="indefinite"/>
                   </path>
                   {/* Diagonal line */}
                   <line x1="-6" y1="6" x2="8" y2="12" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round">
                     <animate attributeName="stroke-width" values="3;4;3" dur="2.6s" repeatCount="indefinite"/>
                   </line>
                 </g>

                 {/* Investment/Funding Icons */}
                 <g transform="translate(60, 340)">
                   <circle r="25" fill="url(#successGradient)" opacity="0.9"/>
                   <circle r="18" fill="none" stroke="white" strokeWidth="2" opacity="0.7"/>
                   {/* Dollar sign with better design */}
                   <path d="M -2,-12 L -2,-8 M 2,-12 L 2,-8 M -6,-8 Q -6,-12 -2,-12 L 2,-12 Q 6,-12 6,-8 Q 6,-4 2,-4 L -2,-4 Q -6,-4 -6,0 Q -6,4 -2,4 L 2,4 Q 6,4 6,8 M -2,8 L -2,12 M 2,8 L 2,12" 
                         stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                 </g>

                 <g transform="translate(340, 340)">
                   <circle r="25" fill="url(#successGradient)" opacity="0.9"/>
                   <circle r="18" fill="none" stroke="white" strokeWidth="2" opacity="0.7"/>
                   {/* Coin stack */}
                   <ellipse cx="0" cy="8" rx="12" ry="4" fill="white" opacity="0.9"/>
                   <ellipse cx="0" cy="4" rx="12" ry="4" fill="white" opacity="0.7"/>
                   <ellipse cx="0" cy="0" rx="12" ry="4" fill="white" opacity="0.5"/>
                   <ellipse cx="0" cy="-4" rx="12" ry="4" fill="white"/>
                   <text x="0" y="-1" textAnchor="middle" fill="url(#successGradient)" fontSize="8" fontWeight="bold">$</text>
                 </g>

                 {/* Partnership/Handshake Icon */}
                 <g transform="translate(200, 340)">
                   <ellipse cx="0" cy="0" rx="32" ry="22" fill="url(#primaryGradient)" opacity="0.9"/>
                   {/* Left hand */}
                   <path d="M -15,-8 Q -18,-5 -15,-2 L -8,-2 Q -5,-5 -8,-8 Z" fill="white"/>
                   {/* Right hand */}
                   <path d="M 15,-8 Q 18,-5 15,-2 L 8,-2 Q 5,-5 8,-8 Z" fill="white"/>
                   {/* Handshake connection */}
                   <rect x="-8" y="-5" width="16" height="6" rx="3" fill="rgba(255,255,255,0.8)"/>
                   {/* Thumbs */}
                   <circle cx="-10" cy="-6" r="2" fill="white"/>
                   <circle cx="10" cy="-6" r="2" fill="white"/>
                 </g>

                 {/* Growth Trend Arrow */}
                 <g transform="translate(200, 80)">
                   <circle r="25" fill="url(#successGradient)" opacity="0.1"/>
                   <path d="M 0,-18 L -6,-8 L -3,-8 L -3,12 L 3,12 L 3,-8 L 6,-8 Z" fill="url(#successGradient)"/>
                   {/* Arrow tip enhancement */}
                   <circle cx="0" cy="-18" r="3" fill="url(#successGradient)"/>
                 </g>

                {/* Floating Animated Accent Elements */}
                 <circle cx="50" cy="150" r="3" fill="url(#accentGradient)" opacity="0.6">
                   <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="3s" repeatCount="indefinite"/>
                   <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
                 </circle>
                 <circle cx="350" cy="250" r="3" fill="url(#accentGradient)" opacity="0.6">
                   <animateTransform attributeName="transform" type="translate" values="0,0;0,5;0,0" dur="2.5s" repeatCount="indefinite"/>
                   <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>
                 </circle>
                 <rect x="45" y="320" width="6" height="6" rx="1" fill="url(#primaryGradient)" opacity="0.5">
                   <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="4s" repeatCount="indefinite"/>
                   <animate attributeName="opacity" values="0.5;0.8;0.5" dur="4s" repeatCount="indefinite"/>
                 </rect>
                 <rect x="350" y="120" width="6" height="6" rx="1" fill="url(#primaryGradient)" opacity="0.5">
                   <animateTransform attributeName="transform" type="translate" values="0,0;0,4;0,0" dur="3.5s" repeatCount="indefinite"/>
                   <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3.5s" repeatCount="indefinite"/>
                 </rect>

                 {/* Orbiting particles around center */}
                 <g>
                   <animateTransform
                     attributeName="transform"
                     type="rotate"
                     values="0 200 200;360 200 200"
                     dur="15s"
                     repeatCount="indefinite"/>
                   <circle cx="300" cy="200" r="3" fill="#3B82F6" opacity="0.8"/>
                   <circle cx="100" cy="200" r="3" fill="#F59E0B" opacity="0.8"/>
                   <circle cx="200" cy="100" r="3" fill="#10B981" opacity="0.8"/>
                   <circle cx="200" cy="300" r="3" fill="#3B82F6" opacity="0.8"/>
                 </g>

                 {/* Counter-rotating particles */}
                 <g>
                   <animateTransform
                     attributeName="transform"
                     type="rotate"
                     values="360 200 200;0 200 200"
                     dur="12s"
                     repeatCount="indefinite"/>
                   <circle cx="250" cy="150" r="2" fill="#F59E0B" opacity="0.6"/>
                   <circle cx="150" cy="250" r="2" fill="#10B981" opacity="0.6"/>
                   <circle cx="150" cy="150" r="2" fill="#3B82F6" opacity="0.6"/>
                   <circle cx="250" cy="250" r="2" fill="#F59E0B" opacity="0.6"/>
                 </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ROOTED IN TRUST Section */}
      <div className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="bg-accent rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
              {/* Dot Pattern */}
              <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              <div className="relative z-10">
                <span className="text-gray-900 text-xs md:text-sm font-semibold tracking-wider uppercase block mb-6" data-testid="text-trust-label">
                  ROOTED IN TRUST
                </span>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight" data-testid="text-trust-title">
                  We believe in the power of human connection
                </h2>

                <div className="max-w-2xl">
                  <p className="text-gray-900/80 text-base md:text-lg leading-relaxed mb-8" data-testid="text-trust-description">
                    Channel-optimized prospecting will become even more pivotal to growing an organization's revenue. Through targeted data research and competitive persona modeling you can equip frontline sales & development Reps with a modern sales strategy built around managing the accessibility B2B developments in sales technologies, and push for automation. This human interaction in sales is the future (and we're already here).
                  </p>

                  <div className="border-t border-gray-900/20 pt-6">
                    <p className="font-bold text-gray-900 text-lg mb-1" data-testid="text-ceo-name">
                      Darryl Alexander, CEO,
                    </p>
                    <p className="text-gray-900/70" data-testid="text-company-name">LeadConnect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
