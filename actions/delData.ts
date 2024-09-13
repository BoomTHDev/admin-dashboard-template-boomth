'use server'

import db from '@/db/db'
import { revalidatePath } from 'next/cache'

export async function delUser(formData: FormData) {
    const id = formData.get('id') as string
    try {
        await db.user.delete({
            where: {
                id
            }
        })
    } catch (error: any) {
        console.log(error)
        throw new Error('Failed to user product!')
    }
    revalidatePath('/dashboard/users')
}

export async function delProduct(formData: FormData) {
    const id = formData.get('id') as string
    try {
        await db.product.delete({
            where: {
                id
            }
        })
    } catch (error: any) {
        console.log(error)
        throw new Error('Failed to delete product!')
    }
    revalidatePath('/dashboard/products')
}