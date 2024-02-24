'use client'

import { ReactNode, createContext } from "react";

interface LanguageContextTypes {
    locale: string
}

interface IProps {
    children: ReactNode
    locale: string
}

export const LanguageContext = createContext<LanguageContextTypes>({
    locale: 'en'
})

export const LanguageProvider = ({ children, locale }: IProps) => {

    return (
        <LanguageContext.Provider value={{ locale }}>
            {children}
        </LanguageContext.Provider>
    )
}
