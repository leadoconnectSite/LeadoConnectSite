import second1 from "@/assets/second1.png";
import second2 from "@/assets/second2.png";
import second3 from "@/assets/second3.png";
import second4 from "@/assets/second4.png";
import second5 from "@/assets/second5.png";
import second6 from "@/assets/second6.png";

export default function CombinedIntro() {
  const companyLogos = [
    { name: "second1", logo: second1, alt: "Company logo 1" },
    { name: "second2", logo: second2, alt: "Company logo 2" },
    { name: "second3", logo: second3, alt: "Company logo 3" },
    { name: "second4", logo: second4, alt: "Company logo 4" },
    { name: "second5", logo: second5, alt: "Company logo 5" },
    { name: "second6", logo: second6, alt: "Company logo 6" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Companies driving revenue + Purpose Driven merged into one section */}
      <section className="relative bg-gradient-to-b from-leadconnect-dark to-leadconnect-teal pt-3 md:pt-6 pb-6 md:pb-8 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 md:mb-5 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              Companies driving <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">revenue</span><br className="hidden sm:block" />
              with LeadConnect.
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
              500+ sales leaders, marketers, and founders across industries trust us to drive revenue.
            </p>
          </div>

          {/* Logo Carousel with faster scrolling */}
          <div className="relative py-2 md:py-3">
            <div className="overflow-hidden">
              <div className="flex animate-scroll-faster gap-16">
                {/* Triple set of logos for seamless continuous loop */}
                {[...companyLogos, ...companyLogos, ...companyLogos].map((company, index) => (
                  <div key={`logo-${index}`} className="flex-shrink-0" style={{ width: '220px' }}>
                    <img
                      src={company.logo}
                      alt={company.alt}
                      className="max-h-16 w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Add custom CSS for faster smooth continuous animation */}
          <style jsx>{`
            @keyframes scroll-faster {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-220px * 6 - 16px * 6)); /* Move by one set of logos */
              }
            }
            .animate-scroll-faster {
              animation: scroll-faster 20s linear infinite; /* Changed from 30s to 20s for faster speed */
              display: flex;
              width: max-content;
            }
            .animate-scroll-faster:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Purpose Driven content inside the same section */}
          <div id="about" className="relative z-10 mt-6 md:mt-8">
            <div className="max-w-6xl mx-auto relative animate-fade-in">
              {/* Card window */}
              <div className="relative bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl">
                {/* Dot pattern bottom-right */}
                <div className="pointer-events-none absolute -bottom-2 right-4 sm:right-8 w-40 sm:w-56 h-40 sm:h-56 opacity-20">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)',
                      backgroundSize: '16px 16px'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  {/* Label */}
                  <div className="inline-block mb-5">
                    <span className="text-accent text-xs md:text-sm font-semibold tracking-wider uppercase">
                      PURPOSE DRIVEN
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-5 leading-tight">
                    We are the leader in SQL appointment setting and revenue growth.
                  </h2>

                  {/* Description */}
                  <p className="text-gray-200/90 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-3xl mx-auto text-justify">
                    By refusing to become an outsourced factory, we take a consultative approach that puts our client's interests first. We invest in the best people, technology, and processes so our clients can focus on growth. We know that in sales everybody wants quick wins (and there are some!), but long term, sustainable revenue success should always be the goal.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}