import { faBars, faCheck, faNewspaper, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ServiceDetails() {
    return (
        <div>
            <div className="mt-16 md:mt-0 mb-4">
                <h2 className="text-2xl lg:text-2xl font-bold lg:tracking-tight text-[#214581]">
                    DỊCH VỤ CHĂM SÓC MẸ VÀ BÉ
                </h2>
            </div>
            <div className='mb-16'>
                <div className="grid grid-rows-3 grid-cols-3 gap-4 mb-5">
                    <div className="row-span-3 col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 ">
                        <div className="py-6">
                            <img className='' src="https://res.cloudinary.com/dax8xvyhi/image/upload/c_fill,h_400,w_400/v1705772414/b7hrtq1xljrctwe089kv.png" alt="" />
                        </div>
                    </div>
                    <div className="row-span-3 col-span-2 ">
                        <div className="py-6">
                            <h4 className="text-base lg:text-lg font-bold lg:tracking-tight text-[#214581]">
                                <FontAwesomeIcon className='pr-3 text-xl text-[#cb8a40]' icon={faNewspaper} /> Dịch Vụ 1
                            </h4>
                            <div className='pb-3'>
                                <div className='my-3'>
                                    <FontAwesomeIcon className='pr-3 text-lg text-[#cb8a40]' icon={faStar} />
                                    <FontAwesomeIcon className='pr-3 text-lg text-[#cb8a40]' icon={faStar} />
                                    <FontAwesomeIcon className='pr-3 text-lg text-[#cb8a40]' icon={faStar} />
                                    <FontAwesomeIcon className='pr-3 text-lg text-[#cb8a40]' icon={faStar} />
                                    <FontAwesomeIcon className='pr-3 text-lg text-[#cb8a40]' icon={faStarHalfAlt} />
                                </div>
                                <p className="my-3  text-[#214581]  leading-relaxed">Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!</p>
                                <p className='my-3 py-2 font-semibold text-xl text-[#46b252]' >300.000 VND</p>
                                <div className=''>
                                    <Link to={'/dich-vu/chi-tiet'} className='px-4 py-2 font-semibold text-sm bg-[#214581] text-white rounded-md shadow-sm' >Đặt Lịch Ngay</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="text-base lg:text-lg font-bold lg:tracking-tight text-[#214581] mb-16">
                    <FontAwesomeIcon className='pr-3 text-xl text-[#cb8a40]' icon={faBars} /> Chi tiết lịch trình của dịch vụ 1
                </h4>

            </div>
        </div>
    )
}
