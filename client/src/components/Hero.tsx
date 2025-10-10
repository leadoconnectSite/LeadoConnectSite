import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

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
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-accent text-leadconnect-dark px-8 py-6 font-bold hover:bg-leadconnect-accent-hover transition-all transform hover:scale-105 shadow-2xl border-0 group rounded-xl animate-hero-fade-up"
                style={{ animationDelay: '0.75s' }}
              >
                Start Accelerating
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-6 font-semibold transition-all rounded-xl animate-hero-fade-up"
                style={{ animationDelay: '0.85s' }}
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Side - Modern Tech SVG */}
          <div className="relative lg:block hidden lg:-translate-x-6">
            <div className="relative w-full h-[600px]">
              <svg
                viewBox="0 0 600 600"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Modern gradient definitions */}
                  <linearGradient id="techGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9" />
                  </linearGradient>
                  
                  <linearGradient id="techGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                  </linearGradient>

                  <linearGradient id="techGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                  </linearGradient>

                  <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </radialGradient>

                  <filter id="techGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="12" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  <filter id="softTechGlow" height="300%" width="300%" x="-75%" y="-75%">
                    <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
                    <feGaussianBlur in="thicken" stdDeviation="8" result="blurred" />
                    <feFlood floodColor="#3b82f6" result="glowColor" />
                    <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow" />
                    <feMerge>
                      <feMergeNode in="softGlow"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Central Data Core */}
                <circle
                  cx="300"
                  cy="300"
                  r="80"
                  fill="url(#coreGlow)"
                  filter="url(#techGlow)"
                  className="animate-pulseCore"
                />

                {/* Orbiting Rings */}
                <g className="animate-rotateSlow">
                  <circle
                    cx="300"
                    cy="300"
                    r="120"
                    fill="none"
                    stroke="url(#techGrad1)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    opacity="0.7"
                  />
                </g>

                <g className="animate-rotateMedium" style={{ animationDelay: '1s' }}>
                  <circle
                    cx="300"
                    cy="300"
                    r="160"
                    fill="none"
                    stroke="url(#techGrad2)"
                    strokeWidth="1.5"
                    strokeDasharray="6 3"
                    opacity="0.6"
                  />
                </g>

                <g className="animate-rotateFast" style={{ animationDelay: '2s' }}>
                  <circle
                    cx="300"
                    cy="300"
                    r="200"
                    fill="none"
                    stroke="url(#techGrad3)"
                    strokeWidth="1"
                    strokeDasharray="8 2"
                    opacity="0.5"
                  />
                </g>

                {/* Floating Data Nodes */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 45) * Math.PI / 180;
                  const radius = 120;
                  const cx = 300 + radius * Math.cos(angle);
                  const cy = 300 + radius * Math.sin(angle);
                  
                  return (
                    <g key={`node-${i}`} className="animate-floatNode">
                      <circle
                        cx={cx}
                        cy={cy}
                        r="6"
                        fill="url(#techGrad1)"
                        filter="url(#softTechGlow)"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      />
                      <circle
                        cx={cx}
                        cy={cy}
                        r="2"
                        fill="#ffffff"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      />
                    </g>
                  );
                })}

                {/* Connection Lines between Nodes */}
                {[...Array(8)].map((_, i) => {
                  const angle1 = (i * 45) * Math.PI / 180;
                  const angle2 = ((i + 1) * 45) * Math.PI / 180;
                  const radius = 120;
                  
                  const x1 = 300 + radius * Math.cos(angle1);
                  const y1 = 300 + radius * Math.sin(angle1);
                  const x2 = 300 + radius * Math.cos(angle2);
                  const y2 = 300 + radius * Math.sin(angle2);
                  
                  return (
                    <line
                      key={`connector-${i}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(59, 130, 246, 0.4)"
                      strokeWidth="1"
                      className="animate-pulseLine"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  );
                })}

                {/* Outer Data Points */}
                {[...Array(16)].map((_, i) => {
                  const angle = (i * 22.5) * Math.PI / 180;
                  const radius = 200;
                  const cx = 300 + radius * Math.cos(angle);
                  const cy = 300 + radius * Math.sin(angle);
                  
                  return (
                    <circle
                      key={`outer-point-${i}`}
                      cx={cx}
                      cy={cy}
                      r="3"
                      fill="#06b6d4"
                      className="animate-pulseOuter"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '3s'
                      }}
                    />
                  );
                })}

                {/* Floating Data Streams */}
                <path
                  d="M200,200 Q300,150 400,200 T500,300"
                  stroke="url(#techGrad1)"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.6"
                  className="animate-dataStream"
                />
                
                <path
                  d="M100,350 Q300,400 500,350"
                  stroke="url(#techGrad2)"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.6"
                  className="animate-dataStream"
                  style={{ animationDelay: '1.5s' }}
                />

                {/* Binary Code Particles */}
                {[...Array(20)].map((_, i) => (
                  <text
                    key={`binary-${i}`}
                    x={Math.random() * 600}
                    y={Math.random() * 600}
                    fill="#3b82f6"
                    opacity="0.4"
                    fontSize="10"
                    className="animate-floatBinary"
                    style={{
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${8 + Math.random() * 8}s`
                    }}
                  >
                    {Math.random() > 0.5 ? '1' : '0'}
                  </text>
                ))}

                {/* Tech Grid Background */}
                <g opacity="0.1">
                  {[...Array(12)].map((_, i) => (
                    <line
                      key={`grid-h-${i}`}
                      x1="50"
                      y1={50 + i * 50}
                      x2="550"
                      y2={50 + i * 50}
                      stroke="#3b82f6"
                      strokeWidth="0.5"
                    />
                  ))}
                  {[...Array(12)].map((_, i) => (
                    <line
                      key={`grid-v-${i}`}
                      x1={50 + i * 50}
                      y1="50"
                      x2={50 + i * 50}
                      y2="550"
                      stroke="#3b82f6"
                      strokeWidth="0.5"
                    />
                  ))}
                </g>
              </svg>

              {/* Additional floating tech elements */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`tech-dot-${i}`}
                    className="absolute w-1 h-1 bg-accent rounded-full animate-techFloat"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 4}s`,
                      animationDuration: `${6 + Math.random() * 6}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
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

        /* New Tech SVG Animations */
        @keyframes pulseCore {
          0%, 100% { 
            opacity: 0.6;
            transform: scale(1);
          }
          50% { 
            opacity: 0.9;
            transform: scale(1.05);
          }
        }

        @keyframes rotateSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes rotateMedium {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }

        @keyframes rotateFast {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes floatNode {
          0%, 100% { 
            transform: translateY(0px) scale(1);
          }
          50% { 
            transform: translateY(-8px) scale(1.1);
          }
        }

        @keyframes pulseLine {
          0%, 100% { 
            stroke-opacity: 0.3;
          }
          50% { 
            stroke-opacity: 0.8;
          }
        }

        @keyframes pulseOuter {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.8;
            transform: scale(1.3);
          }
        }

        @keyframes dataStream {
          0% {
            stroke-dasharray: 20 10;
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dasharray: 20 10;
            stroke-dashoffset: 100;
          }
        }

        @keyframes floatBinary {
          0%, 100% { 
            opacity: 0;
            transform: translateY(0px);
          }
          10% { 
            opacity: 0.6;
          }
          90% { 
            opacity: 0.6;
          }
          100% { 
            opacity: 0;
            transform: translateY(-40px);
          }
        }

        @keyframes techFloat {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% { 
            transform: translate(5px, -8px) scale(1.2);
            opacity: 0.6;
          }
          50% { 
            transform: translate(2px, -12px) scale(1);
            opacity: 0.8;
          }
          75% { 
            transform: translate(-3px, -6px) scale(1.3);
            opacity: 0.5;
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

        /* New Tech Animation Classes */
        .animate-pulseCore {
          animation: pulseCore ease-in-out infinite;
          animation-duration: 4s;
        }
        .animate-rotateSlow {
          animation: rotateSlow linear infinite;
          animation-duration: 25s;
        }
        .animate-rotateMedium {
          animation: rotateMedium linear infinite;
          animation-duration: 18s;
        }
        .animate-rotateFast {
          animation: rotateFast linear infinite;
          animation-duration: 12s;
        }
        .animate-floatNode {
          animation: floatNode ease-in-out infinite;
          animation-duration: 3s;
        }
        .animate-pulseLine {
          animation: pulseLine ease-in-out infinite;
          animation-duration: 2s;
        }
        .animate-pulseOuter {
          animation: pulseOuter ease-in-out infinite;
        }
        .animate-dataStream {
          animation: dataStream linear infinite;
          animation-duration: 6s;
        }
        .animate-floatBinary {
          animation: floatBinary ease-in-out infinite;
        }
        .animate-techFloat {
          animation: techFloat ease-in-out infinite;
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