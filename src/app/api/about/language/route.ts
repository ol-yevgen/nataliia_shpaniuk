import { NextRequest, NextResponse } from "next/server"
import { prisma } from '@/libs/prismaDb'
import { IAboutColumnWithLanguage, IAboutLanguage } from '@/types/types'

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
        const { title, lang, services } = await request.json() as IAboutColumnWithLanguage

        const aboutPage = await prisma.aboutPage.findUnique({
            where: { lang }
        })

        const newLanguage = await prisma.aboutLanguages.create({
            data: {
                lang,
                title,
                aboutPage: { connect: { id: aboutPage?.id } },
                services: {
                    createMany: {
                        data: (services as IAboutLanguage[]).map((service => ({
                            name: service.name,
                            rating: service.rating,
                        })))
                    }
                },
            },
            include: {
                services: true,
            },
        }) as IAboutColumnWithLanguage

        return NextResponse.json(newLanguage, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'About Skills page error', error }, { status: 500 })
    }
}