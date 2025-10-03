export default function Team() {
  const teamMembers = [
    {
      name: "Darryl Alexander",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700&q=80"
    },
    {
      name: "Jitendra Likhar",
      role: "Co-Founder & CMO", 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700&q=80"
    },
    {
      name: "Sasha Das",
      role: "Business Head",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700&q=80"
    }
  ];

  return (
    <section id="team" className="leadconnect-dark py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 animate-fade-in">
          <span className="text-accent text-xs md:text-sm font-semibold tracking-wider uppercase" data-testid="text-team-label">
            AN EXPERIENCED TEAM
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4" data-testid="text-team-title">
            Meet the frontline SDRs driving<br className="hidden sm:block" />
            revenue at LeadConnect.
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto animate-slide-up">
          {teamMembers.map((member, index) => (
            <div key={index} className="group" data-testid={`team-member-${index}`}>
              <div className="relative overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-accent/20 to-transparent">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`img-team-member-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-leadconnect-dark via-transparent to-transparent opacity-60"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2" data-testid={`text-member-name-${index}`}>
                {member.name}
              </h3>
              <p className="text-accent font-medium" data-testid={`text-member-role-${index}`}>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
