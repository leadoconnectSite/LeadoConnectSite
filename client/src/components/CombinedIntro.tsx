export default function CombinedIntro() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Purpose Driven section */}
      <section
        className="relative pt-3 md:pt-6 pb-6 md:pb-8 overflow-hidden"
        style={{ backgroundColor: "#023043" }}
      >
        <div className="site-container">
          {/* Purpose Driven content */}
          <div id="about" className="relative z-10">
            <div className="max-w-6xl mx-auto relative animate-fade-in">
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
                  We are the leader in SQL appointment setting and revenue
                  growth.
                </h2>

                {/* Description */}
                <p className="text-gray-200/90 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-3xl mx-auto text-justify">
                  By refusing to become an outsourced factory, we take a
                  consultative approach that puts our client's interests
                  first. We invest in the best people, technology, and
                  processes so our clients can focus on growth. We know that
                  in sales everybody wants quick wins (and there are some!),
                  but long term, sustainable revenue success should always be
                  the goal.
                </p>

                {/* New Content Section 1: Our Approach */}
                <div className="mt-8 md:mt-12 mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                    Our Strategic Approach
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-6">
                    <div className="bg-white/5 rounded-xl p-4 md:p-6 border border-white/10">
                      <h4 className="text-lg md:text-xl font-semibold text-white mb-3">
                        Data-Driven Insights
                      </h4>
                      <p className="text-gray-200/80 text-sm md:text-base">
                        We leverage advanced analytics and market intelligence to identify the most qualified prospects for your business, ensuring higher conversion rates and better ROI.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 md:p-6 border border-white/10">
                      <h4 className="text-lg md:text-xl font-semibold text-white mb-3">
                        Personalized Outreach
                      </h4>
                      <p className="text-gray-200/80 text-sm md:text-base">
                        Every touchpoint is carefully crafted and personalized to resonate with your target audience, building genuine connections that lead to meaningful conversations.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 md:p-6 border border-white/10">
                      <h4 className="text-lg md:text-xl font-semibold text-white mb-3">
                        Continuous Optimization
                      </h4>
                      <p className="text-gray-200/80 text-sm md:text-base">
                        We constantly monitor, test, and refine our strategies based on real-time performance data to ensure maximum effectiveness and scalable growth.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Modern Why Choose Us Section */}
                <div className="mt-12 md:mt-16 mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12">
                    Why Industry Leaders Trust Us
                  </h3>
                  <div className="flex justify-center">
                    <div className="max-w-5xl w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {/* Left Column */}
                        <div className="space-y-4">
                          <div className="group bg-white/5 rounded-xl p-4 border border-white/10 hover:border-accent/30 transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="flex-shrink-0 w-3 h-3 bg-accent rounded-full"></div>
                              <span className="text-white text-lg font-semibold">
                                Proven Track Record
                              </span>
                            </div>
                          </div>

                          <div className="group bg-white/5 rounded-xl p-4 border border-white/10 hover:border-accent/30 transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="flex-shrink-0 w-3 h-3 bg-accent rounded-full"></div>
                              <span className="text-white text-lg font-semibold">
                                Expert Team
                              </span>
                            </div>
                          </div>

                          <div className="group bg-white/5 rounded-xl p-4 border border-white/10 hover:border-accent/30 transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="flex-shrink-0 w-3 h-3 bg-accent rounded-full"></div>
                              <span className="text-white text-lg font-semibold">
                                Cutting-Edge Technology
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-4">
                          <div className="group bg-white/5 rounded-xl p-4 border border-white/10 hover:border-accent/30 transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="flex-shrink-0 w-3 h-3 bg-accent rounded-full"></div>
                              <span className="text-white text-lg font-semibold">
                                Transparent Reporting
                              </span>
                            </div>
                          </div>

                          <div className="group bg-white/5 rounded-xl p-4 border border-white/10 hover:border-accent/30 transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="flex-shrink-0 w-3 h-3 bg-accent rounded-full"></div>
                              <span className="text-white text-lg font-semibold">
                                Scalable Solutions
                              </span>
                            </div>
                          </div>

                          <div className="group bg-white/5 rounded-xl p-4 border border-white/10 hover:border-accent/30 transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="flex-shrink-0 w-3 h-3 bg-accent rounded-full"></div>
                              <span className="text-white text-lg font-semibold">
                                Partnership Mindset
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}