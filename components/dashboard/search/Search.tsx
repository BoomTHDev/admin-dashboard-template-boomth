'use client'

import React from 'react'
import { MdSearch } from 'react-icons/md'
import { Input } from '@/components/ui/input'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

type Props = {
    placeholder: string
}

export default function Search({ placeholder }: Props) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)

    params.set("page", "1")
    
    if (event.target.value) {
      event.target.value.length > 2 && params.set('q', event.target.value)
    } else {
      params.delete('q')
    }
    replace(`${pathname}?${params}`)
  }, 300)

  return (
    <div className='flex items-center gap-2.5 bg-[#2e374a] p-2.5 rounded-md w-max'>
        <MdSearch />
        <Input type='text' placeholder={placeholder} className='border-none h-3 text-white' onChange={handleSearch} />
    </div>
  )
}