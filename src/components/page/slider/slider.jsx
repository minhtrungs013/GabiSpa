import React from 'react'
import { Link } from 'react-router-dom'

export default function Slider() {
    return (
        <div className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
            <div className="py-6 md:order-1 hidden md:block">
                <img className='image_custom' src="https://res.cloudinary.com/dax8xvyhi/image/upload/c_fill,h_500,w_500/v1705772414/b7hrtq1xljrctwe089kv.png" alt="" />
            </div>
            <div>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight text-[#214581]">
                    Chăm sóc mẹ và bé
                </h1>
                <p className="text-lg mt-4 text-slate-600 max-w-xl">
                    <span className="font-medium text-[#cb8a40]"> Gabi spa</span> Là dịch vụ chăm sóc Y tế tại nhà uy
                    tín hàng đầu hiện nay và được Sở Y Tế TP.HCM cấp giấy phép hoạt động Chăm sóc sau sinh theo tiêu chuẩn của Bộ Y TẾ
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link to={'/GabiSpa/dich-vu'} className='rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-[#214581] text-white hover:bg-gray-800  border-2 border-transparent flex gap-1 items-center justify-center'>Đăng Ký Ngay</Link>
                    <Link to={'/GabiSpa/dich-vu'} className='rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white border-2 border-[#214581] hover:bg-gray-100 text-[#214581]  flex gap-1 items-center justify-center'>Dịch Vụ</Link>
                </div>
            </div>
        </div>
    )
}
