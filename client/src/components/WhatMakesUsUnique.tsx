import { Users, Monitor, FileCheck } from "lucide-react";
import serviceImage from "@/assets/service.jpg";

export default function WhatMakesUsUnique() {
  const pillars = [
    {
      icon: Users,
      title: "People Focused",
      description: "Any investment in creating a revenue pipeline has to start with the people driving your daily sales activities."
    },
    {
      icon: Monitor,
      title: "Technology Driven", 
      description: "We combine strategic thinking with an enterprise technology suite to scale prospecting activity, optimize lead engagements, and optimize future engagements."
    },
    {
      icon: FileCheck,
      title: "Process Oriented",
      description: "Top-of-funnel sales isn't about setting more appointments, it's about creating better experiences and well-defined processes that align your revenue goals to our prospecting activities."
    }
  ];

  return (
    <section id="about" className="bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 animate-fade-in">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={serviceImage}
              alt="Professional businessman presenting"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              data-testid="img-unique-presentation"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-accent text-xs md:text-sm font-semibold tracking-wider uppercase" data-testid="text-unique-label">
              OUR SECRET SAUCE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-leadconnect-dark mt-4 mb-6" data-testid="text-unique-title">
              What makes<br />
              LeadConnect<br />
              unique.
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed" data-testid="text-unique-description">
              LeadConnect provides an experienced lead generation automation email focused campaigns for driving revenue growth.
            </p>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-slide-up">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                data-testid={`pillar-${index}`}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-leadconnect-dark mb-4" data-testid={`text-pillar-title-${index}`}>
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" data-testid={`text-pillar-description-${index}`}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
