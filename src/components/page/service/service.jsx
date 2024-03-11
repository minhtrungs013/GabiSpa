import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllCategoryAPI } from '../../../api/service/categories';
import { getAllServiceSpaAPI } from '../../../api/service/serviceSpaService';

export default function Service() {
    const [categories, setCategories] = useState([]);
    const [serviceSpas, setServiceSpas] = useState([]);

    const getAllCategory = () => {
        getAllCategoryAPI(`service-categories`).then((res) => {
            if (res) {
                setCategories(res.data.data)
            }
        }).catch((error) => {
            toast.error(error.response?.data?.message)
        })
    }
    const getAllServiceSpa = () => {
        getAllServiceSpaAPI(`services`).then((res) => {
            if (res) {
                setServiceSpas(res.data.data)
            }
        }).catch((error) => {
            toast.error(error.response?.data?.message)
        })
    }


    useEffect(() => {
        getAllCategory()
        getAllServiceSpa()
    }, []);

    return (
        <div>
            <div className="mt-16 md:mt-0 mb-4">
                <h2 className="text-2xl lg:text-2xl font-bold lg:tracking-tight text-[#214581]">
                    DỊCH VỤ CHĂM SÓC MẸ VÀ BÉ
                </h2>
            </div>
            {categories?.map((category) => (
                <div className='mb-16' key={category.id}>
                    <h4 className="text-base lg:text-lg font-bold lg:tracking-tight text-[#214581]">
                        <FontAwesomeIcon className='pr-3 text-xl text-[#cb8a40]' icon={faBars} />{category.name}
                    </h4>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-10 gap-10">
                        {
                            serviceSpas.map((item) => (
                                <>
                                    {item?.category?.id === category.id &&
                                        <div className="relative flex gap-4 items-start shadow-md rounded-lg p-3 pb-8 " key={item.id}>
                                            <div className="mt-1  shrink-0 flex justify-center">
                                                <img className=' max-w-[120px] max-h-[120px]' src={item.images[0]} alt="" />
                                            </div>
                                            <div className='pb-3'>
                                                <h2 className="one-line-paragraph font-bold text-xl  text-[#214581]">{item.name}</h2>{" "}
                                                <p className="two-line-paragraph  text-[#214581] mt-2 leading-relaxed">{item.description}</p>
                                                <p className='py-2 font-semibold text-base text-[#46b252]' >300.000 VND</p>
                                            </div>
                                            <div className='absolute right-3 bottom-[10px] flex justify-end'>
                                                <Link to={'/GabiSpa/dich-vu/chi-tiet'} className='px-4 py-2 font-semibold text-sm bg-[#214581] text-white rounded-md shadow-sm' >Xem Chi Tiết</Link>
                                            </div>
                                        </div>
                                    }
                                </>
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}
