import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { FormEvent, InputHTMLAttributes, useState } from 'react'

import { SearchBarContainer, SearchBarInput } from './styles'

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch: (value: string) => void
}

export function SearchBar({ onSearch, ...props }: SearchBarProps) {
  const [inputValue, setInputValue] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    onSearch(inputValue)
  }

  return (
    <SearchBarContainer as="form" onSubmit={handleSubmit}>
      <SearchBarInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        {...props}
      />
      <MagnifyingGlass width={24} height={24} />
    </SearchBarContainer>
  )
}
