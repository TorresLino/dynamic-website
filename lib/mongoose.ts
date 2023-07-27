import mongoose from 'mongoose'

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {}

const connectMongo = () => {
  mongoose.connect(uri)
}

export default connectMongo