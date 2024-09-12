import React from 'react'
import { SidebarItems } from './SidebarItems'
import SidebarLinks from './SidebarLinks'
import Image from 'next/image'

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <div className='sticky top-10'>

      <div className='flex items-center gap-5 mb-5'>
        <Image src='/noavatar.png' alt='' width={50} height={50} className='rounded-full object-cover' />
        <div className='flex flex-col'>
          <span className='font-medium'>BoomTH</span>
          <span className='text-xs text-[#b7bac1]'>Administrator</span>
        </div>
      </div>

      <ul>
        {SidebarItems.map((item, index) => (
          <li key={index}>
            <span className='text-[#b7bac1] font-bold text-sm mt-2.5 mb-0'>{item.title}</span>
            {item.list.map((items, index) => (
              <SidebarLinks key={index} item={items} />
            ))}
          </li>
        ))}
      </ul>

    </div>
  )
}