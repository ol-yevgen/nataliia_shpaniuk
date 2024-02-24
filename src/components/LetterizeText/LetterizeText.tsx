'use client'
import { motion, } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { Fragment} from "react"
import Image from "next/image";

interface IProps {
    text: string
}

const bubbleAnimation = (item: any) => {
    item.target.className = 'bubble animation'
    const interval = setTimeout(() => {
        item.target.className = 'bubble'
    }, 1000)

    return () => clearTimeout(interval)
}

export default function LetteringText({ text }: IProps) {

    const letterizeText = text.split('').map((letter: string, index: number) => {

        const letterElement = <motion.span
            className='letter'
            key={uuidv4()}
            id={index.toString()}
            onHoverStart={(item: any) => (+(item.target.id) === index) && bubbleAnimation(item)}
            initial={{ opacity: 0, x: 40 }}
            animate={{
                opacity: 1,
                x: 0,
                transition: {
                    delay: index * 0.1,
                    duration: 0.3,
                    ease: [0.6, -0.05, 0.01, 0.99]
                }
            }}
        >
            {letter}
        </motion.span>

        if (letter === ' ') {
            return ' '
        } else if (letter === ',') {
            return <Fragment key={index}>
                {letterElement}
                <br />
            </Fragment>
        } else if (letter === 'Y') {
            return <motion.span
                className='logo-wrapper'
                key={letter}
                id={index.toString()}

                initial={{ opacity: 0, rotate: -120 }}
                animate={{
                    opacity: 1,
                    rotate: 0,
                    transition: {
                        delay: index * 0.1,
                        duration: 0.3,
                        ease: [0.6, -0.05, 0.01, 0.99]
                    }
                }}>
                <Image className='home-logo'
                    src='/assets/Y.png'
                    width={100}
                    height={90}
                    alt="Y"
                />
            </motion.span>
        } else {
            return letterElement
        }

    })
    return letterizeText;
}
