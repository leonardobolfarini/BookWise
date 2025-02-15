import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/src/lib/prisma'
import {
  averageRating,
  booksWithAverageRating,
} from '@/src/utils/avarage-rating-books'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { categoriesForFilter } = req.query
  const { bookOrAuthorName } = req.query

  if (categoriesForFilter || bookOrAuthorName) {
    const books = await prisma.book.findMany({
      where: {
        AND: [
          categoriesForFilter
            ? {
                categories: {
                  some: {
                    category_id: {
                      in:
                        typeof categoriesForFilter === 'string'
                          ? categoriesForFilter.split(' ')
                          : categoriesForFilter,
                    },
                  },
                },
              }
            : {},
          bookOrAuthorName
            ? {
                OR: [
                  {
                    title: {
                      contains:
                        typeof bookOrAuthorName === 'string'
                          ? bookOrAuthorName
                          : undefined,
                    },
                  },
                  {
                    author: {
                      contains:
                        typeof bookOrAuthorName === 'string'
                          ? bookOrAuthorName
                          : undefined,
                    },
                  },
                ],
              }
            : {},
        ],
      },
      select: {
        id: true,
        title: true,
        author: true,
        summary: true,
        cover_url: true,
        total_pages: true,
        categories: true,
        Rating: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
          },
        },
      },
    })

    const averageRatings = averageRating(books)
    const booksWithAverageRatings = booksWithAverageRating(
      books,
      averageRatings,
    )

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
      categories: true,
      Rating: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      },
    },
  })

  const averageRatings = averageRating(books)
  const booksWithAverageRatings = booksWithAverageRating(books, averageRatings)

  return res.status(200).json(booksWithAverageRatings)
}
