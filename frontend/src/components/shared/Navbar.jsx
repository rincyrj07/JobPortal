import React from 'react'
import { Link } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'
import { useSelector } from 'react-redux'

const Navbar = () => {
   
    const {user} = useSelector(store=>store.auth);
    return (
        <div className='bg-white'>
            <div className='h-16 flex items-center justify-between mx-auto max-w-7xl '>
                <div>
                    <h1 className='text-2xl font-bold'>Job<span>Finder</span></h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium gap-5 items-center '>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/jobs">Jobs</Link></li>
                        <li><Link to="/search">Search</Link></li>
                    </ul>
                    {
                        !user ? (
                            <div className='flex item-center gap-2'>
                                <Link to ="/login"><Button varient="outline" className="bg-red-300 hover:bg-red-500">Login</Button></Link>
                                <Link to ="signup"><Button className="bg-red-300 hover:bg-red-500">Signup</Button></Link>   
                            </div>
                        ) : (


                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div className=''>
                                    <div className='flex gap-2 space-y-2'>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        </Avatar>
                                        <div>
                                            <h4 className='font-bold'>Pallavi Mishra</h4>
                                            <p className='text-sm text-muted-foreground'>rytyty</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col my-2 text-gray-600'>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <User2 />
                                            <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                                        </div>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <LogOut />
                                            <Button variant="link">Logout</Button>
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