'use client'

import { RefObject, useEffect } from 'react';
import './burger.scss';
import useOutsideClickListener from '@/hooks/useOutsideClickListener';
import { ILocale } from '@/types/types';
import SlideBar from '@/components/layouts/SlideBar/SideBar';
import MotionContainer from '@/components/ui/MotionContainer/MotionContainer';

const Burger = ({ locale }: ILocale) => {
    const { isShow, setIsShow, burgerRef } = useOutsideClickListener()

    const burgerStick1Animation = isShow ? "stick stick-1 open" : "stick stick-1 close";
    const burgerStick2Animation = isShow ? "stick stick-2 open" : "stick stick-2 close"
    const burgerStick3Animation = isShow ? "stick stick-3 open" : "stick stick-3 close"

    useEffect(() => {
        const bodyScrollToggle = document.querySelector('html') as HTMLHtmlElement
        if (isShow) {
            bodyScrollToggle.classList.add('scrollOff')
        }

        return () => bodyScrollToggle.classList.remove('scrollOff')
    }, [isShow])

    return (
        <>
            <div
                ref={burgerRef as RefObject<HTMLDivElement>}
                className="header__burger"
                onClick={() => setIsShow(true)}
            >
                <div className={burgerStick1Animation}></div>
                <div className={burgerStick2Animation}></div>
                <div className={burgerStick3Animation}></div>
            </div>
            {
                isShow &&
                <>
                    <div className='header__burger--hide'></div>
                    <SlideBar
                        locale={locale}
                        burgerRef={burgerRef}
                    />
                </>
                
            }
        </>
    )
}

export default Burger;