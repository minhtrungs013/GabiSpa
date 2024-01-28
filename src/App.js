import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import Footer from './components/page/footer/footer';
import Navbar from './components/page/navbar/navbar';
import User from './components/page/user';
export default function App() {
  return (
    <div className="container mx-auto ">
      <Navbar />
      <Routes>
        <Route path="/login" exact element={<Login />} />
      </Routes>
      <User />
      <Footer />
    </div>
  )
}