"use client"

import React, { useState } from 'react'
import { 
    Dialog, 
    DialogClose, 
    DialogContent, 
    DialogFooter, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger 
} from '../ui/dialog'
import { MdOutlineLogout } from "react-icons/md"
import { Button } from '../ui/button'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'

export default function Logout() {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const signOut = () => {
        authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    setOpen(false) 
                    router.push("/auth") 
                }
            }
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className='hover:text-red-500'>
                    <MdOutlineLogout />
                </button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                </DialogHeader>
                <DialogFooter className='sm:justify-start'>
                    <Button type='button' onClick={signOut}>
                        Yes, sign out
                    </Button>
                    <DialogClose asChild>
                        <Button type='button' variant='secondary'>
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
