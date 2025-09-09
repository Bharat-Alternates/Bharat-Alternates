import mongoose, { type Document, Schema } from "mongoose"

export interface INewsletter extends Document {
  title: string
  content: string
  type: "PMS" | "AIF"
  publishDate: Date
  createdAt: Date
  updatedAt: Date
}

const newsletterSchema = new Schema<INewsletter>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    type: {
      type: String,
      enum: ["PMS", "AIF"],
      required: [true, "Newsletter type is required"],
    },
    publishDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
)

export const Newsletter = mongoose.models.Newsletter || mongoose.model<INewsletter>("Newsletter", newsletterSchema)
