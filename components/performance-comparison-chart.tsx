"use client"

import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "rgb(156 163 175)", // text-gray-400
        font: {
          family: "Inter, sans-serif",
        },
      },
    },
    title: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => `${context.dataset.label}: ${context.parsed.y}% CAGR`,
      },
    },
  },
  scales: {
    x: {
      grid: {
        color: "rgb(31 41 55)", // border-gray-800
      },
      ticks: {
        color: "rgb(156 163 175)", // text-gray-400
      },
    },
    y: {
      grid: {
        color: "rgb(31 41 55)", // border-gray-800
      },
      ticks: {
        color: "rgb(156 163 175)", // text-gray-400
        callback: (value) => value + "%",
      },
    },
  },
}

const data = {
  labels: ["Savvy Capital", "Green Lantern", "Aequitas", "Negen Capital"],
  datasets: [
    {
      label: "Top PMS Returns",
      data: [59, 58.05, 55.74, 50.07],
      borderColor: "rgb(59, 130, 246)", // blue-500
      backgroundColor: "rgba(59, 130, 246, 0.5)",
      tension: 0.4,
    },
    {
      label: "Top Mutual Fund Returns",
      data: [40.19, 36.88, 32.83, 21.85],
      borderColor: "rgb(234, 179, 8)", // yellow-500
      backgroundColor: "rgba(234, 179, 8, 0.5)",
      tension: 0.4,
    },
  ],
}

export default function PerformanceComparisonChart() {
  return (
    <div className="w-full h-[400px] bg-gray-900 rounded-lg p-4">
      <Line options={options} data={data} />
    </div>
  )
}
