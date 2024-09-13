'use server'

import db from "@/db/db"

export async function getUsers(q: string) {
    try {
        const users = await db.user.findMany({
            where: {
                username: {
                    contains: q,
                    mode: 'insensitive'
                }
            }
        })
        return users
    } catch (error: any) {
        console.log(error)
        throw new Error('failed to fetch')
    }
}