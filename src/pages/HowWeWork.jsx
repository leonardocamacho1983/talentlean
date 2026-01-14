import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Brain,
  Handshake,
  Clock,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  Target,
  Zap,
  Shield,
  Layers
} from "lucide-react";
import CanonicalURL from "../components/CanonicalURL";
import MobileMenu from "../components/MobileMenu";

export default function HowWeWork() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "How We Work - TalentLean | Build High-Performance Tech Teams";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CanonicalURL />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="text-2xl font-bold text-gray-900">
              Talent<span className="text-teal-600">Lean</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to={createPageUrl("Home")} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Home
              </Link>
              <Link to={createPageUrl("Pricing")} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Pricing
              </Link>
              <Link to={createPageUrl("HowWeWork")} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                How we Work
              </Link>
              <Link to={createPageUrl("FAQ")} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                FAQ
              </Link>
              <Link to={createPageUrl("Ambassadors")} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Ambassadors
              </Link>
              <Link to={createPageUrl("Community")} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Community
              </Link>
              <Button
                onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tn_Tmo9Pacv8oMb1kWQcBb8V3MJ3Qo3gGsR9m0T4RpO5LMrM3dNW7iWYVweYJBeoof7J_rtC-', '_blank')}
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

      {/* Hero Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2B2E32] mb-6 leading-tight">
            Build High Performance Tech Teams with AI, Human Expertise & LATAM's Largest Talent Network
          </h1>
          <p className="text-xl text-[#4E5A64] mb-8 max-w-4xl mx-auto leading-relaxed">
            Combine a network of 96,000+ pre vetted LATAM professionals with AI driven vetting and human recruiting expertise to build your engineering team quickly and confidently.
          </p>
          <Button
            onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tn_Tmo9Pacv8oMb1kWQcBb8V3MJ3Qo3gGsR9m0T4RpO5LMrM3dNW7iWYVweYJBeoof7J_rtC-', '_blank')}
            className="bg-[#006F64] hover:bg-[#014D44] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Book a Strategy Call
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* The Largest Curated LATAM Network */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E6F4F1] mb-6">
                <Users className="w-8 h-8 text-[#006F64]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B2E32] mb-6">
                The Largest Curated LATAM Network
              </h2>
              <p className="text-lg text-[#4E5A64] leading-relaxed mb-6">
                Behind every TalentLean engagement is a living talent infrastructure of more than 96,000 pre-vetted engineers, designers, QA specialists, data professionals and technical leaders across Latin America. This is not a marketplace; it's a continuously curated network built to support long-term, high-performance engineering teams.
              </p>
            </div>
            <div className="space-y-4">
              <Card className="border-2 border-[#E6F4F1] shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#006F64] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#2B2E32] mb-2">96,000+ vetted professionals</h3>
                      <p className="text-base text-[#4E5A64]">Far beyond the few thousand developers offered by other platforms</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#E6F4F1] shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#006F64] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#2B2E32] mb-2">Full role coverage</h3>
                      <p className="text-base text-[#4E5A64]">Engineering, data, QA, design and leadership</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#E6F4F1] shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#006F64] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#2B2E32] mb-2">Continuous vetting</h3>
                      <p className="text-base text-[#4E5A64]">Ongoing skill assessments and real-world performance calibration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#E6F4F1] shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#006F64] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#2B2E32] mb-2">Scale-ready</h3>
                      <p className="text-base text-[#4E5A64]">From single senior hires to multi-team scale-ups</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Precision with Human Insight */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-4">
              <Card className="border-2 border-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Brain className="w-8 h-8 text-[#006F64] flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-[#2B2E32] mb-2">Objective, skill-by-skill scoring</h3>
                      <p className="text-base text-[#4E5A64]">Red-flag analysis across technical and soft skills</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 text-[#006F64] flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-[#2B2E32] mb-2">Recruiters refine job descriptions</h3>
                      <p className="text-base text-[#4E5A64]">Ensure cultural fit and role alignment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Zap className="w-8 h-8 text-[#006F64] flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-[#2B2E32] mb-2">Faster shortlisting</h3>
                      <p className="text-base text-[#4E5A64]">Without sacrificing depth or quality</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-6">
                <Brain className="w-8 h-8 text-[#006F64]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B2E32] mb-6">
                AI Precision with Human Insight
              </h2>
              <p className="text-lg text-[#4E5A64] leading-relaxed mb-6">
                Our AI vetting engine transcribes asynchronous interviews and scores candidates across technical domains like Python/Django, cloud platforms, CI/CD and SQL, as well as soft skills such as communication and autonomy.
              </p>
              <p className="text-lg text-[#4E5A64] leading-relaxed">
                Our talent specialists then personally review every match to guarantee precision and cultural fit through behavioural interviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Not Just a Marketplace—A Partner */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E6F4F1] mb-6">
              <Handshake className="w-8 h-8 text-[#006F64]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2E32] mb-6">
              Not Just a Marketplace: A Partner
            </h2>
            <p className="text-lg text-[#4E5A64] max-w-3xl mx-auto leading-relaxed mb-8">
              We are not a self-service marketplace. Your recruiters maintain control of compensation while we handle all operational complexity: contract creation, multi-country compliance, monthly payroll processing, and dedicated account management. Every client has a customer success manager with engineering leadership experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-[#E6F4F1] shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#E6F4F1] flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-[#006F64]" />
                </div>
                <h3 className="font-bold text-[#2B2E32] mb-3">End-to-end compliance</h3>
                <p className="text-base text-[#4E5A64]">Payroll and benefits management handled completely</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E6F4F1] shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#E6F4F1] flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-[#006F64]" />
                </div>
                <h3 className="font-bold text-[#2B2E32] mb-3">Dedicated success manager</h3>
                <p className="text-base text-[#4E5A64]">Your single point of contact with engineering expertise</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#E6F4F1] shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#E6F4F1] flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-6 h-6 text-[#006F64]" />
                </div>
                <h3 className="font-bold text-[#2B2E32] mb-3">Zero operational burden</h3>
                <p className="text-base text-[#4E5A64]">No load on internal HR and finance teams</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* From Brief to Resumes in 24 Hours */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-6">
              <Clock className="w-8 h-8 text-[#006F64]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2E32] mb-6">
              From Brief to Resumes in 24 Hours
            </h2>
            <p className="text-lg text-[#4E5A64] max-w-2xl mx-auto leading-relaxed">
              Submit your role description and get the first resumes within 24 hours. Here's how:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-white shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#006F64] text-white flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#2B2E32] mb-2">Define requirements</h3>
                    <p className="text-base text-[#4E5A64] leading-relaxed">You outline the role, skill sets, seniority and culture</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-white shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#006F64] text-white flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#2B2E32] mb-2">AI & recruiter search</h3>
                    <p className="text-base text-[#4E5A64] leading-relaxed">Our AI vetting engine and recruiters identify the best candidates</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-white shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#006F64] text-white flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#2B2E32] mb-2">Interview & assessment</h3>
                    <p className="text-base text-[#4E5A64] leading-relaxed">Candidates complete asynchronous interviews; our AI scores them and recruiters conduct follow-ups</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-white shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#006F64] text-white flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#2B2E32] mb-2">Shortlist & selection</h3>
                    <p className="text-base text-[#4E5A64] leading-relaxed">You receive a tailored shortlist and choose who to interview</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-white shadow-lg bg-white md:col-span-2">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#006F64] text-white flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#2B2E32] mb-2">Onboarding & compliance</h3>
                    <p className="text-base text-[#4E5A64] leading-relaxed">We handle all employment contracts, payroll and local labour laws</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proof & Metrics */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E6F4F1] mb-6">
              <TrendingUp className="w-8 h-8 text-[#006F64]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2E32] mb-6">
              Proof & Metrics
            </h2>
            <p className="text-lg text-[#4E5A64] max-w-2xl mx-auto leading-relaxed">
              Measurable outcomes that matter
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-[#006F64] shadow-lg text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-[#006F64] mb-3">24h</div>
                <p className="text-lg font-semibold text-[#2B2E32] mb-2">First resumes delivered</p>
                <p className="text-base text-[#4E5A64]">Within 24 hours of your request</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#006F64] shadow-lg text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-[#006F64] mb-3">~80%</div>
                <p className="text-lg font-semibold text-[#2B2E32] mb-2">Interview acceptance rate</p>
                <p className="text-base text-[#4E5A64]">Of candidates we present are interviewed</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#006F64] shadow-lg text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-[#006F64] mb-3">3x Faster</div>
                <p className="text-lg font-semibold text-[#2B2E32] mb-2">Reduced time-to-hire</p>
                <p className="text-base text-[#4E5A64]">Average 2 weeks vs. 6+ weeks industry standard</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why TalentLean Wins */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2E32] mb-6">
              Why TalentLean Wins
            </h2>
            <p className="text-lg text-[#4E5A64] max-w-3xl mx-auto leading-relaxed">
              Many platforms filter millions of profiles to produce a shortlist of over 6,000 developers. TalentLean is different:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-white shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#006F64] text-white flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2B2E32] mb-3">Scale</h3>
                    <p className="text-[#4E5A64] leading-relaxed">
                      96,000+ curated professionals vs. a few thousand elsewhere
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-white shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#006F64] text-white flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2B2E32] mb-3">Depth</h3>
                    <p className="text-[#4E5A64] leading-relaxed">
                      AI-driven scoring plus human calibration vs. résumé filters
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-white shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#006F64] text-white flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2B2E32] mb-3">Speed</h3>
                    <p className="text-[#4E5A64] leading-relaxed">
                      Resumes in 24 hours vs. slower, manual processes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-white shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#006F64] text-white flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2B2E32] mb-3">Partnership</h3>
                    <p className="text-[#4E5A64] leading-relaxed">
                      Compliance, payroll and benefits handled end-to-end vs. marketplaces that stop at matching
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-white shadow-xl md:col-span-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#006F64] text-white flex items-center justify-center flex-shrink-0 font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2B2E32] mb-3">Human support</h3>
                    <p className="text-[#4E5A64] leading-relaxed">
                      Dedicated success manager vs. generic account contacts
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2B2E32] mb-6">
            See vetted candidates within 24 hours
          </h2>
          <p className="text-xl text-[#4E5A64] mb-8 leading-relaxed">
            Book your strategy call today and start building your high-performance LATAM tech team.
          </p>
          <Button
            onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tn_Tmo9Pacv8oMb1kWQcBb8V3MJ3Qo3gGsR9m0T4RpO5LMrM3dNW7iWYVweYJBeoof7J_rtC-', '_blank')}
            className="bg-[#006F64] hover:bg-[#014D44] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Book a Strategy Call
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-8" role="contentinfo" aria-label="Site footer">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Branding */}
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-white mb-2">
                Talent<span className="text-[#4FD1C5]">Lean</span>
              </div>
              <p className="text-sm">The Human Intelligence Behind LatAm Hiring.</p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6 text-sm" aria-label="Footer navigation">
              <Link to={createPageUrl("Home")} className="hover:text-white transition-colors">
                Home
              </Link>
              <Link to={createPageUrl("Pricing")} className="hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to={createPageUrl("HowWeWork")} className="hover:text-white transition-colors">
                How we Work
              </Link>
              <Link to={createPageUrl("FAQ")} className="hover:text-white transition-colors">
                FAQ
              </Link>
              <Link to={createPageUrl("Ambassadors")} className="hover:text-white transition-colors">
                Ambassadors
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
