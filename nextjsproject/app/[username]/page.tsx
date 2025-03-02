import React from 'react'

function unsrNamePage({params} : {params : {username : string}}) {
    const {username} = params;
  return (
    <div>
      Set User Name {username}
    </div>
  )
}

export default unsrNamePage
