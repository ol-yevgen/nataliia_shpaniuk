import localFont from 'next/font/local'

export const poppins = localFont({
    variable: '--font-Poppins-Regular',
    src: [{
        path: './PoppinsRegular.ttf',
        weight: '400',
        style: 'normal',
    },
    {
        path: './PoppinsBold.ttf',
        weight: '600',
        style: 'normal',
    },
    {
        path: './PoppinsBlack.ttf',
        weight: '900',
        style: 'normal',
    },]
})