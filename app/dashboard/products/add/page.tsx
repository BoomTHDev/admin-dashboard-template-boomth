import { addProduct } from '@/actions/addData'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

type Props = {}

export default function AddProductPage({ }: Props) {
  return (
    <div className='bg-[#182237] p-5 rounded-lg mt-5'>
      <form className='flex flex-wrap justify-between' action={addProduct}>
        <Input type='text' placeholder='title' name='title' className='p-7 w-[45%] bg-[#151c2c] text-white mb-7 border-2 border-[#2e374a]' />

        <Select>

          <SelectTrigger className='p-7 w-[45%] bg-[#151c2c] text-white mb-7 border-2 border-[#2e374a]'>
            <SelectValue placeholder="Choose a Category" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="kitchen">Kitchen</SelectItem>
            <SelectItem value="phone">Phone</SelectItem>
            <SelectItem value="computer">Computer</SelectItem>
          </SelectContent>

        </Select>

        <Input type='number' placeholder='price' name='price' className='p-7 w-[45%] bg-[#151c2c] text-white mb-7 border-2 border-[#2e374a]' />
        <Input type='number' placeholder='stock' name='stock' className='p-7 w-[45%] bg-[#151c2c] text-white mb-7 border-2 border-[#2e374a]' />
        <Input type='text' placeholder='color' name='color' className='p-7 w-[45%] bg-[#151c2c] text-white mb-7 border-2 border-[#2e374a]' />
        <Input type='text' placeholder='size' name='size' className='p-7 w-[45%] bg-[#151c2c] text-white mb-7 border-2 border-[#2e374a]' />

        <Textarea name='desc' id='desc' cols={30} rows={10} placeholder='Description' className='p-7 bg-[#151c2c] text-white mb-7 border-2 border-[#2e374a]' />

        <Button type='submit' className='w-full p-7 bg-teal-600 hover:bg-teal-700 text-white'>Submit</Button>

      </form>
    </div>
  )
}