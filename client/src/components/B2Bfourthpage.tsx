import { Search, Users, Shield, CheckCircle, ArrowRight, Target } from "lucide-react";

export default function FutureOfDataSection() {
  const handleLearnMore = () => {
    window.location.href = "/pricing"; // Same pattern as your header
  };

  return (
    <section 
      className="pt-3 md:pt-6 pb-8 md:pb-12 overflow-hidden"
      style={{ backgroundColor: "#023043" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-accent"></div>
            <span className="text-accent text-xs md:text-sm font-semibold tracking-wider uppercase">
              PROCESS ORIENTED
            </span>
            <div className="w-12 h-px bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get in front of more buyers and start more<span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent"> qualified conversations</span> with hand curated data.
          </h2>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
              <Users className="text-accent" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Done-For-You Research</h3>
            <p className="text-xl font-semibold text-white mb-4">We'll find every contact at the companies you're selling into.</p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Specialized researchers with access to a complex data stack provides you full visibility into your target addressable market. This process provides better data, better sales campaigns, more qualified opportunities, and ultimately more revenue.
            </p>
            <button 
              onClick={handleLearnMore}
              className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
            >
              Learn more
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
              <Shield className="text-accent" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">4x Verification Process</h3>
            <p className="text-xl font-semibold text-white mb-4">Curated data focused on conversations not activity.</p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Let your sales team sell, not be forced to spend time querying single data sources and manually importing data. Specialized data researchers deliver custom data lists curated to your specific campaign needs and channel-optimized for prospecting accuracy.
            </p>
            <button 
              onClick={handleLearnMore}
              className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
            >
              Learn more
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
