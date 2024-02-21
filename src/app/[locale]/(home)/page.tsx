// import LetteringText from '@/components/LetterizeText/LetterizeText';
// import Link from 'next/link';
// import './home.scss'
// import MotionContainer from '@/components/ui/MotionContainer/MotionContainer';
// import { IHomePage } from '@/types/types';
// import { getHomePageText } from '@/server/action';
// import ImageUpload from '@/components/ui/ImageUpload/ImageUpload';


// export const metadata = {
//     title: 'Home | Portfolio Oliinyk Yevgenii',
// }

async function Home({ params: { locale } }: { params: { locale: string } }) {

    // const { name, position, contactButton } = await getHomePageText(locale) as IHomePage

    return (
        <>HOME</>
        // <section
        //     className='home'
        // >
        //     <div className="home__wrapper">

        //         <h1
        //             className="home__title"
        //             aria-label={name}
        //         >
        //             <LetteringText text={name} />
        //         </h1>
        //         {/* <ImageUpload/> */}
        //         <MotionContainer initial={{ y: 30 }} delay={5} duration={1} >
        //             <p className="home__subtitle">
        //                 {position}
        //             </p>
        //         </MotionContainer>
        //         <MotionContainer initial={{ y: 10 }} delay={8} duration={1.5} >
        //             <Link href="/contacts" className="btn">
        //                 {contactButton}
        //             </Link>
        //         </MotionContainer>
        //     </div>
        // </section>
    )
}

export default Home
