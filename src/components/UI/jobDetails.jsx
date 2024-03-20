import { faBars, faCalendarPlus, faClock, faRectangleXmark, faRotateRight, faSquareCheck, faStar, faUser, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addMinutes, format, getHours, getMinutes, isSameDay } from 'date-fns'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { CURRENT_DATE, VALIDATION_DATE_TIME, formatDate, subtract7HoursFromDate } from '../utils/utils'

export default function JobDetails({ serviceDetails, meeting }) {
    const [showSpin, setShowSpin] = useState(false)
    let startDateTime = meeting.startDateTime
    let endDateTime = meeting.endDateTime
    const currentHour = getHours(CURRENT_DATE());
    const currentMinute = getMinutes(CURRENT_DATE());

    const updateStatusJob = () => {
        const formatStartDateTime = new Date(endDateTime)
        formatStartDateTime.setHours(formatStartDateTime.getHours() - 7)

        const startHour = formatStartDateTime.setHours();
        const startMinute = formatStartDateTime.getMinutes();

        const formatEndDateTime = new Date(endDateTime)
        formatEndDateTime.setHours(formatEndDateTime.getHours() - 7)
        const endTime = addMinutes(formatEndDateTime, 30)

        if (meeting.isCompleted) {
            return
        } else if (!isSameDay(formatDate(endDateTime), CURRENT_DATE())) {
            return toast.warning("Bạn không thể cập nhật trạng thái khi chưa đến ngày làm việc")
        } else {
            if (currentHour < startHour || (currentHour === startHour && currentMinute < startMinute)) {
                return toast.warning("Bạn không thể cập nhật trạng thái khi chưa đến giờ làm việc")
            } else if (currentHour > getHours(endTime) || (currentHour === getHours(endTime) && currentMinute < getMinutes(endTime))) {
                return toast.error("Bạn không thể cập nhật trạng thái khi đã quá hạn")
            } else {
                setShowSpin(true)
                setTimeout(() => {
                    meeting.isCompleted = true
                    setShowSpin(false)
                }, 3000);
            }
        }
    }

    const handlerTask = (startDateTime) => {
        const jobs = serviceDetails?.service?.jobs
        const difference = serviceDetails?.service?.workingDay;
        const tasks = []
        if (!jobs) return
        for (let i = 0; i < jobs.length; i++) {
            let startDate = new Date(serviceDetails?.startDate);
            for (let j = 0; j <= difference; j = j + jobs[i].dayGap) {
                tasks.push({
                    task: jobs[i].task,
                    dayWorking: formatDate(startDate)
                })
                startDate = addMinutes(startDate, ((jobs[i].dayGap + 1) * 24 * 60))
            }
        }
        return tasks.filter(task => task.dayWorking === formatDate(startDateTime)) || []
    }

    return (
        <div className='w-full px-4 mt-2'>
            <div className='flex justify-between mb-4 items-center '>
                <div className='flex items-center ' >
                    <h2 className="flex-auto font-semibold text-xl text-gray-900 truncate overflow-hidden max-w-[200px] "> <FontAwesomeIcon icon={faClock} className='pr-2 ' /> {serviceDetails?.service?.nameService} </h2>
                    <div className=" ml-5 flex items-center"> <FontAwesomeIcon icon={faCalendarPlus} className='pr-2 text-gray-600' />
                        <p className="mt-0.5 text-gray-600">
                            <time dateTime={subtract7HoursFromDate(meeting?.startDateTime)}>
                                {format(subtract7HoursFromDate(meeting?.startDateTime), 'h:mm a')}
                            </time>{' '}
                            -{' '}
                            <time dateTime={subtract7HoursFromDate(meeting?.endDateTime)}>
                                {format(subtract7HoursFromDate(meeting?.endDateTime), 'h:mm a')}
                            </time>
                        </p>
                    </div>
                </div>
                <div className='flex items-end'>
                    <div className='flex items-center'>
                        <div onClick={() => updateStatusJob()} className={` ${showSpin && ' !border-gray-600 !text-gray-500 min-w-[115px] !justify-center bg-gray-50 '} ${!meeting?.isCompleted && !VALIDATION_DATE_TIME(startDateTime, endDateTime) && ' !border-red-600 !text-red-500 bg-red-50  '} ${meeting?.isCompleted && ' !border-green-600 !text-green-500 bg-green-50  '} border p-1 lg:p-2 bg-amber-50 border-amber-400 text-amber-500 flex items-center rounded-lg `}>
                            {meeting?.isCompleted ? <> <FontAwesomeIcon icon={faSquareCheck} className='h-6 w-6 mr-2 text-green-600 ' /> Hoàn thành </> :
                                !meeting?.isCompleted && !VALIDATION_DATE_TIME(startDateTime, endDateTime) ?
                                    <>
                                        <FontAwesomeIcon icon={faRectangleXmark} className='h-6 w-6 mr-2 text-red-600 ' /> Đã Hủy
                                    </>
                                    : <>
                                        {showSpin ? <FontAwesomeIcon icon={faRotateRight} spin className='h-6 w-6' /> :
                                            <>
                                                <input type="checkbox" checked={meeting?.isCompleted} className='h-5 w-5 cursor-pointer mr-2' /> Đang Chờ
                                            </>
                                        }
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='block lg:flex justify-between my-4'>
                <div className='mb-2 shadow-lg rounded-md p-2 lg:min-w-[295px] w-full bg-red-50'>
                    <FontAwesomeIcon icon={faUserShield} className='pr-2 text-red-500' />
                    <span className='pr-2 font-medium'>Nhân Viên Thực Hiện: </span>
                    <div className='flex items-center pl-6 py-2'>
                        <span className='pr-2 text-sm'>Họ Và Tên: </span>
                        <h3 className="flex-auto font-semibold text-gray-900"> {serviceDetails?.employee?.userDetail?.fullName} </h3>
                    </div>
                    <div className='flex items-center pl-6'>
                        <span className='pr-2 text-sm'>Số Điện Thoại: </span>
                        <h3 className="flex-auto font-semibold text-red-500"> {serviceDetails?.employee?.userDetail?.phone} </h3>
                    </div>
                </div>
                <div className='mb-2 shadow-lg rounded-md p-2 lg:min-w-[295px] bg-green-50'>
                    <FontAwesomeIcon icon={faUser} className='pr-2 text-green-500' />
                    <span className='pr-2 font-medium'>Khách Hàng: </span>
                    <div className='flex items-center pl-6 py-2 '>
                        <span className='pr-2 text-sm'>Họ Và Tên: </span>
                        <h3 className="flex-auto font-semibold text-gray-900"> {serviceDetails?.customer?.userDetail?.fullName} </h3>
                    </div>
                    <div className='flex items-center pl-6 '>
                        <span className='pr-2 text-sm'>Số Điện Thoại: </span>
                        <h3 className="flex-auto font-semibold text-red-500"> {serviceDetails?.customer?.userDetail?.phone} </h3>
                    </div>

                </div>
            </div>
            <div className='flex items-center'>
                <FontAwesomeIcon icon={faBars} className='pr-2 ' />
                <h3 className="font-semibold text-gray-900 ">Công Việc cần làm: </h3>
            </div>
            <ul className='grid grid-cols-2 gap-2 w-full my-4'>
                {handlerTask(startDateTime)?.map((job, index) => (
                    <li key={index} className='flex items-center p-2 py-4 shadow-lg rounded-md bg-amber-50 '>
                        <FontAwesomeIcon icon={faStar} className='text-[12px] text-amber-400' />
                        <p className="text-sm pl-3 text-gray-900  truncate overflow-hidden max-w-[250px]">{job?.task?.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
