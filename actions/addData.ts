'use server'

import db from "@/db/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import bcrypt from 'bcrypt'

export async function addUser(formData: FormData) {
    const username = formData.get('username') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const phone = formData.get('phone') as string
    const address = formData.get('address') as string
    const isAdmin = formData.get('isAdmin') as string
    const isActive = formData.get('isActive') as string

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    try {
        await db.user.create({
            data: {
                username,
                email,
                password: hash,
                phone,
                address,
                isAdmin: isAdmin === 'true' ? true : false,
                isActive: isActive === 'true' ? true : false
            }
        })
    } catch (error: any) {
        console.log(error)
        throw new Error('Failed to create user')
    }

    revalidatePath('/dashboard/users')
    redirect('/dashboard/users')
}

export async function addProduct(formData: FormData) {
    const title = formData.get('title') as string
    const desc = formData.get('desc') as string
    const price = formData.get('price') as string
    const stock = formData.get('stock') as string
    const color = formData.get('color') as string
    const size = formData.get('size') as string

    try {
        await db.product.create({
            data: {
                title,
                desc,
                price: Number(price),
                stock: Number(stock),
                color,
                size
            }
        })
    } catch (error: any) {
        console.log(error)
        throw new Error('Failed to create product')
    }

    revalidatePath('/dashboard/products')
    redirect('/dashboard/products')
}