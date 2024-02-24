import { NextRequest, NextResponse } from "next/server"
import { prisma } from '@/libs/prismaDb'
import { IHomePage, } from '@/types/types'

export async function GET() {
    try {

        const data = await prisma.homePage.findFirst()

        if (!data) {
            return NextResponse.json({ message: 'No any home page data' }, { status: 400 })
        }

        return NextResponse.json({ data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Ua home page error', error }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as IHomePage

        if (!body) {
            return NextResponse.json({ message: 'No any home page data' }, { status: 400 })
        }

        const newHomePage = await prisma.homePage.create({
            data: body
        })

        return NextResponse.json( newHomePage, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Ua home page error', error }, { status: 500 })
    }
}