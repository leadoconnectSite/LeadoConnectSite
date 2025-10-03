import { Button } from "@/components/ui/button";

export default function PurposeDriven() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative leadconnect-dark py-16 md:py-24 overflow-hidden">
      {/* Dot Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 dot-pattern opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 dot-pattern opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Label */}
          <div className="inline-block mb-6">
            <span className="text-accent text-xs md:text-sm font-semibold tracking-wider uppercase" data-testid="text-purpose-label">
              PURPOSE DRIVEN
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight animate-slide-up" data-testid="text-purpose-title">
            We are the leader in SQL<br className="hidden sm:block" />
            appointment setting and<br className="hidden sm:block" />
            revenue growth.
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto animate-slide-up" data-testid="text-purpose-description">
            By refusing to become an outsourced factory, we take a consultative approach that puts our client's interests above our own. We invest in the best people, technology, and processes so that our clients can focus on growth. We know that in sales everybody wants quick wins (and there are some!), but long-term, sustainable revenue success should always be the foundation.
          </p>

          {/* CTA Button */}
          <div className="animate-slide-up">
            <Button
              onClick={scrollToContact}
              className="leadconnect-accent text-leadconnect-dark px-8 py-3.5 font-bold hover:bg-leadconnect-accent-hover transition-all transform hover:scale-105"
              data-testid="button-purpose-book-demo"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Dot Pattern */}
      <div className="absolute bottom-0 right-0 w-full h-32 dot-pattern opacity-10"></div>
    </section>
  );
}
