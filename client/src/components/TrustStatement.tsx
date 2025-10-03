export default function TrustStatement() {
  return (
    <section className="leadconnect-dark py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="leadconnect-accent rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Dot Pattern */}
            <div className="absolute bottom-0 right-0 w-48 h-48 dot-pattern opacity-20"></div>
            
            <div className="relative z-10">
              <span className="text-leadconnect-dark text-xs md:text-sm font-semibold tracking-wider uppercase block mb-6" data-testid="text-trust-label">
                ROOTED IN TRUST
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-leadconnect-dark mb-8 leading-tight" data-testid="text-trust-title">
                We believe in the power of human connection
              </h2>

              <div className="max-w-2xl">
                <p className="text-leadconnect-dark/80 text-base md:text-lg leading-relaxed mb-8" data-testid="text-trust-description">
                  Channel-optimized prospecting will become even more pivotal to growing an organization's revenue. Through targeted data research and competitive persona modeling you can equip frontline sales & development Reps with a modern sales strategy built around managing the accessibility B2B developments in sales technologies, and push for automation. This human interaction in sales is the future (and we're already here).
                </p>

                <div className="border-t border-leadconnect-dark/20 pt-6">
                  <p className="font-bold text-leadconnect-dark text-lg mb-1" data-testid="text-ceo-name">
                    Darryl Alexander, CEO,
                  </p>
                  <p className="text-leadconnect-dark/70" data-testid="text-company-name">LeadConnect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
