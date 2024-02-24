interface IParams {
    title: string
    action: () => void
    classNames: string
}

export default function Button({ title, action, classNames }: IParams) {
    return (
        <button
            className={`btn ${classNames}`}
            onClick={action}
        >
            {title}
        </button>

    )
};
