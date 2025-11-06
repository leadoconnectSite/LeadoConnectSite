import CalendlyButton from "@/components/CalendlyButton";

export default function FinalCTA() {
  // Calendly popup handled by CalendlyButton

  return (
    <section
      id="contact"
      className="leadconnect-dark py-12 md:py-20 border-t border-leadconnect-teal scroll-mt-24"
    >
      <div className="site-container">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="text-center mb-8 md:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight"
              data-testid="text-final-cta-title"
            >
              Join the hundreds of companies{" "}
              <span className="hidden sm:inline">
                <br />
              </span>
              generating Sales leads from{" "}
              <span className="hidden sm:inline">
                <br />
              </span>
              LeadoConnect.
            </h2>
          </div>

          {/* CTA Card with Image - Responsive Layout */}
          <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-accent to-leadconnect-accent rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl max-h-none lg:max-h-[400px]">
            {/* Image - Mobile first, then desktop */}
            <div className="w-full lg:w-2/5 h-[200px] sm:h-[250px] lg:h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Professional businesswoman at desk"
                className="w-full h-full object-cover"
                data-testid="img-final-cta"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-3/5 p-6 sm:p-8 md:p-10 lg:p-16 flex flex-col justify-center">
              <span
                className="text-leadconnect-dark text-xs sm:text-sm font-semibold tracking-wider uppercase block mb-4 sm:mb-6"
                data-testid="text-final-cta-label"
              >
                ROOTED IN TRUST
              </span>

              <h3
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-leadconnect-dark mb-6 sm:mb-8 leading-snug sm:leading-tight"
                data-testid="text-final-cta-heading"
              >
                We believe in the power of human connection
              </h3>

              <CalendlyButton
                className="bg-leadconnect-dark text-white px-6 sm:px-8 py-3 sm:py-4 font-bold hover:bg-leadconnect-dark/90 transition-all transform hover:scale-105 shadow-lg w-full sm:w-fit text-sm sm:text-base"
                data-testid="button-final-cta-book-demo"
              >
                BOOK A DEMO
              </CalendlyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

