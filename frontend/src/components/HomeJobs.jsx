import React from 'react'
import HomeJobCards from './HomeJobCards';
import { useSelector } from 'react-redux';


// const randomJobs = [1,2,3,4,5,6,7,8];
const HomeJobs = () => {
  const { allJobs } = useSelector(store => store.job);

  // const allJobs = useSelector((state) => state.jobs?.allJobs);

  return (
    <div className='max-w-7xl mx-auto my-20'>
      <h1 className='text-2xl font-bold '><span>Latest</span> Job Openings</h1>
      <div className='grid grid-cols-3 gap-4 my-5'>
        {
          allJobs.length <= 0 ? <span>Job not available</span> : allJobs?.slice(0, 6).map((job) => <HomeJobCards key={job._id} job={job} />)
        }
      </div>
    </div>
  )
}

export default HomeJobs