"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Briefcase,
  Shield,
  Users,
  ArrowRight,
  TrendingUp,
  LineChart,
  Star,
  Target,
  Eye,
  Calculator,
  BarChart3,
  X,
  ClipboardCheck,
  Handshake,
  PhoneCall,
} from "lucide-react"
import PerformanceComparisonChart from "@/components/performance-comparison-chart"
import type React from "react"

export default function WhatIsPMSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <style jsx global>{`
        @keyframes drawLine {
          0% { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
          100% { stroke-dasharray: 1000; stroke-dashoffset: 0; }
        }
        
        @keyframes growX20 {
          0% { width: 0%; }
          100% { width: 20%; }
        }
        
        @keyframes growX30 {
          0% { width: 0%; }
          100% { width: 30%; }
        }
        
        @keyframes growX40 {
          0% { width: 0%; }
          100% { width: 40%; }
        }
        
        @keyframes growY40 {
          0% { height: 0%; }
          100% { height: 40%; }
        }
        
        @keyframes growY60 {
          0% { height: 0%; }
          100% { height: 60%; }
        }
        
        @keyframes growY80 {
          0% { height: 0%; }
          100% { height: 80%; }
        }
        
        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulseSlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-draw-line {
          animation: drawLine 2s ease-in-out forwards;
        }
        
        .animate-grow-x-20 {
          animation: growX20 1.5s ease-out forwards;
        }
        
        .animate-grow-x-30 {
          animation: growX30 1.5s ease-out forwards;
        }
        
        .animate-grow-x-40 {
          animation: growX40 1.5s ease-out forwards;
        }
        
        .animate-grow-y-40 {
          animation: growY40 1.5s ease-out forwards;
        }
        
        .animate-grow-y-60 {
          animation: growY60 1.5s ease-out forwards;
        }
        
        .animate-grow-y-80 {
          animation: growY80 1.5s ease-out forwards;
        }
        
        .animate-bounce-subtle {
          animation: bounceSubtle 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-36">
        {/* Animated Bubbles - Reduced quantity and slower animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative w-full h-full">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute rounded-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm animate-floating-${(i % 3) + 1}`}
                style={{
                  width: `${Math.floor(Math.random() * 80 + 40)}px`,
                  height: `${Math.floor(Math.random() * 80 + 40)}px`,
                  top: `${Math.floor(Math.random() * 100)}%`,
                  left: `${Math.floor(Math.random() * 100)}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Stable Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900" />

        {/* Content Container with improved stability */}
        <div className="container relative z-20 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="relative mb-8">
              {/* Decorative Lines - Reduced animation speed */}
              <div className="absolute -left-4 -top-4 h-20 w-20 animate-spin-slow opacity-20">
                <div className="h-full w-full border-l-2 border-t-2 border-white"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-20 w-20 animate-spin-slow opacity-20">
                <div className="h-full w-full border-b-2 border-r-2 border-white"></div>
              </div>

              <h1 className="relative text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                What Is Portfolio Management Service?
              </h1>
            </div>

            {/* Paragraph with enhanced visibility and stability */}
            <div className="relative z-20 backdrop-blur-sm bg-navy-900/50 rounded-lg p-6 mb-12 shadow-lg">
              <p className="text-lg text-white md:text-xl font-normal leading-relaxed">
                Discover how professional portfolio managers can help you achieve your financial goals with customized
                investment strategies.
              </p>
            </div>

            <div className="relative flex flex-wrap justify-center gap-6">
              <Button
                size="lg"
                variant="outline"
                className="relative bg-white border-0 text-navy-900 px-8 py-6 rounded-xl hover:bg-gray-50"
                asChild
              >
                <Link href="/pms/who-should-invest" className="relative flex items-center gap-2">
                  <span className="font-semibold text-lg">Understanding your PMS journey</span>
                  <div className="w-6 h-6 rounded-full bg-navy-900 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Subtle Floating Elements */}
        <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-30">
          <div className="absolute left-1/4 top-1/4 h-40 w-40 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full bg-white/5 blur-3xl"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Understanding PMS Section */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-white shadow-xl">
            <div className="grid grid-cols-1 gap-8">
              <div className="p-6 md:p-8">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding PMS</h2>
                  <p className="text-slate-600 text-lg mb-6">
                    Portfolio Management Services (PMS) in India are SEBI-regulated investment solutions designed for
                    HNIs, UHNIs, NRIs, and institutions seeking personalized and actively managed portfolios. With a
                    minimum investment of ₹50 lakhs, PMS offers access to expert portfolio managers, deep
                    research-driven strategies, and transparent reporting.
                  </p>
                  <p className="text-slate-600 text-lg font-medium mb-8">
                    At Bharat Alternates, we empower you to invest in elite PMS strategies that are thoroughly
                    researched, high-performing, and tailored to your financial goals.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm mb-10">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Key Highlights of PMS</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group bg-white p-5 rounded-lg border border-slate-200 hover:border-blue-500 transition-colors duration-300 hover:shadow-md">
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                            <Briefcase className="h-7 w-7 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 text-lg mb-2">
                              Personalized Investment Strategy
                            </h4>
                            <p className="text-slate-600">
                              PMS is designed to align with the unique financial objectives of each client, offering
                              personalized portfolios managed by experienced fund managers.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white p-5 rounded-lg border border-slate-200 hover:border-blue-500 transition-colors duration-300 hover:shadow-md">
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                            <TrendingUp className="h-7 w-7 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 text-lg mb-2">Active Portfolio Management</h4>
                            <p className="text-slate-600">
                              Professional portfolio managers actively monitor, rebalance, and optimize the portfolio
                              based on market movements, sectoral trends, and economic outlook.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white p-5 rounded-lg border border-slate-200 hover:border-blue-500 transition-colors duration-300 hover:shadow-md">
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                            <Shield className="h-7 w-7 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 text-lg mb-2">Transparency & Control</h4>
                            <p className="text-slate-600">
                              Clients have direct ownership of securities and can access real-time performance reports
                              and transaction updates, ensuring transparency and control over investments.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white p-5 rounded-lg border border-slate-200 hover:border-blue-500 transition-colors duration-300 hover:shadow-md">
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                            <LineChart className="h-7 w-7 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 text-lg mb-2">Diversification</h4>
                            <p className="text-slate-600">
                              Portfolios are diversified across asset classes, sectors, and instruments to mitigate
                              risks and enhance long-term wealth creation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 px-8 py-6 rounded-xl text-white text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                      asChild
                    >
                      <Link href="/contact" className="flex items-center gap-2">
                        <span className="mr-1">🚀</span> Start Your PMS Journey
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Types of PMS Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Types of Portfolio Management Services in India</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              When it comes to personalized investment management, Portfolio Management Services (PMS) in India are
              offered in three distinct formats. Each type caters to different levels of investor involvement and
              control over investment decisions.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Discretionary PMS */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform transition-transform group-hover:scale-[1.02] group-hover:rotate-1"></div>
              <Card className="relative bg-white h-full transform transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 mb-4 relative">
                    <div className="absolute inset-0 bg-blue-100 rounded-full transform transition-transform group-hover:scale-110"></div>
                    <Briefcase className="w-8 h-8 text-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">1. Discretionary PMS</CardTitle>
                  <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                    Full Authority
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    In Discretionary PMS, the portfolio manager has full authority to make investment decisions on
                    behalf of the client. This includes selecting stocks, timing the market, and adjusting the portfolio
                    as needed—without needing prior client approval.
                  </p>
                  <div>
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Expert decision making</span>
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Quick execution of trades</span>
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Hands-off approach for investors</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Best For:</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Investors who prefer a hands-off approach</li>
                        <li>• HNIs who trust expert judgment for wealth creation</li>
                        <li>• Busy professionals lacking time for active management</li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Benefit:</h4>
                      <p className="text-slate-700 italic">
                        Quick, professional decisions aligned with the client's goals
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Non-Discretionary PMS */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl transform transition-transform group-hover:scale-[1.02] group-hover:rotate-1"></div>
              <Card className="relative bg-white h-full transform transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 mb-4 relative">
                    <div className="absolute inset-0 bg-purple-100 rounded-full transform transition-transform group-hover:scale-110"></div>
                    <Users className="w-8 h-8 text-purple-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">2. Non-Discretionary PMS</CardTitle>
                  <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
                    Shared Control
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    Under Non-Discretionary PMS, the portfolio manager advises and recommends investments, but final
                    decisions are made by the client. The manager executes transactions only after obtaining the
                    client's approval.
                  </p>
                  <div>
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Expert guidance and recommendations</span>
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Client retains decision control</span>
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Collaborative investment approach</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Best For:</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Investors who want to stay involved in decision-making</li>
                        <li>• Investors with market knowledge seeking strategic support</li>
                        <li>• Those seeking expert validation for their ideas</li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Benefit:</h4>
                      <p className="text-slate-700 italic">Client has control, but with professional guidance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Advisory PMS */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl transform transition-transform group-hover:scale-[1.02] group-hover:rotate-1"></div>
              <Card className="relative bg-white h-full transform transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 mb-4 relative">
                    <div className="absolute inset-0 bg-green-100 rounded-full transform transition-transform group-hover:scale-110"></div>
                    <LineChart className="w-8 h-8 text-green-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">3. Advisory PMS</CardTitle>
                  <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
                    Guidance Only
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    Advisory PMS offers purely investment advice. The PMS provider suggests potential investment
                    opportunities based on market research, but the client independently executes the trades through
                    their own brokerage accounts.
                  </p>
                  <div>
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Professional market insights</span>
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Complete client control</span>
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Flexible consultation model</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Best For:</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Investors who want expert insights but prefer managing execution</li>
                        <li>• Market-savvy individuals looking for expert opinions</li>
                        <li>• Experienced traders wanting research-based suggestions</li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Benefit:</h4>
                      <p className="text-slate-700 italic">
                        Access to professional research without surrendering control
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Comparison Table Section */}
        <div className="max-w-6xl mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3 animate-fade-in">
              Comparison Table: Types of Portfolio Management Services (PMS) in India
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Understanding the key differences between Discretionary, Non-Discretionary, and Advisory PMS
            </p>
          </div>

          <div
            className="relative bg-white/5 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-2xl overflow-hidden animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Background Decorative Elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

            {/* Table Container */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left border-b border-slate-700">
                    <th className="py-4 px-3 text-slate-300 font-medium">Feature / Type</th>
                    {/* Column Headers with Icons and Color Coding */}
                    <th className="py-4 px-3">
                      <div className="flex flex-col items-center transform transition-transform hover:scale-105 duration-300">
                        <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                          <Briefcase className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-blue-400 font-bold text-lg">Discretionary PMS</span>
                      </div>
                    </th>

                    <th className="py-4 px-3">
                      <div className="flex flex-col items-center transform transition-transform hover:scale-105 duration-300">
                        <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                          <Users className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-purple-400 font-bold text-lg">Non-Discretionary PMS</span>
                      </div>
                    </th>

                    <th className="py-4 px-3">
                      <div className="flex flex-col items-center transform transition-transform hover:scale-105 duration-300">
                        <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                          <LineChart className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-green-400 font-bold text-lg">Advisory PMS</span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* Decision-Making Row */}
                  <tr className="border-b border-slate-700/50 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-3 text-white font-medium">Decision-Making Authority</td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                      <div className="bg-blue-900/30 p-3 rounded-lg text-blue-200 h-full">
                        Portfolio Manager makes all investment decisions
                      </div>
                    </td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                      <div className="bg-purple-900/30 p-3 rounded-lg text-purple-200 h-full">
                        Client approves every decision
                      </div>
                    </td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                      <div className="bg-green-900/30 p-3 rounded-lg text-green-200 h-full">
                        Client makes all decisions based on advisor's input
                      </div>
                    </td>
                  </tr>

                  {/* Execution Row */}
                  <tr className="border-b border-slate-700/50 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-3 text-white font-medium">Execution of Trades</td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                      <div className="bg-blue-900/30 p-3 rounded-lg text-blue-200 h-full">
                        Handled by Portfolio Manager
                      </div>
                    </td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                      <div className="bg-purple-900/30 p-3 rounded-lg text-purple-200 h-full">
                        Done after client approval
                      </div>
                    </td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "0.7s" }}>
                      <div className="bg-green-900/30 p-3 rounded-lg text-green-200 h-full">
                        Client executes trades independently
                      </div>
                    </td>
                  </tr>

                  {/* Client Involvement Row */}
                  <tr className="border-b border-slate-700/50 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-3 text-white font-medium">Client Involvement</td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                      <div className="flex justify-center">
                        <div className="bg-blue-900/30 px-5 py-2 rounded-full text-blue-200">Minimal</div>
                      </div>
                    </td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "0.7s" }}>
                      <div className="flex justify-center">
                        <div className="bg-purple-900/30 px-5 py-2 rounded-full text-purple-200">Moderate</div>
                      </div>
                    </td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                      <div className="flex justify-center">
                        <div className="bg-green-900/30 px-5 py-2 rounded-full text-green-200">High</div>
                      </div>
                    </td>
                  </tr>

                  {/* Best Suited For Row */}
                  <tr className="border-b border-slate-700/50 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-3 text-white font-medium">Best Suited For</td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "0.7s" }}>
                      <div className="bg-blue-900/30 p-3 rounded-lg text-blue-200 h-full">
                        Busy investors preferring professional management
                      </div>
                    </td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                      <div className="bg-purple-900/30 p-3 rounded-lg text-purple-200 h-full">
                        Investors wanting guidance but retaining control
                      </div>
                    </td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                      <div className="bg-green-900/30 p-3 rounded-lg text-green-200 h-full">
                        Market-savvy individuals wanting expert advice
                      </div>
                    </td>
                  </tr>

                  {/* Control Row */}
                  <tr className="border-b border-slate-700/50 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-3 text-white font-medium">Control Over Portfolio</td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                      <div className="flex justify-center">
                        <div className="bg-blue-900/30 px-5 py-2 rounded-full text-blue-200">Low</div>
                      </div>
                    </td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                      <div className="flex justify-center">
                        <div className="bg-purple-900/30 px-5 py-2 rounded-full text-purple-200">Medium</div>
                      </div>
                    </td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "1s" }}>
                      <div className="flex justify-center">
                        <div className="bg-green-900/30 px-5 py-2 rounded-full text-green-200">High</div>
                      </div>
                    </td>
                  </tr>

                  {/* Time Commitment Row */}
                  <tr className="border-b border-slate-700/50 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-3 text-white font-medium">Time Commitment Required</td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                      <div className="flex justify-center">
                        <div className="bg-blue-900/30 px-5 py-2 rounded-full text-blue-200">Low</div>
                      </div>
                    </td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "1s" }}>
                      <div className="flex justify-center">
                        <div className="bg-purple-900/30 px-5 py-2 rounded-full text-purple-200">Medium</div>
                      </div>
                    </td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "1.1s" }}>
                      <div className="flex justify-center">
                        <div className="bg-green-900/30 px-5 py-2 rounded-full text-green-200">High</div>
                      </div>
                    </td>
                  </tr>

                  {/* Expert Research Row */}
                  <tr className="border-b border-slate-700/50 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-3 text-white font-medium">Access to Expert Research</td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "1s" }}>
                      <div className="flex justify-center">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                    </td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "1.1s" }}>
                      <div className="flex justify-center">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                    </td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "1.2s" }}>
                      <div className="flex justify-center">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                    </td>
                  </tr>

                  {/* Customization Row */}
                  <tr className="border-b border-slate-700/50 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-3 text-white font-medium">Investment Strategy Customization</td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "1.1s" }}>
                      <div className="flex justify-center">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                    </td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "1.2s" }}>
                      <div className="flex justify-center">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                    </td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "1.3s" }}>
                      <div className="flex justify-center">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                    </td>
                  </tr>

                  {/* User Profile Row */}
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-3 text-white font-medium">Typical User Profile</td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "1.2s" }}>
                      <div className="bg-blue-900/30 p-3 rounded-lg text-blue-200 h-full">
                        HNIs, UHNIs, NRIs seeking hands-free investing
                      </div>
                    </td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "1.3s" }}>
                      <div className="bg-purple-900/30 p-3 rounded-lg text-purple-200 h-full">
                        Experienced investors wanting oversight
                      </div>
                    </td>
                    <td className="py-4 px-3 animate-fade-in" style={{ animationDelay: "1.4s" }}>
                      <div className="bg-green-900/30 p-3 rounded-lg text-green-200 h-full">
                        DIY investors seeking research-based suggestions
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Table Note */}
            <div className="mt-8 bg-white/10 rounded-lg p-4 animate-fade-in" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-start">
                <div className="text-yellow-300 mr-3 mt-1">💡</div>
                <p className="text-slate-300">
                  <span className="font-semibold">Tip:</span> Consider your investment style, time availability, and
                  desire for control when choosing a PMS type. Most of the PMS are Discretionary PMS.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages of PMS Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3 animate-fade-in">
              What are the advantages of Portfolio Management Services?
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A Smart Investor's Perspective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Left Column - Strategic Investment Edge */}
            <div className="bg-white rounded-xl shadow-xl p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                  <TrendingUp className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Strategic Investment Edge</h3>
              </div>

              <blockquote className="text-gray-700 mb-6 text-lg border-l-4 border-indigo-300 pl-4 italic">
                <span className="text-2xl text-indigo-400">"</span> In a dynamic financial landscape, where markets
                fluctuate and investment decisions require precision, Portfolio Management Services (PMS) offer a
                strategic edge for serious investors. For high-net-worth individuals (HNIs), PMS is more than just a
                wealth management tool—it's a bespoke investment solution that aligns financial strategies with personal
                aspirations. <span className="text-2xl text-indigo-400">"</span>
              </blockquote>
            </div>

            {/* Right Column - Expert-Driven Approach */}
            <div className="bg-navy-800 rounded-xl shadow-xl p-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center mb-6">
                <div className="bg-navy-700 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">Expert-Driven Approach</h3>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                Unlike traditional investment options like mutual funds, PMS offers tailored investment strategies
                curated by expert portfolio managers. These services are ideal for seasoned investors looking for
                customized, research-driven solutions to build long-term wealth.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-navy-700 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-blue-300 mr-2" />
                    <h4 className="text-lg font-semibold text-white">Tailored Strategy</h4>
                  </div>
                  <p className="text-slate-300 text-sm">Customized portfolio management aligned with your goals</p>
                </div>

                <div className="bg-navy-700 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <LineChart className="w-5 h-5 text-blue-300 mr-2" />
                    <h4 className="text-lg font-semibold text-white">Research-Driven</h4>
                  </div>
                  <p className="text-slate-300 text-sm">Data-backed investment decisions for optimal returns</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Advantage 1 */}
            <div
              className="group bg-white rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
              style={{ "--delay": "0.4s" } as React.CSSProperties}
            >
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Tailored to Your Financial Goals</h3>
              <p className="text-gray-600 mb-4">
                Unlike one-size-fits-all investment vehicles, PMS offers customized portfolios. Whether your objective
                is capital preservation, aggressive growth, or income generation, your portfolio is built and managed
                specifically to reflect your goals, risk profile, and time horizon.
              </p>
              <blockquote className="italic text-blue-600 border-l-4 border-blue-500 pl-4 mt-4">
                "My financial goals are unique—so should be my investment strategy."
              </blockquote>
            </div>

            {/* Advantage 2 */}
            <div
              className="group bg-white rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
              style={{ "--delay": "0.5s" } as React.CSSProperties}
            >
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Active and Professional Management</h3>
              <p className="text-gray-600 mb-4">
                With PMS, your investments are in the hands of qualified, experienced fund managers who actively monitor
                the markets, track macroeconomic indicators, and make real-time decisions. This ensures your portfolio
                is agile, optimized, and responsive to changing market dynamics.
              </p>
              <blockquote className="italic text-purple-600 border-l-4 border-purple-500 pl-4 mt-4">
                "I want my portfolio to be managed by experts who know how to navigate volatility."
              </blockquote>
            </div>

            {/* Advantage 3 */}
            <div
              className="group bg-white rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
              style={{ "--delay": "0.6s" } as React.CSSProperties}
            >
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Enhanced Transparency and Control</h3>
              <p className="text-gray-600 mb-4">
                As an investor, you retain direct ownership of the underlying securities. This brings greater
                transparency and flexibility in tracking portfolio performance, reviewing asset allocation, and
                understanding every transaction made on your behalf.
              </p>
              <blockquote className="italic text-green-600 border-l-4 border-green-500 pl-4 mt-4">
                "I like knowing exactly where my money is and how it's performing."
              </blockquote>
            </div>

            {/* Advantage 4 */}
            <div
              className="group bg-white rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
              style={{ "--delay": "0.7s" } as React.CSSProperties}
            >
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calculator className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Efficient Tax Planning</h3>
              <p className="text-gray-600 mb-4">
                Because PMS accounts are held in your name, it offers greater tax efficiency. Gains and losses are
                reported directly in your account, giving you more flexibility in capital gain tax planning and
                offsetting losses.
              </p>
              <blockquote className="italic text-indigo-600 border-l-4 border-indigo-500 pl-4 mt-4">
                "I want to manage my tax liabilities without compromising on investment returns."
              </blockquote>
            </div>

            {/* Advantage 5 */}
            <div
              className="group bg-white rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
              style={{ "--delay": "0.8s" } as React.CSSProperties}
            >
              <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Focused, High-Conviction Portfolios</h3>
              <p className="text-gray-600 mb-4">
                PMS portfolios are concentrated and research-driven, often comprising 20–25 high-conviction stocks. This
                contrasts with mutual funds, which can be over-diversified. For investors who seek alpha generation, PMS
                can offer potentially higher returns over the long term.
              </p>
              <blockquote className="italic text-red-600 border-l-4 border-red-500 pl-4 mt-4">
                "I'm not looking for average returns—I want a portfolio that performs."
              </blockquote>
            </div>

            {/* Advantage 6 */}
            <div
              className="group bg-white rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
              style={{ "--delay": "0.9s" } as React.CSSProperties}
            >
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Detailed Reporting and Personalized Service</h3>
              <p className="text-gray-600 mb-4">
                Investors benefit from customized reporting, including performance snapshots, valuation insights,
                transaction statements, and periodic reviews with portfolio managers. This creates a more informed and
                collaborative wealth management experience.
              </p>
              <blockquote className="italic text-orange-600 border-l-4 border-orange-500 pl-4 mt-4">
                "I appreciate clear reporting and a relationship-based approach to investing."
              </blockquote>
            </div>
          </div>
        </div>

        {/* PMS vs Mutual Funds Comparison */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Why Choose PMS Over Mutual Funds?</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Understanding the key differences between these investment vehicles
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-4 px-6">
              <h3 className="text-xl font-bold text-white">Comparison: PMS vs Mutual Funds</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Feature
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider"
                    >
                      PMS
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider"
                    >
                      Mutual Funds
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ownership</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Direct (in your name)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Pooled (in fund's name)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Customization</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">High – tailored to your goals</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Low – standard schemes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Portfolio Concentration
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Focused (15–25 stocks)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Diversified (50–70 stocks)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Reporting Transparency
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Detailed, Real-time</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">NAV-based, periodic</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Investment Control
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Managerial/Personalized</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Fund Manager controlled</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Performance Comparison Graph */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Performance Comparison: PMS vs Mutual Funds</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">5-Year CAGR (%) as of 31/03/2025</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <PerformanceComparisonChart />
          </div>
        </div>

        <div className="mb-16">
          <Card className="overflow-hidden bg-gradient-to-b from-navy-900 to-navy-800 text-white shadow-xl border border-blue-900/30">
            <div className="p-8 md:p-10">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-6 animate-fade-in">
                  Portfolio Management Services (PMS) That Think Beyond Average
                </h2>

                <div
                  className="mb-8 bg-blue-900/30 p-6 rounded-lg backdrop-blur-sm animate-slide-up"
                  style={{ "--delay": "0.2s" } as React.CSSProperties}
                >
                  <p className="text-xl font-medium text-white italic mb-2">
                    "Why settle for passive returns when your capital can actively outperform?"
                  </p>
                  <p className="text-lg text-blue-100">
                    At Bharat Alternates, we believe investing isn't just about returns — it's about purpose. PMS is not
                    built for the crowd; it's built for the discerning investor who values clarity, conviction, and
                    control.
                  </p>
                </div>

                <div
                  className="mb-8 bg-blue-900/30 p-6 rounded-lg backdrop-blur-sm animate-slide-up"
                  style={{ "--delay": "0.4s" } as React.CSSProperties}
                >
                  <p className="text-xl font-medium text-white italic mb-2">
                    "Real wealth is quiet, focused, and built on conviction — not convenience."
                  </p>
                  <p className="text-lg text-blue-100">
                    Unlike mutual funds that dilute potential across dozens of stocks, PMS strategies focus on quality
                    over quantity — identifying high-conviction opportunities that align with your long-term vision.
                  </p>
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-slide-up"
                  style={{ "--delay": "0.6s" } as React.CSSProperties}
                >
                  <div className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-blue-50">SEBI-regulated PMS offerings</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-blue-50">Curated for HNIs, UHNIs, NRIs</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-blue-50">Concentrated, alpha-driven strategies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-blue-50">Transparent reporting & expert access</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="flex justify-center animate-slide-up"
                  style={{ "--delay": "0.8s" } as React.CSSProperties}
                >
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-700/50 text-white text-lg">
                    <span className="mr-2"></span> Start investing with intent.
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        {/* Trending Now: Why PMS is Gaining Unstoppable Momentum in India (2024–25) */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3 animate-fade-in relative inline-block">
              Trending Now: Why PMS is Gaining Unstoppable Momentum in India (2024–25)
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              The Indian equity market is thriving, and Portfolio Management Services (PMS) are at the forefront of this
              investment revolution.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Indian Stock Market Performance Card */}
            <div
              className="bg-white rounded-xl overflow-hidden shadow-xl animate-slide-in-left"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-4 px-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Indian Stock Market Performance</h3>
                  <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                    <LineChart className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-blue-100 text-sm">As of March 31, 2025</p>
              </div>

              <div className="p-6">
                <p className="text-slate-700 mb-6">
                  India's stock market has been resilient, showing substantial growth across key indices despite some
                  market volatility. Here's a snapshot of the market as of March 31, 2025:
                </p>

                {/* Fancy Table with Hover Effects */}
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-50 to-blue-100">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-blue-900 border-b-2 border-blue-200">
                          Index
                        </th>
                        <th className="py-3 px-4 text-right text-sm font-semibold text-blue-900 border-b-2 border-blue-200">
                          Closing Value
                          <br />
                          (31-Mar-2025)
                        </th>
                        <th className="py-3 px-4 text-right text-sm font-semibold text-blue-900 border-b-2 border-blue-200">
                          PE Ratio
                          <br />
                          (Mar 2025)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="py-3 px-4 text-sm text-blue-800 font-medium border-b border-blue-100">
                          NIFTY 50
                        </td>
                        <td className="py-3 px-4 text-right text-sm text-slate-700 border-b border-blue-100 font-mono">
                          23,165.70
                        </td>
                        <td className="py-3 px-4 text-right text-sm text-slate-700 border-b border-blue-100 font-mono">
                          20.0
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="py-3 px-4 text-sm text-blue-800 font-medium border-b border-blue-100">
                          NIFTY 500
                        </td>
                        <td className="py-3 px-4 text-right text-sm text-slate-700 border-b border-blue-100 font-mono">
                          21,070.75
                        </td>
                        <td className="py-3 px-4 text-right text-sm text-slate-700 border-b border-blue-100 font-mono">
                          22.5
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="py-3 px-4 text-sm text-blue-800 font-medium border-b border-blue-100">
                          Nifty Midcap 100
                        </td>
                        <td className="py-3 px-4 text-right text-sm text-slate-700 border-b border-blue-100 font-mono">
                          51,229.60
                        </td>
                        <td className="py-3 px-4 text-right text-sm text-slate-700 border-b border-blue-100 font-mono">
                          33.1
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="py-3 px-4 text-sm text-blue-800 font-medium">Nifty Smallcap 100</td>
                        <td className="py-3 px-4 text-right text-sm text-slate-700 font-mono">16,410.20</td>
                        <td className="py-3 px-4 text-right text-sm text-slate-700 font-mono">29.5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Interactive Chart Visualization */}
                <div className="relative h-64 bg-gray-50 rounded-lg p-4 mb-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/30"></div>
                  <div className="relative h-full">
                    {/* Chart Line - NIFTY 50 */}
                    <div className="absolute bottom-4 left-0 right-0 h-32">
                      <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <path
                          d="M0,35 L5,32 L10,34 L15,30 L20,31 L25,27 L30,25 L35,26 L40,20 L45,22 L50,18 L55,15 L60,17 L65,13 L70,10 L75,12 L80,8 L85,5 L90,7 L95,3 L100,1"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          className="animate-draw-line"
                        />
                        <circle cx="100" cy="1" r="2" fill="#3b82f6" className="animate-pulse" />
                      </svg>
                    </div>

                    {/* Chart Line - NIFTY MIDCAP */}
                    <div className="absolute bottom-4 left-0 right-0 h-32">
                      <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <path
                          d="M0,30 L5,32 L10,28 L15,27 L20,25 L25,28 L30,24 L35,22 L40,18 L45,15 L50,17 L55,13 L60,10 L65,8 L70,10 L75,6 L80,4 L85,7 L90,3 L95,2 L100,0"
                          fill="none"
                          stroke="#8b5cf6"
                          strokeWidth="2"
                          strokeDasharray="2,2"
                          className="animate-draw-line"
                          style={{ animationDelay: "0.5s" }}
                        />
                        <circle cx="100" cy="0" r="2" fill="#8b5cf6" className="animate-pulse" />
                      </svg>
                    </div>

                    {/* Labels */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 text-xs text-gray-500">
                      <span>2020</span>
                      <span>2021</span>
                      <span>2022</span>
                      <span>2023</span>
                      <span>2024</span>
                      <span>2025</span>
                    </div>

                    <div className="absolute top-2 left-2 flex space-x-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                        <span className="text-xs text-gray-600">NIFTY 50</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
                        <span className="text-xs text-gray-600">NIFTY MIDCAP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insights Card */}
            <div
              className="bg-white rounded-xl overflow-hidden shadow-xl animate-slide-in-right"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 py-4 px-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Key Insights from the Latest Market Trends</h3>
                  <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  {/* Insight 1 */}
                  <div className="group relative bg-gradient-to-br from-blue-50 to-white p-5 rounded-lg shadow-sm border border-blue-100 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="absolute -right-3 -top-3 bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-2 pr-8">
                      Moderate Valuations Across Large-Caps
                    </h4>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full mt-1">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="text-slate-600 text-sm">
                        The Nifty 50 index, with a PE ratio of 20.0, offers fairly valued large-cap stocks for investors
                        seeking steady returns. It is an attractive choice for those looking for stability with the best
                        PMS in India.
                      </p>
                    </div>
                    <div className="mt-3 h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full animate-grow-x-20"
                        style={{ animationDelay: "0.6s" }}
                      ></div>
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-gray-500">
                      <span>Value</span>
                      <span>Growth</span>
                    </div>
                  </div>

                  {/* Insight 2 */}
                  <div className="group relative bg-gradient-to-br from-purple-50 to-white p-5 rounded-lg shadow-sm border border-purple-100 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="absolute -right-3 -top-3 bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h4 className="text-lg font-semibold text-purple-800 mb-2 pr-8">
                      Strong Growth in Mid and Small-Caps
                    </h4>
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-100 p-2 rounded-full mt-1">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                      </div>
                      <p className="text-slate-600 text-sm">
                        Mid and small-cap segments like the Nifty Midcap 100 and Nifty Smallcap 100 offer high potential
                        returns, with PE ratios of 33.1 and 29.5, respectively. This presents a compelling opportunity
                        for investors seeking higher growth through top PMS in India.
                      </p>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-purple-400 rounded-full animate-grow-x-30"
                            style={{ animationDelay: "0.7s" }}
                          ></div>
                        </div>
                        <div className="mt-1 text-center text-xs text-gray-500">MidCap</div>
                      </div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-purple-600 rounded-full animate-grow-x-40"
                            style={{ animationDelay: "0.8s" }}
                          ></div>
                        </div>
                        <div className="mt-1 text-center text-xs text-gray-500">SmallCap</div>
                      </div>
                    </div>
                  </div>

                  {/* Insight 3 */}
                  <div className="group relative bg-gradient-to-br from-green-50 to-white p-5 rounded-lg shadow-sm border border-green-100 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="absolute -right-3 -top-3 bg-green-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h4 className="text-lg font-semibold text-green-800 mb-2 pr-8">Resilient Earnings Growth</h4>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 p-2 rounded-full mt-1">
                        <LineChart className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="text-slate-600 text-sm">
                        India's corporate earnings are resilient, especially in financials and government infrastructure
                        sectors, which have been favored by foreign investors. These sectors continue to offer
                        consistent growth, ideal for top PMS in India.
                      </p>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="flex flex-col items-center">
                        <div className="relative w-full h-16">
                          <div
                            className="absolute bottom-0 left-0 right-0 bg-green-200 rounded-t-md animate-grow-y-60"
                            style={{ animationDelay: "0.9s" }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500">Financials</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="relative w-full h-16">
                          <div
                            className="absolute bottom-0 left-0 right-0 bg-green-300 rounded-t-md animate-grow-y-80"
                            style={{ animationDelay: "1s" }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500">Infra</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="relative w-full h-16">
                          <div
                            className="absolute bottom-0 left-0 right-0 bg-green-400 rounded-t-md animate-grow-y-40"
                            style={{ animationDelay: "1.1s" }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500">Tech</div>
                      </div>
                    </div>
                  </div>

                  {/* Insight 4 */}
                  <div className="group relative bg-gradient-to-br from-amber-50 to-white p-5 rounded-lg shadow-sm border border-amber-100 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="absolute -right-3 -top-3 bg-amber-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h4 className="text-lg font-semibold text-amber-800 mb-2 pr-8">FPI Inflows Resurgence</h4>
                    <div className="flex items-start space-x-3">
                      <div className="bg-amber-100 p-2 rounded-full mt-1">
                        <ArrowRight className="w-5 h-5 text-amber-600" />
                      </div>
                      <p className="text-slate-600 text-sm">
                        Despite a dip in FPI inflows in FY 2024-25, March 2025 saw a strong rebound with $3.05 billion
                        in foreign capital entering India. This renewed confidence in the Indian market highlights the
                        best PMS in India for long-term wealth creation.
                      </p>
                    </div>
                    <div className="mt-4 relative h-12">
                      <div className="absolute inset-0 flex items-end">
                        <div className="h-2 bg-amber-200 flex-grow"></div>
                        <div className="h-3 bg-amber-300 w-8 animate-pulse"></div>
                        <div className="h-5 bg-amber-400 w-8 animate-pulse"></div>
                        <div className="h-3 bg-amber-300 w-8 animate-pulse"></div>
                        <div className="h-8 bg-amber-500 w-10 animate-bounce-subtle"></div>
                        <div className="h-3 bg-amber-300 w-8 animate-pulse"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 pt-1 text-xs text-gray-500 border-t border-gray-300">
                        <span>Oct</span>
                        <span>Nov</span>
                        <span>Dec</span>
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PMS Advantage Banner */}
          <div
            className="mt-10 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-6 md:p-8 shadow-2xl animate-fade-in"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Leverage These Market Trends?</h3>
                <p className="text-blue-200">
                  Our PMS strategies are designed to capitalize on these emerging opportunities while managing risk.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-white hover:bg-blue-50 text-indigo-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group animate-pulse-slow"
                asChild
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Explore PMS Strategies
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Why PMS Is The Preferred Investment Choice Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3 animate-fade-in relative inline-block">
              Why PMS Is The Preferred Investment Choice in 2024-25?
            </h2>
          </div>

          <div className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 right-10 w-40 h-40 bg-blue-600/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-40 left-10 w-40 h-40 bg-purple-600/10 rounded-full filter blur-3xl"></div>
            </div>

            {/* Main Content */}
            <div className="relative max-w-5xl mx-auto">
              <div
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-10 animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <p className="text-slate-300 text-lg leading-relaxed">
                  As India's economy grows, PMS is becoming the preferred option for high-net-worth individuals (HNIs),
                  ultra-high-net-worth individuals (UHNIs), and NRIs seeking customized investment solutions. Here's why
                  PMS is increasingly gaining traction:
                </p>
              </div>

              {/* PMS Advantages Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {/* Advantage 1 - Alpha Generation */}
                <div
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
                  style={{ "--delay": "0.4s" } as React.CSSProperties}
                >
                  <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transform transition-transform duration-300">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white ml-4">Alpha Generation</h3>
                    </div>
                    <p className="text-slate-300 text-sm">
                      The best PMS in India focuses on generating outperformance compared to traditional benchmarks. PMS
                      offers active management and opportunities for higher returns by capitalizing on market trends.
                    </p>

                    {/* Alpha Graph */}
                    <div className="mt-4 h-10 relative">
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-slate-600"></div>
                      <div className="absolute left-0 bottom-0 h-3 w-full bg-slate-700/50 flex items-end">
                        <div className="h-3 bg-slate-500 w-10"></div>
                        <div className="h-4 bg-slate-500 w-10"></div>
                        <div className="h-5 bg-slate-500 w-10"></div>
                        <div className="h-3 bg-slate-500 w-10"></div>
                        <div className="h-4 bg-slate-500 w-10"></div>
                        <div className="h-7 bg-blue-500 w-10 animate-pulse"></div>
                        <div className="h-9 bg-blue-600 w-10 group-hover:animate-bounce-subtle transition-all duration-300"></div>
                      </div>
                    </div>
                    <div className="mt-1 text-center text-xs text-slate-400">
                      <span>PMS Alpha vs Market Index</span>
                    </div>
                  </div>
                </div>

                {/* Advantage 2 - Research-Driven Strategies */}
                <div
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
                  style={{ "--delay": "0.5s" } as React.CSSProperties}
                >
                  <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-12 h-12 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transform transition-transform duration-300">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white ml-4">Research-Driven</h3>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Top PMS in India are backed by in-house research teams, sectoral analysts, and AI-driven models,
                      ensuring your portfolio is aligned with evolving market dynamics.
                    </p>

                    {/* Research Icons */}
                    <div className="mt-4 flex justify-between items-center p-2 bg-slate-800/30 rounded-lg">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1">Research</div>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                          <div
                            className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1">Analytics</div>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                          <div
                            className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1">AI Models</div>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                          <div
                            className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.6s" }}
                          ></div>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1">Analysts</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advantage 3 - Tailored Asset Allocation */}
                <div
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
                  style={{ "--delay": "0.6s" } as React.CSSProperties}
                >
                  <div className="h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-green-500 to-green-700 w-12 h-12 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transform transition-transform duration-300">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white ml-4">Tailored Allocation</h3>
                    </div>
                    <p className="text-slate-300 text-sm">
                      With flexibility to adapt between large-cap, mid-cap, and small-cap stocks, as well as
                      international exposure, PMS allows for personalized, optimal risk-reward strategies.
                    </p>

                    {/* Asset Allocation Pie */}
                    <div className="mt-4 flex justify-center">
                      <div className="relative w-20 h-20">
                        <div className="absolute inset-0 rounded-full border-4 border-t-green-400 border-r-blue-400 border-b-purple-400 border-l-amber-400 animate-spin-slow"></div>
                        <div className="absolute inset-2 bg-slate-800 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">Custom</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advantage 4 - Personalized Service */}
                <div
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
                  style={{ "--delay": "0.7s" } as React.CSSProperties}
                >
                  <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-amber-500 to-amber-700 w-12 h-12 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transform transition-transform duration-300">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white ml-4">Personalized Service</h3>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Enjoy direct access to relationship managers and fund managers, ensuring that each portfolio is
                      customized to meet your individual goals.
                    </p>

                    {/* Personal Service Illustration */}
                    <div className="mt-4 flex justify-center items-center space-x-2">
                      <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center border-2 border-amber-400">
                        <Users className="w-4 h-4 text-amber-300" />
                      </div>
                      <div className="w-8 h-1 bg-amber-500"></div>
                      <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center group-hover:scale-110 transform transition-transform duration-300 border-2 border-amber-400">
                        <Star className="w-4 h-4 text-amber-300" />
                      </div>
                      <div className="w-8 h-1 bg-amber-500"></div>
                      <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center border-2 border-amber-400">
                        <CheckCircle className="w-4 h-4 text-amber-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Start Investing in PMS Section */}
        <div className="mb-20">
          <Card className="relative overflow-hidden bg-gradient-to-b from-navy-950 to-navy-900 border-none">
            <div className="px-4 md:px-8 py-12">
              <div className="text-center mb-12 space-y-3">
                <h2 className="text-3xl font-bold text-white mb-2 animate-fade-in">How to Start Investing in PMS</h2>
                <p className="text-xl text-blue-100 font-medium animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  The Onboarding Process Simplified
                </p>

                <div className="mt-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <div className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 px-6 py-4 rounded-xl backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                      <span className="inline-block animate-bounce-subtle">🚀</span>
                      Get Started with PMS in 7 Simple Steps
                    </h3>
                    <p className="text-slate-300 mt-2">
                      Investing in a Portfolio Management Service (PMS) is easier than you think! Here's how it works,
                      step-by-step:
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Component */}
              <div className="relative max-w-5xl mx-auto">
                {/* Timeline track */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full z-10 md:transform md:-translate-x-1/2"></div>

                {/* Step 1 - Left side */}
                <div className="flex flex-col md:flex-row items-start mb-20 relative">
                  <div className="md:w-1/2 md:pr-12 pl-12 md:pl-0">
                    <div
                      className="bg-navy-800 rounded-xl p-6 shadow-lg border border-slate-700 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:-translate-y-1 animate-slide-in-left"
                      style={{ animationDelay: "0.3s" }}
                    >
                      <h4 className="text-xl font-bold text-white flex gap-3 items-center mb-3">
                        <span className="text-3xl animate-bounce-subtle">🔍</span>
                        Eligibility Check
                      </h4>
                      <ul className="text-slate-300 space-y-2">
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>Minimum investment required: ₹50 Lakhs (as per SEBI guidelines).</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>
                            You can invest as an individual, joint holder, NRI, or through a company/family trust.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 z-20">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] ring-4 ring-navy-900">
                      <span className="font-bold text-white text-base md:text-lg">1</span>
                    </div>
                  </div>

                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>

                {/* Step 2 - Right side */}
                <div className="flex flex-col md:flex-row items-start mb-20 relative">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 z-20">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] ring-4 ring-navy-900">
                      <span className="font-bold text-white text-base md:text-lg">2</span>
                    </div>
                  </div>

                  <div className="md:w-1/2 md:pl-12 pl-12">
                    <div
                      className="bg-navy-800 rounded-xl p-6 shadow-lg border border-slate-700 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:-translate-y-1 animate-slide-in-right"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <h4 className="text-xl font-bold text-white flex gap-3 items-center mb-3">
                        <span className="text-3xl animate-bounce-subtle">🎯</span>
                        Choose the Right PMS
                      </h4>
                      <ul className="text-slate-300 space-y-2">
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>Based on your financial goals, risk appetite, and investment horizon.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>We help you shortlist the Best PMS in India tailored to your profile.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 3 - Left side */}
                <div className="flex flex-col md:flex-row items-start mb-20 relative">
                  <div className="md:w-1/2 md:pr-12 pl-12 md:pl-0">
                    <div
                      className="bg-navy-800 rounded-xl p-6 shadow-lg border border-slate-700 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:-translate-y-1 animate-slide-in-left"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <h4 className="text-xl font-bold text-white flex gap-3 items-center mb-3">
                        <span className="text-3xl animate-bounce-subtle">📋</span>
                        Documentation
                      </h4>
                      <p className="text-slate-300 mb-3">Just like opening a bank or Demat account:</p>
                      <ul className="text-slate-300 space-y-2">
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>PAN Card</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>Aadhar / Passport (for ID & address proof)</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>Canceled cheque / Bank statement</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>KYC compliance</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>FATCA declaration (for tax compliance)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 z-20">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] ring-4 ring-navy-900">
                      <span className="font-bold text-white text-base md:text-lg">3</span>
                    </div>
                  </div>

                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>

                {/* Step 4 - Right side */}
                <div className="flex flex-col md:flex-row items-start mb-20 relative">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 z-20">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] ring-4 ring-navy-900">
                      <span className="font-bold text-white text-base md:text-lg">4</span>
                    </div>
                  </div>

                  <div className="md:w-1/2 md:pl-12 pl-12">
                    <div
                      className="bg-navy-800 rounded-xl p-6 shadow-lg border border-slate-700 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:-translate-y-1 animate-slide-in-right"
                      style={{ animationDelay: "0.6s" }}
                    >
                      <h4 className="text-xl font-bold text-white flex gap-3 items-center mb-3">
                        <span className="text-3xl animate-bounce-subtle">📝</span>
                        Account Opening & Agreement
                      </h4>
                      <ul className="text-slate-300 space-y-2">
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>A PMS account is opened with the selected provider.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>You sign an agreement that details the strategy, fees, and responsibilities.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>A Demat and bank account are linked to your PMS for transactions.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 5 - Left side */}
                <div className="flex flex-col md:flex-row items-start mb-20 relative">
                  <div className="md:w-1/2 md:pr-12 pl-12 md:pl-0">
                    <div
                      className="bg-navy-800 rounded-xl p-6 shadow-lg border border-slate-700 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:-translate-y-1 animate-slide-in-left"
                      style={{ animationDelay: "0.7s" }}
                    >
                      <h4 className="text-xl font-bold text-white flex gap-3 items-center mb-3">
                        <span className="text-3xl animate-bounce-subtle">💰</span>
                        Fund Transfer
                      </h4>
                      <ul className="text-slate-300 space-y-2">
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>You transfer ₹50 lakhs (or more) to the PMS custodian account.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>Once the funds are received, portfolio construction begins.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 z-20">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] ring-4 ring-navy-900">
                      <span className="font-bold text-white text-base md:text-lg">5</span>
                    </div>
                  </div>

                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>

                {/* Step 6 - Right side */}
                <div className="flex flex-col md:flex-row items-start mb-20 relative">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 z-20">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] ring-4 ring-navy-900">
                      <span className="font-bold text-white text-base md:text-lg">6</span>
                    </div>
                  </div>

                  <div className="md:w-1/2 md:pl-12 pl-12">
                    <div
                      className="bg-navy-800 rounded-xl p-6 shadow-lg border border-slate-700 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:-translate-y-1 animate-slide-in-right"
                      style={{ animationDelay: "0.8s" }}
                    >
                      <h4 className="text-xl font-bold text-white flex gap-3 items-center mb-3">
                        <span className="text-3xl animate-bounce-subtle">📊</span>
                        Go Live & Track Performance
                      </h4>
                      <p className="text-slate-300 mb-3">Your portfolio is now custom-managed by experts.</p>
                      <p className="text-slate-300 mb-2">You'll receive:</p>
                      <ul className="text-slate-300 space-y-2">
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>Monthly reports</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>Access to a dashboard</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>Regular updates from your Relationship Manager</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 7 - Right Side */}
                <div className="flex flex-col md:flex-row items-start mb-16 relative">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 z-20">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] ring-4 ring-navy-900">
                      <span className="font-bold text-white text-base md:text-lg">7</span>
                    </div>
                  </div>

                  <div className="md:w-1/2 md:pl-12 pl-12">
                    <div
                      className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-6 shadow-lg border border-blue-700 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1 animate-slide-in-right"
                      style={{ animationDelay: "0.9s" }}
                    >
                      <h4 className="text-xl font-bold text-white flex gap-3 items-center mb-3">
                        <span className="text-3xl animate-bounce-subtle">🔄</span>
                        Stay Engaged
                      </h4>
                      <ul className="text-slate-300 space-y-2">
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>You can review, interact, and make informed decisions anytime.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>The PMS team makes changes based on market trends and your evolving goals.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Taxation Section - Updated */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3 animate-fade-in">
              Taxation of Portfolio Management Services (PMS) in India – FY 2024–25
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Understand How Your PMS Investments Are Taxed
            </p>
          </div>

          <div
            className="bg-white rounded-xl shadow-xl overflow-hidden animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="p-8">
              <p className="text-gray-700 mb-8">
                Portfolio Management Services (PMS) offer customized, actively managed investment portfolios tailored to
                individual goals. However, understanding the tax implications of PMS is crucial for planning and
                optimizing your returns. Here's a comprehensive breakdown of how PMS is taxed in India.
              </p>

              {/* Ownership Structure */}
              <div className="mb-10 border-b border-gray-200 pb-8">
                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      1
                    </div>
                    Ownership Structure in PMS
                  </h3>
                  <p className="text-gray-700 mb-4">
                    In PMS, all securities—such as stocks and bonds—are held in the name of the investor, not in a
                    pooled structure like mutual funds. This means:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="text-green-600 flex-shrink-0 mt-1">✅</div>
                      <p className="text-gray-700">Tax liability arises directly in the investor's hands</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="text-green-600 flex-shrink-0 mt-1">✅</div>
                      <p className="text-gray-700">
                        All profits/losses, dividends, and interest are reflected in your own account
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Types of Tax Liabilities */}
              <div className="mb-10">
                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      2
                    </div>
                    Types of Tax Liabilities in PMS
                  </h3>
                  <p className="text-gray-700 mb-4">PMS investors may face three primary tax components:</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-navy-900 mb-3">A. Capital Gains Tax</h4>
                    <p className="text-gray-700 mb-4">
                      This applies to profits made from the buying and selling of securities (mostly stocks).
                    </p>

                    <div className="pl-4 border-l-4 border-green-500 mb-4">
                      <h5 className="text-navy-900 font-semibold flex items-center gap-2 mb-2">
                        <span className="text-green-600 text-xl">🟢</span>
                        Listed Equity Shares
                      </h5>
                      <div className="pl-6 space-y-3">
                        <div>
                          <div className="font-medium mb-1">
                            Short-Term Capital Gains (STCG): If shares are sold within 12 months
                          </div>
                          <div className="pl-4 text-gray-700">🠚 Tax Rate: 20% (plus surcharge & cess)</div>
                        </div>
                        <div>
                          <div className="font-medium mb-1">
                            Long-Term Capital Gains (LTCG): If held for more than 12 months
                          </div>
                          <div className="pl-4 text-gray-700">
                            🠚 Tax Rate: 12.5% on gains exceeding ₹1.25 lakh/year (no indexation benefit)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tax Table */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-navy-900 mb-3">PMS Tax Summary</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-navy-900 text-white">
                          <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Tax Type</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">PMS Tax Rule</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="bg-white hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">Short-Term Gains</td>
                            <td className="px-6 py-4 text-sm text-gray-700">Taxed @20%</td>
                          </tr>
                          <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">Long-Term Gains</td>
                            <td className="px-6 py-4 text-sm text-gray-700">Taxed @12% above ₹1.25L exemption</td>
                          </tr>
                          <tr className="bg-white hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">Dividends</td>
                            <td className="px-6 py-4 text-sm text-gray-700">Taxed as per investor's slab</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Tax Information */}
              <div className="mb-10">
                {/* Unlisted Shares */}
                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <h5 className="text-navy-900 font-semibold flex items-center gap-2 mb-4">
                    <span className="text-blue-600 text-xl">🔷</span>
                    Unlisted Shares, Bonds, or Debt Instruments
                  </h5>
                  <div className="pl-6 space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1">●</div>
                      <p className="text-gray-700">
                        <span className="font-medium">Short-Term (held &lt;36 months):</span> Taxed at slab rate
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1">●</div>
                      <p className="text-gray-700">
                        <span className="font-medium">Long-Term (held &gt;36 months):</span> Taxed at 20% with
                        indexation
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 bg-blue-100/50 p-3 rounded-lg">
                    <p className="text-gray-700 text-sm italic">
                      Note: Portfolio managers provide detailed capital gain statements to assist in filing returns.
                    </p>
                  </div>
                </div>

                {/* Dividend Income */}
                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <h4 className="text-lg font-semibold text-navy-900 mb-3">B. Dividend Income</h4>
                  <p className="text-gray-700 mb-4">
                    Dividends received from companies in the PMS portfolio are added to the investor's income and taxed
                    at their applicable slab rate.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="text-blue-600 flex-shrink-0 mt-1">👉</div>
                      <p className="text-gray-700">For HNIs, this could be 30% or higher (plus surcharge and cess).</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="text-blue-600 flex-shrink-0 mt-1">💡</div>
                      <p className="text-gray-700">
                        TDS (Tax Deducted at Source) of 10% is applicable if dividend income exceeds ₹50 from a
                        company in a financial year.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interest Income */}
                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <h4 className="text-lg font-semibold text-navy-900 mb-3">C. Interest Income (if any)</h4>
                  <p className="text-gray-700">
                    In case the PMS portfolio includes bonds, NCDs, or other debt instruments, any interest earned is
                    taxable as 'Income from Other Sources' at the investor's income tax slab rate.
                  </p>
                </div>

                {/* Tax Treatment of Fees */}
                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      3
                    </div>
                    Tax Treatment of PMS Fees & Charges
                  </h3>
                  <p className="text-gray-700 mb-4">
                    PMS typically includes charges like management fees, brokerage, audit fees, and custodian charges.
                    Here's how these are treated:
                  </p>

                  <div className="bg-white p-4 rounded-lg mb-4">
                    <h5 className="font-semibold text-navy-900 mb-3 flex items-center gap-2">
                      <div className="text-green-600">✅</div>
                      Can You Claim PMS Expenses?
                    </h5>
                    <p className="text-gray-700 mb-3">Yes—but only against capital gains. Under the Income Tax Act:</p>
                    <div className="pl-6 space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">●</div>
                        <p className="text-gray-700">
                          Fees and charges (other than STT) can be claimed as a deduction from capital gains under
                          Section 48.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">●</div>
                        <p className="text-gray-700">
                          Expenses must be invoiced and paid separately from the investment corpus.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">●</div>
                        <p className="text-gray-700">
                          This is applicable only for non-discretionary PMS (in most interpretations), but investors can
                          check with their tax advisors.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-navy-900 mb-3 flex items-center gap-2">
                      <div className="text-red-600">❌</div>
                      Note:
                    </h5>
                    <p className="text-gray-700">
                      STT (Securities Transaction Tax), GST, and entry/exit load charges cannot be claimed as
                      deductions.
                    </p>
                  </div>
                </div>

                {/* Advance Tax */}
                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      4
                    </div>
                    Advance Tax Applicability
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Since the tax liability is on the investor, advance tax provisions apply. You must estimate and pay
                    advance tax quarterly if:
                  </p>
                  <div className="pl-6 space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1">●</div>
                      <p className="text-gray-700">Your total tax liability for the year exceeds ₹10,000</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1">●</div>
                      <p className="text-gray-700">
                        Capital gains/dividend income through PMS are not subject to TDS in full
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-blue-100/50 p-3 rounded-lg">
                    <div className="text-blue-600 flex-shrink-0 mt-1">💡</div>
                    <p className="text-gray-700">
                      Avoid interest under Sections 234B & 234C by planning quarterly tax payments.
                    </p>
                  </div>
                </div>

                {/* Tax Filing */}
                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      5
                    </div>
                    Tax Filing & Documentation
                  </h3>
                  <p className="text-gray-700 mb-4">Your PMS provider will give:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-3 rounded-lg flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1">●</div>
                      <p className="text-gray-700">Realized Gain Reports (STCG/LTCG)</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1">●</div>
                      <p className="text-gray-700">Dividend and Interest Statements</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1">●</div>
                      <p className="text-gray-700">Expense Summary for Fee Deduction</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1">●</div>
                      <p className="text-gray-700">Audit Reports (if applicable)</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    These are crucial for accurate ITR filing, usually under ITR-2 or ITR-3, depending on other income
                    sources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3 animate-fade-in">
              Debunking Common Myths About Portfolio Management Services (PMS)
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Despite growing awareness, several misconceptions surround PMS in India
            </p>
          </div>

          <div
            className="bg-white rounded-xl shadow-xl overflow-hidden animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">The Truth Behind PMS Myths</h3>
              <p className="text-blue-100">
                At Bharat Alternates, we believe in empowering investors with clarity and facts. Here's the truth behind
                the most common PMS myths:
              </p>
            </div>

            <div className="p-8">
              <div className="space-y-4">
                {[
                  {
                    myth: "PMS is only for ultra-rich investors",
                    reality: "SEBI has made PMS accessible to investors with ₹50 lakhs+",
                    icon: "💰",
                  },
                  {
                    myth: "PMS strategies are high-risk and inconsistent",
                    reality: "Depends on the fund — many PMS consistently outperform indices like Nifty 50",
                    icon: "📈",
                  },
                  {
                    myth: "PMS lacks transparency compared to mutual funds",
                    reality: "PMS offers complete visibility — direct stock ownership + real-time reports",
                    icon: "👁️",
                  },
                  {
                    myth: "Mutual funds are always cheaper than PMS",
                    reality: "PMS may have higher costs, but offers alpha, flexibility, and lower churn",
                    icon: "💸",
                  },
                  {
                    myth: "You can't exit PMS investments easily",
                    reality: "PMS offers better liquidity than most alternatives — usually T+3 settlement",
                    icon: "🔄",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row gap-6 border-b border-gray-100 pb-4 group hover:bg-gray-50 rounded-lg p-4 transition-all duration-300"
                  >
                    <div className="sm:w-5/12">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <X className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-navy-900">{item.myth}</h4>
                          <p className="text-sm text-red-500 font-medium">Myth</p>
                        </div>
                      </div>
                    </div>

                    <div className="sm:w-7/12">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl">{item.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-navy-900">Reality</h4>
                          <p className="text-gray-700">{item.reality}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white mb-3">Our PMS Evaluation Framework</h3>
              <p className="text-slate-300 max-w-2xl mx-auto">We use 8 critical factors to rate PMS:</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { num: "1", title: "Manager Track Record", icon: "👥" },
                { num: "2", title: "Stock Selection Process", icon: "🔍" },
                { num: "3", title: "Sector Allocation", icon: "📊" },
                { num: "4", title: "Portfolio Churn", icon: "🔄" },
                { num: "5", title: "Historical Drawdowns", icon: "📉" },
                { num: "6", title: "Return Consistency", icon: "📈" },
                { num: "7", title: "Volatility Index", icon: "📊" },
                { num: "8", title: "Fee Structure", icon: "💰" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-xl overflow-hidden shadow-lg border border-blue-700/50 group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                      {item.num}
                    </div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-900/90 to-indigo-900/90 rounded-xl p-8 shadow-lg border border-blue-700/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-4">Not Sure Which PMS Is Right for You?</h3>
                  <p className="text-blue-100 mb-6">
                    Every investor's journey is unique. That's why we use a simple 8-point framework to help you quietly
                    assess what truly fits your goals — no jargon, no hard sell.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 mb-6">
                    <div className="flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <ClipboardCheck className="w-5 h-5 text-blue-200" />
                      </div>
                      <p className="text-blue-100">
                        We'll share a custom PMS Scorecard, walk you through it, and answer any questions you have.
                      </p>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Handshake className="w-5 h-5 text-blue-200" />
                      </div>
                      <p className="text-blue-100">If it helps, great. If not, no pressure.</p>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="bg-white hover:bg-blue-50 text-navy-900 font-semibold px-8 py-6 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 group"
                    asChild
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      <PhoneCall className="w-5 h-5" />
                      Let's Talk – Schedule a Free Call
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>

                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <Image
                      src="/images/investment-management.png"
                      alt="PMS Evaluation"
                      width={300}
                      height={300}
                      className="relative z-10"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/300x300/0f172a/e2e8f0?text=PMS+Evaluation"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Get answers to common questions about Portfolio Management Services
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Basic Questions */}
            <div className="lg:col-span-2">
              <Card className="bg-white h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">Basic Understanding</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">What is PMS?</h4>
                      <p className="text-slate-700">
                        Portfolio Management Service (PMS) is a professional investment service where expert managers
                        handle your investment portfolio. They create and manage a customized portfolio based on your
                        financial goals and risk appetite.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">What is equity PMS?</h4>
                      <p className="text-slate-700">
                        Equity PMS focuses on investing in stocks and equity-related instruments. Portfolio managers
                        select stocks based on thorough research and market analysis to generate higher returns over the
                        long term.
                      </p>
                      <ul className="mt-2 space-y-1 text-slate-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Active stock selection and monitoring</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Higher return potential with managed risk</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">What is debt PMS?</h4>
                      <p className="text-slate-700">
                        Debt PMS invests in fixed-income securities like bonds, government securities, and other debt
                        instruments. It aims to provide steady returns with lower risk compared to equity investments.
                      </p>
                      <ul className="mt-2 space-y-1 text-slate-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Regular income generation</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Lower volatility than equity</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Investment Requirements */}
            <div>
              <Card className="bg-white h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">Investment Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">What is the minimum investment?</h4>
                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-700 font-medium">Starting from</span>
                        <span className="text-blue-600 font-bold">₹50 Lakhs</span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full w-1/2"></div>
                      </div>
                    </div>
                    <p className="text-slate-700">
                      The minimum investment amount typically ranges from ₹50 lakh to ₹1 crore, depending on the
                      portfolio manager and strategy.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Who can invest in PMS?</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                        <span>High Net Worth Individuals (HNIs)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                        <span>Corporate entities and institutions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                        <span>NRIs (subject to FEMA regulations)</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Questions */}
            <div className="lg:col-span-3">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">Additional Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">What are the tax implications?</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Long-term capital gains: 10% above ₹1 lakh</li>
                        <li>• Short-term capital gains: 15%</li>
                        <li>• Dividends taxed at applicable slab rates</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">What are the risks involved?</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Market volatility risk</li>
                        <li>• Concentration risk</li>
                        <li>• Manager-specific risk</li>
                        <li>• Liquidity risk</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">
                        How is PMS different from mutual funds?
                      </h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Customized portfolio</li>
                        <li>• Direct ownership of securities</li>
                        <li>• Higher minimum investment</li>
                        <li>• More personalized service</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">FAQs on PMS Taxation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">Is GST applicable on PMS fees?</h4>
                      <p className="text-slate-700">
                        <span className="text-blue-600">👉</span> Yes, 18% GST is applicable on management and advisory
                        fees.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">
                        Are PMS profits taxed like mutual funds?
                      </h4>
                      <p className="text-slate-700">
                        <span className="text-blue-600">👉</span> No. In PMS, the tax is borne directly by the investor,
                        unlike mutual funds where AMC handles tax on certain income streams.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">
                        Do I need to file ITR if I invest in PMS?
                      </h4>
                      <p className="text-slate-700">
                        <span className="text-blue-600">👉</span> Yes, even NRIs and HNIs investing through PMS must
                        file ITR if they earn taxable income from capital gains, dividends, or interest.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Start Your PMS Journey?</h2>
            <p className="mb-6 text-lg">
              Let our expert portfolio managers help you create a customized investment strategy aligned with your
              financial goals.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="button-glow" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10" asChild>
                <Link href="/pms/who-should-invest">Learn Who Should Invest</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
