import Search from '@/components/dashboard/search/Search'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/components/dashboard/pagination/Pagination'
import { getProducts } from '@/actions/getData'
import { delProduct } from '@/actions/delData'
import { formatCurrency, formatNumber } from '@/lib/formatter'

type Props = {
  searchParams: {
    q: string;
    page: string;
  }
}

export default async function ProductsPage({ searchParams }: Props) {
  const q = searchParams?.q || ""
  const page = searchParams?.page || "1"
  const { count, products } = await getProducts(q, page)

  return (
    <div className='bg-[#182237] p-5 rounded-md mt-5'>

      <div className='flex items-center justify-between'>
        <Search placeholder='Search for a product...' />
        <Link href='/dashboard/products/add'>
          <Button className='bg-[#5d57c9] hover:bg-[#3e3b8b] text-white'>Add New</Button>
        </Link>
      </div>

      <table className='w-full'>
        <thead>
          <tr>
            <td className='p-2.5'>Title</td>
            <td className='p-2.5'>Description</td>
            <td className='p-2.5'>Price</td>
            <td className='p-2.5'>Created At</td>
            <td className='p-2.5'>Stock</td>
            <td className='p-2.5'>Action</td>
          </tr>
        </thead>
        <tbody>
          {products && products.map((product, index) => (
            <tr key={index}>
              <td className='p-2.5'>
                <div className='flex gap-2.5 items-center'>
                  <Image src={product.img || '/noproduct.jpg'} alt='' width={40} height={40} className='object-cover rounded-full' />
                  {product.title}
                </div>
              </td>
              <td className='p-2.5'>{product.desc}</td>
              <td className='p-2.5'>{formatCurrency(product.price)}</td>
              <td className='p-2.5'>{product.createdAt.toString().slice(4, 16)}</td>
              <td className='p-2.5'>{formatNumber(product.stock)}</td>
              <td className='p-2.5'>
                <div className='flex items-center gap-2.5'>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <Button className="h-6 w-12 rounded-md bg-teal-600 hover:bg-teal-800">View</Button>
                  </Link>
                  <form action={delProduct}>
                    <Input type='hidden' name='id' value={product.id} />
                    <Button className="h-6 w-12 rounded-md bg-red-600 hover:bg-red-800">Delete</Button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count || 0} />
    </div>
  )
}