import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HomeMain from './HomeMain'
import HomeCarousel from './HomeCarousel'
import HomeJobs from './HomeJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <HomeMain />
      <HomeCarousel />
      <HomeJobs />
      {/* <HomeJobCards/> */}
      <Footer />
    </div>
  )
}

export default Home