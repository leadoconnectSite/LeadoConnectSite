import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import FinalCTA from "@/components/FinalCTA";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />    
      <ContactHero />
      <ContactForm />
      <ContactInfo />                     
      <FinalCTA />                           
      <Footer />
    </div>
  );
}