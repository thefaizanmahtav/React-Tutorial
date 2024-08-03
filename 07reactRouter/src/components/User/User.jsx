import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {UserId} = useParams()
    return (
        <>
        <div className='text-3xl bg-green-600 text-center'>
            User: {UserId}
        </div>
        </>
    )
}



