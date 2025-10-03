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
    <section className="leadconnect-dark py-16 md:py-20 border-t border-leadconnect-teal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 animate-fade-in">
          <span className="text-accent text-xs md:text-sm font-semibold tracking-wider uppercase" data-testid="text-results-label">
            RESULTS ORIENTED
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6" data-testid="text-results-title">
            Acquisitions &<br className="sm:hidden" />
            Funding
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl" data-testid="text-results-description">
            We focus on top-of-funnel data and generate hot leads so you can get in front of more prospects, win more deals, book more revenue, and achieve their funding goals.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 animate-slide-up">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-accent/30 transition-colors"
              data-testid={`metric-${index}`}
            >
              <div className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2" data-testid={`text-metric-label-${index}`}>
                {metric.label}
              </div>
              <div className={`text-4xl md:text-5xl font-bold ${metric.color}`} data-testid={`text-metric-value-${index}`}>
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Logo Carousel */}
        <div className="flex items-center justify-center space-x-8 md:space-x-16 flex-wrap gap-6 opacity-40 animate-fade-in">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center" data-testid={`partner-${partner.toLowerCase()}`}>
              <span className="text-white text-lg font-semibold">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
