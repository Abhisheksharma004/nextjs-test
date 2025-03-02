import React from 'react'

function communityPage({ params }: { params: { username: string } }) {
    const { username } = params;
    return (
        <div>
            Set Community User Name {username}
        </div>
    )
}

export default communityPage
