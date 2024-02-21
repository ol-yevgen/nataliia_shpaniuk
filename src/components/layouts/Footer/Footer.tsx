// import {telegramSvg, linkedInSvg, skypeSvg} from '../../../../public/assets/icons'
import { getSocial } from '@/server/action';
import './footer.scss'
import Link from 'next/link';

export default async function Footer() {

    // const social = await getSocial()
    // const icons = [linkedInSvg, telegramSvg, skypeSvg]

    // const dataWithIcons = social?.map((item, index) => {        
    //     return { ...item, icon: icons[index] }
    // })

    return (
        <footer className="social">
            <ul className="social__list">
                {/* {dataWithIcons?.map(icon => {
                    return <Link
                        key={icon.id}
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
                })} */}
            </ul>
        </footer>
    )
}
