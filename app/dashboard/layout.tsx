import Navbar from '@/components/dashboard/navbar/Navbar'
import Sidebar from '@/components/dashboard/sidebar/Sidebar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className='flex'>

        <div className='flex-1 bg-[#182237] p-5 min-h-screen'>
            <Sidebar />
        </div>

        <div className='flex-4 p-5'>
            <Navbar />
            {children}
        </div>

    </div>
  )
}