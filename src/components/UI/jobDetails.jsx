import { faAlignRight, faBars, faCalendarPlus, faRotateRight, faSquareCheck, faStar, faUser, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format, parseISO } from 'date-fns'
import React, { useState } from 'react'

export default function JobDetails({ serviceDetails }) {
    const [showSpin, setShowSpin] = useState(false)
    let startDateTime = parseISO(serviceDetails?.startDatetime)
    let endDateTime = parseISO(serviceDetails?.endDatetime)
    const upodateStatusJob = () => {
        setShowSpin(true)
        setTimeout(() => {
            serviceDetails.status = true
            setShowSpin(false)
        }, 3000);
    }

    return (
        <div className='w-full px-4'>
            <div className='flex justify-between mb-4 items-center '>
                <div className='flex items-center ' >
                    <h2 className="flex-auto font-semibold text-xl text-gray-900 truncate  overflow-hidden max-w-[200px] "> <FontAwesomeIcon icon={faAlignRight} className='pr-2 ' /> {serviceDetails?.service?.nameService} {serviceDetails?.service?.nameService}{serviceDetails?.service?.nameService}{serviceDetails?.service?.nameService}</h2>
                    <div className="ml-5 flex items-center"> <FontAwesomeIcon icon={faCalendarPlus}  className='pr-2 text-gray-600' />
                        <p className="mt-0.5 text-gray-600">
                            <time dateTime={serviceDetails?.startDatetime}>
                                {format(startDateTime, 'h:mm a')}
                            </time>{' '}
                            -{' '}
                            <time dateTime={serviceDetails?.endDatetime}>
                                {format(endDateTime, 'h:mm a')}
                            </time>
                        </p>
                    </div>
                </div>
                <div className='flex items-end'>
                    <div className='flex items-center'>
                        <div onClick={() => upodateStatusJob()} className={` ${showSpin && ' !border-gray-600 !text-gray-500 min-w-[115px] !justify-center bg-gray-50 '} ${serviceDetails?.status && ' !border-green-600 !text-green-500 bg-green-50  '} border p-2 bg-amber-50 border-amber-400 text-amber-500 flex items-center rounded-lg `}>
                            {serviceDetails?.status ? <> <FontAwesomeIcon icon={faSquareCheck} className='h-6 w-6 mr-2 text-green-600 ' /> Hoàn thành </> :
                                <>
                                    {showSpin ? <FontAwesomeIcon icon={faRotateRight} spin className='h-6 w-6' /> :
                                        <>
                                            <input type="checkbox" defaultChecked={serviceDetails?.status} className='h-5 w-5 cursor-pointer mr-2' /> Đang Chờ
                                        </>
                                    }
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between my-4'>
                <div className='shadow-lg rounded-md p-2 min-w-[295px] bg-red-50'>
                    <FontAwesomeIcon icon={faUserShield} className='pr-2 text-red-500' />
                    <span className='pr-2 font-medium'>Nhân Viên Thực Hiện: </span>
                    <div className='flex items-center pl-6 py-2'>
                        <span className='pr-2 text-sm'>Họ Và Tên: </span>
                        <h3 className="flex-auto font-semibold text-gray-900"> {serviceDetails?.employee?.name} </h3>
                    </div>
                    <div className='flex items-center pl-6'>
                        <span className='pr-2 text-sm'>Số Điện Thoại: </span>
                        <h3 className="flex-auto font-semibold text-red-500"> {serviceDetails?.employee?.phoneNumber} </h3>
                    </div>
                </div>
                <div className='shadow-lg rounded-md p-2 min-w-[295px] bg-green-50'>
                    <FontAwesomeIcon icon={faUser} className='pr-2 text-green-500' />
                    <span className='pr-2 font-medium'>Khách Hàng: </span>
                    <div className='flex items-center pl-6 py-2 '>
                        <span className='pr-2 text-sm'>Họ Và Tên: </span>
                        <h3 className="flex-auto font-semibold text-gray-900"> {serviceDetails?.user?.name} </h3>
                    </div>
                    <div className='flex items-center pl-6 '>
                        <span className='pr-2 text-sm'>Số Điện Thoại: </span>
                        <h3 className="flex-auto font-semibold text-red-500"> {serviceDetails?.user?.phoneNumber} </h3>
                    </div>

                </div>
            </div>
            <div className='flex items-center'>
                <FontAwesomeIcon icon={faBars} className='pr-2 ' />
                <h3 className="font-semibold text-gray-900 ">Công Việc cần làm: </h3>
            </div>
            <ul className='grid grid-cols-2 gap-2 w-full my-4'>
                {serviceDetails?.service?.ServiceScheduleDetails?.map((schedule, index) => (
                    <li key={index} className='flex items-center p-2 py-4 shadow-lg rounded-md bg-amber-50'>
                        <FontAwesomeIcon icon={faStar} className='text-[12px] text-amber-400' />
                        <p className="text-sm pl-3 text-gray-900">{schedule}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
