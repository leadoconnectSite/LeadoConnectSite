import { ArrowRight, Calendar, Clock, Users } from "lucide-react";
import CalendlyButton from "./CalendlyButton";

export default function SalesTeamSection() {
  return (
    <section 
      className="pt-3 md:pt-6 pb-20 md:pb-32 overflow-hidden"
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
              A DONE FOR YOU
            </span>
            <div className="w-12 h-px bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Sales Team
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
            Our appointment setting process is designed to seamlessly integrate with your sales workflow, 
            delivering qualified meetings directly to your calendar.
          </p>
        </div>

        {/* Booking Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Step 1 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">1</div>
            <h3 className="text-xl font-bold text-white mb-3 mt-2">Discovery Call</h3>
            <p className="text-gray-300 mb-4">
              We learn about your business, target audience, and revenue goals.
            </p>
            <div className="flex items-center text-accent">
              <Clock size={16} className="mr-2" />
              <span className="text-sm">30 minutes</span>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">2</div>
            <h3 className="text-xl font-bold text-white mb-3 mt-2">Strategy Development</h3>
            <p className="text-gray-300 mb-4">
              Our team creates a customized outbound strategy for your business.
            </p>
            <div className="flex items-center text-accent">
              <Clock size={16} className="mr-2" />
              <span className="text-sm">3-5 business days</span>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">3</div>
            <h3 className="text-xl font-bold text-white mb-3 mt-2">Campaign Launch</h3>
            <p className="text-gray-300 mb-4">
              We execute multi-touch sequences and begin engaging prospects.
            </p>
            <div className="flex items-center text-accent">
              <Users size={16} className="mr-2" />
              <span className="text-sm">Dedicated team</span>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">4</div>
            <h3 className="text-xl font-bold text-white mb-3 mt-2">Meetings Delivered</h3>
            <p className="text-gray-300 mb-4">
              Qualified appointments are booked directly to your calendar.
            </p>
            <div className="flex items-center text-accent">
              <Calendar size={16} className="mr-2" />
              <span className="text-sm">Seamless integration</span>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <CalendlyButton className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-colors">
            Book a Demo
            <ArrowRight size={18} />
          </CalendlyButton>
        </div>
      </div>
    </section>
  );
}