import LetteringText from '@/components/LetterizeText/LetterizeText';
import Link from 'next/link';
import './home.scss'
import MotionContainer from '@/components/ui/MotionContainer/MotionContainer';
import { IHomePage } from '@/types/types';
import { getHomePageText } from '@/server/action';
import { Metadata, ResolvingMetadata } from 'next';
// import ImageUpload from '@/components/ui/ImageUpload/ImageUpload';


// export const metadata = {
//     title: 'Home | Nataliia Shpaniuk',
// }

type Props = {
    params: { locale: string }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const locale = params.locale
    const home = await getHomePageText(locale)

    return {
        title: home?.name
    }
}

async function Home({ params: { locale } }: Props) {

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
                        delay={2}
                    >
                        <p className="home__subtitle">
                            {data.position}
                        </p>
                    </MotionContainer>
                    <MotionContainer
                        initial={{ y: 10 }}
                        duration={1}
                        delay={5.5}
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
