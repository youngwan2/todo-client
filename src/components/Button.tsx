interface PropsType {
    children: React.ReactNode
}

export default function Button({ children }: PropsType) {
    return (
        <div>
            {children}
        </div>
    )
}