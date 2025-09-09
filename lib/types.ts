// Common types for the application

export interface User {
  id: string
  email: string
  name?: string
  role: "user" | "admin"
}

export interface Blog {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  featuredImage?: string
  author: string
  categories: string[]
  tags: string[]
  isPublished: boolean
  publishedAt?: string
  createdAt: string
  updatedAt: string
}

export interface Newsletter {
  id: string
  title: string
  content: string
  type: "PMS" | "AIF"
  publishDate: string
  createdAt: string
  updatedAt: string
}

export interface PMS {
  id: string
  name: string
  provider: string
  strategy: string
  aum: number
  minInvestment: number
  riskProfile: "Low" | "Medium" | "High" | "Very High"
  returns: {
    oneMonth?: number
    threeMonths?: number
    sixMonths?: number
    oneYear?: number
    threeYears?: number
    fiveYears?: number
  }
  description: string
  highlights: string[]
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Inquiry {
  id: string
  name: string
  email: string
  phone?: string
  message: string
  service?: "PMS" | "AIF" | "Other"
  createdAt: string
}
