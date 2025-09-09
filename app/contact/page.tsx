import { Mail, MapPin, Phone } from "lucide-react"
import GoogleFormEmbed from "@/components/google-form-embed"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Contact Us</h1>
            <p className="mt-4 text-lg text-primary-foreground md:text-xl">
              Get in touch with our investment experts to discuss your financial goals.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Contact Us</h2>
              <div className="mt-8">
                <GoogleFormEmbed />
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <p className="mt-4 text-muted-foreground">Reach out to us directly using the information below.</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-xl">
                      <MapPin className="mr-2 h-5 w-5 text-primary" /> Office Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-foreground">
                      71/48 Prem Nagar,
                      <br />
                      Janakpuri, New Delhi 110058
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-xl">
                      <Phone className="mr-2 h-5 w-5 text-primary" /> Phone Number
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-foreground">
                      +91 85275 12552
                      <br />
                      Monday to Friday, 9am to 6pm
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-xl">
                      <Mail className="mr-2 h-5 w-5 text-primary" /> Email Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-foreground">Geetansh@bharatalternates.com
</CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 overflow-hidden rounded-lg border shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0789089166456!2d77.08988121508791!3d28.6562983824072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04aa188f8a6d%3A0x8de4083be3d6cc38!2sPrem%20Nagar%2C%20Janakpuri%2C%20Delhi%2C%20110058!5e0!3m2!1sen!2sin!4v1654683269588!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">Find answers to common questions about our services.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                question: "What is the minimum investment amount?",
                answer:
                  "For our Portfolio Management Services (PMS), the minimum investment amount is ₹50 lakhs. For Alternative Investment Funds (AIF), the minimum investment is ₹1 crore.",
              },
              {
                question: "How are your fees structured?",
                answer:
                  "We typically charge a fixed management fee (1-2% per annum) and a performance fee (typically 10-20% of profits above a hurdle rate). The exact fee structure varies by product and is disclosed in detail before investment.",
              },
              {
                question: "How can I track my investments?",
                answer:
                  "We provide secure online access to your portfolio, allowing you to track performance in real-time. Additionally, we send detailed monthly performance reports and quarterly investment reviews.",
              },
              {
                question: "What is your investment philosophy?",
                answer:
                  "We follow a disciplined, research-driven approach to investing, focusing on long-term wealth creation while managing risk. We believe in fundamental analysis and identifying quality businesses with sustainable competitive advantages.",
              },
              {
                question: "How do I withdraw my investments?",
                answer:
                  "Withdrawal processes vary by product. Generally, PMS investments can be withdrawn with notice, while AIFs have specific lock-in periods. Details are provided in the investment agreement.",
              },
              {
                question: "Do you provide tax-related assistance?",
                answer:
                  "We provide comprehensive statements for tax filing purposes. However, we recommend consulting with a tax advisor for specific tax advice related to your investments.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-medium">{faq.question}</h3>
                <p className="mt-2 text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
