"use client"

import { Toaster } from "@/components/ui/toaster"
import React from "react"

type Props = {
  children: React.ReactNode
}

export default function ProvidersWrapper({ children }: Props) {
  return (
    <>
      <Toaster />
      {/*   Added toaster for alerts  */}
      {children}
    </>
  )
}
