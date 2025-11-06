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
  Sparkles
} from "lucide-react";

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold" style={{ color: '#0E1F3D' }}>
              Project <span style={{ color: '#00A8E8' }}>X</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: '#6F6F6F' }}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('staffing')}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: '#6F6F6F' }}
              >
                Staffing Services
              </button>
              <button 
                onClick={() => scrollToSection('augmentation')}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: '#6F6F6F' }}
              >
                Staff Augmentation
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: '#6F6F6F' }}
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('why-different')}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: '#6F6F6F' }}
              >
                About
              </button>
              <Button 
                onClick={() => scrollToSection('cta')}
                className="rounded-lg px-7 py-5 shadow-sm transition-all hover:shadow-md"
                style={{ backgroundColor: '#00A8E8', color: '#FFFFFF' }}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden pt-24 pb-32 px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full" style={{ backgroundColor: '#00A8E8', opacity: 0.1 }}>
            <Globe2 className="w-8 h-8" style={{ color: '#00A8E8' }} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8" style={{ color: '#0E1F3D', fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>
            Build and scale your tech team—
            <span style={{ color: '#00A8E8' }}> intelligently</span>, transparently, and globally.
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto" style={{ color: '#6F6F6F', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: '1.6' }}>
            Staffing and Staff Augmentation powered by AI, human expertise, and global compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('staffing')}
              size="lg" 
              className="rounded-lg px-7 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: '#00A8E8', color: '#FFFFFF' }}
            >
              Hire Talent
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('augmentation')}
              size="lg" 
              variant="outline" 
              className="rounded-lg px-7 py-6 text-lg font-semibold transition-all duration-300 border-2"
              style={{ borderColor: '#0E1F3D', color: '#0E1F3D' }}
            >
              Scale My Team
            </Button>
          </div>
        </div>
      </section>

      {/* Why Project X */}
      <section id="why-projectx" className="py-24 px-6 lg:px-8" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full" style={{ backgroundColor: '#00A8E8', opacity: 0.1 }}>
            <Globe2 className="w-8 h-8" style={{ color: '#00A8E8' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto" style={{ color: '#0E1F3D', fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>
            The world has talent. You just need the system to hire it right.
          </h2>
          <div className="max-w-3xl mx-auto space-y-6" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
            <p className="text-lg leading-relaxed" style={{ color: '#6F6F6F', lineHeight: '1.6' }}>
              Global hiring is complex—slow vetting cycles, compliance uncertainty, and hidden costs make scaling teams painful.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#6F6F6F', lineHeight: '1.6' }}>
              Project X eliminates that friction by combining AI-driven vetting, human orchestration, and compliant employment infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Staffing Services */}
      <section id="staffing" className="py-24 px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-lg" style={{ backgroundColor: '#00A8E8', opacity: 0.1 }}>
                <Search className="w-8 h-8" style={{ color: '#00A8E8' }} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0E1F3D', fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>
                Staffing Services
              </h2>
              <p className="text-xl mb-6" style={{ color: '#00A8E8', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>
                Precision sourcing for contract or permanent hires.
              </p>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: '#6F6F6F', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: '1.6' }}>
                Project X's Staffing Services deliver top tech candidates fast. Our proprietary AI ranks and pre-vets talent, while our experts handpick matches aligned with your culture and goals.
              </p>
              <Button 
                onClick={() => scrollToSection('cta')}
                className="rounded-lg px-7 py-5 shadow-md hover:shadow-lg transition-all"
                style={{ backgroundColor: '#00A8E8', color: '#FFFFFF' }}
              >
                Request Candidates
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div>
              <Card className="border-2 shadow-lg" style={{ borderColor: '#F9FAFB', borderRadius: '8px' }}>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#00A8E8' }} />
                      <span className="text-lg" style={{ color: '#2A2A2A', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                        AI-optimized sourcing and ranking
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#00A8E8' }} />
                      <span className="text-lg" style={{ color: '#2A2A2A', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                        Human-led final curation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#00A8E8' }} />
                      <span className="text-lg" style={{ color: '#2A2A2A', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                        Placement fee: 1× first-month salary
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#00A8E8' }} />
                      <span className="text-lg" style={{ color: '#2A2A2A', fontFamily: 'IBM Plex Sans, sans-serif' }}>
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
      <section id="augmentation" className="py-24 px-6 lg:px-8" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Card className="border-2 shadow-lg" style={{ borderColor: '#FFFFFF', borderRadius: '8px' }}>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#00A8E8' }} />
                      <span className="text-lg" style={{ color: '#2A2A2A', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                        Fully compliant EOR model
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#00A8E8' }} />
                      <span className="text-lg" style={{ color: '#2A2A2A', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                        Developers as direct employees, not contractors
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#00A8E8' }} />
                      <span className="text-lg" style={{ color: '#2A2A2A', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                        Transparent billing: Salary + 20% + USD 1,000/month
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#00A8E8' }} />
                      <span className="text-lg" style={{ color: '#2A2A2A', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                        Convert to direct hire after 6 months, no fee
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-lg" style={{ backgroundColor: '#00A8E8', opacity: 0.1 }}>
                <Users className="w-8 h-8" style={{ color: '#00A8E8' }} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0E1F3D', fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>
                Staff Augmentation
              </h2>
              <p className="text-xl mb-6" style={{ color: '#00A8E8', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>
                Build long-term, compliant, remote teams with confidence.
              </p>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: '#6F6F6F', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: '1.6' }}>
                Hire full-time remote developers under Project X's EOR structure. We manage payroll, benefits, taxes, and legal compliance in every jurisdiction — so you can focus on scaling your business.
              </p>
              <Button 
                onClick={() => scrollToSection('cta')}
                className="rounded-lg px-7 py-5 shadow-md hover:shadow-lg transition-all"
                style={{ backgroundColor: '#00A8E8', color: '#FFFFFF' }}
              >
                Scale My Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#0E1F3D', fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>
            The future of hiring is intelligent orchestration.
          </h2>
          <p className="text-center text-lg mb-16 max-w-3xl mx-auto" style={{ color: '#6F6F6F', fontFamily: 'IBM Plex Sans, sans-serif' }}>
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
                  hoveredStep === index ? 'shadow-xl -translate-y-2' : 'shadow-sm'
                }`}
                style={{ 
                  borderColor: hoveredStep === index ? '#00A8E8' : '#F9FAFB',
                  borderRadius: '8px'
                }}
              >
                <CardContent className="p-8 text-center">
                  <div 
                    className="flex items-center justify-center w-12 h-12 rounded-full font-bold text-xl mb-6 mx-auto"
                    style={{ backgroundColor: '#00A8E8', color: '#FFFFFF' }}
                  >
                    {step.number}
                  </div>
                  <step.icon className="w-10 h-10 mb-4 mx-auto" style={{ color: '#0E1F3D' }} />
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#0E1F3D', fontFamily: 'Inter, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#6F6F6F', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: '1.6' }}>
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 lg:px-8" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#0E1F3D', fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>
            Transparent, predictable, and fair—always.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card 
              onMouseEnter={() => setHoveredCard('staffing')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`border-2 transition-all duration-300 ${
                hoveredCard === 'staffing' ? 'shadow-xl -translate-y-2' : 'shadow-md'
              }`}
              style={{ 
                borderColor: hoveredCard === 'staffing' ? '#00A8E8' : '#FFFFFF',
                borderRadius: '8px',
                backgroundColor: '#FFFFFF'
              }}
            >
              <CardContent className="p-10">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#00A8E8', opacity: 0.1 }}>
                  <Briefcase className="w-7 h-7" style={{ color: '#00A8E8' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0E1F3D', fontFamily: 'Inter, sans-serif' }}>
                  Staffing Services
                </h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#00A8E8', fontFamily: 'Inter, sans-serif' }}>
                    1× first-month salary
                  </div>
                  <p className="text-sm" style={{ color: '#6F6F6F', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    One-time recruitment fee
                  </p>
                </div>
                <p className="leading-relaxed" style={{ color: '#6F6F6F', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: '1.6' }}>
                  One-time recruitment fee for AI + human curated placements. Fast, precise, and aligned with your needs.
                </p>
              </CardContent>
            </Card>

            <Card 
              onMouseEnter={() => setHoveredCard('augmentation')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`border-2 transition-all duration-300 ${
                hoveredCard === 'augmentation' ? 'shadow-xl -translate-y-2' : 'shadow-md'
              }`}
              style={{ 
                borderColor: hoveredCard === 'augmentation' ? '#00A8E8' : '#FFFFFF',
                borderRadius: '8px',
                backgroundColor: '#FFFFFF'
              }}
            >
              <CardContent className="p-10">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#00A8E8', opacity: 0.1 }}>
                  <UsersRound className="w-7 h-7" style={{ color: '#00A8E8' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0E1F3D', fontFamily: 'Inter, sans-serif' }}>
                  Staff Augmentation
                </h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#00A8E8', fontFamily: 'Inter, sans-serif' }}>
                    Salary + 20% + $1,000
                  </div>
                  <p className="text-sm" style={{ color: '#6F6F6F', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    Per month per developer
                  </p>
                </div>
                <p className="leading-relaxed" style={{ color: '#6F6F6F', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: '1.6' }}>
                  Ongoing management covering payroll, compliance, and HR infrastructure. Full transparency, no hidden costs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section id="why-different" className="py-24 px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#0E1F3D', fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>
            Why companies choose Project X
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#00A8E8', opacity: 0.1 }}>
                <Cpu className="w-10 h-10" style={{ color: '#00A8E8' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0E1F3D', fontFamily: 'Inter, sans-serif' }}>
                AI Precision
              </h3>
              <p className="leading-relaxed" style={{ color: '#6F6F6F', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: '1.6' }}>
                Custom-trained models that understand your technical and cultural needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#00A8E8', opacity: 0.1 }}>
                <Shield className="w-10 h-10" style={{ color: '#00A8E8' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0E1F3D', fontFamily: 'Inter, sans-serif' }}>
                Compliance First
              </h3>
              <p className="leading-relaxed" style={{ color: '#6F6F6F', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: '1.6' }}>
                Global payroll, contracts, and legal protection built-in by default.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#00A8E8', opacity: 0.1 }}>
                <MessageCircle className="w-10 h-10" style={{ color: '#00A8E8' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0E1F3D', fontFamily: 'Inter, sans-serif' }}>
                Human Partnership
              </h3>
              <p className="leading-relaxed" style={{ color: '#6F6F6F', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: '1.6' }}>
                Dedicated account managers ensuring long-term success for both clients and developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-32 px-6 lg:px-8" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#0E1F3D', fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>
            Let's build your next great team.
          </h2>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: '#6F6F6F', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: '1.6' }}>
            Hire smarter, scale faster, and manage globally with clarity and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="rounded-lg px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: '#00A8E8', color: '#FFFFFF' }}
            >
              Hire Developers
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-lg px-8 py-6 text-lg font-semibold transition-all duration-300 border-2"
              style={{ borderColor: '#0E1F3D', color: '#0E1F3D' }}
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8" style={{ backgroundColor: '#0E1F3D' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold mb-2" style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>
                Project <span style={{ color: '#00A8E8' }}>X</span>
              </div>
              <p className="text-sm" style={{ color: '#6F6F6F' }}>
                The Human Intelligence Behind Global Hiring.
              </p>
            </div>
            <div className="flex gap-8 text-sm">
              <button className="transition-colors" style={{ color: '#6F6F6F' }}>
                About Us
              </button>
              <button onClick={() => scrollToSection('pricing')} className="transition-colors" style={{ color: '#6F6F6F' }}>
                Pricing
              </button>
              <button className="transition-colors" style={{ color: '#6F6F6F' }}>
                Careers
              </button>
              <button onClick={() => scrollToSection('cta')} className="transition-colors" style={{ color: '#6F6F6F' }}>
                Contact
              </button>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm" style={{ borderColor: '#2A2A2A', color: '#6F6F6F' }}>
            <p>© 2025 Project X. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}