import { getAboutPageText,  } from "@/server/action"
import DownloadButton from '@/components/ui/Buttons/DownloadButton'
import './about.scss'
import MotionContainer from "@/components/ui/MotionContainer/MotionContainer"
import { Fragment } from "react"
import { IAboutLanguage } from "@/types/types"

export default async function About({ params: { locale } }: { params: { locale: string } }) {

    const data = await getAboutPageText(locale)

    return (
        <section className="about" >
            <div className="about__wrapper">

                {data?.map((column, index) => {
                    const firstColumn = column.title === 'about me' || column.title === 'Про мене'
                    const isLang = column.title === 'Languages' || column.title === 'Мови'

                    const delay = index * 3

                    return (<Fragment key={column.id}>
                        <MotionContainer
                            initial={{ y: 30 }}
                            delay={delay}
                            duration={1.5}
                            className="about__column"
                        >
                            <h2 className="title">{column.title}</h2>
                            {firstColumn &&
                                <MotionContainer
                                    initial={{ y: 30 }}
                                    delay={index + 1}
                                    duration={1.9}
                                >
                                    <p className="about__text">
                                        {column.text}
                                    </p>
                                </MotionContainer>
                            }
                            <ul className="about__list">
                                {column.services.map((service, serviceIndex) => {
                                    return (
                                        <Fragment key={serviceIndex}>
                                            <MotionContainer
                                                initial={{ y: 30 }}
                                                delay={
                                                    firstColumn
                                                        ? delay + 1 + serviceIndex
                                                        : delay + serviceIndex
                                                }
                                                duration={1.9}
                                            >
                                                <li className="about__list-item">
                                                    {isLang ?
                                                        <>
                                                            <span className="languages__name">{(service as IAboutLanguage).name}:</span>
                                                            <span className="languages__rating">{(service as IAboutLanguage).rating}</span>
                                                        </>
                                                        : service as string
                                                    }
                                                </li>
                                            </MotionContainer>
                                        </Fragment>
                                    )
                                })}
                            </ul>
                            {firstColumn &&
                                <MotionContainer
                                    initial={{ y: 30 }}
                                    delay={5}
                                    duration={1.9}
                                >
                                    <DownloadButton
                                        fileName='CV_Shpaniuk_N'
                                        locale={locale}
                                        label={column.download as string}
                                    />
                                </MotionContainer>
                            }
                        </MotionContainer>
                    </Fragment>
                    )
                })}
            </div>
        </section >
    )
}
