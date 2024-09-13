'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
    item: {
      icon: JSX.Element;
      title: string;
      path: string;
    }
}

export default function SidebarLink({ item }: Props) {
  const pathname = usePathname()

  return (
    <Link href={item.path} className={`p-5 flex items-center gap-2 hover:bg-[#2e374a] mt-1 mb-0 rounded-lg ${pathname === item.path && 'bg-[#2e374a]'}`}>
        {item.icon}
        {item.title}
    </Link>
  )
}