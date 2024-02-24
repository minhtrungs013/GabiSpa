import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenericForm from '../../UI/GenericForm';
import Modal from '../../UI/Modal ';
import Pagination from '../../UI/Pagination';
import { columnNameBooking, dataBookingManagement, userFormFields } from '../../utils/DataForm';

export default function BookingManagement() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isUpdatingBooking, setIsUpdatingBooking] = React.useState(false);
  const [initialBookingData, setInitialBookingData] = React.useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsDelete(false);
    setInitialBookingData(null);
  };

  const submitAddOrUpdateBooking = (BookingData) => {
    if (isUpdatingBooking) {
      // Xử lý logic cập nhật người dùng
      console.log('Cập nhật người dùng:', BookingData);
    } else {
      // Xử lý logic thêm người dùng
      console.log('Thêm người dùng:', BookingData);
    }

    closeModal()
  };

  const handleUpdateBooking = (BookingId) => {
    const BookingToUpdate = {
      id: BookingId,
      fullName: 'John Doe',
      address: '123 Main Street',
      role: 'Admin',
      status: 'Active',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
      image: 'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
    };
    setInitialBookingData(BookingToUpdate);
    setIsUpdatingBooking(true);
    openModal()
  };
  return (
    <div className="w-full px-6 py-6 mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="min-h-[60vh] relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl drop-shadow-lg overflow-hidden rounded-2xl bg-clip-border">
            <div className='flex justify-between'>
              <div className="p-6 pb-0 mb-3 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h4 className='text-lg font-semibold'> Quản Lý Đặt Lịch</h4>
              </div>
              <div className="p-6 pb-0 mb-3 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              </div>
            </div>
            <div className="flex-auto px-0 pt-0 relative">
              <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      {columnNameBooking.map((columnName, index) => (
                        <th key={index} className={`${index === 0 && '!text-left '} px-6 py-3 font-bold uppercase text-center align-middle bg-transparent border-b border-gray-200 shadow-none text-base border-b-solid tracking-none whitespace-nowrap text-slate-800`}>{columnName.name}</th>
                      ))}
                      <th className="px-6 py-3 font-bold  uppercase align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-800 ">thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataBookingManagement.map((item) => (
                      <tr key={item.id}>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs px-3 py-1 font-semibold leading-tight text-slate-400">{item.User.name}</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-400">{item.Service.nameService}</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-400">{item?.Employee?.name || "..."}</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-blue-400">{item?.ScheduledDate}</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-red-400">{item?.Service.price} VND</span>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className={`${item.Status === "Hoàn Thành" ? ' from-green-600 to-lime-500 ' :
                            item.Status === "Đang thực hiện" ? 'from-orange-600 to-orange-500 ' :
                              item.Status === "Đang chờ" ? 'from-gray-600 to-gray-500 ' : 'from-red-600 to-red-500 '} min-w-[100px] bg-gradient-to-tl  px-2 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-normal  leading-none text-white`}
                          >{item.Status}</span>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparen">
                          <Link onClick={() => handleUpdateBooking(1)} className="text-xs font-semibold leading-tight text-yellow-500 mr-4"><FontAwesomeIcon icon={faPenToSquare} className='' /> Edit </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='flex justify-end mr-4 absolute bottom-0 right-0'>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={isDelete ? "Xóa Người Dùng " : isUpdatingBooking ? 'Cập nhật' : 'Thêm người dùng'}>
        <GenericForm
          formFields={userFormFields}
          onSubmit={submitAddOrUpdateBooking}
          isUpdate={isUpdatingBooking}
          initialData={initialBookingData}
        />
      </Modal>
    </div>
  )
}
