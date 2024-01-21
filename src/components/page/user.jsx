import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Features from './features/features'
import Footer from './footer/footer'
import Navbar from './navbar/navbar'
import Service from './service/service'
import ServiceDetails from './service/serviceDetails'
import Slider from './slider/slider'
import Job from './job/job'

export default function User() {
  return (
    <>
      <Routes>
        <Route path="/" element={<> <Navbar /> <Slider /><Features /> <Footer /> </>} />
        <Route path="/dich-vu" element={<> <Navbar /> <Service /> <Footer /> </>} />
        <Route path="/dich-vu/chi-tiet" element={<> <Navbar /> <ServiceDetails /> <Footer /> </>} />
        <Route path="/cong-viec" element={<> <Navbar /> <Job /> <Footer /> </>} />
      </Routes>
    </>
  )
}
