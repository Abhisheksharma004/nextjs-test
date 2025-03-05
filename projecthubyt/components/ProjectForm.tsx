'use client'
import React from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import MDEditor from '@uiw/react-md-editor'

function ProjectForm() {
    return (
        <form action="/">
            <div>
                <label htmlFor="title">
                    Title
                </label>
                <Input
                    id='title'
                    name='title'
                    className='project-form_input'
                    placeholder='Project Title'
                />
            </div>
            <div>
                <label htmlFor="description">
                    Description
                </label>
                <Textarea
                    id='description'
                    name='description'
                    className='project-form_textarea'
                    placeholder='Project Description'
                    required
                />
            </div>

            <div>
                <label htmlFor="catrgory">
                    Category
                </label>
                <Input
                    id='catrgory'
                    name='catrgory'
                    className='project-form_input'
                    placeholder='Project Category'
                    required
                />
            </div>

            <div>
                <label htmlFor="imgurl">
                    Image URL
                </label>
                <Input
                    id='link'
                    name='link'
                    className='project-form_input'
                    placeholder='Project Thumbnail URL'
                    required
                />
            </div>
            <div data-color-mode='light'>
                <label htmlFor="details">
                    Details
                </label>
                <MDEditor
                    id='details'
                    preview='edit'
                    height={300}
                    style={{ borderRadius: 20, overflow: 'hidden' }}
                    textareaProps={{
                        placeholder: 'Describe Your Project In Detail.'
                    }}
                    previewOptions={{
                        disallowedElements: ['style']
                    }}
                />
            </div>
        </form>
    )
}

export default ProjectForm
