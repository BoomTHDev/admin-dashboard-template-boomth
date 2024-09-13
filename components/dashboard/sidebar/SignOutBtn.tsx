'use client'

import { MdLogout } from 'react-icons/md'
import { Button } from '@/components/ui/button'
import { useTransition } from 'react'
import { signOut } from '@/actions/auth'

export default function SignOutBtn() {
    const [isPending, startTransition] = useTransition()

    return (
        <Button 
            onClick={() => startTransition(() => {
                signOut()
            })}
            disabled={isPending}
            className={`px-5 py-8 text-md flex items-center justify-start gap-2 hover:bg-[#2e374a] mt-1 mb-0 rounded-lg bg-inherit border-none w-full`}>
            <MdLogout />
            Logout
        </Button>
    )
}