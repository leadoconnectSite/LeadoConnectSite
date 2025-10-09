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
    <section className="bg-gradient-to-b from-leadconnect-dark to-leadconnect-teal py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              A done-for-you sales team.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Hiring an internal sales development team is expensive and risky. We minimize your risk and maximize your 
              revenue by providing an expert founder-led sales team focused on outbound strategy, data, content, 
              technology, and prospecting.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-accent mb-4">
                  {stat.value}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-wide">
                  {stat.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg">
                  {stat.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}