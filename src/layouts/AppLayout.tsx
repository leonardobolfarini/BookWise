import { usePathname } from 'next/navigation'

import { Sidebar } from '@/src/components/Sidebar'

import { AppLayoutStyles } from './AppLayoutStyles'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'

  return (
    <AppLayoutStyles>
      {!isLoginPage ? <Sidebar /> : null}
      <main>{children}</main>
    </AppLayoutStyles>
  )
}
