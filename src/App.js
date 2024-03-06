import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import './App.css';
import { ROLE_ADMIN, SECRET_ROLE } from "./commom/messageConstant";
import Admin from './components/admin/admin';
import Footer from './components/page/footer/footer';
import User from './components/page/user';
import { compareData } from "./components/utils/utils";
export default function App() {
  const role = useSelector((state) => state.userReducer.role)


  return (
    <div className="">
      <ToastContainer />
      {compareData(ROLE_ADMIN, role, SECRET_ROLE) ? <Admin /> : <User />}
      <Footer />
    </div>
  )
}