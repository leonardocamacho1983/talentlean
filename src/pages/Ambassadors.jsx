import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle2, Users, Award, TrendingUp } from "lucide-react";
import CanonicalURL from "../components/CanonicalURL";
import MobileMenu from "../components/MobileMenu";

export default function Ambassadors() {
  // SEO: Set dynamic page title (meta tags are static in HTML for performance)
  React.useEffect(() => {
    // Only update page title dynamically; all meta tags are in index.html for performance
    document.title = "TalentLean Ambassador Program. Refer great companies. Earn meaningful rewards.";
  }, []);

  // Structured Data for SEO (Schema.org)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "TalentLean Ambassador Program",
    "description": "Refer companies hiring engineering talent and earn rewards for successful placements.",
    "publisher": {
      "@type": "Organization",
      "name": "TalentLean",
      "url": "https://www.talentlean.com"
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <CanonicalURL path="/ambassadors" />

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-600 focus:text-white focus:rounded">
        Skip to content
      </a>

      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to={createPageUrl("Home")}
              className="text-2xl font-bold text-gray-900 transition-colors hover:text-gray-700"
              aria-label="TalentLean Home">
              Talent<span className="text-teal-600">Lean</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to={createPageUrl("Home")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Home
              </Link>
              <Link
                to={createPageUrl("Pricing")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Pricing
              </Link>
              <Link
                to={createPageUrl("HowWeWork")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                How we Work
              </Link>
              <Link
                to={createPageUrl("FAQ")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                FAQ
              </Link>
              <Link
                to={createPageUrl("Ambassadors")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Ambassadors
              </Link>
              <Link
                to={createPageUrl("Community")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Community
              </Link>
              <Button
                onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tn_Tmo9Pacv8oMb1kWQcBb8V3MJ3Qo3gGsR9m0T4RpO5LMrM3dNW7iWYVweYJBeoof7J_rtC-', '_blank')}
                className="bg-[#006F64] hover:bg-[#014D44] text-white rounded-full px-6 focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
                aria-label="Talk to us at TalentLean">
                Talk to Us
              </Button>
            </div>

            {/* Mobile Menu */}
            <MobileMenu onNavigate={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-teal-50/30 pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            The TalentLean Ambassador Program
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Make introductions that matter. Help companies hire exceptional engineering talent and earn meaningful rewards when referrals convert.
          </p>
          <Button
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfFZMDcxsVY0QAY7qa-au-cBfJS8ecRfVf2GcVYxYC4mK_i6g/viewform', '_blank')}
            size="lg"
            className="bg-[#006F64] hover:bg-[#014D44] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2 min-h-[44px] min-w-[44px]"
            aria-label="Apply to become a TalentLean Ambassador">
            Apply to Become an Ambassador
            <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content">
        {/* Why Become Section */}
        <section id="why_become" className="py-24 px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Why become a TalentLean Ambassador
            </h2>

            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Scaling engineering teams is challenging. If someone knows founders, operators, CTOs, or companies hiring senior engineers, their introductions can shape company success and generate meaningful rewards.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Ambassadors earn a share of TalentLean's placement fee for every successful hire. No sales pressure. Only relevant intros when they make sense.
              </p>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how_it_works" className="py-24 px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-teal-600" aria-hidden="true" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                How it works
              </h2>
            </div>

            <div className="grid gap-6 mb-8">
              <Card className="border-2 border-gray-100 hover:border-teal-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-600">
                      1
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900 mb-1">Apply to join</p>
                      <p className="text-lg text-gray-700">
                        Tell us who you are and your background. We partner with people who understand tech, talent, or startup environments.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-teal-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-600">
                      2
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900 mb-1">Identify a company hiring senior engineers</p>
                      <p className="text-lg text-gray-700">
                        You can refer a specific lead or let our system help surface opportunities from your network.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-teal-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-600">
                      3
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900 mb-1">Make a warm introduction</p>
                      <p className="text-lg text-gray-700">
                        With permission from both sides, we coordinate the intro and manage the entire hiring process.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-teal-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-600">
                      4
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900 mb-1">Earn rewards for successful hires</p>
                      <p className="text-lg text-gray-700">
                        When TalentLean places a candidate with the company you referred, you receive a percentage of the placement fee.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/talent"
                className="text-teal-600 hover:text-teal-700 font-medium underline focus:outline-2 focus:outline-teal-600 focus:outline-offset-2">
                Learn about our talent assessment
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="/employers"
                className="text-teal-600 hover:text-teal-700 font-medium underline focus:outline-2 focus:outline-teal-600 focus:outline-offset-2">
                See how we work with companies
              </a>
            </div>
          </div>
        </section>

        {/* Who Can Join Section */}
        <section id="who_can_join" className="py-24 px-6 lg:px-8 bg-[#FAFAF9]">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-teal-600" aria-hidden="true" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Who can join
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We welcome people who understand tech and maintain strong professional networks, including:
              </p>

              <ul className="space-y-4 text-lg text-gray-700 ml-4">
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Founders and former founders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>CTOs, engineering leaders, and tech advisors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Recruiters, talent partners, people leaders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Operators or consultants who work closely with startups</span>
                </li>
              </ul>

              <p className="text-xl text-gray-700 leading-relaxed pt-4">
                Ambassadors must follow our code of conduct and avoid conflicts of interest with their employers.
              </p>
            </div>
          </div>
        </section>

        {/* Rewards Section */}
        <section id="rewards" className="py-24 px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                <Award className="w-6 h-6 text-teal-600" aria-hidden="true" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Rewards
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Ambassadors earn a percentage of TalentLean's placement fee for every successful hire.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed font-semibold">
                Benefits for ambassadors include:
              </p>

              <ul className="space-y-3 text-lg text-gray-700 ml-4">
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Higher-tier commission levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Early access to hiring intelligence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Priority alerts when companies begin hiring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Exclusive insights and benchmarks</span>
                </li>
              </ul>

              <p className="text-xl text-gray-700 leading-relaxed pt-6">
                Meaningful rewards without sales activity or ongoing obligation.
              </p>
            </div>
          </div>
        </section>

        {/* Why TalentLean Section */}
        <section id="why_talentlean" className="py-24 px-6 lg:px-8 bg-[#FAFAF9]">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-teal-600" aria-hidden="true" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Why TalentLean
              </h2>
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                Companies trust TalentLean because we connect them to vetted senior engineering talent. Our strong assessment process and fast matching enable teams to hire quickly without compromising quality.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed font-semibold">
                Ambassadors receive:
              </p>

              <ul className="space-y-3 text-lg text-gray-700 ml-4">
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Referral tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Progress visibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Clear payout timelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Dedicated support</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="cta_section" className="py-32 px-6 lg:px-8 bg-gradient-to-br from-[#006F64] to-[#014D44] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Become a TalentLean Ambassador
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
              Join a network of leaders shaping how engineering teams are built. Your introductions can accelerate careers, strengthen startups, and generate meaningful rewards for you.
            </p>
            <Button
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfFZMDcxsVY0QAY7qa-au-cBfJS8ecRfVf2GcVYxYC4mK_i6g/viewform', '_blank')}
              size="lg"
              className="bg-white text-[#006F64] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-2 focus:outline-white focus:outline-offset-2 min-h-[44px] min-w-[44px]"
              aria-label="Apply now to the TalentLean Ambassador Program">
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Button>
          </div>
        </section>

        {/* SEO Footnote Block */}
        <p className="sr-only">
          TalentLean Ambassador Program for tech leaders, founders, recruiters, and operators who want to refer companies hiring engineers
          and earn rewards from successful engineering hiring referrals. TalentLean connects startups and global companies with vetted senior
          software engineers, remote engineering teams, and high-performing technical talent. Ambassadors introduce companies needing
          engineering recruitment support, senior engineer hiring, and global tech talent acquisition.
        </p>
      </main>

      {/* Footer - reuse existing component */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-8" role="contentinfo">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-white mb-2">
                Talent<span className="text-[#4FD1C5]">Lean</span>
              </div>
              <p className="text-sm">The Human Intelligence Behind LatAm Hiring.</p>
            </div>
            <div className="flex gap-8 text-sm">
              <Link to={createPageUrl("Home")} className="hover:text-white transition-colors">
                Home
              </Link>
              <Link to={createPageUrl("Pricing")} className="hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to={createPageUrl("FAQ")} className="hover:text-white transition-colors">
                FAQ
              </Link>
              <Link to={createPageUrl("Ambassadors")} className="hover:text-white transition-colors">
                Ambassadors
              </Link>
              <a href="https://blog.talentlean.com" className="hover:text-white transition-colors">
                Blog
              </a>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">
                Bring Your Own Talent
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
