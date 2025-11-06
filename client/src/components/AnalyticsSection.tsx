import { Activity, BarChart3, LineChart } from "lucide-react";
import analyticsVideo from "@/assets/analytics_V2.webm";

export default function AnalyticsSection() {
  const features = [
    {
      icon: LineChart,
      title: "Real-Time Analytics Monitoring",
      description: "Continuous campaign optimizations by tracking segmented activity metrics across active sequences, email conversations, call connects, task completions, and more."
    },
    {
      icon: BarChart3,
      title: "Performance Metrics Dashboard",
      description: "Track appointments booked, conversion rates, and goal achievement with our comprehensive dashboard that provides actionable insights."
    },
    {
      icon: Activity,
      title: "Channel-Specific Campaign Insights",
      description: "Detailed analytics for each outreach channel, helping you understand which strategies drive the best results for your business."
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-leadconnect-dark to-gray-800 py-3 md:py-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="site-container relative z-10">
        {/* Centered Section Label */}
        <div className="text-center mb-7 md:mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-7">
            <div className="w-8 h-px bg-accent"></div>
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              COMPREHENSIVE ANALYTICS
            </span>
            <div className="w-8 h-px bg-accent"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Outbound analytics with
              <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent"> channel-specific</span> insights
            </h2>
            <p className="text-gray-300 mb-8">
              We create unique outbound sales strategies, craft personalized multi-touch sequences, handle responses, and book appointments directly to your calendar.
            </p>
            
            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-accent/20 p-2 rounded-lg">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-accent mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Video */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-accent/20 animate-fade-in">
            <video 
              className="w-full h-auto" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src={analyticsVideo} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            
            {/* Overlay with metrics */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent p-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent">17</div>
                  <div className="text-xs text-gray-300">Appointments Booked</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">4.2%</div>
                  <div className="text-xs text-gray-300">Conversion Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">15</div>
                  <div className="text-xs text-gray-300">Goal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}