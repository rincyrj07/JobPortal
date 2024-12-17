import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import ApplicantsTable from './ApplicantsTable'
import axios from 'axios'
import { APPLICATION_API_END_POINT } from '@/utils/constant'
import { setAllApplicants } from '@/redux/applicationSlice'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Applicants = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const {applicants} = useSelector(store=>store.application);

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`,{withCredentials:true});
                // console.log(res.data);
                
                // if(res.data.success){
                    dispatch(setAllApplicants(res.data.job));
                // }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllApplicants();
    }, []);
    return (
        <div>
            <Navbar />
            <div className='mx-auto max-w-7xl'>
                <h1 className='my-5 text-xl font-bold'>Applicants {applicants?.application?.length}</h1>
                <ApplicantsTable />
            </div>
        </div>
    )
}

export default Applicants