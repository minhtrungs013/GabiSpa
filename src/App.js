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
      <Routes>
        <Route path="/" element={<> <Navbar /> <Slider /><Features /> <Footer /> </>} />
        <Route path="/dich-vu" element={<> <Navbar /> <Service /> <Footer /> </>} />
        <Route path="/dich-vu/chi-tiet" element={<> <Navbar /> <ServiceDetails /> <Footer /> </>} />
        <Route path="/cong-viec" element={<> <Navbar /> <Job /> <Footer /> </>} />
      </Routes>
    </div>
  )
}