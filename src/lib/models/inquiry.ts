import type { ObjectId } from "mongodb"

export interface Inquiry {
  _id?: ObjectId
  name: string
  email: string
  phone?: string
  message: string
  service?: "PMS" | "AIF" | "Other"
  createdAt: Date
}

export interface InquiryInput {
  name: string
  email: string
  phone?: string
  message: string
  service?: "PMS" | "AIF" | "Other"
}
