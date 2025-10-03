import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  const handleBookDemo = () => {
    // Handle book demo action
    console.log('Book demo clicked');
  };

  return (
    <section id="contact" className="leadconnect-dark py-16 md:py-24 border-t border-leadconnect-teal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" data-testid="text-final-cta-title">
              Join the hundreds of companies<br className="hidden sm:block" />
              generating Sales leads from<br className="hidden sm:block" />
              LeadConnect.
            </h2>
          </div>

          {/* CTA Card with Image */}
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-r from-accent to-leadconnect-accent rounded-2xl overflow-hidden shadow-2xl">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=900&q=80"
                alt="Professional businesswoman at desk"
                className="w-full h-full object-cover min-h-[400px]"
                data-testid="img-final-cta"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 p-8 md:p-12 lg:p-16">
              <span className="text-leadconnect-dark text-xs md:text-sm font-semibold tracking-wider uppercase block mb-6" data-testid="text-final-cta-label">
                ROOTED IN TRUST
              </span>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-leadconnect-dark mb-8 leading-tight" data-testid="text-final-cta-heading">
                We believe in the power of human connection
              </h3>

              <Button
                onClick={handleBookDemo}
                size="lg"
                className="bg-leadconnect-dark text-white px-8 py-4 font-bold hover:bg-leadconnect-dark/90 transition-all transform hover:scale-105 shadow-lg"
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
