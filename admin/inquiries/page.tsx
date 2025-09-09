import type { Metadata } from "next"
import clientPromise from "@/lib/mongodb"
import type { Inquiry } from "@/lib/models/inquiry"

export const metadata: Metadata = {
  title: "Admin - Inquiries | Bharat Alternates",
  description: "Admin panel for managing inquiries",
}

async function getInquiries() {
  try {
    const client = await clientPromise
    const db = client.db("BharatA")

    const inquiries = await db.collection("inquiries").find({}).sort({ createdAt: -1 }).limit(100).toArray()

    return JSON.parse(JSON.stringify(inquiries))
  } catch (error) {
    console.error("Failed to fetch inquiries:", error)
    return []
  }
}

export default async function InquiriesPage() {
  const inquiries = (await getInquiries()) as Inquiry[]

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Inquiries</h1>

      {inquiries.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-lg text-gray-500">No inquiries found</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Name</th>
                <th className="border p-3 text-left">Email</th>
                <th className="border p-3 text-left">Phone</th>
                <th className="border p-3 text-left">Service</th>
                <th className="border p-3 text-left">Date</th>
                <th className="border p-3 text-left">Message</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inquiry) => (
                <tr key={inquiry._id?.toString()} className="hover:bg-gray-50">
                  <td className="border p-3">{inquiry.name}</td>
                  <td className="border p-3">{inquiry.email}</td>
                  <td className="border p-3">{inquiry.phone || "-"}</td>
                  <td className="border p-3">{inquiry.service || "Other"}</td>
                  <td className="border p-3">{new Date(inquiry.createdAt).toLocaleDateString()}</td>
                  <td className="border p-3">
                    <div className="max-w-xs truncate">{inquiry.message}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
