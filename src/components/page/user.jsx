import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Features from './features/features'
import Job from './job/job'
import Service from './service/service'
import ServiceDetails from './service/serviceDetails'
import Slider from './slider/slider'
import Blog from './blog/blog'
import News from './news/news'
import Navbar from './navbar/navbar';
import Profile from './profile/profile'

export default function User() {
  return (
    <div className="container mx-auto ">
      <Navbar />
      <Routes>
        <Route path="GabiSpa/" element={<> <Slider /><Features /><Blog />  </>} />
        <Route path="GabiSpa/dich-vu" element={<Service />} />
        <Route path="GabiSpa/dich-vu/chi-tiet" element={<ServiceDetails />} />
        <Route path="GabiSpa/cong-viec" element={<Job />} />
        <Route path="GabiSpa/tin-tuc" element={<News />} />
        <Route path="GabiSpa/trang-ca-nhan" element={<Profile />} />
      </Routes>
    </div>
  )
}
