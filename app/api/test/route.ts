import { NextRequest, NextResponse } from 'next/server'
import Page from '../../../models/page'
import connectMongo from '@/lib/mongoose'

export async function GET() {

    return NextResponse.json({ name: 'kansa' })
}

export async function POST(req: NextRequest) {
    connectMongo()

    const page = await Page.create(await req.json())

    return NextResponse.json({ page })
}