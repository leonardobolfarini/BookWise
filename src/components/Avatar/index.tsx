import Image, { ImageProps } from 'next/image'

import { AvatarContainer } from './styles'

interface AvatarProps extends ImageProps {
  size: 'sm' | 'md' | 'lg'
  hasBorder?: boolean
}

export function Avatar({
  width = 40,
  height = 40,
  hasBorder = false,
  size = 'md',
  alt = '',
  ...props
}: AvatarProps) {
  return (
    <AvatarContainer hasBorder={hasBorder} size={size}>
      <Image {...props} alt={alt} width={width} height={height} />
    </AvatarContainer>
  )
}
