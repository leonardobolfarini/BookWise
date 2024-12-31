import { ChartLineUp } from "@phosphor-icons/react/dist/ssr";
import { HomeContainer, HomeHeader } from "./styles";

export default function Home(){
    return (
        <>
            <HomeHeader>
                <ChartLineUp height={32} width={32} />
                <h1>Início</h1>
            </HomeHeader>
            <HomeContainer>
            </HomeContainer>
        </>
    )
}