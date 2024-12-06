import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job'

const randomJobs = [1, 2, 3];

const Search = () => {
    return (
        <div>
            <Navbar />
            <div className='my-10 mx-auto max-w-7xl'>
                <h1 className=' my-10 text-xl font-bold'> Search Results ({randomJobs.length})</h1>
                <div className='gap-4 grid grid-cols-3'>
                    {
                        randomJobs.map((item, index) => {
                            return (
                                <Job />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Search