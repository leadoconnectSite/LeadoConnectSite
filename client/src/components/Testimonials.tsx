import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const [currentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "I am delighted to share my testimonial about the incredible support we have received from LeadConnect in generating B2B SQL's and Appointment settings for our company.",
      author: "Prashant Agrawal",
      role: "Co-Founder & CMO - Edvninja",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700&q=80"
    }
  ];

  return (
    <section id="testimonials" className="leadconnect-dark py-16 md:py-20 border-t border-leadconnect-teal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 animate-fade-in">
          <span className="text-accent text-xs md:text-sm font-semibold tracking-wider uppercase" data-testid="text-testimonials-label">
            CLIENT TESTIMONIAL
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4" data-testid="text-testimonials-title">
            What our clients are saying about us.
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-6xl mx-auto animate-slide-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Client Image */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl max-w-md mx-auto md:mx-0">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={`${testimonials[currentTestimonial].author} - ${testimonials[currentTestimonial].role}`}
                  className="w-full h-auto object-cover"
                  data-testid="img-testimonial-author"
                />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="order-1 md:order-2">
              <div className="leadconnect-accent rounded-2xl p-8 md:p-10 lg:p-12 relative">
                {/* Quote Icon */}
                <div className="text-6xl text-leadconnect-dark/20 font-serif mb-4">"</div>
                
                <p className="text-leadconnect-dark text-lg md:text-xl leading-relaxed mb-8" data-testid="text-testimonial-quote">
                  {testimonials[currentTestimonial].quote}
                </p>

                <div className="border-t border-leadconnect-dark/20 pt-6">
                  <p className="font-bold text-leadconnect-dark text-lg mb-1" data-testid="text-testimonial-author">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-leadconnect-dark/70" data-testid="text-testimonial-role">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex space-x-4 mt-6">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white"
                  data-testid="button-testimonial-prev"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white"
                  data-testid="button-testimonial-next"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
