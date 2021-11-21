import React from 'react'

const NotFound = ({location}) => {

    return (
        <div className="container mt-5">
            <p className="text-center">
                404 Not found
            </p>
            <p className="text-center">
            {location.pathname} not found
            </p>
        </div>
    )
}

export default NotFound
