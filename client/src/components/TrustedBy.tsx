import company1 from "@/assets/company1.png";
import company2 from "@/assets/company2.png";
import company3 from "@/assets/company3.png";
import company4 from "@/assets/company4.png";

export default function TrustedBy() {
  const companyLogos = [
    {
      name: "Edmingle",
      logo: company1,
      alt: "Edmingle Logo",
      description: "Leading EdTech Platform",
    },
    {
      name: "Synergy Group",
      logo: company2,
      alt: "Synergy Group Logo",
      description: "Business Consulting Firm",
    },
    {
      name: "HKR Trainings",
      logo: company3,
      alt: "HKR Trainings Logo",
      description: "Professional Training Institute",
    },
    {
      name: "Drishti",
      logo: company4,
      alt: "Drishti Logo",
      description: "Innovation Solutions Provider",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-leadconnect-dark to-leadconnect-teal pt-3 md:pt-6 pb-16 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-accent"></div>
            <span
              className="text-accent text-xs md:text-sm font-semibold tracking-wider uppercase"
              data-testid="text-trusted-label"
            >
              TRUSTED BY
            </span>
            <div className="w-8 h-px bg-accent"></div>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6"
            data-testid="text-trusted-title"
          >
            See how companies experience
            <br className="hidden sm:block" />
            growth with LeadoConnect.
          </h2>
        </div>

        {/* Enhanced Logo Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {companyLogos.map((company, index) => (
            <div
              key={index}
              className="group relative bg-white/5 rounded-2xl p-10 backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-5 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                  <img
                    src={company.logo}
                    alt={company.alt}
                    className="h-24 w-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                    data-testid={`trusted-company-${company.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  />
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">
                  {company.name}
                </h3>
                <p className="text-white/60 text-base">{company.description}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Connection Visualization */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-2 text-white/40 mb-8">
            <div className="w-12 h-px bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="w-12 h-px bg-white/20"></div>
          </div>
          <p className="text-white/60 text-sm italic">
            Trusted by industry leaders across various sectors
          </p>
        </div>
      </div>
    </section>
  );
}
