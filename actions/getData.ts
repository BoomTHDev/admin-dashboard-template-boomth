'use server'

import db from "@/db/db"

export async function getUsers(q: string, page: string) {

    const ITEM_PER_PAGE = 10

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
        return { error: error.message , success: false }
    }
}

export async function getUser(id: string) {
    try {
        const user = await db.user.findUnique({
            where: {
                id
            }
        })
        return { user, success: true }
    } catch(error: any) {
        console.log(error)
        return { error: error.message , success: false }
    }
}

export async function getProducts(q: string, page: string) {

    const ITEM_PER_PAGE = 10

    try {
        const count = await db.product.count()
        const products = await db.product.findMany({
            where: {
                title: {
                    contains: q,
                    mode: 'insensitive'
                }
            },
            take: ITEM_PER_PAGE,
            skip: ITEM_PER_PAGE * (Number(page) - 1)
        })
        return { count, products }
    } catch (error: any) {
        console.log(error)
        return { error: error.message , success: false }
    }
}

export async function getProduct(id: string) {
    try {
        const product = await db.product.findUnique({
            where: {
                id
            }
        })
        return { product, success: true }
    } catch(error: any) {
        console.log(error)
        return { error: error.message , success: false }
    }
}