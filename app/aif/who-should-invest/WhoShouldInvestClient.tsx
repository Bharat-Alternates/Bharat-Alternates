"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ChevronRight,
  Phone,
  CheckCircle2,
  TrendingUp,
  Briefcase,
  Clock,
  Target,
  Landmark,
  GraduationCap,
  BadgeIndianRupee,
  UserCog,
  Wallet,
  Globe,
  BriefcaseBusiness,
  CircleDollarSign,
  Award,
  Building,
  Network,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { CalendlyButton } from "@/components/calendly-button"

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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Who Should Invest in AIFs?</h1>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-400" />
            </motion.div>
            <motion.p variants={itemVariants} className="text-xl text-white/90 max-w-3xl mx-auto">
              Alternative Investment Funds (AIFs) are ideal for sophisticated investors seeking higher returns,
              diversification, and exposure to alternative asset classes.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="relative group z-10 border-2 border-white text-white bg-blue-900/50 hover:bg-blue-900/70"
              >
                <Link href="/aif/what-is-aif" className="flex items-center gap-2">
                  Learn About AIF <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Should Invest in AIFs?</h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                <p className="text-slate-600 text-lg">
                  Alternative Investment Funds (AIFs) are ideal for sophisticated investors seeking higher returns,
                  diversification, and exposure to alternative asset classes. AIFs allow investors to access private
                  equity, venture capital, real estate, and structured debt, which are typically unavailable through
                  traditional investment channels.
                </p>
                <p className="text-slate-600 text-lg mt-4">
                  Here's a breakdown of the key groups who can benefit from AIF investments:
                </p>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* HNIs and Ultra-HNIs Section */}
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
                    1. High Net-Worth Individuals (HNIs) and Ultra-HNIs
                  </h2>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">Unlock Exclusive Growth Opportunities</h3>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
                  </div>

                  <p className="text-slate-600 text-lg">
                    HNIs and Ultra-HNIs, typically with investments starting at ₹1 crore and above, find AIFs highly
                    appealing due to their exclusive access to private markets. AIFs allow investors to participate in
                    private equity, venture capital, and structured credit deals that offer superior growth potential.
                  </p>

                  <p className="text-slate-600 text-lg">
                    For HNIs, AIFs provide customized investment strategies that align with their individual risk
                    profiles, enabling them to achieve long-term wealth preservation and growth. They also benefit from
                    tax-efficient structures where the taxation happens at the fund level for example in CAT-3 AIFs.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" /> Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Exclusive private market access</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Customized investment strategies</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Tax-efficient structures</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Family Offices Section */}
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
                    <Briefcase className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-center text-slate-900">2. Family Offices</h2>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">
                      Long-Term Wealth Preservation and Strategic Growth
                    </h3>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
                  </div>

                  <p className="text-slate-600 text-lg">
                    Family offices often seek AIFs as they offer a strategic way to manage and grow wealth over multiple
                    generations. These funds allow for diversified exposure to private markets, including real estate,
                    private equity, and venture capital, that can generate long-term wealth for families.
                  </p>

                  <p className="text-slate-600 text-lg">
                    AIFs are ideal for succession planning, estate management, and ensuring that the wealth is passed on
                    efficiently while continuing to grow. Tailored investment mandates in AIFs allow family offices to
                    adopt customized risk-return strategies suited to their long-term goals.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" /> Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Multi-generational wealth management</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Diversified private market exposure</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Tailored investment mandates</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Corporates and Business Entities Section */}
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
                    <Building className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-center text-slate-900">3. Corporates and Business Entities</h2>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">Productive Use of Surplus Funds</h3>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
                  </div>

                  <p className="text-slate-600 text-lg">
                    Corporates and large business houses often have large cash reserves that can be better utilized
                    through investments in AIFs. AIFs offer the chance to invest in private debt, structured finance,
                    and real estate, which are ideal for companies looking to optimize returns on idle funds.
                  </p>

                  <p className="text-slate-600 text-lg">
                    These funds can help businesses achieve capital appreciation and build wealth while offering a more
                    predictable return stream than traditional market investments. Additionally, AIFs provide companies
                    with an opportunity to diversify their portfolios away from the more volatile public markets.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" /> Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Optimize returns on idle funds</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Portfolio diversification</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Predictable return streams</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* NRIs, OCIs, and POIs Section */}
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
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-center text-slate-900">
                    4. Non-Resident Indians (NRIs), OCIs, and POIs
                  </h2>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">Gaining Exposure to India's Growth Story</h3>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
                  </div>

                  <p className="text-slate-600 text-lg">
                    For NRIs, OCIs, and POIs, AIFs provide an excellent platform to invest in India's dynamic economy,
                    particularly through venture capital and growth equity funds. These investment vehicles enable
                    international investors to gain exposure to emerging sectors like technology, healthcare,
                    infrastructure, and renewable energy.
                  </p>

                  <p className="text-slate-600 text-lg">
                    AIFs also offer tax-efficient solutions and easy access to India's private markets, making it a
                    highly attractive investment option for those based abroad. Digital onboarding and cross-border
                    compliance ensure that international investors can seamlessly invest in these funds.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" /> Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Exposure to India's growth sectors</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Digital onboarding</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Tax-efficient investment options</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Institutional Investors Section */}
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
                  <h2 className="text-3xl font-bold text-center text-slate-900">5. Institutional Investors</h2>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">Diversification through Alternative Assets</h3>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
                  </div>

                  <p className="text-slate-600 text-lg">
                    Institutional investors, such as pension funds, insurance companies, endowments, and sovereign
                    wealth funds, increasingly allocate capital to AIFs for higher returns and greater diversification.
                  </p>

                  <p className="text-slate-600 text-lg">
                    AIFs help institutions access sectors like private equity, venture capital, private debt, and real
                    estate, which are typically less correlated with public market performance. This diversification
                    helps in balancing risk and achieving superior, long-term returns.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" /> Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Portfolio diversification</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Lower correlation to public markets</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Superior long-term returns</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Affluent Retirees Section */}
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
                    <Wallet className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-center text-slate-900">6. Affluent Retirees</h2>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">Generating Income and Preserving Capital</h3>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
                  </div>

                  <p className="text-slate-600 text-lg">
                    Affluent retirees often turn to AIFs to ensure steady income while safeguarding their capital. Many
                    AIFs focus on fixed-income strategies, real estate, and structured credit to generate consistent
                    returns while also offering capital preservation.
                  </p>

                  <p className="text-slate-600 text-lg">
                    These funds provide retirees with access to low-risk income-producing assets that can offer better
                    returns than traditional savings options, such as fixed deposits, while protecting wealth against
                    inflation.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" /> Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Steady income generation</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Capital preservation</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Inflation protection</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Busy Professionals Section */}
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
                    7. Busy Professionals (Doctors, Lawyers, Executives)
                  </h2>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">
                      Efficient Wealth Management for Time-Starved Individuals
                    </h3>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
                  </div>

                  <p className="text-slate-600 text-lg">
                    Busy professionals with high earning potential, such as doctors, lawyers, and senior executives,
                    often have limited time to manage their finances. AIFs provide them with a time-efficient solution
                    for wealth management. These individuals benefit from the professional management of their
                    portfolios, tailored specifically to their risk tolerance and financial goals.
                  </p>

                  <p className="text-slate-600 text-lg">
                    By investing in AIFs, professionals can access higher return potential through private equity,
                    venture capital, and structured credit, without being tied down by the need for active management.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" /> Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Time-efficient wealth management</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Professional portfolio oversight</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Higher return potential</span>
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
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-center text-slate-900">
                    8. Second-Generation NRIs and Young Global Investors
                  </h2>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-blue-700">
                      Capitalizing on India's Growth for the Future
                    </h3>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
                  </div>

                  <p className="text-slate-600 text-lg">
                    Second-generation NRIs and young global investors are increasingly looking at India as a growth
                    opportunity. AIFs are an excellent vehicle for these individuals to participate in India's booming
                    tech sector, startups, and emerging industries.
                  </p>

                  <p className="text-slate-600 text-lg">
                    Through AIFs, they can invest in high-growth markets without the need for direct involvement, as all
                    management and decision-making are handled by expert fund managers.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" /> Key Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Access to India's growth sectors</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Expert fund management</span>
                      </li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Passive ownership in startups</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Is AIF Investment Right For You? Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 shadow-xl text-white">
            <div className="p-6 md:p-8">
              <div className="relative z-10 max-w-4xl mx-auto">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-20 z-0">
                  <Target className="w-64 h-64 text-blue-200" />
                </div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 opacity-10 z-0">
                  <CircleDollarSign className="w-48 h-48 text-yellow-200" />
                </div>

                <div className="text-center mb-12 relative">
                  <motion.div
                    variants={itemVariants}
                    className="inline-block bg-blue-600 px-4 py-1 rounded-full text-white text-sm font-medium mb-4"
                  >
                    INVESTOR DECISION GUIDE
                  </motion.div>
                  <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center text-white mb-6">
                    Is AIF Investment Right For You?
                  </motion.h2>
                  <motion.div variants={itemVariants} className="w-24 h-1 bg-yellow-400 mx-auto" />
                  <motion.p variants={itemVariants} className="mt-6 text-white/80 text-lg max-w-3xl mx-auto">
                    Alternative Investment Funds (AIFs) have gained popularity as a strategic investment vehicle for
                    sophisticated investors seeking opportunities outside traditional financial markets. But is AIF the
                    right choice for you?
                  </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                  <motion.div
                    variants={itemVariants}
                    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300"
                  >
                    <div className="p-6">
                      <div className="flex justify-center mb-5">
                        <div className="bg-blue-600/30 p-3 rounded-full">
                          <CircleDollarSign className="w-8 h-8 text-yellow-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white text-center mb-4">High Net-Worth Capital</h3>
                      <p className="text-white/70 mb-4 text-center">
                        AIFs typically require a minimum investment of ₹1 crore or more
                      </p>
                      <div className="space-y-3 mt-6">
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Access to exclusive high-return
                            opportunities
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Personalized investment strategies
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Protection against market
                            volatility
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                      <p className="text-white text-center font-medium">Ideal for HNIs & Ultra-HNIs</p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300"
                  >
                    <div className="p-6">
                      <div className="flex justify-center mb-5">
                        <div className="bg-blue-600/30 p-3 rounded-full">
                          <Network className="w-8 h-8 text-yellow-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white text-center mb-4">Diversification Focus</h3>
                      <p className="text-white/70 mb-4 text-center">
                        Access alternatives beyond stocks, bonds and mutual funds
                      </p>
                      <div className="space-y-3 mt-6">
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Spread risk across different asset
                            classes
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Tap sectors less affected by market
                            cycles
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Generate above-market wealth
                            accumulation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                      <p className="text-white text-center font-medium">For Experienced Investors</p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300"
                  >
                    <div className="p-6">
                      <div className="flex justify-center mb-5">
                        <div className="bg-blue-600/30 p-3 rounded-full">
                          <TrendingUp className="w-8 h-8 text-yellow-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white text-center mb-4">Higher Return Potential</h3>
                      <p className="text-white/70 mb-4 text-center">
                        Access to high-risk, high-return investment opportunities
                      </p>
                      <div className="space-y-3 mt-6">
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Early-stage startup & emerging
                            industry access
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Established companies with growth
                            potential
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Real estate & structured finance
                            investments
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                      <p className="text-white text-center font-medium">For Growth-Oriented Investors</p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300"
                  >
                    <div className="p-6">
                      <div className="flex justify-center mb-5">
                        <div className="bg-blue-600/30 p-3 rounded-full">
                          <UserCog className="w-8 h-8 text-yellow-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white text-center mb-4">Professional Management</h3>
                      <p className="text-white/70 mb-4 text-center">Expert fund managers with specialized knowledge</p>
                      <div className="space-y-3 mt-6">
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Decisions based on industry
                            knowledge & insights
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Access to exclusive private market
                            opportunities
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Professional risk management
                            strategies
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                      <p className="text-white text-center font-medium">For Hands-Off Investors</p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300"
                  >
                    <div className="p-6">
                      <div className="flex justify-center mb-5">
                        <div className="bg-blue-600/30 p-3 rounded-full">
                          <Clock className="w-8 h-8 text-yellow-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white text-center mb-4">Long-Term Horizon</h3>
                      <p className="text-white/70 mb-4 text-center">Holding periods ranging from 3 to 7+ years</p>
                      <div className="space-y-3 mt-6">
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Investments need time to mature and
                            grow
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Higher potential returns for
                            patient investors
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Gradual but potentially substantial
                            returns
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                      <p className="text-white text-center font-medium">For Patient Investors</p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300"
                  >
                    <div className="p-6">
                      <div className="flex justify-center mb-5">
                        <div className="bg-blue-600/30 p-3 rounded-full">
                          <GraduationCap className="w-8 h-8 text-yellow-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white text-center mb-4">Emerging Sectors</h3>
                      <p className="text-white/70 mb-4 text-center">Access to innovative and high-growth markets</p>
                      <div className="space-y-3 mt-6">
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Be part of cutting-edge innovation
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Structured exposure to complex
                            markets
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Early access to potential market
                            leaders
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                      <p className="text-white text-center font-medium">For Forward-Thinking Investors</p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300"
                  >
                    <div className="p-6">
                      <div className="flex justify-center mb-5">
                        <div className="bg-blue-600/30 p-3 rounded-full">
                          <BadgeIndianRupee className="w-8 h-8 text-yellow-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white text-center mb-4">Tax Efficiency</h3>
                      <p className="text-white/70 mb-4 text-center">Structured tax benefits and optimization</p>
                      <div className="space-y-3 mt-6">
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Category II AIFs offer
                            tax-efficient returns
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Potential exemptions on long-term
                            capital gains
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Cross-border investment tax
                            solutions
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                      <p className="text-white text-center font-medium">For Tax-Conscious Investors</p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300"
                  >
                    <div className="p-6">
                      <div className="flex justify-center mb-5">
                        <div className="bg-blue-600/30 p-3 rounded-full">
                          <Shield className="w-8 h-8 text-yellow-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white text-center mb-4">Risk Tolerance</h3>
                      <p className="text-white/70 mb-4 text-center">Higher returns come with increased risk</p>
                      <div className="space-y-3 mt-6">
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Diversification across asset
                            classes
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Actively monitored portfolio
                            management
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Lower liquidity than traditional
                            investments
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                      <p className="text-white text-center font-medium">For Risk-Aware Investors</p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300"
                  >
                    <div className="p-6">
                      <div className="flex justify-center mb-5">
                        <div className="bg-blue-600/30 p-3 rounded-full">
                          <BriefcaseBusiness className="w-8 h-8 text-yellow-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white text-center mb-4">Strategic Investment</h3>
                      <p className="text-white/70 mb-4 text-center">Prefer thematic or strategic investments</p>
                      <div className="space-y-3 mt-6">
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Focused strategies targeting
                            specific sectors
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Deep industry expertise and
                            research-backed
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white text-sm">
                            <span className="text-yellow-400 font-semibold">→</span> Customized investment mandates for
                            your goals
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                      <p className="text-white text-center font-medium">For Strategy-Focused Investors</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="mt-12 text-center">
                  <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4">
                    <p className="text-white/90 text-lg">
                      Do you match these criteria? Then AIFs might be the right investment vehicle for your financial
                      goals.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 shadow-xl text-white">
            <div className="p-6 md:p-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Explore Alternative Investment Opportunities?</h2>
                <p className="text-lg text-white/80 mb-8">
                  Our team of investment experts can help you identify the right AIF strategies for your financial
                  goals.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <CalendlyButton
                    variant="outline"
                    size="lg"
                    className="relative group z-10 border-2 border-white text-white bg-blue-700/50 hover:bg-blue-700/70"
                  >
                    <Phone className="w-4 h-4 mr-2" /> Schedule a Consultation
                  </CalendlyButton>
                  <Button asChild size="lg" className="relative group z-10 bg-white text-blue-800 hover:bg-white/90">
                    <Link href="/aif/what-is-aif" className="flex items-center gap-2">
                      Learn More About AIFs{" "}
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}
