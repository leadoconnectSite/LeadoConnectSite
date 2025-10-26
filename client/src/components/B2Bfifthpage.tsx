import { 
  DollarSign, 
  MapPin, 
  Phone, 
  Mail, 
  Users, 
  Building2, 
  UserCheck, 
  TrendingUp, 
  Factory, 
  Briefcase 
} from "lucide-react";


export default function DataAttributesPage() {
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
                THE DATA YOU NEED
              </span>
              <div className="w-8 h-px bg-accent"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Better data, <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">sourced by researchers</span>
            </h1>
            
            <p className="text-gray-300 max-w-4xl mx-auto text-lg mb-12 leading-relaxed">
              With the data attributes you actually need. Get comprehensive business intelligence 
              with validated contact information, company metrics, and strategic insights that 
              drive results for your sales and marketing teams.
            </p>
          </div>
          
          {/* Data Attributes Grid - 2 rows of 5 columns each */}
          <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-2 gap-6">
            {/* Row 1 - First 5 attributes */}
            {/* Revenue */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Revenue</h3>
              <p className="text-gray-300 text-sm">
                Annual revenue totals, funding rounds, eCommerce sales.
              </p>
            </div>
            
            {/* Company Location */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Company Location</h3>
              <p className="text-gray-300 text-sm">
                Company address details, contact details, franchise locations.
              </p>
            </div>
            
            {/* Contact Phone */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Contact Phone</h3>
              <p className="text-gray-300 text-sm">
                Corporate direct dial, direct dial cell phones, corporate business.
              </p>
            </div>
            
            {/* Contact Email */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Contact Email</h3>
              <p className="text-gray-300 text-sm">
                Contact email addresses validated for deliverability.
              </p>
            </div>
            
            {/* No. of Employees */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">No. of Employees</h3>
              <p className="text-gray-300 text-sm">
                Company headcount, department sizes, location metrics.
              </p>
            </div>
            
            {/* Row 2 - Next 5 attributes */}
            {/* SIC Codes */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Building2 className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">SIC Codes</h3>
              <p className="text-gray-300 text-sm">
                A classification system for business activity used by government.
              </p>
            </div>
            
            {/* Title */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <UserCheck className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Title</h3>
              <p className="text-gray-300 text-sm">
                Employee and persona titles, along with hierarchy.
              </p>
            </div>
            
            {/* Seniority */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Seniority</h3>
              <p className="text-gray-300 text-sm">
                Decision-maker hierarchy mapping with tiered status.
              </p>
            </div>
            
            {/* Industries */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Factory className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Industries</h3>
              <p className="text-gray-300 text-sm">
                Attribute identifying business sector for targeted marketing.
              </p>
            </div>
            
            {/* Department */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Department</h3>
              <p className="text-gray-300 text-sm">
                Cross department role prioritization for campaign segments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
