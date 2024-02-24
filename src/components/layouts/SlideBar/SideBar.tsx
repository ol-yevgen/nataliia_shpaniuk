'use client'

import Navbar from '../Navbar/Navbar';
import LanguageSelector from '@/components/ui/LanguageSelector/LanguageSelector';
import './slideBar.scss'
import { RefObject, useContext } from 'react';
import Image from 'next/image';
import Social from '@/components/Social/Social';
import { useQuery } from '@tanstack/react-query';
import { getPhoto, getSocial } from '@/server/action';
import { ILink } from '@/types/types';
import MotionContainer from '@/components/ui/MotionContainer/MotionContainer';
import { LanguageContext } from '@/providers/LanguageProvider';

interface ISlideBar {
    burgerRef: RefObject<HTMLDivElement>
}

const SlideBar = ({burgerRef }: ISlideBar) => {

    const locale = useContext(LanguageContext).locale

    const { data } = useQuery({
        queryKey: ['social'],
        queryFn: async () => await getSocial()
    })

    const { data: photo } = useQuery({
        queryKey: ['photo'],
        queryFn: async () => await getPhoto()
    })

    return (
        <>
            <MotionContainer initial={{ x: 0 }} delay={0} duration={1} className='mobile__menu'>
                <MotionContainer initial={{ x: 30 }} delay={3} duration={.8}>
                    <div className="header__selector mobile__selector"
                        ref={burgerRef}
                    >
                        <LanguageSelector locale={locale} />
                    </div>
                </MotionContainer>

                <MotionContainer initial={{ x: 30 }} delay={4} duration={1} className="mobile__photo">
                    {photo &&
                        <Image
                            src={photo?.photo as string}
                            width={100}
                            height={100}
                            quality={40}
                            alt=''
                        />
                    }
                </MotionContainer>

                <Navbar/>

                <div className="mobile__social">
                    <Social social={data as ILink[]} />
                </div>
            </MotionContainer>
        </>
    )
}

export default SlideBar;