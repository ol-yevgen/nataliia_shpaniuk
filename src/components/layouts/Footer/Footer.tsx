import Social from '@/components/Social/Social';
import { getSocial } from '@/server/action';
import { ILink } from '@/types/types';

export default async function Footer() {

    const social = await getSocial() as ILink[]

    return (
        <footer className="social">
            <Social social={social}/>
        </footer>
    )
}
