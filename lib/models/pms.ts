import mongoose from "mongoose"

const pmsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "PMS name is required"],
    trim: true,
  },
  provider: {
    type: String,
    required: [true, "Provider name is required"],
    trim: true,
  },
  strategy: {
    type: String,
    required: [true, "Strategy name is required"],
    trim: true,
  },
  aum: {
    type: Number, // AUM in INR Crores
    required: [true, "AUM is required"],
  },
  minInvestment: {
    type: Number, // Minimum investment in INR
    required: [true, "Minimum investment is required"],
  },
  riskProfile: {
    type: String,
    enum: ["Low", "Medium", "High", "Very High"],
    required: [true, "Risk profile is required"],
  },
  returns: {
    oneMonth: {
      type: Number,
      default: null,
    },
    threeMonths: {
      type: Number,
      default: null,
    },
    sixMonths: {
      type: Number,
      default: null,
    },
    oneYear: {
      type: Number,
      default: null,
    },
    threeYears: {
      type: Number,
      default: null,
    },
    fiveYears: {
      type: Number,
      default: null,
    },
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  highlights: [
    {
      type: String,
    },
  ],
  isActive: {
    type: Boolean,
    default: true,
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

// Update the updatedAt timestamp before saving
pmsSchema.pre("save", function (next) {
  this.updatedAt = new Date()
  next()
})

export const PMS = mongoose.models.PMS || mongoose.model("PMS", pmsSchema)
