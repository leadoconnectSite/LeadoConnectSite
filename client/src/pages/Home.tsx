import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import PurposeDriven from "@/components/PurposeDriven";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import Results from "@/components/Results";
import TrustStatement from "@/components/TrustStatement";
import WhatMakesUsUnique from "@/components/WhatMakesUsUnique";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ClientLogos />
      <PurposeDriven />
      <Services />
      <Statistics />
      <Results />
      <TrustStatement />
      <WhatMakesUsUnique />
      <Team />
      <Testimonials />
      <TrustedBy />
      <FinalCTA />
      <Footer />
    </div>
  );
}
