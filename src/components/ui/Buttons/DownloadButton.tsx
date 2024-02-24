'use client'

import { useQuery } from '@tanstack/react-query';
import { FC } from "react";
import { getCv } from '@/server/action';

interface DownloadPDFProps {
    fileName?: string,
    locale: string,
    label: string
}

const DownloadButton: FC<DownloadPDFProps> = ({ fileName, locale, label }) => {

    const { data, isLoading, isSuccess, isError: cvIsError, error: cvError } = useQuery({
        queryKey: ['cv'],
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
    };

    return (
        // <Button title={label} action={downloadFile} classNames="btn" />
         <button
            className='btn'
            onClick={() => downloadFile()}
        >
            {label}
        </button>
    );
};

export default DownloadButton;
