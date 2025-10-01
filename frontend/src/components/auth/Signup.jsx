import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'



const Signup = () => {

    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });


    const { loading, user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }

    // //
    // const changeFileHandler = (e) => {
    //     console.log("Selected File:", e.target.files?.[0]); // Debug file selection
    //     setInput({ ...input, file: e.target.files?.[0] });
    // };
    // //

    const submitHandler = async (e) => {
                e.preventDefault();

        // // basic validation
           
        // if (!input.fullname || !input.email || !input.phoneNumber || !input.password || !input.role) {
        //     toast.error("Please fill in all the required fields.");
        //     return;
        // }

        // //

        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            dispatch(setLoading(true));
                // const res = await fetch(`http://localhost:8000/api/v1/user/register`,formData, {
                const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);  
        // console.log("Error occurred", error);
        // toast.error(error.response?.data?.message || "Signup failed");
        } finally {
            dispatch(setLoading(false));
        }
    };

    // -----------------------------------------------------------------------------------------not using
    // useEffect( ()=> {
    //    async function fetchData(){
    //         const res= await axios.post("http://localhost:8000/test", {name:"rincy"} )
    //     }
    //    fetchData()
    // })
    //-----------------------------------------------------------------------------------

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [])
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto' >
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                    <div className='my-2'>
                        <Label>Full Name</Label>
                        <Input
                            type="text"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                            placeholder="Name"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="name@gmail.com"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input
                            type="text"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                            placeholder="1234567890"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="xxxxxx"
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className='flex items-center gap-2'>
                            <Label>Profile</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                    {
                        loading ? <Button className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin' />Please wait</Button> : <Button type="submit" className="w-full bg-red-300 hover:bg-red-500 my-4">Signup</Button>
                    }
                    <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Signup

//-----------------------------------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import axios from 'axios';

// // The following imports were causing compilation errors.
// // They have been replaced with internal component logic.
// // import Navbar from '../shared/Navbar'
// // import { Label } from '../ui/label'
// // import { Input } from '../ui/input'
// // import { RadioGroup } from '../ui/radio-group'
// // import { Button } from '../ui/button'
// // import { Link, useNavigate } from 'react-router-dom'
// // import axios from 'axios'
// // import { USER_API_END_POINT } from '@/utils/constant'
// // import { toast } from 'sonner'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { setLoading } from '@/redux/authSlice'
// // import { Loader2 } from 'lucide-react'

// const Signup = () => {
//     // Mock user state and Redux-like state
//     const [input, setInput] = useState({
//         fullname: "",
//         email: "",
//         phoneNumber: "",
//         password: "",
//         role: "",
//         file: ""
//     });
//     const [loading, setLoading] = useState(false);
//     const [message, setMessage] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     // Mock navigation function
//     const navigate = (path) => {
//         console.log(`Navigating to: ${path}`);
//     };

//     // Mock toast function
//     const toast = {
//         success: (msg) => setMessage(`Success: ${msg}`),
//         error: (msg) => setMessage(`Error: ${msg}`)
//     };

//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     };

//     const changeFileHandler = (e) => {
//         setInput({ ...input, file: e.target.files?.[0] });
//     };

//     const submitHandler = async (e) => {
//         e.preventDefault();

//         // Basic validation
//         if (!input.fullname || !input.email || !input.phoneNumber || !input.password || !input.role) {
//             toast.error("Please fill in all the required fields.");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("fullname", input.fullname);
//         formData.append("email", input.email);
//         formData.append("phoneNumber", input.phoneNumber);
//         formData.append("password", input.password);
//         formData.append("role", input.role);
//         if (input.file) {
//             formData.append("file", input.file);
//         }

//         try {
//             setLoading(true);
//             // Using native fetch for the API call
//             const res = await fetch(`http://localhost:8000/api/v1/user/register`, {
//                 method: 'POST',
//                 body: formData,
//             });

//             const data = await res.json();
//             if (data.success) {
//                 toast.success(data.message);
//                 navigate("/login");
//             } else {
//                 toast.error(data.message || "Signup failed.");
//             }

//         } catch (error) {
//             console.error(error);
//             toast.error("Network Error: Unable to connect to the server.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const navLinkStyle = "text-gray-800 hover:text-sky-400 transition-colors";
//     const buttonStyle = "px-4 py-2 rounded-lg font-medium transition-colors duration-200";

