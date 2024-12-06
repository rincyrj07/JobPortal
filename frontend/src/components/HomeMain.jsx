import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const HomeMain = () => {
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>


                <span className='mx-auto px-4 py-2 rounded-full bg-cyan-300 text-black font-medium'>YOUR CAREER, REIMAGINED</span>
                <h1 className='text-5xl font-bold'>Get Your Dream Job & <br />Build Your Future</h1>
                <p>fhhggjhjhjgjhjhkjkjkjkjk</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Search here'
                        className='outline-none border-none w-full'
                    />
                    <Button className= "rounded-r-full bg-cyan-300 hover:bg-cyan-500">
                        <Search className='h-5 w-5'/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HomeMain