import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './App.css';
import { ROLE_ADMIN, ROLE_EMPLOYEE, SECRET_ROLE } from "./commom/messageConstant";
import Admin from './components/admin/admin';
import Footer from './components/page/footer/footer';
import User from './components/page/user';
import { checkRefreshToken, compareData } from "./components/utils/utils";
import { Helmet } from "react-helmet-async";
import ReactDOM from 'react-dom/client';

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
        <title>Gabi Spa</title>
        <link rel="Gabi Spa" href="https://gabi-spa.vercel.app" />
      </Helmet>
      <ToastContainer />
      {compareData(ROLE_ADMIN, role, SECRET_ROLE) || compareData(ROLE_EMPLOYEE, role, SECRET_ROLE) ? <Admin /> : <User />}
      <Footer />
    </div>
  )
}
ReactDOM.hydrate(
  App,
  document.getElementById(App)
);