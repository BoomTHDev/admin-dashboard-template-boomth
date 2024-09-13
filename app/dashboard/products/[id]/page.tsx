import React from 'react'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

type Props = {
    params: { id: string }
}

export default function SingleProductPage({ params }: Props) {
  return (
    <div className='flex gap-10 mt-5'>
        <div className='flex-1 bg-[#182237] p-5 rounded-md font-bold text-[#b7bac1] h-max'>

            <div className='w-full h-[300px] relative rounded-lg overflow-hidden mb-5'>
                <Image src='/noavatar.png' alt='' fill className='' />
            </div>
            iPhone 15 Pro Max

        </div>

        <div className='flex-3 bg-[#182237] p-5 rounded-md'>
            <form className='flex flex-col' action=''>
                <Label className='text-xs'>Title</Label>
                <Input type='text' name='title' placeholder='iPhone 15 Pro Max' className='p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5 mx-0' />

                <Label className='text-xs'>Price</Label>
                <Input type='number' name='price' placeholder='$999' className='p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5 mx-0' />

                <Label className='text-xs'>Stock</Label>
                <Input type='number' name='stock' placeholder='34' className='p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5 mx-0' />

                <Label className='text-xs'>Color</Label>
                <Input type='text' name='color' placeholder='red' className='p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5 mx-0' />

                <Label className='text-xs'>Size</Label>
                <Input type='number' name='size' placeholder='6.9' className='p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5 mx-0' />

                <Label className='text-xs'>Category</Label>
                <select name='category' id='category' className='py-2.5 px-6 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5 mx-0'>
                    <option value='kitchen'>Kitchen</option>
                    <option value='phone'>Phone</option>
                    <option value='computer'>Computer</option>
                </select>
                <Label className='text-xs'>Descriptin</Label>
                <Textarea name='desc' id='desc' rows={10} placeholder='description' className='p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5 mx-0' />

                <Button type='submit' className='w-full p-5 bg-teal-600 hover:bg-teal-700 text-white'>Update</Button>
            </form>
        </div>
    </div>
  )
}