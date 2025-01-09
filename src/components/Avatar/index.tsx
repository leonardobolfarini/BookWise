import Image, { ImageProps } from 'next/image'
import { useRouter } from 'next/router'

import { AvatarContainer } from './styles'

interface AvatarProps extends ImageProps {
  userId?: string
  size: 'sm' | 'md' | 'lg'
  hasBorder?: boolean
}

export function Avatar({
  userId,
  width = 40,
  height = 40,
  hasBorder = false,
  size = 'md',
  alt = '',
  ...props
}: AvatarProps) {
  const router = useRouter()

  function handleGoToUserProfile() {
    if (!userId) return

    router.push(`/users/${userId}`)
  }

  return (
    <AvatarContainer
      hasBorder={hasBorder}
      size={size}
      onClick={handleGoToUserProfile}
    >
      <Image {...props} alt={alt} width={width} height={height} />
    </AvatarContainer>
  )
}
