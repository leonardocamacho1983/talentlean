import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  CheckCircle2,
  Briefcase,
  UsersRound,
  Calculator,
  BadgeCheck,
  Clock,
  MapPin,
  UserCheck,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Home() {
  const [hoveredStep, setHoveredStep] = React.useState(null);
  const [hoveredCard, setHoveredCard] = React.useState(null);

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
              Talent<span className="text-teal-600">Lean</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('staffing')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                LatAm Staffing
              </button>
              <button
                onClick={() => scrollToSection('augmentation')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Staff Augmentation
              </button>
              <button
                onClick={() => scrollToSection('byot')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Migrate Your Team
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('why-different')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                About
              </button>
              <Button
                onClick={() => scrollToSection('cta')}
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-teal-50/30 pt-20 pb-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Build and Scale your LatAm tech team with <span className="text-teal-600">intelligence</span>, price transparency and compliance.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            LatAm Staffing and Staff Augmentation powered by AI, human expertise, and full legal compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button
              onClick={() => scrollToSection('staffing')}
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Hire LatAm Talent
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection('byot')}
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              Migrate Your Team
            </Button>
          </div>
          
          {/* Money-Back Guarantee Badge */}
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-6 py-3 mb-4">
            <BadgeCheck className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-green-900">30-Day Money-Back Guarantee</span>
          </div>
          
          <p className="text-sm text-gray-500">
            From recruitment to payroll, TalentLean makes LatAm hiring seamless—and human.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section id="why-projectx" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-teal-600" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                LatAm has world-class talent. You just need the right system to hire it.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Hiring from Latin America is complex. Slow vetting cycles, compliance uncertainty, and hidden costs make scaling teams painful.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                TalentLean eliminates that friction by combining AI-driven vetting, human orchestration, and compliant EOR infrastructure, with perfect time-zone alignment and regional expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LatAm Staffing Services */}
      <section id="staffing" className="py-24 px-6 lg:px-8 bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100">
                <Search className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                LatAm Staffing Services
              </h2>
              <p className="text-xl text-teal-600 font-semibold mb-6">
                Precision sourcing of top LatAm talent for contract or permanent hires.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                TalentLean's LatAm Staffing Services deliver top tech candidates from Latin America—fast. Our proprietary AI ranks and pre-vets regional talent, while our experts handpick matches aligned with your culture, goals, and time-zone requirements.
              </p>
              
              {/* Money-Back Guarantee */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                <BadgeCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">30-Day Money-Back Guarantee</div>
                  <div className="text-sm text-gray-600">
                    If the match doesn't work out within the first month, we'll refund your fee—no questions asked.
                  </div>
                </div>
              </div>
              
              <Button
                onClick={() => scrollToSection('cta')}
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-5 shadow-lg hover:shadow-xl transition-all"
              >
                Request Candidates
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div>
              <Card className="border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">
                        AI-optimized sourcing and ranking of LatAm talent
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">
                        Human-led final curation with regional expertise
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">
                        Perfect time-zone alignment with US and Canada
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">
                        Placement fee: 1× first-month salary
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">
                        Speed: candidates delivered within days
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Augmentation for LatAm */}
      <section id="augmentation" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Card className="border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">
                        Fully compliant EOR model across all LatAm countries
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">
                        Developers as direct employees, not contractors
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">
                        Complete transparency: Salary + USD 1,500/month
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">
                        Time-zone advantage: overlapping work hours
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">
                        Convert to direct hire after 6 months, no fee
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Staff Augmentation for LatAm
              </h2>
              <p className="text-xl text-teal-600 font-semibold mb-6">
                Build long-term, compliant, remote LatAm teams with confidence.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Hire full-time remote developers from Latin America under TalentLean's EOR structure. We manage payroll, benefits, taxes, and legal compliance in every LatAm jurisdiction—so you can focus on scaling your business with perfectly aligned time zones.
              </p>
              
              {/* Launch Promotion Badge */}
              <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 mb-6 flex items-start gap-3">
                <Zap className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-red-900 mb-1">🎉 Launch Promotion: Save $500/month</div>
                  <div className="text-sm text-gray-700">
                    <span className="line-through text-gray-500">$2,000/month</span> → <span className="font-bold text-red-700">$1,500/month</span> per developer. Limited time offer!
                  </div>
                </div>
              </div>
              
              <Button
                onClick={() => scrollToSection('cta')}
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-5 shadow-lg hover:shadow-xl transition-all"
              >
                Scale My Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* BYOT - Bring Your Own Talent */}
      <section id="byot" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-6">
              <Globe2 className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Bring Your Own Talent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Global migration service for your existing team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="border-2 border-white shadow-xl bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Migrate Your Existing Developers
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Have a brilliant developer working for an outsourcing company that you can't bring closer? We build the bridge with our Staff Augmentation infrastructure and offer reduced pricing. We favor people's freedom and help you hire the experts your team deserves.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Legal Transfer of Employment</h4>
                      <p className="text-sm text-gray-600">We handle all legal documentation and compliance for smooth transition worldwide.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Payroll & Benefits Setup</h4>
                      <p className="text-sm text-gray-600">Complete payroll infrastructure with local benefits and compliance management.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Reduced Migration Pricing</h4>
                      <p className="text-sm text-gray-600">Special rates for BYOT migrations—lower than net-new hires.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2 border-white shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <UserCheck className="w-8 h-8 text-teal-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Global Coverage</h4>
                      <p className="text-gray-600">
                        While our sourcing specializes in LatAm, our BYOT service works worldwide. Migrate developers from any country onto our compliant EOR platform.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-white shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-teal-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Full Compliance Protection</h4>
                      <p className="text-gray-600">
                        We assume all employment liability and ensure 100% legal compliance in the developer's home country.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-white shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <BadgeCheck className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Special BYOT Guarantee</h4>
                      <p className="text-gray-600">
                        Seamless transition or full refund within 30 days—no questions asked.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button 
                onClick={() => scrollToSection('cta')}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Migrate Your Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 lg:px-8 bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            The future of hiring is intelligent orchestration.
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            Four seamless steps from candidate discovery to compliant employment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                number: "1",
                title: "AI Vetting Engine",
                description: "Machine learning ranks LatAm talent based on skill, performance, and cultural fit."
              },
              {
                icon: Users,
                number: "2",
                title: "Human Orchestration",
                description: "Our regional experts refine the match through interviews and alignment checks."
              },
              {
                icon: Building2,
                number: "3",
                title: "Employment & Compliance",
                description: "We handle contracts, payroll, benefits, and taxes across all LatAm countries."
              },
              {
                icon: RefreshCw,
                number: "4",
                title: "Flexible Ownership",
                description: "Hire directly after 6 months or migrate your existing team to us."
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
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            No hidden fees. No surprises. You define the salary, we handle everything else.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card
              onMouseEnter={() => setHoveredCard('staffing')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`border-2 transition-all duration-300 ${
                hoveredCard === 'staffing' ? 'border-teal-600 shadow-xl -translate-y-2' : 'border-gray-200'
              }`}
            >
              <CardContent className="p-10">
                <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <Briefcase className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  LatAm Staffing Services
                </h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-teal-600 mb-2">
                    1× first-month salary
                  </div>
                  <p className="text-sm text-gray-500">
                    One-time recruitment fee
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  One-time recruitment fee for AI + human curated placements. Fast, precise, and aligned with your needs.
                </p>
                <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                  <BadgeCheck className="w-4 h-4" />
                  <span className="font-medium">30-day money-back guarantee</span>
                </div>
              </CardContent>
            </Card>

            <Card
              onMouseEnter={() => setHoveredCard('augmentation')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`border-2 transition-all duration-300 ${
                hoveredCard === 'augmentation' ? 'border-teal-600 shadow-xl -translate-y-2' : 'border-gray-200'
              }`}
            >
              <CardContent className="p-10">
                <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <UsersRound className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Staff Augmentation
                </h3>
                <div className="mb-4">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl text-gray-400 line-through">$2,000</span>
                    <span className="text-4xl font-bold text-red-600">$1,500</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-3 py-1 mb-2">
                    <Zap className="w-4 h-4 text-red-600" />
                    <span className="text-xs font-bold text-red-700">LAUNCH PROMO</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Per month per developer + Salary (you define)
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Simple, transparent pricing. You define the developer's salary—we add our flat monthly fee. No percentages, no hidden costs, complete clarity.
                </p>
                <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                  <BadgeCheck className="w-4 h-4" />
                  <span className="font-medium">30-day money-back guarantee</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA to Calculator */}
          <div className="text-center">
            <Link to={createPageUrl("Pricing")}>
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Your Costs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Interactive calculator with complete pricing transparency
            </p>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section id="why-different" className="py-24 px-6 lg:px-8 bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Why companies choose TalentLean
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-6 mx-auto">
                <Cpu className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Precision</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom-trained models that understand your technical needs and LatAm talent landscape.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance First</h3>
              <p className="text-gray-600 leading-relaxed">
                LatAm payroll, contracts, and legal protection built-in by default across all countries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-6 mx-auto">
                <UserCheck className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Account Manager</h3>
              <p className="text-gray-600 leading-relaxed">
                Your direct point of contact for onboarding, compliance questions, and ongoing support. Typical response time: one business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-32 px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's build your next great LatAm team.
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
            Hire smarter, scale faster, and manage globally with clarity and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Hire Developers
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg transition-all duration-300"
            >
              Talk to Your Account Manager
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-white mb-2">
                Talent<span className="text-teal-500">Lean</span>
              </div>
              <p className="text-sm">The Human Intelligence Behind LatAm Hiring.</p>
            </div>
            <div className="flex gap-8 text-sm">
              <button className="hover:text-white transition-colors">About Us</button>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('byot')} className="hover:text-white transition-colors">
                Migrate Team
              </button>
              <button onClick={() => scrollToSection('cta')} className="hover:text-white transition-colors">
                Contact
              </button>
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
