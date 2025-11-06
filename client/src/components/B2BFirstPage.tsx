import { Database, Users, CheckCircle } from "lucide-react";

export default function B2BFirstPage() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-leadconnect-dark to-gray-800 py-16 md:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="site-container relative z-10">
        {/* Reduced top padding */}
        <div className="pt-12 md:pt-16">
          {/* Centered Section Label */}
          <div className="text-center mb-7 md:mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-7">
              <div className="w-8 h-px bg-accent"></div>
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                DATA SOURCING & ENRICHMENT
              </span>
              <div className="w-8 h-px bg-accent"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Never pay for a <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">database again.</span>
            </h1>
            
            <p className="text-gray-300 max-w-4xl mx-auto text-lg mb-12 leading-relaxed">
              You don't need data from another outdated overpriced database. Experienced research teams 
              source and validate high intent data that matches your ideal customer profile. B2B contact 
              records are sourced in real-time to ensure accuracy and contain custom data points that 
              increase sales conversions.
            </p>
          </div>
          
          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Database className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Sourcing</h3>
              <p className="text-gray-300">
                Fresh, validated B2B contact records sourced in real-time to ensure maximum accuracy and deliverability.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ideal Customer Matching</h3>
              <p className="text-gray-300">
                Experienced research teams identify and validate high-intent prospects that match your exact customer profile.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Custom Data Points</h3>
              <p className="text-gray-300">
                Enhanced contact records with custom data points specifically designed to increase your sales conversions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
