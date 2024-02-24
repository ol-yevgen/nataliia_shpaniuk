'use client'

import { PropsWithChildren } from "react";
import { motion } from 'framer-motion';

interface IProps {
    initial: { x: number } | { y: number }
    delay: number
    duration: number
    className?: string
}

export default function MotionContainer({
    children,
    initial,
    delay,
    duration,
    className
}: PropsWithChildren<IProps>) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, ...initial }}
            animate={{
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    delay: delay * 0.1,
                    duration: duration,
                    ease: [0.6, -0.05, 0.01, 0.99]
                },
                type: 'spring'
            }}
            exit={{ opacity: 0, transition: { delay: delay * 0.1, duration: duration, ease: [0.6, -0.05, 0.01, 0.99] } }}
        >
            {children}
        </motion.div>
    )
};
