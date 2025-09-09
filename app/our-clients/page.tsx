import { ArrowRight, Quote } from "lucide-react"
import Link from "next/link"
import AnimationWrapper from "@/components/animation-wrapper"
import TextReveal from "@/components/text-reveal"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function OurClientsPage() {
  const testimonials = [
    {
      name: "Rajesh Mehta",
      role: "Business Owner",
      company: "Mehta Enterprises",
      content:
        "The expertise and personalized approach of the team has helped me achieve exceptional returns on my investments. Their deep understanding of the market is truly impressive. I've been with them for over 5 years now and have recommended their services to many of my business associates.",
      rating: 5,
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Priya Sharma",
      role: "Senior Executive",
      company: "Global Tech Solutions",
      content:
        "I've been with this PMS for over 3 years now, and the results have consistently exceeded my expectations. Their transparent communication keeps me informed every step of the way. The team is always available to address my queries and provide insights on market trends.",
      rating: 5,
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Vikram Singh",
      role: "Retired Professional",
      company: "Former CFO, Multinational Corp",
      content:
        "After retirement, I was looking for stable returns with moderate risk. Their tailored approach to my needs has given me peace of mind and financial security. The regular portfolio reviews and proactive risk management have been particularly valuable during market volatility.",
      rating: 4,
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Ananya Patel",
      role: "Doctor",
      company: "Premier Medical Center",
      content:
        "As a busy professional, I needed a hands-off investment solution that I could trust. Their team has delivered exceptional results while keeping me informed through concise reports. I appreciate their attention to detail and focus on long-term wealth creation.",
      rating: 5,
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Suresh Kapoor",
      role: "Entrepreneur",
      company: "Innovative Solutions",
      content:
        "Their research-driven approach and deep market insights have helped me navigate through complex market conditions. The personalized attention and tailored investment strategy have resulted in consistent outperformance compared to benchmarks.",
      rating: 5,
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Meera Reddy",
      role: "Legal Professional",
      company: "Reddy & Associates",
      content:
        "The team's expertise in alternative investments has added significant value to my portfolio. Their transparent fee structure and regular performance updates give me confidence that my investments are in good hands. Highly recommended for serious investors.",
      rating: 4,
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
  ]

  const clientLogos = Array(8).fill("/placeholder.svg?height=80&width=200")

  return (
    <>
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-20 text-white md:py-28 lg:py-36">
        <div className="container-custom">
          <AnimationWrapper animation="slide-up">
            <div className="mx-auto max-w-3xl text-center">
              <TextReveal as="h1" className="text-4xl font-bold md:text-5xl lg:text-6xl" stagger={0.05}>
                Our Valued Clients
              </TextReveal>
              <p className="mt-6 text-lg text-slate-300 md:text-xl">
                Hear from investors who have trusted us with their wealth management journey
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Join Our Client Family</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900"
                  asChild
                >
                  <Link href="/why-choose-us">Why Choose Us</Link>
                </Button>
              </div>
            </div>
          </AnimationWrapper>
        </div>
        <div className="absolute inset-0 z-0 opacity-20">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 100V0l100 100H0z" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4F46E5" />
                <stop offset="1" stopColor="#0F172A" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-3xl text-center">
              <TextReveal as="h2" className="text-3xl font-bold tracking-tight md:text-4xl">
                Client Testimonials
              </TextReveal>
              <p className="mt-4 text-lg text-muted-foreground">
                What our clients say about their experience with our services
              </p>
            </div>
          </AnimationWrapper>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <AnimationWrapper key={index} animation="scale-in" delay={index * 0.1}>
                <Card className="h-full transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-4 text-primary">
                      <Quote className="h-10 w-10" />
                    </div>
                    <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
                    <div className="flex items-center">
                      <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                        <img
                          src={testimonial.imageUrl || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      <ParallaxSection className="py-16 bg-slate-50" speed={0.2}>
        <div className="container-custom">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-3xl text-center">
              <TextReveal as="h2" className="text-3xl font-bold tracking-tight md:text-4xl">
                Trusted by Leading Organizations
              </TextReveal>
              <p className="mt-4 text-lg text-muted-foreground">
                Our clients include prominent businesses and institutions across various sectors
              </p>
            </div>
          </AnimationWrapper>

          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {clientLogos.map((logo, index) => (
              <AnimationWrapper key={index} animation="fade-in" delay={index * 0.1}>
                <div className="flex items-center justify-center p-4">
                  <img
                    src={logo || "/placeholder.svg"}
                    alt={`Client Logo ${index + 1}`}
                    className="max-h-16 grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </ParallaxSection>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-3xl text-center">
              <TextReveal as="h2" className="text-3xl font-bold tracking-tight md:text-4xl">
                Client Success Stories
              </TextReveal>
              <p className="mt-4 text-lg text-muted-foreground">
                Real-world examples of how our investment strategies have helped clients achieve their financial goals
              </p>
            </div>
          </AnimationWrapper>

          <div className="mt-12 space-y-12">
            {[
              {
                title: "Retirement Planning Success",
                description: "How we helped a client build a robust retirement corpus through strategic investments",
                content:
                  "Mr. Sharma, a 55-year-old corporate executive, approached us with concerns about his retirement planning. With just 5 years to retirement, he needed a strategy to grow his corpus while managing risk. Our team developed a balanced portfolio with a mix of equity and debt instruments, focusing on high-quality, dividend-paying stocks and AAA-rated bonds. Over the next 5 years, his portfolio grew by 68%, significantly exceeding his target and allowing him to retire comfortably with a sustainable income stream.",
                imageUrl: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Wealth Preservation During Market Volatility",
                description: "How our risk management strategies protected client wealth during market downturns",
                content:
                  "During the market crash of 2020, many investors saw their portfolios decline by 30-40%. However, our clients experienced significantly lower drawdowns thanks to our proactive risk management approach. For instance, Mrs. Patel, who had a substantial portfolio with us, saw only a 12% temporary decline, which recovered within 6 months and went on to deliver positive returns for the year. Our tactical asset allocation, hedging strategies, and focus on quality companies with strong balance sheets were key to preserving wealth during this volatile period.",
                imageUrl: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Business Owner's Diversification Strategy",
                description: "How we helped a business owner diversify his wealth beyond his own company",
                content:
                  "Mr. Kapoor, a successful business owner, had most of his wealth tied to his manufacturing company. Recognizing the concentration risk, he engaged our services to diversify his investments. We created a comprehensive wealth management strategy that included investments across different asset classes and geographies. Over a period of 7 years, we helped him build a well-diversified portfolio that not only provided a hedge against business risks but also generated substantial returns, creating an additional source of income independent of his business operations.",
                imageUrl: "/placeholder.svg?height=400&width=600",
              },
            ].map((story, index) => (
              <AnimationWrapper
                key={index}
                animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                delay={0.2}
              >
                <div className="grid gap-8 md:grid-cols-2">
                  <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={story.imageUrl || "/placeholder.svg"}
                        alt={story.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                    <h3 className="text-2xl font-bold">{story.title}</h3>
                    <p className="mt-2 text-primary font-medium">{story.description}</p>
                    <p className="mt-4 text-muted-foreground">{story.content}</p>
                    <div className="mt-6">
                      <Button variant="outline" asChild>
                        <Link href="/contact">
                          Discuss Your Goals <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-bg text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <TextReveal as="h2" className="text-3xl font-bold tracking-tight md:text-4xl">
              Join Our Growing Client Family
            </TextReveal>
            <p className="mt-4 text-lg opacity-90">
              Experience the difference of working with a team dedicated to your financial success. Schedule a
              consultation today.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                variant="secondary"
                className="transition-transform duration-300 hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
