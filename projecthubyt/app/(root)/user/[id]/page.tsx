import React from 'react'
import { EvervaultCard, Icon } from '@/components/ui/evervault-card';
import { ThreeDCardDemo } from '@/components/ThreeDCard';

function page({ params }: { params: { id: string } }) {
    const { id } = params;
    return (
        <>
            <section className=''>
                <div className=" border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[30rem]">
                    <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                    <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                    <EvervaultCard text="hover" imageUrl='https://images.pexels.com/photos/25851303/pexels-photo-25851303/free-photo-of-man-in-black-shirt-on-the-sidewalk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />

                    <h2 className="dark:text-white text-black mt-4 text-lg font-bold text-center">
                        Name LastName
                    </h2>
                    <p className="text-sm border font-semibold dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5 line-clamp-2 text-center pb-11">
                        Watch me hover Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, eveniet.
                    </p>
                </div>
                <div className='flex-1 flex flex-col gap-5 lg:mt-5'>
                    <p>
                        All Projects
                    </p>

                    <ul className='mt-7 gitd grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 justify-center'>
                        {
                            [
                                { 'id': 123, 'title': 'Hello Title', 'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the' },
                                { 'id': 1234, 'title': 'Hello Title', 'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the' },
                                { 'id': 12345, 'title': 'Hello Title', 'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the' },
                                { 'id': 123456, 'title': 'Hello Title', 'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the' },
                                { 'id': 1234567, 'title': 'Hello Title', 'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the' },
                            ].map((item, i) => (
                                <ThreeDCardDemo key={item.id} />
                            ))
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default page
