import { ToastContainer } from "react-toastify";
import './App.css';
import Admin from './components/admin/admin';
import Footer from './components/page/footer/footer';
import User from './components/page/user';
import { useSelector } from "react-redux";

export default function App() {
  const role = useSelector((state) => state.user.role)
  return (
    <div className="">
      <ToastContainer />
      {role === 'Admin' ? <Admin /> : <User />}
      <Footer />
    </div>
  )
}