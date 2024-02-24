'use client'

import './navbar.scss'
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getNavLinks } from '@/server/action';
import { Fragment, useContext } from 'react';
import MotionContainer from '@/components/ui/MotionContainer/MotionContainer';
import { useResize } from '@/hooks/useResize';
import { LanguageContext } from '@/providers/LanguageProvider';

const Navbar = () => {

    const locale = useContext(LanguageContext).locale

    const { data } = useQuery({
        queryKey: ['navLinks'],
        queryFn: async () => await getNavLinks(locale)
    })

    const pathName = usePathname()
    const windowWidth = useResize()

    return (
        <nav className="header__nav">
            <ul className="nav">
                {data?.map((link, index) => {
                    const navLink = () => {
                        return (
                            <Link
                                href={link.link as string}
                                className={
                                    windowWidth.isScreenLg
                                        ? `nav__link ${link.link === pathName
                                            ? 'nav__link-active'
                                            : ''}`
                                        : ''
                                }
                            >
                                <li>{link.label}</li>
                            </Link>
                        )
                    }
                    return (<Fragment key={link.label}>
                        {windowWidth.isScreenLg
                            ? navLink()
                            : <MotionContainer initial={{ x: 30 }} delay={4 + index} duration={1} className={`nav__link ${link.link === pathName ? 'nav__link-active' : ''}`}>
                                {navLink()}
                            </MotionContainer>
                        }
                    </Fragment>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar;