import React from 'react'

const UserPage = ({ params }: { params: { username: string } }) => {

    const { username } = params;
    return (
        <div>
            User Page : {username}
        </div>
    )
}

export default UserPage
