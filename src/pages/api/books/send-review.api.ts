import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/src/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { bookId, rate, description, userId } = req.body

  await prisma.rating.create({
    data: {
      book_id: bookId,
      user_id: userId,
      rate,
      description,
    },
  })

  return res.status(201).end()
}
