import React from 'react';
import { Link } from 'react-router-dom';
const menuitems = [
    {
        id: 0,
        title: "Dịch vụ",
        path: "/dich-vu",
    },
    {
        id: 1,
        title: "Công Việc",
        path: "/cong-viec",
    },
    {
        id: 2,
        title: "Tin Tức",
        path: "/tin-tuc",
    },
    {
        id: 3,
        title: "Liên Hệ",
        path: "/lien-he",
    },
];

export default function Navbar() {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center my-5'>
            <div className="flex w-full lg:w-auto items-center justify-between">
                <Link to={'/'} className="text-lg">
                    <img className='' src="https://res.cloudinary.com/dax8xvyhi/image/upload/c_fill,h_90,w_250/v1705774032/mdggvkgqlr2osrxdt1hh.png" alt="" />
                </Link>
            </div>
            <nav className="hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0">
                <ul className="flex flex-col lg:flex-row lg:gap-3">
                    {menuitems.map((item) => (
                        <li key={item.id}>
                            <Link
                                to={`${item.path}`}
                                className="flex lg:px-3 py-2 text-gray-600 hover:text-[#214581] font-medium text-xl ">
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <div className="hidden lg:flex items-center gap-4">
                    <Link to={'/'} >Đăng nhập</Link>
                    <Link to={'/'} size="md" className='rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-[#214581] text-white hover:bg-[#2e4d81]  border-2 border-transparent'>Đăng ký</Link>
                </div>
            </div>
        </div >
    )
}