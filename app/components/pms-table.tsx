"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lock, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface PMSData {
  _id: string
  name: string
  provider: string
  strategy: string
  aum: number
  minInvestment: number
  riskProfile: string
  returns: {
    oneMonth: number | null
    threeMonths: number | null
    sixMonths: number | null
    oneYear: number | null
    threeYears: number | null
    fiveYears: number | null
  }
  description?: string
  highlights?: string[]
}

interface PMSTableProps {
  initialData?: PMSData[]
  showFilters?: boolean
  maxItems?: number
  title?: string
  description?: string
}

export function PMSTable({
  initialData = [],
  showFilters = true,
  maxItems = 5,
  title = "Investment Strategy Comparison",
  description = "Compare performance metrics across different portfolio management strategies",
}: PMSTableProps) {
  const [pmsData, setPmsData] = useState<PMSData[]>(initialData)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [riskFilter, setRiskFilter] = useState("")
  const [timeframe, setTimeframe] = useState("oneYear")
  const [isRestricted, setIsRestricted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const fetchPMSData = async () => {
      try {
        setLoading(true)

        // Get token if available
        const token = localStorage.getItem("auth_token")

        // Build query params
        const params = new URLSearchParams()
        if (searchTerm) params.append("search", searchTerm)
        if (riskFilter) params.append("riskProfile", riskFilter)
        params.append("limit", maxItems.toString())

        // Fetch data
        const response = await fetch(`/api/pms?${params.toString()}`, {
          headers: token
            ? {
                Authorization: `Bearer ${token}`,
              }
            : {},
        })

        if (!response.ok) {
          throw new Error("Failed to fetch PMS data")
        }

        const data = await response.json()
        setPmsData(data.pmsData || [])
        setIsRestricted(data.restricted || false)
      } catch (error) {
        console.error("Error fetching PMS data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPMSData()
  }, [searchTerm, riskFilter, maxItems])

  const formatReturns = (value: number | null) => {
    if (value === null) return "N/A"
    return `${value.toFixed(1)}%`
  }

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)} Cr`
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)} L`
    }
    return `₹${value.toLocaleString()}`
  }

  const getReturnValue = (pms: PMSData) => {
    switch (timeframe) {
      case "oneMonth":
        return pms.returns.oneMonth
      case "threeMonths":
        return pms.returns.threeMonths
      case "sixMonths":
        return pms.returns.sixMonths
      case "oneYear":
        return pms.returns.oneYear
      case "threeYears":
        return pms.returns.threeYears
      case "fiveYears":
        return pms.returns.fiveYears
      default:
        return pms.returns.oneYear
    }
  }

  const handleLogin = () => {
    router.push("/auth/login")
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

        <Tabs defaultValue="performance" className="mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="performance">Performance Overview</TabsTrigger>
            <TabsTrigger value="all-pms">All PMS in India</TabsTrigger>
            <TabsTrigger value="best-pms">Best PMS in India</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="mt-4">
            {showFilters && (
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search strategies..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select value={riskFilter} onValueChange={setRiskFilter}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Risk Profile" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Risk Profiles</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Very High">Very High</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={timeframe} onValueChange={setTimeframe}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oneMonth">1 Month</SelectItem>
                    <SelectItem value="threeMonths">3 Months</SelectItem>
                    <SelectItem value="sixMonths">6 Months</SelectItem>
                    <SelectItem value="oneYear">1 Year</SelectItem>
                    <SelectItem value="threeYears">3 Years</SelectItem>
                    <SelectItem value="fiveYears">5 Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Strategy Name</TableHead>
                    <TableHead className="hidden md:table-cell">Provider</TableHead>
                    <TableHead>
                      {timeframe === "oneMonth" && "1M Returns"}
                      {timeframe === "threeMonths" && "3M Returns"}
                      {timeframe === "sixMonths" && "6M Returns"}
                      {timeframe === "oneYear" && "1Y Returns"}
                      {timeframe === "threeYears" && "3Y Returns"}
                      {timeframe === "fiveYears" && "5Y Returns"}
                    </TableHead>
                    <TableHead>Risk Profile</TableHead>
                    <TableHead className="hidden md:table-cell">Min. Investment</TableHead>
                    <TableHead className="hidden lg:table-cell">AUM (₹ Cr)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8">
                        Loading strategies...
                      </TableCell>
                    </TableRow>
                  ) : pmsData.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8">
                        No strategies found. Try adjusting your filters.
                      </TableCell>
                    </TableRow>
                  ) : (
                    <>
                      {pmsData.map((pms) => (
                        <TableRow key={pms._id}>
                          <TableCell className="font-medium">{pms.name}</TableCell>
                          <TableCell className="hidden md:table-cell">{pms.provider}</TableCell>
                          <TableCell>
                            {formatReturns(getReturnValue(pms))}
                            {isRestricted && timeframe !== "oneYear" && (
                              <Lock className="inline-block ml-1 h-3 w-3 text-muted-foreground" />
                            )}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                pms.riskProfile === "Low"
                                  ? "outline"
                                  : pms.riskProfile === "Medium"
                                    ? "secondary"
                                    : pms.riskProfile === "High"
                                      ? "default"
                                      : "destructive"
                              }
                            >
                              {pms.riskProfile}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">{formatCurrency(pms.minInvestment)}</TableCell>
                          <TableCell className="hidden lg:table-cell">{pms.aum}</TableCell>
                        </TableRow>
                      ))}

                      {isRestricted && (
                        <TableRow className="bg-muted/50">
                          <TableCell colSpan={6} className="text-center py-4">
                            <div className="flex flex-col items-center gap-2">
                              <p className="text-sm text-muted-foreground flex items-center">
                                <Lock className="mr-1 h-4 w-4" />
                                Sign in to view more strategies and complete performance data
                              </p>
                              <Button size="sm" onClick={handleLogin}>
                                Sign In
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </>
                  )}
                </TableBody>
              </Table>
            </div>

            {pmsData.length > 0 && !isRestricted && (
              <div className="mt-6 space-y-2">
                <h3 className="text-lg font-semibold">Strategy Highlights</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {pmsData.slice(0, 3).map((pms) => (
                    <li key={`highlight-${pms._id}`}>
                      <span className="font-medium">{pms.name}:</span>{" "}
                      {pms.highlights?.[0] ||
                        `Focused on ${pms.strategy} with ${pms.riskProfile.toLowerCase()} risk profile`}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </TabsContent>

          <TabsContent value="all-pms" className="mt-4">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>PMS Name</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>Strategy</TableHead>
                    <TableHead>AUM (₹ Cr)</TableHead>
                    <TableHead className="hidden md:table-cell">1Y Returns</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8">
                        Loading PMS data...
                      </TableCell>
                    </TableRow>
                  ) : pmsData.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8">
                        No PMS data found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    <>
                      {pmsData.map((pms) => (
                        <TableRow key={`all-${pms._id}`}>
                          <TableCell className="font-medium">{pms.name}</TableCell>
                          <TableCell>{pms.provider}</TableCell>
                          <TableCell>{pms.strategy}</TableCell>
                          <TableCell>{pms.aum}</TableCell>
                          <TableCell className="hidden md:table-cell">{formatReturns(pms.returns.oneYear)}</TableCell>
                        </TableRow>
                      ))}

                      {isRestricted && (
                        <TableRow className="bg-muted/50">
                          <TableCell colSpan={5} className="text-center py-4">
                            <div className="flex flex-col items-center gap-2">
                              <p className="text-sm text-muted-foreground flex items-center">
                                <Lock className="mr-1 h-4 w-4" />
                                Sign in to view complete PMS data
                              </p>
                              <Button size="sm" onClick={handleLogin}>
                                Sign In or Unlock with PRO
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </>
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="best-pms" className="mt-4">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>PMS Name</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>1Y Returns</TableHead>
                    <TableHead className="hidden md:table-cell">3Y Returns</TableHead>
                    <TableHead className="hidden lg:table-cell">5Y Returns</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8">
                        Loading best PMS data...
                      </TableCell>
                    </TableRow>
                  ) : pmsData.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8">
                        No PMS data found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    <>
                      {/* Sort by 1Y returns and show top performers */}
                      {pmsData
                        .filter((pms) => pms.returns.oneYear !== null)
                        .sort((a, b) => (b.returns.oneYear || 0) - (a.returns.oneYear || 0))
                        .slice(0, 5)
                        .map((pms) => (
                          <TableRow key={`best-${pms._id}`}>
                            <TableCell className="font-medium">{pms.name}</TableCell>
                            <TableCell>{pms.provider}</TableCell>
                            <TableCell>{formatReturns(pms.returns.oneYear)}</TableCell>
                            <TableCell className="hidden md:table-cell">
                              {formatReturns(pms.returns.threeYears)}
                              {isRestricted && <Lock className="inline-block ml-1 h-3 w-3 text-muted-foreground" />}
                            </TableCell>
                            <TableCell className="hidden lg:table-cell">
                              {formatReturns(pms.returns.fiveYears)}
                              {isRestricted && <Lock className="inline-block ml-1 h-3 w-3 text-muted-foreground" />}
                            </TableCell>
                          </TableRow>
                        ))}

                      {isRestricted && (
                        <TableRow className="bg-muted/50">
                          <TableCell colSpan={5} className="text-center py-4">
                            <div className="flex flex-col items-center gap-2">
                              <p className="text-sm text-muted-foreground flex items-center">
                                <Lock className="mr-1 h-4 w-4" />
                                Sign in to view complete performance data
                              </p>
                              <Button size="sm" onClick={handleLogin}>
                                Sign In or Unlock with PRO
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </>
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </CardHeader>
    </Card>
  )
}
