import type { Metadata } from "next"
import PMSFAQClientPage from "./PMSFAQClientPage"

export const metadata: Metadata = {
  title: "PMS FAQ | Frequently Asked Questions about Portfolio Management Services",
  description:
    "Find answers to frequently asked questions about Portfolio Management Services (PMS), including types, benefits, tax implications, and more.",
  keywords:
    "PMS FAQ, portfolio management services, PMS questions, PMS types, PMS benefits, PMS tax implications, PMS investment, equity PMS, debt PMS",
  openGraph: {
    title: "PMS FAQ | Frequently Asked Questions about Portfolio Management Services",
    description:
      "Find answers to frequently asked questions about Portfolio Management Services (PMS), including types, benefits, tax implications, and more.",
    url: "https://bharatalternates.com/pms/pms-faq",
    type: "website",
  },
}

export default function PMSFAQPage() {
  return <PMSFAQClientPage />
}
