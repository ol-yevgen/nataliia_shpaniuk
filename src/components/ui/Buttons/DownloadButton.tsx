'use client'

import { useQuery } from '@tanstack/react-query';
import { FC, useEffect, useState } from "react";
import { getCv } from '@/server/action';

interface DownloadPDFProps {
    fileName?: string,
    locale: string,
    label: string
}

const DownloadButton: FC<DownloadPDFProps> = ({ fileName, locale, label }) => {
    const [isDownload, setIsDownload] = useState<boolean>(false)

    const { data, isLoading, isSuccess, isError: cvIsError, error: cvError } = useQuery({
        queryKey: ['cv', !!isDownload],
        enabled: !!isDownload,
        queryFn: async () => await getCv(locale)
    })

    const downloadFile = () => {
        const byteCharacters = atob(data?.aboutCV as string);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);

        const blob = new Blob([byteArray], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = fileName || 'file.pdf';
        document.body.appendChild(link);
        link.click();

        URL.revokeObjectURL(url);
        document.body.removeChild(link);

        setIsDownload(false)
    };

    useEffect(() => {
        if (data) {
            downloadFile()
        }
    }, [data])

    return (
        <>
            <button
                className='btn'
                onClick={() => setIsDownload(true)}
            >
                {label}
            </button>
            {isLoading &&
                <h3>Loading...</h3>
            }
        </>
    )
}

export default DownloadButton;
