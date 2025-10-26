import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import B2BFirstPage from "@/components/B2BFirstPage";
import B2BSecondPage from "@/components/B2BSecondPage";
import B2BThirdPage from "@/components/B2BThirdPage";
import B2BFourthPage from "@/components/B2BFourthPage";
import B2BFifthPage from "@/components/B2BFifthPage";
import B2BSixthPage from "@/components/B2BSixthPage";



export default function B2B() {
  return (
    <div className="min-h-screen">
      <Header />
      <B2BFirstPage />       
      <B2BSecondPage />  
      <B2BThirdPage />   
      <B2BFourthPage />      
      <B2BFifthPage />  
      <B2BSixthPage />                       
      <FinalCTA />                           
      <Footer />
    </div>
  );
}