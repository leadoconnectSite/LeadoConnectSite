import { Star } from "lucide-react";

export default function CompaniesSection() {
  return (
    <section 
      className="pt-3 md:pt-6 pb-20 md:pb-32 overflow-hidden"
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
              JOIN THE HUNDREDS OF COMPANIES
            </span>
            <div className="w-12 h-px bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Who have relied on us for revenue opportunities
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our clients consistently see a 30% increase in qualified meetings and a 25% boost in conversion rates within the first 90 days.
          </p>
        </div>

        {/* Revenue Results Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">30%</div>
            <p className="text-white">Increase in qualified meetings</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">25%</div>
            <p className="text-white">Higher conversion rates</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">3X</div>
            <p className="text-white">Return on investment</p>
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 max-w-4xl mx-auto">
          <div className="flex gap-1 mb-4">
            <Star className="text-accent" size={20} fill="currentColor" />
            <Star className="text-accent" size={20} fill="currentColor" />
            <Star className="text-accent" size={20} fill="currentColor" />
            <Star className="text-accent" size={20} fill="currentColor" />
            <Star className="text-accent" size={20} fill="currentColor" />
          </div>
          <blockquote className="text-xl text-white italic mb-6">
            "LeadoConnect's appointment setting service has transformed our sales pipeline. Their team consistently delivers high-quality meetings with decision-makers, resulting in a significant boost to our revenue."
          </blockquote>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
              <span className="text-accent font-bold">JD</span>
            </div>
            <div>
              <div className="text-white font-medium">John Doe</div>
              <div className="text-gray-400">VP of Sales, Enterprise Tech</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}