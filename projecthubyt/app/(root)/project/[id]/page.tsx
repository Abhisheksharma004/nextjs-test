import { Boxes } from '@/components/ui/background-boxes'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <>
            <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
                <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

                <Boxes />
                <p className='tag relative text-white'>28 December 2025</p>
                <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                    This is a greate Projects
                </h1>
                <p className="text-center mt-2 text-neutral-300 relative z-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, molestiae?
                </p>
            </div>

            <section>
                <img src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-full h-auto' />

                <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
                    <div className='flex-between gap-5'>
                        <Link href={'/'} className='flex gap-2 items-center mb-3'>
                            <Image src={'https://images.pexels.com/photos/25851344/pexels-photo-25851344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt='abc' width={64} height={64} className='rounded-full drop-shadow-lg' />

                            <div>
                                <p className='text-20-medium'>Auther Name</p>
                                <p className='text-16-medium text-black-300'>@Username</p>
                            </div>
                        </Link>

                        <p className='category-tag'>
                            Computer
                        </p>
                    </div>
                    <h3 className='text-30-bold'>Project Details </h3>
                    <p>No Details Provided</p>
                </div>
                <hr className='devider' />
            </section>

        </>
    )
}

export default page
