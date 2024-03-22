import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllCategoryAPI } from '../../../api/service/categories';
import { getAllServiceSpaAPI } from '../../../api/service/serviceSpaService';
import { setServiceId } from '../../../redux/slice/serviceSlice';
import { formatCurrency } from '../../utils/utils';
export default function Service() {
    const dispatch = useDispatch();
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
        getAllServiceSpaAPI(`services/get-many`).then((res) => {
            if (res) {
                setServiceSpas(res.data.data.items)
            }
        }).catch((error) => {
            toast.error(error.response?.data?.message)
        })
    }
    const setServiceIdRedux = (id) => {
        dispatch(setServiceId(id))
    }

    useEffect(() => {
        getAllCategory()
        getAllServiceSpa()
    }, []);

    return (
        <div>
            <Helmet>
                <title>Gabi Spa - dịch vụ</title>
                <link rel="Gabi Spa - dịch vụ" href="https://gabi-spa.vercel.app/dich-vu" />
            </Helmet>
            <div className="mt-16 md:mt-0 mb-4">
                <h2 className="text-2xl lg:text-2xl font-bold lg:tracking-tight text-[#214581]">
                    DỊCH VỤ CHĂM SÓC MẸ VÀ BÉ
                </h2>
            </div>
            {categories?.map((category) => (
                <div className='mb-16' key={category.id}>
                    <h4 className="text-base lg:text-xl font-bold lg:tracking-tight text-[#214581]">
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
                                                <h2 className="one-line-paragraph font-bold text-lg  text-[#214581]">{item.name}</h2>{" "}
                                                <p className="two-line-paragraph  text-[#214581] mt-2 leading-relaxed">{item.description}</p>
                                                <p className='py-2 font-semibold text-base text-[#46b252]' >{formatCurrency(item?.price)}</p>
                                            </div>
                                            <div className='absolute right-3 bottom-[10px] flex justify-end'>
                                                <Link to={'/dich-vu/chi-tiet'} onClick={() => setServiceIdRedux(item.id)}
                                                    className='rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2 bg-[#214581] text-white hover:bg-[#2e4d81]  border-2 border-transparent' >Xem Chi Tiết</Link>
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