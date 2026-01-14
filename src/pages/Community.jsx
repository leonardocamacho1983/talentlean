import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Code,
  Layers,
  Database,
  Palette,
  Box,
  ClipboardList,
  CheckCircle2,
  Users,
  Target,
  ArrowRight,
} from "lucide-react";
import CanonicalURL from "../components/CanonicalURL";
import MobileMenu from "../components/MobileMenu";
import CommunitySignupForm from "../components/CommunitySignupForm";

export default function Community() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Join the Community - TalentLean";
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById("signup-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const roles = [
    {
      icon: Code,
      title: "Software Engineers",
      description: "Frontend, Backend, Fullstack, Mobile",
    },
    {
      icon: Layers,
      title: "Software Architects",
      description: "System design and architecture",
    },
    {
      icon: Database,
      title: "Data Professionals",
      description: "Engineers, Analysts, Scientists",
    },
    {
      icon: Palette,
      title: "UI/UX Designers",
      description: "User interface and experience",
    },
    {
      icon: Box,
      title: "Product Designers",
      description: "Digital product design",
    },
    {
      icon: ClipboardList,
      title: "Product Managers",
      description: "Product strategy and execution",
    },
  ];

  const benefits = [
    "Relevant, practical content based on real hiring and delivery experience",
    "Job opportunities shared directly with the community",
    "Proximity to TalentLean recruiters and technical interviewers",
    "What U.S. companies look for in technical professionals",
    "How technical interviews are really conducted",
    "Why strong professionals get rejected, and how to avoid it",
  ];

  return (
    <div className="min-h-screen bg-white">
      <CanonicalURL path="/Community" />

      {/* Navigation */}
      <nav
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to={createPageUrl("Home")}
              className="text-2xl font-bold text-gray-900"
            >
              Talent<span className="text-teal-600">Lean</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to={createPageUrl("Home")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to={createPageUrl("Pricing")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Pricing
              </Link>
              <Link
                to={createPageUrl("HowWeWork")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                How we Work
              </Link>
              <Link
                to={createPageUrl("FAQ")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                FAQ
              </Link>
              <Link
                to={createPageUrl("Ambassadors")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Ambassadors
              </Link>
              <Link
                to={createPageUrl("Community")}
                className="text-gray-900 transition-colors text-sm font-medium border-b-2 border-teal-600"
              >
                Community
              </Link>
              <Button
                onClick={() =>
                  window.open(
                    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tn_Tmo9Pacv8oMb1kWQcBb8V3MJ3Qo3gGsR9m0T4RpO5LMrM3dNW7iWYVweYJBeoof7J_rtC-",
                    "_blank"
                  )
                }
                className="bg-[#006F64] hover:bg-[#014D44] text-white rounded-full px-6 focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
              >
                Talk to Us
              </Button>
            </div>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </nav>

      <main id="main-content">
        {/* Hero Section */}
        <section
          className="pt-16 pb-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-teal-50/30"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-5xl mx-auto text-center">
            {/* Launch Badge - Integrated into Hero */}
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-teal-600 bg-teal-50 text-teal-900 text-sm font-semibold">
              🚀 Community launching March 1st
            </div>

            <h1
              id="hero-heading"
              className="text-4xl md:text-6xl font-bold text-[#2B2E32] mb-6 leading-tight"
            >
              Learn how U.S. tech companies hire, directly from the people who do it.
            </h1>
            <p className="text-xl text-[#4E5A64] mb-8 max-w-3xl mx-auto leading-relaxed">
              A practical community connecting TalentLean recruiters and
              operators with technology professionals who want to work with
              U.S.-based companies and deliver digital products with real-world
              impact.
            </p>

            {/* Primary CTA */}
            <Button
              onClick={scrollToForm}
              className="bg-[#006F64] hover:bg-[#014D44] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
              aria-label="Scroll to signup form"
            >
              Join the waitlist
            </Button>

            <p className="text-sm text-[#4E5A64] mt-4">
              Early access. Curated content. Real opportunities.
            </p>
          </div>
        </section>

        {/* Trust & Authority Signal Section */}
        <section
          className="py-20 px-6 lg:px-8 bg-white"
          aria-labelledby="trust-heading"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E6F4F1] mb-6">
              <Users className="w-10 h-10 text-[#006F64]" aria-hidden="true" />
            </div>
            <h2
              id="trust-heading"
              className="text-5xl md:text-6xl font-bold text-[#006F64] mb-4"
            >
              100,000 devs
            </h2>
            <p className="text-2xl font-semibold text-[#2B2E32] mb-6">
              and other technology professionals interviewed and assessed
            </p>
            <p className="text-lg text-[#4E5A64] leading-relaxed max-w-3xl mx-auto">
              TalentLean works daily with U.S. companies, evaluating,
              hiring, and operating remote tech teams across engineering,
              data, product, and design.
            </p>
          </div>
        </section>

        {/* Who This Community Is For Section */}
        <section
          className="py-24 px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-blue-50"
          aria-labelledby="who-heading"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="who-heading"
              className="text-3xl md:text-4xl font-bold text-[#2B2E32] mb-6 text-center"
            >
              Who this community is for
            </h2>
            <p className="text-lg text-[#4E5A64] mb-12 text-center max-w-4xl mx-auto leading-relaxed">
              This community is designed for technical professionals involved in
              building digital products, including:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {roles.map((role, index) => {
                const Icon = role.icon;
                return (
                  <Card
                    key={index}
                    className="border border-gray-200 rounded-xl p-8 bg-white hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#E6F4F1] mb-4">
                      <Icon
                        className="w-8 h-8 text-[#006F64]"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#2B2E32] mb-2">
                      {role.title}
                    </h3>
                    <p className="text-[#4E5A64]">{role.description}</p>
                  </Card>
                );
              })}
            </div>

            <p className="text-lg text-[#4E5A64] text-center max-w-4xl mx-auto leading-relaxed">
              If you want to work with U.S. companies and understand how they
              actually evaluate and work with global talent, this community is
              for you.
            </p>
          </div>
        </section>

        {/* What You Get Inside Section */}
        <section
          className="py-24 px-6 lg:px-8 bg-white"
          aria-labelledby="benefits-heading"
        >
          <div className="max-w-5xl mx-auto">
            <h2
              id="benefits-heading"
              className="text-3xl md:text-4xl font-bold text-[#2B2E32] mb-4 text-center"
            >
              What you'll find inside the community
            </h2>

            <p className="text-xl text-[#2B2E32] font-semibold text-center mb-12 max-w-3xl mx-auto">
              This is an active, exchange-based community.
            </p>

            <div className="space-y-6 mb-12 max-w-3xl mx-auto">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2
                    className="w-6 h-6 text-[#006F64] flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <p className="text-lg text-[#4E5A64] leading-relaxed flex-1">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-12 max-w-3xl mx-auto">
              <p className="text-lg text-[#2B2E32] font-semibold mb-6">
                Open discussions about:
              </p>
              <div className="space-y-4">
                {benefits.slice(3).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2
                      className="w-6 h-6 text-[#006F64] flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <p className="text-lg text-[#4E5A64] leading-relaxed flex-1">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-l-4 border-gray-300 pl-6 py-4 bg-gray-50 rounded-r-lg">
              <p className="text-lg text-[#4E5A64] leading-relaxed italic">
                This is not a course, not a mentorship program, and not a job
                guarantee.
              </p>
            </div>

            {/* Mid-Page CTA */}
            <div className="text-center mt-12">
              <button
                onClick={scrollToForm}
                className="text-[#006F64] hover:text-[#014D44] font-semibold text-lg inline-flex items-center gap-2 transition-colors underline decoration-2 underline-offset-4 hover:decoration-[#014D44]"
                aria-label="Join the waitlist before launch"
              >
                Join the waitlist before launch
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {/* Why This Community Exists Section */}
        <section
          className="py-24 px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-blue-50"
          aria-labelledby="why-heading"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E6F4F1] mb-6">
                <Target
                  className="w-10 h-10 text-[#006F64]"
                  aria-hidden="true"
                />
              </div>
              <h2
                id="why-heading"
                className="text-3xl md:text-4xl font-bold text-[#2B2E32] mb-6"
              >
                Why we created this community
              </h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-8">
              {/* Problem - Emphasized */}
              <div className="border-l-4 border-[#006F64] pl-6 py-4 bg-white/60 rounded-r-lg">
                <p className="text-xl font-bold text-[#2B2E32] leading-relaxed">
                  There is a gap between what professionals believe companies
                  want and what actually drives hiring decisions.
                </p>
              </div>

              {/* Consequence */}
              <p className="text-lg text-[#2B2E32] leading-relaxed">
                Strong professionals get rejected. Qualified candidates miss
                opportunities. Time and energy are wasted on misaligned
                preparation.
              </p>

              {/* Solution */}
              <p className="text-lg text-[#4E5A64] leading-relaxed">
                This community closes that gap through direct exchange with the
                people who evaluate, hire, and manage global tech teams daily.
                Learn from their real experience, not assumptions.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA / Signup Form Section */}
        <section
          id="signup-form"
          className="py-32 px-6 lg:px-8 bg-white"
          aria-labelledby="signup-heading"
        >
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2
                id="signup-heading"
                className="text-3xl md:text-4xl font-bold text-[#2B2E32] mb-4"
              >
                Join before we launch
              </h2>
              <p className="text-lg text-[#4E5A64] leading-relaxed">
                The community launches on March 1st. Join the waitlist to
                receive early access, curated content, and updates as we build.
              </p>
            </div>

            <CommunitySignupForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-8"
        role="contentinfo"
        aria-label="Site footer"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Branding */}
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-white mb-2">
                Talent<span className="text-[#4FD1C5]">Lean</span>
              </div>
              <p className="text-sm">
                The Human Intelligence Behind LatAm Hiring.
              </p>
            </div>

            {/* Navigation */}
            <nav
              className="flex flex-wrap justify-center gap-6 text-sm"
              aria-label="Footer navigation"
            >
              <Link
                to={createPageUrl("Home")}
                className="hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                to={createPageUrl("Pricing")}
                className="hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                to={createPageUrl("HowWeWork")}
                className="hover:text-white transition-colors"
              >
                How we Work
              </Link>
              <Link
                to={createPageUrl("FAQ")}
                className="hover:text-white transition-colors"
              >
                FAQ
              </Link>
              <Link
                to={createPageUrl("Ambassadors")}
                className="hover:text-white transition-colors"
              >
                Ambassadors
              </Link>
              <Link
                to={createPageUrl("Community")}
                className="hover:text-white transition-colors"
              >
                Community
              </Link>
              <a
                href="https://talentlean.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Blog
              </a>
            </nav>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© 2025 TalentLean. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
