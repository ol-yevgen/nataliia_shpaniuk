import LetteringText from '@/components/LetterizeText/LetterizeText';
import Link from 'next/link';
import './home.scss'
import MotionContainer from '@/components/ui/MotionContainer/MotionContainer';
import { IHomePage } from '@/types/types';
import { getHomePageText } from '@/server/action';
// import ImageUpload from '@/components/ui/ImageUpload/ImageUpload';


// export const metadata = {
//     title: 'Home | Portfolio Oliinyk Yevgenii',
// }

async function Home({ params: { locale } }: { params: { locale: string } }) {

    const data = await getHomePageText(locale) as IHomePage

    return (
        <section className='home'>
            
            {
                data &&
                <div className="home__wrapper">
                    <h1
                        className="home__title"
                        aria-label={data.name}
                    >
                        <LetteringText text={data.name} />
                    </h1>
                    {/* <ImageUpload/> */}
                    <MotionContainer
                        initial={{ y: 30 }}
                        duration={1}
                        delay={5}
                    >
                        <p className="home__subtitle">
                            {data.position}
                        </p>
                    </MotionContainer>
                    <MotionContainer
                        initial={{ y: 10 }}
                        duration={1.5}
                        delay={6}
                    >
                        <Link
                            href="/contacts"
                            className="btn"
                        >
                            {data.contactButton}
                        </Link>
                    </MotionContainer>
                </div>
            }
            
        </section>
    )
}

export default Home
