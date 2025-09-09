"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ChevronRight,
  Phone,
  CheckCircle2,
  Users,
  TrendingUp,
  User,
  Briefcase,
  Clock,
  Target,
  Landmark,
  GraduationCap,
  Ship,
  BadgeIndianRupee,
  UserCog,
  Plane,
  Wallet,
  Globe,
  HeartPulse,
  BriefcaseBusiness,
  CircleDollarSign,
  Award,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function WhoShouldInvestClient() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section with Enhanced Design */}
      <div className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5)_0,rgba(255,255,255,0)_60%)]" />
        </div>

        <div className="absolute right-0 top-0 -mt-4 -mr-4 opacity-20">
          <CircleDollarSign className="w-64 h-64 text-blue-200" />
        </div>

        <div className="absolute left-0 bottom-0 -mb-10 -ml-10 opacity-20">
          <BadgeIndianRupee className="w-64 h-64 text-purple-200" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative container mx-auto px-4 py-24"
        >
          <div className="text-center space-y-8">
            <motion.div variants={itemVariants} className="relative">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Who Should Invest in PMS?</h1>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-400" />
            </motion.div>
            <motion.p variants={itemVariants} className="text-xl text-white/90 max-w-3xl mx-auto">
              Investing in Portfolio Management Services (PMS) in India is an excellent option for various types of
              investors who are looking for professional and personalized wealth management.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="relative group z-10 border-2 border-white text-white bg-blue-900/50 hover:bg-blue-900/70"
              >
                <Link href="/pms/what-is-pms" className="flex items-center gap-2">
                  Learn About PMS <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Subtle Floating Elements */}
        <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-30">
          <div className="absolute left-1/4 top-1/4 h-40 w-40 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full bg-white/5 blur-3xl"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction Section with Enhanced Design */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-white shadow-xl">
            <div className="p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Should Invest in PMS?</h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                <p className="text-slate-600 text-lg">
                  Whether you are an NRI, High Net-Worth Individual (HNWI), or a corporate entity, PMS can provide the
                  tailored investment strategies that best align with your financial goals. Below are key groups that
                  benefit the most from PMS investments.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="group bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-500 transition-colors duration-300 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">Minimum Investment Requirements</h3>
                      <p className="text-slate-600 mb-4">
                        SEBI regulations mandate a minimum investment of ₹50 lakhs for PMS. This threshold ensures that
                        PMS is accessible primarily to high-net-worth individuals who can afford the associated risks
                        and fees.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-600">
                            Minimum investment of ₹50 lakhs as per SEBI regulations
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-600">Higher entry barrier compared to mutual funds</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="group bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-500 transition-colors duration-300 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">Investment Horizon</h3>
                      <p className="text-slate-600 mb-4">
                        PMS is designed for investors with a long-term investment horizon, typically 3-5 years or more.
                        This timeframe allows portfolio managers to implement strategies that can weather market
                        volatility.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-600">Recommended investment horizon of 3-5 years or longer</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-600">Patience to ride out market cycles and volatility</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* HNWIs Section with Enhanced Design */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-white shadow-xl">
            <div className="p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <CircleDollarSign className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-center text-slate-900">
                    1. High Net-Worth Individuals (HNWI)
                  </h2>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">
                      Best PMS for High Net-Worth NRIs and Investors
                    </h3>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
                  </div>

                  <p className="text-slate-600 text-lg">
                    If you are an HNWI (High Net-Worth Individual) with investments of ₹50 lakhs or more, PMS is the
                    ideal investment tool. HNWIs have specific needs that go beyond standard investing — they require a
                    customized portfolio management service that aligns with their financial goals, risk tolerance, and
                    investment horizon.
                  </p>

                  <p className="text-slate-600 text-lg">
                    With PMS, you benefit from direct equity ownership, highly personalized asset allocation, and
                    exclusive strategies designed to maximize wealth. This also includes tax-efficient solutions to
                    optimize your wealth creation in India's high-growth economy.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" /> Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Personalized financial strategies</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Higher returns potential</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Tax optimization</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-600" /> Target Audience:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">HNWIs</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Family Offices</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Wealthy NRIs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Corporates & Family Offices Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-white shadow-xl">
            <div className="p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Landmark className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-center text-slate-900">2. Corporates & Family Offices</h2>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">
                      Wealth Management for Corporates and Family Offices
                    </h3>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
                  </div>

                  <p className="text-slate-600 text-lg">
                    Corporates and family offices can leverage PMS as a strategic wealth management tool to grow their
                    assets and build stable, long-term wealth. PMS offers bespoke investment strategies that help
                    preserve and expand capital across multiple generations.
                  </p>

                  <p className="text-slate-600 text-lg">
                    By investing in PMS, companies and families can target diversified equity portfolios, alternative
                    investments, and specialized financial strategies that suit their needs, whether it's for business
                    growth, succession planning, or wealth preservation.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-blue-600" /> Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Long-term wealth building</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Tax-efficient strategies for family estates</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Estate planning and succession solutions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-600" /> Target Audience:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Family Offices</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Corporate Investors</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Corporate Executives</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Retirees Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-white shadow-xl">
            <div className="p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-center text-slate-900">3. Retirees</h2>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">
                      Steady Income & Wealth Preservation for Retirees
                    </h3>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
                  </div>

                  <p className="text-slate-600 text-lg">
                    As a retired individual seeking stable income and capital preservation, PMS is an excellent option.
                    Retirees often look for investment options that balance capital preservation and generate consistent
                    returns without taking on unnecessary risk.
                  </p>

                  <p className="text-slate-600 text-lg">
                    With PMS, retirees can invest in income-generating portfolios that are aligned with their income
                    needs, while also ensuring that their wealth continues to grow. PMS portfolios offer tailored
                    solutions that focus on steady returns through fixed-income investments, equity dividends, and
                    tax-optimized strategies that minimize tax liability.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Wallet className="w-5 h-5 mr-2 text-blue-600" /> Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Consistent income streams</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Tax-efficient returns</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Wealth protection in retirement</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-600" /> Target Audience:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Retirees</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Pensioners</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Senior Citizens looking for steady income</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Doctors Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-white shadow-xl">
            <div className="p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <HeartPulse className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-center text-slate-900">4. Doctors</h2>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">
                      Personalized Investment Management for Doctors
                    </h3>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
                  </div>

                  <p className="text-slate-600 text-lg">
                    Doctors often have limited time to manage their personal finances due to their demanding profession.
                    Portfolio Management Services (PMS) offer a great solution for doctors looking for professional
                    financial advice, risk-adjusted returns, and customized investment strategies that align with their
                    financial goals and medical practice.
                  </p>

                  <p className="text-slate-600 text-lg">
                    With PMS, doctors can benefit from a comprehensive investment plan that considers both wealth growth
                    and tax planning. Whether you're looking to invest for your retirement or for a child's education,
                    PMS ensures your financial goals are met through personalized strategies.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" /> Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Customized portfolios based on risk appetite</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Time-saving wealth management</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Tailored strategies for wealth accumulation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-600" /> Target Audience:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Doctors</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Surgeons</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Medical Practitioners</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Seafarers Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-white shadow-xl">
            <div className="p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Ship className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-center text-slate-900">5. Seafarers</h2>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">Remote Investment Management for Seafarers</h3>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
                  </div>

                  <p className="text-slate-600 text-lg">
                    Seafarers, who spend long periods at sea, need an efficient way to manage their investments
                    remotely. PMS provides seafarers with the ability to manage their portfolios without being
                    physically present in India.
                  </p>

                  <p className="text-slate-600 text-lg">
                    With online account access, real-time reporting, and the ability to work with dedicated relationship
                    managers, seafarers can easily track their portfolios and make adjustments as needed, ensuring that
                    their wealth continues to grow, even when they are away.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-blue-600" /> Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Remote portfolio management</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Real-time tracking</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Professional investment management</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Long-term wealth accumulation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-600" /> Target Audience:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Seafarers</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Mariners</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Offshore workers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* CFOs/CEOs/CTOs Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-white shadow-xl">
            <div className="p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <UserCog className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-center text-slate-900">6. CFOs/CEOs/CTOs</h2>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">
                      Tailored Investment Strategies for Senior Executives
                    </h3>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
                  </div>

                  <p className="text-slate-600 text-lg">
                    As a CFO, CEO, or CTO, you understand the importance of maximizing returns while managing complex
                    financial needs. Portfolio Management Services (PMS) offer these senior executives a way to manage
                    their wealth more efficiently with personalized investment strategies.
                  </p>

                  <p className="text-slate-600 text-lg">
                    PMS offers direct equity ownership, customized strategies to match your risk tolerance, and wealth
                    preservation strategies that align with your long-term objectives. Whether you're investing for
                    personal wealth, family succession planning, or future business opportunities, PMS provides the
                    flexibility and expertise you need.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-blue-600" /> Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Tailored wealth management</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">High-conviction strategies</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Maximized returns with professional management</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-600" /> Target Audience:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">CFOs</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">CEOs</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">CTOs</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Senior Executives</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Second-Generation NRIs Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-white shadow-xl">
            <div className="p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-center text-slate-900">7. Second-Generation NRIs</h2>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">
                      Exposing the Next Generation to India's Growth Story
                    </h3>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
                  </div>

                  <p className="text-slate-600 text-lg">
                    For second-generation NRIs, investing in India's growing economy is a great way to stay connected
                    with their roots while maximizing long-term growth opportunities. PMS is an ideal vehicle for these
                    investors to gain exposure to India's capital markets through customized portfolios that cater to
                    both high-growth and value strategies.
                  </p>

                  <p className="text-slate-600 text-lg">
                    PMS allows second-generation NRIs to take advantage of India's robust market without the need for
                    day-to-day management, as all decisions are made by expert portfolio managers who understand the
                    evolving market dynamics.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-blue-600" /> Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Exposure to India's growth story</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Custom investment strategies for high returns</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Wealth creation and preservation for future generations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-600" /> Target Audience:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Second-generation NRIs</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Young professionals</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Future-focused investors</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Professionals & Business Owners Abroad Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-white shadow-xl">
            <div className="p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <BriefcaseBusiness className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-center text-slate-900">
                    8. Professionals & Business Owners Abroad
                  </h2>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">
                      Efficient Wealth Management for Busy Professionals
                    </h3>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
                  </div>

                  <p className="text-slate-600 text-lg">
                    Professionals and business owners living abroad often have complex financial needs and limited time
                    to manage investments. PMS offers them a streamlined solution for growing their wealth, whether it's
                    for retirement planning, tax optimization, or building generational wealth.
                  </p>

                  <p className="text-slate-600 text-lg">
                    With personalized advisory, bespoke asset allocation, and ongoing portfolio monitoring, business
                    owners and professionals can rest easy knowing their wealth is being managed according to their
                    goals.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-blue-600" /> Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Personalized financial advice</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Wealth growth and tax optimization</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Comprehensive portfolio management</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-600" /> Target Audience:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Business owners</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Entrepreneurs</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Professionals abroad</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* NRIs/OCI/POI Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-white shadow-xl">
            <div className="p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Plane className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-center text-slate-900">9. NRIs/OCI/POI</h2>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">
                      Customized Portfolio Solutions for NRIs, OCIs, and POIs
                    </h3>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
                  </div>

                  <p className="text-slate-600 text-lg">
                    Whether you are an NRI, OCI, or POI, investing in India's stock market is an excellent way to
                    benefit from the country's economic growth. PMS provides you with the tools to invest in India with
                    tax-efficient strategies, and customized portfolios that match your risk profile and investment
                    goals.
                  </p>

                  <p className="text-slate-600 text-lg">
                    With digital onboarding, cross-border investment support, and ongoing relationship management, PMS
                    simplifies the process of investing in India for NRIs, OCIs, and POIs.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-blue-600" /> Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Access to India's market</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Cross-border investment support</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Tax optimization for global investors</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-600" /> Target Audience:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">NRIs</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">OCIs</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">POIs</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Indian diaspora</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Who Can Invest Section - Let's Convert This to a Summary of All Investor Types */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-gradient-to-b from-navy-900 to-navy-800 text-white shadow-xl border border-blue-900/30">
            <div className="p-8 md:p-10">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-blue-800/50 p-3 rounded-full mr-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-center text-white">Ideal PMS Investor Summary</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    variants={itemVariants}
                    className="space-y-4 p-6 rounded-lg bg-navy-800/50 border border-navy-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 opacity-10">
                      <CircleDollarSign className="w-16 h-16 text-blue-300" />
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-blue-900/60 p-2 rounded-full shadow-md">
                        <CircleDollarSign className="w-12 h-12 text-blue-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-center text-white relative z-10">
                      High Net Worth Individuals
                    </h3>
                    <p className="text-sm text-center text-blue-100 font-medium relative z-10">
                      Investors with ₹50 lakhs or more seeking personalized asset management
                    </p>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="space-y-4 p-6 rounded-lg bg-navy-800/50 border border-navy-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 opacity-10">
                      <Plane className="w-16 h-16 text-blue-300" />
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-blue-900/60 p-2 rounded-full shadow-md">
                        <Plane className="w-12 h-12 text-blue-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-center text-white relative z-10">NRIs and OCIs</h3>
                    <p className="text-sm text-center text-blue-100 font-medium relative z-10">
                      Non-resident Indians looking to invest in India's thriving market
                    </p>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="space-y-4 p-6 rounded-lg bg-navy-800/50 border border-navy-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 opacity-10">
                      <Landmark className="w-16 h-16 text-blue-300" />
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-blue-900/60 p-2 rounded-full shadow-md">
                        <Landmark className="w-12 h-12 text-blue-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-center text-white relative z-10">Corporate Entities</h3>
                    <p className="text-sm text-center text-blue-100 font-medium relative z-10">
                      Companies looking for strategic wealth management solutions
                    </p>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="space-y-4 p-6 rounded-lg bg-navy-800/50 border border-navy-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 opacity-10">
                      <User className="w-16 h-16 text-blue-300" />
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-blue-900/60 p-2 rounded-full shadow-md">
                        <User className="w-12 h-12 text-blue-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-center text-white relative z-10">Retirees</h3>
                    <p className="text-sm text-center text-blue-100 font-medium relative z-10">
                      Seeking consistent income and wealth preservation strategies
                    </p>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="space-y-4 p-6 rounded-lg bg-navy-800/50 border border-navy-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 opacity-10">
                      <HeartPulse className="w-16 h-16 text-blue-300" />
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-blue-900/60 p-2 rounded-full shadow-md">
                        <HeartPulse className="w-12 h-12 text-blue-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-center text-white relative z-10">
                      Doctors & Professionals
                    </h3>
                    <p className="text-sm text-center text-blue-100 font-medium relative z-10">
                      Busy individuals who need expert management of their investments
                    </p>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="space-y-4 p-6 rounded-lg bg-navy-800/50 border border-navy-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 opacity-10">
                      <UserCog className="w-16 h-16 text-blue-300" />
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-blue-900/60 p-2 rounded-full shadow-md">
                        <UserCog className="w-12 h-12 text-blue-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-center text-white relative z-10">Senior Executives</h3>
                    <p className="text-sm text-center text-blue-100 font-medium relative z-10">
                      CFOs, CEOs, and CTOs with complex financial needs
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Call to Action with Enhanced Design */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative text-center space-y-6 bg-gradient-to-r from-navy-900 to-blue-900 p-12 rounded-xl text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5)_0,rgba(255,255,255,0)_60%)]" />

          <div className="absolute -top-10 -right-10">
            <BadgeIndianRupee className="w-40 h-40 text-white/10" />
          </div>

          <div className="absolute -bottom-10 -left-10">
            <CircleDollarSign className="w-40 h-40 text-white/10" />
          </div>

          <div className="relative z-10">
            <div className="bg-white/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Ready to Start Your PMS Investment Journey?</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto my-4"></div>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Take the first step towards professional portfolio management. Our experts are here to guide you through
              the process and help you determine if PMS is the right choice for your financial goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button
                asChild
                size="lg"
                className="relative group z-10 bg-white text-navy-900 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 group-hover:animate-pulse" /> Schedule a Consultation
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="relative group z-10 border-2 border-white text-white bg-blue-900/50 hover:bg-blue-900/70"
              >
                <Link href="/pms/what-is-pms" className="flex items-center gap-2">
                  Learn More About PMS{" "}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
