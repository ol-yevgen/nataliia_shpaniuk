'use server'

import { prisma } from "@/libs/prismaDb"
import { IAboutColumn, IAboutColumnWithLanguage, IAboutLanguage, IAboutPage, IHomePage, ILink, IMainPhoto, ITextReqTypes } from '@/types/types';
import sharp from "sharp"

export const getNavLinks = async (lang: string) => {
    try {
        let data = await prisma.navLinks.findUnique({
            where: {
                lang: lang
            },
            include: {
                navLinks: true
            }
        }) 
        
        return data?.navLinks as ILink[]
    } catch (error) {
        console.log(error)
    }
}

export const getPhoto = async () => {
    try {
        const mainPhoto = await prisma.mainPhoto.findFirst()

        return mainPhoto as IMainPhoto

    } catch (error) {
        console.log(error)
    }
}

export const getSocial = async () => {
    try {
        const social = await prisma.social.findMany()
        
        return social as ILink[]

    } catch (error) {
        console.log(error)
    }
}
