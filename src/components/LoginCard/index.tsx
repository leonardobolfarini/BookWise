import { IconProps } from '@phosphor-icons/react'
import Image, { StaticImageData } from 'next/image'

import { LoginCardContainer, LoginCardContent } from './styles'

interface LoginCardProps extends React.HTMLProps<HTMLAnchorElement> {
  children: React.ReactNode
  ImageLogo: string | StaticImageData | React.ComponentType<IconProps>
}

export function LoginCard({ children, ImageLogo, ...rest }: LoginCardProps) {
  return (
    <LoginCardContainer {...rest}>
      {typeof ImageLogo === 'string' || 'src' in ImageLogo ? (
        <Image src={ImageLogo} alt="" width={32} height={32} />
      ) : (
        <ImageLogo size={32} />
      )}
      <LoginCardContent>{children}</LoginCardContent>
    </LoginCardContainer>
  )
}
