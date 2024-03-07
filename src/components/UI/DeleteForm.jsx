import React from 'react'

export default function DeleteForm({onCancel, onSubmit, id, title}) {
    const handleCancel = () => {
        onCancel()
    }
    const handleSubmit = () => {
        onSubmit(id)
    }
    return (
        <div>
            <h3 className='py-5'>{title}</h3>
            <div className='flex justify-end items-baseline'>
                <button onClick={handleCancel} className=" bg-red-500 max-h-[40px] min-w-24 text-white px-4 py-2 rounded-lg mr-4">
                    Hủy
                </button>
                <button onClick={handleSubmit}  className=" bg-blue-500 max-h-[40px] text-white px-4 py-2 rounded-lg ">
                    Xác Nhận
                </button>
            </div>
        </div>
    )
}
