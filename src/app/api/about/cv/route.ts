import { NextRequest, NextResponse } from "next/server"
import { prisma } from '@/libs/prismaDb'
import { IAboutColumn, IHomePage } from '@/types/types'

export async function GET() {
    try {

        const homePage = await prisma.homePage.findMany()

        if (!homePage) {
            return NextResponse.json({ message: 'No any home page data' }, { status: 400 })
        }

        return NextResponse.json(homePage, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'En home page error', error }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        if (!body) {
            return NextResponse.json({ message: 'No any About CV data' }, { status: 400 })
        }

        const isExistCv = await prisma.aboutCv.findFirst({
            where: {lang: body.lang}
        })

        if (isExistCv) {
            await prisma.aboutCv.deleteMany({
                where: { lang: body.lang }
            })
        }

        const cv = await prisma.aboutCv.create({
            data: body
        })

        return NextResponse.json(cv, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'About CV error', error }, { status: 500 })
    }
}