import { 
  Target, 
  Users, 
  MessageCircle,
  CheckCircle,
  TrendingUp,
  Clock
} from "lucide-react";

export default function AboutPage() {
  const scrollToFinalCTA = () => {
    const scrollToBottom = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    };

    setTimeout(() => {
      const possibleElements = [
        ...Array.from(document.querySelectorAll('section, div')).filter(el => {
          const text = el.textContent?.toLowerCase() || '';
          return (text.includes('get started') || 
                  text.includes('contact') || 
                  text.includes('book') ||
                  text.includes('schedule') ||
                  text.includes('demo')) && 
                  text.length > 50;
        }),
        ...Array.from(document.querySelectorAll('section')).slice(-3),
      ];

      let targetElement = null;

      for (const element of possibleElements) {
        const text = element.textContent?.toLowerCase() || '';
        if (!text.includes('footer') && !text.includes('copyright') && !text.includes('© ')) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.pageYOffset;
          
          if (elementTop > document.documentElement.scrollHeight * 0.6) {
            targetElement = element;
            break;
          }
        }
      }

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        scrollToBottom();
      }
    }, 100);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-leadconnect-dark to-gray-800 py-16 md:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="site-container relative z-10">
        <div className="pt-12 md:pt-16">
          {/* Centered Section Label */}
          <div className="text-center mb-6 md:mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-accent"></div>
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                ABOUT US
              </span>
              <div className="w-8 h-px bg-accent"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              We are the <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">leader in SQL appointment setting</span>
            </h1>
            
            <p className="text-gray-300 max-w-4xl mx-auto text-lg mb-10 leading-relaxed">
              For years, we've been revolutionizing outbound sales through better data, expert strategies, 
              and a commitment to sustainable revenue growth. We don't just set appointments—we build 
              pipelines that convert into long-term business relationships.
            </p>
          </div>
          
          {/* Our Approach Grid - 2 rows of 3 columns each */}
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-5 mb-3">
            {/* Row 1 - First 3 features */}
            {/* Purpose-Driven Approach */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Target className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Purpose-Driven Approach</h3>
              <p className="text-gray-300 text-sm">
                We take a consultative approach that puts our client's interests first, focusing on sustainable success.
              </p>
            </div>
            
            {/* Market Intelligence */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Market Intelligence</h3>
              <p className="text-gray-300 text-sm">
                Deep market insights and data-driven strategies specific to your industry and target audience.
              </p>
            </div>
            
            {/* Client Collaboration */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Client Collaboration</h3>
              <p className="text-gray-300 text-sm">
                We work as an extension of your team, ensuring alignment and transparency throughout our partnership.
              </p>
            </div>
            
            {/* Row 2 - Additional value props */}
            {/* Expert Team */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-gray-300 text-sm">
                Seasoned professionals with deep sales acumen and industry expertise driving your campaigns.
              </p>
            </div>
            
            {/* Proven Methodologies */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Methodologies</h3>
              <p className="text-gray-300 text-sm">
                Time-tested outbound strategies and conversion methodologies that deliver consistent results.
              </p>
            </div>
            
            {/* Long-term Focus */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Long-term Focus</h3>
              <p className="text-gray-300 text-sm">
                Strategic approach focused on building sustainable revenue streams, not just quick wins.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-4">
            <button 
              onClick={scrollToFinalCTA}
              className="bg-gradient-to-r from-accent to-blue-400 hover:from-accent/90 hover:to-blue-400/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-accent/25"
            >
              Partner With Us
            </button>
            <p className="text-gray-400 text-sm mt-2">
              Month-to-month contracts • Transparent collaboration • Revenue-focused results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}