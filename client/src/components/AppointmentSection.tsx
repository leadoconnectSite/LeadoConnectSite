import { Calendar, MessageSquare, Target } from "lucide-react";

export default function AppointmentSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-leadconnect-dark to-gray-800 py-16 md:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Reduced top padding */}
        <div className="pt-12 md:pt-16">
          {/* Centered Section Label */}
          <div className="text-center mb-7 md:mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-7">
              <div className="w-8 h-px bg-accent"></div>
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                APPOINTMENT SETTINGS
              </span>
              <div className="w-8 h-px bg-accent"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Build a Pipeline That <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">Drives Real Revenue</span>
            </h2>
            
            <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-12">
              We create unique outbound sales strategies, craft personalized multi-touch sequences, 
              handle responses, and book appointments directly to your calendar.
            </p>
          </div>
          
          {/* Pipeline Process Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Target className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Strategic Planning</h3>
              <p className="text-gray-300">
                We develop customized outbound strategies aligned with your business goals and target audience.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Personalized Engagement</h3>
              <p className="text-gray-300">
                Our team crafts and executes multi-touch sequences that resonate with your prospects.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Direct Booking</h3>
              <p className="text-gray-300">
                We handle all responses and book qualified appointments directly to your calendar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}