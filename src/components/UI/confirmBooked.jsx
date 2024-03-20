import { faNewspaper, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isBefore, isSameDay } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getUserByIdAPI } from '../../api/service/UserService';
import { serviceBookedAPI } from '../../api/service/serviceSpaService';
import { ServiceBooked, UserDetails } from '../utils/DataForm';
import { CURRENT_DATE, convertMinutesToHours, formatCurrency } from '../utils/utils';

export default function ConfirmBooked({ onClose, dataService, }) {
    const idUser = useSelector(state => state.userReducer.idUser);
    const [date, setDate] = useState(null)
    const [userById, setUserById] = useState(UserDetails);

    const HandleServiceBooked = () => {
        if (date === null) {
            toast.error("Vui lòng chọn ngày bắt đầu dịch vụ")
            return
        }
        const newData = new Date(date)
        if (isBefore(newData, CURRENT_DATE()) || isSameDay(CURRENT_DATE(), newData)) {
            toast.error("Ngày bắt đầu dịch vụ không hợp lệ")
            return
        }
        ServiceBooked.customerId = idUser
        ServiceBooked.serviceId = dataService.id
        ServiceBooked.startDate = date

        serviceBookedAPI(`services-booked`, ServiceBooked)
            .then((response) => {
                if (response) {
                    toast.success("Đặt dịch vụ thành công")
                    onClose()
                }
            }).catch((error) => {
                toast.error(error.response?.data?.message)
            })
    }

    const getUserById = (idUser) => {
        getUserByIdAPI(`users/get-user-detail/${idUser}/user-id`).then((res) => {
            if (res) {
                setUserById(res.data.data)
                setUserById((item) => ({ ...item, dateOfBirth: res.data.data?.dateOfBirth ? res.data.data.dateOfBirth.slice(0, 10) : '' }))
            }
        }).catch((error) => {
            toast.error(error.response?.data?.message)
        })
    }

    const totalWorkingTimeInMinutes = dataService.jobs.reduce((total, item) => {
        return total + item.task.workingTimePerDay;
    }, 0);

    useEffect(() => {
        getUserById(idUser)
    }, [idUser]);
    return (
        <div className=''>
            <div className='overflow-y-auto sm:block md:block max-h-[450px]  lg:flex lg:justify-between my-4'>
                <div className='shadow-lg rounded-md p-2 bg-sky-50 mb-3 mx-2'>
                    <FontAwesomeIcon icon={faUserShield} className='pr-2 text-red-500' />
                    <span className='pr-2 font-medium'>Thông Tin Khách Hàng: </span>
                    <div className='flex items-center lg:pl-6 sm:pl-2 py-1'>
                        <span className='pr-2 text-sm text-[#214581] font-medium'>Họ Và Tên: </span>
                        <h3 className="flex-auto font-normal text-gray-900"> {userById.fullName} </h3>
                    </div>
                    <div className='flex items-center lg:pl-6 sm:pl-2 py-1'>
                        <span className='pr-2 text-sm text-[#214581] font-medium'>Số Điện Thoại: </span>
                        <h3 className="flex-auto font-normal text-gray-900">  {userById.phone} </h3>
                    </div>
                    <div className='flex items-center lg:pl-6 sm:pl-2 py-1'>
                        <span className='pr-2 text-sm text-[#214581] font-medium'>Địa Chỉ: </span>
                        <h3 className="flex-auto font-normal text-gray-900"> {userById.address} </h3>
                    </div>
                    <div className='flex items-center lg:pl-6 sm:pl-2 py-1'>
                        <span className='pr-2 text-sm text-[#214581] font-medium'>Email: </span>
                        <h3 className="flex-auto font-normal text-gray-900"> {userById.email} </h3>
                    </div>
                    <div className='flex items-center lg:pl-6 sm:pl-2 py-1'>
                        <span className='pr-2 text-sm text-[#214581] font-medium'>Tuổi: </span>
                        <h3 className="flex-auto font-normal text-gray-900"> {userById.age} </h3>
                    </div>
                    <div className='flex items-center lg:pl-6 sm:pl-2 py-1'>
                        <span className='pr-2 text-sm text-[#214581] font-medium'>Ngày Sinh: </span>
                        <h3 className="flex-auto font-normal text-gray-900"> {userById.dateOfBirth} </h3>
                    </div>
                </div>
                <div className='shadow-lg rounded-md p-2 bg-green-50 mb-3 mx-2' >
                    <FontAwesomeIcon icon={faNewspaper} className='pr-2 text-green-500' />
                    <span className='pr-2 font-medium'>Thông Tin Dịch Vụ: </span>
                    <div className='flex items-center lg:pl-6 sm:pl-2 py-2 '>
                        <span className='pr-2 text-sm text-[#214581] font-medium '>Tên Dịch Vụ: </span>
                        <h3 className="flex-auto font-normal text-gray-900">{dataService?.name}</h3>
                    </div>
                    <div className='flex lg:pl-6 sm:pl-2'>
                        <span className='pr-2 text-sm text-[#214581] font-medium '>Mô Tả: </span>
                        <h3 className="flex-auto font-normal text-gray-900 max-w-[400px]">{dataService?.description}</h3>
                    </div>
                    <div className='flex items-center lg:pl-6 sm:pl-2 py-2 '>
                        <span className='pr-2 text-sm text-[#214581] font-medium '>Giá: </span>
                        <h3 className="flex-auto font-medium text-red-600">{formatCurrency(dataService?.price)}</h3>
                    </div>
                    <div className='flex items-center lg:pl-6 sm:pl-2 py-2 '>
                        <span className='pr-2 text-sm text-[#214581] font-medium '>Tổng thực hiện: </span>
                        <h3 className="flex-auto font-normal text-gray-900">{dataService?.workingDay} Ngày</h3>
                    </div>
                    <div className='flex items-center lg:pl-6 sm:pl-2 py-2 '>
                        <span className='pr-2 text-sm text-[#214581] font-medium '>Thời gian thực hiện: </span>
                        <h3 className="flex-auto font-normal text-gray-900">{convertMinutesToHours(totalWorkingTimeInMinutes)} </h3>
                    </div>
                    <div className='flex items-center lg:pl-6 sm:pl-2 py-2 '>
                        <span className='pr-2 text-sm text-[#214581] font-medium '>Ngày bắt đầu: </span>
                        <input type="datetime-local" required={true} className="border rounded-lg text-sm border-gray-400 p-2 w-[190px] " onChange={(e) => setDate(e.target.value)} />
                    </div>

                </div>
            </div>
            <div className='flex justify-end items-baseline'>
                <button onClick={onClose} className="min-w-[108px] rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 mr-3  text-black border-[1px] border-[#2e4d81]">
                    Hủy
                </button>
                <button onClick={HandleServiceBooked} className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2 bg-[#214581] text-white hover:bg-[#2e4d81]  border-2 border-transparent">
                    Xác Nhận
                </button>
            </div>
        </div>
    )
}