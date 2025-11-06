import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppointmentSection from "@/components/AppointmentSection";
import CompaniesSection from "@/components/CompaniesSection";
import OutboundAgencySection from "@/components/OutboundAgencySection";
import SalesTeamSection from "@/components/SalesTeamSection";
import AnalyticsSection from "@/components/AnalyticsSection";

export default function AppointmentSettings() {
  return (
    <div className="min-h-screen">
      <Header />
      <AppointmentSection />
      <CompaniesSection />
      <OutboundAgencySection />
      <SalesTeamSection />
      <AnalyticsSection />
      <Footer />
    </div>
  );
}