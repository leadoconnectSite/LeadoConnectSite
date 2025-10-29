import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Price1 from "@/components/ui/price1";
import Team from "@/components/Team";
import FAQs from "@/components/FAQs";
import FinalCTA from "@/components/FinalCTA";





export default function B2B() {
  return (
    <div className="min-h-screen">
      <Header />    
      <Price1 />
      <Team />
      <FAQs />                       
      <FinalCTA />                           
      <Footer />
    </div>
  );
}