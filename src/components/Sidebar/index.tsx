import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from '@phosphor-icons/react/dist/ssr'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'

import Logo from '@/src/assets/Logo.svg'
import { api } from '@/src/lib/axios'

import { Avatar } from '../Avatar'
import {
  NavLink,
  SideBarContainer,
  SideBarFooter,
  SideBarHeader,
  SideBarNav,
} from './styles'

interface User {
  id: string
  name: string | null
  email: null | string
  emailVerified: null | Date
  image: string
}

export function Sidebar() {
  const currentPage = usePathname()

  const { data: user } = useQuery<User>({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await api.get('/users')
      return response.data.user
    },
    retry: 2,
  })

  const isAuthenticated = !!user

  async function handleSignOut() {
    await signOut()
  }

  return (
    <SideBarContainer>
      <SideBarHeader>
        <Image src={Logo} alt="BookWise Logo" width={128} height={32} />
      </SideBarHeader>
      <SideBarNav>
        <NavLink href="/" data-active={currentPage === '/'}>
          <ChartLineUp width={24} height={24} />
          Início
        </NavLink>
        <NavLink href="/explore" data-active={currentPage === '/explore'}>
          <Binoculars width={24} height={24} />
          Explorar
        </NavLink>
        {isAuthenticated && (
          <NavLink
            href={`/users/${user?.id}`}
            data-active={currentPage === `/users/${user?.id}`}
          >
            <User width={24} height={24} />
            Perfil
          </NavLink>
        )}
      </SideBarNav>
      <SideBarFooter authenticated={isAuthenticated}>
        {!isAuthenticated ? (
          <a href="/login">
            Fazer login
            <SignIn width={24} height={24} />
          </a>
        ) : (
          <a>
            <Avatar
              src={user.image}
              alt={user.name || ''}
              size="sm"
              hasBorder
            />
            {user?.name?.split(' ')[0]}
            <SignOut width={24} height={24} onClick={handleSignOut} />
          </a>
        )}
      </SideBarFooter>
    </SideBarContainer>
  )
}
