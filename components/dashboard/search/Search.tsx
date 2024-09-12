import React from 'react'
import { MdSearch } from 'react-icons/md'
import { Input } from '@/components/ui/input'

type Props = {
    placeholder: string
}

export default function Search({ placeholder }: Props) {
  return (
    <div className='flex items-center gap-2.5 bg-[#2e374a] p-2.5 rounded-md w-max'>
        <MdSearch />
        <Input type='text' placeholder={placeholder} className='border-none h-3 text-white' />
    </div>
  )
}