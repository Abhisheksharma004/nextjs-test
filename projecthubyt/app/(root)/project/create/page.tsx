import ProjectForm from '@/components/ProjectForm'
import React from 'react'

function page() {
    return (
        <>
            <section className='form_container !min-h-[230px]'>
                <h1 className='items-center bg-amber-500 p-5 rounded-2xl text-center font-bold text-white'>
                    Submit Our Project
                </h1>
                <div className='flex items-center justify-center'>
                    <ProjectForm />
                </div>

            </section>
        </>
    )
}

export default page
