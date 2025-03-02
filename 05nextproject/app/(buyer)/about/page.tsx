import { error } from 'console'
import React from 'react'

function aboutPage() {
  throw error("Unable to loade data")
  return (
    <div>
      About Page
    </div>
  )
}

export default aboutPage
