import './header.scss';
import Link from 'next/link';
import Menu from '@/components/layouts/Menu/Menu';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getNavLinks, getSocial } from '@/server/action';
import { ILocale } from '@/types/types';

const Header = async ({ locale }: ILocale) => {

    const queryClient = new QueryClient()
    
    await queryClient.prefetchQuery({
        queryKey: ['navLinks',],
        queryFn: async () => await getNavLinks(locale)
    })

    await queryClient.prefetchQuery({
        queryKey: ['social'],
        queryFn: async () => await getSocial()
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <header className="header">
                <div className="header__logo">
                    <Link
                        href="/"
                        className="logo"
                    >
                        NATALIIA
                    </Link>
                </div>
                <Menu/>
            </header>
        </HydrationBoundary>
    )
}

export default Header;