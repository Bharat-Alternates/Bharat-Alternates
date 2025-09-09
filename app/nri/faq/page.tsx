"use client"
import { Card, CardContent } from "@/components/ui/card"
import AnimationWrapper from "@/components/animation-wrapper"
import { ContactFloat } from "@/components/contact-float"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function NRIFAQPage() {
  return (
    <>
      <div className="px-4 py-12 md:py-16 lg:py-20">
        <div className="container max-w-4xl mx-auto">
          <AnimationWrapper>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Find answers to common questions about NRI investments
            </p>

            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Who qualifies as an NRI investor?</AccordionTrigger>
                    <AccordionContent>
                      An NRI (Non-Resident Indian) is an Indian citizen who resides outside India for employment,
                      business, or other purposes. This includes PIOs (Person of Indian Origin) and OCIs (Overseas
                      Citizen of India) for investment purposes.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>What types of investment options are available for NRIs?</AccordionTrigger>
                    <AccordionContent>
                      NRIs can invest in stocks, mutual funds, PMS, real estate, fixed deposits, and alternative
                      investment funds through GIFT City. Each investment type has specific regulations and
                      requirements.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>What is the minimum investment amount for NRI PMS?</AccordionTrigger>
                    <AccordionContent>
                      The minimum investment amount for PMS in India is Rs. 50 lakhs, which applies to both resident
                      Indians and NRIs. This is as per SEBI regulations.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>What are the tax implications for NRI investments?</AccordionTrigger>
                    <AccordionContent>
                      Tax implications vary based on the type of investment and the tax treaty between India and your
                      country of residence. Generally, capital gains, dividends, and interest income are subject to TDS
                      (Tax Deducted at Source).
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>What is GIFT City and why is it important for NRIs?</AccordionTrigger>
                    <AccordionContent>
                      GIFT (Gujarat International Finance Tec-City) City is India's first operational smart city and
                      international financial services center. It offers various investment opportunities for NRIs
                      through AIFs and other financial instruments with special tax benefits and regulatory framework.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </AnimationWrapper>
        </div>
      </div>
      <ContactFloat />
    </>
  )
}
