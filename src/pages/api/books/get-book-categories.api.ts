import { prisma } from "@/src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { categories_id } = req.query

    const categoriesIds = (categories_id as string).split(' ')

    const categories = await prisma.category.findMany({
        where: {
            id: {
                in: categoriesIds
            }
        },
        select: {
            name: true
        }
    })

    return res.status(200).json(categories)
}