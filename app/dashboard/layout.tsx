import Navbar from '@/components/dashboard/navbar/Navbar'
import Sidebar from '@/components/dashboard/sidebar/Sidebar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className=''>
        <div className=''>
            <Sidebar />
        </div>
        <div className=''>
            <Navbar />
            {children}
        </div>
    </div>
  )
}