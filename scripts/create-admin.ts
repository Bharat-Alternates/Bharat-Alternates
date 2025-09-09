import { MongoClient } from "mongodb"
import * as bcrypt from "bcryptjs"

// This script can be run with: npx ts-node scripts/create-admin.ts

async function createAdmin() {
  // Replace with your MongoDB connection string
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/your-database"

  try {
    const client = new MongoClient(uri)
    await client.connect()
    console.log("Connected to MongoDB")

    const db = client.db()
    const usersCollection = db.collection("users")

    // Check if admin already exists
    const existingAdmin = await usersCollection.findOne({ username: "admin" })

    if (existingAdmin) {
      console.log("Admin user already exists")
      await client.close()
      return
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash("Gheet@1999", 10)

    const result = await usersCollection.insertOne({
      username: "Admin",
      email: "admin@example.com",
      password: hashedPassword,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    console.log(`Admin user created with ID: ${result.insertedId}`)
    await client.close()
  } catch (error) {
    console.error("Error creating admin user:", error)
  }
}

createAdmin()
