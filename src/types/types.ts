export interface ILocale {
    locale: string
}

export interface ILink {
    id?: string,
    link: string,
    label: string
}

export interface IHomePage {
    lang?: string
    name: string,
    position: string,
    contactButton: string
}

export interface IMainPhoto {
    id?: string,
    photo: string,
}

export interface ITextReqTypes {
    lang: string
    navLinks?: ILink[],
    home?: IHomePage
    social?: ILink[]
}

export interface IAboutPage {
    id?: string

    about?: IAboutColumn
    skills?: IAboutColumn
    languages?: IAboutColumnWithLanguage
    hobbies?: IAboutColumn
}

export interface IAboutColumn {
    id?: string
    lang: string
    title: string,
    text?: string
    services: string[]
    download?: string
    aboutPageId?: string;
}

export interface IAboutColumnWithLanguage {
    id?: string
    lang: string
    title: string,
    text?: string
    services: IAboutLanguage[] 
    download?: string
    aboutPageId?: string;
}

export interface IAboutLanguage {
    id?: string
    aboutLanguagesId?: string
    name: string,
    rating: string
}










// export interface IAboutReqTypes {
//     data: IAboutPageTypes
// }

// export interface IAboutPageTypes {
//     about: IAboutPageReqTypes
// }

// export interface IAboutPageReqTypes {
//     aboutText: string[],
//     aboutPhoto: string
// }

// export interface IAboutCVResType {
//     cv: ICvDataType
// }

// export interface ICvDataType {
//     id?: string
//     aboutCV: string,
// }

// export interface ISkillsTextReq {
//     data: ISkillsTextTypes
// }

// export interface ISkillsTextTypes {
//     skillsText: ISkillsTextReqTypes
// }

// export interface ISkillsTextReqTypes {
//     id?: string,
//     skillsText?: string[],
// }

// export interface ISkillsIconsReqTypes {
//     id?: string
//     skillsIcons?: ISkillsIconTypes[]
//     createdAt?: Date
//     updatedAt?: Date
// }

// export interface ISkillsIconsListType {
//     id?: string;
//     skillsList: ISkillsIconTypes[];
// }

// export interface ISkillsIconTypes {
//     id?: string;
//     skillsLabel: string;
//     skillsIcon: string;
//     createdAt?: Date;
//     updatedAt?: Date;
// }

// export interface IProjectsReqTypes {
//     id?: string;
//     projects?: IProjectTypes[];
//     filters?: string[]
//     totalProjects: number
//     message?: string
// }

// export interface IProjectTypes {
//     id?: string;
//     projectLabel: string
//     projectImage: string
//     projectStack: string
//     projectDemo: string
//     projectGit: string
//     projectFilter: string
//     createdAt?: Date;
//     updatedAt?: Date;
// }

// export interface IContactsPageTypes {
//     contactsText: IContactsPageReqTypes
// }

// export interface IContactsPageReqTypes {
//     id?: string
//     contactsText: string[],
// }

// export interface IFormDataTypes {
//     id?: string;
//     name: string;
//     subject: string;
//     email: string;
//     message: string;
// }

// export interface IFiltersProps {
//     activeFilter: string
//     filters: string[]
//     setActiveFilter: Dispatch<SetStateAction<string>>
//     isLoading: boolean
//     setPage: Dispatch<SetStateAction<number>>
// }
