import Articles, { Article } from '@/models/Articles'
import connectMongo from '@/lib/mongoose'

export async function GET(request: Request) {
    await connectMongo()
    const articles = await Articles.find() as Article[]

    return Response.json({ articles })
}