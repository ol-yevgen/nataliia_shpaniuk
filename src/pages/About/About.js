import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import { aboutSectionDataUa, aboutSectionDataEn } from '../../data/sectionData/aboutSectionData';
import { useStartSpallingAnimation } from '../../hooks/useSpallingAnimate';
import { useChangeLanguage } from '../../hooks/useChangeLanguage';

import cvENG from '../../data/Shpanuik_Nаtaliia_CV_eng.pdf';
import cvUA from '../../data/Shpanuik_Nаtaliia_CV_ua.pdf';

const About = () => {
    const lang = useSelector((state) => state.language.language);

    const { pageLoaded, iconsRef, scopeSkillIcons } =
        useStartSpallingAnimation(
            0.1,
            'div, h2, p, ul, a',
            { opacity: 1, y: '0%', visibility: 'visible' },
            { opacity: 0, y: '30%', visibility: 'hidden' },
            0.8
        )

    const language = useChangeLanguage(aboutSectionDataUa, aboutSectionDataEn)

    const aboutSections = (arr) => {
        
        return arr.map((section, index) => {
            const firstColumn = section.title === 'about me' || section.title === 'Про мене'
            return (
                <div className="about__column" key={index}>
                    <h2 className="title">{section.title}</h2>
                    {firstColumn &&
                        <p className="about__text">
                            {section.text}
                        </p>
                    }
                    <ul className="about__list">
                        {section.services.map(service => {
                            return (
                                <li className="about__list-item" key={uuidv4()}>{service}</li>
                            )
                        })}
                    </ul>
                    {firstColumn &&
                        <a href={lang === 'en' ? cvENG : cvUA} className="btn" download='CV_Shpaniuk_N'>{section.download}</a>
                    }
                </div>
            )
        })
    }

    const section = aboutSections(language)

    return (
        <section className="about" >
            <AnimatePresence>
                <div className={pageLoaded ? 'show' : 'hide'}
                    ref={iconsRef}
                >
                    <div className="about__wrapper" ref={scopeSkillIcons}>
                        {section}
                    </div>
                </div>
            </AnimatePresence>
        </section >
    )
}

export default About;