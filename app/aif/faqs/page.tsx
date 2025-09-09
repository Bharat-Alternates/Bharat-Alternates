import type { Metadata } from "next"
import AIFFAQClientPage from "./AIFFAQClientPage"

export const metadata: Metadata = {
  title: "AIF FAQ | Frequently Asked Questions about Alternative Investment Funds",
  description:
    "Find answers to frequently asked questions about Alternative Investment Funds (AIF), including types, benefits, tax implications, and more.",
  keywords:
    "AIF FAQ, alternative investment funds, AIF questions, AIF types, AIF benefits, AIF tax implications, AIF investment, category I AIF, category II AIF, category III AIF",
  openGraph: {
    title: "AIF FAQ | Frequently Asked Questions about Alternative Investment Funds",
    description:
      "Find answers to frequently asked questions about Alternative Investment Funds (AIF), including types, benefits, tax implications, and more.",
    url: "https://bharatalternates.com/aif/faqs",
    type: "website",
  },
}

export default function AIFFAQPage() {
  return <AIFFAQClientPage />
}
