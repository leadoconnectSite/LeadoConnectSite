import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function CompaniesSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "I am delighted to share my testimonial about the incredible support we have received from LeadoConnect in generating B2B SQL's and Appointment settings for our company. Their team has consistently delivered exceptional results that have significantly boosted our sales pipeline.",
      author: "Prashant Agrawal",
      role: "Co-Founder & CMO",
      company: "Edvninja",
      rating: 5,
      initials: "PA",
    },
    {
      quote: "LeadoConnect transformed our lead generation process completely. The quality of leads and the conversion rates have exceeded our expectations by 300%. Highly recommended for any B2B company looking to scale.",
      author: "Stephen Carter",
      role: "Founder & CEO",
      company: "Sterling Staffing",
      rating: 5,
      initials: "SC",
    },
    {
      quote: "Leadoconnect delivered what it promised. The support team is very good and helpful. In first 2 months my organization got a very good RoI (5X to 10X) on B2B email marketing that Leadoconnect took for us. They are professional in conduct and help you to get sales qualified leads in an effective way!",
      author: "Mrugank Chinchkhede",
      role: "Global Business Development Partner",
      company: "The Board Game Co.",
      rating: 5,
      initials: "MC",
    },
    {
      quote: "I am thrilled to share my testimonial about the exceptional support we received from LeadoConnect in generating SQL for the K12 segment and also supporting us for performance marketing for our company.",
      author: "Madhura Pathare",
      role: "CEO",
      company: "Drishti",
      rating: 5,
      initials: "MP",
    },
    {
      quote: "Leadoconnect's B2B agency services exceeded our expectations. Their targeted approach generated quality leads and drove revenue growth. Impressive!",
      author: "Sandeep Maske",
      role: "Founder & CEO",
      company: "Cinute Digital Pvt. Ltd & TestRiq",
      rating: 5,
      initials: "SM",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    if (testimonials.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000); // 8 seconds interval

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

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
              JOIN THE HUNDREDS OF COMPANIES
            </span>
            <div className="w-12 h-px bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Who have relied on us for revenue opportunities
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our clients consistently see a 30% increase in qualified meetings and a 25% boost in conversion rates within the first 90 days.
          </p>
        </div>

        {/* Revenue Results Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">30%</div>
            <p className="text-white">Increase in qualified meetings</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">25%</div>
            <p className="text-white">Higher conversion rates</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">3X</div>
            <p className="text-white">Return on investment</p>
          </div>
        </div>

        {/* Auto-sliding Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 transition-all duration-500 ease-in-out">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="text-accent" size={20} fill="currentColor" />
              ))}
            </div>
            
            {/* Quote */}
            <blockquote 
              className="text-xl text-white italic mb-6 transition-all duration-500 ease-in-out min-h-[120px]"
              key={`quote-${currentTestimonial}`}
            >
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            
            {/* Author Info */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-accent font-bold">
                  {testimonials[currentTestimonial].initials}
                </span>
              </div>
              <div>
                <div className="text-white font-medium">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-gray-400">
                  {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          {testimonials.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="w-10 h-10 bg-white/10 hover:bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Progress Indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out hover:scale-125 ${
                      index === currentTestimonial
                        ? 'bg-accent scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="w-10 h-10 bg-white/10 hover:bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}