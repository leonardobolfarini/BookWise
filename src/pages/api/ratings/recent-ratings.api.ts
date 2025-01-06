import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/src/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const recentRatings = await prisma.rating.findMany({
    take: 4,
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: {
        select: {
          title: true,
          author: true,
          cover_url: true,
          summary: true,
        },
      },
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  })

  return res.status(200).json(recentRatings)
}
