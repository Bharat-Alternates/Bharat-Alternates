"use client"

import { useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js"
import { Line, Bar } from "react-chartjs-2"
import { Card, CardContent } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

// Define chart data types
interface StrategyData {
  name: string
  returns: string
  risk: string
  minInvestment: string
  historicalData: number[]
  benchmarkData: number[]
}

interface InvestmentPerformanceChartProps {
  strategies: StrategyData[]
}

export function InvestmentPerformanceChart({ strategies }: InvestmentPerformanceChartProps) {
  const [activeStrategy, setActiveStrategy] = useState(strategies[0].name)

  const years = ["2018", "2019", "2020", "2021", "2022", "2023"]

  // Find the currently selected strategy
  const selectedStrategy = strategies.find((s) => s.name === activeStrategy) || strategies[0]

  // Line chart data
  const lineChartData = {
    labels: years,
    datasets: [
      {
        label: selectedStrategy.name,
        data: selectedStrategy.historicalData,
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.3,
      },
      {
        label: "Benchmark (Nifty 50)",
        data: selectedStrategy.benchmarkData,
        borderColor: "rgb(107, 114, 128)",
        backgroundColor: "rgba(107, 114, 128, 0.5)",
        borderDash: [5, 5],
        tension: 0.3,
      },
    ],
  }

  // Bar chart data - comparison of all strategies for the latest year
  const barChartData = {
    labels: strategies.map((s) => s.name),
    datasets: [
      {
        label: "Returns (2023)",
        data: strategies.map((s) => s.historicalData[s.historicalData.length - 1]),
        backgroundColor: "rgba(59, 130, 246, 0.7)",
        borderColor: "rgb(59, 130, 246)",
        borderWidth: 1,
      },
      {
        label: "Benchmark (2023)",
        data: strategies.map((s) => s.benchmarkData[s.benchmarkData.length - 1]),
        backgroundColor: "rgba(107, 114, 128, 0.7)",
        borderColor: "rgb(107, 114, 128)",
        borderWidth: 1,
      },
    ],
  }

  // Chart options
  const lineChartOptions: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Historical Performance vs Benchmark",
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.y}%`,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => value + "%",
        },
        title: {
          display: true,
          text: "Annual Returns (%)",
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  }

  const barChartOptions: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Strategy Comparison (2023)",
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.y}%`,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => value + "%",
        },
        title: {
          display: true,
          text: "Returns (%)",
        },
      },
    },
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 justify-center">
        {strategies.map((strategy) => (
          <button
            key={strategy.name}
            onClick={() => setActiveStrategy(strategy.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeStrategy === strategy.name
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {strategy.name}
          </button>
        ))}
      </div>

      <Card className="shadow-lg">
        <CardContent className="pt-6">
          <Tabs defaultValue="performance" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="performance">Historical Performance</TabsTrigger>
              <TabsTrigger value="comparison">Strategy Comparison</TabsTrigger>
            </TabsList>
            <TabsContent value="performance" className="pt-4">
              <div className="h-[350px]">
                <Line options={lineChartOptions} data={lineChartData} />
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium text-blue-800">{selectedStrategy.name} Strategy Highlights:</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>
                    Average Annual Return:{" "}
                    <span className="font-medium">{Number.parseFloat(selectedStrategy.returns).toFixed(1)}%</span>
                  </li>
                  <li>
                    Risk Profile: <span className="font-medium">{selectedStrategy.risk}</span>
                  </li>
                  <li>
                    Minimum Investment: <span className="font-medium">{selectedStrategy.minInvestment}</span>
                  </li>
                  <li>
                    Outperformed Benchmark by{" "}
                    <span className="font-medium">
                      {(
                        selectedStrategy.historicalData.reduce((a, b) => a + b, 0) /
                          selectedStrategy.historicalData.length -
                        selectedStrategy.benchmarkData.reduce((a, b) => a + b, 0) /
                          selectedStrategy.benchmarkData.length
                      ).toFixed(1)}
                      %
                    </span>{" "}
                    annually
                  </li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="comparison" className="pt-4">
              <div className="h-[350px]">
                <Bar options={barChartOptions} data={barChartData} />
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>
                  This chart compares the performance of all our investment strategies against the benchmark for the
                  most recent year. Each strategy is designed to meet different investment objectives and risk profiles.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="text-sm text-gray-500 text-center">
        <p>* Past performance is not indicative of future results. All returns are shown before fees.</p>
        <p>* Data as of December 31, 2023. Updated quarterly.</p>
      </div>
    </div>
  )
}
