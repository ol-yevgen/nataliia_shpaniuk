'use client'

import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export const SCREEN_S = 550;
export const SCREEN_SM = 700;
export const SCREEN_MD = 850;
export const SCREEN_LG = 900;
export const SCREEN_L = 1000;
export const SCREEN_XL = 1200;
export const SCREEN_XXL = 1400;
export const SCREEN_XXXL = 1600;

export const useResize = () => {
    const [width, setWidth] = useState<number>(1000);
    const delayWidth = useDebounce(width, 350)

    const handleResize = useCallback((event: any) => {
        setWidth(event.target.innerWidth)
    }, [])

    useEffect(() => {
        setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [handleResize])
    
    return {
        delayWidth,
        isScreenS: width >= SCREEN_S,
        isScreenSm: width >= SCREEN_SM,
        isScreenMd: width >= SCREEN_MD,
        isScreenLg: width >= SCREEN_LG,
        isScreenL: width >= SCREEN_L,
        isScreenXl: width >= SCREEN_XL,
        isScreenXxl: width >= SCREEN_XXL,
        isScreenXxxl: width >= SCREEN_XXXL,
    };
};
