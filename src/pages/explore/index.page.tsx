import { Binoculars } from "@phosphor-icons/react/dist/ssr";
import { ExploreContainer, ExploreContent, ExploreFilters, ExploreHeader } from "./styles";
import { SearchBar } from "@/src/components/SearchBar";
import { TagBox } from "./components/TagBox/index";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/src/lib/axios";
import { BookCard } from "@/src/components/BookCard";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

interface CategoryProps {
    id: string
    name: string
}

interface BookProps {
    id: string
    title: string
    author: string
    averageRating: number
    cover_url: string
    summary: string | null
    total_pages: number
}

export default function Default() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const categoriesForFilter = searchParams.get('categoriesForFilter') || ''

    const { data: categories } = useQuery<CategoryProps[]>({
        queryKey: ['categories'],
        queryFn: async () => {
            const response = await api.get('/books/get-categories')
            return response.data
        }
    })

    const { data: books} = useQuery<BookProps[]>({
        queryKey: ['books', categoriesForFilter],
        queryFn: async () => {
            const response = await api.get('/books', {
                params: {
                    categoriesForFilter
                }
            })
            return response.data
        }
    })

    function handleAddFilter(filter: string) {
        if (categoriesForFilter === "") {
            router.push(`/explore?categoriesForFilter=${filter}`)
            return
        }

        if (categoriesForFilter.includes(filter)) {
            const newCategoriesForFilter = categoriesForFilter.replace(filter, '').trim()
            router.push(`/explore?categoriesForFilter=${newCategoriesForFilter}`)
            return
        }

        const newCategoriesForFilter = `${categoriesForFilter} ${filter}`.trim()
        router.push(`/explore?categoriesForFilter=${newCategoriesForFilter}`)
    }

    function handleRemoveFilter() {
        router.push(`/explore`)
    }

    return (
        <ExploreContainer>
            <ExploreHeader>
                <header>
                    <Binoculars width={32} height={32} />
                    <h1>Explorar</h1>
                </header>
                <div>
                    <SearchBar placeholder="Buscar livro ou autor" />
                </div>
            </ExploreHeader>
            <ExploreFilters>
                <TagBox 
                    checked={categoriesForFilter === ""}
                    onClick={() => handleRemoveFilter()}
                >Tudo</TagBox>
                {categories?.map((category) => {
                    return (
                        <TagBox
                            key={category.id}
                            checked={categoriesForFilter?.includes(category.id)}
                            onClick={() => handleAddFilter(category.id)}
                        >
                            {category.name}
                        </TagBox>
                    )
                })}
            </ExploreFilters>
            <ExploreContent>
                {books?.map((book) => {
                    return (
                        <div key={book.id}>
                            <BookCard
                                title={book.title}
                                author={book.author}
                                averageRating={book.averageRating}
                                cover_url={book.cover_url}
                                size="md"
                            />
                        </div>
                    )
                })}
            </ExploreContent>
        </ExploreContainer>
    )
}