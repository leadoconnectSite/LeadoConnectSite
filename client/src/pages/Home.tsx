import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CombinedIntro from "@/components/CombinedIntro";
import Services from "@/components/Services";
import SalesTeam from "@/components/SalesTeam";
import Results from "@/components/Results";
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
      <CombinedIntro />
      <Services />
      <SalesTeam />
      <Results />
      <WhatMakesUsUnique />
      <Team />
      <Testimonials />
      <TrustedBy />
      <FinalCTA />
      <Footer />
    </div>
  );
}
