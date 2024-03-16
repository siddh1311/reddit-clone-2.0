import { useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'

type Props = {
    seed?: string
    large?: boolean
}

function Avatar({seed, large}: Props) {
    const {data: session} = useSession()
  return (
    <div className={`border-gray-300 bg-white overflow-hidden relative h-10 w-10 rounded-full ${large && 'h-20 w-20'}`}>
        <Image objectFit='contain' fill src={`https://api.dicebear.com/8.x/open-peeps/svg?seed=${seed || session?.user?.name || "placeholder"}.svg`} alt='Avatar Image'/>
    </div>
  )
}

export default Avatar