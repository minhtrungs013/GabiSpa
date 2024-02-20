import { faPenToSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteForm from '../../UI/DeleteForm';
import GenericForm from '../../UI/GenericForm';
import Modal from '../../UI/Modal ';

const uerviceFormFields = [
  { name: 'fullName', label: 'Họ và tên', required: true, textrequired: "Vui lòng điền họ và tên" },
  { name: 'address', label: 'Địa chỉ', required: true, textrequired: "Vui lòng điền Địa chỉ" },
  { name: 'role', label: 'Quyền', required: true, textrequired: "Vui lòng điền Quyền" },
  { name: 'status', label: 'Trạng thái', required: true, textrequired: "Vui lòng điền Trạng thái" },
  { name: 'email', label: 'Email', type: 'email', required: true, textrequired: "Vui lòng điền Email" },
  { name: 'phoneNumber', label: 'Số điện thoại', type: 'tel', required: true, textrequired: "Vui lòng điền Số điện thoại" },
  { name: 'image', label: 'image', type: 'file', required: true, textrequired: "Vui lòng điền Email" },
];

export default function ServiceManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isUpdatingService, setIsUpdatingService] = React.useState(false);
  const [initialServiceData, setInitialServiceData] = React.useState(null)

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsDelete(false);
    setInitialServiceData(null);
  };

  const submitAddOrUpdateService = (serviceData) => {
    if (isUpdatingService) {
      console.log('Cập nhật người dùng:', serviceData);
    } else {
      console.log('Thêm người dùng:', serviceData);
    }
    closeModal()
  };

  const handleAddService = () => {
    setIsUpdatingService(false);
    setInitialServiceData(null);
    openModal()
  };

  const DeleteService = () => {
    setIsDelete(true)
    openModal()
  };

  const submitDeleteService = (serviceId) => {
    console.log('xóa người dùng:', serviceId);
    closeModal()
  };

  const handleUpdateService = (serviceId) => {
    const serviceToUpdate = {
      id: serviceId,
      fullName: 'John Doe',
      address: '123 Main Street',
      role: 'Admin',
      status: 'Active',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
      image: 'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
    };
    setInitialServiceData(serviceToUpdate);
    setIsUpdatingService(true);
    openModal()
  };
  return (
    <div className="w-full px-6 py-6 mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl drop-shadow-lg overflow-hidden rounded-2xl bg-clip-border">
            <div className='flex justify-between'>
              <div className="p-6 pb-0 mb-3 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h4 className='text-lg font-semibold'> Quản Lý Dịch Vụ</h4>
              </div>
              <div className="p-6 pb-0 mb-3 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <button onClick={handleAddService} className='px-4 py-2 font-semibold text-sm bg-blue-600 text-white rounded-full shadow-sm' > <FontAwesomeIcon icon={faPlus} className='h-4 w-4 ' /> Thêm Người Dùng</button>
              </div>
            </div>
            <div className="flex-auto px-0 pt-0">
              <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-base border-b-solid tracking-none whitespace-nowrap text-slate-800 ">Họ và Tên</th>
                      <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-base border-b-solid tracking-none whitespace-nowrap text-slate-800 ">quyền</th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-base border-b-solid tracking-none whitespace-nowrap text-slate-800 ">địa chỉ</th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-base border-b-solid tracking-none whitespace-nowrap text-slate-800 ">trang thái</th>
                      <th className="px-6 py-3 font-bold  uppercase align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-800 ">thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img src="https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user1" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal">John Michael</h6>
                            <p className="mb-0 text-xs leading-tight text-slate-400">john@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight">Manager</p>
                        <p className="mb-0 text-xs leading-tight text-slate-400">Organization</p>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight text-slate-400">Thái Nguyên</span>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-green-600 to-lime-500 px-2 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-normal  leading-none text-white">Đang hoạt động</span>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparen">
                        <Link className="text-xs font-semibold leading-tight text-yellow-500 mr-4"><FontAwesomeIcon icon={faPenToSquare} className='' /> Edit </Link>
                        <Link className="text-xs font-semibold leading-tight text-red-500"><FontAwesomeIcon icon={faTrashCan} /> Del </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img src="https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user2" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal">Alexa Liras</h6>
                            <p className="mb-0 text-xs leading-tight text-slate-400">alexa@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight">Programator</p>
                        <p className="mb-0 text-xs leading-tight text-slate-400">Developer</p>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight text-slate-400">Gia Lai</span>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-red-600 to-red-500 px-2 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-normal  leading-none text-white">Ngừng hoạt động</span>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparen">
                        <Link onClick={() => handleUpdateService(1)} className="text-xs font-semibold leading-tight text-yellow-500 mr-4"><FontAwesomeIcon icon={faPenToSquare} className='' /> Edit </Link>
                        <Link onClick={() => DeleteService(1)} className="text-xs font-semibold leading-tight text-red-500"><FontAwesomeIcon icon={faTrashCan} /> Del </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img src="https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user3" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal">Laurent Perrier</h6>
                            <p className="mb-0 text-xs leading-tight text-slate-400">laurent@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight">Executive</p>
                        <p className="mb-0 text-xs leading-tight text-slate-400">Projects</p>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight text-slate-400">Bình Định</span>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-normal  leading-none text-white">Đang hoạt động</span>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparen">
                        <Link className="text-xs font-semibold leading-tight text-yellow-500 mr-4"><FontAwesomeIcon icon={faPenToSquare} className='' /> Edit </Link>
                        <Link className="text-xs font-semibold leading-tight text-red-500"><FontAwesomeIcon icon={faTrashCan} /> Del </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img src="https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user3" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal">Laurent Perrier</h6>
                            <p className="mb-0 text-xs leading-tight text-slate-400">laurent@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight">Executive</p>
                        <p className="mb-0 text-xs leading-tight text-slate-400">Projects</p>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight text-slate-400">Bình Định</span>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-normal  leading-none text-white">Đang hoạt động</span>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparen">
                        <Link className="text-xs font-semibold leading-tight text-yellow-500 mr-4"><FontAwesomeIcon icon={faPenToSquare} className='' /> Edit </Link>
                        <Link className="text-xs font-semibold leading-tight text-red-500"><FontAwesomeIcon icon={faTrashCan} /> Del </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img src="https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user3" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal">Laurent Perrier</h6>
                            <p className="mb-0 text-xs leading-tight text-slate-400">laurent@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight">Executive</p>
                        <p className="mb-0 text-xs leading-tight text-slate-400">Projects</p>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight text-slate-400">Bình Định</span>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-normal  leading-none text-white">Đang hoạt động</span>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparen">
                        <Link className="text-xs font-semibold leading-tight text-yellow-500 mr-4"><FontAwesomeIcon icon={faPenToSquare} className='' /> Edit </Link>
                        <Link className="text-xs font-semibold leading-tight text-red-500"><FontAwesomeIcon icon={faTrashCan} /> Del </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img src="https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user3" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal">Laurent Perrier</h6>
                            <p className="mb-0 text-xs leading-tight text-slate-400">laurent@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight">Executive</p>
                        <p className="mb-0 text-xs leading-tight text-slate-400">Projects</p>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight text-slate-400">Bình Định</span>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-normal  leading-none text-white">Đang hoạt động</span>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparen">
                        <Link className="text-xs font-semibold leading-tight text-yellow-500 mr-4"><FontAwesomeIcon icon={faPenToSquare} className='' /> Edit </Link>
                        <Link className="text-xs font-semibold leading-tight text-red-500"><FontAwesomeIcon icon={faTrashCan} /> Del </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img src="https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user3" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal">Laurent Perrier</h6>
                            <p className="mb-0 text-xs leading-tight text-slate-400">laurent@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight">Executive</p>
                        <p className="mb-0 text-xs leading-tight text-slate-400">Projects</p>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight text-slate-400">Bình Định</span>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-normal  leading-none text-white">Đang hoạt động</span>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparen">
                        <Link className="text-xs font-semibold leading-tight text-yellow-500 mr-4"><FontAwesomeIcon icon={faPenToSquare} className='' /> Edit </Link>
                        <Link className="text-xs font-semibold leading-tight text-red-500"><FontAwesomeIcon icon={faTrashCan} /> Del </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img src="https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user3" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal">Laurent Perrier</h6>
                            <p className="mb-0 text-xs leading-tight text-slate-400">laurent@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight">Executive</p>
                        <p className="mb-0 text-xs leading-tight text-slate-400">Projects</p>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight text-slate-400">Bình Định</span>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-normal  leading-none text-white">Đang hoạt động</span>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparen">
                        <Link className="text-xs font-semibold leading-tight text-yellow-500 mr-4"><FontAwesomeIcon icon={faPenToSquare} className='' /> Edit </Link>
                        <Link className="text-xs font-semibold leading-tight text-red-500"><FontAwesomeIcon icon={faTrashCan} /> Del </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img src="https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user3" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal">Laurent Perrier</h6>
                            <p className="mb-0 text-xs leading-tight text-slate-400">laurent@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight">Executive</p>
                        <p className="mb-0 text-xs leading-tight text-slate-400">Projects</p>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight text-slate-400">Bình Định</span>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-normal  leading-none text-white">Đang hoạt động</span>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparen">
                        <Link className="text-xs font-semibold leading-tight text-yellow-500 mr-4"><FontAwesomeIcon icon={faPenToSquare} className='' /> Edit </Link>
                        <Link className="text-xs font-semibold leading-tight text-red-500"><FontAwesomeIcon icon={faTrashCan} /> Del </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={isDelete ? "Xóa Người Dùng " : isUpdatingService ? 'Cập nhật' : 'Thêm người dùng'}>
        {isDelete ? <DeleteForm id={1} onCancel={closeModal} onSubmit={submitDeleteService} title={"Bạn có muốn xóa người dùng này không"} /> :
          <GenericForm
            formFields={uerviceFormFields}
            onSubmit={submitAddOrUpdateService}
            isUpdate={isUpdatingService}
            initialData={initialServiceData}
          />
        }
      </Modal>
    </div>
  )
}
