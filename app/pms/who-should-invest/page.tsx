import type { Metadata } from "next"
import WhoShouldInvestClient from "./WhoShouldInvestClient"

export const metadata: Metadata = {
  title: "Who Should Invest in PMS? | Portfolio Management Services",
  description:
    "Learn who should invest in Portfolio Management Services (PMS). Understand the ideal investor profile, requirements, benefits, and considerations for PMS investment in India.",
  keywords:
    "PMS investment, who should invest in PMS, portfolio management services, high net worth individuals, long-term investment, PMS investor profile, PMS requirements, PMS benefits",
  openGraph: {
    title: "Who Should Invest in PMS? | Portfolio Management Services",
    description:
      "Learn who should invest in Portfolio Management Services (PMS). Understand the ideal investor profile and requirements for PMS investment.",
    url: "https://bharatalternates.com/pms/who-should-invest",
    type: "website",
  },
}

export default function WhoShouldInvestPage() {
  return <WhoShouldInvestClient />
}
