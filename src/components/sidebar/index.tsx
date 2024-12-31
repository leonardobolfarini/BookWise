import Image from "next/image";
import Logo from '@/src/assets/Logo.svg'
import { SideBarContainer, SideBarHeader, SideBarFooter, SideBarNav, NavLink } from "./styles";
import { Binoculars, ChartLineUp, SignIn } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";

export function Sidebar(){
    const currentPage = usePathname()
    
    return (
        <SideBarContainer>
            <SideBarHeader>
                <Image src={Logo} alt="BookWise Logo" width={128} height={32} />
            </SideBarHeader>
            <SideBarNav>
                <NavLink href="/" data-active={currentPage === '/'}>
                    <ChartLineUp  width={24} height={24} />
                    Início
                </NavLink>
                <NavLink href="/search" data-active={currentPage === '/search'}>
                    <Binoculars width={24} height={24} />
                    Explorar
                </NavLink>
            </SideBarNav>
            <SideBarFooter>
                <a href="/login">
                    Fazer login
                    <SignIn width={24} height={24} />
                </a>
            </SideBarFooter>
        </SideBarContainer>
    )
}