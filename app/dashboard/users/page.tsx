import Search from '@/components/dashboard/search/Search'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/components/dashboard/pagination/Pagination'
import { getUsers } from '@/actions/getData'
import { delUser } from '@/actions/delData'

type Props = {
  searchParams: {
    q: string
    page: string
  }
}

export default async function UsersPage({ searchParams }: Props) {

  const q = searchParams?.q || ""
  const page = searchParams?.page || "1"
  const { count, users } = await getUsers(q, page)

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
          {users && users.map((user, index) => (
            <tr key={index}>
            <td className='p-2.5'>
              <div className='flex gap-2.5 items-center'>
                <Image src={user.img || '/noavatar.png'} alt='' width={40} height={40} className='object-cover rounded-full' />
                {user.username}
              </div>
            </td>
            <td className='p-2.5'>{user.email}</td>
            <td className='p-2.5'>{user.createdAt.toString().slice(4, 16)}</td>
            <td className='p-2.5'>{user.isAdmin ? 'Admin' : 'Client'}</td>
            <td className='p-2.5'>{user.isActive ? 'active' : 'passive'}</td>
            <td className='p-2.5'>
              <div className='flex items-center gap-2.5'>
                <Link href={`/dashboard/users/${user.id}`}>
                  <Button className="h-6 w-12 rounded-md bg-teal-600 hover:bg-teal-800">View</Button>
                </Link>
                <form action={delUser}>
                  <Input type='hidden' name='id' value={user.id} />
                  <Button className="h-6 w-12 rounded-md bg-red-600 hover:bg-red-800">Delete</Button>
                </form>
              </div>
            </td>
          </tr>
          ))}
          
        </tbody>
      </table>
      <Pagination count={count || 0} />
    </div>
  )
}