export default function Team() {
  const teamMembers = [
    {
      name: "Darryl Alexander",
      role: "Founder & CEO",
      image: "/src/assets/Team1.jpg",
      bio: "Leading LeadConnect with 10+ years of sales experience",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Jitendra Likhar",
      role: "Co-Founder & CMO", 
      image: "/src/assets/Team2.jpg",
      bio: "Driving marketing strategy and brand growth",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sasha Das",
      role: "Business Head",
      image: "/src/assets/Team3.jpg",
      bio: "Overseeing operations and business development",
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <section id="team" className="relative bg-gradient-to-br from-gray-900 via-leadconnect-dark to-gray-800 py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-accent"></div>
            <span className="text-accent text-sm font-semibold tracking-wider uppercase" data-testid="text-team-label">
              An Experienced Team
            </span>
            <div className="w-8 h-px bg-accent"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="text-team-title">
            Meet the frontline SDRs<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              driving revenue
            </span> at LeadConnect.
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Our leadership team combines decades of experience in sales, marketing, and business development 
            to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Team Grid - NO GREEN DOTS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto animate-slide-up">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20"
              data-testid={`team-member-${index}`}
            >
              {/* Card background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image Container - NO STATUS DOTS */}
              <div className="relative mb-6 mx-auto w-32 h-32 md:w-36 md:h-36">
                {/* Static gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-blue-500 p-0.5">
                  {/* Image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-leadconnect-dark">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover object-center"
                      data-testid={`img-team-member-${index}`}
                    />
                  </div>
                </div>
                
                {/* GREEN DOTS REMOVED */}
              </div>

              {/* Member Info */}
              <div className="text-center relative z-10">
                <h3
                  className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300"
                  data-testid={`text-member-name-${index}`}
                >
                  {member.name}
                </h3>
                
                <p
                  className="text-accent font-semibold text-sm tracking-wide uppercase mb-3"
                  data-testid={`text-member-role-${index}`}
                >
                  {member.role}
                </p>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a 
                    href={member.linkedin}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 group/social"
                  >
                    <svg className="w-5 h-5 text-gray-300 group-hover/social:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href={member.twitter}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 group/social"
                  >
                    <svg className="w-5 h-5 text-gray-300 group-hover/social:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-accent/30 group-hover:border-accent transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-accent/30 group-hover:border-accent transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
