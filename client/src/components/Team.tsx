import Team1 from "@/assets/Team1.jpg";
import Team2 from "@/assets/Team2.jpg";
import Team3 from "@/assets/Team3.jpg";

export default function Team() {
  const teamMembers = [
    {
      name: "Darryl Alexander",
      role: "Founder & CEO",
      image: Team1,
      bio: "Leading LeadoConnect with 10+ years of sales experience",
    },
    {
      name: "Jitendra Likhar",
      role: "Co-Founder & CMO",
      image: Team2,
      bio: "Driving marketing strategy and brand growth",
    },
    {
      name: "Satyam Sahu",
      role: "Operation Manager",
      image: Team3,
      bio: "Overseeing operations and business development",
    },
  ];

  return (
    <section
      id="team"
      className="relative bg-gradient-to-br from-gray-900 via-leadconnect-dark to-gray-800 pt-3 md:pt-6 pb-8 md:pb-10 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="site-container relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-7 md:mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-7">
            <div className="w-8 h-px bg-accent"></div>
            <span
              className="text-accent text-sm font-semibold tracking-wider uppercase"
              data-testid="text-team-label"
            >
              An Experienced Team
            </span>
            <div className="w-8 h-px bg-accent"></div>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            data-testid="text-team-title"
          >
            Meet the frontline SDRs
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              driving revenue
            </span>{" "}
            at LeadoConnect.
          </h2>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Our leadership team combines decades of experience in sales,
            marketing, and business development to deliver exceptional results
            for our clients.
          </p>
        </div>

        {/* Team Grid - NO GREEN DOTS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto animate-slide-up">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:border-accent/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20"
              data-testid={`team-member-${index}`}
            >
              {/* Card background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Image Container - NO STATUS DOTS */}
              <div className="relative mb-5 mx-auto w-32 h-32 md:w-36 md:h-36">
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

                <p className="text-gray-300 text-sm leading-relaxed mb-5 group-hover:text-gray-200 transition-colors duration-300">
                  {member.bio}
                </p>
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
