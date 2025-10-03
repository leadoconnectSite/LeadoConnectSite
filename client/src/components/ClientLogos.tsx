export default function ClientLogos() {
  const companies = [
    "StoryJet",
    "TechCorp", 
    "DataSync",
    "CloudBase"
  ];

  return (
    <section className="bg-gradient-to-b from-leadconnect-teal to-leadconnect-dark py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4" data-testid="text-client-logos-title">
            Companies driving revenue<br className="hidden sm:block" />
            with LeadConnect.
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto" data-testid="text-client-logos-subtitle">
            500+ sales leaders, marketers, and founders across industries trust us to drive revenue.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center max-w-5xl mx-auto animate-slide-up">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-20 bg-white/10 rounded-lg backdrop-blur-sm p-6 hover:bg-white/15 transition-colors"
              data-testid={`logo-${company.toLowerCase()}`}
            >
              <span className="text-white font-bold text-lg">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
