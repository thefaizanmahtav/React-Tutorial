import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState('')

    // useEffect(() => {

    //     async function githubInfoLoader() {

    //        await fetch("https://api.github.com/users/thefaizanmahtav")
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 console.log(data);
    //                 setData(data)
    //             })
    //             return githubInfoLoader
    //     }
    // }, [])

    return (
        <>
            <div className='text-center bg-gray-500 text-4xl text-white p-4'>Github followers : {data.followers}
                <img className='h-80 w-80' src={data.avatar_url} />
            </div>
        </>
    )
}

export default Github

export async function githubInfoLoader() {
    const response = await fetch('https://api.github.com/users/thefaizanmahtav')
    console.log(response);
        return response.json()
}
