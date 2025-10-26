import { useState } from 'react';
import { 
  Target, 
  Users, 
  MessageCircle,
  CheckCircle,
  TrendingUp,
  Clock,
  Plus,
  Minus
} from "lucide-react";

export default function PricingPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What Are The Contract Lengths You Offer?",
      answer: "Because we at LeadoConnect firmly believe in consistently proving our customers' value, all of our contracts are month-to-month. This implies that you are not obligated to us for an extended period of time and can decide to continue working with us on a month-to-month basis. In outbound sales, return on investment (ROI) is often a convoluted topic that changes from one month to the next. We look forward to establishing a long-lasting partnership by demonstrating consistent revenue-generating results."
    },
    {
      question: "How Long Does It Take To Start A Program?",
      answer: "There's a lot to tackle in order to launch an effective appointment setting, lead generation, or outbound consulting program. LeadoConnect makes a select number of client onboardings available each month on either the 1st or 15th. From there we have a well-structured process to accomplish everything required to launch your program as effectively as possible. Typical launch timelines are as follows: Appointment setting (7-10 days), Lead Generation (1-3 days), and Outbound Consulting (1-2 days)."
    },
    {
      question: "Do You Offer Any Performance Guarantees?",
      answer: "LeadoConnect guarantees the service and sales activity deliverables we offer to our clients. Regarding sales appointments, we do not provide performance guarantees for the outcomes of our outbound sales efforts. This is because, in sales, too many factors could affect one's capacity to schedule meetings at a certain quantity and timeline. Our clients direct and approve each of our service deliverables, which can significantly impact how a campaign turns out. Because of this, every agreement is contracted month-to-month to provide flexibility to our clients if we are not delivering on our sales targets and to provide confidence that measurable revenue performance is always a priority."
    },
    {
      question: "How Do I Access Campaign Analytics To Monitor Program Performance?",
      answer: "We believe in full transparency of sales activity and campaign results. At LeadoConnect, we employ specialized campaign managers who connect with you in real time directly via shared Slack channels. These campaign managers keep you regularly updated on the status of your campaigns by using Apollo.io to track campaign performance. We also make it possible for you to bi-directionally integrate Hubspot and Salesforce to give you complete visibility and the ability to measure and evaluate the effectiveness of your marketing initiatives. Through make.com, we can also build unique integrations with any third-party CRM in addition to these. This enables our teams to make data-driven decisions to maximize our outbound efforts."
    },
    {
      question: "How Do We Qualify A Lead Or What Do We Consider A Qualified Appointment?",
      answer: "LeadoConnect is a full-service sales agency. This means that our clients first approve all work products we execute. Specific to appointment setting, together, our teams identify initial market segments that we'll be targeting and define specific ideal customer profile parameters. Our research team then follows a rigorous process of sourcing decision-makers at each of your target accounts before validating and channel-optimizing their contact details. Once this data is provided to our clients for review and approval, it gets activated in the specific outbound campaigns created for each market segment. At this stage, if a prospect agrees to connect on a sales call, we consider it qualified. Unqualified meetings are typically an indicator that proper segmentation was not completed during the strategy and research phase of outbound."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const scrollToFinalCTA = () => {
    // First, try to scroll to the very bottom of the page
    const scrollToBottom = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    };

    // Try multiple methods to find and scroll to FinalCTA
    setTimeout(() => {
      // Method 1: Look for elements that might be the FinalCTA
      const possibleElements = [
        // Try to find by common CTA text patterns
        ...Array.from(document.querySelectorAll('section, div')).filter(el => {
          const text = el.textContent?.toLowerCase() || '';
          return (text.includes('get started') || 
                  text.includes('contact') || 
                  text.includes('book') ||
                  text.includes('schedule') ||
                  text.includes('demo')) && 
                  text.length > 50; // Make sure it's substantial content
        }),
        // Try to find the last main section (likely before footer)
        ...Array.from(document.querySelectorAll('section')).slice(-3), // Last 3 sections
      ];

      let targetElement = null;

      // Find the element that's closest to the bottom but not the footer
      for (const element of possibleElements) {
        const text = element.textContent?.toLowerCase() || '';
        // Skip if it looks like a footer
        if (!text.includes('footer') && !text.includes('copyright') && !text.includes('© ')) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.pageYOffset;
          
          // Choose element that's in the lower half of the page
          if (elementTop > document.documentElement.scrollHeight * 0.6) {
            targetElement = element;
            break;
          }
        }
      }

      if (targetElement) {
        console.log('Found target element:', targetElement);
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.log('No specific element found, scrolling to bottom');
        scrollToBottom();
      }
    }, 100);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-leadconnect-dark to-gray-800 py-16 md:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-12 md:pt-16">
          {/* Centered Section Label */}
          <div className="text-center mb-7 md:mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-7">
              <div className="w-8 h-px bg-accent"></div>
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                PRICING
              </span>
              <div className="w-8 h-px bg-accent"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              There's a <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">better way to sell.</span>
            </h1>
            
            <p className="text-gray-300 max-w-4xl mx-auto text-lg mb-12 leading-relaxed">
              With better data and outbound expertise, we source, engage, and schedule qualified 
              meetings with your ideal customers most likely to convert into revenue.
            </p>
          </div>
          
          {/* Pricing Features Grid - 2 rows of 3 columns each */}
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 mb-16">
            {/* Row 1 - First 3 features */}
            {/* Alignment around lead generation */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Target className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lead Generation Alignment</h3>
              <p className="text-gray-300 text-sm">
                Alignment around your lead generation or SQL requirements.
              </p>
            </div>
            
            {/* Market specific strategies */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Market Strategies</h3>
              <p className="text-gray-300 text-sm">
                Overview of strategies specific to your market.
              </p>
            </div>
            
            {/* Initial conversations */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Initial Conversations</h3>
              <p className="text-gray-300 text-sm">
                Initial conversations around team capabilities, scope of work, and pricing.
              </p>
            </div>
            
            {/* Row 2 - Additional value props */}
            {/* Qualified Meetings */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Qualified Meetings</h3>
              <p className="text-gray-300 text-sm">
                Scheduled qualified meetings with ideal customers most likely to convert.
              </p>
            </div>
            
            {/* Outbound Expertise */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Outbound Expertise</h3>
              <p className="text-gray-300 text-sm">
                Expert-led outbound campaigns with proven conversion methodologies.
              </p>
            </div>
            
            {/* Revenue Focus */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Revenue Focus</h3>
              <p className="text-gray-300 text-sm">
                Strategic approach focused on converting prospects into measurable revenue.
              </p>
            </div>
          </div>

          {/* Call to Action - now scrolls down to FinalCTA */}
          <div className="text-center mb-16">
            <button 
              onClick={scrollToFinalCTA}
              className="bg-gradient-to-r from-accent to-blue-400 hover:from-accent/90 hover:to-blue-400/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-accent/25"
            >
              Get Custom Pricing
            </button>
            <p className="text-gray-400 text-sm mt-3">
              Performance-based • Custom solutions • Expert consultation
            </p>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-accent"></div>
                <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                  FAQS
                </span>
                <div className="w-8 h-px bg-accent"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Everything you need to know
              </h2>
              <p className="text-gray-300 text-lg">
                Everything you need to know about the product and billing. Can't find the answer you're looking for? Please chat to our team.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <Minus className="text-accent" size={20} />
                      ) : (
                        <Plus className="text-accent" size={20} />
                      )}
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out ${
                    openFAQ === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
