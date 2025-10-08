import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import CLIENT1 from "@/assets/CLIENT1.jpg";
import CLIENT2 from "@/assets/CLIENT2.jpg";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const testimonials = [
    {
      quote: "I am delighted to share my testimonial about the incredible support we have received from LeadConnect in generating B2B SQL's and Appointment settings for our company. Their team has consistently delivered exceptional results that have significantly boosted our sales pipeline.",
      author: "Prashant Agrawal",
      role: "Co-Founder & CMO",
      company: "Edvninja",
      image: CLIENT1, // Using imported asset
      rating: 5,
      initials: "PA"
    },
    {
      quote: "LeadConnect transformed our lead generation process completely. The quality of leads and the conversion rates have exceeded our expectations by 300%. Highly recommended for any B2B company looking to scale.",
      author: "Sarah Johnson", 
      role: "VP of Sales",
      company: "TechFlow Solutions",
      image: CLIENT2, // Using imported asset
      rating: 5,
      initials: "SJ"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const handleImageLoad = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: false }));
  };

  return (
    <section id="testimonials" className="relative bg-gradient-to-br from-gray-900 via-leadconnect-dark to-gray-800 py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-accent"></div>
            <span className="text-accent text-sm font-semibold tracking-wider uppercase" data-testid="text-testimonials-label">
              Client Testimonials
            </span>
            <div className="w-8 h-px bg-accent"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="text-testimonials-title">
            What our clients are<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              saying about us
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders have to say about 
            working with LeadConnect and the results we've delivered.
          </p>
        </div>

        {/* Modern Testimonial Card */}
        <div className="max-w-7xl mx-auto animate-slide-up">
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Client Image Section */}
              <div className="order-2 lg:order-1">
                <div className="relative max-w-md mx-auto lg:mx-0 h-[400px] lg:h-[500px]">
                  {/* Gradient border around image */}
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-accent to-blue-500 p-1">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-leadconnect-dark">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={`${testimonials[currentTestimonial].author} - ${testimonials[currentTestimonial].role}`}
                        className="w-full h-full object-cover object-center rounded-xl"
                        data-testid="img-testimonial-author"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback when image fails */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl" style={{ display: 'none' }}>
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
              <div className="order-1 lg:order-2">
                <div className="relative">
                  {/* Large Quote Icon */}
                  <div className="absolute -top-6 -left-6 text-accent/30 transform rotate-12">
                    <Quote className="w-20 h-20 fill-current" />
                  </div>
                  

                  
                  {/* Testimonial Quote */}
                  <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-light relative z-10" data-testid="text-testimonial-quote">
                  {testimonials[currentTestimonial].quote}
                </blockquote>

                  {/* Author Information */}
                  <div className="border-t border-white/10 pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                        {testimonials[currentTestimonial].initials}
                      </div>
                      <div>
                        <p className="font-bold text-white text-lg mb-1" data-testid="text-testimonial-author">
                          {testimonials[currentTestimonial].author}
                        </p>
                        <p className="text-accent font-medium text-sm" data-testid="text-testimonial-role">
                          {testimonials[currentTestimonial].role}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {testimonials[currentTestimonial].company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center justify-between mt-8">
                    <div className="flex items-center gap-4">
                      <Button
                        onClick={prevTestimonial}
                        variant="ghost"
                        size="sm"
                        className="w-12 h-12 rounded-full bg-white/10 hover:bg-accent hover:scale-110 text-white transition-all duration-300"
                        data-testid="button-testimonial-prev"
                        disabled={testimonials.length <= 1}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </Button>
                      <Button
                        onClick={nextTestimonial}
                        variant="ghost"
                        size="sm"
                        className="w-12 h-12 rounded-full bg-white/10 hover:bg-accent hover:scale-110 text-white transition-all duration-300"
                        data-testid="button-testimonial-next"
                        disabled={testimonials.length <= 1}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </div>

                    {/* Testimonial Counter */}
                    <div className="text-gray-400 text-sm">
                      {currentTestimonial + 1} of {testimonials.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-accent/30 group-hover:border-accent transition-colors duration-300"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-accent/30 group-hover:border-accent transition-colors duration-300"></div>
          </div>

          {/* Testimonial Indicators */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-accent scale-125'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
