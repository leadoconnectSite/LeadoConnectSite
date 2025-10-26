import { FileText, Users, Target, Shield, CheckSquare } from "lucide-react";


export default function FiveStepDataProcess() {
  return (
    <section className="pt-3 md:pt-6 pb-16 md:pb-24 relative bg-gradient-to-br from-gray-900 via-leadconnect-dark to-gray-800 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Removed extra padding wrapper */}
        <div>
          {/* Centered Section Label */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-7">
              <div className="w-8 h-px bg-accent"></div>
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                SIMPLE 5-STEP DATA PROCESS
              </span>
              <div className="w-8 h-px bg-accent"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              70% of traditional databases <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">go bad every year.</span>
            </h1>
            
            <p className="text-gray-300 max-w-4xl mx-auto text-lg mb-12 leading-relaxed">
              This is why you need an on-demand data research team. LeadoConnect is the industries 
              leading provider of dedicated research specialists who source and validate all the 
              contact data available on your addressable market.
            </p>
          </div>


          {/* 5-Step Process Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
            {/* Step 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">01</div>
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4 mt-2">
                <FileText className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Submit B2B Contact Data Request</h3>
              <p className="text-gray-300 text-sm">
                Each request defines data criteria, quantity, and delivery schedule.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">02</div>
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4 mt-2">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Dedicated Research Team Assigned</h3>
              <p className="text-gray-300 text-sm">
                Experienced data researchers and QA teams paired to each client.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">03</div>
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4 mt-2">
                <Target className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Data Sourced to ICP Specifications</h3>
              <p className="text-gray-300 text-sm">
                Weekly data delivery sprints to align with client delivery schedule.
              </p>
            </div>


            {/* Step 4 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">04</div>
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4 mt-2">
                <Shield className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Data Validated and Quality Assurance</h3>
              <p className="text-gray-300 text-sm">
                Channel-optimized data details validated & checked against DNC.
              </p>
            </div>


            {/* Step 5 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">05</div>
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4 mt-2">
                <CheckSquare className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Verified Data Sent for your Approval</h3>
              <p className="text-gray-300 text-sm">
                Complete data file provided to client in Google Sheet format for approval.
              </p>
            </div>
          </div>


          {/* Key Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Research Teams</h3>
              <p className="text-gray-300">
                Dedicated researchers and QA specialists assigned to ensure data quality and accuracy.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">ICP-Aligned Sourcing</h3>
              <p className="text-gray-300">
                Data sourced specifically to your Ideal Customer Profile specifications and requirements.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quality Assurance</h3>
              <p className="text-gray-300">
                Multi-layer validation process with DNC compliance checks and Google Sheet delivery format.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
