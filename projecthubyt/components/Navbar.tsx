import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { auth, signIn, signOut } from '@/auth'

const Navbar = async () => {
    const session = await auth()
    return (
        <header className='px-5 py-3 bg-white shadow-sm'>
            <nav className='flex justify-between items-center'>
                <Link href='/'>
                    <Image className='rounded-[50%]' src="https://images.pexels.com/photos/25851303/pexels-photo-25851303/free-photo-of-man-in-black-shirt-on-the-sidewalk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='logo' width={50} height={50} />
                </Link>

                <div className='flex items-center gap-5 text-black'>
                    {session && session?.user ? (
                        <>
                            <Link href='/'>
                                <span className='text-2 font-sans max-sm:hidden'>Create</span>
                            </Link>

                            <form
                                action={async () => {
                                    "use server"
                                    await signOut({redirectTo : '/'})
                                }}
                            >
                                <button type='submit' className='text-6 font-sans'>Logout</button>

                            </form>

                            <Link href='/'>
                                {session.user.name}
                            </Link>
                        </>
                    ) : (
                        <form
                            action={async () => {
                                "use server"
                                await signIn('github')
                            }}
                        >
                            <button type='submit' className='text-6 font-sans'>Login</button>

                        </form>
                    )}

                </div>

            </nav>
        </header>
    )
}

export default Navbar
