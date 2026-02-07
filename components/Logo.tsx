import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href={"/"}>
        <Image src={"/logo.png"} height={200} width={300} alt='logo' className='object-cover size-full' />
    </Link>
  )
}

export default Logo