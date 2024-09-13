import Search from '@/components/dashboard/search/Search'
import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/components/dashboard/pagination/Pagination'

type Props = {}

export default function UsersPage({}: Props) {
  return (
    <div className='bg-[#182237] p-5 rounded-md mt-5'>

      <div className='flex items-center justify-between'>
        <Search placeholder='Search for a user...' />
        <Link href='/dashboard/users/add'>
          <Button className='bg-[#5d57c9] hover:bg-[#3e3b8b] text-white'>Add New</Button>
        </Link>
      </div>

      <table className='w-full'>
        <thead>
          <tr>
            <td className='p-2.5'>Name</td>
            <td className='p-2.5'>Email</td>
            <td className='p-2.5'>Create At</td>
            <td className='p-2.5'>Role</td>
            <td className='p-2.5'>Status</td>
            <td className='p-2.5'>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-2.5'>
              <div className='flex gap-2.5 items-center'>
                <Image src='/noavatar.png' alt='' width={40} height={40} className='object-cover rounded-full' />
                BoomTH
              </div>
            </td>
            <td className='p-2.5'>boomth@gmail.com</td>
            <td className='p-2.5'>20.09.2024</td>
            <td className='p-2.5'>Admin</td>
            <td className='p-2.5'>active</td>
            <td className='p-2.5'>
              <div className='flex items-center gap-2.5'>
                <Link href='/dashboard/users/test'>
                  <Button className="h-6 w-12 rounded-md bg-teal-600 hover:bg-teal-800">View</Button>
                </Link>
                <Button className="h-6 w-12 rounded-md bg-red-600 hover:bg-red-800">Delete</Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}