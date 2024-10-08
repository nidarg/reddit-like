'use client'

import { useSession } from "next-auth/react"

export default function Profile(){
 const session = useSession()

 if(session.data?.user){
  return (
   <>
    <div>User is {session.status}</div>
    <div>{JSON.stringify(session.data?.user)}</div>
   </>
  )
 }
 return <div>User is not authenticated</div>
}