import React from 'react'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

type Props = {
    params: { id: string }
}

export default function SingleUserPage({ params }: Props) {
  return (
    <div className='flex gap-10 mt-5'>
        <div className='flex-1 bg-[#182237] p-5 rounded-md font-bold text-[#b7bac1] h-max'>

            <div className='w-full h-[300px] relative rounded-lg overflow-hidden mb-5'>
                <Image src='/noavatar.png' alt='' fill className='' />
            </div>
            BoomTH

        </div>

        <div className='flex-3 bg-[#182237] p-5 rounded-md'>
            <form className='flex flex-col' action=''>
                <Label className='text-xs'>Username</Label>
                <Input type='text' name='username' placeholder='BoomTH' className='p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5 mx-0' />

                <Label className='text-xs'>Email</Label>
                <Input type='email' name='email' placeholder='boomth@gmail.com' className='p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5 mx-0' />

                <Label className='text-xs'>Password</Label>
                <Input type='password' name='password' className='p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5 mx-0' />

                <Label className='text-xs'>Phone</Label>
                <Input type='phone' name='phone' placeholder='+1234567' className='p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5 mx-0' />

                <Label className='text-xs'>Address</Label>
                <Textarea name='address' placeholder='New York' className='p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5 mx-0' />

                <Label className='text-xs'>Is Admin?</Label>
                <select name='isAdmin' id='isAdmin' className='py-2.5 px-6 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5 mx-0'>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>
                </select>
                <Label className='text-xs'>Is Active?</Label>
                <select name='isActive' id='isActive' className='py-2.5 px-6 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5 mx-0'>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>
                </select>

                <Button type='submit' className='w-full p-5 bg-teal-600 hover:bg-teal-700 text-white'>Update</Button>
            </form>
        </div>
    </div>
  )
}