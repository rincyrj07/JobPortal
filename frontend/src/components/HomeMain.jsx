import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HomeMain = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
       dispatch(setSearchedQuery(query));
       navigate("/search");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-cyan-300 text-black font-medium'>YOUR CAREER, REIMAGINED</span>
                <h1 className='text-4xl font-bold'>Get Your Dream Job & <br />Build Your Future</h1>
                <p className='font-bold'>Be the first to see new jobs</p>
                <div className=' items-center gap-4 mx-auto flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full'>
                    <input
                        type="text"
                        placeholder='Search here'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full'
                    />
                    <Button onClick={searchJobHandler} className= "rounded-r-full bg-cyan-300 hover:bg-cyan-500">
                        <Search className='h-5 w-5'/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HomeMain