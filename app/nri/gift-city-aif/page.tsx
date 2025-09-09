"use client"

import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ParallaxSection } from "@/components/parallax-section"
import AnimationWrapper from "@/components/animation-wrapper"
import TextReveal from "@/components/text-reveal"
import { ContactFloat } from "@/components/contact-float"
import { InteractiveTable } from "@/components/interactive-table"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  TrendingUp,
  Globe,
  LineChart,
  BarChart2,
  Shield,
  DollarSign,
  Users,
  FileText,
  Briefcase,
  Eye,
  Target,
  Zap,
  ChevronDown,
  Check,
  Clock,
  X,
  AlertCircle,
  CheckCircle,
  PhoneCall,
  Download,
  HelpCircle,
  Plus,
  Minus,
  MessageCircle,
  CalendarPlus,
  Star,
  User,
  Send,
  Building,
  CreditCard,
  Landmark,
  UserCheck,
  PieChart,
} from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  Cell,
  Legend,
  PieChart as RechartsPieChart,
  Pie,
  Sector,
} from "recharts"
import { CalendlyButton } from "@/components/calendly-button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function GiftCityAIFPage() {
  // Gift City AIF performance data
  const aifData = [
    { name: "Alternative Equity Fund", cagr: "22.50%", strategy: "Global Equity", value: "22.50" },
    { name: "India Growth Opportunities", cagr: "18.60%", strategy: "Multi-Asset", value: "18.60" },
    { name: "Offshore Infrastructure Fund", cagr: "16.80%", strategy: "Infrastructure & Real Estate", value: "16.80" },
    { name: "Global Markets AIF", cagr: "14.20%", strategy: "Global Diversification", value: "14.20" },
    { name: "India-Focused Credit Fund", cagr: "12.30%", strategy: "Fixed Income", value: "12.30" },
    { name: "Emerging Markets Equity AIF", cagr: "8.50%", strategy: "Emerging Markets", value: "8.50" },
  ]

  // Chart data for performance comparison
  const performanceData = [
    { name: "2018", giftCity: 8.5, domestic: 6.2, global: 5.1 },
    { name: "2019", giftCity: 12.3, domestic: 8.5, global: 7.8 },
    { name: "2020", giftCity: 14.2, domestic: 9.8, global: 8.5 },
    { name: "2021", giftCity: 18.6, domestic: 15.4, global: 12.7 },
    { name: "2022", giftCity: 16.8, domestic: 13.2, global: 10.5 },
    { name: "2023", giftCity: 22.5, domestic: 17.8, global: 14.3 },
  ]

  // Asset allocation data
  const assetAllocationData = [
    { name: "India-Focused Equity", value: 40, color: "#3b82f6" },
    { name: "Global Markets", value: 30, color: "#8b5cf6" },
    { name: "Infrastructure & Real Estate", value: 20, color: "#10b981" },
    { name: "Fixed Income", value: 10, color: "#f97316" },
  ]

  // Sector allocation data
  const sectorAllocationData = [
    { name: "Financial Services", value: 25, fill: "#3b82f6" },
    { name: "Technology", value: 20, fill: "#8b5cf6" },
    { name: "Infrastructure", value: 15, fill: "#10b981" },
    { name: "Healthcare", value: 12, fill: "#f97316" },
    { name: "Consumer", value: 10, fill: "#ef4444" },
    { name: "Others", value: 18, fill: "#6b7280" },
  ]

  // Comparison data for GIFT City vs Domestic AIFs
  const comparisonData = [
    { feature: "Currency", giftCity: "USD, EUR, GBP, AED, SGD", domestic: "Indian Rupees (INR) only" },
    { feature: "Eligibility", giftCity: "NRIs, OCIs, Foreign Investors", domestic: "Primarily Resident Indians, limited NRI access" },
    { feature: "Repatriation", giftCity: "Fully repatriable", domestic: "Subject to FEMA and RBI norms" },
    { feature: "Bank Account", giftCity: "Offshore IBU Account", domestic: "NRE/NRO Account Required" },
    { feature: "Regulation", giftCity: "IFSCA (International)", domestic: "SEBI (Domestic)" },
  ]

  // Country flags with more detailed data
  const countryData = [
    { flag: "🇺🇸", country: "United States", details: "FATCA Compliant, No Currency Conversion" },
    { flag: "🇦🇪", country: "UAE", details: "Dubai, Abu Dhabi, Tax-Free Repatriation" },
    { flag: "🇸🇬", country: "Singapore", details: "Direct USD Investment, Easy Remittance" },
    { flag: "🇬🇧", country: "United Kingdom", details: "Multi-Currency Options (GBP, USD)" },
    { flag: "🇦🇺", country: "Australia", details: "Streamlined Investment Process" },
    { flag: "🇨🇦", country: "Canada", details: "Favorable Tax Treatment" },
    { flag: "🇶🇦", country: "Qatar", details: "Tax-Free Income in Home Country" },
    { flag: "🇭🇰", country: "Hong Kong", details: "International Financial Hub Advantage" },
    { flag: "🇯🇵", country: "Japan", details: "Diversification Option for NRIs" },
  ]

  // FAQs data
  const faqsData = [
    {
      question: "Can I invest in GIFT City AIFs from the USA or UAE?",
      answer: "Yes. NRIs from any country can invest using foreign currency through approved routes."
    },
    {
      question: "Is GIFT City regulated and safe?",
      answer: "Yes. The IFSCA ensures GIFT City complies with global standards for fund management, investor protection, and disclosure."
    },
    {
      question: "Are returns from GIFT City AIFs tax-free?",
      answer: "No. While taxation may differ from domestic AIFs, GIFT City investments are not inherently tax-free. Consult a tax advisor."
    },
    {
      question: "What's the minimum investment?",
      answer: "Most GIFT City AIFs require a minimum of USD 150,000 (or equivalent)."
    },
    {
      question: "How do I repatriate my investment proceeds?",
      answer: "Via your GIFT City IBU account, you can freely repatriate your funds to your overseas bank account."
    },
    {
      question: "Can I invest in Indian startups or private equity via GIFT City AIFs?",
      answer: "Yes, several Category II AIFs in GIFT City are structured to invest in Indian startups, VC deals, and unlisted growth-stage businesses."
    },
    {
      question: "How does Bharat Alternates help with onboarding and compliance?",
      answer: "We offer a dedicated advisory team, personalized fund selection, full digital onboarding support, and ongoing portfolio monitoring."
    }
  ]

  // Testimonials data
  const testimonials = [
    {
      name: "Siddharth M.",
      location: "UAE",
      quote: "Investing through GIFT City was seamless. Bharat Alternates helped me onboard remotely from Dubai and manage my AIF portfolio in USD. Highly recommended."
    },
    {
      name: "Priya R.",
      location: "UK",
      quote: "I was hesitant about complex NRI rules, but GIFT City AIFs made the process simple. I invested in a top equity fund with zero hassle."
    },
    {
      name: "Rakesh N.",
      location: "Singapore",
      quote: "As an NRI in Singapore, I wanted exposure to Indian infra and debt. Bharat Alternates made the whole process transparent and trustworthy."
    }
  ]
  
  // Active pie chart state
  const [activeIndex, setActiveIndex] = useState(0)

  // Scroll animation references
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  // Pie chart hover handler
  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  // Render active shape for pie chart
  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props
    const sin = Math.sin(-RADIAN * midAngle)
    const cos = Math.cos(-RADIAN * midAngle)
    const sx = cx + (outerRadius + 10) * cos
    const sy = cy + (outerRadius + 10) * sin
    const mx = cx + (outerRadius + 30) * cos
    const my = cy + (outerRadius + 30) * sin
    const ex = mx + (cos >= 0 ? 1 : -1) * 22
    const ey = my
    const textAnchor = cos >= 0 ? "start" : "end"

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} className="text-sm font-medium">
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
          className="text-xs"
        >{`${value}%`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" className="text-xs">
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    )
  }

  return (
    <>
      <style jsx global>{`
        @keyframes floating-1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(10px); }
          50% { transform: translateY(-20px) translateX(0); }
          75% { transform: translateY(-10px) translateX(-10px); }
        }
        
        @keyframes floating-2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(15px) translateX(-15px); }
          50% { transform: translateY(25px) translateX(0); }
          75% { transform: translateY(15px) translateX(15px); }
        }
        
        @keyframes floating-3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(-20px); }
          50% { transform: translateY(0) translateX(-30px); }
          75% { transform: translateY(20px) translateX(-20px); }
        }
        
        @keyframes drawLine {
          0% { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
          100% { stroke-dasharray: 1000; stroke-dashoffset: 0; }
        }
        
        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulseSlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shimmer {
          0% { background-position: -468px 0; }
          100% { background-position: 468px 0; }
        }
        
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Hero Section */}
      <section
        className="pt-20 pb-32 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(to right bottom, #0f172a, #131e36, #172543, #1c2c50, #20335d)",
        }}
      >
        {/* Particle background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.15) 2px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/5 w-16 h-16 rounded-full bg-blue-500/10 blur-xl animate-[floating-1_15s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/3 right-1/5 w-32 h-32 rounded-full bg-purple-500/10 blur-xl animate-[floating-2_20s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-teal-500/10 blur-xl animate-[floating-3_25s_ease-in-out_infinite]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-3/5">
              <div className="text-center lg:text-left mb-8">
                <div className="relative inline-block">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                    className="absolute -bottom-2 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                  ></motion.div>
                  <TextReveal
                    as="h1"
                    className="relative text-3xl font-bold text-white md:text-4xl lg:text-6xl"
                    stagger={0.03}
                  >
                    <span className="whitespace-pre">GIFT City AIFs for NRIs</span>
                  </TextReveal>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <p className="text-lg md:text-2xl text-slate-300 mt-6 max-w-3xl mx-auto lg:mx-0 leading-relaxed tracking-wide font-normal">
                    The ultimate offshore investment solution for NRIs seeking global diversification, regulatory benefits, 
                    and seamless capital repatriation through India's premier international financial hub.
                  </p>
                </motion.div>

                {/* Stats Counters */}
                <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="text-center"
                  >
                    <p className="text-4xl font-bold text-white">$150K+</p>
                    <p className="text-slate-400 text-sm mt-1">Minimum Investment</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="text-center"
                  >
                    <p className="text-4xl font-bold text-white">22.5%</p>
                    <p className="text-slate-400 text-sm mt-1">Avg. Top Returns 2023</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="text-center"
                  >
                    <p className="text-4xl font-bold text-white">100%</p>
                    <p className="text-slate-400 text-sm mt-1">Capital Repatriation</p>
                  </motion.div>
                </div>

                {/* CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
                >
                  <CalendlyButton className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                    Schedule a Consultation
                  </CalendlyButton>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:w-2/5 relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-6 shadow-2xl border border-white/10">
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-500/30 blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-purple-500/30 blur-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <p className="text-green-400 text-sm font-medium">Live Data</p>
                    </div>
                    <p className="text-white/70 text-sm">GIFT City AIF Performance</p>
                  </div>

                  <div className="space-y-4">
                    {aifData.slice(0, 4).map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div>
                          <p className="text-white font-medium">{item.name}</p>
                          <p className="text-white/60 text-xs">{item.strategy}</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden mr-3">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                              style={{ width: `${Math.min(100, Number(item.value) * 2)}%` }}
                            ></div>
                          </div>
                          <p className="text-white font-bold">{item.cagr}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/70 text-sm">Currency Options</p>
                        <div className="flex gap-2 mt-2">
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                            <span className="text-white">$</span>
                          </div>
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                            <span className="text-white">€</span>
                          </div>
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                            <span className="text-white">£</span>
                          </div>
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                            <span className="text-white">¥</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-white/70 text-sm">Top Locations</p>
                        <div className="flex gap-1 mt-2 text-lg">
                          <span title="United States">🇺🇸</span>
                          <span title="UAE">🇦🇪</span>
                          <span title="Singapore">🇸🇬</span>
                          <span title="UK">🇬🇧</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 border border-white/10 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 border border-white/10 rounded-full opacity-10"></div>
        <div className="absolute top-40 left-20 w-24 h-24 border border-white/10 rounded-full opacity-15"></div>
      </section>

      {/* Why NRIs Should Consider GIFT City AIFs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#0f172a]/10 rounded-full mb-4">
                  <Globe className="h-6 w-6 text-[#0f172a]" />
              </div>
              <TextReveal as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-8" stagger={0.05}>
                <span className="whitespace-pre">Why GIFT City Matters<br className="block sm:hidden"/> for NRIs</span>
              </TextReveal>
              <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed tracking-wide">
                GIFT City (Gujarat International Finance Tec-City) is India's first International Financial Services Centre (IFSC), 
                designed as a global hub for offshore investments and financial innovation. For NRIs and OCIs, it offers a unique 
                platform to access global investment products with simplified compliance.
              </p>
              <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed tracking-wide">
                Alternative Investment Funds (AIFs) established in GIFT City are gaining significant attention from NRI investors 
                due to their professional management, diversification, global currency access, and seamless repatriation of capital. 
                Bharat Alternates specializes in helping NRIs invest in the best GIFT City AIFs aligned with long-term wealth-building goals.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {[
              {
                icon: Globe,
                title: "Offshore Regulatory Environment",
                description: "Governed by the IFSCA with a globally aligned framework for transparency and investor protection.",
                color: "blue",
              },
              {
                icon: DollarSign,
                title: "Foreign Currency Transactions",
                description: "All investments in foreign currencies like USD, EUR, GBP, AED, removing the need for INR conversion.",
                color: "indigo",
              },
              {
                icon: CreditCard,
                title: "No Indian Bank Account Required",
                description: "Use offshore accounts in GIFT City through IBUs to subscribe and redeem investments.",
                color: "purple",
              },
              {
                icon: Briefcase,
                title: "Professional Fund Management",
                description: "Top Indian and global asset managers operate within GIFT City, offering diverse AIF strategies.",
                color: "teal",
              },
              {
                icon: Landmark,
                title: "Tax Efficiency",
                description: "Potential tax advantages for NRIs compared to direct investments in Indian domestic markets.",
                color: "cyan",
              },
              {
                icon: Shield,
                title: "Global Exposure & Diversification",
                description: "Access to both Indian and international markets with diversified asset allocation.",
                color: "sky",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 rounded-full bg-${benefit.color}-500/10 blur-3xl`}
                ></div>
                <div className="relative">
                  <div
                    className={`w-14 h-14 mb-6 rounded-lg flex items-center justify-center bg-${benefit.color}-100 text-${benefit.color}-600`}
                  >
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <TextReveal>
              <h2 className="text-3xl font-bold mb-6 text-center text-white">Overview</h2>
            </TextReveal>
            <div className="prose prose-lg max-w-none text-gray-300">
              <p>
                GIFT City (Gujarat International Finance Tec-City) is India's first International Financial Services Centre (IFSC), 
                designed as a global hub for offshore investments and financial innovation. For NRIs (Non-Resident Indians) and 
                OCIs (Overseas Citizens of India), GIFT City offers a unique platform to access global investment products with 
                simplified compliance and foreign currency flexibility.
              </p>
              <p>
                Alternative Investment Funds (AIFs) established in GIFT City are gaining significant attention from NRI investors 
                due to their professional management, diversification, global currency access, and seamless repatriation of capital. 
                Bharat Alternates specializes in helping NRIs invest in the best GIFT City AIFs that align with long-term wealth-building goals.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      
      {/* Comparison Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#0f172a]/10 rounded-full mb-4">
                <FileText className="h-6 w-6 text-[#0f172a]" />
              </div>
              <TextReveal as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-8" stagger={0.05}>
                <span className="whitespace-pre">GIFT City vs Domestic AIFs<br className="block sm:hidden"/> Comparison</span>
              </TextReveal>
              <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed tracking-wide">
                Understanding the key differences between domestic AIFs and GIFT City AIFs can help NRIs make informed investment decisions aligned with their global financial goals.
              </p>
            </div>
          </AnimationWrapper>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <tr>
                    <th className="py-3 px-6 text-left font-medium">Feature</th>
                    <th className="py-3 px-6 text-left font-medium">GIFT City AIFs</th>
                    <th className="py-3 px-6 text-left font-medium">Domestic AIFs</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-slate-200 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                    >
                      <td className="py-4 px-6 font-medium text-slate-900">{item.feature}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-start">
                          <div className="mr-2 mt-0.5 flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <span className="text-slate-700">{item.giftCity}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-700">{item.domestic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-blue-50">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Key Takeaway for NRIs</h4>
                  <p className="text-slate-700">
                    GIFT City AIFs offer NRIs the unique advantage of investing in India-focused strategies through a
                    global regulatory framework, using foreign currency with simplified repatriation. This combines the
                    growth potential of Indian markets with the flexibility of international investments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">
              Popular NRI Source Countries
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
              {countryData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{item.flag}</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.country}</h4>
                      <p className="text-sm text-slate-600 mt-1">{item.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* Types of AIFs in GIFT City - SEO Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <TextReveal as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6" stagger={0.05}>
                <span className="whitespace-pre">Types of Alternative Investment <br/> Funds in GIFT City</span>
              </TextReveal>
              <p className="text-lg text-gray-700 leading-relaxed">
                GIFT City offers diverse Alternative Investment Fund categories tailored for NRI investors looking to diversify their investment portfolio in India from abroad.
              </p>
            </div>
          </AnimationWrapper>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-2 bg-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Category I AIFs</h3>
                  <p className="text-gray-700 mb-4">
                    These funds invest in startups, early-stage ventures, SMEs, and infrastructure with government incentives for socially and economically beneficial sectors.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Venture Capital Funds for tech startups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>SME-focused investment vehicles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Infrastructure development funds</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4 italic">
                    Ideal for NRIs interested in impact investing with potential tax benefits under GIFT City regulations.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-2 bg-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Category II AIFs</h3>
                  <p className="text-gray-700 mb-4">
                    The most common type for NRIs, including private equity, debt funds, and real estate funds without any specific incentives or restrictions.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Private equity funds with global diversification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Real estate investment vehicles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Structured debt funds in multiple currencies</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4 italic">
                    Popular among NRIs seeking balanced risk-reward profiles with flexible investment strategies across asset classes.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-2 bg-green-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Category III AIFs</h3>
                  <p className="text-gray-700 mb-4">
                    Trading-focused funds that employ diverse and complex trading strategies with potential for leverage across global markets.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Hedge funds with multi-currency exposure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>PIPE (Private Investment in Public Equity) funds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Quantitative and algorithmic trading strategies</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4 italic">
                    Suited for sophisticated NRI investors seeking potentially higher returns with commensurate higher risk profiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Framework - SEO Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <AnimationWrapper animation="fade-in">
                  <div className="inline-flex items-center justify-center p-2 bg-indigo-900/50 rounded-full mb-4 border border-indigo-500/30">
                    <Shield className="h-6 w-6 text-indigo-400" />
                  </div>
                  <TextReveal as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6" stagger={0.05}>
                    <span className="whitespace-pre">IFSCA Regulatory Framework<br/> for NRI Investors</span>
                  </TextReveal>
                  <div className="prose prose-lg prose-invert text-slate-300">
                    <p>
                      The International Financial Services Centres Authority (IFSCA) provides a comprehensive regulatory framework specifically designed for international financial services in GIFT City, making it an ideal investment destination for Non-Resident Indians.
                    </p>
                    <p>
                      Unlike domestic AIFs regulated by SEBI, GIFT City AIFs operate under the IFSCA's regulations which follow global best practices while offering specific advantages for offshore investors like NRIs, OCIs, and PIOs.
                    </p>
                    <h3 className="text-xl font-semibold text-indigo-300 mt-6 mb-4">Key Regulatory Benefits for NRIs:</h3>
                  </div>
                </AnimationWrapper>

                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-lg border border-slate-700 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/70 flex items-center justify-center flex-shrink-0 border border-indigo-500/30">
                      <DollarSign className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-lg">100% Foreign Currency Operations</h4>
                      <p className="text-slate-300 mt-1">All investments, returns, and repatriations occur in your preferred foreign currency, eliminating FX conversion costs and risks.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-lg border border-slate-700 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/70 flex items-center justify-center flex-shrink-0 border border-indigo-500/30">
                      <Globe className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-lg">Global Market Access</h4>
                      <p className="text-slate-300 mt-1">IFSCA permits GIFT City AIFs to invest in both Indian securities and international markets, offering true global diversification.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-lg border border-slate-700 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/70 flex items-center justify-center flex-shrink-0 border border-indigo-500/30">
                      <FileText className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-lg">Streamlined Compliance</h4>
                      <p className="text-slate-300 mt-1">Simplified regulatory framework designed specifically for international investors with reduced documentation and KYC requirements.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:relative">
                {/* Decorative elements - only visible on larger screens */}
                <div className="hidden lg:block lg:absolute -top-10 -left-10 w-40 h-40 rounded-full bg-indigo-600/10 blur-3xl"></div>
                <div className="hidden lg:block lg:absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-600/10 blur-3xl"></div>
                
                <div className="bg-slate-800/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-slate-700 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">GIFT City vs. Traditional NRI Investment Routes</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-white flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 text-indigo-400 mr-2" />
                        Versus NRE/NRO Direct Investments
                      </h4>
                      <p className="text-slate-300 mt-2 pl-7">
                        No Indian bank account requirement, no need for PIS approval, and full currency flexibility compared to traditional NRE/NRO routes which require conversion to INR.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-white flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 text-indigo-400 mr-2" />
                        Versus Domestic AIFs
                      </h4>
                      <p className="text-slate-300 mt-2 pl-7">
                        Domestic AIFs require NRIs to operate through NRE/NRO accounts, convert to INR, and face repatriation limits, while GIFT City AIFs eliminate these constraints.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-white flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 text-indigo-400 mr-2" />
                        Versus Offshore Funds
                      </h4>
                      <p className="text-slate-300 mt-2 pl-7">
                        GIFT City AIFs provide India exposure with offshore benefits, offering the best of both worlds compared to traditional offshore funds which may lack direct India access.
                      </p>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-700 mt-6">
                      <h4 className="font-medium text-white mb-4 text-lg">Ideal For NRIs From:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {countryData.slice(0, 6).map((item, index) => (
                          <div key={index} className="flex items-center bg-slate-900/80 py-3 px-4 rounded-lg shadow-sm hover:bg-slate-900 transition-colors border border-slate-700 hover:border-indigo-600/50">
                            <span className="mr-2 text-2xl">{item.flag}</span>
                            <span className="text-sm font-medium text-white">{item.country}</span>
                          </div>
                        ))}
                        <div className="flex items-center justify-center bg-indigo-900/30 py-3 px-4 rounded-lg shadow-sm border border-indigo-600/50 hover:bg-indigo-900/50 transition-colors">
                          <span className="text-sm font-medium text-white">+ Many More</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
                <HelpCircle className="h-6 w-6 text-blue-600" />
              </div>
              <TextReveal as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8" stagger={0.05}>
                <span className="whitespace-pre">Frequently Asked Questions<br className="block sm:hidden"/> About GIFT City AIFs</span>
              </TextReveal>
              <p className="text-lg md:text-xl text-gray-700 font-normal leading-relaxed tracking-wide">
                Answers to common questions NRIs have about investing in GIFT City AIFs
              </p>
            </div>
          </AnimationWrapper>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqsData.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <details className="group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-150">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <Plus className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300 text-blue-600" />
                      <Minus className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300 text-blue-600" />
                    </span>
                  </summary>
                  <div className="px-5 py-4 bg-white">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Update button */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Invest in GIFT City AIFs?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Bharat Alternates provides end-to-end support for NRIs worldwide, from fund selection to compliance management. Our experts will guide you through every step of the investment process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CalendlyButton variant="default" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Schedule a Consultation
              </CalendlyButton>
            </div>
          </div>
        </div>
      </section>



      <ContactFloat />
    </>
  )
}
