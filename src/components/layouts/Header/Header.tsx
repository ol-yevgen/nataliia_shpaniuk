import './header.scss';
import Link from 'next/link';
// import Menu from '@/components/layouts/Header/Menu/Menu';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getNavLinks } from '@/server/action';
import { ILocale } from '@/types/types';

const Header = async ({ locale }: ILocale) => {

    // const queryClient = new QueryClient()
    // await queryClient.prefetchQuery({
    //     queryKey: ['navLinks',],
    //     queryFn: async () => await getNavLinks(locale)
    // })

    return (
        <header className="header">
            <div className="header__logo">
                <Link
                    href="/"
                    className="logo"
                >
                    NATALIIA
                </Link>
            </div>
            {/* <Menu locale={locale} /> */}
        </header>
        // <HydrationBoundary state={dehydrate(queryClient)}>
        //     <header className="header">
        //         <div className="header__logo">
        //             <Link
        //                 href="/"
        //                 className="logo"
        //             >
        //                 NATALIIA
        //             </Link>
        //         </div>
        //         {/* <Menu locale={locale} /> */}
        //     </header>
        // </HydrationBoundary>
    )
}

export default Header;