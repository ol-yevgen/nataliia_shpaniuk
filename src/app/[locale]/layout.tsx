import { QueryClientProvider } from '@/providers/QueryClientProvider'
import { poppins } from '../../../public/fonts/fonts'
// import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from '@/components/layouts/Header/Header'
import Footer from '@/components/layouts/Footer/Footer'
// import Spinner from '@/components/ui/Spinner/Spinner'
// import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import '@/app/styles/globals.scss'
import Image from 'next/image'

// import { convertToBase64 } from '@/libs/base64'
import { getPhoto } from '@/server/action'
import { IMainPhoto } from '@/types/types'
import MotionContainer from '@/components/ui/MotionContainer/MotionContainer'
// import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
    title: 'Shpaniuk N. Portfolio',
    description: "The PR manager's portfolio of works aimed at increasing the recognition and reputation of clients.",
    icons: {
        icon: ['/favicon.ico']
    }
}

// const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string

export default async function RootLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode,
    params: { locale: string };
}) {

    // const {photo} = await getPhoto() as IMainPhoto

    return (
        <html lang={locale}>
            <body className={poppins.className}>
                {/* <GoogleAnalytics GA_TRACKING_ID={GA_MEASUREMENT_ID} /> */}
                <QueryClientProvider>
                    <div className="wrapper">
                        <Header locale={locale} />
                        <main className="main">
                            <div className="main__container">
                                <MotionContainer initial={{ x: -10 }} delay={0} duration={1.7} className="photo">
                                    {/* {photo &&
                                        <Image
                                            src={photo}
                                            width={350}
                                            height={900}
                                            quality={80}
                                            priority
                                            className="photo__image"
                                            alt='Nataliia'
                                        />
                                    } */}
                                </MotionContainer>
                                <div className="container">
                                    {children}
                                    {/* <Analytics /> */}
                                </div>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </QueryClientProvider>
                {/* <SpeedInsights /> */}
            </body>
        </html >
    )
}
