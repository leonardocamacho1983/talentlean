import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Users, 
  Building2, 
  RefreshCw, 
  Globe2, 
  Shield, 
  MessageCircle,
  Search,
  ArrowRight,
  Cpu,
  CheckCircle2
} from "lucide-react";

export default function Home() {
  const [hoveredStep, setHoveredStep] = React.useState(null);
  const [hoveredOption, setHoveredOption] = React.useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900">
              Project <span className="text-teal-600">X</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('options')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Options
              </button>
              <Button 
                onClick={() => scrollToSection('cta')}
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-teal-50/30 pt-20 pb-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Build your global tech team—
            <span className="text-teal-600"> intelligently</span>, transparently, and compliantly.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI‑optimized vetting meets human orchestration. Hire exceptional developers as full employees—anywhere in the world—without legal risk or operational drag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button 
              onClick={() => scrollToSection('cta')}
              size="lg" 
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Hire Talent
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('cta')}
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              Migrate My Team
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            From recruitment to payroll, Project X makes global hiring seamless—and human.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
                <Globe2 className="w-8 h-8 text-teal-600" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                The world has talent. You just need the system to hire it right.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Global hiring is broken. Companies struggle with inconsistent vetting, opaque compliance requirements, and hidden costs that make international expansion feel like a gamble rather than a strategy.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Project X solves this by combining AI precision with human judgment and legal certainty. We don't just find talent—we build the infrastructure for you to employ them properly, compliantly, and transparently, anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 lg:px-8 bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                number: "1",
                title: "AI Vetting Engine",
                description: "Advanced algorithms screen and rank candidates based on technical skills, cultural fit, and project requirements."
              },
              {
                icon: Users,
                number: "2",
                title: "Human Orchestration",
                description: "Expert recruiters validate AI recommendations and manage the entire hiring process with personal touch."
              },
              {
                icon: Building2,
                number: "3",
                title: "Direct Employment",
                description: "We handle all legal entities, payroll, benefits, and compliance so your hires are full employees."
              },
              {
                icon: RefreshCw,
                number: "4",
                title: "Flexible Ownership",
                description: "Start with our infrastructure, migrate to your own entity when ready—we support both paths seamlessly."
              }
            ].map((step, index) => (
              <Card 
                key={index}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`border-2 transition-all duration-300 cursor-pointer ${
                  hoveredStep === index 
                    ? 'border-teal-600 shadow-lg -translate-y-2' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600 font-bold text-xl mb-6 mx-auto">
                    {step.number}
                  </div>
                  <step.icon className="w-10 h-10 text-gray-900 mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
            Transparent, predictable, and fair—always.
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            No hidden fees. No surprises. Just honest pricing that scales with your team.
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Developer Salary
                </div>
                <div className="text-3xl font-bold text-gray-900">USD Amount</div>
                <p className="text-sm text-gray-600 mt-2">Market-rate compensation</p>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  + Operational Fee
                </div>
                <div className="text-3xl font-bold text-teal-600">20%</div>
                <p className="text-sm text-gray-600 mt-2">AI infrastructure & HR orchestration</p>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  + Monthly Retainer
                </div>
                <div className="text-3xl font-bold text-gray-900">USD 1,000</div>
                <p className="text-sm text-gray-600 mt-2">Compliance, payroll & benefits</p>
              </div>
            </div>
            
            <div className="border-t border-gray-300 pt-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Operational Fee</div>
                    <div className="text-sm text-gray-600">Covers AI vetting platform, recruitment management, and ongoing HR support.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Compliance Retainer</div>
                    <div className="text-sm text-gray-600">Includes all taxes, statutory benefits, payroll processing, and legal infrastructure.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Advance Salary</div>
                    <div className="text-sm text-gray-600">Refundable insurance deposit equal to one month's salary, returned when engagement ends.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section id="options" className="py-24 px-6 lg:px-8 bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Two paths. One ecosystem.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card 
              onMouseEnter={() => setHoveredOption('hire')}
              onMouseLeave={() => setHoveredOption(null)}
              className={`border-2 transition-all duration-300 ${
                hoveredOption === 'hire' 
                  ? 'border-teal-600 shadow-xl -translate-y-2' 
                  : 'border-gray-200'
              }`}
            >
              <CardContent className="p-10">
                <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <Search className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Hire through Project X
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Let us find, vet, and employ top-tier developers for you. Our AI recruitment engine identifies the best candidates while we handle all compliance, payroll, and benefits administration.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">AI-powered candidate sourcing and vetting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Full employment as direct hires</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Complete payroll and compliance management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ongoing HR support and administration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card 
              onMouseEnter={() => setHoveredOption('migrate')}
              onMouseLeave={() => setHoveredOption(null)}
              className={`border-2 transition-all duration-300 ${
                hoveredOption === 'migrate' 
                  ? 'border-teal-600 shadow-xl -translate-y-2' 
                  : 'border-gray-200'
              }`}
            >
              <CardContent className="p-10">
                <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <RefreshCw className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Migrate your existing team
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Already have remote developers? Bring Your Own Talent (BYOT) to Project X and let us absorb all the operational complexity—HR, payroll, compliance, and benefits administration.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Seamless transition of existing contractors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Full legal entity management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Unified payroll and benefits platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Path to your own entity when ready</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            We merge technology with trust.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-6 mx-auto">
                <Cpu className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Precision</h3>
              <p className="text-gray-600 leading-relaxed">
                Our proprietary AI vetting engine analyzes thousands of data points to match you with candidates who have the exact skills and mindset you need.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                We navigate complex international employment law, tax regulations, and benefits requirements—so you never have to worry about legal risks.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-6 mx-auto">
                <MessageCircle className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Human Connection</h3>
              <p className="text-gray-600 leading-relaxed">
                Behind every algorithm is a team of expert recruiters and HR professionals who ensure every hire is the right cultural and technical fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-32 px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to scale your global tech team?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
            Join forward-thinking companies that trust Project X to build their global workforce—intelligently, transparently, and compliantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-teal-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Hire Talent Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              Migrate My Team
            </Button>
            <button className="text-white hover:text-gray-100 underline underline-offset-4 text-lg font-medium transition-colors">
              Talk to an Expert →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-white mb-2">
                Project <span className="text-teal-500">X</span>
              </div>
              <p className="text-sm">The Human Intelligence Behind Global Hiring.</p>
            </div>
            <div className="flex gap-8 text-sm">
              <button className="hover:text-white transition-colors">About Us</button>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">
                Pricing
              </button>
              <button className="hover:text-white transition-colors">Careers</button>
              <button className="hover:text-white transition-colors">Contact</button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© 2025 Project X. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}