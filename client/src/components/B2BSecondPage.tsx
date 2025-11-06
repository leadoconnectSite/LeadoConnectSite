import { Search, Database, RefreshCw, Zap } from "lucide-react";


export default function FutureOfDataSection() {
  return (
    <section 
      className="pt-3 md:pt-6 pb-16 md:pb-24 overflow-hidden" // Updated to match doubled bottom margin
      style={{ backgroundColor: "#023043" }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-accent"></div>
            <span
              className="text-accent text-xs md:text-sm font-semibold tracking-wider uppercase"
            >
              THE FUTURE OF DATA
            </span>
            <div className="w-12 h-px bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Researchers are the most <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">reliable source</span> of B2B data
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
            Not stale overpriced databases. LeadoConnect combines experienced data researchers with 
            cutting-edge tools & 100+ data sources for superior B2B intelligence.
          </p>
        </div>


        {/* Data Services Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12"> {/* Reduced from mb-16 */}
          {/* Service 1 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
              <Search className="text-accent" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">B2B Contact Data Sourcing</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              LeadoConnect sources verified lead lists by combining experienced data researchers 
              with cutting-edge tools & 100+ data sources.
            </p>
            <div className="flex items-center text-accent">
              <Zap size={16} className="mr-2" />
              <span className="text-sm font-medium">Real-time verification</span>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
              <Database className="text-accent" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Database Enrichment & Clean Up</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Lead researchers go record-by-record in your CRM to clean decayed data by 
              appending and sourcing fresh channel optimized data.
            </p>
            <div className="flex items-center text-accent">
              <RefreshCw size={16} className="mr-2" />
              <span className="text-sm font-medium">Record-by-record accuracy</span>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
              <Zap className="text-accent" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Custom On Demand Data</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Don't limit yourself to stale database data. With an experienced research team 
              you list the specific custom data points you need.
            </p>
            <div className="flex items-center text-accent">
              <Database size={16} className="mr-2" />
              <span className="text-sm font-medium">Unlimited customization</span>
            </div>
          </div>
        </div>


        {/* Statistics/Benefits Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"> {/* Removed mb-12 */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <div className="text-white font-semibold mb-1">Data Sources</div>
              <div className="text-gray-400 text-sm">Multi-source verification</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-white font-semibold mb-1">Accuracy Rate</div>
              <div className="text-gray-400 text-sm">Human-verified records</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24hr</div>
              <div className="text-white font-semibold mb-1">Turnaround</div>
              <div className="text-gray-400 text-sm">Fast delivery guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
