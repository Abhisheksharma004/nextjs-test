import React from 'react'
import { Boxes } from 'lucide-react'
import { cn } from '@/lib/utils'
import SearchForm from '@/components/SearchForm'
import { ThreeDCardDemo } from '@/components/ThreeDCard'


function page() {
    return (
        <>
            <div className="h-[530px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                Welcome to ProjectHub
            </h1>
            <p className="text-center mt-2 text-neutral-300 relative z-20">
                test the project hub project
            </p>

            <SearchForm />
        </div>

        <section>
            <p className='text-30-semibold'>
                Popular Projects
            </p>

            <ul className='mt-7 gitd grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 justify-center'>
                {
                    [
                        {'id' : 123, 'title' : 'Hello Title', 'desc' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the'},
                        {'id' : 1234, 'title' : 'Hello Title', 'desc' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the'},
                        {'id' : 12345, 'title' : 'Hello Title', 'desc' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the'},
                        {'id' : 123456, 'title' : 'Hello Title', 'desc' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the'},
                        {'id' : 1234567, 'title' : 'Hello Title', 'desc' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the'},
                    ].map((item, i) =>(
                        <ThreeDCardDemo key={item.id} />
                    ))
                }
            </ul>
        </section>        
        </>
    )
}

export default page
