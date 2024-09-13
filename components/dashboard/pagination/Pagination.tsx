'use client'

import { Button } from '@/components/ui/button'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  count: number
}

export default function Pagination({ count }: Props) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const page = searchParams.get('page') || "1"

  const params = new URLSearchParams(searchParams)
  const ITEM_PER_PAGE = 1

  const hasPrev = ITEM_PER_PAGE * (Number(page) - 1) > 0
  const hasNext = ITEM_PER_PAGE * (Number(page) - 1) + ITEM_PER_PAGE < count

  const handleChangePage = (type: string) => {
    type === 'prev' ? params.set('page', (Number(page) - 1).toString()) : params.set('page', (Number(page) + 1).toString())
    replace(`${pathname}?${params}`)
  }

  return (
    <div className='p-2.5 flex justify-between'>
        <Button onClick={() => handleChangePage('prev')} className='h-6 w-16 disabled:cursor-not-allowed bg-zinc-300 hover:bg-zinc-400 text-zinc-800' disabled={!hasPrev}>Previous</Button>
        <Button onClick={() => handleChangePage('next')} className='h-6 w-16 disabled:cursor-not-allowed bg-zinc-300 hover:bg-zinc-400 text-zinc-800' disabled={!hasNext}>Next</Button>
    </div>
  )
}