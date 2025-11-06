export default function Statistics() {
  const stats = [
    {
      value: "67%",
      label: "REDUCTION IN WEIGHTED COST",
      description: "vs. building in-house"
    },
    {
      value: "21X",
      label: "MORE LIKELY TO SEE A CLEAR ROI", 
      description: "within the first 90 days of service"
    },
    {
      value: "73%",
      label: "INCREASE IN CONVERSATIONS",
      description: "using channel-optimized lead data"
    },
    {
      value: "87%",
      label: "OF COMPANIES USE AGENCIES",
      description: "get our in-house vs. outsourced guide"
    }
  ];

  return (
    <section className="leadconnect-dark py-16 md:py-20 border-t border-leadconnect-teal">
      <div className="site-container">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" data-testid="text-statistics-title">
            A done-for-you sales team.
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-4xl mx-auto leading-relaxed" data-testid="text-statistics-description">
            Hiring an internal sales development team is expensive and risky. We minimize your risk and maximize your 
            revenue by providing an expert founder-led sales team focused on outbound strategy, data, content, 
            technology, and prospecting.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto animate-slide-up">
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left" data-testid={`stat-${index}`}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-3" data-testid={`text-stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1" data-testid={`text-stat-label-${index}`}>
                {stat.label}
              </div>
              <div className="text-sm text-gray-300" data-testid={`text-stat-description-${index}`}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
