import { CaretRight, ChartLineUp } from "@phosphor-icons/react/dist/ssr";
import { HomeContainer, HomeHeader, PopularBooks, PopularBooksHeader, RecentReviews } from "./styles";
import { ReviewBox } from "./components/ReviewBox";
import { BookCard} from "@/src/components/BookCard";

export default function Home(){
    return (
        <>
            <HomeHeader>
                <ChartLineUp height={32} width={32} />
                <h1>Início</h1>
            </HomeHeader>
            <HomeContainer>
                <RecentReviews>
                    <h2>Avaliações mais recentes</h2>
                    <ReviewBox />
                    <ReviewBox />
                    <ReviewBox />
                </RecentReviews>

                <PopularBooks>
                    <PopularBooksHeader>
                        <h2>Livros populares</h2>
                        <a href="/search">
                            Ver todos
                            <CaretRight />
                        </a>
                    </PopularBooksHeader>
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </PopularBooks>
            </HomeContainer>
        </>
    )
}