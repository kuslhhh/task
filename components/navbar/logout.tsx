"use client"

import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { MdOutlineLogout } from "react-icons/md"
import { Button } from '../ui/button'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'

export default function Logout() {

    const router = useRouter()

    const signOut = () => {
        authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/auth")
                }
            }
        })
    }

    return (
        <Dialog>
            <DialogTrigger className='hover:text-red-500'>
                <MdOutlineLogout />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Are you sure?
                    </DialogTitle>
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
