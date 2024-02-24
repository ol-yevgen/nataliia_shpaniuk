'use client'

import { ReactNode, createContext, useEffect, useState } from "react";

interface LanguageContextTypes {
    lang: string
}

interface IProps {
    children: ReactNode
    locale: string
}

export const LanguageContext = createContext<LanguageContextTypes>({
    lang: 'en'
})

export const LanguageProvider = ({ children, locale }: IProps) => {
    const [lang, setLang] = useState<string>(locale)
    useEffect(() => {
        setLang(locale)
    }, [locale])
    
    return (
        <LanguageContext.Provider value={{ lang }}>
            {children}
        </LanguageContext.Provider>
    )
}
