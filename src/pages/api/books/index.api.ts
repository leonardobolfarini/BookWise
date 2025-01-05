import { prisma } from "@/src/lib/prisma";
import { averageRating, booksWithAverageRating } from "@/src/utils/avarage-rating-books";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { categoriesForFilter } = req.query

    if (categoriesForFilter) {
        const books = await prisma.book.findMany({
            where: {
                categories: {
                    some: {
                        category_id: {
                            in: typeof categoriesForFilter === 'string' 
                                ? categoriesForFilter.split(' ')
                                : categoriesForFilter
                        }
                    }
                }
            },
            select: {
                id: true,
                title: true,
                author: true,
                summary: true,
                cover_url: true,
                total_pages: true,
                Rating: true
            }
        })

        const averageRatings = averageRating(books)
        const booksWithAverageRatings = booksWithAverageRating(books, averageRatings)

        return res.status(200).json(booksWithAverageRatings)
    }

    const books = await prisma.book.findMany({
        select: {
            id: true,
            title: true,
            author: true,
            summary: true,
            cover_url: true,
        total_pages: true,
        Rating: true
        }
    })

    const averageRatings = averageRating(books)
    const booksWithAverageRatings = booksWithAverageRating(books, averageRatings)

    return res.status(200).json(booksWithAverageRatings)
}