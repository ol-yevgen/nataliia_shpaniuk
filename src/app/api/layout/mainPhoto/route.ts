import { NextRequest, NextResponse } from "next/server"
import { prisma } from '@/libs/prismaDb'
import sharp from "sharp"
import { convertToBase64 } from "@/libs/base64"

export async function GET() {
    try {

        const data = await prisma.mainPhoto.findFirst()

        if (!data) {
            return NextResponse.json({ message: 'No any photo data' }, { status: 400 })
        }

        return NextResponse.json({ data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Main photo error', error }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        if (!body) {
            return NextResponse.json({ message: 'No any photo data' }, { status: 400 })
        }

        // const buffer = Buffer.from('formData', 'base64')
        // const webp = await sharp(buffer).webp({ quality: 80 }).toBuffer()

        await prisma.mainPhoto.deleteMany()

        const mainPhoto = await prisma.mainPhoto.create({
            data: body
        })

        return NextResponse.json(mainPhoto, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Main photo error', error }, { status: 500 })
    }
}