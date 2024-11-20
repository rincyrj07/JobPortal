import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>Job<span>Finder</span></h1>
                </div>
                <div>
                   <ul className='flex text-l font-bold gap-5 items-center '>
                    <li>Home</li>
                    <li>Jobs</li>
                    <li>Search</li>
                  </ul>
             
                </div>
            </div>   
        </div>
    )
}

export default Navbar