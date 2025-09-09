// Centralized statistics configuration
export interface Stat {
  id: string;
  title: string;
  value: string;
  change?: string;       // omit or undefined when you don't want a "change" line
  data: number[];        // sparkline/chart data
  color: string;         // primary color for chart
  fillColor?: string;    // optional fillColor for line charts
}

export const stats: Stat[] = [
  {
    id: "industryAUM",
    title: "Combined PMS + AIF (Q1 FY 2025) Industry AUM",
    value: "₹18.87 lakh crore",
    // no "change" text as per requirements
    data: [16, 17, 18, 18.5, 18.87, 18.87, 18.87, 18.87, 18.87, 18.87, 18.87, 18.87],
    color: "#3b82f6",
    fillColor: "rgba(59, 130, 246, 0.1)",
  },
  {
    id: "clientLoyalty",
    title: "Client Loyalty",
    value: "96% Retention Rate",
    // no "change" text as per requirements
    data: [90, 92, 93, 94, 95, 95.5, 96, 96, 96, 96, 96, 96],
    color: "#10b981",
    fillColor: "rgba(16, 185, 129, 0.1)",
  },
  {
    id: "clientGrowth",
    title: "Client Growth",
    value: "50+",
    change: "+40%",
    data: [10, 15, 20, 25, 30, 35, 40, 45, 48, 49, 50, 50],
    color: "#8b5cf6",
    fillColor: "rgba(139, 92, 246, 0.1)",
  },
  {
    id: "strategies",
    title: "Strategies",
    value: "900+",
    // no "change" text as per requirements
    data: [200, 300, 400, 500, 600, 700, 750, 800, 850, 880, 890, 900],
    color: "#f97316",
    fillColor: "rgba(249, 115, 22, 0.1)",
  },
];
