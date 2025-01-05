import { InputHTMLAttributes } from "react";
import { SearchBarContainer, SearchBarInput } from "./styles";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

export function SearchBar(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <SearchBarContainer>
            <SearchBarInput {...props} />
            <MagnifyingGlass width={24} height={24} />
        </SearchBarContainer>
    )
}