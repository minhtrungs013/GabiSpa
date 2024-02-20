import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../../login/login';
import Register from '../../register/register';
const menuitems = [
    {
        id: 0,
        title: "Dịch vụ",
        path: "GabiSpa/dich-vu",
    },
    {
        id: 1,
        title: "Công Việc",
        path: "GabiSpa/cong-viec",
    },
    {
        id: 2,
        title: "Tin Tức",
        path: "GabiSpa/tin-tuc",
    },
    {
        id: 3,
        title: "Liên Hệ",
        path: "GabiSpa/lien-he",
    },
];

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [isModalLogin, setModalLogin] = useState(false);
    const [isModalRegister, setModalRegister] = useState(false);

    const openModalLogin = () => {
        setModalLogin(true);
        setOpen(false)
    };

    const closeModalLogin = () => {
        setModalLogin(false);
    };

    const openModalRegister = () => {
        setModalRegister(true);
        setOpen(false)
    };

    const closeModalRegister = () => {
        setModalRegister(false);
    };

    const switchLogin = () => {
        setModalRegister(false);
        setModalLogin(true);
    }
    const switchRegister = () => {
        setModalLogin(false);
        setModalRegister(true);
    }

    return (
        <>
            <div className='flex flex-col lg:flex-row justify-between items-center my-5'>
                <div className="flex w-full lg:w-auto items-center justify-between">
                    <Link to={'/GabiSpa'} className="text-lg">
                        <img className='' src="https://res.cloudinary.com/dax8xvyhi/image/upload/c_fill,h_90,w_250/v1705774032/mdggvkgqlr2osrxdt1hh.png" alt="" />
                    </Link>
                    <div class="block lg:hidden">
                        <button class="text-gray-800" onClick={() => setOpen(!open)}>
                            <FontAwesomeIcon icon={faBars} className='pr-3 text-4xl text-[#214581]' />
                        </button>
                    </div>
                </div>
                <nav className="hidden w-full lg:w-auto mt-2 lg:!flex lg:mt-0" style={{ display: open ? 'block' : 'none' }}>
                    <ul className="flex flex-col lg:flex-row lg:gap-3" >
                        {menuitems.map((item) => (
                            <li key={item.id}>
                                <Link onClick={() => setOpen(!open)}
                                    to={`${item.path}`}
                                    className="flex lg:px-2 xl:px-3 py-2 text-gray-600 hover:text-[#214581] font-medium text-xl ">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div class="lg:!hidden flex items-center justify-center mt-3 gap-4 " style={{ display: open ? 'flex' : 'none' }}>
                        <button  onClick={openModalLogin} className='w-full rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 ] text-black border-[1px] border-[#2e4d81]' >Đăng nhập</button>
                        <button  onClick={openModalRegister} size="md" className='w-full rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-[#214581] text-white hover:bg-[#2e4d81]  border-2 border-transparent'>Đăng ký</button>
                    </div>
                </nav>
                <div>
                    <div className="hidden lg:flex items-center gap-4" >
                        <button  onClick={openModalLogin} className=' rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 ] text-black border-[1px] border-[#2e4d81]' >Đăng nhập</button>
                        <button  onClick={openModalRegister} size="md" className='rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2 bg-[#214581] text-white hover:bg-[#2e4d81]  border-2 border-transparent'>Đăng ký</button>
                    </div>
                </div>
            </div >
            <Login closeModal={closeModalLogin} showModal={isModalLogin} switchRegister={switchRegister} />
            <Register closeModal={closeModalRegister} showModal={isModalRegister} switchLogin={switchLogin} />
        </>
    )
}
