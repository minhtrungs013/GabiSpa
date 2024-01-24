import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/page/navbar/navbar';
import Slider from './components/page/slider/slider';
import Features from './components/page/features/features';
import Footer from './components/page/footer/footer';
import Service from './components/page/service/service';
import ServiceDetails from './components/page/service/serviceDetails';
import Job from './components/page/job/job';
export default function App() {
  return (
    <div className="container mx-auto ">
      <Navbar />
      <Routes>
        <Route path="/" element={<>  <Slider /><Features />  </>} />
        <Route path="/dich-vu" element={<Service />} />
        <Route path="/dich-vu/chi-tiet" element={<ServiceDetails />} />
        <Route path="/cong-viec" element={<Job />} />
      </Routes>
      <Footer />
    </div>
  )
}