import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MdPlayCircleFilled } from 'react-icons/md'

export default function Rightbar() {
  return (
    <div className='fixed'>

      <div className='relative bg-gradient-to-t from-[#182237] to-[#253352] p-5 rounded-md mb-5'>

        <div className='absolute bottom-0 right-0 w-1/2 h-1/2'>
          <Image src='/astronaut.png' alt='' fill className='object-contain opacity-20' />
        </div>

        <div className='flex flex-col gap-6'>

          <span className='font-bold'>🔥 Available Now</span>

          <h3 className=''>How to use the new version of the admin dashboard?</h3>

          <span className='font-medium text-xs text-[#b7bac1]'>Takes 4 minutes to learn</span>

          <p className='text-sm text-[#b7bac1]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero perpiciatis recusandae possimus.</p>

          <Button className='flex p-2.5 items-center gap-2.5 bg-[#5d57c9] hover:bg-[#272463] text-white border-none rounded-sm w-max'>
            <MdPlayCircleFilled />
            Watch
          </Button>

        </div>

      </div>

    </div>
  )
}