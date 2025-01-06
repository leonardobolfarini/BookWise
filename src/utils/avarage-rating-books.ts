interface BookProps {
  id: string
  Rating: {
    rate: number
  }[]
}

export function averageRating(books: BookProps[]) {
  return books.map((book) => {
    const ratings = book.Rating.map((rating) => rating.rate)
    if (ratings.length === 0) return { id: book.id, average: 0 }

    const sum = ratings.reduce(
      (currentValue, nextValue) => currentValue + nextValue,
      0,
    )

    const average = Math.floor(sum / ratings.length)

    return {
      id: book.id,
      average,
    }
  })
}

export function booksWithAverageRating(
  books: BookProps[],
  averageRating: { id: string; average: number }[],
) {
  return books.map((book) => {
    const average = averageRating.find(
      (average) => average.id === book.id,
    )?.average
    return {
      ...book,
      averageRating: average,
    }
  })
}
