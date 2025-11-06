import company1 from "@/assets/company1.png";
import company2 from "@/assets/company2.png";
import company3 from "@/assets/company3.png";
import company4 from "@/assets/company4.png";
import company5 from "@/assets/company5.png";
import company6 from "@/assets/company6.jpg";
import company7 from "@/assets/company7.png";
// Remove the problematic imports and use placeholders instead

export default function TrustedBy() {
  const companyLogos = [
    {
      name: "Edmingle",
      logo: company1,
      alt: "Edmingle Logo",
    },
    {
      name: "Herkey",
      logo: company2,
      alt: "Herkey Logo",
    },
    {
      name: "Drishti",
      logo: company3,
      alt: "Drishti Logo",
    },
    {
      name: "Cadena",
      logo: company4,
      alt: "Cadena Logo",
    },
    {
      name: "Easehawk Technologies",
      logo: company5,
      alt: "Easehawk Technologies Logo",
    },
    {
      name: "Aktis Engineering Solutions",
      logo: company6,
      alt: "Aktis Engineering Solutions Logo",
    },
    {
      name: "Fx31 Labs",
      logo: company7,
      alt: "Fx31 Labs Logo",
    },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedCompanies = [...companyLogos, ...companyLogos];

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

        {/* Scrolling Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 mx-4 group relative bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Logo Container */}
                  <div className="mb-4 p-4 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors duration-300 w-full">
                    <img
                      src={company.logo}
                      alt={company.alt}
                      className="h-16 w-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                  
                  {/* Company Info */}
                  <h3 className="text-white font-bold text-lg">
                    {company.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-272px * 7)); /* 7 companies * (w-64 + mx-4) */
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}