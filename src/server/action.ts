'use server'

import { prisma } from "@/libs/prismaDb"
import { IAboutColumn, IAboutColumnWithLanguage, IAboutLanguage, IAboutPage, IHomePage, ILink, IMainPhoto, ITextReqTypes } from '@/types/types';
import { telegramSvg, linkedInSvg, skypeSvg } from '../../public/assets/icons'
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
        const data = await prisma.social.findMany()

        const icons = [linkedInSvg, telegramSvg, skypeSvg]

        const social = data?.map((item, index) => {
            return { ...item, icon: icons[index] }
        })

        return social as ILink[]

    } catch (error) {
        console.log(error)
    }
}

export const getHomePageText = async (lang: string) => {
    try {
        const homePageText = await prisma.homePage.findUnique({
            where: {
                lang: lang
            }
        })

        return homePageText as IHomePage

    } catch (error) {
        console.log(error)
    }
}

export const getCv = async (lang: string) => {
    try {
        const cv = await prisma.aboutCv.findFirst({
            where: { lang }
        })

        return cv

    } catch (error) {
        console.log(error)
    }
}