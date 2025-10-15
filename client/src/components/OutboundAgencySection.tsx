import { Check } from "lucide-react";

export default function OutboundAgencySection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-leadconnect-dark to-gray-800 py-3 md:py-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Label */}
        <div className="text-center mb-7 md:mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-7">
            <div className="w-8 h-px bg-accent"></div>
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              OUTBOUND AGENCY
            </span>
            <div className="w-8 h-px bg-accent"></div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              No BPO. No<br />
              Commissions.
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Measurable. Scalable. Affordable. We deliver full-service
              appointment setting programs, strategically focused on
              engaging prospects at each stage of the sales funnel. As the
              Founders of Outsourced Sales, we fundamentally believe in
              driving tangible revenue results.
            </p>

            {/* Checklist */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="text-accent mt-1">
                  <Check size={20} className="bg-accent/20 rounded-sm" />
                </div>
                <p className="text-accent">Experienced campaign strategy</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-accent mt-1">
                  <Check size={20} className="bg-accent/20 rounded-sm" />
                </div>
                <p className="text-accent">Multi-channel engagement</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-accent mt-1">
                  <Check size={20} className="bg-accent/20 rounded-sm" />
                </div>
                <p className="text-accent">Enterprise-grade technology</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="border border-accent text-white px-6 py-2 rounded hover:bg-accent/20 transition-colors">
              Click here
            </button>
          </div>

          {/* Right Column - SVG Illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <svg 
              width="450" 
              height="350" 
              viewBox="0 0 450 350" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-accent"
            >
              {/* Sales Growth Chart SVG */}
              <path 
                d="M50 300 L50 50 L400 50" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round"
              />
              {/* Y-axis ticks */}
              <path d="M45 250 L55 250" stroke="currentColor" strokeWidth="2" />
              <path d="M45 200 L55 200" stroke="currentColor" strokeWidth="2" />
              <path d="M45 150 L55 150" stroke="currentColor" strokeWidth="2" />
              <path d="M45 100 L55 100" stroke="currentColor" strokeWidth="2" />
              
              {/* X-axis ticks */}
              <path d="M100 45 L100 55" stroke="currentColor" strokeWidth="2" />
              <path d="M150 45 L150 55" stroke="currentColor" strokeWidth="2" />
              <path d="M200 45 L200 55" stroke="currentColor" strokeWidth="2" />
              <path d="M250 45 L250 55" stroke="currentColor" strokeWidth="2" />
              <path d="M300 45 L300 55" stroke="currentColor" strokeWidth="2" />
              <path d="M350 45 L350 55" stroke="currentColor" strokeWidth="2" />
              
              {/* Growth Line */}
              <path 
                d="M50 250 L100 240 L150 220 L200 200 L250 170 L300 130 L350 80" 
                stroke="currentColor" 
                strokeWidth="4" 
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Data Points */}
              <circle cx="100" cy="240" r="6" fill="currentColor" />
              <circle cx="150" cy="220" r="6" fill="currentColor" />
              <circle cx="200" cy="200" r="6" fill="currentColor" />
              <circle cx="250" cy="170" r="6" fill="currentColor" />
              <circle cx="300" cy="130" r="6" fill="currentColor" />
              <circle cx="350" cy="80" r="6" fill="currentColor" />
              
              {/* Target Icon */}
              <circle cx="350" cy="80" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="350" cy="80" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M350 50 L350 110" stroke="currentColor" strokeWidth="2" />
              <path d="M320 80 L380 80" stroke="currentColor" strokeWidth="2" />
              
              {/* People Icons */}
              <circle cx="100" cy="280" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M100 295 Q100 310 110 315 L90 315 Q100 310 100 295" stroke="currentColor" strokeWidth="2" fill="none" />
              
              <circle cx="130" cy="280" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M130 295 Q130 310 140 315 L120 315 Q130 310 130 295" stroke="currentColor" strokeWidth="2" fill="none" />
              
              <circle cx="160" cy="280" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M160 295 Q160 310 170 315 L150 315 Q160 310 160 295" stroke="currentColor" strokeWidth="2" fill="none" />
              
              {/* Dollar Signs */}
              <text x="200" y="290" fill="currentColor" fontSize="24" fontWeight="bold">$</text>
              <text x="230" y="290" fill="currentColor" fontSize="24" fontWeight="bold">$</text>
              <text x="260" y="290" fill="currentColor" fontSize="24" fontWeight="bold">$</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}