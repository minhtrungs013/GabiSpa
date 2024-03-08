import { faCalendar, faCreditCard, faCubes, faEnvelopesBulk, faGears, faListCheck, faPowerOff, faStore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { clearUserSlice, setLoggedIn, setRole, setUsername } from '../../redux/slice/userSlice'
import { persistor } from '../../redux/store'
import { clearAuth } from '../../redux/slice/authSlice'

const SlideNav = [
    {
        id: 0,
        title: "Quản Lý Chung",
        path: "/GabiSpa/admin/admin-management",
        icon: faStore
    },
    {
        id: 1,
        title: "Quản Lý Người Dùng",
        path: "/GabiSpa/admin/user-management",
        icon: faEnvelopesBulk
    },
    {
        id: 2,
        title: "Quản Lý Dịch Vụ",
        path: "/GabiSpa/admin/service-management",
        icon: faCreditCard
    },
    {
        id: 3,
        title: "Quản Lý Danh Mục",
        path: "/GabiSpa/admin/categories-management",
        icon: faGears
    },
    {
        id: 4,
        title: "Quản Lý Nhiệm Vụ",
        path: "/GabiSpa/admin/task-management",
        icon: faListCheck
    },
    {
        id: 5,
        title: "Quản Lý Tin Tức",
        path: "/GabiSpa/admin/news-management",
        icon: faCubes
    },
    {
        id: 6,
        title: "Quản Lý Đặt Lịch",
        path: "/GabiSpa/admin/booking-management",
        icon: faCalendar
    },
    {
        id: 7,
        title: "Chi Tiết công việc",
        path: "/GabiSpa/admin/calendar-management",
        icon: faCalendar
    },
]

export default function SlideBar() {
    const location = useLocation();
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
        <aside className="max-w-[16.666667%] ease-nav-brand lg:ml-0 z-990 fixed inset-y-0 my-4 ml-4 block w-full  flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent">
            <div className="h-20">
                <i className="absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden" sidenav-close />
                <Link className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700" >
                    <img src="https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png" className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8" alt="main_logo" />
                    <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">Soft UI Dashboard</span>
                </Link>
            </div>
            <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
            <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
                <ul className="flex flex-col pl-0 mb-0">
                    {SlideNav?.map((nav) => (
                        <li className="mt-0.5 w-full" key={nav.id}>
                            <Link to={nav?.path} className={`py-3 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors  ${nav?.path === param && "shadow-md shadow-slate-300 ease-nav-brand rounded-lg bg-white font-semibold text-slate-700 "}`}>
                                <div className={`${nav?.path === param ? " bg-gradient-to-tl from-blue-600 to-cyan-400 shadow-soft-2xl " : " shadow-slate-300 shadow-md "}  mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5`}>
                                    <FontAwesomeIcon className={` ${nav?.path === param && "text-white "} h-3 w-3 text-xl`} icon={nav?.icon} />
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">{nav?.title}</span>
                            </Link>
                        </li>
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
                        <Link to={'/GabiSpa'} className="py-3 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" onClick={() => Logout()} >
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
