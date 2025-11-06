export default function SalesTeam() {
  const statistics = [
    {
      value: "67%",
      title: "REDUCTION IN WEIGHTED COST",
      subtitle: "vs. building in-house"
    },
    {
      value: "21X",
      title: "MORE LIKELY TO SEE A CLEAR ROI",
      subtitle: "within the first 90 days of service"
    },
    {
      value: "73%",
      title: "INCREASE IN CONVERSATIONS",
      subtitle: "using channel-optimized lead data"
    },
    {
      value: "87%",
      title: "OF COMPANIES USE AGENCIES",
      subtitle: "get our in-house vs. outsourced guide"
    }
  ];

  return (
    <section 
      className="pt-3 md:pt-6 pb-16 md:pb-20 overflow-hidden"
      style={{ backgroundColor: "#023043" }}
    >
      <div className="site-container">
        <div className="max-w-6xl mx-auto">
          {/* Header Content */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
              A done-for-you sales team.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Hiring an internal sales development team is expensive and risky. We minimize your risk and maximize your 
              revenue by providing an expert founder-led sales team focused on outbound strategy, data, content, 
              technology, and prospecting.
            </p>
          </div>

          {/* 2x2 Statistics Grid - Only Text Center Aligned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {statistics.map((stat, index) => (
              <div 
                key={index} 
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:transform hover:-translate-y-1 text-center"
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-leadconnect-teal/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Value with compact styling */}
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-4">
                    {stat.value}
                  </div>
                  
                  {/* Compact content - All text center aligned */}
                  <div className="space-y-2">
                    <h3 className="text-base md:text-lg font-bold text-white tracking-wide leading-tight">
                      {stat.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {stat.subtitle}
                    </p>
                  </div>
                  
                  {/* Decorative element - kept in original position */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <div className="w-5 h-5 border border-accent rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional: Modern decorative elements */}
          <div className="absolute left-10 top-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl opacity-30" />
          <div className="absolute right-10 bottom-1/4 w-12 h-12 bg-leadconnect-teal/10 rounded-full blur-xl opacity-30" />
        </div>
      </div>
    </section>
  );
}