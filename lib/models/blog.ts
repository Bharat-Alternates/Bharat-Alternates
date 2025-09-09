import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    maxlength: [200, "Title cannot be more than 200 characters"],
  },
  slug: {
    type: String,
    required: [true, "Slug is required"],
    unique: true,
    trim: true,
    lowercase: true,
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  excerpt: {
    type: String,
    required: [true, "Excerpt is required"],
    maxlength: [500, "Excerpt cannot be more than 500 characters"],
  },
  featuredImage: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  categories: [
    {
      type: String,
      trim: true,
    },
  ],
  tags: [
    {
      type: String,
      trim: true,
    },
  ],
  isPublished: {
    type: Boolean,
    default: false,
  },
  publishedAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

// Create a text index for search functionality
blogSchema.index({ title: "text", content: "text", excerpt: "text" })

// Update the updatedAt timestamp before saving
blogSchema.pre("save", function (next) {
  this.updatedAt = new Date()
  next()
})

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema)
