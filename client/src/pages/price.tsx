import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Price1 from "@/components/ui/price1";
import FinalCTA from "@/components/FinalCTA";





export default function B2B() {
  return (
    <div className="min-h-screen">
      <Header />    
      <Price1 />                       
      <FinalCTA />                           
      <Footer />
    </div>
  );
}