import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Clock } from "lucide-react";
import second1 from "@/assets/second1.png";
import second2 from "@/assets/second2.png";
import second3 from "@/assets/second3.png";
import second4 from "@/assets/second4.png";
import second5 from "@/assets/second5.png";
import second6 from "@/assets/second6.png";

export default function CombinedIntro() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const timeSlots = [
    "09:00","09:30","10:00","10:30","11:00","11:30",
    "12:00","14:00","14:30","15:00","15:30","16:00"
  ];
  const timeZone = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);
  const companyLogos = [
    { name: "second1", logo: second1, alt: "Company logo 1" },
    { name: "second2", logo: second2, alt: "Company logo 2" },
    { name: "second3", logo: second3, alt: "Company logo 3" },
    { name: "second4", logo: second4, alt: "Company logo 4" },
    { name: "second5", logo: second5, alt: "Company logo 5" },
    { name: "second6", logo: second6, alt: "Company logo 6" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Companies driving revenue + Purpose Driven merged into one section */}
      <section className="relative bg-gradient-to-b from-leadconnect-dark to-leadconnect-teal pt-3 md:pt-6 pb-6 md:pb-8 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 md:mb-5 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              Companies driving <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">revenue</span><br className="hidden sm:block" />
              with LeadConnect.
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
              500+ sales leaders, marketers, and founders across industries trust us to drive revenue.
            </p>
          </div>

          {/* Logo Carousel with faster scrolling */}
          <div className="relative py-2 md:py-3">
            <div className="overflow-hidden">
              <div className="flex animate-scroll-faster gap-16">
                {/* Triple set of logos for seamless continuous loop */}
                {[...companyLogos, ...companyLogos, ...companyLogos].map((company, index) => (
                  <div key={`logo-${index}`} className="flex-shrink-0" style={{ width: '220px' }}>
                    <img
                      src={company.logo}
                      alt={company.alt}
                      className="max-h-16 w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Add custom CSS for faster smooth continuous animation */}
          <style jsx>{`
            @keyframes scroll-faster {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-220px * 6 - 16px * 6)); /* Move by one set of logos */
              }
            }
            .animate-scroll-faster {
              animation: scroll-faster 20s linear infinite; /* Changed from 30s to 20s for faster speed */
              display: flex;
              width: max-content;
            }
            .animate-scroll-faster:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Purpose Driven content inside the same section */}
          <div id="about" className="relative z-10 mt-6 md:mt-8">
            <div className="max-w-6xl mx-auto relative animate-fade-in">
              {/* Card window */}
              <div className="relative bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl">
                {/* Dot pattern bottom-right */}
                <div className="pointer-events-none absolute -bottom-2 right-4 sm:right-8 w-40 sm:w-56 h-40 sm:h-56 opacity-20">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)',
                      backgroundSize: '16px 16px'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  {/* Label */}
                  <div className="inline-block mb-5">
                    <span className="text-accent text-xs md:text-sm font-semibold tracking-wider uppercase">
                      PURPOSE DRIVEN
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-5 leading-tight">
                    appointment setting and<br className="hidden sm:block" />
                    revenue growth.
                  </h2>

                  {/* Description */}
                  <p className="text-gray-200/90 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-3xl mx-auto text-justify">
                    By refusing to become an outsourced factory, we take a consultative approach that puts our client's interests first. We invest in the best people, technology, and processes so our clients can focus on growth. We know that in sales everybody wants quick wins (and there are some!), but long term, sustainable revenue success should always be the goal.
                  </p>

                  {/* Booking UI */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 md:p-6 text-left">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300 mb-4">
                      <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4 text-accent"/>30 min</span>
                      <span className="opacity-60">•</span>
                      <span>Web conferencing details provided upon confirmation.</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-sm text-white font-semibold mb-2">Select a Date</div>
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="rounded-md bg-white/0"
                        />
                        <div className="mt-2 text-xs text-gray-400">Time zone: {timeZone}</div>
                      </div>
                      <div>
                        <div className="text-sm text-white font-semibold mb-2">Select a Time</div>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((t) => (
                            <button
                              key={t}
                              onClick={() => setSelectedTime(t)}
                              className={`text-xs px-2 py-2 rounded-md border transition-colors ${selectedTime === t ? 'bg-accent text-leadconnect-dark border-accent' : 'border-white/10 bg-white/5 text-white hover:bg-white/10'}`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button className="leadconnect-accent text-leadconnect-dark px-5 py-2 font-semibold hover:bg-leadconnect-accent-hover">Confirm Booking</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
{{ ... }}
      </section>
    </>
  );
}