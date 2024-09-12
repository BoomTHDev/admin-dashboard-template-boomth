import Navbar from '@/components/dashboard/navbar/Navbar'
import Sidebar from '@/components/dashboard/sidebar/Sidebar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div>
        <div>
            <Sidebar />
        </div>
        <div>
            <Navbar />
            {children}
        </div>
    </div>
  )
}