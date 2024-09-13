'use client'

import { Input } from '@/components/ui/input'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

export default function Navbar() {

  const pathname = usePathname()

  return (
    <div className='flex justify-between items-center p-4 rounded-lg bg-[#182237]'>

      <div className='text-[#b7bac1] font-bold capitalize'>{pathname.split('/').pop()}</div>

      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-2.5 bg-[#2e374a] p-3 rounded-lg'>
          <MdSearch size={22} />
          <Input type='text' placeholder='Search...' className='border-none h-3 text-white' />
        </div>
        <div className='flex gap-5'>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>

    </div>
  )
}