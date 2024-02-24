import { NextRequest, NextResponse } from "next/server"
import { prisma } from '@/libs/prismaDb'
import { ILink, ITextReqTypes, } from '@/types/types'
import { cookies } from 'next/headers'

export async function GET() {
    try {
        const navLinks = await prisma.navLinks.findMany()

        if (!navLinks) {
            return NextResponse.json({ message: 'No any contacts text data' }, { status: 400 })
        }

        return NextResponse.json({ navLinks }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'About page error', error }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as ITextReqTypes
        const navLinks = body.navLinks as ILink[]

        if (!navLinks) {
            return NextResponse.json({ message: 'No any contacts text data' }, { status: 400 })
        }

        const isHaveLinks = await prisma.navLinks.findUnique({
            where: {
                lang: body.lang
            }
        })

        // if (!isHaveLinks) {
        //     await prisma.navLinks.create({
        //         data: {
        //             lang: body.lang
        //         },
        //         include: {
        //             navLinks: true
        //         }
        //     })

        // }

        await prisma.navLinks.create({
            data: {
                lang: body.lang
            },
            include: {
                navLinks: true
            }
        })

        const newNav = await prisma.navLinks.update({
            where: {
                lang: body.lang
            },
            data: {
                navLinks: {
                    deleteMany: navLinks,
                    create: navLinks
                }
            },
            include: {
                navLinks: true,
            },
        })

        return NextResponse.json({ newNav }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'About page error', error }, { status: 500 })
    }
}