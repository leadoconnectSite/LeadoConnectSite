import { Shield, CheckCircle, AlertTriangle, Database, Mail, Zap } from "lucide-react";

export default function DataAccuracySection() {
  return (
    <section 
      className="pt-3 md:pt-6 pb-8 md:pb-12 overflow-hidden"
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
              DATA ACCURACY
            </span>
            <div className="w-12 h-px bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Data validation and <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">guaranteed accuracy</span> with deliverability in mind.
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto text-lg mb-8 leading-relaxed">
            Your outbound prospecting suffers from bounces, spam complaints, spam traps, and bots, among other things. 
            We validate and channel-optimize each contact one by one to ensure accuracy and deliverability.
          </p>
        </div>

        {/* Validation Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Email Bounce Validation */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-accent/50 transition-all duration-300">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
              <Mail className="text-accent" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Email Bounce Validation</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Advanced syntax and deliverability checks to eliminate hard bounces and protect your sender reputation.
            </p>
          </div>
          
          {/* Abuse & Spam Detection */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-accent/50 transition-all duration-300">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="text-accent" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Abuse & Spam Likely Email Detection</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Identifies high-risk email addresses that could trigger spam complaints or damage deliverability rates.
            </p>
          </div>
          
          {/* Honeypot & Spam Trap Detection */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-accent/50 transition-all duration-300">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
              <Shield className="text-accent" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Honeypot & Spam Trap Detection</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Detects and removes honeypot emails and spam traps that could blacklist your domain or IP address.
            </p>
          </div>

          {/* MX Record Detection */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-accent/50 transition-all duration-300">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
              <Database className="text-accent" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">MX Record Detection with ESP I.D.</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Verifies mail server configuration and identifies email service providers for optimal delivery routing.
            </p>
          </div>

          {/* Catch-All Email Verification */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-accent/50 transition-all duration-300">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="text-accent" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Catch-All Email Verification</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Advanced validation of catch-all domains to determine actual mailbox existence and deliverability potential.
            </p>
          </div>

          {/* Toxic Domain & Disposable Verification */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-accent/50 transition-all duration-300">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
              <Zap className="text-accent" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Toxic Domain & Disposable Verification</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Filters out temporary, disposable, and toxic domains that provide no long-term engagement value.
            </p>
          </div>
        </div>

        {/* Process Benefits */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Why Our Validation Process Matters</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Each contact goes through our comprehensive validation pipeline to ensure your campaigns achieve maximum deliverability and engagement.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-accent" size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Protect Sender Reputation</h4>
              <p className="text-gray-300 text-sm">
                Prevent bounces and spam complaints that damage your domain reputation and deliverability rates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-accent" size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Maximize Campaign ROI</h4>
              <p className="text-gray-300 text-sm">
                Focus resources on verified contacts that can actually receive and engage with your messages.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-accent" size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Improve Conversion Rates</h4>
              <p className="text-gray-300 text-sm">
                Channel-optimized data ensures your messages reach real decision-makers ready to engage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
