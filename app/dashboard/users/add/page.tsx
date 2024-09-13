'use client'

import { addUser } from '@/actions/addData'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function AddUserPage() {
  return (
    <div className='bg-[#182237] p-5 rounded-lg mt-5'>
      <form className='flex flex-wrap justify-between' action={addUser}>
        <Input type='text' placeholder='username' name='username' className='p-7 w-[45%] bg-[#151c2c] text-white mb-7 border-2 border-[#2e374a]' />
        <Input type='email' placeholder='email' name='email' className='p-7 w-[45%] bg-[#151c2c] text-white mb-7 border-2 border-[#2e374a]' />
        <Input type='password' placeholder='password' name='password' className='p-7 w-[45%] bg-[#151c2c] text-white mb-7 border-2 border-[#2e374a]' />
        <Input type='phone' placeholder='phone' name='phone' className='p-7 w-[45%] bg-[#151c2c] text-white mb-7 border-2 border-[#2e374a]' />

        <select className='p-5 w-[45%] bg-[#151c2c] text-white mb-7 rounded-md border-2 border-[#2e374a]' name='isAdmin' id='isAdmin'>
          <option value="false" selected>Is Admin?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <select className='px-7 w-[45%] bg-[#151c2c] text-white mb-7 rounded-md border-2 border-[#2e374a]' name='isActive' id='isActive'>
          <option value="true" selected>Is Active?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <Textarea name='address' id='address' cols={30} rows={10} placeholder='Address' className='p-7 bg-[#151c2c] text-white mb-7 border-2 border-[#2e374a]' />

        <Button type='submit' className='w-full p-7 bg-teal-600 hover:bg-teal-700 text-white'>Submit</Button>

      </form>
    </div>
  )
}