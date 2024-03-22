import { faCalendar, faClose, faCreditCard, faCubes, faEnvelopesBulk, faGears, faListCheck, faPowerOff, faStore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { clearAuth } from '../../redux/slice/authSlice'
import { clearUserSlice, setLoggedIn, setRole, setUsername } from '../../redux/slice/userSlice'
import { persistor } from '../../redux/store'
import { ROLE_ADMIN, ROLE_EMPLOYEE, SECRET_ROLE } from '../../commom/messageConstant'
import { compareData } from '../utils/utils'

const SlideNav = [
    {
        id: 0,
        title: "Quản Lý Chung",
        path: "/admin/admin-management",
        role: ROLE_ADMIN,
        icon: faStore
    },
    {
        id: 1,
        title: "Quản Lý Người Dùng",
        path: "/admin/user-management",
        role: ROLE_ADMIN,
        icon: faEnvelopesBulk
    },
    {
        id: 2,
        title: "Quản Lý Dịch Vụ",
        path: "/admin/service-management",
        role: ROLE_ADMIN,
        icon: faCreditCard
    },
    {
        id: 3,
        title: "Quản Lý Danh Mục",
        path: "/admin/categories-management",
        role: ROLE_ADMIN,
        icon: faGears
    },
    {
        id: 4,
        title: "Quản Lý Nhiệm Vụ",
        path: "/admin/task-management",
        role: ROLE_ADMIN,
        icon: faListCheck
    },
    {
        id: 5,
        title: "Quản Lý Tin Tức",
        path: "/admin/news-management",
        role: ROLE_ADMIN,
        icon: faCubes
    },
    {
        id: 6,
        title: "Quản Lý Đặt Lịch",
        path: "/admin/booking-management",
        role: ROLE_ADMIN,
        icon: faCalendar
    },
    {
        id: 7,
        title: "Chi Tiết công việc",
        path: "/admin/calendar-management",
        role: ROLE_ADMIN,
        icon: faCalendar
    },
    {
        id: 8,
        title: "Chi Tiết công việc",
        path: "/admin/calendar-management",
        role: ROLE_EMPLOYEE,
        icon: faCalendar
    },
]

export default function SlideBar({ handleShowPanigate }) {
    const location = useLocation();
    const role = useSelector((state) => state.userReducer.role)
    const param = location.pathname;
    const dispatch = useDispatch();

    const Logout = () => {
        persistor.purge()
        dispatch(setLoggedIn(false))
        dispatch(setUsername(null))
        dispatch(setRole(''))
        dispatch(clearUserSlice())
        dispatch(clearAuth())
    }

    return (
        <aside className="max-w-[80%]  lg:max-w-[16.666667%] ease-nav-brand lg:ml-0 z-990 fixed inset-y-0 lg:my-4 ml-4 block w-full  flex-wrap items-center justify-between overflow-y-auto lg:rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent">
            <div className="flex justify-between items-center h-20">
                <div className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700" >
                    <img src="https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png" className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8" alt="main_logo" />
                    <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">GabiSpa Admin</span>
                </div>
                <span className="lg:hidden text-sm ease-soft leading-5.6  z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                    <FontAwesomeIcon icon={faClose} className='h-4 w-4 text-2xl pr-1' onClick={() => handleShowPanigate()} />
                </span>
            </div>
            <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
            <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
                <ul className="flex flex-col pl-0 mb-0 mt-3">
                    {SlideNav?.map((nav) => (
                        <> {compareData(nav.role, role, SECRET_ROLE) &&
                            <li className="mt-0.5 w-full" key={nav.id}>
                                <Link to={nav?.path} onClick={() => handleShowPanigate()} className={`py-3 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors  ${nav?.path === param && "shadow-md shadow-slate-300 ease-nav-brand rounded-lg bg-white font-semibold text-slate-700 "}`}>
                                    <div className={`${nav?.path === param ? " bg-gradient-to-tl from-blue-600 to-cyan-400 shadow-soft-2xl " : " shadow-slate-300 shadow-md "}  mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5`}>
                                        <FontAwesomeIcon className={` ${nav?.path === param && "text-white "} h-3 w-3 text-xl`} icon={nav?.icon} />
                                    </div>
                                    <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">{nav?.title}</span>
                                </Link>
                            </li>
                        }
                        </>
                    ))}
                    {/* account */}
                    <li className="w-full mt-4">
                        <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase opacity-60">Account pages</h6>
                    </li>
                    {/* <li className="mt-0.5 w-full">
                        <Link className="py-3 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" >
                            <div className="shadow-slate-300 shadow-md mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                <FontAwesomeIcon icon={faUser} className='h-3 w-3 text-2xl ' />
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Profile</span>
                        </Link>
                    </li>
                    <li className="mt-0.5 w-full">
                        <Link className="py-3 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" >
                            <div className="shadow-slate-300 shadow-md mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                <FontAwesomeIcon icon={faRightToBracket} className='h-3 w-3 text-2xl ' />
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Sign In</span>
                        </Link>
                    </li> */}
                    <li className="mt-0.5 w-full">
                        <Link to={'/'} className="py-3 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" onClick={() => Logout()} >
                            <div className="shadow-slate-300 shadow-md mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                <FontAwesomeIcon icon={faPowerOff} className='h-3 w-3 text-2xl ' />
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">LogOut</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>

    )
}
