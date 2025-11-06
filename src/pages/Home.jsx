
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
  CheckCircle2,
  Briefcase,
  UsersRound,
  Calculator,
  Sparkles,
  FileText,
  TrendingUp,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { base44 } from "@/api/base44Client";

export default function Home() {
  const [hoveredStep, setHoveredStep] = React.useState(null);
  const [hoveredCard, setHoveredCard] = React.useState(null);
  const [hoveredCaseStudy, setHoveredCaseStudy] = React.useState(null);
  const [enhancedContent, setEnhancedContent] = React.useState(null);
  const [isLoadingContent, setIsLoadingContent] = React.useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Generate AI-enhanced marketing content
  const generateEnhancedContent = async () => {
    setIsLoadingContent(true);
    try {
      const response = await base44.integrations.Core.InvokeLLM({
        prompt: `As a B2B SaaS marketing expert specializing in HR tech and global hiring, create compelling marketing content for Project X - a global tech talent platform. Generate:

1. An expanded "Why We Exist" section (2-3 paragraphs) that:
   - Explains the pain points of global hiring (compliance, vetting, hidden costs)
   - Positions Project X as the intelligent solution
   - Uses emotional, trust-building language
   - Focuses on transformation and peace of mind

2. Three "What Makes Us Different" benefit descriptions (each 2-3 sentences):
   - AI Precision: How our AI vetting is smarter and more accurate
   - Compliance First: Why our legal infrastructure is bulletproof
   - Human Partnership: The value of dedicated support

3. Three compelling case study summaries (each with company type, challenge, solution, results):
   - A SaaS startup scaling from 5 to 50 developers
   - An enterprise migrating contractors to compliant employees
   - A fintech company hiring in regulated markets

4. Five blog post ideas about global tech hiring trends (title + 2-sentence description each)

Format the response as JSON with this structure:
{
  "whyWeExist": {
    "paragraph1": "...",
    "paragraph2": "..."
  },
  "differentiators": {
    "aiPrecision": "...",
    "complianceFirst": "...",
    "humanPartnership": "..."
  },
  "caseStudies": [
    {
      "company": "...",
      "industry": "...",
      "challenge": "...",
      "solution": "...",
      "results": "..."
    }
  ],
  "blogIdeas": [
    {
      "title": "...",
      "description": "..."
    }
  ]
}`,
        response_json_schema: {
          type: "object",
          properties: {
            whyWeExist: {
              type: "object",
              properties: {
                paragraph1: { type: "string" },
                paragraph2: { type: "string" }
              }
            },
            differentiators: {
              type: "object",
              properties: {
                aiPrecision: { type: "string" },
                complianceFirst: { type: "string" },
                humanPartnership: { type: "string" }
              }
            },
            caseStudies: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  company: { type: "string" },
                  industry: { type: "string" },
                  challenge: { type: "string" },
                  solution: { type: "string" },
                  results: { type: "string" }
                },
                required: ["company", "industry", "challenge", "solution", "results"] // Ensure all properties are present
              }
            },
            blogIdeas: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  description: { type: "string" }
                },
                required: ["title", "description"] // Ensure all properties are present
              }
            }
          },
          required: ["whyWeExist", "differentiators", "caseStudies", "blogIdeas"] // Ensure all top-level properties are present
        }
      });

      setEnhancedContent(response);
    } catch (error) {
      console.error("Error generating content:", error);
      // Optionally reset enhancedContent or set a flag to show an error message on UI
    } finally {
      setIsLoadingContent(false);
    }
  };

  // Load enhanced content on mount
  React.useEffect(() => {
    generateEnhancedContent();
  }, []);

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
                onClick={() => scrollToSection('hero')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('staffing')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Staffing Services
              </button>
              <button
                onClick={() => scrollToSection('augmentation')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Staff Augmentation
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
            Build and scale your tech team
            <span className="text-teal-600"> intelligently</span>, transparently, and globally.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Staffing and Staff Augmentation powered by AI, human expertise, and global compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button
              onClick={() => scrollToSection('staffing')}
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Hire Talent
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection('augmentation')}
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              Scale My Team
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            From recruitment to payroll, Project X makes global hiring seamless—and human.
          </p>
        </div>
      </section>

      {/* Why We Exist - Enhanced with AI */}
      <section id="why-projectx" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
                <Globe2 className="w-8 h-8 text-teal-600" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  The world has talent. You just need the system to hire it right.
                </h2>
                {isLoadingContent && (
                  <Sparkles className="w-6 h-6 text-teal-600 animate-pulse" />
                )}
              </div>
              
              {isLoadingContent ? (
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6"></div>
                </div>
              ) : enhancedContent?.whyWeExist ? (
                <>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {enhancedContent.whyWeExist.paragraph1}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {enhancedContent.whyWeExist.paragraph2}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Global hiring is complex—slow vetting cycles, compliance uncertainty, and hidden costs make scaling teams painful.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Project X eliminates that friction by combining AI-driven vetting, human orchestration, and compliant employment infrastructure.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Staffing Services */}
      <section id="staffing" className="py-24 px-6 lg:px-8 bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100">
                <Search className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Staffing Services
              </h2>
              <p className="text-xl text-teal-600 font-semibold mb-6">
                Precision sourcing for contract or permanent hires.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Project X's Staffing Services deliver top tech candidates fast. Our proprietary AI ranks and pre-vets talent, while our experts handpick matches aligned with your culture and goals.
              </p>
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
                        AI-optimized sourcing and ranking
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">
                        Human-led final curation
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

      {/* Staff Augmentation */}
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
                        Fully compliant EOR model
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
                        Transparent billing: Salary + 20% + USD 1,000/month
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
                Staff Augmentation
              </h2>
              <p className="text-xl text-teal-600 font-semibold mb-6">
                Build long-term, compliant, remote teams with confidence.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Hire full-time remote developers under Project X's EOR structure. We manage payroll, benefits, taxes, and legal compliance in every jurisdiction — so you can focus on scaling your business.
              </p>
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
                description: "Machine learning ranks talent based on skill, performance, and cultural fit."
              },
              {
                icon: Users,
                number: "2",
                title: "Human Orchestration",
                description: "Our experts refine the match through interviews and alignment checks."
              },
              {
                icon: Building2,
                number: "3",
                title: "Employment & Compliance",
                description: "We handle contracts, payroll, benefits, and taxes globally."
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
          <p className="text-center text-lg text-gray-600 mb-12">
            Get an instant estimate with our interactive pricing calculator
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
                  Staffing Services
                </h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-teal-600 mb-2">
                    1× first-month salary
                  </div>
                  <p className="text-sm text-gray-500">
                    One-time recruitment fee
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  One-time recruitment fee for AI + human curated placements. Fast, precise, and aligned with your needs.
                </p>
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
                <div className="mb-6">
                  <div className="text-4xl font-bold text-teal-600 mb-2">
                    Salary + 20% + $1,000
                  </div>
                  <p className="text-sm text-gray-500">
                    Per month per developer
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Ongoing management covering payroll, compliance, and HR infrastructure. Full transparency, no hidden costs.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to={createPageUrl("Pricing")}>
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                <Calculator className="w-5 h-5 mr-2" />
                Try Our Interactive Pricing Calculator
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Get instant cost estimates customized to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies - AI Generated */}
      {enhancedContent?.caseStudies && enhancedContent.caseStudies.length > 0 && (
        <section className="py-24 px-6 lg:px-8 bg-[#FAFAF9]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mb-6">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how companies like yours are transforming global hiring with Project X
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {enhancedContent.caseStudies.map((caseStudy, index) => (
                <Card
                  key={index}
                  onMouseEnter={() => setHoveredCaseStudy(index)}
                  onMouseLeave={() => setHoveredCaseStudy(null)}
                  className={`border-2 transition-all duration-300 ${
                    hoveredCaseStudy === index
                      ? 'border-teal-600 shadow-xl -translate-y-2'
                      : 'border-gray-200'
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">
                        {caseStudy.industry}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {caseStudy.company}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">Challenge</div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {caseStudy.challenge}
                        </p>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">Solution</div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {caseStudy.solution}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <div className="text-sm font-semibold text-teal-600 mb-1">Results</div>
                        <p className="text-gray-900 font-semibold text-sm">
                          {caseStudy.results}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Different - Enhanced with AI */}
      <section id="why-different" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why companies choose Project X
            </h2>
            {isLoadingContent && (
              <Sparkles className="w-6 h-6 text-teal-600 animate-pulse mx-auto" />
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-6 mx-auto">
                <Cpu className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Precision</h3>
              <p className="text-gray-600 leading-relaxed">
                {isLoadingContent ? (
                  <>
                    <span className="block h-3 bg-gray-200 rounded animate-pulse mb-2"></span>
                    <span className="block h-3 bg-gray-200 rounded animate-pulse w-5/6 mx-auto"></span>
                  </>
                ) : enhancedContent?.differentiators?.aiPrecision ? (
                  enhancedContent.differentiators.aiPrecision
                ) : (
                  "Custom-trained models that understand your technical and cultural needs."
                )}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance First</h3>
              <p className="text-gray-600 leading-relaxed">
                {isLoadingContent ? (
                  <>
                    <span className="block h-3 bg-gray-200 rounded animate-pulse mb-2"></span>
                    <span className="block h-3 bg-gray-200 rounded animate-pulse w-5/6 mx-auto"></span>
                  </>
                ) : enhancedContent?.differentiators?.complianceFirst ? (
                  enhancedContent.differentiators.complianceFirst
                ) : (
                  "Global payroll, contracts, and legal protection built-in by default."
                )}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-6 mx-auto">
                <MessageCircle className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Human Partnership</h3>
              <p className="text-gray-600 leading-relaxed">
                {isLoadingContent ? (
                  <>
                    <span className="block h-3 bg-gray-200 rounded animate-pulse mb-2"></span>
                    <span className="block h-3 bg-gray-200 rounded animate-pulse w-5/6 mx-auto"></span>
                  </>
                ) : enhancedContent?.differentiators?.humanPartnership ? (
                  enhancedContent.differentiators.humanPartnership
                ) : (
                  "Dedicated account managers ensuring long-term success for both clients and developers."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Ideas - AI Generated */}
      {enhancedContent?.blogIdeas && enhancedContent.blogIdeas.length > 0 && (
        <section className="py-24 px-6 lg:px-8 bg-[#FAFAF9]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mb-6">
                <FileText className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Global Hiring Insights
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Stay ahead of the curve with our latest thoughts on tech talent and global hiring
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enhancedContent.blogIdeas.slice(0, 6).map((blog, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-200 hover:border-teal-600 transition-all duration-300 hover:shadow-lg cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <TrendingUp className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">
                        {blog.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {blog.description}
                    </p>
                    <button className="text-teal-600 font-semibold text-sm mt-4 hover:text-teal-700 transition-colors flex items-center gap-1">
                      Read more <ArrowRight className="w-4 h-4" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="rounded-full px-8">
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section id="cta" className="py-32 px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's build your next great team.
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
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              Talk to an Expert
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
              <button onClick={() => scrollToSection('cta')} className="hover:text-white transition-colors">
                Contact
              </button>
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
