import art1 from "@/assets/art.avif";
import art2 from "@/assets/art2.png";
import art3 from "@/assets/art3.png";
import art4 from "@/assets/art4.avif";
import art5 from "@/assets/art5.png";

export default function TrackRecordSection() {
  const companyCards = [
    {
      name: "Art",
      logo: art1,
      alt: "Art Logo",
    },
    {
      name: "Minted",
      logo: art2,
      alt: "Minted Logo",
    },
    {
      name: "Rackspace",
      logo: art3,
      alt: "Rackspace Logo",
    },
    {
      name: "Sodexo",
      logo: art4,
      alt: "Sodexo Logo",
    },
    {
      name: "Segment",
      logo: art5,
      alt: "Segment Logo",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-leadconnect-dark to-gray-800 py-3 md:py-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Label */}
        <div className="text-center mb-7 md:mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-7">
            <div className="w-8 h-px bg-accent"></div>
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              DECADE LONG TRACK RECORD
            </span>
            <div className="w-8 h-px bg-accent"></div>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            We work behind the scenes as<br />
            revenue partners growing your<br />
            favorite brands.
          </h2>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
          {companyCards.map((company, index) => (
            <div key={index} className="border border-accent/30 rounded-md p-6 bg-leadconnect-dark/50 flex flex-col items-center">
              <div className="text-accent text-4xl font-bold mb-2">3X</div>
              <p className="text-white text-sm mb-6">More outbound leads</p>
              <div className="h-12 flex items-center justify-center">
                <img 
                  src={company.logo} 
                  alt={company.alt} 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}