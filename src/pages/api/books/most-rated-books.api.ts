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

  const mostRatedBooks = await prisma.book.findMany({
    take: 4,
    orderBy: {
      Rating: {
        _count: 'desc',
      },
    },
    include: {
      Rating: true,
    },
  })

  const averageRatings = averageRating(mostRatedBooks)
  const booksWithAverageRatings = booksWithAverageRating(
    mostRatedBooks,
    averageRatings,
  )

  return res.status(200).json(booksWithAverageRatings)
}
