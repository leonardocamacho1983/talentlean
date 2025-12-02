import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle2, Users, Award, TrendingUp } from "lucide-react";
import CanonicalURL from "../components/CanonicalURL";
import MobileMenu from "../components/MobileMenu";

export default function Ambassadors() {
  // SEO: Set document title and meta tags
  React.useEffect(() => {
    // Set page title
    document.title = "TalentLean Ambassador Program. Refer great companies. Earn meaningful rewards.";

    // Set or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Join the TalentLean Ambassador Program. Introduce companies hiring senior engineering talent. Earn rewards for successful placements. Built for tech leaders, founders and operators.";

    // Set or update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = "talentlean ambassador, referral program tech hiring, engineering recruitment, tech ambassador program, refer companies hiring engineers";

    // Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = "TalentLean Ambassador Program";

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = "Help companies hire exceptional engineering talent. Earn rewards for impactful introductions.";

    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.content = "website";

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = "https://www.talentlean.com/ambassadors";

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.content = "https://www.talentlean.com/og-image.svg";

    let ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (!ogImageAlt) {
      ogImageAlt = document.createElement('meta');
      ogImageAlt.setAttribute('property', 'og:image:alt');
      document.head.appendChild(ogImageAlt);
    }
    ogImageAlt.content = "TalentLean Ambassador illustration";

    // Set robots meta tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = "index, follow";
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
                to={createPageUrl("FAQ")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                FAQ
              </Link>
              <Link
                to={createPageUrl("Ambassadors")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Ambassadors
              </Link>
              <Button
                onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tn_Tmo9Pacv8oMb1kWQcBb8V3MJ3Qo3gGsR9m0T4RpO5LMrM3dNW7iWYVweYJBeoof7J_rtC-', '_blank')}
                className="bg-[#006F64] hover:bg-[#014D44] text-white rounded-full px-6 focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
                aria-label="Schedule a meeting with a TalentLean expert">
                Meet an Expert
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
            Make introductions that matter. Help companies hire exceptional engineering talent and earn meaningful rewards.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#006F64] hover:bg-[#014D44] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2 min-h-[44px] min-w-[44px]">
            <Link to="/ambassadors/apply" aria-label="Apply to become a TalentLean Ambassador">
              Apply as Ambassador
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content">
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
                    <p className="text-lg text-gray-700">
                      Apply to join the TalentLean Ambassador Program.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-teal-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-600">
                      2
                    </div>
                    <p className="text-lg text-gray-700">
                      Receive guidance on how to identify companies hiring senior engineering talent.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-teal-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-600">
                      3
                    </div>
                    <p className="text-lg text-gray-700">
                      Make introductions only when relevant and high quality.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-teal-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-600">
                      4
                    </div>
                    <p className="text-lg text-gray-700">
                      Earn rewards for successful hires made through your intros.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to={createPageUrl("Home")}
                className="text-teal-600 hover:text-teal-700 font-medium underline focus:outline-2 focus:outline-teal-600 focus:outline-offset-2">
                Learn about our talent assessment process
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                to={createPageUrl("Home")}
                className="text-teal-600 hover:text-teal-700 font-medium underline focus:outline-2 focus:outline-teal-600 focus:outline-offset-2">
                See how we work with companies
              </Link>
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
              <p className="text-xl text-gray-700 leading-relaxed">
                We welcome tech leaders, founders, recruiters, consultants and operators with access to hiring teams.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Ambassadors must follow our code of conduct and avoid any conflict of interest with their employer.
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
                Ambassadors earn financial rewards for every successful hire resulting from their introduction.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Higher volumes unlock tiered incentive levels and exclusive TalentLean insights.
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
                We connect companies to pre-vetted senior engineering talent.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our matching process is fast, our assessments are rigorous, our placement success rate is high.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Ambassadors benefit from a transparent workflow and a clear payout structure.
              </p>
            </div>

            <Link
              to={createPageUrl("Home")}
              className="text-teal-600 hover:text-teal-700 font-medium text-lg underline focus:outline-2 focus:outline-teal-600 focus:outline-offset-2">
              About TalentLean
            </Link>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="cta_section" className="py-32 px-6 lg:px-8 bg-gradient-to-br from-[#006F64] to-[#014D44] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Become a TalentLean Ambassador
            </h2>
            <p className="text-xl md:text-2xl mb-6 opacity-90 leading-relaxed">
              Join a network of leaders shaping the future of engineering hiring.
            </p>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
              Your introductions can accelerate careers and strengthen tech teams.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#006F64] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-2 focus:outline-white focus:outline-offset-2 min-h-[44px] min-w-[44px]">
              <Link to="/ambassadors/apply" aria-label="Apply now to the TalentLean Ambassador Program">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>
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
