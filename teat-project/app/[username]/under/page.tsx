import React from 'react'

const Under = ({ params }: { params: { username: string } }) => {

    const { username } = params;
    return (
        <div>
            Under Page : {username}
        </div>
    )
}

export default Under
