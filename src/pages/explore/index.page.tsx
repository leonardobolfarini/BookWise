import { Binoculars, X } from "@phosphor-icons/react/dist/ssr";
import { DrawerComponent, DrawerContent, DrawerContentCloseButton, DrawerContentHeader, DrawerContentReviews, ExploreContainer, ExploreContent, ExploreFilters, ExploreHeader } from "./styles";
import { SearchBar } from "@/src/components/SearchBar";
import { TagBox } from "./components/TagBox/index";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/src/lib/axios";
import { BookCard } from "@/src/components/BookCard";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { BookInfosCard } from "./components/BookInfosCard";
import { ReviewCard } from "./components/ReviewCard";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";

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
    categories: {
        book_id: string;
        category_id: string;
    }[];
    Rating: {
        rate: number;
        description: string;
        created_at: string;
        user: {
            id: string;
            name: string;
            image: string;
        };
    }[];
}

const commentFormSchema = z.object({
    description: z.string()
        .min(3, { message: 'A descrição deve ter pelo menos 3 caracteres' })
        .nullable(),
    rate: z.number()
        .min(1, { message: 'A avaliação deve ser pelo menos 1' })
        .max(5, { message: 'A avaliação deve ser no máximo 5' })
        .nullable(),
})

type CommentFormData = z.infer<typeof commentFormSchema>

export default function Default() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const { data: session } = useSession()
    const isAuthenticated = !!session

    const [openBookId, setOpenBookId] = useState<string | null>(null)
    const [openCommentForm, setOpenCommentForm] = useState(false)

    const categoriesForFilter = searchParams.get('categoriesForFilter') || ''
    const bookOrAuthorName = searchParams.get('bookOrAuthorName') || ''

    const { data: categories } = useQuery<CategoryProps[]>({
        queryKey: ['categories'],
        queryFn: async () => {
            const response = await api.get('/books/get-categories')
            return response.data
        }
    })

    const { data: books} = useQuery<BookProps[]>({
        queryKey: ['books', categoriesForFilter, bookOrAuthorName],
        queryFn: async () => {
            const response = await api.get('/books', {
                params: {
                    categoriesForFilter,
                    bookOrAuthorName
                }
            })
            return response.data
        }
    })

    const { register, handleSubmit, formState: { errors } } = useForm<CommentFormData>({
        resolver: zodResolver(commentFormSchema),
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

    function handleSearch(value: string) {
        router.push(`/explore?bookOrAuthorName=${value}`)
    }

    function handleOpenCloseDrawer(bookId: string | null) {
        setOpenBookId(bookId)
    }

    function handleAddComment(bookId: string) {
        setOpenCommentForm(true)
    }

    return (
        <ExploreContainer>
            <ExploreHeader>
                <header>
                    <Binoculars width={32} height={32} />
                    <h1>Explorar</h1>
                </header>
                <div>
                    <SearchBar
                        placeholder="Buscar livro ou autor"
                        onSearch={handleSearch}
                    />
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
                        <div key={book.id} onClick={() => handleOpenCloseDrawer(book.id)}>
                            <BookCard
                                title={book.title}
                                author={book.author}
                                averageRating={book.averageRating}
                                cover_url={book.cover_url}
                                size="md"
                            />
                            <DrawerComponent
                                anchor="right"
                                open={openBookId === book.id}
                                onClose={() => handleOpenCloseDrawer(null)}
                                slotProps={{
                                    backdrop: {
                                        sx: {
                                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                        }
                                    }
                                }}
                            >   
                                <DrawerContent>
                                    <DrawerContentHeader>
                                        <DrawerContentCloseButton>
                                            <button type="button" onClick={(e) => {
                                                e.stopPropagation()
                                                handleOpenCloseDrawer(null)
                                            }}>
                                                <X width={24} height={24} />
                                            </button>
                                        </DrawerContentCloseButton>
                                        <BookInfosCard
                                            id={book.id}
                                            title={book.title}
                                            author={book.author}
                                            averageRating={book.averageRating}
                                            categories={book.categories}
                                            pages={book.total_pages}
                                            cover_url={book.cover_url}
                                            Rating={book.Rating}
                                        />
                                    </DrawerContentHeader>
                                    <DrawerContentReviews>
                                            <header>
                                                <h2>Avaliações</h2>
                                                <span>Avaliar</span>
                                            </header>
                                            {book.Rating.map((review) => {
                                                return (
                                                    <ReviewCard 
                                                        key={review.user.id}
                                                        user={review.user}
                                                        description={review.description}
                                                        created_at={review.created_at}
                                                        rate={review.rate}
                                                    />
                                                )
                                            })}
                                    </DrawerContentReviews>     
                                </DrawerContent>
                            </DrawerComponent>
                        </div>
                    )
                })}
            </ExploreContent>
        </ExploreContainer>
    )
}