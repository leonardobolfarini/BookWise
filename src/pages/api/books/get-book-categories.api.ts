import { prisma } from "@/src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
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