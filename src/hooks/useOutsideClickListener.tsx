'use client'
import { MouseEvent, RefObject, useCallback, useEffect, useRef, useState } from "react"

// export default function useOutsideClickListener(ref: RefObject<HTMLElement>) {
export default function useOutsideClickListener() {
    const burgerRef = useRef(null) as RefObject<HTMLDivElement>

    const [isShow, setIsShow] = useState<boolean>(false)

    const handlerClickOutside = useCallback((event: MouseEvent) => {
        
        if (burgerRef.current && !burgerRef.current.contains(event.target as Node)) {
            setIsShow(false)
        }
  
    }, [burgerRef])

    useEffect(() => {
        
        if (isShow) {
            document.addEventListener('mousedown', handlerClickOutside as unknown as EventListener)
        }
        
        return () => {
            document.removeEventListener('mousedown', handlerClickOutside as unknown as EventListener)
        }
    }, [handlerClickOutside, isShow])

    return { isShow, setIsShow, burgerRef }
};
