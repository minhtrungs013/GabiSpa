import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearUserSlice, setLoggedIn, setRole, setUsername } from '../../../redux/slice/userSlice';
import { persistor } from '../../../redux/store';
import Login from '../../login/login';
import Register from '../../register/register';
import { clearAuth } from '../../../redux/slice/authSlice';

const menuitems = [
    {
        id: 0,
        title: "Dịch vụ",
        path: "dich-vu",
    },
    {
        id: 1,
        title: "Công Việc",
        path: "cong-viec",
    },
    {
        id: 2,
        title: "Tin Tức",
        path: "tin-tuc",
    },
    {
        id: 3,
        title: "Tuyển Dụng",
        path: "tuyen-dung",
    },
    {
        id: 4,
        title: "Liên Hệ",
        path: "lien-he",
    },
];

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);
    const usename = useSelector(state => state.userReducer.usename);
    const dispatch = useDispatch();
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

    const Logout = () => {
        persistor.purge()
        dispatch(setLoggedIn(false))
        dispatch(setUsername(null))
        dispatch(setRole(''))
        dispatch(clearUserSlice())
        dispatch(clearAuth())
    }

    return (
        <>
            <div className='flex flex-col lg:flex-row justify-between items-center my-5'>
                <div className="flex w-full lg:w-auto items-center justify-between">
                    <Link to={'/'} className="text-lg">
                        <img className='' src="https://res.cloudinary.com/dax8xvyhi/image/upload/c_fill,h_90,w_250/v1705774032/mdggvkgqlr2osrxdt1hh.png" alt="" />
                    </Link>
                    <div className="block lg:hidden">
                        <button className="text-gray-800" onClick={() => setOpen(!open)}>
                            <FontAwesomeIcon icon={faBars} className='pr-3 text-4xl text-[#214581]' />
                        </button>
                    </div>
                </div>
                <div className="hidden w-full lg:w-auto mt-2 lg:!flex lg:mt-0" style={{ display: open ? 'block' : 'none' }} >
                    <ul className="flex flex-col lg:flex-row lg:gap-3" >
                        {menuitems.map((item) => (
                            <>
                                {item.id === 1 && !isLoggedIn ?
                                    <></>
                                    :
                                    <li key={item.id}>
                                        <Link onClick={() => setOpen(!open)}
                                            to={`${item.path}`}
                                            className="flex lg:px-2 xl:px-3 py-2 text-gray-600 hover:text-[#214581] font-medium text-xl ">
                                            {item.title}
                                        </Link>
                                    </li>
                                }
                            </>
                        ))}
                        {isLoggedIn &&
                            <li className=' lg:!hidden flex border-t border-gray-500'>
                                <Link to={'/trang-ca-nhan'} onClick={() => setOpen(!open)} className="flex lg:px-2 xl:px-3 py-2 text-gray-600 hover:text-[#214581] font-medium text-xl ">
                                    Trang Cá Nhân
                                </Link>
                            </li>
                        }
                        {isLoggedIn &&
                            <li className=' lg:!hidden flex'>
                                <Link onClick={() => { Logout(); setOpen(!open) }} className="flex lg:px-2 xl:px-3 py-2 text-red-600 hover:text-[#214581] font-medium text-xl ">
                                    Đăng Xuất
                                </Link>
                            </li>
                        }
                    </ul >
                    {!isLoggedIn &&
                        <div className="lg:!hidden flex items-center justify-center mt-3 gap-4 " style={{ display: open ? 'flex' : 'none' }}>
                            <button onClick={openModalLogin} className='w-full rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 ] text-black border-[1px] border-[#2e4d81]' >Đăng nhập</button>
                            <button onClick={openModalRegister} size="md" className='w-full rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-[#214581] text-white hover:bg-[#2e4d81]  border-2 border-transparent'>Đăng ký</button>
                        </div>
                    }
                </div>
                {!isLoggedIn ? <>
                    <div>
                        <div className="hidden lg:flex items-center gap-4" >
                            <button onClick={openModalLogin} className=' rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 ] text-black border-[1px] border-[#2e4d81]' >Đăng nhập</button>
                            <button onClick={openModalRegister} size="md" className='rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2 bg-[#214581] text-white hover:bg-[#2e4d81]  border-2 border-transparent'>Đăng ký</button>
                        </div>
                    </div>
                </> :
                    <div className='hidden lg:flex items-center' >
                        <Menu as="div" className="relative">
                            <div className='flex items-center '>
                                <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                                    <h2 className="flex lg:px-2 xl:px-3 py-2 text-gray-600 hover:text-[#214581] font-medium text-base ">{usename}</h2>
                                    <div className="cursor-pointer">
                                        <img className='h-14 w-14 rounded-full' src="https://res.cloudinary.com/dax8xvyhi/image/upload/v1700795002/tezswzzswt8sn4sd0maf.jpg" alt="" />
                                    </div>
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                            <Link to={'/trang-ca-nhan'} className='text-gray-700 block px-4 py-2 text-sm'>
                                                Trang Cá Nhân
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <span onClick={() => Logout()} className='cursor-pointer text-gray-700 block px-4 py-2 text-sm'>
                                                Đăng Xuất
                                            </span>
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>

                }
            </div >
            <Login closeModal={closeModalLogin} showModal={isModalLogin} switchRegister={switchRegister} />
            <Register closeModal={closeModalRegister} showModal={isModalRegister} switchLogin={switchLogin} />
        </>
    )
}
