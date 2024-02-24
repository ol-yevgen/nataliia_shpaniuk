'use client'

import { useResize } from '@/hooks/useResize';
import Navbar from '../Navbar/Navbar';
import './menu.scss'
import LanguageSelector from '@/components/ui/LanguageSelector/LanguageSelector';
import Burger from '@/components/layouts/Burger/Burger';
import { useContext } from 'react';
import { LanguageContext } from '@/providers/LanguageProvider';

const Menu = () => {

    const locale = useContext(LanguageContext).locale
    const windowWidth = useResize()

    return (
        windowWidth.isScreenLg
            ? <div className="main__menu">
                <Navbar/>
                <div className="header__selector">
                    <LanguageSelector locale={locale} />
                </div>
            </div>
            : <Burger locale={locale} />
    )
}

export default Menu;
