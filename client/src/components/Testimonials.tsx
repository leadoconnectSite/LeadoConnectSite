import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import CLIENT1 from "@/assets/CLIENT1.jpg";
import CLIENT2 from "@/assets/CLIENT2.jpg";
import CLIENT3 from "@/assets/CLIENT3.jpg";
import CLIENT4 from "@/assets/CLIENT4.jpg";
import CLIENT5 from "@/assets/CLIENT5.jpg";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const testimonials = [
    {
      quote:
        "I am delighted to share my testimonial about the incredible support we have received from LeadoConnect in generating B2B SQL's and Appointment settings for our company. Their team has consistently delivered exceptional results that have significantly boosted our sales pipeline.",
      author: "Prashant Agrawal",
      role: "Co-Founder & CMO",
      company: "Edvninja",
      image: CLIENT1,
      rating: 5,
      initials: "PA",
    },
    {
      quote:
        "LeadoConnect transformed our lead generation process completely. The quality of leads and the conversion rates have exceeded our expectations by 300%. Highly recommended for any B2B company looking to scale.",
      author: "Stephen Carter",
      role: "Founder & CEO",
      company: "Sterling Staffing",
      image: CLIENT2,
      rating: 5,
      initials: "SJ",
    },
    {
      quote:
        "Leadoconnect delivered what it promised. The support team is very good and helpful. In first 2 months my organization got a very good RoI (5X to 10X) on B2B email marketing that Leadoconnect took for us. They are professional in conduct and help you to get sales qualified leads in an effective way!",
      author: "Mrugank Chinchkhede",
      role: "Global Business Development Partner",
      company: "The Board Game Co.",
      image: CLIENT3,
      rating: 5,
      initials: "MC",
    },
    {
      quote:
        "I am thrilled to share my testimonial about the exceptional support we received from LeadoConnect in generating SQL for the K12 segment and also supporting us for performance marketing for our company.",
      author: "Madhura Pathare",
      role: "CEO",
      company: "Drishti",
      image: CLIENT4,
      rating: 5,
      initials: "MP",
    },
    {
      quote:
        "Leadoconnect's B2B agency services exceeded our expectations. Their targeted approach generated quality leads and drove revenue growth. Impressive!",
      author: "Sandeep Maske",
      role: "Founder & CEO",
      company: "Cinute Digital Pvt. Ltd & TestRiq",
      image: CLIENT5,
      rating: 5,
      initials: "SM",
    },
  ];

  // Auto-scroll effect - cycles through testimonials every 10 seconds
  useEffect(() => {
    if (testimonials.length <= 1) return; // Don't auto-scroll if only one testimonial

    const intervalId = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000); // 10 seconds interval (10000 milliseconds)

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageLoad = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: false }));
  };

  // Manual navigation functions
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
      id="testimonials"
      className="relative bg-gradient-to-br from-gray-900 via-leadconnect-dark to-gray-800 pt-3 md:pt-6 pb-8 md:pb-10 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-8 md:mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-accent"></div>
            <span
              className="text-accent text-sm font-semibold tracking-wider uppercase"
              data-testid="text-testimonials-label"
            >
              Client Testimonials
            </span>
            <div className="w-8 h-px bg-accent"></div>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            data-testid="text-testimonials-title"
          >
            What our clients are
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              saying about us
            </span>
          </h2>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders have
            to say about working with LeadoConnect and the results we've
            delivered.
          </p>
        </div>

        {/* Modern Testimonial Card with Navigation */}
        <div className="max-w-7xl mx-auto animate-slide-up">
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-3 md:p-5 border border-white/10 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="grid lg:grid-cols-2 gap-5 items-start relative z-10 min-h-[480px] lg:min-h-[420px] pt-6 md:pt-8">
              {/* Client Image Section */}
              <div className="order-2 lg:order-1 flex items-center justify-center h-full">
                <div className="relative max-w-md mx-auto lg:mx-0 h-[280px] lg:h-[360px] w-full">
                  {/* Gradient border around image */}
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-accent to-blue-500 p-1">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-leadconnect-dark">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={`${testimonials[currentTestimonial].author} - ${testimonials[currentTestimonial].role}`}
                        className="w-full h-full object-cover object-center rounded-xl scale-95 transition-all duration-700 ease-in-out"
                        data-testid="img-testimonial-author"
                        key={`img-${currentTestimonial}`} // Force re-render for smooth transitions
                        onError={(
                          e: React.SyntheticEvent<HTMLImageElement>
                        ) => {
                          const img = e.currentTarget;
                          img.style.display = "none";
                          const sibling =
                            img.nextElementSibling as HTMLElement | null;
                          if (sibling) sibling.style.display = "flex";
                        }}
                      />
                      {/* Fallback when image fails */}
                      <div
                        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl"
                        style={{ display: "none" }}
                      >
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center">
                            <span className="text-4xl font-bold text-white">
                              {testimonials[currentTestimonial].initials}
                            </span>
                          </div>
                          <p className="text-white font-semibold text-lg">
                            {testimonials[currentTestimonial].author}
                          </p>
                          <p className="text-gray-300 text-sm">
                            {testimonials[currentTestimonial].role}
                          </p>
                          <p className="text-red-400 text-xs mt-2">
                            Image failed to load
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="order-1 lg:order-2 flex flex-col justify-between h-full min-h-[400px] lg:min-h-[420px]">
                {/* Content Area */}
                <div className="relative flex-1">
                  {/* Large Quote Icon */}
                  <div className="absolute -top-6 -left-6 text-accent/30 transform rotate-12">
                    <Quote className="w-20 h-20 fill-current" />
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote
                    className="text-xl md:text-2xl text-white leading-relaxed mb-6 font-light relative z-10 transition-all duration-700 ease-in-out"
                    data-testid="text-testimonial-quote"
                    key={`quote-${currentTestimonial}`} // Force re-render for smooth transitions
                  >
                    {testimonials[currentTestimonial].quote}
                  </blockquote>

                  {/* Author Information */}
                  <div className="border-t border-white/10 pt-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center text-white font-bold text-lg transition-all duration-700 ease-in-out">
                        {testimonials[currentTestimonial].initials}
                      </div>
                      <div>
                        <p
                          className="font-bold text-white text-lg mb-1 transition-all duration-700 ease-in-out"
                          data-testid="text-testimonial-author"
                          key={`author-${currentTestimonial}`}
                        >
                          {testimonials[currentTestimonial].author}
                        </p>
                        <p
                          className="text-accent font-medium text-sm transition-all duration-700 ease-in-out"
                          data-testid="text-testimonial-role"
                          key={`role-${currentTestimonial}`}
                        >
                          {testimonials[currentTestimonial].role}
                        </p>
                        <p 
                          className="text-gray-400 text-sm transition-all duration-700 ease-in-out"
                          key={`company-${currentTestimonial}`}
                        >
                          {testimonials[currentTestimonial].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls - Fixed at bottom */}
                <div className="flex items-center justify-between mt-6 pt-4">
                  {/* Left Navigation Button */}
                  <button
                    onClick={goToPrevious}
                    className="w-12 h-12 bg-white/10 hover:bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-accent transition-all duration-300 hover:scale-110"
                    data-testid="btn-testimonial-previous"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {/* Progress Indicators */}
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-700 ease-in-out hover:scale-110 ${
                          index === currentTestimonial
                            ? 'bg-accent scale-125 shadow-lg shadow-accent/50'
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                        data-testid={`btn-testimonial-indicator-${index}`}
                      />
                    ))}
                  </div>

                  {/* Right Navigation Button */}
                  <button
                    onClick={goToNext}
                    className="w-12 h-12 bg-white/10 hover:bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-accent transition-all duration-300 hover:scale-110"
                    data-testid="btn-testimonial-next"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-accent/30 group-hover:border-accent transition-colors duration-300"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-accent/30 group-hover:border-accent transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
