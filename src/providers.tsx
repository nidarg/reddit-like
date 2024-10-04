
'use client'

// import { NextUIProvider } from "@nextui-org/react"
import {SessionProvider} from 'next-auth/react'
import Navbar from "./components/Navbar"

export default function Providers({children}:{children:React.ReactNode}){
  return (
    <SessionProvider>
    {/* <NextUIProvider> */}
      <Navbar/>
      {children}
    {/* </NextUIProvider> */}

    </SessionProvider>
  )
}