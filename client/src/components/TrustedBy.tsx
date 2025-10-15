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
    <section 
      className="pt-3 md:pt-6 pb-16 md:pb-20 overflow-hidden"
      style={{ backgroundColor: "#023043" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-accent"></div>
            <span
              className="text-accent text-xs md:text-sm font-semibold tracking-wider uppercase"
            >
              TRUSTED BY
            </span>
            <div className="w-12 h-px bg-accent"></div>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mt-4 mb-6 leading-tight"
          >
            Companies driving{" "}
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              revenue
            </span>
            <br className="hidden sm:block" />
            with LeadoConnect
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
            500+ sales leaders, marketers, and founders across industries trust us to drive revenue.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {companyLogos.map((company, index) => (
            <div
              key={index}
              className="group relative bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                {/* Logo Container */}
                <div className="mb-6 p-6 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors duration-300 w-full">
                  <img
                    src={company.logo}
                    alt={company.alt}
                    className="h-20 w-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                
                {/* Company Info */}
                <h3 className="text-white font-bold text-xl mb-3">
                  {company.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {company.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}