import React from 'react'
import Navbar from './shared/Navbar'
import HomeMain from './HomeMain'
import HomeCarousel from './HomeCarousel'
import HomeJobs from './HomeJobs'
import HomeJobCards from './HomeJobCards'
import Footer from './Footer'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomeMain/>
      <HomeCarousel/>
      <HomeJobs/>
      <HomeJobCards/>
      <Footer/>
      </div>
  )
}

export default Home