//     const Navbar = () => (
//         <div className='bg-white shadow-sm'>
//             <div className='h-16 flex items-center justify-between mx-auto max-w-7xl px-4'>
//                 <h1 className='text-2xl font-bold'>Job<span className='text-sky-400'>Finder</span></h1>
//                 <ul className='flex font-medium gap-5 items-center'>
//                     <li><a href="#" className={navLinkStyle}>Home</a></li>
//                     <li><a href="#" className={navLinkStyle}>Jobs</a></li>
//                     <li><a href="#" className={navLinkStyle}>Search</a></li>
//                 </ul>
//                 <div className='flex items-center gap-2'>
//                     <a href="#" onClick={() => navigate("/login")}><button className={`${buttonStyle} bg-red-300 hover:bg-red-500`}>Login</button></a>
//                     <a href="#" onClick={() => navigate("/signup")}><button className={`${buttonStyle} bg-red-300 hover:bg-red-500`}>Signup</button></a>
//                 </div>
//             </div>
//         </div>
//     );

//     const Label = ({ children }) => <label className='block text-sm font-medium text-gray-700 mt-4 mb-1'>{children}</label>;
//     const Input = (props) => <input {...props} className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent' />;
//     const Button = ({ children, ...props }) => <button {...props} className='w-full px-4 py-2 text-white font-medium rounded-lg transition-colors duration-200 cursor-pointer'>{children}</button>;
    
//     // Replace the mocked Link with a standard anchor tag
//     const Link = ({ to, children }) => <a href="#" onClick={() => navigate(to)} className="text-blue-600 hover:underline">{children}</a>;

//     return (
//         <div className="min-h-screen bg-gray-100">
//             <Navbar />
//             <div className='flex items-center justify-center max-w-7xl mx-auto'>
//                 <form onSubmit={submitHandler} className='w-full md:w-1/2 border border-gray-200 rounded-lg shadow-lg p-6 my-10 bg-white'>
//                     <h1 className='font-bold text-2xl mb-5 text-center'>Sign Up</h1>
//                     <div className='space-y-4'>
//                         <div>
//                             <Label>Full Name</Label>
//                             <Input
//                                 type="text"
//                                 value={input.fullname}
//                                 name="fullname"
//                                 onChange={changeEventHandler}
//                                 placeholder="Name"
//                             />
//                         </div>
//                         <div>
//                             <Label>Email</Label>
//                             <Input
//                                 type="email"
//                                 value={input.email}
//                                 name="email"
//                                 onChange={changeEventHandler}
//                                 placeholder="name@gmail.com"
//                             />
//                         </div>
//                         <div>
//                             <Label>Phone Number</Label>
//                             <Input
//                                 type="text"
//                                 value={input.phoneNumber}
//                                 name="phoneNumber"
//                                 onChange={changeEventHandler}
//                                 placeholder="1234567890"
//                             />
//                         </div>
//                         <div>
//                             <Label>Password</Label>
//                             <Input
//                                 type="password"
//                                 value={input.password}
//                                 name="password"
//                                 onChange={changeEventHandler}
//                                 placeholder="xxxxxx"
//                             />
//                         </div>
//                     </div>
//                     <div className='flex items-center justify-between mt-6'>
//                         <div className="flex items-center gap-4">
//                             <div className="flex items-center space-x-2">
//                                 <Input
//                                     type="radio"
//                                     name="role"
//                                     value="student"
//                                     checked={input.role === 'student'}
//                                     onChange={changeEventHandler}
//                                     className="cursor-pointer"
//                                 />
//                                 <Label htmlFor="r1">Student</Label>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <Input
//                                     type="radio"
//                                     name="role"
//                                     value="recruiter"
//                                     checked={input.role === 'recruiter'}
//                                     onChange={changeEventHandler}
//                                     className="cursor-pointer"
//                                 />
//                                 <Label htmlFor="r2">Recruiter</Label>
//                             </div>
//                         </div>
//                         <div className='flex items-center gap-2'>
//                             <Label>Profile</Label>
//                             <Input
//                                 accept="image/*"
//                                 type="file"
//                                 onChange={changeFileHandler}
//                                 className="cursor-pointer"
//                             />
//                         </div>
//                     </div>
//                     {
//                         loading ? (
//                             <Button className="w-full my-4 bg-gray-400 cursor-not-allowed flex items-center justify-center" type="submit">
//                                 <span className='mr-2 h-4 w-4 animate-spin'>&#x231B;</span> Please wait
//                             </Button>
//                         ) : (
//                             <Button type="submit" className="w-full my-4 bg-red-500 hover:bg-red-600">Signup</Button>
//                         )
//                     }
//                     <span className='text-sm text-center block mt-4'>Already have an account? <Link to="/login">Login</Link></span>
//                 </form>
//             </div>
//             {message && (
//                 <div className="fixed bottom-4 right-4 p-4 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
//                     {message}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Signup;

