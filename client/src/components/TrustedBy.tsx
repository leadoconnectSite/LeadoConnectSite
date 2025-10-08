import company1 from "@/assets/company1.png";
import company2 from "@/assets/company2.png";
import company3 from "@/assets/company3.png";
import company4 from "@/assets/company4.png";

export default function TrustedBy() {
  const companyLogos = [
    {
      name: "Edmingle",
      logo: company1,
      alt: "Edmingle Logo"
    },
    {
      name: "Synergy Group", 
      logo: company2,
      alt: "Synergy Group Logo"
    },
    {
      name: "HKR Trainings",
      logo: company3, 
      alt: "HKR Trainings Logo"
    },
    {
      name: "Drishti",
      logo: company4,
      alt: "Drishti Logo"
    }
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

        {/* Company Logos Horizontal Scroll */}
        <div className="relative py-16 mb-16 animate-slide-up">
          <div className="overflow-hidden mx-auto" style={{width: 'calc(4 * 280px + 3 * 4rem)'}}>
            <div className="flex animate-scroll gap-16 whitespace-nowrap">
              {/* First set of logos */}
              {companyLogos.map((company, index) => (
                <div key={`first-${index}`} className="flex-shrink-0" style={{width: '280px'}}>
                  <img 
                    src={company.logo} 
                    alt={company.alt}
                    className="max-h-64 w-full object-contain opacity-80 hover:opacity-100 transition-opacity rounded-xl"
                    data-testid={`trusted-company-${company.name.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                </div>
              ))}
              {/* Second set of logos for seamless loop */}
              {companyLogos.map((company, index) => (
                <div key={`second-${index}`} className="flex-shrink-0" style={{width: '280px'}}>
                  <img 
                    src={company.logo} 
                    alt={company.alt}
                    className="max-h-64 w-full object-contain opacity-80 hover:opacity-100 transition-opacity rounded-xl"
                    data-testid={`trusted-company-duplicate-${company.name.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
