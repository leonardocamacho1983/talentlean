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
  Zap } from
"lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import MobileMenu from "../components/MobileMenu";
import Favicon from "../components/Favicon";
import PreloadHints from "../components/PreloadHints";

export default function Home() {
  const [hoveredStep, setHoveredStep] = React.useState(null);
  const [hoveredCard, setHoveredCard] = React.useState(null);

  // Google Tag Manager
  React.useEffect(() => {
    if (!document.querySelector('script[src*="googletagmanager.com/gtm.js?id=GTM-TND3K4R9"]')) {
      // GTM Head Script
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TND3K4R9');

      // GTM noscript iframe
      if (!document.querySelector('iframe[src*="googletagmanager.com/ns.html?id=GTM-TND3K4R9"]')) {
        const noscript = document.createElement('noscript');
        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-TND3K4R9';
        iframe.height = '0';
        iframe.width = '0';
        iframe.style.display = 'none';
        iframe.style.visibility = 'hidden';
        noscript.appendChild(iframe);
        document.body.insertBefore(noscript, document.body.firstChild);
      }
    }
  }, []);

  // SEO: Set document title and meta tags
  React.useEffect(() => {
    // Set page title
    document.title = "TalentLean - LatAm Staff Augmentation | Hire Remote Developers with Full Compliance";

    // Set or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Build and scale your LatAm tech team with TalentLean's AI-powered staff augmentation. Full compliance, transparent pricing ($1,500/month promo), and 30-day money-back guarantee. Hire remote developers from Latin America with perfect time-zone alignment.";

    // Set or update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = "LatAm developers, staff augmentation, Latin America hiring, remote developers, payroll services, hire developers, LatAm tech talent, offshore development, nearshore staffing";

    // Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = "TalentLean - LatAm Staff Augmentation & Remote Developer Hiring";

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = "Hire compliant, remote LatAm developers with transparent pricing. AI-powered vetting, full compliance support, and 30-day money-back guarantee.";

    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.content = "website";
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Structured Data for SEO (Schema.org)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
    {
      "@type": "Organization",
      "name": "TalentLean",
      "url": "https://talentlean.com",
      "logo": "https://talentlean.com/logo.png",
      "description": "AI-powered LatAm staff augmentation services for hiring remote developers with full compliance.",
      "foundingDate": "2025",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "areaServed": ["US", "CA", "GB", "AU"],
        "availableLanguage": ["English", "Spanish"]
      },
      "sameAs": []
    },
    {
      "@type": "WebPage",
      "name": "TalentLean - LatAm Staff Augmentation",
      "description": "Build and scale your LatAm tech team with intelligence, price transparency and compliance. AI-powered staffing with full compliance support.",
      "url": "https://talentlean.com",
      "mainEntity": {
        "@type": "Service",
        "name": "LatAm Staff Augmentation",
        "provider": {
          "@type": "Organization",
          "name": "TalentLean"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Latin America"
        },
        "description": "Hire full-time remote developers from Latin America with complete compliance, payroll management, and legal protection.",
        "offers": {
          "@type": "Offer",
          "price": "1500",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "1500",
            "priceCurrency": "USD",
            "unitText": "per developer per month"
          }
        }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
      {
        "@type": "Question",
        "name": "What is TalentLean's pricing model?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TalentLean charges a flat fee of $1,500/month per developer (launch promo price, regular $2,000) plus the developer's compensation that you define. Complete transparency with no hidden costs or percentages."
        }
      },
      {
        "@type": "Question",
        "name": "What countries does TalentLean operate in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TalentLean provides fully compliant employment services across all Latin American countries, with expertise in hiring developers from Mexico, Brazil, Argentina, Colombia, Chile, and other LatAm nations."
        }
      }]

    }]

  };

  return (
        <div className="min-h-screen bg-[#FAFAF9]">
          <Favicon />
          <PreloadHints />

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to={createPageUrl("Home")}
              className="text-2xl font-bold text-gray-900"
              aria-label="TalentLean Home">

              Talent<span className="text-teal-600">Lean</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">

                Home
              </button>

              <button
                onClick={() => scrollToSection('augmentation')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">

                Staff Augmentation
              </button>
              <button
                onClick={() => scrollToSection('byot')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">

                Migrate Your Team
              </button>
              <Link to={createPageUrl("Pricing")}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">

                Pricing
              </Link>
              <button
                onClick={() => scrollToSection('why-different')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">

                About
              </button>
              <Button
                onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tn_Tmo9Pacv8oMb1kWQcBb8V3MJ3Qo3gGsR9m0T4RpO5LMrM3dNW7iWYVweYJBeoof7J_rtC-', '_blank')}
                className="bg-[#006F64] hover:bg-[#014D44] text-white rounded-full px-6 focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
                aria-label="Meet an expert">

                Meet an Expert
              </Button>
              </div>
              <MobileMenu onNavigate={scrollToSection} />
              </div>
              </div>
              </nav>

      {/* Main Content */}
      <main id="main-content">
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-teal-50/30 pt-20 pb-32 px-6 lg:px-8" aria-label="Hero section">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Build and Scale Your <span className="text-teal-600">LatAm Tech Team</span> with Intelligence, Price Transparency and Compliance
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            LatAm Staffing and Staff Augmentation powered by AI, human expertise, and full legal compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button
              onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tn_Tmo9Pacv8oMb1kWQcBb8V3MJ3Qo3gGsR9m0T4RpO5LMrM3dNW7iWYVweYJBeoof7J_rtC-', '_blank')}
              size="lg"
              className="bg-[#006F64] hover:bg-[#014D44] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
              aria-label="Meet an expert to get started">

              Meet an Expert
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Button>
            <Button
              onClick={() => scrollToSection('byot')}
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 hover:border-[#006F64] hover:text-[#006F64] rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
              aria-label="Learn about migrating your existing team">

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
      <section id="why-projectx" className="py-24 px-6 lg:px-8 bg-white" aria-labelledby="why-exist-heading">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-teal-600" />
              </div>
            </div>
            <div className="flex-1">
              <h2 id="why-exist-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                LatAm Has World-Class Talent. You Just Need the Right System to Hire It.
              </h2>
              <p className="text-lg text-[#4E5A64] mb-6 leading-relaxed">
                Hiring from Latin America is complex. Slow vetting cycles, compliance uncertainty, and hidden costs make scaling teams painful.
              </p>
              <p className="text-lg text-[#4E5A64] leading-relaxed">TalentLean eliminates that friction by combining AI-driven vetting, human orchestration, and compliant   infrastructure, with perfect time-zone alignment and regional expertise.

              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Staff Augmentation for LatAm */}
      <section id="augmentation" className="py-24 px-6 lg:px-8 bg-white" aria-labelledby="augmentation-heading">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Card className="border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">
                        Fully compliant employment model across all LatAm countries
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
                        Complete transparency: Compensation + <span className="font-bold text-[#C62828]">USD 1,500/month</span> <span className="text-sm bg-[#FDEAEA] text-[#C62828] px-2 py-1 rounded-full font-semibold">Launch Promo</span>
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
                        No upfront payment, no hiring fees
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E6F4F1]" aria-hidden="true">
                <Users className="w-8 h-8 text-[#006F64]" />
              </div>
              <h2 id="augmentation-heading" className="text-4xl md:text-5xl font-bold text-[#2B2E32] mb-4">
                Staff Augmentation for LatAm
              </h2>
              <p className="text-xl text-[#006F64] font-semibold mb-6">
                Build long-term, compliant, remote LatAm teams with confidence.
              </p>
              <p className="text-lg text-[#4E5A64] mb-8 leading-relaxed">
                Hire full-time remote developers from Latin America under TalentLean's compliant employment structure. We manage payroll, benefits, taxes, and legal compliance in every LatAm jurisdiction—so you can focus on scaling your business with perfectly aligned time zones.
              </p>
              
              {/* Launch Promotion Badge */}
              <div className="bg-[#FDEAEA] border-2 border-[#C62828] rounded-lg p-4 mb-6 flex items-start gap-3">
                <Zap className="w-6 h-6 text-[#C62828] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="font-bold text-[#2B2E32] mb-1">🎉 Launch Promotion: Save $500/month</div>
                  <div className="text-sm text-[#2B2E32]">
                    <span className="line-through text-[#4E5A64]">$2,000/month</span> → <span className="font-bold text-[#C62828]">$1,500/month</span> per developer. Limited time offer!
                  </div>
                </div>
              </div>
              
              <Button
                onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tn_Tmo9Pacv8oMb1kWQcBb8V3MJ3Qo3gGsR9m0T4RpO5LMrM3dNW7iWYVweYJBeoof7J_rtC-', '_blank')}
                className="bg-[#006F64] hover:bg-[#014D44] text-white rounded-full px-8 py-5 shadow-lg hover:shadow-xl transition-all focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
                aria-label="Meet an expert about staff augmentation">

                Meet an Expert
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* BYOT - Bring Your Own Talent */}
      <section id="byot" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-blue-50" aria-labelledby="byot-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-6" aria-hidden="true">
              <Globe2 className="w-8 h-8 text-[#006F64]" />
            </div>
            <h2 id="byot-heading" className="text-4xl md:text-5xl font-bold text-[#2B2E32] mb-4">
              Bring Your Own Talent
            </h2>
            <p className="text-lg text-[#4E5A64] max-w-2xl mx-auto leading-relaxed">We remove global hiring friction and safeguard every employment detail.

            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="border-2 border-white shadow-xl bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#2B2E32] mb-6">
                  Migrate & Consolidate Your Direct Hires
                </h3>
                <p className="text-lg text-[#4E5A64] mb-6 leading-relaxed">Consolidate your already-hired developers under TalentLean's compliant employment infrastructure and operate with zero overhead.

                </p>
                <p className="text-lg text-[#2B2E32] font-semibold mb-6">
                  You keep the people you trust. We take over everything else.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E6F4F1] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#015E53] font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Legal Transfer & Consolidation</h4>
                      <p className="text-sm text-gray-600">We legally transition the developers you already trust on. Whether direct hires or vendor-based, we move them into TalentLean’s structure with a fast, compliant, country-ready process.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E6F4F1] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#015E53] font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2B2E32] mb-1">Complete Payroll & Benefits Administration</h4>
                      <p className="text-sm text-[#4E5A64]">We manage payroll, taxes, mandatory benefits, and country-specific compliance so your team stays protected and fully aligned with local regulations.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E6F4F1] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#015E53] font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2B2E32] mb-1">Zero-Overhead Operations</h4>
                      <p className="text-sm text-[#4E5A64]">Your HR team no longer needs to maintain contracts, monitor compliance changes, run payroll cycles, or manage local legal risks. We absorb the entire operational burden.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2 border-white shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <UserCheck className="w-8 h-8 text-[#006F64] flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-[#2B2E32] mb-2">Global Coverage</h4>
                      <p className="text-[#4E5A64]">
                        While our sourcing strength is LatAm, BYOT migrations cover any region. Consolidate developers from any country into one unified, compliant employment structure.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-white shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-[#006F64] flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-[#2B2E32] mb-2">Full Compliance Protection</h4>
                      <p className="text-[#4E5A64]">
                        We assume employment liability and guarantee full compliance in every developer's home country.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-white shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <BadgeCheck className="w-8 h-8 text-[#015E53] flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-[#2B2E32] mb-2">30-Day Money-Back Guarantee</h4>
                      <p className="text-[#4E5A64]">
                        Seamless transition or full refund within 30 days—no questions asked.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tn_Tmo9Pacv8oMb1kWQcBb8V3MJ3Qo3gGsR9m0T4RpO5LMrM3dNW7iWYVweYJBeoof7J_rtC-', '_blank')}
                className="w-full bg-[#006F64] hover:bg-[#014D44] text-white rounded-full py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
                aria-label="Meet an expert about team migration">

                Meet an Expert
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 lg:px-8 bg-[#FAFAF9]" aria-labelledby="how-it-works-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="how-it-works-heading" className="text-4xl md:text-5xl font-bold text-[#2B2E32] text-center mb-4">
            The future of hiring is intelligent orchestration.
          </h2>
          <p className="text-center text-lg text-[#4E5A64] mb-16 max-w-3xl mx-auto">
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
              description: "Hire brand new talent or migrate your existing team to our compliance-ready and efficient model."
            }].
            map((step, index) =>
            <Card
              key={index}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              className={`border-2 transition-all duration-300 cursor-pointer ${
              hoveredStep === index ?
              'border-[#006F64] shadow-lg -translate-y-2' :
              'border-gray-200 hover:border-gray-300'}`
              }>

                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E6F4F1] text-[#015E53] font-bold text-xl mb-6 mx-auto">
                    {step.number}
                  </div>
                  <step.icon className="w-10 h-10 text-gray-900 mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-[#2B2E32] mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-[#4E5A64] text-center leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 lg:px-8 bg-white" aria-labelledby="pricing-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="pricing-heading" className="text-4xl md:text-5xl font-bold text-[#2B2E32] text-center mb-8">Transparent, predictable, and fair.

          </h2>
          <p className="text-center text-lg text-[#4E5A64] mb-12 max-w-3xl mx-auto">
            No hidden fees. No surprises. You define the salary, we handle everything else.
          </p>

          <div className="max-w-md mx-auto">
            <Card
              onMouseEnter={() => setHoveredCard('augmentation')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`border-2 transition-all duration-300 ${
              hoveredCard === 'augmentation' ? 'border-[#006F64] shadow-xl -translate-y-2' : 'border-gray-200'}`
              }>

              <CardContent className="p-10">
                <div className="w-14 h-14 rounded-full bg-[#E6F4F1] flex items-center justify-center mb-6">
                  <UsersRound className="w-7 h-7 text-[#006F64]" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-[#2B2E32] mb-4">
                  Staff Augmentation
                </h3>
                <div className="mb-4">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl text-[#4E5A64] line-through">$2,000</span>
                    <span className="text-4xl font-bold text-[#C62828]">$1,500</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-[#FDEAEA] border border-[#C62828] rounded-full px-3 py-1 mb-2">
                    <Zap className="w-4 h-4 text-[#C62828]" aria-hidden="true" />
                    <span className="text-xs font-bold text-[#C62828]">LAUNCH PROMO</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Per month per developer + Salary (you define)
                  </p>
                </div>
                <p className="text-[#4E5A64] leading-relaxed mb-4">
                  Simple, transparent pricing. You define the developer's compensation—we add our flat monthly fee. No percentages, no hidden costs, complete clarity.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#015E53] bg-[#E6F4F1] border border-[#015E53] rounded-lg px-3 py-2">
                  <BadgeCheck className="w-4 h-4" aria-hidden="true" />
                  <span className="font-medium">30-day money-back guarantee</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA to Calculator */}
          <div className="my-5 text-center">
            <Link to={createPageUrl("Pricing")}>
              <Button size="lg" className="bg-[#006F64] hover:bg-[#014D44] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2" aria-label="Calculate your hiring costs">
                <Calculator className="w-5 h-5 mr-2" aria-hidden="true" />
                Calculate Your Costs
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Interactive calculator with complete pricing transparency
            </p>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section id="why-different" className="py-24 px-6 lg:px-8 bg-[#FAFAF9]" aria-labelledby="why-different-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="why-different-heading" className="text-4xl md:text-5xl font-bold text-[#2B2E32] text-center mb-16">
            Why companies choose TalentLean
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#E6F4F1] flex items-center justify-center mb-6 mx-auto">
                <Cpu className="w-10 h-10 text-[#006F64]" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-[#2B2E32] mb-4">AI Precision</h3>
              <p className="text-[#4E5A64] leading-relaxed">
                Custom-trained models that understand your technical needs and LatAm talent landscape.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#E6F4F1] flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-10 h-10 text-[#006F64]" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-[#2B2E32] mb-4">Compliance First</h3>
              <p className="text-[#4E5A64] leading-relaxed">
                LatAm payroll, contracts, and legal protection built-in across all countries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#E6F4F1] flex items-center justify-center mb-6 mx-auto">
                <UserCheck className="w-10 h-10 text-[#006F64]" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-[#2B2E32] mb-4">Dedicated Account Manager</h3>
              <p className="text-[#4E5A64] leading-relaxed">
                Your direct point of contact for onboarding, compliance questions, and ongoing support. Typical response time: one business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-32 px-6 lg:px-8 bg-gradient-to-br from-[#006F64] to-[#014D44] text-white" aria-labelledby="cta-heading">
      <div className="max-w-4xl mx-auto text-center">
      <h2 id="cta-heading" className="text-4xl md:text-6xl font-bold mb-6">
        Let's build your next great LatAm team.
      </h2>
      <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
        Hire smarter, scale faster, and manage globally with clarity and confidence.
      </p>
      <Button
        onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tn_Tmo9Pacv8oMb1kWQcBb8V3MJ3Qo3gGsR9m0T4RpO5LMrM3dNW7iWYVweYJBeoof7J_rtC-', '_blank')}
        size="lg"
        className="bg-white text-[#006F64] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
        aria-label="Get started - meet an expert">

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
              <button onClick={() => scrollToSection('why-different')} className="hover:text-white transition-colors">About Us</button>
              <Link to={createPageUrl("Pricing")} className="hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to={createPageUrl("FAQ")} className="hover:text-white transition-colors">
                FAQ
              </Link>
              <button onClick={() => scrollToSection('byot')} className="hover:text-white transition-colors">
                Migrate Team
              </button>
              <button onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tn_Tmo9Pacv8oMb1kWQcBb8V3MJ3Qo3gGsR9m0T4RpO5LMrM3dNW7iWYVweYJBeoof7J_rtC-', '_blank')} className="hover:text-white transition-colors">
                Meet an Expert
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© 2025 TalentLean. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>);

}