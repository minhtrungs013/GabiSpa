import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Features from './features/features'
import Job from './job/job'
import Service from './service/service'
import ServiceDetails from './service/serviceDetails'
import Slider from './slider/slider'
import Blog from './blog/blog'
import News from './news/news'

export default function User() {
  return (
    <>
      <Routes>
        <Route path="/" element={<> <Slider /><Features /><Blog />  </>} />
        <Route path="dich-vu" element={<Service />} />
        <Route path="dich-vu/chi-tiet" element={<ServiceDetails />} />
        <Route path="cong-viec" element={<Job />} />
        <Route path="tin-tuc" element={<News />} />
      </Routes>
    </>
  )
}
