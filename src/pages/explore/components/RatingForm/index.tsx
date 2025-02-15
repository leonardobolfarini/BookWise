import { zodResolver } from '@hookform/resolvers/zod'
import { Check, X } from '@phosphor-icons/react/dist/ssr'
import { useMutation } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Avatar } from '@/src/components/Avatar'
import { RatingStars } from '@/src/components/RatingStars'
import { api } from '@/src/lib/axios'
import { queryClient } from '@/src/lib/react-query'

import {
  RatingFormContainer,
  RatingFormError,
  RatingFormFooter,
  RatingFormFooterButton,
  RatingFormHeader,
  RatingFormProfile,
  RatingFormTextarea,
} from './styles'

interface BookProps {
  id: string
  title: string
  author: string
  averageRating: number
  cover_url: string
  summary: string | null
  total_pages: number
  Rating: {
    rate: number
    description: string
    created_at: string
    user: {
      id: string
      name: string
      image: string
    }
  }[]
}

const ratingFormSchema = z.object({
  description: z
    .string()
    .min(3, { message: 'A descrição deve ter pelo menos 3 caracteres' })
    .max(450, { message: 'A descrição deve ter no máximo 450 caracteres' }),
  rate: z
    .number()
    .min(0, { message: 'A avaliação deve ser pelo menos 0' })
    .max(5, { message: 'A avaliação deve ser no máximo 5' })
    .default(0),
})

type RatingFormData = z.infer<typeof ratingFormSchema>

interface RatingFormProps {
  bookId: string
  userId: string
  onClose: () => void
}

export function RatingForm({ bookId, userId, onClose }: RatingFormProps) {
  const { data: session } = useSession()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RatingFormData>({
    resolver: zodResolver(ratingFormSchema),
  })

  const { mutateAsync: sendReview, isPending } = useMutation({
    mutationKey: ['send-review'],
    mutationFn: async (data: RatingFormData) => {
      await api.post('/books/send-review', {
        bookId,
        userId,
        rate: data.rate,
        description: data.description,
      })
    },
    onMutate: async (newData: RatingFormData) => {
      console.log(newData)
      await queryClient.cancelQueries({ queryKey: ['books'] })

      const previousBook = queryClient.getQueryData(['books'])
      const newReview = {
        rate: newData.rate,
        description: newData.description,
        created_at: new Date().toISOString(),
        user: {
          id: userId,
          name: session?.user?.name || '',
          image: session?.user?.image || '',
        },
      }

      queryClient.setQueryData(['books'], (oldBook: BookProps | undefined) => {
        if (!oldBook) return undefined

        return {
          ...oldBook,
          Rating: [newReview, ...oldBook.Rating],
        }
      })

      return { previousBook }
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(['books'], context?.previousBook)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] })
    },
  })

  function handleRatingChange(newRating: number) {
    setValue('rate', newRating, {
      shouldValidate: true,
    })
  }

  async function handleSubmitRating(data: RatingFormData) {
    try {
      await sendReview(data)
      onClose()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <RatingFormContainer onSubmit={handleSubmit(handleSubmitRating)}>
      <RatingFormHeader>
        <RatingFormProfile>
          <Avatar
            src={session?.user?.image || ''}
            alt={session?.user?.name || ''}
            size="sm"
            userId={userId}
            hasBorder
          />
          <h3>{session?.user?.name}</h3>
        </RatingFormProfile>
        <RatingStars
          ratingValue={0}
          canChangeRating
          size="lg"
          onRatingChange={handleRatingChange}
        />
      </RatingFormHeader>
      <RatingFormTextarea
        {...register('description')}
        placeholder="Escreva sua avaliação"
      />
      <div>
        {errors.rate && (
          <RatingFormError>{errors.rate.message}</RatingFormError>
        )}
        {errors.description && (
          <RatingFormError>{errors.description.message}</RatingFormError>
        )}
      </div>
      <RatingFormFooter>
        <RatingFormFooterButton
          aria-label="Cancelar"
          variant="cancel"
          type="button"
          onClick={onClose}
        >
          <X width={24} height={24} />
        </RatingFormFooterButton>
        <RatingFormFooterButton
          aria-label="Enviar"
          variant="submit"
          type="submit"
          disabled={isPending}
        >
          <Check width={24} height={24} />
        </RatingFormFooterButton>
      </RatingFormFooter>
    </RatingFormContainer>
  )
}
