import { TagBoxContainer } from "./styles";

interface TagBoxProps {
    children: React.ReactNode
    checked: boolean
    onClick: () => void
}

export function TagBox({ children, checked, onClick }: TagBoxProps) {
    return (
        <TagBoxContainer checked={checked} onClick={onClick}>
            <input type="checkbox" checked={checked} readOnly />
            {children}
        </TagBoxContainer>
    )
}