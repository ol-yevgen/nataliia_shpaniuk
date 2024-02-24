import { NextRequest, NextResponse } from "next/server"
import { prisma } from '@/libs/prismaDb'
import { IHomePage, ILink, ITextReqTypes } from '@/types/types'

// export async function GET() {
//     try {

//         const homePage = await prisma.homePage.findMany()

//         if (!homePage) {
//             return NextResponse.json({ message: 'No any social data' }, { status: 400 })
//         }

//         return NextResponse.json( homePage, { status: 200 })
//     } catch (error) {
//         return NextResponse.json({ message: 'Social error', error }, { status: 500 })
//     }
// }

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as ITextReqTypes
        const social = body.social as ILink[]

        if (!body) {
            return NextResponse.json({ message: 'No any social data' }, { status: 400 })
        }

        // await prisma.social.deleteMany()
        
        const newHomePageEn = await prisma.social.createMany({
            data: social
        })

        return NextResponse.json(newHomePageEn, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Social error', error }, { status: 500 })
    }
}