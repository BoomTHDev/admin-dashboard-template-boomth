import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { signIn } from '@/actions/auth'

export default function LoginPage() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>

      <form className='bg-[#182237] p-12 rounded-lg w-[500px] h-[500px] flex flex-col items-center justify-center gap-6' action={signIn}>
        <h1 className='font-bold text-4xl'>Login</h1>
        <Input type='text' placeholder='username' name='username' className='p-6 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white' />
        <Input type='password' placeholder='password' name='password' className='p-6 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white' />
        <Button type='submit' className='w-full p-6 bg-teal-600 hover:bg-teal-700'>Login</Button>
      </form>

    </div>
  )
}