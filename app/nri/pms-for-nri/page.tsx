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

export default function NRIPage() {
  // PMS performance data
  const pmsData = [
    { name: "Savvy Capital Advisors", cagr: "59.00%", strategy: "High-Conviction Equity", value: "59" },
    { name: "Green Lantern Growth Fund", cagr: "58.05%", strategy: "Growth-Oriented", value: "58.05" },
    { name: "Aequitas India Opportunities", cagr: "55.74%", strategy: "Deep Value & Cyclical", value: "55.74" },
    { name: "Negen Capital PMS", cagr: "50.07%", strategy: "Special Situations", value: "50.07" },
    { name: "Quantum Equity", cagr: "48.32%", strategy: "Multi-Cap Growth", value: "48.32" },
    { name: "Stallion Asset Core Fund", cagr: "47.15%", strategy: "Quality Growth", value: "47.15" },
  ]

  // Chart data for performance comparison
  const performanceData = [
    { name: "Jan", pms: 4000, nifty: 2400 },
    { name: "Feb", pms: 3000, nifty: 1398 },
    { name: "Mar", pms: 2000, nifty: 9800 },
    { name: "Apr", pms: 2780, nifty: 3908 },
    { name: "May", pms: 1890, nifty: 4800 },
    { name: "Jun", pms: 2390, nifty: 3800 },
    { name: "Jul", pms: 3490, nifty: 4300 },
    { name: "Aug", pms: 4000, nifty: 2400 },
    { name: "Sep", pms: 5000, nifty: 3398 },
    { name: "Oct", pms: 6000, nifty: 4800 },
    { name: "Nov", pms: 7000, nifty: 5800 },
    { name: "Dec", pms: 9000, nifty: 6800 },
  ]

  // Pie chart data for asset allocation
  const assetAllocationData = [
    { name: "Large Cap", value: 40, color: "#3b82f6" },
    { name: "Mid Cap", value: 30, color: "#8b5cf6" },
    { name: "Small Cap", value: 20, color: "#10b981" },
    { name: "Cash", value: 10, color: "#f97316" },
  ]

  // Sector allocation data
  const sectorAllocationData = [
    { name: "Financial Services", value: 25, fill: "#3b82f6" },
    { name: "IT", value: 20, fill: "#8b5cf6" },
    { name: "Consumer", value: 15, fill: "#10b981" },
    { name: "Healthcare", value: 12, fill: "#f97316" },
    { name: "Manufacturing", value: 10, fill: "#ef4444" },
    { name: "Others", value: 18, fill: "#6b7280" },
  ]

  // Country flags with more detailed data
  const countryData = [
    { flag: "🇺🇸", country: "United States", details: "FATCA Compliant, DTAA Benefits" },
    { flag: "🇦🇪", country: "UAE", details: "Dubai, Abu Dhabi, Tax-Free Repatriation" },
    { flag: "🇸🇬", country: "Singapore", details: "Favorable DTAA, Easy Remittance" },
    { flag: "🇬🇧", country: "United Kingdom", details: "Strong DTAA Benefits" },
    { flag: "🇦🇺", country: "Australia", details: "Streamlined Investment Process" },
    { flag: "🇰🇪", country: "Kenya", details: "Growing NRI Investment Hub" },
    { flag: "🇨🇦", country: "Canada", details: "Favorable Tax Treatment" },
    { flag: "🇶🇦", country: "Qatar", details: "Tax-Free Income in Home Country" },
    { flag: "🇳🇬", country: "Nigeria", details: "Emerging NRI Investment Market" },
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
        
        .animate-draw-line {
          animation: drawLine 2s ease-in-out forwards;
        }
        
        .animate-bounce-subtle {
          animation: bounceSubtle 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-fade-in-scale {
          animation: fadeInScale 1s ease-out forwards;
        }
        
        .animate-slide-up-fade {
          animation: slideUpFade 1s ease-out forwards;
        }
        
        .animate-shimmer {
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite linear;
        }
        
        .animate-gradient-flow {
          background-size: 400% 400%;
          animation: gradientFlow 8s ease infinite;
        }

        .whitespace-fix {
          word-spacing: 0.25em;
          letter-spacing: 0.05em;
        }
      `}</style>
      <ContactFloat />

      {/* Hero Section - New Design with Different Animation */}
      <section className="relative overflow-hidden h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#0f172a]/90 to-[#0f172a]/80 animate-gradient-flow">
        {/* Particle Network Background */}
        <div className="absolute inset-0 z-10">
          <div className="relative w-full h-full">
            {/* Horizontal Lines */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`h-line-${i}`}
                className="absolute h-px bg-blue-400/10 w-full"
                style={{
                  top: `${(i + 1) * 12}%`,
                  transform: `translateY(${Math.sin(i * 0.5) * 20}px)`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}

            {/* Vertical Lines */}
            {[...Array(10)].map((_, i) => (
              <div
                key={`v-line-${i}`}
                className="absolute w-px bg-blue-400/10 h-full"
                style={{
                  left: `${(i + 1) * 10}%`,
                  transform: `translateX(${Math.cos(i * 0.5) * 20}px)`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute rounded-full bg-white/5 backdrop-blur-sm"
                style={{
                  width: `${Math.floor(Math.random() * 8 + 2)}px`,
                  height: `${Math.floor(Math.random() * 8 + 2)}px`,
                  top: `${Math.floor(Math.random() * 100)}%`,
                  left: `${Math.floor(Math.random() * 100)}%`,
                  animation: `floating-${(i % 3) + 1} ${Math.floor(Math.random() * 10 + 15)}s infinite ease-in-out`,
                  opacity: Math.random() * 0.5 + 0.2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-blue-950 z-10"></div>

        {/* Hero Content */}
        <div className="container relative z-20 mx-auto px-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto mb-6 flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-700/80 to-blue-800/80 backdrop-blur-md border border-blue-600/50 text-white/90 w-fit"
            >
              <Globe className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">For Non-Resident Indians Worldwide</span>
            </motion.div>

            {/* Main Heading with Text Animation */}
            <div className="text-center mb-8">
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
                  <span className="whitespace-pre">Best PMS for NRIs</span>
                </TextReveal>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-lg md:text-2xl text-slate-300 mt-6 max-w-3xl mx-auto leading-relaxed tracking-wide font-normal">
                  Access India's top-performing Portfolio Management Services designed specifically for Non-Resident
                  Indians looking to capitalize on India's economic growth story.
                </p>
              </motion.div>
        </div>

            {/* Stats Counters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mt-12 mb-16"
            >
              {[
                { value: "50L+", label: "Min Investment" },
                { value: "15+", label: "PMS Options" },
                { value: "20%+", label: "Avg. Returns" },
                { value: "25+", label: "Countries Served" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                  className="flex flex-col items-center p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10"
                >
                  <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                    {stat.value}
                  </span>
                  <span className="text-sm text-slate-400 mt-1">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-subtle"
            >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
                <ChevronDown className="h-6 w-6 text-slate-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 border border-white/10 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 border border-white/10 rounded-full opacity-10"></div>
        <div className="absolute top-40 left-20 w-24 h-24 border border-white/10 rounded-full opacity-15"></div>
      </section>

      {/* Why NRIs Should Consider PMS Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#0f172a]/10 rounded-full mb-4">
                  <Globe className="h-6 w-6 text-[#0f172a]" />
              </div>
              <TextReveal as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-8" stagger={0.05}>
                <span className="whitespace-pre">Why NRIs Should<br className="block sm:hidden"/> Consider PMS<br className="block sm:hidden"/> in India</span>
              </TextReveal>
              <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed tracking-wide">
                India is one of the fastest-growing major economies globally, making it a prime opportunity for
                Non-Resident Indians (NRIs) looking to invest. Portfolio Management Services (PMS) provide NRIs with an
                opportunity to tap into India's growth story with an expertly managed investment strategy.
              </p>
              <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed tracking-wide">
                As an NRI, investing in PMS allows you to gain access to high-return equity strategies, transparency,
                and complete control over your portfolio. With a personalized investment approach tailored to your
                specific goals, PMS provides much higher potential than traditional investment options such as mutual
                funds.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {[
              {
                icon: TrendingUp,
                title: "Exposure to India's Growth",
                description: "Access to India's top-performing equity strategies with high growth potential.",
                color: "blue",
              },
              {
                icon: BarChart2,
                title: "Higher Alpha Generation",
                description: "Significantly better returns compared to mutual funds and passive investments.",
                color: "indigo",
              },
              {
                icon: Eye,
                title: "Full Portfolio Transparency",
                description: "Complete visibility with direct stock ownership and regular performance updates.",
                color: "purple",
              },
              {
                icon: Target,
                title: "Personalized Portfolio",
                description:
                  "Tailored investment approach aligned with your specific financial goals and risk appetite.",
                color: "teal",
              },
              {
                icon: Shield,
                title: "Regulatory Protection",
                description: "SEBI-regulated investment vehicle with strong investor protection mechanisms.",
                color: "cyan",
              },
              {
                icon: FileText,
                title: "Tax Optimization",
                description: "Expert guidance on tax efficiency and compliance for international investors.",
                color: "slate",
              },
            ].map((benefit, index) => (
              <AnimationWrapper key={index} animation="scale-in" delay={index * 0.1}>
                <Card className="border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 overflow-hidden group">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <benefit.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-blue-800 group-hover:text-blue-600 transition-colors duration-300">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 text-lg leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                  <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-500"></div>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Bharat Alternates Section */}
      <ParallaxSection className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#0f172a]/95" speed={0.1} direction="up">
        {/* Glassmorphic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl -top-48 -left-48"></div>
          <div className="absolute w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl -bottom-48 -right-48"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimationWrapper animation="fade-in">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-white/5 backdrop-blur-sm rounded-full mb-4">
                <Zap className="h-6 w-6 text-blue-400" />
              </div>
              <TextReveal as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8" stagger={0.05}>
                <span className="whitespace-pre">Why Choose<br className="block sm:hidden"/> Bharat Alternates<br className="block sm:hidden"/> for Your NRI PMS Investment</span>
              </TextReveal>
              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed tracking-wide">
                At Bharat Alternates, we offer NRIs a seamless platform to invest in India's best-performing PMS
                options. As a SEBI-registered distributor, we bring expertise, regulatory compliance, and transparency
                to your investment experience.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Update the cards to have glassmorphic effect */}
            <AnimationWrapper animation="slide-in-right">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 h-full border border-white/10 hover:bg-white/10 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">What You Get with Bharat Alternates:</h3>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Bharat Alternates provides specialized PMS investment services for Non-Resident Indians across the
                  globe. Take advantage of India's high-growth market potential with tax-optimized investment strategies
                  designed specifically for NRIs from these countries, leveraging DTAA benefits and specialized
                  financial planning.
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      icon: Globe,
                      text: "End-to-end digital onboarding, ensuring a quick and secure start to your investment journey.",
                    },
                    {
                      icon: LineChart,
                      text: "Access to a curated list of top-performing PMS from India's leading asset managers.",
                    },
                    {
                      icon: Users,
                      text: "Dedicated relationship managers who understand the specific needs of NRIs.",
                    },
                    {
                      icon: DollarSign,
                      text: "Tax-efficient PMS solutions designed for NRE/NRO accounts.",
                    },
                    {
                      icon: Eye,
                      text: "Complete portfolio access and performance tracking at your fingertips.",
                    },
                    {
                      icon: Shield,
                      text: "SEBI-regulated investment options with robust compliance and investor protection.",
                    },
                    {
                      icon: TrendingUp,
                      text: "Exposure to India's high-growth sectors like technology, healthcare, and financial services.",
                    },
                    
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="mr-4 mt-1 bg-blue-100 p-2 rounded-full">
                        <item.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="text-slate-300 text-lg">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-left">
              <div className="bg-white rounded-xl shadow-md p-8 h-full border border-slate-100 hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-bold text-blue-800 mb-6 tracking-tight">Global Coverage for NRIs:</h3>
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  We serve NRIs worldwide with specialized PMS investment services tailored to your specific location,
                  tax considerations, and regulatory requirements.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { flag: "🇺🇸", country: "United States", details: "FATCA Compliant, DTAA Benefits", icon: "us" },
                    { flag: "🇦🇪", country: "UAE", details: "Dubai, Abu Dhabi, Tax-Free Repatriation", icon: "ae" },
                    { flag: "🇸🇬", country: "Singapore", details: "Favorable DTAA, Easy Remittance", icon: "sg" },
                    { flag: "🇬🇧", country: "United Kingdom", details: "Strong DTAA Benefits", icon: "gb" },
                    { flag: "🇦🇺", country: "Australia", details: "Streamlined Investment Process", icon: "au" },
                    { flag: "🇰🇪", country: "Kenya", details: "Growing NRI Investment Hub", icon: "ke" },
                    { flag: "🇨🇦", country: "Canada", details: "Favorable Tax Treatment", icon: "ca" },
                    { flag: "🇶🇦", country: "Qatar", details: "Tax-Free Income in Home Country", icon: "qa" },
                    { flag: "🇳🇬", country: "Nigeria", details: "Emerging NRI Investment Market", icon: "ng" },
                  ].map((country, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer group"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center mb-2">
                        <span className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">
                          {country.flag}
                        </span>
                        <span className="text-sm font-medium text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                          {country.country}
                        </span>
                      </div>
                      <span className="text-xs text-slate-600 group-hover:text-blue-600 transition-colors duration-300">
                        {country.details}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </ParallaxSection>

      {/* Performance Data Section */}
      <section className="py-24 bg-white" ref={targetRef}>
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#0f172a]/10 rounded-full mb-4">
                <LineChart className="h-6 w-6 text-[#0f172a]" />
              </div>
              <TextReveal as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-8" stagger={0.05}>
                <span className="whitespace-pre">Performance Data:<br className="block sm:hidden"/> Top PMS for NRIs</span>
              </TextReveal>
              <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed tracking-wide">
                These Portfolio Management Services have consistently delivered strong returns for NRI investors,
                combining robust strategies with expert market insights.
              </p>
            </div>
          </AnimationWrapper>

          <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" style={{ opacity, scale }}>
            <div className="lg:col-span-2">
              <AnimationWrapper animation="slide-up">
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-500">
                  <div className="p-4 border-b border-slate-200">
                    <h3 className="text-xl font-bold text-blue-800">Top Performing PMS Strategies</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <InteractiveTable
                      data={pmsData}
                      columns={[
                        { header: "PMS Name", accessor: "name" },
                        { header: "5-Year CAGR", accessor: "cagr" },
                        { header: "Strategy Focus", accessor: "strategy" },
                      ]}
                    />
                  </div>
                  <div className="p-4 text-sm text-slate-600 border-t border-slate-200">
                    <p>**Returns are post-fee, pre-tax as on 31/03/2025</p>
                  </div>
                </div>
              </AnimationWrapper>
            </div>

            <div className="lg:col-span-1">
              <AnimationWrapper animation="slide-in-left">
                <div className="bg-white rounded-xl shadow-md p-6 h-full border border-slate-200 hover:shadow-xl transition-all duration-500">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Asset Allocation</h3>

                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          activeIndex={activeIndex}
                          activeShape={renderActiveShape}
                          data={assetAllocationData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          onMouseEnter={onPieEnter}
                        >
                          {assetAllocationData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Allocation Breakdown</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {assetAllocationData.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                          <span className="text-xs text-slate-700">
                            {item.name}: {item.value}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </motion.div>

          {/* Additional Performance Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
            <AnimationWrapper animation="slide-up" delay={0.2}>
              <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-xl transition-all duration-500">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">PMS vs Nifty Performance</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={performanceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorPms" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorNifty" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="pms"
                        stroke="#3b82f6"
                        fillOpacity={1}
                        fill="url(#colorPms)"
                        name="PMS Returns"
                      />
                      <Area
                        type="monotone"
                        dataKey="nifty"
                        stroke="#f97316"
                        fillOpacity={1}
                        fill="url(#colorNifty)"
                        name="Nifty Returns"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slide-up" delay={0.3}>
              <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-xl transition-all duration-500">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Sector Allocation</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart
                      data={sectorAllocationData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" width={100} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" name="Allocation %" radius={[0, 4, 4, 0]}>
                        {sectorAllocationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* PMS vs Mutual Funds Section - Enhanced Table Design */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#0f172a]/10 rounded-full mb-4">
                <BarChart2 className="h-6 w-6 text-[#0f172a]" />
              </div>
              <TextReveal as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-8" stagger={0.05}>
                <span className="whitespace-pre">PMS vs Mutual Funds for NRIs</span>
              </TextReveal>
              <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed tracking-wide">
                Understand the key differences between Portfolio Management Services and Mutual Funds to make informed
                investment decisions for your financial goals.
              </p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper animation="slide-up">
            <div className="max-w-5xl mx-auto">
              {/* Modern Comparison Table */}
              <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-slate-100">
                {/* Table Header */}
                <div className="grid grid-cols-3">
                  <div className="p-6 bg-slate-50 border-b border-slate-200">
                    <h3 className="text-xl font-bold text-slate-700">Features</h3>
              </div>
                  <div className="p-6 bg-blue-600 border-b border-blue-700 text-center">
                    <div className="flex justify-center items-center mb-3">
                      <div className="p-2 bg-white/10 rounded-full">
                        <Briefcase className="h-6 w-6 text-white" />
            </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">PMS for NRIs</h3>
                  </div>
                  <div className="p-6 bg-slate-100 border-b border-slate-200 text-center">
                    <div className="flex justify-center items-center mb-3">
                      <div className="p-2 bg-slate-200/80 rounded-full">
                        <BarChart2 className="h-6 w-6 text-slate-700" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-700">Mutual Funds</h3>
                  </div>
                </div>

                {/* Table Body */}
                <div>
                  {/* Row 1 */}
                  <div className="grid grid-cols-3 border-b border-slate-100">
                    <div className="p-6 bg-slate-50 font-medium text-slate-800">Customization</div>
                    <div className="p-6 text-center border-r border-slate-100">
                      <div className="flex items-center justify-center">
                        <div className="bg-green-100 rounded-full p-1">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="ml-2 font-medium text-green-600">High</span>
                      </div>
                      <p className="text-sm text-slate-600 mt-2">Tailored to your specific needs</p>
                    </div>
                    <div className="p-6 text-center">
                      <div className="flex items-center justify-center">
                        <div className="bg-red-100 rounded-full p-1">
                          <X className="h-5 w-5 text-red-600" />
                        </div>
                        <span className="ml-2 font-medium text-red-600">None</span>
                      </div>
                      <p className="text-sm text-slate-600 mt-2">Standard for all investors</p>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-3 border-b border-slate-100">
                    <div className="p-6 bg-slate-50 font-medium text-slate-800">Direct Stock Ownership</div>
                    <div className="p-6 text-center border-r border-slate-100">
                      <div className="flex items-center justify-center">
                        <div className="bg-green-100 rounded-full p-1">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="ml-2 font-medium text-green-600">Yes</span>
                      </div>
                      <p className="text-sm text-slate-600 mt-2">Stocks held in your name</p>
                    </div>
                    <div className="p-6 text-center">
                      <div className="flex items-center justify-center">
                        <div className="bg-red-100 rounded-full p-1">
                          <X className="h-5 w-5 text-red-600" />
                        </div>
                        <span className="ml-2 font-medium text-red-600">No</span>
                      </div>
                      <p className="text-sm text-slate-600 mt-2">Units in a collective pool</p>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-3 border-b border-slate-100">
                    <div className="p-6 bg-slate-50 font-medium text-slate-800">Minimum Investment</div>
                    <div className="p-6 text-center border-r border-slate-100">
                      <span className="text-xl font-bold text-blue-600">₹50 Lakhs</span>
                      <p className="text-sm text-slate-600 mt-2">Higher entry barrier</p>
                    </div>
                    <div className="p-6 text-center">
                      <span className="text-xl font-bold text-slate-700">₹500</span>
                      <p className="text-sm text-slate-600 mt-2">Accessible to all</p>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="grid grid-cols-3 border-b border-slate-100">
                    <div className="p-6 bg-slate-50 font-medium text-slate-800">Transparency</div>
                    <div className="p-6 text-center border-r border-slate-100">
                      <div className="flex items-center justify-center">
                        <div className="bg-green-100 rounded-full p-1">
                          <Eye className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="ml-2 font-medium text-green-600">High</span>
                      </div>
                      <p className="text-sm text-slate-600 mt-2">Complete portfolio visibility</p>
                    </div>
                    <div className="p-6 text-center">
                      <div className="flex items-center justify-center">
                        <div className="bg-yellow-100 rounded-full p-1">
                          <AlertCircle className="h-5 w-5 text-yellow-600" />
                        </div>
                        <span className="ml-2 font-medium text-yellow-600">Moderate</span>
                      </div>
                      <p className="text-sm text-slate-600 mt-2">Limited disclosures</p>
                    </div>
                  </div>

                  {/* Row 5 */}
                  <div className="grid grid-cols-3 border-b border-slate-100">
                    <div className="p-6 bg-slate-50 font-medium text-slate-800">Performance Potential</div>
                    <div className="p-6 text-center border-r border-slate-100">
                      <div className="flex items-center justify-center">
                        <div className="bg-blue-100 rounded-full p-1">
                          <TrendingUp className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="ml-2 font-medium text-blue-600">Higher</span>
                      </div>
                      <p className="text-sm text-slate-600 mt-2">Concentrated high-conviction approach</p>
                    </div>
                    <div className="p-6 text-center">
                      <div className="flex items-center justify-center">
                        <div className="bg-slate-100 rounded-full p-1">
                          <BarChart2 className="h-5 w-5 text-slate-600" />
                        </div>
                        <span className="ml-2 font-medium text-slate-600">Moderate</span>
                      </div>
                      <p className="text-sm text-slate-600 mt-2">Diversified approach</p>
                    </div>
                  </div>

                  {/* Row 6 */}
                  <div className="grid grid-cols-3">
                    <div className="p-6 bg-slate-50 font-medium text-slate-800">Relationship Support</div>
                    <div className="p-6 text-center border-r border-slate-100">
                      <div className="flex items-center justify-center">
                        <div className="bg-green-100 rounded-full p-1">
                          <Users className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="ml-2 font-medium text-green-600">Dedicated RM</span>
                      </div>
                      <p className="text-sm text-slate-600 mt-2">Personalized attention</p>
                    </div>
                    <div className="p-6 text-center">
                      <div className="flex items-center justify-center">
                        <div className="bg-red-100 rounded-full p-1">
                          <X className="h-5 w-5 text-red-600" />
                        </div>
                        <span className="ml-2 font-medium text-red-600">Limited</span>
                      </div>
                      <p className="text-sm text-slate-600 mt-2">Standardized support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-semibold text-blue-800 mb-2">Our Recommendation</h3>
                <p className="text-slate-700">
                  For NRIs with ₹50 lakhs or more to invest, PMS offers significantly greater customization, control,
                  and personalized service. This ensures your portfolio is directly aligned with your financial goals,
                  tax situation, and risk appetite while providing the potential for higher returns.
            </p>
          </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Ideal NRIs Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#0f172a]/95">
        {/* Glassmorphic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl -top-48 -right-48"></div>
          <div className="absolute w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl -bottom-48 -left-48"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimationWrapper animation="fade-in">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-white/5 backdrop-blur-sm rounded-full mb-4">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <TextReveal as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8" stagger={0.05}>
                <span className="whitespace-pre">Ideal NRIs for PMS Investments</span>
              </TextReveal>
              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed tracking-wide">
                Portfolio Management Services (PMS) are designed for those looking to maximize their investments and are
                ideal for the following types of NRIs:
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "High Capital Investors",
                description: "NRIs with ₹50 lakh+ capital to invest.",
                icon: DollarSign,
                color: "blue",
              },
              {
                title: "Professionals & Business Owners",
                description: "Professionals or business owners seeking an active investment approach.",
                icon: Briefcase,
                color: "indigo",
              },
              {
                title: "Second-Generation NRIs",
                description: "Second-generation NRIs looking to capitalize on India's growth potential.",
                icon: Globe,
                color: "purple",
              },
              {
                title: "High-Net-Worth Individuals",
                description: "HNIs seeking transparency and personalized investment strategies.",
                icon: Target,
                color: "teal",
              },
            ].map((item, index) => (
              <AnimationWrapper key={index} animation="scale-in" delay={index * 0.1}>
                <motion.div
                  className="flex bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  <div className="mr-4 flex-shrink-0 bg-blue-500/10 p-3 rounded-full">
                    <item.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-base leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              </AnimationWrapper>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-8 text-center">
            <p className="text-lg text-slate-300">
              If you fall into these categories, PMS is an excellent choice for expanding your wealth.
            </p>
          </div>
        </div>
      </section>

      {/* Taxation Guide Section - Enhanced Design */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#0f172a]/10 rounded-full mb-4">
                <FileText className="h-6 w-6 text-[#0f172a]" />
              </div>
              <TextReveal as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-8" stagger={0.05}>
                <span className="whitespace-pre">NRI Taxation Guide<br className="block sm:hidden"/> for PMS Investments</span>
              </TextReveal>
              <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed tracking-wide">
                Understanding the tax implications of your PMS investments is crucial for NRIs. Here's what you need to know about the taxation aspects when investing in India through PMS.
              </p>
            </div>
          </AnimationWrapper>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Tax Cards */}
            <div className="col-span-1 lg:col-span-8">
              <div className="bg-gradient-to-br from-[#0f172a] to-[#0f172a]/90 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Tax Implications for NRI PMS Investors</h3>
              </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Short-Term Capital Gains",
                        rate: "20%",
                        description: "For equities held less than 12 months",
                        icon: Clock,
                        color: "blue",
                      },
                      {
                        title: "Long-Term Capital Gains",
                        rate: "12.5%",
                        description: "For equities held more than 12 months (after ₹1L exemption)",
                        icon: TrendingUp,
                        color: "green",
                      },
                      {
                        title: "Dividend Income",
                        rate: "As per slab rate",
                        description: "Taxed according to individual income tax slab",
                        icon: DollarSign,
                        color: "yellow",
                      },
                      {
                        title: "TDS Applicability",
                        rate: "Varies",
                        description: "As per DTAA with respective countries",
                        icon: FileText,
                        color: "red",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/5 hover:bg-white/20 transition-all duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-start">
                          {item.color === "blue" && (
                            <div className="rounded-full p-3 bg-navy-700 mr-4">
                              <item.icon className="h-5 w-5 text-sky-400" />
            </div>
                          )}
                          {item.color === "green" && (
                            <div className="rounded-full p-3 bg-navy-700 mr-4">
                              <item.icon className="h-5 w-5 text-emerald-400" />
                            </div>
                          )}
                          {item.color === "yellow" && (
                            <div className="rounded-full p-3 bg-navy-700 mr-4">
                              <item.icon className="h-5 w-5 text-amber-400" />
                            </div>
                          )}
                          {item.color === "red" && (
                            <div className="rounded-full p-3 bg-navy-700 mr-4">
                              <item.icon className="h-5 w-5 text-rose-400" />
                            </div>
                          )}
                          <div>
                            <h4 className="font-semibold text-white mb-2 text-lg">{item.title}</h4>
                            <p className="text-sm text-slate-300 mb-2 leading-relaxed">{item.description}</p>
                            <div className="text-2xl font-bold text-white">{item.rate}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Country-specific DTAA Cards */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    country: "United States 🇺🇸",
                    benefits: [
                      "Favorable LTCG tax rates",
                      "Reduced withholding tax on dividends",
                      "Foreign tax credits",
                    ],
                  },
                  {
                    country: "UAE 🇦🇪",
                    benefits: ["Zero tax in UAE", "Capital gains exemptions", "No tax on repatriation"],
                  },
                  {
                    country: "Singapore 🇸🇬",
                    benefits: [
                      "Reduced tax on capital gains",
                      "Tax relief on dividend income",
                      "Foreign income exemption",
                    ],
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100">
                    <div className="bg-navy-100 p-4 border-b border-navy-200">
                      <h4 className="font-bold text-navy-800 text-lg">{item.country}</h4>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        {item.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-4 w-4 text-navy-600 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-sm text-slate-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Content */}
            <div className="col-span-1 lg:col-span-4 space-y-8">
              {/* DTAA Benefits Box */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100">
                <div className="bg-[#0f172a] py-4 px-6">
                  <h3 className="text-xl font-bold text-white">DTAA Benefits</h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 mb-4">
                    Double Taxation Avoidance Agreements (DTAA) help NRIs avoid paying tax twice on the same income.
                  </p>

                  <ul className="space-y-3 mt-4">
                    {[
                      "No double taxation on the same income",
                      "Reduced tax rates for certain income types",
                      "Tax credit mechanism for taxes paid abroad",
                      "Special provisions for capital gains",
                      "Protection against discriminatory taxation",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-navy-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tax Planning Tips */}
              <div className="bg-gradient-to-br from-navy-50 to-slate-50 rounded-xl shadow-md overflow-hidden border border-navy-100">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy-800 mb-4 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-navy-600" />
                    Tax Planning Tips
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Invest through NRE accounts for better tax advantages",
                      "Hold investments for >12 months to qualify for LTCG",
                      "Time your redemptions strategically across tax years",
                      "Consider gift tax implications when transferring assets",
                      "Maintain proper documentation for DTAA benefits",
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="rounded-full bg-navy-100 p-1 mt-1 mr-2">
                          <Check className="h-3 w-3 text-navy-600" />
                        </div>
                        <span className="text-sm text-slate-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Important Note Section */}
          <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-navy-600">
            <div className="p-6 flex">
              <div className="mr-4 flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-navy-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-800 mb-2">Important Note</h3>
                <p className="text-slate-700 mb-2">
                  Tax regulations may change based on budget announcements and policy updates. We recommend consulting
                  with a tax advisor familiar with both Indian tax laws and the tax laws of your country of residence.
                </p>
                <p className="text-slate-700">
                  Bharat Alternates provides free tax guidance for all NRI clients and can connect you with specialized
                  tax advisors for your specific jurisdiction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 100% Seamless Onboarding Section - Enhanced */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#0f172a]/10 rounded-full mb-4">
                <CheckCircle className="h-6 w-6 text-[#0f172a]" />
              </div>
              <TextReveal as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-8" stagger={0.05}>
                <span className="whitespace-pre">100% Seamless<br className="block sm:hidden"/> Onboarding for NRIs</span>
              </TextReveal>
              <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed">
                We've simplified the entire process for NRIs investing in PMS through Bharat Alternates. Our
                digital-first approach ensures you can start investing from anywhere in the world with minimal
                paperwork.
              </p>
            </div>
          </AnimationWrapper>

          <div className="max-w-5xl mx-auto">
            {/* Timeline Component */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-500 z-0"></div>

              {/* Timeline Items */}
              <div className="relative z-10">
                {/* Step 1 */}
                <div className="mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-start md:items-center pl-16 md:pl-0"
                  >
                    <div className="w-full md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                      <div className="bg-gradient-to-br from-navy-50 to-slate-50 p-6 rounded-xl shadow-md border border-navy-100">
                        <h3 className="text-xl font-bold text-navy-800 mb-3">Initial Consultation</h3>
                        <p className="text-slate-700 text-lg leading-relaxed">
                          Schedule a video call with our NRI investment specialist to discuss your financial goals, risk
                          tolerance, and investment preferences. We'll explain our PMS strategies and customize an
                          investment plan that aligns with your objectives.
                        </p>
                        <div className="mt-4 flex items-center text-navy-600">
                          <Clock className="h-5 w-5 mr-2" />
                          <span className="text-sm font-medium">30-minute consultation</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 relative">
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-20 md:translate-x-0 bg-white border-4 border-navy-600 w-12 h-12 rounded-full flex items-center justify-center text-navy-600 font-bold">
                        1
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2 md:pl-12"></div>
                  </motion.div>
                </div>

                {/* Step 2 */}
                <div className="mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-start md:items-center pl-16 md:pl-0"
                  >
                    <div className="hidden md:block md:w-1/2 md:pr-12"></div>
                    <div className="flex-shrink-0 relative">
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-20 md:translate-x-0 bg-white border-4 border-navy-600 w-12 h-12 rounded-full flex items-center justify-center text-navy-600 font-bold">
                        2
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-12 mb-6 md:mb-0 md:text-left">
                      <div className="bg-gradient-to-br from-navy-50 to-slate-50 p-6 rounded-xl shadow-md border border-navy-100">
                        <h3 className="text-xl font-bold text-navy-800 mb-3">Digital Documentation</h3>
                        <p className="text-slate-700">
                          Complete all required forms digitally through our secure portal. Our team will guide you
                          through the KYC process, ensuring compliance with Indian regulations while minimizing
                          paperwork. We handle FEMA compliance and verification on your behalf.
                        </p>
                        <div className="mt-4 flex items-center text-navy-600">
                          <Shield className="h-5 w-5 mr-2" />
                          <span className="text-sm font-medium">Secure & encrypted process</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Step 3 */}
                <div className="mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-start md:items-center pl-16 md:pl-0"
                  >
                    <div className="w-full md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                      <div className="bg-gradient-to-br from-navy-50 to-slate-50 p-6 rounded-xl shadow-md border border-navy-100">
                        <h3 className="text-xl font-bold text-navy-800 mb-3">Account Setup</h3>
                        <p className="text-slate-700">
                          We'll help you set up your NRE/NRO accounts with our partner banks if needed. Our team assists
                          in establishing the necessary investment accounts with depositories and custodians, ensuring
                          seamless fund transfers from your international accounts.
                        </p>
                        <div className="mt-4 flex items-center text-navy-600">
                          <Globe className="h-5 w-5 mr-2" />
                          <span className="text-sm font-medium">International banking support</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 relative">
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-20 md:translate-x-0 bg-white border-4 border-navy-600 w-12 h-12 rounded-full flex items-center justify-center text-navy-600 font-bold">
                        3
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2 md:pl-12"></div>
                  </motion.div>
                </div>

                {/* Step 4 */}
                <div className="mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-start md:items-center pl-16 md:pl-0"
                  >
                    <div className="w-full md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                      <div className="bg-gradient-to-br from-navy-50 to-slate-50 p-6 rounded-xl shadow-md border border-navy-100">
                        <h3 className="text-xl font-bold text-navy-800 mb-3">Investment Deployment</h3>
                        <p className="text-slate-700">
                          Once your account is active and funds are transferred, we'll deploy your investments according
                          to the agreed strategy. Our team ensures optimal timing and strategic allocation based on
                          market conditions and your investment goals.
                        </p>
                        <div className="mt-4 flex items-center text-navy-600">
                          <TrendingUp className="h-5 w-5 mr-2" />
                          <span className="text-sm font-medium">Strategic market entry</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 relative">
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-20 md:translate-x-0 bg-white border-4 border-navy-600 w-12 h-12 rounded-full flex items-center justify-center text-navy-600 font-bold">
                        4
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-12 mb-6 md:mb-0 md:text-left">
                      <div className="bg-gradient-to-br from-navy-50 to-slate-50 p-6 rounded-xl shadow-md border border-navy-100">
                        <h3 className="text-xl font-bold text-navy-800 mb-3">Investment Deployment</h3>
                        <p className="text-slate-700">
                          Once your account is active and funds are transferred, we'll deploy your investments according
                          to the agreed strategy. Our team ensures optimal timing and strategic allocation based on
                          market conditions and your investment goals.
                        </p>
                        <div className="mt-4 flex items-center text-navy-600">
                          <TrendingUp className="h-5 w-5 mr-2" />
                          <span className="text-sm font-medium">Strategic market entry</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Step 5 */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-start md:items-center pl-16 md:pl-0"
                  >
                    <div className="w-full md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                      <div className="bg-gradient-to-br from-navy-50 to-slate-50 p-6 rounded-xl shadow-md border border-navy-100">
                        <h3 className="text-xl font-bold text-navy-800 mb-3">Ongoing Management & Reporting</h3>
                        <p className="text-slate-700">
                          Access your portfolio performance through our secure digital dashboard anytime, anywhere.
                          Receive monthly performance reports, quarterly strategic updates, and annual tax statements.
                          Our dedicated relationship manager is available for regular review calls.
                        </p>
                        <div className="mt-4 flex items-center text-navy-600">
                          <BarChart2 className="h-5 w-5 mr-2" />
                          <span className="text-sm font-medium">24/7 digital access</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 relative">
                      <div className="relative bg-white border-4 border-navy-600 w-12 h-12 rounded-full flex items-center justify-center text-navy-600 font-bold">
                        5
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2 md:pl-12"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-2xl overflow-hidden shadow-xl">
              <div className="px-8 py-10 relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-navy-700 rounded-full -mt-12 -mr-12 opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-navy-700 rounded-full -mb-8 -ml-8 opacity-30"></div>

                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your PMS Investment Journey?</h3>
                  <p className="text-white mb-8 max-w-2xl mx-auto">
                    Our NRI specialists are standing by to guide you through every step of the process. Experience the
                    Bharat Alternates difference with our tailored approach to NRI investments.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <CalendlyButton variant="secondary" size="lg" className="bg-white text-navy-800 hover:bg-navy-50">
                      <div className="flex items-center">
                        <PhoneCall className="h-5 w-5 mr-2" />
                        Schedule a Consultation
                      </div>
                    </CalendlyButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section - Enhanced with Accordion */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-[#0f172a]/10 rounded-full mb-4">
              <HelpCircle className="h-6 w-6 text-[#0f172a]" />
              </div>
            <TextReveal as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-8" stagger={0.05}>
              <span className="whitespace-pre">Frequently Asked Questions</span>
              </TextReveal>
            <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed">
              Get answers to common questions about PMS investments for NRIs. If you don't find what you're looking for,
              our team is always available to assist you.
              </p>
            </div>

          <div className="max-w-3xl mx-auto">
            {/* FAQ Accordion */}
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
                    <details className="group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer">
                    <h3 className="text-lg font-semibold text-navy-800">
                      What is the minimum investment amount for NRIs in PMS?
                    </h3>
                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <Plus className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300 text-navy-600" />
                      <Minus className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300 text-navy-600" />
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-slate-700 text-lg leading-relaxed">
                      The minimum investment amount for PMS in India is ₹50 lakhs (approximately $60,000), as mandated
                      by SEBI regulations. This applies to both resident Indians and NRIs. At Bharat Alternates, we
                      offer various investment strategies starting at this minimum threshold, with options to increase
                      investments in increments of ₹10 lakhs.
                    </p>
                          </div>
                </details>
                        </div>

              {/* FAQ Item 2 */}
              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <details className="group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer">
                    <h3 className="text-lg font-semibold text-navy-800">
                      Can NRIs invest in PMS through NRE/NRO accounts?
                    </h3>
                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <Plus className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300 text-navy-600" />
                      <Minus className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300 text-navy-600" />
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-slate-700 text-lg leading-relaxed">
                      Yes, NRIs can invest in PMS through both NRE (Non-Resident External) and NRO (Non-Resident
                      Ordinary) accounts. Investments through NRE accounts offer full repatriability benefits, while NRO
                      accounts have partial repatriation limits. Our team will guide you on the optimal account
                      structure based on your repatriation needs and tax planning.
                    </p>
                        </div>
                </details>
              </div>

              {/* FAQ Item 3 */}
              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <details className="group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer">
                    <h3 className="text-lg font-semibold text-navy-800">
                      What documents do NRIs need to invest in PMS?
                    </h3>
                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <Plus className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300 text-navy-600" />
                      <Minus className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300 text-navy-600" />
                    </span>
                      </summary>
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-slate-700 text-lg leading-relaxed">NRIs typically need the following documents to invest in PMS:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-700">
                      <li>PAN Card (mandatory)</li>
                      <li>KYC documents including address and identity proof (passport, overseas address proof)</li>
                      <li>Recent passport-sized photographs</li>
                      <li>Bank account details (NRE/NRO)</li>
                      <li>FATCA declaration</li>
                      <li>PMS agreement and other strategy-specific forms</li>
                    </ul>
                    <p className="text-slate-700 mt-2">
                      Bharat Alternates offers a digital documentation process, minimizing paperwork requirements.
                    </p>
                  </div>
                    </details>
                  </div>

              {/* FAQ Item 4 */}
              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <details className="group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer">
                    <h3 className="text-lg font-semibold text-navy-800">
                      How is PMS different from mutual funds for NRIs?
                    </h3>
                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <Plus className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300 text-navy-600" />
                      <Minus className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300 text-navy-600" />
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-slate-700 text-lg leading-relaxed">For NRIs, PMS offers several advantages over mutual funds:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-700">
                      <li>
                        <span className="font-medium">Personalization:</span> Unlike mutual funds, PMS offers customized
                        portfolio strategies tailored to your risk profile and financial goals.
                      </li>
                      <li>
                        <span className="font-medium">Direct ownership:</span> In PMS, you directly own the shares in
                        your demat account, whereas mutual funds provide units representing indirect ownership.
                      </li>
                      <li>
                        <span className="font-medium">Transparency:</span> PMS provides complete visibility into every
                        transaction and holding in your portfolio.
                      </li>
                      <li>
                        <span className="font-medium">Tax efficiency:</span> With PMS, you can implement specific
                        tax-optimization strategies relevant to your country of residence.
                      </li>
                      <li>
                        <span className="font-medium">Higher engagement:</span> PMS offers regular portfolio reviews
                        with fund managers, unlike mutual funds where direct access is limited.
                      </li>
                    </ul>
                </div>
                </details>
              </div>

              {/* FAQ Item 5 */}
              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <details className="group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer">
                    <h3 className="text-lg font-semibold text-navy-800">How are PMS returns repatriated for NRIs?</h3>
                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <Plus className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300 text-navy-600" />
                      <Minus className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300 text-navy-600" />
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-slate-700 text-lg leading-relaxed">
                      The repatriation process for PMS returns depends on the account type used for investment:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-700">
                      <li>
                        <span className="font-medium">NRE investments:</span> 100% repatriation of principal and gains
                        is allowed without any limits.
                      </li>
                      <li>
                        <span className="font-medium">NRO investments:</span> Up to $1 million can be repatriated per
                        financial year, subject to tax clearance and documentation.
                      </li>
                    </ul>
                    <p className="text-slate-700 mt-2">
                      Bharat Alternates assists with all documentation for repatriation, including form 15CA/15CB and
                      other required certificates.
                    </p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 6 */}
              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <details className="group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer">
                    <h3 className="text-lg font-semibold text-navy-800">
                      What are the fee structures for PMS investments?
                    </h3>
                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <Plus className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300 text-navy-600" />
                      <Minus className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300 text-navy-600" />
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-slate-700 text-lg leading-relaxed">PMS fee structures typically include:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-700">
                      <li>
                        <span className="font-medium">Fixed management fee:</span> Usually ranging from 1% to 2.5% per
                        annum on the assets under management.
                      </li>
                      <li>
                        <span className="font-medium">Performance fee:</span> A percentage (typically 10-20%) of profits
                        above a predetermined hurdle rate.
                      </li>
                      <li>
                        <span className="font-medium">Entry/exit fees:</span> Some PMS providers may charge upfront or
                        exit fees, though these are becoming less common.
                      </li>
                    </ul>
                    <p className="text-slate-700 mt-2">
                      At Bharat Alternates, we offer transparent fee structures with no hidden charges. Our NRI-specific
                      strategies are designed to optimize returns while keeping costs reasonable.
                    </p>
                  </div>
                </details>
              </div>

              {/* FAQ Item 7 */}
              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <details className="group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer">
                    <h3 className="text-lg font-semibold text-navy-800">
                      Can NRIs manage their PMS investments remotely?
                    </h3>
                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <Plus className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300 text-navy-600" />
                      <Minus className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300 text-navy-600" />
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-slate-700 text-lg leading-relaxed">
                      Yes, NRIs can manage their PMS investments entirely remotely. Bharat Alternates provides:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-700">
                      <li>A secure digital portal for account access and performance tracking</li>
                      <li>Regular digital statements and reports</li>
                      <li>Video conferencing for portfolio reviews and consultations</li>
                      <li>Digital transaction capabilities for additional investments</li>
                      <li>24/7 support via email and dedicated relationship managers</li>
                    </ul>
                    <p className="text-slate-700 mt-2">
                      Our digital-first approach ensures NRIs can effectively monitor and manage their investments
                      without needing to visit India.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-navy-600 mb-4">Still have questions?</p>
              <CalendlyButton variant="default" size="lg" className="bg-[#0f172a] hover:bg-[#0f172a]/80">
                <div className="flex items-center">
                  <PhoneCall className="h-5 w-5 mr-2" />
                  Schedule a Consultation
                </div>
              </CalendlyButton>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced with Carousel */}
      <section className="py-24 bg-gradient-to-b from-[#0f172a] to-[#0f172a]/90 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-white"></div>
          <div className="absolute bottom-1/3 left-1/3 w-16 h-16 rounded-full bg-white"></div>
              </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-[#0f172a]/10 rounded-full mb-4">
              <Star className="h-6 w-6 text-[#0f172a]" />
            </div>
            <TextReveal as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8" stagger={0.05}>
              <span className="whitespace-pre">What Our NRI Investors Say</span>
            </TextReveal>
            <p className="text-lg md:text-xl text-white font-normal leading-relaxed tracking-wide">
              Hear from our global community of NRI investors who have trusted Bharat Alternates to manage their wealth
              and build their connection to India's growth story.
              </p>
            </div>

          {/* Testimonial Carousel */}
          <div className="relative px-4 sm:px-6 lg:px-8">
            {/* Carousel wrapper */}
            <div className="overflow-x-auto pb-4">
              <div className="flex space-x-6 pb-8 min-w-max md:min-w-0">
                {/* Testimonial 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex-none w-[calc(100vw-2rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white border-opacity-10"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#0f172a]/60 mr-4 flex-shrink-0 flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">NRI Tech Executive</h4>
                      <div className="flex items-center">
                        <span className="text-slate-300 text-sm">New Jersey, USA</span>
                      </div>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                        ))}
                    </div>
                  </div>
                  </div>
                  <blockquote className="text-slate-200 italic mb-4 text-lg leading-relaxed">
                    "As an NRI for over 15 years, I've always wanted to maintain investment ties with India. Bharat
                    Alternates made it seamless with their digital onboarding and tax-efficient strategies. My portfolio
                    has consistently outperformed my US investments over the last 3 years."
                  </blockquote>
                  <p className="text-slate-300 text-sm">Client since 2020 • Value Growth Strategy</p>
                </motion.div>

                {/* Testimonial 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex-none w-[calc(100vw-2rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white border-opacity-10"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#0f172a]/60 mr-4 flex-shrink-0 flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Healthcare Professional</h4>
                      <div className="flex items-center">
                        <span className="text-slate-300 text-sm">London, UK</span>
                      </div>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
            ))}
          </div>
        </div>
                  </div>
                  <blockquote className="text-slate-200 italic mb-4 text-lg leading-relaxed">
                    "The personalized approach at Bharat Alternates sets them apart. My portfolio manager understands
                    both Indian markets and UK tax implications for NRIs. Their quarterly video conferences keep me
                    informed despite being thousands of miles away."
                  </blockquote>
                  <p className="text-slate-300 text-sm">Client since 2019 • Consistent Compounders Strategy</p>
                </motion.div>

                {/* Testimonial 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex-none w-[calc(100vw-2rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white border-opacity-10"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#0f172a]/60 mr-4 flex-shrink-0 flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Finance Director</h4>
                      <div className="flex items-center">
                        <span className="text-slate-300 text-sm">Dubai, UAE</span>
                      </div>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400" fill={i < 4 ? "currentColor" : "none"} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-slate-200 italic mb-4 text-lg leading-relaxed">
                    "Being in finance myself, I appreciate the transparency and sophisticated strategies Bharat
                    Alternates employs. Their expertise in leveraging DTAA benefits between UAE and India has been
                    particularly valuable. Their small-cap portfolio has delivered excellent returns."
                  </blockquote>
                  <p className="text-slate-300 text-sm">Client since 2021 • Small & Mid Cap Focus Strategy</p>
                </motion.div>
              </div>
            </div>

            {/* Carousel controls */}
            <div className="flex justify-center mt-6 pb-4">
              <button className="mx-1 w-3 h-3 rounded-full bg-white"></button>
              <button className="mx-1 w-3 h-3 rounded-full bg-white bg-opacity-50"></button>
              <button className="mx-1 w-3 h-3 rounded-full bg-white bg-opacity-50"></button>
            </div>

            {/* CTA Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-r from-[#0f172a] to-[#0f172a]/80 rounded-2xl p-8 md:p-10 shadow-xl border border-[#0f172a]/50 max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Your India Investment Journey?</h3>
                  <p className="text-slate-300">
                    Join our community of successful NRI investors and leverage India's growth potential.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <CalendlyButton variant="secondary" size="lg" className="bg-white text-navy-800 hover:bg-slate-100">
                    <div className="flex items-center">
                      <CalendarPlus className="h-5 w-5 mr-2" />
                      Schedule a Consultation
                    </div>
                  </CalendlyButton>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Word Gap Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-[#0f172a]/10 rounded-full mb-4">
              <FileText className="h-6 w-6 text-[#0f172a]" />
              </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-8 tracking-tight">NRI Investment Terms You Should Know</h2>
            <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed">
              Understanding the vocabulary of NRI investments is crucial for making informed decisions. 
              Here's a glossary of key terms every NRI investor should be familiar with.
              </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-3">NRE Account</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Non-Resident External account is a rupee account maintained by NRIs for funds transferred from overseas. 
                All investments, interest, and earnings are fully repatriable with no tax implications in India.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-3">NRO Account</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Non-Resident Ordinary account is for managing income earned in India, like rent, pension, or dividends. 
                Limited repatriation is allowed (up to $1 million per financial year) subject to applicable taxes.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-3">DTAA</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Double Taxation Avoidance Agreement is a treaty between India and other countries that prevents 
                NRIs from paying tax twice on the same income, both in India and their country of residence.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-3">FEMA</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Foreign Exchange Management Act regulates all foreign exchange transactions, including investments 
                by NRIs in India. Compliance with FEMA is mandatory for all NRI investment activities.
              </p>
                    </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-3">TRC</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Tax Residency Certificate is a document issued by the tax authority of the NRI's country of residence,
                proving their tax residency status, which is essential for claiming DTAA benefits.
              </p>
              </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Repatriation</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                The process of transferring investment proceeds or income from India to an NRI's overseas account. 
                The rules differ for NRE and NRO accounts, with specific limits and tax implications.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-3">LTCG/STCG</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Long-Term and Short-Term Capital Gains refer to profits from investments held for more than 12 months 
                (LTCG, taxed at 12.5% above ₹1.25 lakh) or less than 12 months (STCG, taxed at 20%) respectively.
              </p>
          </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Form 15CA/CB</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Forms required for overseas remittances from India. Form 15CA is a declaration by the remitter about 
                the nature of payment and tax deducted, while Form 15CB is a certificate from a chartered accountant.
              </p>
        </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 p-6 bg-[#0f172a]/10 rounded-xl border border-[#0f172a]/20">
            <h3 className="text-xl font-bold text-[#0f172a] mb-3 text-center">Want to Learn More?</h3>
            <p className="text-slate-700 text-center mb-4">
              Our NRI investment specialists can guide you through these terms and how they apply to your unique financial situation.
            </p>
            <div className="flex justify-center">
              <CalendlyButton variant="default" size="lg" className="bg-[#0f172a] hover:bg-[#0f172a]/80">
                <div className="flex items-center">
                  <PhoneCall className="h-5 w-5 mr-2" />
                  Schedule a Consultation
                </div>
              </CalendlyButton>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}
