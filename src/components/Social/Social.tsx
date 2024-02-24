import { ILink } from '@/types/types';
import Link from 'next/link';
import './social.scss'
import { Fragment } from 'react';
import MotionContainer from '../ui/MotionContainer/MotionContainer';

export default function Social({ social }:{social: ILink[]}) {
    return (
        <ul className="social__list">
            {social?.map((icon, index) => {
                return <Fragment key={icon.id}>
                    <MotionContainer initial={{ x: 30 }} delay={index + 6} duration={1} >
                        <Link
                            href={icon.link}
                            className='social__link'
                            target='_blank'
                            rel='noreferrer'
                            aria-label="Visit my social account"
                        >
                            <li className="social__icon">
                                {icon.icon}
                            </li>
                        </Link>
                    </MotionContainer>

                </Fragment>

            })}
        </ul>
    )
};
