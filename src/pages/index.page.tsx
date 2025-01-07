import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'

import { prisma } from '../lib/prisma'
import { authOptions } from './api/auth/[...nextauth].api'

export { default } from './home'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions)

  if (!session?.user.id) {
    return {
      props: {
        lastReview: null,
      },
    }
  }

  const lastReview = await prisma.rating.findFirst({
    where: {
      user_id: session.user.id,
    },
    include: {
      book: true,
      user: true,
    },
    orderBy: {
      created_at: 'desc',
    },
  })

  return {
    props: {
      lastReview: lastReview
        ? {
            ...JSON.parse(JSON.stringify(lastReview)),
            created_at: lastReview.created_at.toISOString(),
          }
        : null,
    },
  }
}
