import Link from 'next/link'
import Image from 'next/image'   // 👈 यह लाइन जोड़नी होगी
import React from 'react'

function Navbar() {
  return (
    <header className='px-5 py-3 bg-white shadow-sm'>
        <nav className='flex justify-between items-center'>
            <Link href='/'>
                <Image className='rounded-[50%]' src="https://images.pexels.com/photos/25851303/pexels-photo-25851303/free-photo-of-man-in-black-shirt-on-the-sidewalk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='logo' width={50} height={50} />
            </Link>

            <div className='flex items-center gap-5 text-black'>
                <Link href='/'>
                    <span className='text-2 font-sans max-sm:hidden'>Create</span>
                </Link>

                <Link href='/'>
                    <span className='text-2 font-sans max-sm:hidden'>Logout</span>
                </Link>

                <Link href='/'>
                   UserName
                </Link>
            </div>

        </nav>
    </header>
  )
}

export default Navbar
