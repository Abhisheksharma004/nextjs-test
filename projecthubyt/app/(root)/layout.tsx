import Navbar from '@/components/Navbar'
import { main } from 'framer-motion/client'
import React from 'react'

function layout({children} : Readonly<{children:React.ReactNode}>) {
  return (
    <main className='text-2xl'>
      <Navbar />
        {children}
    </main>
  )
}

export default layout
