import React, { useState } from 'react'
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useSelector } from 'react-redux';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import axios from 'axios';
import { JOB_API_END_POINT } from '@/utils/constant';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import Companies from './Companies';

const companyArray = [];

const PostJob = () => {
    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        position: 0,
        companyId: ""
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { companies } = useSelector(store => store.company);
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find((company) => company.name.toLowercase() === value);
        setInput({ ...input, companyId: selectedCompany._id })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (res.data.seccess) {
                toast.success(res.data.message);
                navigate("/admin/jobs");
            }
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center w-screen my-5'>
                <form onSubmit={submitHandler} className='border-gray-500 shadow-lg rounded-md p-8 max-w-3xl'>
                    <div className='gap-2 grid grid-cols-1'>
                        <div>
                            <Label>Title</Label>
                            <Input
                                type="text"
                                name="title"
                                value={input.title}
                                onChange={changeEventHandler}
                                className="my-1 focus-visible:ring-offset-0 focus-visible:ring-0 "
                            />
                        </div>
                        <div>
                            <Label>Description</Label>
                            <Input
                                type="text"
                                name="description"
                                value={input.description}
                                onChange={changeEventHandler}
                                className="my-1 focus-visible:ring-offset-0 focus-visible:ring-0 "
                            />
                        </div>
                        <div>
                            <Label>Requirements</Label>
                            <Input
                                type="text"
                                name="requirements"
                                value={input.requirements}
                                onChange={changeEventHandler}
                                className="my-1 focus-visible:ring-offset-0 focus-visible:ring-0 "
                            />
                        </div>
                        <div>
                            <Label>Salary</Label>
                            <Input
                                type="text"
                                name="salary"
                                value={input.salary}
                                onChange={changeEventHandler}
                                className="my-1 focus-visible:ring-offset-0 focus-visible:ring-0 "
                            />
                        </div>
                        <div>
                            <Label>Location</Label>
                            <Input
                                type="text"
                                name="location"
                                value={input.location}
                                onChange={changeEventHandler}
                                className="my-1 focus-visible:ring-offset-0 focus-visible:ring-0 "
                            />
                        </div>
                        <div>
                            <Label>Job Type</Label>
                            <Input
                                type="text"
                                name="jobType"
                                value={input.jobType}
                                onChange={changeEventHandler}
                                className="my-1 focus-visible:ring-offset-0 focus-visible:ring-0 "
                            />
                        </div>
                        <div>
                            <Label>Experience</Label>
                            <Input
                                type="text"
                                name="experience"
                                value={input.experience}
                                onChange={changeEventHandler}
                                className="my-1 focus-visible:ring-offset-0 focus-visible:ring-0 "
                            />
                        </div>
                        <div>
                            <Label>No. of Position</Label>
                            <Input
                                type="number"
                                name="position"
                                value={input.position}
                                onChange={changeEventHandler}
                                className="my-1 focus-visible:ring-offset-0 focus-visible:ring-0 "
                            />
                        </div>
                        {
                            companies.length > 0 && (
                                <Select onValueChange={selectChangeHandler}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select a company" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {
                                                companies.map((company) => {
                                                    return (
                                                        <SelectItem value={company?.name?.toLowercase()}>{company.name}</SelectItem>
                                                    )
                                                })
                                            }
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )
                        }
                    </div>
                    {/* <div className='flex items-center justify-center' > */}

                    {/* </div> */}
                    {
                        loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 animate-spin' />Please Wait</Button> : <Button type="submit" className="w-full my-4">Add New Jobs</Button>
                    }
                    {
                        companies.length === 0 && <p className='text-center my-3 font-bold text-xs text-black-300'> *Registration of the company is mandatory before posting jobs</p>
                    }
                </form>
            </div>
        </div>
    )
}

export default PostJob