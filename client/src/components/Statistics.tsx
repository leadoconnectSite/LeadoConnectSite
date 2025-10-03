export default function Statistics() {
  const stats = [
    {
      value: "67%",
      label: "REDUCTION IN WEIGHTED COST",
      description: "for building in-house"
    },
    {
      value: "21x",
      label: "MORE LIKELY TO SEE A CLEAR ROI", 
      description: "within the first 90 days of service"
    },
    {
      value: "73%",
      label: "INCREASE IN CONVERSATIONS",
      description: "using channel-optimized data"
    },
    {
      value: "87%",
      label: "OF COMPANIES USE AGENCIES",
      description: "Higher on in-house vs. outsourced guide"
    }
  ];

  return (
    <section className="leadconnect-dark py-16 md:py-20 border-t border-leadconnect-teal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
