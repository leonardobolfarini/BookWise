import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

import { prisma } from '@/src/lib/prisma'

import { authOptions } from '../auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user?.id,
    },
  })

  return res.json({ user })
}
