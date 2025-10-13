import { Users, Monitor, FileCheck } from "lucide-react";
import serviceImage from "@/assets/service.jpg";

export default function WhatMakesUsUnique() {
  const pillars = [
    {
      icon: Users,
      title: "People Focused",
      description:
        "Any investment in creating a revenue pipeline has to start with the people driving your daily sales activities.",
    },
    {
      icon: Monitor,
      title: "Technology Driven",
      description:
        "We combine strategic thinking with enterprise technology to scale prospecting, optimize lead engagement, and enhance future interactions.",
    },
    {
      icon: FileCheck,
      title: "Process Oriented",
      description:
        "Top-funnel excellence is about quality experiences and defined processes that align prospecting activities with your revenue goals.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 py-7 md:py-11"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Image - Made more compact */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center mb-8 md:mb-10 animate-fade-in">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={serviceImage}
              alt="Professional businessman presenting"
              className="rounded-xl shadow-lg w-full h-auto object-cover max-h-64 md:max-h-80"
              data-testid="img-unique-presentation"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span
              className="text-accent text-xs font-semibold tracking-wider uppercase"
              data-testid="text-unique-label"
            >
              OUR SECRET SAUCE
            </span>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-leadconnect-dark mt-2 mb-4"
              data-testid="text-unique-title"
            >
              What makes LeadoConnect unique.
            </h2>
            <p
              className="text-gray-600 text-sm md:text-base leading-relaxed"
              data-testid="text-unique-description"
            >
              LeadoConnect provides an experienced lead generation automation
              email focused campaigns for driving revenue growth.
            </p>
          </div>
        </div>

        {/* Three Pillars - Made more compact */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-slide-up">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                data-testid={`pillar-${index}`}
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5 text-accent" />
                </div>
                <h3
                  className="text-lg md:text-xl font-bold text-leadconnect-dark mb-3"
                  data-testid={`text-pillar-title-${index}`}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-gray-600 text-sm leading-relaxed text-justify"
                  data-testid={`text-pillar-description-${index}`}
                >
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
