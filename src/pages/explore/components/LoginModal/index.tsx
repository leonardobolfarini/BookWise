import { GithubLogo, GoogleLogo, X } from '@phosphor-icons/react/dist/ssr'

import { LoginCard } from '@/src/components/LoginCard'

import {
  CloseButtonContainer,
  LoginModalContainer,
  LoginModalContent,
  ModalContainer,
} from './styles'

interface LoginModalProps {
  open: boolean
  onClose: () => void
  onLogin: (provider: string) => void
}

export function LoginModal({ open, onClose, onLogin }: LoginModalProps) {
  return (
    <ModalContainer open={open} onClose={onClose}>
      <div>
        <LoginModalContainer>
          <CloseButtonContainer>
            <X
              width={24}
              height={24}
              aria-label="Fechar modal"
              onClick={onClose}
            />
          </CloseButtonContainer>
          <LoginModalContent>
            <h1>Faça login para deixar sua avaliação</h1>
            <LoginCard ImageLogo={GoogleLogo} onClick={() => onLogin('google')}>
              Entrar com Google
            </LoginCard>
            <LoginCard ImageLogo={GithubLogo} onClick={() => onLogin('github')}>
              Entrar com Github
            </LoginCard>
          </LoginModalContent>
        </LoginModalContainer>
      </div>
    </ModalContainer>
  )
}
