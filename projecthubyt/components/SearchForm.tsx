import React from 'react'
import Form from 'next/form'
import { div } from 'framer-motion/client'

function SearchForm() {
  return (
    <Form 
    action="/"
    scroll={false}
    className='search-form realtive'
    >
        <input type="text" name='query' defaultValue="" className='bg-amber-500' placeholder='Search Project' />

        <div className='flex gap-2'>
            {true && (
                <div className='text-white'>
                    Reset
                </div>
            )}
            <button type='submit' className='text-white bg-amber-500'>Serach</button>
        </div>
    </Form>
  )
}

export default SearchForm
