import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calculator, 
  Users, 
  DollarSign, 
  Calendar,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Briefcase,
  UsersRound
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Pricing() {
  const [serviceType, setServiceType] = useState("augmentation");
  
  // Staffing Services variables
  const [staffingHires, setStaffingHires] = useState(3);
  const [avgSalary, setAvgSalary] = useState(5000);
  
  // Staff Augmentation variables
  const [augmentationHires, setAugmentationHires] = useState(5);
  const [developerSalary, setDeveloperSalary] = useState(6000);
  const [contractMonths, setContractMonths] = useState(12);

  // Calculate costs
  const calculateStaffingCost = () => {
    return staffingHires * avgSalary;
  };

  const calculateAugmentationMonthlyCost = () => {
    const perDeveloperCost = developerSalary + (developerSalary * 0.20) + 1000;
    return perDeveloperCost * augmentationHires;
  };

  const calculateAugmentationTotalCost = () => {
    return calculateAugmentationMonthlyCost() * contractMonths;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to={createPageUrl("Home")} className="text-2xl font-bold text-gray-900">
              Project <span className="text-teal-600">X</span>
            </Link>
            <Link to={createPageUrl("Home")}>
              <Button variant="outline" className="rounded-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-20 pb-12 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-teal-50/30">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mb-6">
            <Calculator className="w-8 h-8 text-teal-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Pricing Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Customize your requirements and get an instant estimate for Project X's services. 
            Transparent pricing with no hidden fees.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Tabs value={serviceType} onValueChange={setServiceType} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12 h-14">
              <TabsTrigger value="staffing" className="text-lg">
                <Briefcase className="w-5 h-5 mr-2" />
                Staffing Services
              </TabsTrigger>
              <TabsTrigger value="augmentation" className="text-lg">
                <UsersRound className="w-5 h-5 mr-2" />
                Staff Augmentation
              </TabsTrigger>
            </TabsList>

            {/* Staffing Services Calculator */}
            <TabsContent value="staffing">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <Card className="border-2 border-gray-200 shadow-lg">
                  <CardHeader className="border-b bg-gradient-to-r from-teal-50 to-teal-100/50">
                    <CardTitle className="text-2xl text-gray-900">Configure Your Hiring</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 space-y-8">
                    {/* Number of Hires */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          <Users className="w-5 h-5 text-teal-600" />
                          Number of Hires
                        </Label>
                        <div className="flex items-center gap-2">
                          <Input 
                            type="number"
                            value={staffingHires}
                            onChange={(e) => setStaffingHires(Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-20 text-center font-bold text-lg"
                            min="1"
                          />
                          <span className="text-gray-500 text-sm">hires</span>
                        </div>
                      </div>
                      <Slider
                        value={[staffingHires]}
                        onValueChange={(value) => setStaffingHires(value[0])}
                        min={1}
                        max={50}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    {/* Average Monthly Salary */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-teal-600" />
                          Average Monthly Salary
                        </Label>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">$</span>
                          <Input 
                            type="number"
                            value={avgSalary}
                            onChange={(e) => setAvgSalary(Math.max(1000, parseInt(e.target.value) || 1000))}
                            className="w-32 text-center font-bold text-lg"
                            min="1000"
                            step="500"
                          />
                        </div>
                      </div>
                      <Slider
                        value={[avgSalary]}
                        onValueChange={(value) => setAvgSalary(value[0])}
                        min={1000}
                        max={20000}
                        step={500}
                        className="w-full"
                      />
                    </div>

                    {/* Info Box */}
                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                          AI-powered candidate sourcing & vetting
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                          Expert human curation & interviews
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                          Guaranteed cultural & technical fit
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                          Delivery within days, not weeks
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Results Section */}
                <Card className="border-2 border-teal-200 shadow-xl bg-gradient-to-br from-white to-teal-50/30">
                  <CardHeader className="border-b bg-teal-600 text-white">
                    <CardTitle className="text-2xl">Your Investment</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Cost Breakdown */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">Hires</span>
                          <span className="font-semibold text-gray-900">{staffingHires}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">Avg. Monthly Salary</span>
                          <span className="font-semibold text-gray-900">{formatCurrency(avgSalary)}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">Fee per Hire</span>
                          <span className="font-semibold text-gray-900">{formatCurrency(avgSalary)} (1× salary)</span>
                        </div>
                      </div>

                      {/* Total Cost */}
                      <div className="bg-teal-600 text-white rounded-xl p-6 mt-8">
                        <div className="text-sm font-medium mb-2 opacity-90">Total One-Time Fee</div>
                        <div className="text-5xl font-bold mb-2">
                          {formatCurrency(calculateStaffingCost())}
                        </div>
                        <div className="text-sm opacity-90">
                          For {staffingHires} developer{staffingHires !== 1 ? 's' : ''}
                        </div>
                      </div>

                      {/* Savings Info */}
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">Cost-Effective Hiring</div>
                          <div className="text-sm text-gray-600">
                            Traditional recruitment agencies charge 15-25% of annual salary. 
                            Our AI-powered approach saves you up to 50%.
                          </div>
                        </div>
                      </div>

                      <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Staff Augmentation Calculator */}
            <TabsContent value="augmentation">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <Card className="border-2 border-gray-200 shadow-lg">
                  <CardHeader className="border-b bg-gradient-to-r from-teal-50 to-teal-100/50">
                    <CardTitle className="text-2xl text-gray-900">Configure Your Team</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 space-y-8">
                    {/* Number of Developers */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          <Users className="w-5 h-5 text-teal-600" />
                          Number of Developers
                        </Label>
                        <div className="flex items-center gap-2">
                          <Input 
                            type="number"
                            value={augmentationHires}
                            onChange={(e) => setAugmentationHires(Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-20 text-center font-bold text-lg"
                            min="1"
                          />
                          <span className="text-gray-500 text-sm">devs</span>
                        </div>
                      </div>
                      <Slider
                        value={[augmentationHires]}
                        onValueChange={(value) => setAugmentationHires(value[0])}
                        min={1}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    {/* Developer Salary */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-teal-600" />
                          Monthly Salary per Developer
                        </Label>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">$</span>
                          <Input 
                            type="number"
                            value={developerSalary}
                            onChange={(e) => setDeveloperSalary(Math.max(1000, parseInt(e.target.value) || 1000))}
                            className="w-32 text-center font-bold text-lg"
                            min="1000"
                            step="500"
                          />
                        </div>
                      </div>
                      <Slider
                        value={[developerSalary]}
                        onValueChange={(value) => setDeveloperSalary(value[0])}
                        min={1000}
                        max={20000}
                        step={500}
                        className="w-full"
                      />
                    </div>

                    {/* Contract Duration */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-teal-600" />
                          Contract Duration
                        </Label>
                        <div className="flex items-center gap-2">
                          <Input 
                            type="number"
                            value={contractMonths}
                            onChange={(e) => setContractMonths(Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-20 text-center font-bold text-lg"
                            min="1"
                          />
                          <span className="text-gray-500 text-sm">months</span>
                        </div>
                      </div>
                      <Slider
                        value={[contractMonths]}
                        onValueChange={(value) => setContractMonths(value[0])}
                        min={1}
                        max={36}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    {/* Info Box */}
                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                          Full EOR compliance & legal protection
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                          Complete payroll & benefits management
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                          Tax compliance in all jurisdictions
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                          Dedicated HR support & administration
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Results Section */}
                <Card className="border-2 border-teal-200 shadow-xl bg-gradient-to-br from-white to-teal-50/30">
                  <CardHeader className="border-b bg-teal-600 text-white">
                    <CardTitle className="text-2xl">Your Investment</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Cost Breakdown */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">Developers</span>
                          <span className="font-semibold text-gray-900">{augmentationHires}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">Monthly Salary (each)</span>
                          <span className="font-semibold text-gray-900">{formatCurrency(developerSalary)}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">Operational Fee (20%)</span>
                          <span className="font-semibold text-gray-900">{formatCurrency(developerSalary * 0.20)}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">Compliance Retainer</span>
                          <span className="font-semibold text-gray-900">$1,000</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b-2 border-gray-300">
                          <span className="text-gray-900 font-semibold">Cost per Developer/Month</span>
                          <span className="font-bold text-teal-600 text-lg">
                            {formatCurrency(developerSalary + (developerSalary * 0.20) + 1000)}
                          </span>
                        </div>
                      </div>

                      {/* Monthly Cost */}
                      <div className="bg-gray-100 rounded-xl p-6">
                        <div className="text-sm font-medium text-gray-600 mb-2">Monthly Total</div>
                        <div className="text-3xl font-bold text-gray-900">
                          {formatCurrency(calculateAugmentationMonthlyCost())}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          For {augmentationHires} developer{augmentationHires !== 1 ? 's' : ''}
                        </div>
                      </div>

                      {/* Total Cost */}
                      <div className="bg-teal-600 text-white rounded-xl p-6">
                        <div className="text-sm font-medium mb-2 opacity-90">Total {contractMonths}-Month Investment</div>
                        <div className="text-5xl font-bold mb-2">
                          {formatCurrency(calculateAugmentationTotalCost())}
                        </div>
                        <div className="text-sm opacity-90">
                          Full compliance & management included
                        </div>
                      </div>

                      {/* Savings Info */}
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">Convert After 6 Months</div>
                          <div className="text-sm text-gray-600">
                            Move developers to your own entity after 6 months with zero conversion fees.
                          </div>
                        </div>
                      </div>

                      <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Questions about pricing?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is here to help you find the perfect solution for your hiring needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8">
              Schedule a Call
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              View FAQ
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
              <Link to={createPageUrl("Home")} className="hover:text-white transition-colors">Home</Link>
              <button className="hover:text-white transition-colors">About Us</button>
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