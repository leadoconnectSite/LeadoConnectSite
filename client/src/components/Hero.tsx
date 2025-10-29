import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden pt-10 md:pt-14">
      {/* Premium Animated SVG Background */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full opacity-20"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="premiumGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>
            
            <linearGradient id="premiumGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
            </linearGradient>
            
            <radialGradient id="glowEffect" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>

            {/* Filters for glow effects */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="softGlow" height="300%" width="300%" x="-75%" y="-75%">
              <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
              <feGaussianBlur in="thicken" stdDeviation="10" result="blurred" />
              <feFlood floodColor="#3b82f6" result="glowColor" />
              <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow" />
              <feMerge>
                <feMergeNode in="softGlow"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Animated Geometric Patterns */}
          {/* Floating Hexagons */}
          {[...Array(15)].map((_, i) => (
            <polygon
              key={`hex-${i}`}
              points="200,100 250,100 275,150 250,200 200,200 175,150"
              fill="none"
              stroke="url(#premiumGrad1)"
              strokeWidth="1.5"
              className="animate-floatPremium"
              style={{
                transform: `translate(${Math.random() * 1000}px, ${Math.random() * 600}px) scale(${0.3 + Math.random() * 0.7})`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}

          {/* Pulsing Circles */}
          {[...Array(12)].map((_, i) => (
            <circle
              key={`circle-${i}`}
              cx={Math.random() * 1200}
              cy={Math.random() * 800}
              r={20 + Math.random() * 60}
              fill="none"
              stroke="url(#premiumGrad2)"
              strokeWidth="0.8"
              className="animate-pulsePremium"
              style={{
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${8 + Math.random() * 6}s`
              }}
            />
          ))}

          {/* Connection Lines */}
          {[...Array(25)].map((_, i) => {
            const x1 = Math.random() * 1200;
            const y1 = Math.random() * 800;
            const x2 = x1 + (Math.random() - 0.5) * 400;
            const y2 = y1 + (Math.random() - 0.5) * 400;
            
            return (
              <line
                key={`line-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="0.5"
                className="animate-dashFlow"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${20 + Math.random() * 10}s`
                }}
              />
            );
          })}

          {/* Sparkle Points */}
          {[...Array(40)].map((_, i) => (
            <circle
              key={`sparkle-${i}`}
              cx={Math.random() * 1200}
              cy={Math.random() * 800}
              r={0.5 + Math.random() * 1.5}
              fill="#ffffff"
              className="animate-twinkle"
              style={{
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}

          {/* Wave Patterns */}
          <path
            d="M0,400 Q300,350 600,400 T1200,400"
            stroke="url(#premiumGrad1)"
            strokeWidth="2"
            fill="none"
            opacity="0.1"
            className="animate-wave"
          />
          <path
            d="M0,500 Q400,450 800,500 T1200,500"
            stroke="url(#premiumGrad2)"
            strokeWidth="2"
            fill="none"
            opacity="0.1"
            className="animate-wave"
            style={{ animationDelay: '1s' }}
          />

          {/* Central Glow Effect */}
          <circle
            cx="600"
            cy="400"
            r="300"
            fill="url(#glowEffect)"
            className="animate-pulse"
          />
        </svg>

        {/* Moving Light Beams */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={`beam-${i}`}
              className="absolute w-1 h-64 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-sweep"
              style={{
                left: `${15 + i * 15}%`,
                transform: `rotate(${20 + i * 10}deg)`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: '8s'
              }}
            />
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-accent rounded-full animate-floatDeluxe"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left pl-4 sm:pl-6 md:pl-10 lg:pl-14">
            {/* Label font matched to Services */}
            <div className="inline-flex items-center gap-2 mb-6 animate-hero-fade" style={{ animationDelay: '0s' }}>
              <div className="w-8 h-px bg-accent"></div>
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                THE FUTURE OF SALES
              </span>
              <div className="w-8 h-px bg-accent"></div>
            </div>

            {/* Main Headline - matched to Services font and gradient */}
            <div className="space-y-4 mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="block animate-hero-fade-up" style={{ animationDelay: '0.05s' }}>Better Process.</span>
                <span className="block animate-hero-fade-up" style={{ animationDelay: '0.15s' }}>Experienced Team.</span>
                <span className="block animate-hero-fade-up" style={{ animationDelay: '0.25s' }}>More <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">Revenue.</span></span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-8 animate-hero-fade-up" style={{ animationDelay: '0.35s' }}>
              Transform your sales pipeline with our AI-driven platform that delivers 
              <span className="text-accent font-semibold"> qualified leads, advanced automation, </span>
              and measurable revenue growth while cutting acquisition costs.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-8 py-6 max-w-xl mb-10">
              {[
                { value: "3.2x", label: "Lead Quality" },
                { value: "45%", label: "Cost Reduction" },
                { value: "24/7", label: "Pipeline Growth" }
              ].map((metric, index) => (
                <div
                  key={index}
                  className="text-left animate-hero-fade-up"
                  style={{ animationDelay: `${0.45 + index * 0.1}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white">{metric.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-8 sm:mb-0">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-accent text-leadconnect-dark px-8 py-6 font-bold hover:bg-leadconnect-accent-hover transition-all transform hover:scale-105 shadow-2xl border-0 group rounded-xl animate-hero-fade-up"
                style={{ animationDelay: '0.75s' }}
              >
                Start Accelerating
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <CalendlyButton
                className="border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-6 font-semibold transition-all rounded-xl animate-hero-fade-up inline-flex items-center"
                style={{ animationDelay: '0.85s' }}
              >
                <Play className="mr-2 w-5 h-5" />
                Book a Demo
              </CalendlyButton>
            </div>
          </div>

          {/* Right Side - Modern Growth Visualization */}
          <div className="relative lg:block hidden lg:-translate-x-6">
            <div className="relative w-full h-[600px]">
              <svg
                viewBox="0 0 600 600"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Growth gradients */}
                  <linearGradient id="growthGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.7" />
                  </linearGradient>
                  
                  <linearGradient id="growthGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.7" />
                  </linearGradient>

                  <linearGradient id="growthGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.7" />
                  </linearGradient>

                  <linearGradient id="growthLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>

                  <radialGradient id="growthGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </radialGradient>

                  <filter id="growthShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Main Growth Curve - Clear upward trajectory */}
                <path
                  d="M100,450 Q200,350 300,300 Q400,250 500,200"
                  fill="none"
                  stroke="url(#growthLine)"
                  strokeWidth="4"
                  className="animate-growthLineDraw"
                />

                {/* Growth Milestone Points */}
                {[
                  { x: 100, y: 450, value: "Start", delay: 0 },
                  { x: 200, y: 350, value: "Month 1", delay: 0.3 },
                  { x: 300, y: 300, value: "Month 3", delay: 0.6 },
                  { x: 400, y: 250, value: "Month 6", delay: 0.9 },
                  { x: 500, y: 200, value: "Month 12", delay: 1.2 }
                ].map((point, i) => (
                  <g key={`milestone-${i}`} className="animate-milestonePop">
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="8"
                      fill="#ffffff"
                      stroke={i === 4 ? "#8B5CF6" : i === 3 ? "#3B82F6" : "#10B981"}
                      strokeWidth="3"
                      style={{ animationDelay: `${point.delay}s` }}
                    />
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="4"
                      fill={i === 4 ? "#8B5CF6" : i === 3 ? "#3B82F6" : "#10B981"}
                      style={{ animationDelay: `${point.delay}s` }}
                    />
                    <text
                      x={point.x}
                      y={point.y - 20}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="12"
                      fontWeight="600"
                      className="animate-textFade"
                      style={{ animationDelay: `${point.delay + 0.2}s` }}
                    >
                      {point.value}
                    </text>
                  </g>
                ))}

                {/* Growing Bar Chart - Clear visual growth representation */}
                {[
                  { x: 120, height: 60, delay: 0.1, color: "url(#growthGrad1)" },
                  { x: 180, height: 100, delay: 0.3, color: "url(#growthGrad1)" },
                  { x: 240, height: 140, delay: 0.5, color: "url(#growthGrad2)" },
                  { x: 300, height: 200, delay: 0.7, color: "url(#growthGrad2)" },
                  { x: 360, height: 260, delay: 0.9, color: "url(#growthGrad3)" },
                  { x: 420, height: 320, delay: 1.1, color: "url(#growthGrad3)" },
                  { x: 480, height: 380, delay: 1.3, color: "url(#growthGrad3)" }
                ].map((bar, i) => (
                  <g key={`growth-bar-${i}`} className="animate-barGrow">
                    <rect
                      x={bar.x}
                      y={450 - bar.height}
                      width="40"
                      height={bar.height}
                      fill={bar.color}
                      opacity="0.9"
                      style={{ animationDelay: `${bar.delay}s` }}
                      rx="4"
                    />
                    {/* Growth percentage labels */}
                    <text
                      x={bar.x + 20}
                      y={450 - bar.height - 10}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="11"
                      fontWeight="600"
                      className="animate-textFade"
                      style={{ animationDelay: `${bar.delay + 0.3}s` }}
                    >
                      +{((bar.height / 60) * 100).toFixed(0)}%
                    </text>
                  </g>
                ))}

                {/* Rising Growth Particles */}
                {[...Array(15)].map((_, i) => (
                  <circle
                    key={`rising-${i}`}
                    cx={150 + Math.random() * 300}
                    cy={550}
                    r={1 + Math.random() * 2}
                    fill="#10B981"
                    className="animate-riseFast"
                    style={{
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  />
                ))}

                {/* Growth Sparkles at Peak */}
                {[...Array(8)].map((_, i) => (
                  <g
                    key={`sparkle-${i}`}
                    className="animate-sparkleTwinkle"
                    style={{
                      animationDelay: `${1.5 + i * 0.2}s`,
                      animationDuration: `${2 + Math.random() * 1}s`
                    }}
                  >
                    <circle
                      cx={480 + Math.random() * 40}
                      cy={180 + Math.random() * 40}
                      r="2"
                      fill="#ffffff"
                      opacity="0.8"
                    />
                  </g>
                ))}

                {/* Growth Acceleration Zones */}
                <path
                  d="M300,300 Q350,280 400,250"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="3"
                  strokeDasharray="4 4"
                  opacity="0.7"
                  className="animate-dashFlow"
                />

                {/* Growth Target Circle */}
                <circle
                  cx="500"
                  cy="200"
                  r="30"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="2"
                  opacity="0.5"
                  className="animate-pulse"
                />

                {/* Growth Metrics Labels */}
                <text
                  x="300"
                  y="500"
                  textAnchor="middle"
                  fill="#10B981"
                  fontSize="14"
                  fontWeight="700"
                  className="animate-textFade"
                  style={{ animationDelay: '1.8s' }}
                >
                  CONSISTENT GROWTH
                </text>
                
                <text
                  x="300"
                  y="520"
                  textAnchor="middle"
                  fill="#3B82F6"
                  fontSize="12"
                  fontWeight="600"
                  className="animate-textFade"
                  style={{ animationDelay: '2s' }}
                >
                  Month over Month
                </text>

                {/* Growth Arrow */}
                <g className="animate-arrowPulse" style={{ animationDelay: '2.2s' }}>
                  <path
                    d="M500,170 L490,190 L510,190 Z"
                    fill="#10B981"
                    opacity="0.8"
                  />
                  <text
                    x="500"
                    y="165"
                    textAnchor="middle"
                    fill="#10B981"
                    fontSize="10"
                    fontWeight="700"
                  >
                    PEAK
                  </text>
                </g>
              </svg>

              {/* Additional floating growth indicators */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`growth-indicator-${i}`}
                    className="absolute w-2 h-2 bg-green-400 rounded-full animate-bounce"
                    style={{
                      left: `${40 + i * 15}%`,
                      top: `${80 - i * 8}%`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatPremium {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
        @keyframes pulsePremium {
          0%, 100% { 
            stroke-opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            stroke-opacity: 0.8;
            transform: scale(1.05);
          }
        }
        @keyframes dashFlow {
          0% {
            stroke-dasharray: 10 20;
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dasharray: 10 20;
            stroke-dashoffset: 100;
          }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes wave {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(100px); }
        }
        @keyframes sweep {
          0% { transform: rotate(20deg) translateY(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: rotate(20deg) translateY(100vh); opacity: 0; }
        }
        @keyframes floatDeluxe {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
          25% { 
            transform: translate(10px, -15px) scale(1.2);
            opacity: 0.8;
          }
          50% { 
            transform: translate(5px, -25px) scale(1);
            opacity: 1;
          }
          75% { 
            transform: translate(-5px, -15px) scale(1.2);
            opacity: 0.8;
          }
        }

        /* New Growth-specific Animations */
        @keyframes growthLineDraw {
          0% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            opacity: 0;
          }
          100% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes milestonePop {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          70% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes barGrow {
          0% {
            transform: scaleY(0);
            opacity: 0;
            transform-origin: bottom;
          }
          80% {
            transform: scaleY(1.1);
          }
          100% {
            transform: scaleY(1);
            opacity: 0.9;
          }
        }

        @keyframes riseFast {
          0% {
            opacity: 0;
            transform: translateY(0) scale(1);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translateY(-100px) scale(0.5);
          }
        }

        @keyframes sparkleTwinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        @keyframes textFade {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes arrowPulse {
          0%, 100% {
            opacity: 0.6;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-3px);
          }
        }

        /* Animation Classes */
        .animate-floatPremium {
          animation: floatPremium ease-in-out infinite;
        }
        .animate-pulsePremium {
          animation: pulsePremium ease-in-out infinite;
        }
        .animate-dashFlow {
          animation: dashFlow linear infinite;
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
        .animate-wave {
          animation: wave 20s ease-in-out infinite alternate;
        }
        .animate-sweep {
          animation: sweep linear infinite;
        }
        .animate-floatDeluxe {
          animation: floatDeluxe ease-in-out infinite;
        }

        /* New Growth Animation Classes */
        .animate-growthLineDraw {
          animation: growthLineDraw 2.5s ease-out forwards;
        }

        .animate-milestonePop {
          animation: milestonePop 0.6s ease-out forwards;
        }

        .animate-barGrow {
          animation: barGrow 1s ease-out forwards;
        }

        .animate-riseFast {
          animation: riseFast ease-in-out infinite;
        }

        .animate-sparkleTwinkle {
          animation: sparkleTwinkle ease-in-out infinite;
        }

        .animate-textFade {
          animation: textFade 0.8s ease-out forwards;
        }

        .animate-arrowPulse {
          animation: arrowPulse 2s ease-in-out infinite;
        }

        /* Hero Text Loading Effects */
        @keyframes heroFade {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-fade {
          opacity: 0;
          animation: heroFade 0.6s ease-out forwards;
        }
        .animate-hero-fade-up {
          opacity: 0;
          animation: heroFadeUp 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
}