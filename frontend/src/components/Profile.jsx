import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobList from './AppliedJobList'
import UpdateProfile from './UpdateProfile'
import { useSelector } from 'react-redux'

// const skills = ["HTML", "CSS", "Javascript", "ReactJS", "NodeJS", "MongoDB"]
const isResume = true;

const Profile = () => {
    const [open, setOpen] = useState(false);
    const {user} = useSelector(store=>store.auth);

    return (
        <div>
            <Navbar />
            <div className='mx-auto bg-white-100 border border-gray-200 rounded-2xl my-5 p-8 max-w-4xl'>
                <div className='justify-between flex'>
                    <div className='gap-4 flex items-center'>
                        <Avatar className='w-20 h-20'>
                            <AvatarImage src="https://st2.depositphotos.com/1065578/7533/i/450/depositphotos_75333451-stock-photo-abstract-geometric-company-logo.jpg" alt="profile" />
                        </Avatar>
                        <div>
                            <h1 className='text-xl font-medium'>{user?.fullname}</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right" varient="outline"><Pen /></Button>
                </div>
                <div className='my-5'>
                    <div className='gap-3 my-2 flex items-center'>
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className='gap-3 my-3 flex items-center'>
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>

                </div>
                <div className='my-5'>
                    <h1>Skills</h1>
                    <div className='gap-1 flex items-center'>
                        {
                            user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
                        }
                    </div>
                </div>
                <div className='=grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
                    }
                </div>
            </div>
            <div className='mx-auto max-w-4xl bg-white rounded-2xl'>
                <h1 className='text-lg font-bold my-5'>Applied Jobs</h1>
                { }
                <AppliedJobList />
            </div>
            <UpdateProfile open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Profile