import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './App.css';
import { ROLE_ADMIN, ROLE_EMPLOYEE, SECRET_ROLE } from "./commom/messageConstant";
import Admin from './components/admin/admin';
import Footer from './components/page/footer/footer';
import User from './components/page/user';
import { checkRefreshToken, compareData } from "./components/utils/utils";

export default function App() {
  const role = useSelector((state) => state.userReducer.role)
  const refreshToken = useSelector((state) => state.authReducer.refreshToken)
  const navigate = useNavigate()

  useEffect(() => {
    if (refreshToken !== null && !checkRefreshToken(refreshToken)) {
      navigate('/')
    }
  }, [refreshToken, navigate])


  return (
    <div className="">
      <Helmet>
        <title>Gabi Spa Chăm Sóc Mẹ Và Bé</title>
        <meta name="description" content="Dịch vụ chăm sóc mẹ và bé" />
        <meta name="keywords" content="Gabi Spa, Dịch vụ chăm sóc mẹ và bé " />
        <link rel="Gabi Spa Chăm Sóc Mẹ và Bé" href="https://gabi-spa.vercel.app" />
      </Helmet>
      <ToastContainer />
      {compareData(ROLE_ADMIN, role, SECRET_ROLE) || compareData(ROLE_EMPLOYEE, role, SECRET_ROLE) ? <Admin /> : <User />}
      <Footer />
    </div>
  )
}