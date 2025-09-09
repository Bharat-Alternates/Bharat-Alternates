import HeroSection from "@/components/hero-section"
import { InteractiveTable } from "@/components/interactive-table"
import { CalendlyButton } from "@/components/calendly-button"
import {
  TrendingUp,
  Shield,
  Users,
  Briefcase,
  BarChart2,
  LineChart,
  PlusCircle,
  Search,
  FileText,
  Zap,
  ClipboardCheck,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ParallaxSection } from "@/components/parallax-section"
import AnimationWrapper from "@/components/animation-wrapper"
import TextReveal from "@/components/text-reveal"
import { StrategyTimeline } from "@/components/strategy-timeline"
// Import the LogoSlider component at the top of the file
import LogoSlider from "@/components/logo-slider"

export default function Home() {
  // Sample data for table
  const tableData = [
    { name: "Equity Growth Strategy", returns: "21.5%", risk: "High", minInvestment: "₹50 Lakhs" },
    { name: "Balanced Portfolio", returns: "16.8%", risk: "Medium", minInvestment: "₹50 Lakhs" },
    { name: "Debt Plus Strategy", returns: "12.3%", risk: "Low", minInvestment: "₹50 Lakhs" },
    { name: "Multi-Asset Allocation", returns: "14.7%", risk: "Medium", minInvestment: "₹1 Crore" },
    { name: "Special Situations Fund", returns: "24.2%", risk: "Very High", minInvestment: "₹1 Crore" },
  ]

  // FAQ data
  const faqData = [
    {
      question: "What is the minimum investment amount for PMS?",
      answer:
        "The minimum investment required for Portfolio Management Services (PMS) in India is ₹50 lakhs as per SEBI regulations. This threshold ensures that PMS services are tailored for high-net-worth individuals who can afford the associated risks and management fees.",
    },
    {
      question: "How is PMS different from mutual funds?",
      answer:
        "Unlike mutual funds where your money is pooled with other investors, PMS offers personalized portfolio management tailored to your specific financial goals and risk appetite. PMS provides greater transparency, customization, and direct ownership of securities, while mutual funds offer standardized products with lower minimum investments.",
    },
    {
      question: "What is the minimum investment for AIF?",
      answer:
        "Alternative Investment Funds (AIFs) in India require a minimum investment of ₹1 crore as per SEBI regulations. This higher threshold reflects the sophisticated nature of these investment vehicles and their target audience of ultra-high-net-worth individuals and institutional investors.",
    },
    {
      question: "How are PMS returns calculated?",
      answer:
        "PMS returns are typically calculated on a time-weighted basis, which measures the compound rate of growth over a specific period. This method eliminates the distorting effects of cash flows into or out of the portfolio, providing a more accurate representation of the portfolio manager's performance.",
    },
  ]

  return (
    <>
      <HeroSection />

      {/* Introduction Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-4xl text-center">
              <div>
                <TextReveal
                  as="h2"
                  className="inline-block text-xl sm:text-2xl md:text-3xl font-bold tracking-normal text-blue-800 leading-relaxed"
                  stagger={0.05}
                >
                  <span className="whitespace-normal sm:whitespace-nowrap">
                    India's&nbsp;Leading&nbsp;Portfolio&nbsp;Management
                  </span>
                </TextReveal>
                <TextReveal
                  as="span"
                  className="inline-block text-xl sm:text-2xl md:text-3xl font-bold tracking-normal text-blue-800 leading-relaxed mt-1 md:mt-0 md:ml-2"
                  stagger={0.05}
                >
                  <span className="whitespace-normal sm:whitespace-nowrap">
                    Services&nbsp;&amp;&nbsp;Alternative&nbsp;Investment
                  </span>
                </TextReveal>
                <TextReveal
                  as="span"
                  className="inline-block text-xl sm:text-2xl md:text-3xl font-bold tracking-normal text-blue-800 leading-relaxed mt-1 md:mt-0 md:ml-2"
                  stagger={0.05}
                >
                  <span className="whitespace-normal sm:whitespace-nowrap">Fund&nbsp;Platform</span>
                </TextReveal>
              </div>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-800 leading-relaxed">
                At Bharat Alternates, we specialize in providing high-net-worth individuals and ultra-high networth
                individuals and qualified investors with access to India's top-performing Portfolio Management Services
                (PMS) and Alternative Investment Funds (AIF). Our comprehensive investment platform offers expert wealth
                management solutions, data-driven market insights, and a seamless digital investment experience tailored
                to your specific financial objectives.
              </p>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-800 leading-relaxed">
                With a proven track record in wealth creation and capital appreciation, our team of SEBI-registered
                distributors guides you through the diverse landscape of alternative investments in India, helping you
                make strategic investment decisions aligned with your risk tolerance, tax planning needs, and long-term
                financial goals.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Strategic Wealth Management Section */}
      <section className="py-16 bg-[#2a2a72]">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-4xl text-center text-white">
              <TextReveal as="h2" className="text-3xl font-bold md:text-4xl" stagger={0.05}>
                <span style={{ wordSpacing: "0.1em" }}>Strategic&nbsp;Wealth</span>
              </TextReveal>
              <TextReveal as="span" className="text-3xl font-bold md:text-4xl" stagger={0.05}>
                <span style={{ wordSpacing: "0.1em" }}>Management</span>
              </TextReveal>
              <TextReveal as="h3" className="mt-3 text-xl font-semibold md:text-2xl" stagger={0.05}>
                <span style={{ wordSpacing: "0.1em" }}>Our&nbsp;Systematic&nbsp;Investment&nbsp;Approach</span>
              </TextReveal>
              <p className="mt-4 text-base md:text-lg text-white/90 max-w-3xl mx-auto">
                A research-backed, disciplined approach to sustainable wealth creation through strategic asset
                allocation, portfolio diversification, and professional investment management
              </p>
            </div>
          </AnimationWrapper>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <AnimationWrapper animation="scale-in" delay={0.1}>
              <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PlusCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Personalized Financial Assessment</h3>
                <p className="text-white/80">
                  Comprehensive evaluation of your investment goals, risk profile, and time horizon
                </p>
              </div>
            </AnimationWrapper>

            {/* Card 2 */}
            <AnimationWrapper animation="scale-in" delay={0.2}>
              <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategic Asset Allocation</h3>
                <p className="text-white/80">
                  Data-driven portfolio construction across equity, debt, and alternative investments
                </p>
              </div>
            </AnimationWrapper>

            {/* Card 3 */}
            <AnimationWrapper animation="scale-in" delay={0.3}>
              <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Fund Selection</h3>
                <p className="text-white/80">
                  Rigorous analysis and selection of top-performing PMS schemes and AIF categories
                </p>
              </div>
            </AnimationWrapper>

            {/* Card 4 */}
            <AnimationWrapper animation="scale-in" delay={0.4}>
              <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Continuous Portfolio Monitoring</h3>
                <p className="text-white/80">Regular performance tracking and market-responsive rebalancing</p>
              </div>
            </AnimationWrapper>

            {/* Card 5 */}
            <AnimationWrapper animation="scale-in" delay={0.5}>
              <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Tax-Efficient Wealth Optimization</h3>
                <p className="text-white/80">Strategies to maximize returns while minimizing tax implications</p>
              </div>
            </AnimationWrapper>

            {/* Card 6 */}
            <AnimationWrapper animation="scale-in" delay={0.6}>
              <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Long-term Wealth Creation</h3>
                <p className="text-white/80">
                  Focus on sustainable growth and capital appreciation through market cycles
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <StrategyTimeline />

      {/* Features Section */}
      <ParallaxSection className="py-20 bg-white" speed={0.1} direction="up">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div>
              <TextReveal
                as="h2"
                className="inline-block text-xl sm:text-2xl md:text-3xl font-bold tracking-normal text-blue-800 leading-relaxed"
                stagger={0.05}
              >
                <span style={{ wordSpacing: "0.1em" }}>Why&nbsp;Choose&nbsp;Bharat&nbsp;Alternates</span>
              </TextReveal>
            </div>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-800">
              We combine deep market expertise with personalized strategies to deliver exceptional value to our clients.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: "Consistent Performance",
                description:
                  "Our strategies have consistently outperformed market benchmarks with 18-22% CAGR over the long term.",
                hoverClass: "hover:bg-blue-50 hover:border-blue-300",
                iconClass: "bg-blue-100 text-blue-600",
                iconHoverClass: "group-hover:bg-blue-200 group-hover:text-blue-700",
                titleClass: "text-blue-800",
                accentClass: "bg-blue-500",
              },
              {
                icon: Shield,
                title: "Risk Management",
                description:
                  "Sophisticated risk management techniques to protect and grow your wealth in all market conditions.",
                hoverClass: "hover:bg-indigo-50 hover:border-indigo-300",
                iconClass: "bg-indigo-100 text-indigo-600",
                iconHoverClass: "group-hover:bg-indigo-200 group-hover:text-indigo-700",
                titleClass: "text-indigo-800",
                accentClass: "bg-indigo-500",
              },
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Seasoned investment professionals with decades of combined experience across various market cycles.",
                hoverClass: "hover:bg-purple-50 hover:border-purple-300",
                iconClass: "bg-purple-100 text-purple-600",
                iconHoverClass: "group-hover:bg-purple-200 group-hover:text-purple-700",
                titleClass: "text-purple-800",
                accentClass: "bg-purple-500",
              },
              {
                icon: Briefcase,
                title: "Customized Solutions",
                description:
                  "Tailored investment strategies aligned with your financial goals, risk appetite, and time horizon.",
                hoverClass: "hover:bg-teal-50 hover:border-teal-300",
                iconClass: "bg-teal-100 text-teal-600",
                iconHoverClass: "group-hover:bg-teal-200 group-hover:text-teal-700",
                titleClass: "text-teal-800",
                accentClass: "bg-teal-500",
              },
              {
                icon: BarChart2,
                title: "Transparent Reporting",
                description:
                  "Comprehensive performance reports with complete transparency on fees and investment decisions.",
                hoverClass: "hover:bg-cyan-50 hover:border-cyan-300",
                iconClass: "bg-cyan-100 text-cyan-600",
                iconHoverClass: "group-hover:bg-cyan-200 group-hover:text-cyan-700",
                titleClass: "text-cyan-800",
                accentClass: "bg-cyan-500",
              },
              {
                icon: LineChart,
                title: "Research-Driven",
                description:
                  "In-depth research and analysis driving our investment decisions for optimal portfolio construction.",
                hoverClass: "hover:bg-sky-50 hover:border-sky-300",
                iconClass: "bg-sky-100 text-sky-600",
                iconHoverClass: "group-hover:bg-sky-200 group-hover:text-sky-700",
                titleClass: "text-sky-800",
                accentClass: "bg-sky-500",
              },
            ].map((feature, index) => (
              <AnimationWrapper key={index} animation="scale-in" delay={index * 0.1}>
                <Card
                  className={`feature-card relative overflow-hidden transition-all duration-500 
                  hover:-translate-y-2 hover:shadow-xl group border border-gray-200 ${feature.hoverClass}`}
                >
                  <CardHeader className="relative z-10">
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full 
                      transition-all duration-500 group-hover:scale-110 ${feature.iconClass} ${feature.iconHoverClass}`}
                    >
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className={`transition-all duration-500 ${feature.titleClass}`}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-800 group-hover:text-gray-900 transition-colors duration-500">
                      {feature.description}
                    </p>
                  </CardContent>
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${feature.accentClass}`}
                  ></div>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Interactive Table Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="slide-up">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <TextReveal
                as="h2"
                className="text-xl sm:text-2xl md:text-3xl font-bold tracking-normal text-blue-800 leading-relaxed"
                stagger={0.05}
              >
                <span style={{ wordSpacing: "0.1em" }}>High&nbsp;Performance&nbsp;Investment&nbsp;Strategies</span>
              </TextReveal>
              <p className="mt-4 text-base sm:text-lg text-gray-800">
                Explore our range of premium investment solutions designed to meet diverse financial goals and maximize
                returns
              </p>
            </div>
          </AnimationWrapper>

          <div className="mx-auto max-w-5xl">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              {/* Tabs Navigation */}
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  <button className="text-blue-600 border-b-2 border-blue-500 py-4 px-6 font-medium text-sm sm:text-base">
                    Performance Overview
                  </button>
                  <button className="text-gray-500 hover:text-gray-700 py-4 px-6 font-medium text-sm sm:text-base">
                    Historical Analysis
                  </button>
                  <button className="text-gray-500 hover:text-gray-700 py-4 px-6 font-medium text-sm sm:text-base">
                    Risk Assessment
                  </button>
                </nav>
              </div>

              {/* Main Content Area */}
              <div className="p-6 md:p-8">
                {/* Strategy Selection Pills */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                  {tableData.map((strategy, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        index === 0 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      {strategy.name}
                    </button>
                  ))}
                </div>

                {/* Interactive Performance Visualization */}
                <div className="mb-10">
                  <h3 className="text-lg font-semibold mb-6 text-blue-800 text-center">
                    Performance Comparison (2018-2023)
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Line Chart */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                      <h4 className="text-sm font-medium text-gray-700 mb-4">Historical Performance Trend</h4>
                      <div className="relative h-64">
                        {/* Y-axis labels */}
                        <div className="absolute left-0 inset-y-0 flex flex-col justify-between text-xs text-gray-500 pr-2">
                          <span>25%</span>
                          <span>20%</span>
                          <span>15%</span>
                          <span>10%</span>
                          <span>5%</span>
                          <span>0%</span>
                        </div>

                        {/* Chart Area */}
                        <div className="absolute left-8 right-0 inset-y-0">
                          {/* X-axis labels */}
                          <div className="absolute bottom-0 inset-x-0 flex justify-between text-xs text-gray-500 pt-1">
                            <span>2018</span>
                            <span>2019</span>
                            <span>2020</span>
                            <span>2021</span>
                            <span>2022</span>
                            <span>2023</span>
                          </div>

                          {/* Grid lines */}
                          <div className="absolute inset-0 grid grid-rows-5 h-[calc(100%-20px)]">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="border-t border-gray-100"></div>
                            ))}
                          </div>

                          {/* Line for Equity Growth Strategy */}
                          <svg
                            className="absolute inset-0 h-[calc(100%-20px)]"
                            preserveAspectRatio="none"
                            viewBox="0 0 100 100"
                          >
                            <path
                              d="M0,40 L20,35 L40,50 L60,30 L80,25 L100,15"
                              fill="none"
                              stroke="rgba(59, 130, 246, 0.8)"
                              strokeWidth="2"
                              className="transition-all duration-500"
                            />
                            <path
                              d="M0,40 L20,35 L40,50 L60,30 L80,25 L100,15"
                              fill="rgba(59, 130, 246, 0.1)"
                              stroke="none"
                              className="transition-all duration-500"
                            />

                            {/* Benchmark line */}
                            <path
                              d="M0,45 L20,42 L40,55 L60,40 L80,38 L100,30"
                              fill="none"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="2"
                              strokeDasharray="4"
                              className="transition-all duration-500"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Legend */}
                      <div className="flex justify-center gap-4 text-xs mt-2">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                          <span>Equity Growth Strategy</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-gray-400 rounded-full mr-1"></div>
                          <span>Benchmark (Nifty 50)</span>
                        </div>
                      </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                      <h4 className="text-sm font-medium text-gray-700 mb-4">Strategy Comparison (2023)</h4>
                      <div className="relative h-64">
                        {/* Y-axis labels */}
                        <div className="absolute left-0 inset-y-0 flex flex-col justify-between text-xs text-gray-500 pr-2">
                          <span>25%</span>
                          <span>20%</span>
                          <span>15%</span>
                          <span>10%</span>
                          <span>5%</span>
                          <span>0%</span>
                        </div>

                        {/* Chart Area */}
                        <div className="absolute left-8 right-0 inset-y-0">
                          {/* Grid lines */}
                          <div className="absolute inset-0 grid grid-rows-5 h-[calc(100%-20px)]">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="border-t border-gray-100"></div>
                            ))}
                          </div>

                          {/* Bars */}
                          <div className="absolute inset-x-0 bottom-5 h-[calc(100%-25px)] flex items-end justify-around">
                            {tableData.map((strategy, index) => (
                              <div key={index} className="relative group w-8 sm:w-12">
                                <div
                                  className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 rounded-t-sm cursor-pointer"
                                  style={{ height: `${Number.parseFloat(strategy.returns) * 3.5}%` }}
                                >
                                  <div className="invisible group-hover:visible absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                                    {strategy.returns}
                                  </div>
                                </div>
                                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap">
                                  {strategy.name.split(" ")[0]}
                                </div>
                              </div>
                            ))}

                            {/* Benchmark line */}
                            <div
                              className="absolute border-t-2 border-dashed border-gray-400 w-full"
                              style={{ bottom: "45%" }}
                            >
                              <div className="absolute -right-16 -top-3 text-xs text-gray-500">Benchmark: 15%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 text-center mt-4">
                    <p>
                      * Historical annual returns shown before fees. Past performance is not indicative of future
                      results.
                    </p>
                  </div>
                </div>

                {/* Strategy Details */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  <div className="col-span-1 lg:col-span-2">
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-blue-800">Investment Strategy Comparison</h3>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search strategies..."
                            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <InteractiveTable
                          data={tableData}
                          columns={[
                            { header: "Strategy Name", accessor: "name" },
                            { header: "Historical Returns", accessor: "returns" },
                            { header: "Risk Profile", accessor: "risk" },
                            { header: "Min. Investment", accessor: "minInvestment" },
                          ]}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100 p-5 h-full">
                      <h3 className="text-lg font-semibold mb-4 text-blue-800">Strategy Highlights</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                          <span>
                            <strong className="text-blue-800">Equity Growth:</strong> Focused on capital appreciation
                            through carefully selected high-growth potential stocks
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                          <span>
                            <strong className="text-blue-800">Balanced Portfolio:</strong> Optimal mix of equity and
                            debt instruments for moderate growth with reduced volatility
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                          <span>
                            <strong className="text-blue-800">Special Situations:</strong> Targets unique investment
                            opportunities like mergers, acquisitions, and restructuring
                          </span>
                        </li>
                      </ul>
                      <div className="mt-6 text-center">
                        <button className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
                          Download detailed prospectus
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: "Average Annual Return", value: "18.9%", trend: "up" },
                    { label: "Benchmark Outperformance", value: "+4.2%", trend: "up" },
                    { label: "Sharpe Ratio", value: "1.42", trend: "neutral" },
                    { label: "Maximum Drawdown", value: "-12.3%", trend: "down" },
                  ].map((metric, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                      <div className="text-sm text-gray-500">{metric.label}</div>
                      <div className="flex items-center mt-1">
                        <div className="text-xl font-bold text-gray-900">{metric.value}</div>
                        {metric.trend === "up" && (
                          <svg
                            className="w-4 h-4 ml-1 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                          </svg>
                        )}
                        {metric.trend === "down" && (
                          <svg
                            className="w-4 h-4 ml-1 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Slider Section - Added above FAQ */}
      <LogoSlider
        title="Our Trusted Partners"
        subtitle="We collaborate with leading financial institutions and investment firms to bring you the best opportunities"
      />

      {/* FAQ Section */}
      <ParallaxSection className="py-24 bg-gray-50" speed={0.1} direction="up">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <TextReveal as="h2" className="text-3xl font-bold tracking-tight text-blue-900 md:text-4xl">
                <span style={{ wordSpacing: "0.1em" }}>Frequently&nbsp;Asked&nbsp;Questions</span>
              </TextReveal>
              <p className="mt-6 text-lg text-gray-900">
                Find answers to common questions about our investment services
              </p>
            </div>
          </AnimationWrapper>

          <div className="mx-auto max-w-3xl">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`border-b border-gray-100 ${index === faqData.length - 1 ? "border-b-0" : ""}`}
                >
                  <button className="flex justify-between items-center w-full px-8 py-6 text-left focus:outline-none group hover:bg-blue-50 transition-colors duration-300">
                    <span className="text-lg font-medium text-blue-800">{item.question}</span>
                    <svg
                      className="w-6 h-6 text-blue-600 transform transition-transform duration-300 group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="px-8 pb-6">
                    <p className="text-gray-800 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-3xl text-center">
              <TextReveal as="h2" className="text-3xl font-bold tracking-tight md:text-4xl" stagger={0.05}>
                <span style={{ wordSpacing: "0.2em" }}>Ready to Start Your Investment Journey?</span>
              </TextReveal>
              <p className="mt-4 text-lg opacity-90">
                Schedule a consultation with our investment experts to discuss how our solutions can help you achieve
                your financial goals.
              </p>
              <div className="mt-10">
                <CalendlyButton variant="secondary" size="lg" showArrow>
                  Book a call
                </CalendlyButton>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </>
  )
}
