import { faBars, faCircle, faNewspaper, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { getServiceSpaByIdAPI } from '../../../api/service/serviceSpaService'
import Modal from '../../UI/Modal '
import ConfirmBooked from '../../UI/confirmBooked'
import Image from '../../UI/image'
import { formatCurrency } from '../../utils/utils'

export default function ServiceDetails() {
    const serviceId = useSelector((state) => state.serviceReducer.serviceId)
    const [serviceById, setServiceById] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getServiceById = (serviceId) => {
        getServiceSpaByIdAPI(`services/${serviceId}/service-id`).then((res) => {
            if (res) {
                setServiceById(res.data.data)
            }
        }).catch((error) => {
            toast.error(error.response?.data?.message)
        })
    }

    const openModal = () => {
        // if (!isLoggedIn) {
        //     toast.error("Bạn phải đăng nhập để đặt dịch vụ")
        //     return
        // }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };




    useEffect(() => {
        getServiceById(serviceId)
    }, [serviceId]);

    return (
        <div>
            <div className="mt-16 md:mt-0 mb-4">
                <h2 className="text-2xl lg:text-2xl font-bold lg:tracking-tight text-[#214581]">
                    DỊCH VỤ CHĂM SÓC MẸ VÀ BÉ
                </h2>
            </div>
            <div className='mb-16'>
                <div className="grid md:grid-rows-3 md:grid-cols-3 sm:grid-rows-2 sm:grid-cols-2 gap-4 mb-5">
                    <div className="row-span-3 col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 ">
                        <Image images={serviceById.images} />
                    </div>
                    <div className="row-span-3 col-span-2 ">
                        <div className="py-6">
                            <h4 className="text-base lg:text-lg font-bold lg:tracking-tight text-[#214581]">
                                <FontAwesomeIcon className='pr-3 text-xl text-[#cb8a40]' icon={faNewspaper} /> {serviceById.name}
                            </h4>
                            <div className='pb-3'>
                                <div className='my-3'>
                                    <FontAwesomeIcon className='pr-3 text-lg text-[#cb8a40]' icon={faStar} />
                                    <FontAwesomeIcon className='pr-3 text-lg text-[#cb8a40]' icon={faStar} />
                                    <FontAwesomeIcon className='pr-3 text-lg text-[#cb8a40]' icon={faStar} />
                                    <FontAwesomeIcon className='pr-3 text-lg text-[#cb8a40]' icon={faStar} />
                                    <FontAwesomeIcon className='pr-3 text-lg text-[#cb8a40]' icon={faStarHalfAlt} />
                                </div>
                                <p className="my-3  text-[#214581]  leading-relaxed"> {serviceById.description}</p>
                                <p className='my-3 py-2 font-semibold text-xl text-[#46b252]' >{formatCurrency(serviceById?.price)}</p>
                                <div className=''>
                                    <button onClick={openModal} className='rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2 bg-[#214581] text-white hover:bg-[#2e4d81]  border-2 border-transparent' >Đặt Lịch Ngay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="text-base lg:text-lg font-bold lg:tracking-tight text-[#214581] mb-5">
                    <FontAwesomeIcon className='pr-3 text-xl text-[#cb8a40]' icon={faBars} /> Chi tiết lịch trình của  {serviceById.name}
                </h4>
                <div className='pl-5 '>
                    {serviceById.jobs?.map((job) => (
                        <p className='mb-2'><FontAwesomeIcon className='pr-3 text-[5px] pb-[3px] text-black' icon={faCircle} />
                            {job.task?.name}
                        </p >
                    ))}
                </div>
                {/* <div dangerouslySetInnerHTML={{ __html: aaa }} /> */}
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} title={'Xác Nhận Đặt Lịch'}>
                <ConfirmBooked dataService={serviceById} onClose={closeModal} />

            </Modal>
        </div>
    )
}
