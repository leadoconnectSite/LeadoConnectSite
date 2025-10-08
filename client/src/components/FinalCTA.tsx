import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  const handleBookDemo = () => {
    // Handle book demo action
    console.log('Book demo clicked');
  };

  return (
    <section id="contact" className="leadconnect-dark py-16 md:py-20 border-t border-leadconnect-teal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" data-testid="text-final-cta-title">
              Join the hundreds of companies<br className="hidden sm:block" />
              generating Sales leads from<br className="hidden sm:block" />
              LeadConnect.
            </h2>
          </div>

          {/* CTA Card with Image - Horizontal Layout */}
          <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-accent to-leadconnect-accent rounded-2xl overflow-hidden shadow-2xl max-h-[400px]">
            {/* Image */}
            <div className="lg:w-2/5 h-[250px] lg:h-[400px] w-full">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Professional businesswoman at desk"
                className="w-full h-full object-cover"
                data-testid="img-final-cta"
              />
            </div>

            {/* Content */}
            <div className="lg:w-3/5 p-8 md:p-10 lg:p-16 flex flex-col justify-center">
              <span className="text-leadconnect-dark text-xs md:text-sm font-semibold tracking-wider uppercase block mb-6" data-testid="text-final-cta-label">
                ROOTED IN TRUST
              </span>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-leadconnect-dark mb-8 leading-tight" data-testid="text-final-cta-heading">
                We believe in the power of human connection
              </h3>

              <Button
                onClick={handleBookDemo}
                size="lg"
                className="bg-leadconnect-dark text-white px-8 py-4 font-bold hover:bg-leadconnect-dark/90 transition-all transform hover:scale-105 shadow-lg w-fit"
                data-testid="button-final-cta-book-demo"
              >
                BOOK A DEMO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
