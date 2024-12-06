import React from 'react'
import { Badge } from './ui/badge'

const HomeJobCards = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-gray-100 border-black-100 cursor-pointer'>
            <div>
                <h1 className='font-medium text-lg'>Company Name</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Job Title</h1>
                <p className='text-sm text-gray-600'>hkjljlkj</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-500 font-bold'} variant="ghost">12 Positions</Badge>
                <Badge className={'text-blue-500 font-bold'} variant="ghost">Fulltime</Badge>
                <Badge className={'text-blue-500 font-bold'} variant="ghost">14LPA</Badge>
            </div>
        </div>
    )
}

export default HomeJobCards