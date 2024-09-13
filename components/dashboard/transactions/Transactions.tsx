import React from 'react'
import Image from 'next/image'

export default function Transactions() {

  return (
    <div className='bg-[#182237] p-5 rounded-lg'>

      <h2 className='mb-5 font-extralight text-[#b7bac1]'>Lastest Transactions</h2>

      <table className='w-full'>
        <thead>
          <tr>
            <td className='p-2.5'>Name</td>
            <td className='p-2.5'>Status</td>
            <td className='p-2.5'>Date</td>
            <td className='p-2.5'>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-2.5'>
              <div className='flex items-center gap-2.5'>
                <Image src='/noavatar.png' alt='' width={40} height={40} className='object-cover rounded-full' />
                BoomTH
              </div>
            </td>
            <td className='p-2.5'>
              <span className='rounded-md p-1 text-sm text-white bg-[#f7cb7375]'>Pending</span>
            </td>
            <td className='p-2.5'>12.09.2024</td>
            <td className='p-2.5'>$3.200</td>
          </tr>
          <tr>
            <td className='p-2.5'>
              <div className='flex items-center gap-2.5'>
                <Image src='/noavatar.png' alt='' width={40} height={40} className='object-cover rounded-full' />
                BoomTH
              </div>
            </td>
            <td className='p-2.5'>
              <span className='rounded-md p-1 text-sm text-white bg-[#afd6ee75]'>Done</span>
            </td>
            <td className='p-2.5'>12.09.2024</td>
            <td className='p-2.5'>$3.200</td>
          </tr>
          <tr>
            <td className='p-2.5'>
              <div className='flex items-center gap-2.5'>
                <Image src='/noavatar.png' alt='' width={40} height={40} className='object-cover rounded-full' />
                BoomTH
              </div>
            </td>
            <td className='p-2.5'>
              <span className='rounded-md p-1 text-sm text-white bg-[#f7737375]'>Cancelled</span>
            </td>
            <td className='p-2.5'>12.09.2024</td>
            <td className='p-2.5'>$3.200</td>
          </tr>
          <tr>
            <td className='p-2.5'>
              <div className='flex items-center gap-2.5'>
                <Image src='/noavatar.png' alt='' width={40} height={40} className='object-cover rounded-full' />
                BoomTH
              </div>
            </td>
            <td className='p-2.5'>
              <span className='rounded-md p-1 text-sm text-white bg-[#f7cb7375]'>Pending</span>
            </td>
            <td className='p-2.5'>12.09.2024</td>
            <td className='p-2.5'>$3.200</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}