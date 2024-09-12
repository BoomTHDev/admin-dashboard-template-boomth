import Search from '@/components/dashboard/search/Search'
import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link';

type Props = {}

export default function UsersPage({}: Props) {
  return (
    <div className='bg-[#182237] p-5 rounded-md mt-5'>

      <div className='flex items-center justify-between'>
        <Search placeholder='Search for a user...' />
        <Link href='/dashboard/users/add'>
          <Button className='bg-[#5d57c9] hover:bg-[#272463] text-white'>Add New</Button>
        </Link>
      </div>

      <table>

      </table>

    </div>
  )
}