"use client"

import React from 'react'
import { Avatar as AvatarComp, AvatarFallback, AvatarImage } from '../ui/avatar'
import { authClient } from '@/lib/auth-client'

export default function Avatar() {

    const {data: session, isPending} = authClient.useSession()
    if (isPending) return <div>Loading...</div>
    if(!session?.user ) return <div>An error occured</div>

    return (
        <AvatarComp className="mr-2 h-8 w-8">
            <AvatarImage
                alt="Kushal"
                src={`${session.user.image}`}
            />
            <AvatarFallback >
                KS
            </AvatarFallback>
        </AvatarComp>
    )
}
