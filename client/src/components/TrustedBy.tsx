export default function TrustedBy() {
  const companies = [
    "HKR Trainings",
    "Synergy Doon", 
    "Edmingle",
    "Upthrust"
  ];

  return (
    <section className="bg-gradient-to-b from-leadconnect-dark to-leadconnect-teal py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-accent text-xs md:text-sm font-semibold tracking-wider uppercase" data-testid="text-trusted-label">
            TRUSTED BY
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6" data-testid="text-trusted-title">
            See how companies experience<br className="hidden sm:block" />
            growth with LeadConnect.
          </h2>
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto mb-12 animate-slide-up">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white/5 rounded-xl p-8 hover:bg-white/10 transition-colors h-32"
              data-testid={`trusted-company-${company.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <span className="text-white font-bold text-lg">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
