import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-leadconnect-dark via-leadconnect-teal to-leadconnect-dark pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 text-[200px] font-bold text-white/5">
          Future
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl animate-fade-in">
          {/* Label */}
          <div className="inline-block mb-6">
            <span className="text-accent text-xs md:text-sm font-semibold tracking-wider uppercase" data-testid="text-hero-label">
              THE FUTURE OF SALES
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 md:mb-8 animate-slide-up" data-testid="text-hero-headline">
            Better Process.<br />
            Experienced Team.<br />
            More Revenue.
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-3xl mb-8 md:mb-10 leading-relaxed animate-slide-up" data-testid="text-hero-description">
            We accelerate revenue pipelines by providing the strategy, data, technology, automation, and constant flow of SQL & MQL so that your team can book more qualified opportunities. Our expertise in outbound B2B lead generation leads to sustainable growth while simultaneously reducing and lowering your (CAC) customer acquisition cost.
          </p>

          {/* CTA Button */}
          <div className="animate-slide-up">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="leadconnect-accent text-leadconnect-dark px-8 py-4 font-bold hover:bg-leadconnect-accent-hover transition-all transform hover:scale-105 text-base md:text-lg shadow-lg"
              data-testid="button-hero-book-demo"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Dot Pattern Overlay */}
      <div className="absolute bottom-0 right-0 w-64 h-64 dot-pattern opacity-30"></div>
    </section>
  );
}
