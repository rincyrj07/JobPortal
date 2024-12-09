import {Bookmark } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

const Job = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white-100 border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'> 2 days ago</p>
                <Button varient="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" varient="outline" size="icon">
                    <Avatar>
                        <AvatarImage src="https://st2.depositphotos.com/1065578/7533/i/450/depositphotos_75333451-stock-photo-abstract-geometric-company-logo.jpg" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='text-lg font-medium' >Company Name</h1>
                    <p className='text-gray-500 text-sm'>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Job Title</h1>
                <p className='text-sm text-gray-600'>ghgjhjhkjhkjkjkjxgfdfgfdhgjgfjgfxdvfd</p>
            </div>

           <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-500 font-bold'} variant="ghost">12 Positions</Badge>
                <Badge className={'text-blue-500 font-bold'} variant="ghost">Fulltime</Badge>
                <Badge className={'text-blue-500 font-bold'} variant="ghost">14LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button variant="outline">Details</Button>
                <Button className="bg-red-300 hover:bg-red-500">Save For Later</Button>
            </div>
        </div>
    )
}

export default Job