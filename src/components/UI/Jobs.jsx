import { faClose, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ENTER_ALL_INFORMATION } from '../../commom/messageConstant';

const Jobs = ({ jobs, setJos, dataJobOfServie }) => {
    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        const checked = e.target.checked;
        setFormData((prevData) => ({ ...prevData, [name]: name === 'isActive' ? checked : value }));
    };

    const clearFormData = () => {
        setFormData({ taskId: "", dayGap: "" });
    };

    const nameTask = (id) => {
        const item = dataJobOfServie.find(item => item.id === id);
        return item?.name || ''
    }

    const removeTaskById = (id) => {
        const newJobs = jobs.filter(item => item.taskId !== id);
        setJos(newJobs);
    }

    const validationTask = (id) => {
        return jobs.some(item => item.taskId === id);
    }

    const addJob = () => {
        if (validationTask(formData?.taskId)) {
            toast.warning('Bạn đã chọn một nhiệm vụ này');
            return;
        }

        if (formData?.taskId && formData?.dayGap) {
            formData.dayGap = parseInt(formData.dayGap, 10)
            setJos([...jobs, formData]);
            clearFormData()
        } else {
            toast.warning(ENTER_ALL_INFORMATION)
        }

    };

    return (
        <div className="">
            <div className='flex items-center justify-between'>
                <h2 className=" text-lg font-semibold">Danh Sách Nhiệm Vụ cho Dịch Vụ:</h2>
                <div className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() => addJob()}>
                    <FontAwesomeIcon icon={faPlus} className='h-4 w-4 ' />  Thêm Nhiệm Vụ
                </div>
            </div>
            <form className='grid grid-cols-2'>
                <div className="mb-4">
                    <label className="text-sm text-gray-600">Danh Sách Nhiệm Vụ: </label>
                    <div className='flex items-center justify-start '>
                        <select id="countries" name='taskId' required className="border rounded-lg text-sm border-gray-400 p-2 w-full" onChange={handleChange} value={formData.taskId} >
                            <option value="" disabled selected>Chọn một</option>
                            {dataJobOfServie?.map((task, index) => (
                                <option key={index} value={task.id}>{task.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="ml-4 mb-4  mt-1 ">
                    <label className="block text-sm text-gray-600">Khoảng Cách Ngày Thực Hiện:</label>
                    <div className='flex items-center justify-start '>
                        <input
                            type="number"
                            name='dayGap'
                            required
                            className="border rounded-lg text-sm border-gray-400 p-2 w-full"
                            onChange={handleChange}
                            value={formData.dayGap}
                        />
                    </div>
                </div>
            </form>
            <div className="mb-4  min-h-[205px]">
                <ul className='grid grid-cols-2 gap-2 w-full'>
                    {jobs?.map((job, index) => (
                        <div key={index} className="flex items-center justify-between shadow-lg rounded-md bg-amber-50  mt-1">
                            <div key={index} className='flex items-center p-2 '>
                                <FontAwesomeIcon icon={faStar} className='text-[12px] text-amber-400' />
                                <p className="text-sm pl-3 text-gray-900  truncate overflow-hidden max-w-[250px]">{nameTask(job?.taskId)}</p>
                                <h3 className="text-lg font-semibold ml-4">{job.dayGap}</h3>
                            </div>
                            <div className='p-2 cursor-pointer'>
                                <FontAwesomeIcon icon={faClose} className='h-4 w-4 text-red-700' onClick={() => removeTaskById(job?.taskId)} />
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Jobs;
