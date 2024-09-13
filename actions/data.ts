'use server'

import db from "@/db/db"

export async function getUsers(q: string, page: string) {

    const ITEM_PER_PAGE = 1

    try {
        const count = await db.user.count()
        const users = await db.user.findMany({
            where: {
                username: {
                    contains: q,
                    mode: 'insensitive'
                }
            },
            take: ITEM_PER_PAGE,
            skip: ITEM_PER_PAGE * (Number(page) - 1)
        })
        return { count, users }
    } catch (error: any) {
        console.log(error)
        throw new Error('failed to fetch')
    }
}