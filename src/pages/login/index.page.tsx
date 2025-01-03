import LoginBannerImage from '@/src/assets/LoginBanner.png'
import Image from 'next/image'
import { LoginCard } from './components/LoginCard'
import { GithubLogo, GoogleLogo, RocketLaunch } from '@phosphor-icons/react/dist/ssr'
import { LoginContainer, LoginOptionsContainer, LoginBannerContainer } from './styles'
import { useRouter } from 'next/router'

export default function Login(){
    const router = useRouter()
    const isNavigating = router.isFallback

    return (
        <LoginContainer>
            <LoginBannerContainer>
                <Image src={LoginBannerImage} alt="Login Banner" width={598} height={912} />
            </LoginBannerContainer>
            <LoginOptionsContainer>
                <header>
                    <h1>Boas vindas!</h1>
                    <p>Faça seu login ou acesse como visitante.</p>
                </header>
                <LoginCard ImageLogo={GoogleLogo} href='#' disabled={isNavigating}>Entrar com Google</LoginCard>
                <LoginCard ImageLogo={GithubLogo} href='#' disabled={isNavigating}>Entrar com Github</LoginCard>
                <LoginCard ImageLogo={RocketLaunch} href='/' disabled={isNavigating}>Acessar como visitante</LoginCard>
            </LoginOptionsContainer>
        </LoginContainer>
    )
}