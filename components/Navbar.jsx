import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <Image src="/man(1).png" width={77} height={77} alt=""/>
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ninjas/test">Ninja Listing</Link>
    </nav>
  )
}

export default Navbar