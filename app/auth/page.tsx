"use client"

import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import React from 'react'
import {FaGoogle} from "react-icons/fa"

const signIn = async() => {
    await authClient.signIn.social({
        provider: "google"
    })
}

export default function page() {
  return (
    <div className='h-screen w-full flex justify-center items-center '>
        <Button className='flex items-center gap-1.5' onClick={signIn}>
            <FaGoogle/>
            <span>Sign in With Google</span>
        </Button>
    </div>
  )
}
