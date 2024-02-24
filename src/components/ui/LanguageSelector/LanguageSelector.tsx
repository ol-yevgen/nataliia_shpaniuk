import { ChangeEvent } from "react";
import './languageSelector.scss'
import { usePathname, useRouter } from "next/navigation";
import i18nConfig from "@/i18nConfig";
import { useQuery } from "@tanstack/react-query";

export const LanguageSelector = ({ locale }: { locale: string }) => {

    const router = useRouter();
    const currentPathname = usePathname()
    
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        e.stopPropagation()
        const newLocale = e.target.value;

        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        if (
            locale === i18nConfig.defaultLocale
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${locale}`, `/${newLocale}`)
            );
        }

    };

    return (
        <select
            className="lang__select"
            name="lang"
            id="lang-select"
            value={locale}
            onChange={e => handleChange(e)}
        >
            <option
            className="lang__select--en"
            value="en">
                EN
            </option>
            <option
                className="lang__select--ua"
                value="ua">
                UA
            </option>
        </select>
    )
}

export default LanguageSelector;