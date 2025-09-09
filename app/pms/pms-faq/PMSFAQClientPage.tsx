"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, BookOpen, BarChart2, PieChart, ArrowRight } from "lucide-react"

export default function PMSFAQClientPage() {
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
                Frequently Asked Questions about PMS
              </h1>
            </div>

            {/* Paragraph with enhanced visibility and stability */}
            <div className="relative z-20 backdrop-blur-sm bg-navy-900/50 rounded-lg p-6 mb-12 shadow-lg">
              <p className="text-lg text-white md:text-xl font-normal leading-relaxed">
                Find answers to common questions about Portfolio Management Services, including types, benefits, tax
                implications, and more.
              </p>
            </div>

            <div className="relative flex flex-wrap justify-center gap-6">
              <Button
                size="lg"
                className="relative group bg-gradient-to-r from-white to-blue-50 text-navy-900 hover:to-white px-8 py-6 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 rounded-xl"
                asChild
              >
                <Link href="/contact" className="relative flex items-center gap-2">
                  <span className="relative z-10 font-semibold text-lg">Book a Call</span>
                  <div className="relative z-10 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="relative bg-white border-0 text-navy-900 px-8 py-6 rounded-xl hover:bg-gray-50"
                asChild
              >
                <Link href="/pms/what-is-pms" className="relative flex items-center gap-2">
                  <span className="font-semibold text-lg">Learn About PMS</span>
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
        {/* FAQ Categories */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-white shadow-xl">
            <div className="p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <Tabs defaultValue="basics" className="w-full">
                  <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-auto mb-6 p-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                    <TabsTrigger
                      value="basics"
                      className="py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300"
                    >
                      <BarChart2 className="w-4 h-4 mr-2" /> Basics
                    </TabsTrigger>
                    <TabsTrigger
                      value="investment"
                      className="py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300"
                    >
                      <PieChart className="w-4 h-4 mr-2" /> Investment
                    </TabsTrigger>
                    <TabsTrigger
                      value="comparison"
                      className="py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300"
                    >
                      <ChevronRight className="w-4 h-4 mr-2" /> Comparisons
                    </TabsTrigger>
                    <TabsTrigger
                      value="technical"
                      className="py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300"
                    >
                      <BookOpen className="w-4 h-4 mr-2" /> Technical
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="basics" className="mt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What is PMS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p className="mb-2">
                            Portfolio Management Services (PMS) is a tailored investment solution where professional
                            portfolio managers manage your investments based on your financial goals, risk appetite, and
                            investment horizon. PMS allows for customized investment strategies across equity, debt, and
                            other asset classes.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What is equity PMS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            Equity PMS is a service where a portfolio manager invests your money primarily in equities
                            (stocks) to generate high returns. It is ideal for investors looking to gain exposure to the
                            stock market with professional management.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What is debt PMS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            Debt PMS focuses on investing in fixed-income instruments like bonds, debentures, and other
                            debt securities. It's a safer investment option compared to equity PMS, offering steady
                            returns with lower risk.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What is the Minimum ticket size in PMS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            The minimum ticket size in PMS typically ranges from ₹50 lakh to ₹1 crore, depending on the
                            portfolio manager's strategy and client needs. It is higher compared to mutual funds, making
                            PMS suitable for high-net-worth individuals (HNIs).
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          How many types of PMSs are there?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>There are three primary types of PMS:</p>
                          <ul className="list-disc pl-6 mt-2 text-left">
                            <li>Discretionary PMS: Portfolio manager has full control over investments.</li>
                            <li>
                              Non-Discretionary PMS: The investor makes the final decision on investments, while the
                              portfolio manager offers advice.
                            </li>
                            <li>
                              Advisory PMS: The portfolio manager offers advice, but the client makes the decisions.
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-6" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What are Specialized Investment Funds (SIF)?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            Specialized Investment Funds (SIF) focus on niche markets or asset classes, such as real
                            estate, infrastructure, or private equity. They offer diversification beyond traditional
                            asset classes like stocks and bonds.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-7" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          Who is a portfolio manager?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            A portfolio manager is a professional responsible for managing and overseeing the
                            investments in a client's portfolio, tailoring strategies to meet the client's financial
                            goals and risk profile.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-8" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What is a Specialized Investment Fund (SIF)?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            A Specialized Investment Fund (SIF) is an investment vehicle designed to target specific
                            niche markets or asset classes such as real estate, private equity, or infrastructure.
                            Unlike traditional funds, SIFs focus on high-growth opportunities that are not widely
                            available in conventional investment avenues. These funds allow investors to diversify their
                            portfolios with specialized assets that align with specific investment goals.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>

                  <TabsContent value="investment" className="mt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What is discretionary PMS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            Discretionary PMS allows the portfolio manager to make all investment decisions on behalf of
                            the investor, based on the investor's objectives and risk profile.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What is Non-Discretionary PMS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            In Non-Discretionary PMS, the portfolio manager provides investment advice, but the final
                            decision rests with the investor. This gives the investor more control over their portfolio.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          Who can invest in a PMS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            High-net-worth individuals (HNIs), corporates, and family offices with a minimum investment
                            amount (usually ₹50 lakh) can invest in Portfolio Management Services (PMS).
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          Who should invest in a PMS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            PMS is ideal for investors who have a higher risk appetite, a long-term investment horizon,
                            and can commit a minimum investment of ₹50 lakh to ₹1 crore. It is suited for those seeking
                            professional portfolio management and customized investment strategies.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          Can NRIs Invest in a PMS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            Yes, NRIs can invest in PMS in India. They need to fulfill the KYC requirements and comply
                            with FEMA regulations. They can also invest in both equity PMS and debt PMS.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-6" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          Can USA NRIs invest in a PMS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            Yes, USA-based NRIs can invest in PMS. However, they must comply with U.S. tax laws, and
                            it's essential to consult a tax advisor to understand any tax implications in the USA.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-7" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          Can Middle East NRIs invest in a PMS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            Yes, Middle East NRIs are eligible to invest in PMS in India, subject to compliance with
                            Indian regulations and KYC requirements.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-8" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          If you have 5Cr should you invest in PMS or AIF? Why?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            With ₹5 crore, both PMS and AIF can be suitable. PMS offers customized investment
                            management, ideal for equity-focused strategies, while AIF provides exposure to alternative
                            assets like private equity or real estate. The choice depends on your risk appetite and
                            investment goals. You can schedule a call with us, and we will help you take a more rational
                            decision with your money.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-9" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What is the organizational structure of PMS in India?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            In India, PMS firms typically have a CEO, CIO (Chief Investment Officer), Principal Officer,
                            research analysts, and relationship managers who work together to provide tailored
                            investment strategies for clients.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-10" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What are the general responsibilities of a Portfolio Manager?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            A portfolio manager's responsibilities include asset allocation, stock selection, risk
                            management, performance tracking, and regular reporting to clients.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-11" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          How does a portfolio manager administer an investor's portfolio?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            A portfolio manager administers the portfolio by continuously monitoring the market, making
                            strategic adjustments, and rebalancing the portfolio based on the client's risk profile and
                            market conditions.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-12" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          How to choose the best PMS provider in India?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            When choosing a PMS provider in India, consider factors like track record, performance
                            consistency, management fees, investment strategies, and the level of personalization.
                            Research and compare providers to find the one that aligns with your financial goals.
                          </p>
                          <p className="mt-2">
                            Need help selecting the right PMS for you? Book a consultation with our experts for tailored
                            advice.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-13" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What are the risks associated with investing in PMS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            The main risks in PMS include market volatility, investment concentration, and management
                            risk. Since PMS involves active stock picking, there's also a risk of underperformance
                            compared to passive strategies like mutual funds.
                          </p>
                          <p className="mt-2">
                            Want to understand these risks better? Talk to our experts to assess your risk tolerance and
                            make informed decisions.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-14" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          Can a beginner invest in PMS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            While PMS is typically suited for high-net-worth individuals (HNIs), beginners can invest if
                            they have the necessary capital and a long-term investment horizon. However, it's
                            recommended to consult a financial advisor before diving into PMS for tailored guidance.
                          </p>
                          <p className="mt-2">
                            Thinking about getting started with PMS? Book a call with us, and we'll guide you through
                            the process.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>

                  <TabsContent value="technical" className="mt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What is the Sharpe Ratio, and why is it important for evaluating PMS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            The Sharpe Ratio measures how well a PMS portfolio is performing in relation to the amount
                            of risk it is taking. In simpler terms, it tells you how much return you're getting for each
                            unit of risk you're assuming. A higher Sharpe Ratio means the portfolio is providing better
                            returns for the amount of risk involved. For investors looking to assess risk-adjusted
                            performance, this ratio helps compare different PMS strategies in a way that focuses on both
                            return and risk.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What does Alpha mean in PMS performance?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            Alpha indicates the extra return a portfolio is generating compared to its benchmark (like
                            the Nifty index), after accounting for the market risk. In simple terms, if a PMS has a
                            positive alpha, it means the portfolio manager is doing better than the market or its
                            benchmark, generating higher-than-expected returns. Alpha helps investors understand whether
                            the manager's skills are contributing to superior performance.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          How does Beta impact the risk of a PMS portfolio?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            Beta measures how much a portfolio's performance moves in relation to the overall market. A
                            beta of 1 means the portfolio moves in line with the market; a beta above 1 means the
                            portfolio is more volatile (riskier) than the market; and a beta below 1 means the portfolio
                            is less volatile (safer). For example, if you're more risk-averse, you might prefer a
                            portfolio with a lower beta.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What is Standard Deviation, and how does it relate to PMS risk?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            Standard Deviation is a measure of how much the returns of a PMS portfolio vary over time. A
                            high standard deviation means the portfolio's returns are more unpredictable, which suggests
                            higher risk. A low standard deviation means the returns are more stable and predictable,
                            indicating less risk. It's a key metric for investors who want to understand the level of
                            volatility they might face with a portfolio.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What is the Sortino Ratio, and how is it different from the Sharpe Ratio?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            The Sortino Ratio is similar to the Sharpe Ratio but focuses only on downside risk (negative
                            returns), rather than all types of volatility. This makes it a better tool for investors who
                            are particularly concerned about minimizing losses. If you're worried more about protecting
                            your portfolio from downturns rather than volatility in general, the Sortino Ratio is a more
                            relevant measure.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-6" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What is the Treynor Ratio, and how is it different from the Sharpe Ratio?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            The Treynor Ratio measures how much excess return a portfolio is generating relative to the
                            market risk it is exposed to, represented by Beta. Unlike the Sharpe Ratio, which uses total
                            risk (volatility), the Treynor Ratio only considers systematic risk (market risk). It's
                            particularly useful for investors who want to evaluate how well a portfolio is doing
                            compared to the market, considering only the risk associated with market movements.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-7" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What is Maximum Drawdown, and why should I care about it in PMS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            Maximum Drawdown shows the largest drop in a portfolio's value from its highest point to its
                            lowest point during a specific period. This helps investors understand how much they could
                            potentially lose during the worst-performing times. For example, if you are concerned about
                            large losses in market downturns, maximum drawdown helps you assess the worst-case scenario
                            for a PMS strategy.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-8" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What is the Information Ratio, and how does it help in PMS evaluation?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            The Information Ratio measures how consistently a PMS portfolio outperforms its benchmark. A
                            higher Information Ratio means the manager is consistently delivering positive returns above
                            the benchmark, which is an indication of a skilled manager. For an investor, this ratio
                            helps identify which PMS strategies are more reliable in generating excess returns over
                            time.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-9" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What role does Asset Allocation play in the performance of a PMS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            Asset Allocation is the process of spreading investments across different types of assets
                            like stocks, bonds, and commodities. The right mix of assets can help reduce risk while
                            maximizing potential returns. In PMS, asset allocation is customized to align with an
                            investor's risk profile and goals. It helps protect the portfolio from market swings by
                            diversifying investments in different sectors or asset classes.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-10" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What is the Portfolio Turnover Ratio, and why is it important for investors?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            The Portfolio Turnover Ratio indicates how often the assets in a PMS portfolio are bought
                            and sold over a certain period, usually a year. A high turnover ratio can mean higher
                            transaction costs and potential tax implications, which might reduce net returns. A lower
                            turnover ratio typically indicates a more long-term investment strategy. For investors,
                            understanding the turnover ratio can help assess whether the strategy is more aggressive or
                            focused on long-term growth.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>

                  <TabsContent value="comparison" className="mt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What are the benefits of PMS over mutual funds?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>PMS vs mutual funds:</p>
                          <ul className="list-disc pl-6 mt-2 text-left">
                            <li>Customization: PMS offers personalized investment strategies.</li>
                            <li>
                              Higher returns potential: PMS focuses on high-net-worth clients and can invest directly in
                              stocks.
                            </li>
                            <li>
                              Group of informed Investors: Generally the clients who are/have investing in PMS are more
                              experienced and come in a group of informed investors.
                            </li>
                            <li>
                              Transparency: PMS offers more transparency as every client has an individual portfolio and
                              it is easy to track and the underlying stocks are held in the client's name.
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          Which is the best performing PMS in India?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            The best-performing PMS in India varies annually based on market conditions. It's crucial to
                            compare PMS track records, risk profiles, and strategies before choosing the best one. You
                            can schedule a call with us, and we will help you take a more rational decision with your
                            money.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          What is the difference between PMS and mutual funds?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            PMS offers personalized investment strategies, while mutual funds pool money from various
                            investors to invest in a diversified portfolio. PMS is ideal for high-net-worth individuals
                            (HNIs) seeking customized management and potentially higher returns.
                          </p>
                          <p className="mt-2">
                            Want to explore personalized investment options? Schedule a call with us today to discuss
                            the best strategy for your financial goals.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          Is PMS a better investment option than mutual funds?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            PMS can outperform mutual funds for HNIs who prefer tailored strategies and direct market
                            exposure. Unlike mutual funds, PMS offers customization and professional management, leading
                            to potentially higher returns.
                          </p>
                          <p className="mt-2">
                            Curious about how PMS can benefit you? Let's talk and find out how we can create a
                            personalized portfolio for you.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200 text-left [&>svg]:ml-auto">
                          SIF vs AIF: Which is Better for You?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-left">
                          <p>
                            Specialized Investment Funds (SIFs) and Alternative Investment Funds (AIFs) share
                            similarities but cater to different investment strategies. AIFs provide a broader investment
                            range, including hedge funds, private equity, and venture capital, targeting a wide array of
                            asset classes. SIFs, however, focus solely on specific, specialized markets, offering more
                            targeted investment strategies. While AIFs offer more diverse options, SIFs can be a better
                            choice for those looking for high-growth opportunities in niche areas like infrastructure or
                            real estate.
                          </p>
                          <p className="mt-2">
                            Looking for niche investment opportunities? Contact us today to learn if a Specialized
                            Investment Fund (SIF) suits your investment strategy.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center my-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Explore PMS Investment Options?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to guide you through the world of Portfolio Management Services. Book a
              consultation to get personalized investment advice.
            </p>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold" asChild>
              <Link href="/contact">Schedule a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
