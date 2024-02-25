'use client'

import { useResize } from '@/hooks/useResize';
import Navbar from '../Navbar/Navbar';
import './menu.scss'
import LanguageSelector from '@/components/ui/LanguageSelector/LanguageSelector';
import Burger from '@/components/layouts/Burger/Burger';
import { useContext } from 'react';
import { ILocale } from '@/types/types';

const Menu = ({ locale }: ILocale) => {

    // const windowWidth = useResize()

    return (
        <div className="main__menu">
            <Navbar locale={locale} />
            <div className="header__selector">
                <LanguageSelector locale={locale} />
            </div>
        </div>
        // windowWidth.isScreenLg
        //     ? <div className="main__menu">
        //         <Navbar locale={locale} />
        //         <div className="header__selector">
        //             <LanguageSelector locale={locale} />
        //         </div>
        //     </div>
        //     : <Burger locale={locale} />
    )
}

export default Menu;
