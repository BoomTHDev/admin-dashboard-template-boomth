import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

export default function Pagination({}: Props) {
  return (
    <div className='p-2.5 flex justify-between'>
        <Button className='h-6 w-16 disabled:cursor-not-allowed bg-zinc-300 hover:bg-zinc-400 text-zinc-800' disabled>Previous</Button>
        <Button className='h-6 w-16 disabled:cursor-not-allowed bg-zinc-300 hover:bg-zinc-400 text-zinc-800'>Next</Button>
    </div>
  )
}