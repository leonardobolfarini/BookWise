import { CategoryProps } from "./constants/categories"
import { BookProps } from "./constants/books"
import { RatingProps } from "./constants/ratings"
import { UserProps } from "./constants/users"

/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require('@prisma/client')
const { books } = require('./constants/books')
const { categories } = require('./constants/categories')
const { ratings } = require('./constants/ratings')
const { users } = require('./constants/users')

const prisma = new PrismaClient()

async function main() {
  await prisma.rating.deleteMany()
  await prisma.user.deleteMany()
  await prisma.categoriesOnBooks.deleteMany()
  await prisma.category.deleteMany()
  await prisma.book.deleteMany()

  const usersSeed = users.map((user: UserProps) => {
    return prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        image: user.avatar_url,
      },
    })
  })

  const categoriesSeed = categories.map((category: CategoryProps) => {
    return prisma.category.create({
      data: {
        name: category.name,
        id: category.id,
      },
    })
  })

  const booksSeed = books.map((book: BookProps) => {
    return prisma.book.create({
      data: {
        id: book.id,
        title: book.name,
        author: book.author,
        summary: book.summary,
        cover_url: book.cover_url,
        total_pages: book.total_pages,
        categories: {
          create: [
            ...book.categories.map((category: CategoryProps) => {
              return {
                category: {
                  connect: {
                    id: category.id,
                  },
                },
              }
            }),
          ],
        },
      },
    })
  })

  const ratingsSeed = ratings.map((rating: RatingProps) => {
    return prisma.rating.create({
      data: {
        id: rating.id,
        rate: rating.rate,
        description: rating.description,
        user: {
          connect: { id: rating.user_id },
        },
        book: {
          connect: { id: rating.book_id },
        },
      },
    })
  })

  await prisma.$transaction([
    ...categoriesSeed,
    ...booksSeed,
    ...usersSeed,
    ...ratingsSeed,
  ])
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })