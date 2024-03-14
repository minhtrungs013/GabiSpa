

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getAllUserAPI } from '../../api/service/UserService';

const ChangStatusServiceBooked = ({ formFields, onSubmit, initialData }) => {
    const [formData, setFormData] = useState({});
    const [users, setUsers] = useState([]);

    const getAllUser = () => {
        getAllUserAPI(`users`).then((res) => {
            if (res) {
                setUsers(res.data.data.filter(data => data.role === 'Nhân viên'))
            }
        }).catch((error) => {
            toast.error(error.response?.data?.message)
        })
    }

    useEffect(() => {
        getAllUser()
    }, []);

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const checked = e.target.checked;
        setFormData((prevData) => ({ ...prevData, [name]: name === 'isActive' ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-4">
            <div className={`grid ${formFields.length < 4 && '!grid-cols-2'} grid-cols-3 gap-3`}>
                {formFields.map((field) => (
                    <>
                        {field.name === 'employeeId' ?
                            <div key={field.name} className="mb-4">
                                <label htmlFor={field.name} className="text-sm  text-gray-600">{field.label}:</label>
                                <div className='flex items-center justify-start '>
                                    <select id="countries" required={field.required} name={field.name} class="border rounded-lg text-sm border-gray-400 p-2  w-[200px]" value={formData[field.name]} onChange={handleChange}>
                                        <option value="" disabled selected>Chọn một</option>
                                        {users?.map((user, index) => (
                                            <option key={index} value={user.id}  >{user.userDetail?.fullName}</option>

                                        ))}
                                    </select>
                                </div>
                            </div>
                            :
                            <div key={field.name} className="mb-4">
                                <label htmlFor={field.name} className="text-sm  text-gray-600">{field.label}:</label>
                                <div className='flex items-center justify-start '>
                                    <select id="countries" required={field.required} name={field.name} class="border rounded-lg text-sm border-gray-400 p-2 w-full" value={formData[field.name]} onChange={handleChange}>
                                        <option value='Đang chờ' disabled={'Đang chờ' === initialData?.status}>Đang chờ</option>
                                        <option value='Đang thực hiện' disabled={'Đang thực hiện' === initialData?.status}>Đang thực hiện</option>
                                        <option value='Đã hoàn thành' disabled={'Đã hoàn thành' === initialData?.status}>Đã hoàn thành</option>
                                        <option value='Đã hủy' disabled={'Đã hủy' === initialData?.status}>Đã hủy</option>
                                    </select>
                                </div>
                            </div>
                        }
                    </>
                ))}
            </div>
            <div className='flex justify-end items-baseline'>
                <button type="submit" className={`bg-blue-500 max-h-[40px] text-white px-4 py-2 rounded-lg `}>
                    Cập nhật
                </button>
            </div>
        </form >
    );
};

export default ChangStatusServiceBooked;