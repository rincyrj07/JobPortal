import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';
import {setSingleJob} from '@/redux/jobSlice' ;
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

const JobDescription = () => {
    const {singleJob} = useSelector(store =>store.job);
    const {user} = useSelector(store=>store.auth);
    const isInitiallyApplied = singleJob?.applications?.some(application=>application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isInitiallyApplied);
    const params = useParams();
    const jobId = params.id;
    // useGetSingleJob(jobId);
    const dispatch = useDispatch();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {withCredentials:true});
            console.log(res.data);
            
            if(res.data.success){
                setIsApplied(true);
                const updatedSingleJob = {...singleJob, applications:[...singleJob.applications,{applicant:user?._id}]}
                dispatch(setSingleJob(updatedSingleJob));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    
    useEffect(() =>{
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
                // console.log(res);
                
                if(res.data.success){
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id))
                }
            } catch (error) {
                console.log(error);  
            }
        }
        fetchSingleJob();
      },[jobId,dispatch,user?._id]);
    return (
        <div className='my-10 max-w-7xl mx-auto'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-xl font-bold'>{singleJob?.title}</h1>
                    <div className='mt-4 gap-2 flex items-center'>
                        <Badge className={'text-blue-500 font-bold'} variant="ghost">{singleJob?.position} Positions</Badge>
                        <Badge className={'text-blue-500 font-bold'} variant="ghost">{singleJob?.jobType}</Badge>
                        <Badge className={'text-blue-500 font-bold'} variant="ghost">{singleJob?.salary}LPA</Badge>
                    </div>
                </div>
                <Button
                onClick={isApplied ?null: applyJobHandler}
                    disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-300 hover:bg-red-500'}`}>
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>
            <h1 className='font-medium py-5 border-b-2 border-b-gray-500' >Job Description</h1>
            <div className='my-4'>
                <h1 className='my-1 font-bold'>Role: <span className='pl-4 font-normal text-gray-500'>{singleJob?.title}</span></h1>
                <h1 className='my-1 font-bold'>Location: <span className='pl-4 font-normal text-gray-500'>{singleJob?.location}</span></h1>
                <h1 className='my-1 font-bold'>Description: <span className='pl-4 font-normal text-gray-500'>{singleJob?.description}</span></h1>
                <h1 className='my-1 font-bold'>Experience: <span className='pl-4 font-normal text-gray-500'>{singleJob?.description}yrs</span></h1>
                <h1 className='my-1 font-bold'>Salary: <span className='pl-4 font-normal text-gray-500'>{singleJob?.salary}LPA</span></h1>
                <h1 className='my-1 font-bold'>No.of applicants: <span className='pl-4 font-normal text-gray-500'>{singleJob?.applications?.length}</span></h1>
                <h1 className='my-1 font-bold'>Posted Date: <span className='pl-4 font-normal text-gray-500'>{singleJob?.createdAt.split("T")[0]}</span></h1>
            </div>
        </div>
    )
}

export default JobDescription