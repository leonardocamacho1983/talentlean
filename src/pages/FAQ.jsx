import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";
import CanonicalURL from "../components/CanonicalURL";

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Only update page title dynamically; all meta tags are in index.html for performance
    document.title = "FAQ - TalentLean | LatAm Staff Augmentation";
  }, []);

  const faqs = [
    {
      question: "What is TalentLean?",
      answer: "TalentLean is a near-shore talent partner that helps companies build and scale Latin-American tech teams. We source, vet and onboard skilled developers while taking care of local hiring, payroll, benefits, taxes and compliance. Our structure allows clients to focus on their projects while we manage the HR, legal and administrative details within each country's laws."
    },
    {
      question: "How does your AI-driven vetting process work?",
      answer: "We combine machine-learning ranking with expert recruiters. When you create a job position in our platform, you define required skills, topics and red flags; our AI generates tailored interview questions, scores responses and highlights strengths and concerns. It examines technical abilities, reusable code habits and architectural thinking, assesses English fluency and flags soft-skill issues such as poor communication or lack of respect. Our recruiters review these insights, refine the evaluation and recommend the best candidates."
    },
    {
      question: "Which roles and technologies do you cover?",
      answer: "Our network includes mid- to senior-level engineers across multiple stacks—full-stack, front-end, back-end, DevOps, QA, data and mobile. The platform supports custom requirements; you can specify languages and frameworks (for example Python, React, Django, AWS/GCP, SQL), and the AI adjusts its questions and scoring accordingly."
    },
    {
      question: "How is TalentLean different from other remote-talent services?",
      answer: `Several factors set us apart:
• Transparent, flat-fee pricing: You pay the developer's salary plus a fixed monthly service fee with no hidden mark-ups or percentages.
• Compliance and legal shielding: We hire and contract talent under their local legislation, handle payroll, benefits and taxes, and serve as a legal shield for clients. This structure protects you from misclassification risk and ensures adherence to local labour laws.
• AI-powered vetting + human expertise: Our proprietary AI platform evaluates skills and soft traits while human recruiters validate results.
• Dedicated account manager: Every client gets a single point of contact for onboarding, ongoing support and issue resolution.
• Risk-free engagement: A 30-day money-back guarantee lets you try a developer without upfront risk.`
    },
    {
      question: "Do developers pay any fees?",
      answer: "No. TalentLean does not charge developers—candidates keep 100% of their salary. Our revenue comes from the flat fee paid by the hiring company."
    },
    {
      question: "What does pricing look like?",
      answer: "You set the developer's salary, and we add a fixed monthly service fee. This fee covers sourcing, AI vetting, HR support, payroll and legal compliance. There are no percentage mark-ups, placement fees or hidden charges."
    },
    {
      question: "How do you engage and pay talent?",
      answer: "We contract developers according to the employment regulations of their home country. They work full-time on your projects under agreements that meet local legal requirements, and we manage payroll, statutory benefits and tax obligations on your behalf. This arrangement provides stability for developers and shields your company from misclassification or labour-law risk."
    },
    {
      question: "How do you ensure legal compliance and handle payroll?",
      answer: "Our team manages contracts, monthly payroll, benefits administration and tax filings in each Latin-American jurisdiction. By hiring talent under local legislation, we provide a legal shield for clients, ensuring that all employment relationships comply with regional labour laws and regulations."
    },
    {
      question: "What happens if a developer isn't a good fit?",
      answer: "Our vetting process reduces the likelihood of mismatches, but if a hire isn't working out we will replace the developer at no extra cost. We also offer a 30-day money-back guarantee on the service fee."
    },
    {
      question: "How does English proficiency factor into your assessments?",
      answer: "Communication is critical for distributed teams. During the interview, the AI scores each candidate's English fluency and ability to articulate ideas clearly. Candidates who cannot express technical concepts or collaborate effectively are flagged for review."
    },
    {
      question: "Do I have to sign a long-term contract?",
      answer: "No. You can cancel at any time. Our month-to-month model and money-back guarantee make it easy to try the service without a long commitment."
    }
  ];

  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <CanonicalURL path="/FAQ" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to={createPageUrl("Home")} className="text-2xl font-bold text-[#2B2E32]" aria-label="TalentLean Home">
              Talent<span className="text-[#006F64]">Lean</span>
            </Link>
            <Link to={createPageUrl("Home")}>
              <Button variant="outline" className="rounded-full focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content">
        {/* Header */}
        <section className="pt-20 pb-12 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-teal-50/30">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#2B2E32] mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-[#4E5A64] max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about TalentLean's LatAm staff augmentation services.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h2 className="text-lg font-semibold text-[#2B2E32] pr-4">{faq.question}</h2>
                    <ChevronDown 
                      className={`w-5 h-5 text-[#006F64] flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} 
                      aria-hidden="true" 
                    />
                  </button>
                  <div 
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[1000px]' : 'max-h-0'}`}
                    aria-hidden={openIndex !== index}
                  >
                    <div className="px-6 pb-6 text-[#4E5A64] leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-[#006F64] to-[#014D44] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still have questions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our team is ready to help you build your LatAm tech team.
            </p>
            <Button
              onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tn_Tmo9Pacv8oMb1kWQcBb8V3MJ3Qo3gGsR9m0T4RpO5LMrM3dNW7iWYVweYJBeoof7J_rtC-', '_blank')}
              size="lg"
              className="bg-white text-[#006F64] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-2 focus:outline-white focus:outline-offset-2"
              aria-label="Meet an expert"
            >
              Meet an Expert
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-8" role="contentinfo" aria-label="Site footer">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-white mb-2">
                Talent<span className="text-[#4FD1C5]">Lean</span>
              </div>
              <p className="text-sm">The Human Intelligence Behind LatAm Hiring.</p>
            </div>
            <div className="flex gap-8 text-sm">
              <Link to={createPageUrl("Home")} className="hover:text-white transition-colors">Home</Link>
              <Link to={createPageUrl("Pricing")} className="hover:text-white transition-colors">Pricing</Link>
              <Link to={createPageUrl("FAQ")} className="hover:text-white transition-colors">FAQ</Link>
              <a href="/insights" className="hover:text-white transition-colors">
                Insights
              </a>
              <button onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tn_Tmo9Pacv8oMb1kWQcBb8V3MJ3Qo3gGsR9m0T4RpO5LMrM3dNW7iWYVweYJBeoof7J_rtC-', '_blank')} className="hover:text-white transition-colors">Meet an Expert</button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© 2025 TalentLean. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}