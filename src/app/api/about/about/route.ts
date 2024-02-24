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
        const body = await request.json() as IAboutColumn
        console.log(body)

        if (!body) {
            return NextResponse.json({ message: 'No any About About data' }, { status: 400 })
        }

        const aboutPageExist = await prisma.aboutPage.findFirst({
            where: {lang: body.lang}
        })

        if (!aboutPageExist) {
            await prisma.aboutPage.create({
                    data: {
                        lang: body.lang
                    },
                    include: {
                        about: true
                    }
                })
        }

        const newAboutAboutEn = await prisma.aboutPage.update({
            where: { lang: body.lang },
            data: {
                about: {
                    // delete: { lang: body.lang },
                    create: body
                }
            },
            include: {
                about: true
            }
        })

        return NextResponse.json(newAboutAboutEn, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'En home page error', error }, { status: 500 })
    }
}