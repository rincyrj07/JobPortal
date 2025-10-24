import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { setUser } from '@/redux/authSlice'


const Navbar = () => {

    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            // console.log(error);
            toast.error(error.response.data.message);
        }
    }
    return (
        <div className='bg-white'>
            <div className=' flex items-center justify-between mx-auto max-w-7xl h-16 '>
                <div>
                    <h1 className='text-2xl font-bold'>Job<span className='text-sky-400'>Finder</span></h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium gap-5 items-center '>
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li><Link to="/admin/companies">Companies</Link></li>
                                    <li><Link to="/admin/jobs">Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/jobs">Jobs</Link></li>
                                    <li><Link to="/search">Search</Link></li>
                                </>
                            )
                        }

                    </ul>
                    {
                        !user ? (
                            <div className='flex item-center gap-2'>
                                <Link to="/login"><Button varient="outline" className="bg-red-300 hover:bg-red-500">Login</Button></Link>
                                <Link to="/signup"><Button className="bg-red-300 hover:bg-red-500">Signup</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn"/>  
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div className=''>
                                        <div className='flex gap-4 space-y-2'>
                                            <Avatar className="cursor-pointer">
                                                 <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn"/>
                                            </Avatar>
                                            <div>
                                                <h4 className='font-bold'>{user?.fullname}</h4>
                                                <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col my-2 text-gray-600'>
                                            {
                                                user && user.role === 'student' && (
                                                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                        <User2 />
                                                        <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
                                                    </div>
                                                )
                                            }

                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <LogOut />
                                                <Button onClick={logoutHandler} variant="link">Logout</Button>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar


// import React, { useState } from 'react';

// // The following imports were causing compilation errors.
// // They have been replaced with internal component logic.
// // import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// // import { Button } from '../ui/button'
// // import { Avatar, AvatarImage } from '../ui/avatar'
// // import { LogOut, User2 } from 'lucide-react'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { USER_API_END_POINT } from '@/utils/constant'
// // import { toast } from 'sonner'
// // import { setUser } from '@/redux/authSlice'
// // import axios from 'axios'

// const Navbar = () => {
//     // Mock user state since Redux is not available
//     const [user, setUser] = useState({
//         fullname: "John Doe",
//         role: "student",
//         profile: { bio: "Aspiring Web Developer" }
//     });
//     const [message, setMessage] = useState('');
//     const [showPopover, setShowPopover] = useState(false);

//     // Mock navigation function
//     const navigate = (path) => {
//         console.log(`Navigating to: ${path}`);
//     };

//     // Mock toast function
//     const toast = {
//         success: (msg) => setMessage(`Success: ${msg}`),
//         error: (msg) => setMessage(`Error: ${msg}`)
//     };

//     const logoutHandler = async () => {
//         try {
//             // Using native fetch to avoid external dependencies like axios
//             const res = await fetch(`http://localhost:8000/api/v1/user/logout`, { withCredentials: true });
//             const data = await res.json();
            
//             if (data.success) {
//                 setUser(null);
//                 navigate("/");
//                 toast.success(data.message);
//             } else {
//                 toast.error(data.message);
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error("Network Error: Unable to connect to the server.");
//         }
//     };

//     const linkStyle = "text-gray-800 hover:text-sky-400 transition-colors";
//     const buttonStyle = "px-4 py-2 rounded-lg font-medium transition-colors duration-200";

//     return (
//         <div className='bg-white shadow-sm'>
//             <div className='h-16 flex items-center justify-between mx-auto max-w-7xl px-4'>
//                 <div>
//                     <h1 className='text-2xl font-bold'>Job<span className='text-sky-400'>Finder</span></h1>
//                 </div>
//                 <div className='flex items-center gap-12'>
//                     <ul className='flex font-medium gap-5 items-center'>
//                         {user && user.role === 'recruiter' ? (
//                             <>
//                                 <li><a href="#" onClick={() => navigate("/admin/companies")} className={linkStyle}>Companies</a></li>
//                                 <li><a href="#" onClick={() => navigate("/admin/jobs")} className={linkStyle}>Jobs</a></li>
//                             </>
//                         ) : (
//                             <>
//                                 <li><a href="#" onClick={() => navigate("/")} className={linkStyle}>Home</a></li>
//                                 <li><a href="#" onClick={() => navigate("/jobs")} className={linkStyle}>Jobs</a></li>
//                                 <li><a href="#" onClick={() => navigate("/search")} className={linkStyle}>Search</a></li>
//                             </>
//                         )}
//                     </ul>
//                     {!user ? (
//                         <div className='flex items-center gap-2'>
//                             <a href="#" onClick={() => navigate("/login")}><button className={`${buttonStyle} bg-red-300 hover:bg-red-500`}>Login</button></a>
//                             <a href="#" onClick={() => navigate("/signup")}><button className={`${buttonStyle} bg-red-300 hover:bg-red-500`}>Signup</button></a>
//                         </div>
//                     ) : (
//                         <div className="relative">
//                             <div className="cursor-pointer rounded-full overflow-hidden w-10 h-10 ring-2 ring-transparent hover:ring-sky-400 transition-shadow duration-200" onClick={() => setShowPopover(!showPopover)}>
//                                 <img src="https://github.com/shadcn.png" alt="User Avatar" className="w-full h-full object-cover" />
//                             </div>
//                             {showPopover && (
//                                 <div className="absolute right-0 mt-3 p-4 bg-white rounded-lg shadow-xl w-80">
//                                     <div className='flex gap-4 items-center mb-4'>
//                                         <div className="rounded-full overflow-hidden w-12 h-12">
//                                             <img src="https://github.com/shadcn.png" alt="User Avatar" className="w-full h-full object-cover" />
//                                         </div>
//                                         <div>
//                                             <h4 className='font-bold text-gray-800'>{user?.fullname}</h4>
//                                             <p className='text-sm text-gray-500'>{user?.profile?.bio}</p>
//                                         </div>
//                                     </div>
//                                     <div className='flex flex-col text-gray-600 space-y-2'>
//                                         {user && user.role === 'student' && (
//                                             <a href="#" onClick={() => navigate("/profile")} className="flex items-center gap-2 hover:text-sky-400 transition-colors">
//                                                 <span>👤</span>
//                                                 <span className="font-medium">View Profile</span>
//                                             </a>
//                                         )}
//                                         <a href="#" onClick={logoutHandler} className="flex items-center gap-2 hover:text-sky-400 transition-colors">
//                                             <span>🚪</span>
//                                             <span className="font-medium">Logout</span>
//                                         </a>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     )}
//                 </div>
//             </div>
//             {message && (
//                 <div className="fixed bottom-4 right-4 p-4 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
//                     {message}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Navbar;
