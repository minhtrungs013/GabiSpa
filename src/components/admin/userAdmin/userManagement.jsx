import { faPenToSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteForm from '../../UI/DeleteForm';
import GenericForm from '../../UI/GenericForm';
import Modal from '../../UI/Modal ';
import Pagination from '../../UI/Pagination';
import { columnNameUser, dataUserManagement, userFormFields } from '../../utils/DataForm';

export default function UserManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isUpdatingUser, setIsUpdatingUser] = React.useState(false);
  const [initialUserData, setInitialUserData] = React.useState(null)
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
    setInitialUserData(null);
  };

  const submitAddOrUpdateUser = (userData) => {
    if (isUpdatingUser) {
      // Xử lý logic cập nhật người dùng
      console.log('Cập nhật người dùng:', userData);
    } else {
      // Xử lý logic thêm người dùng
      console.log('Thêm người dùng:', userData);
    }

    closeModal()
  };

  const handleAddUser = () => {
    setIsUpdatingUser(false);
    setInitialUserData(null);
    openModal()
  };

  const DeleteUser = (userId) => {
    setIsDelete(true)
    openModal()
  };

  const submitDeleteUser = (userId) => {
    console.log('xóa người dùng:', userId);
    closeModal()
  };

  const handleUpdateUser = (userId) => {
    const userToUpdate = {
      id: userId,
      fullName: 'John Doe',
      address: '123 Main Street',
      role: 'Admin',
      status: 'Active',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
      image: 'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
    };
    setInitialUserData(userToUpdate);
    setIsUpdatingUser(true);
    openModal()
  };
  return (
    <div className="w-full px-6 py-6 mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="min-h-[60vh] relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl drop-shadow-lg overflow-hidden rounded-2xl bg-clip-border">
            <div className='flex justify-between'>
              <div className="p-6 pb-0 mb-3 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h4 className='text-lg font-semibold'> Quản Lý Người Dùng</h4>
              </div>
              <div className="p-6 pb-0 mb-3 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <button onClick={handleAddUser} className='px-4 py-2 font-medium text-xs bg-black text-white rounded-lg shadow-sm' > <FontAwesomeIcon icon={faPlus} className='h-4 w-4 ' /> Thêm Người Dùng</button>
              </div>
            </div>
            <div className="flex-auto px-0 pt-0 relative">
              <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      {columnNameUser.map((columnName, index) => (
                        <th className={`${(index === 0 || index === 1) && '!text-left '} px-6 py-3 font-bold uppercase text-center align-middle bg-transparent border-b border-gray-200 shadow-none text-base border-b-solid tracking-none whitespace-nowrap text-slate-800`}>{columnName.name}</th>
                      ))}
                      <th className="px-6 py-3 font-bold  uppercase align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-800 ">thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataUserManagement.map((item) => (
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <div className="flex px-2 py-1">
                            <div>
                              <img src={item.imageURL} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user1" />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal">{item.name}</h6>
                              <p className="mb-0 text-xs leading-tight text-slate-400">{item.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <p className="mb-0 text-xs font-semibold leading-tight">{item.role}</p>
                          <p className="mb-0 text-xs leading-tight text-slate-400">{item.roleDetails}</p>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-400">{item.address}</span>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className={`${item.status ? ' from-green-600 to-lime-500 ' : 'from-red-600 to-red-500 '} bg-gradient-to-tl  px-2 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-normal  leading-none text-white`}
                          >{item.status ? 'Đang Hoạt Động' : 'Dừng Hoạt Động'}</span>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparen">
                          <Link onClick={() => handleUpdateUser(1)} className="text-xs font-semibold leading-tight text-yellow-500 mr-4"><FontAwesomeIcon icon={faPenToSquare} className='' /> Edit </Link>
                          <Link onClick={() => DeleteUser(1)} className="text-xs font-semibold leading-tight text-red-500"><FontAwesomeIcon icon={faTrashCan} /> Del </Link>
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
      <Modal isOpen={isModalOpen} onClose={closeModal} title={isDelete ? "Xóa Người Dùng " : isUpdatingUser ? 'Cập nhật' : 'Thêm người dùng'}>
        {isDelete ? <DeleteForm id={1} onCancel={closeModal} onSubmit={submitDeleteUser} title={"Bạn có muốn xóa người dùng này không"} /> :
          <GenericForm
            formFields={userFormFields}
            onSubmit={submitAddOrUpdateUser}
            isUpdate={isUpdatingUser}
            initialData={initialUserData}
          />
        }
      </Modal>
    </div>
  )
}