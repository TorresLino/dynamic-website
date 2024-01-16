import mongoose from 'mongoose'

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid environment variable: "MONGODB_URI"')
}

declare global {
    // eslint-disable-next-line no-unused-vars, no-var
    var mongoose: {
        conn: null | typeof import('mongoose'),
        promise: null | Promise<typeof import('mongoose')>
    }
}
const cached = global.mongoose || { conn: null, promise: null }

const uri = process.env.MONGODB_URI

const connectMongo = async () => {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(uri).then(mongoose => mongoose)
    }

    cached.conn = await cached.promise

    return cached.conn
}

export default connectMongo