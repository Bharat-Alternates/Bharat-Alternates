import type { Metadata } from "next"
import WhoShouldInvestClient from "./WhoShouldInvestClient"

export const metadata: Metadata = {
  title: "Who Should Invest in AIF? | Alternative Investment Funds",
  description:
    "Learn who should invest in Alternative Investment Funds (AIF). Understand the ideal investor profile, requirements, benefits, and considerations for AIF investment in India.",
  keywords:
    "AIF investment, who should invest in AIF, alternative investment funds, high net worth individuals, long-term investment, AIF investor profile, AIF requirements, AIF benefits",
  openGraph: {
    title: "Who Should Invest in AIF? | Alternative Investment Funds",
    description:
      "Learn who should invest in Alternative Investment Funds (AIF). Understand the ideal investor profile and requirements for AIF investment.",
    url: "https://bharatalternates.com/aif/who-should-invest",
    type: "website",
  },
}

export default function WhoShouldInvestPage() {
  return <WhoShouldInvestClient />
}
