import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllServiceBookedAPI, updateStatusServiceBookedAPI } from '../../../api/service/serviceBooked';
import Modal from '../../UI/Modal ';
import Pagination from '../../UI/Pagination';
import ChangStatusServiceBooked from '../../UI/changStatusServiceBooked';
import { columnNameBooking, serviceBookedFormFields } from '../../utils/DataForm';
import { formatCurrency, formatDate } from '../../utils/utils';

export default function BookingManagement() {
  const [dataServiceBooked, setDataServiceBooked] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialBookingData, setInitialBookingData] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(6);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setInitialBookingData(null);
  };

  const submitUpdateBooking = (data) => {
    updateStatusServiceBookedAPI(`services-booked/assign-job/${data?.employeeId}/employee-id/${data?.bookedId}/booked-id/${data?.status}/booked-status`, data).then((res) => {
      if (res) {
        closeModal()
        getAllServiceBooked(currentPage, totalPages)
      }
    }).catch((error) => {
      closeModal()
      toast.error(error.response?.data?.message)
    })

  };

  const handleUpdateBooking = (serviceBooked) => {
    const data = {
      bookedId: serviceBooked.id,
      employeeId: '',
      status: serviceBooked.status
    }
    setInitialBookingData(data);
    openModal()
  };

  const getAllServiceBooked = (currentPage) => {
    const data = {
      page: currentPage,
      limit: 6,
      sort: "createdAt",
      order: "desc"
    }

    getAllServiceBookedAPI(`services-booked/get-many`, data).then((res) => {
      if (res) {
        setDataServiceBooked(res.data.data?.items)
        setTotalPages(res.data.data?.totalPages)
        setCurrentPage(res.data.data?.page)
      }
    }).catch((error) => {
      toast.error(error.response?.data?.message)
    })
  }

  useEffect(() => {
    getAllServiceBooked(currentPage, totalPages)
  }, [currentPage, totalPages]);

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
              <div className="p-0 overflow-x-auto mb-20">
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
                    {dataServiceBooked?.map((item) => (
                      <tr key={item.id}>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs px-3 py-1 font-semibold leading-tight text-slate-400">{item.customer.userDetail.fullName}</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-400">{item.service.name}</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-400">{item?.employee?.userDetail?.fullName || "..."}</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-blue-400">{formatDate(item?.startDate)}</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-red-400">{formatCurrency(item?.service?.price)} </span>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className={`${item.status === "Hoàn thành" ? ' from-green-600 to-lime-500 ' :
                            item.status === "Đang thực hiện" ? 'from-orange-600 to-orange-500 ' :
                              item.status === "Đang chờ" ? 'from-gray-600 to-gray-500 ' : 'from-red-600 to-red-500 '} min-w-[100px] bg-gradient-to-tl  px-2 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-normal  leading-none text-white`}
                          >{item.status}</span>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparen">
                          <Link onClick={() => handleUpdateBooking(item)} className="text-xs font-semibold leading-tight text-yellow-500 mr-4"><FontAwesomeIcon icon={faPenToSquare} className='' /> Edit </Link>
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
      <Modal isOpen={isModalOpen} onClose={closeModal} title={'Cập nhật'}>
        <ChangStatusServiceBooked
          formFields={serviceBookedFormFields}
          onSubmit={submitUpdateBooking}
          initialData={initialBookingData}
        />
      </Modal>
    </div>
  )
}
