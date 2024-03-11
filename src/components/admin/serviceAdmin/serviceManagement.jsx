import { faPenToSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllCategoryAPI } from '../../../api/service/categories';
import { createServiceSpaAPI, deleteServiceSpaAPI, getAllServiceSpaAPI, updateServiceSpaAPI } from '../../../api/service/serviceSpaService';
import { getAllTaskAPI } from '../../../api/service/taskService';
import { CREATE_SERVICE_SUCCESS, DELETE_SERVICE_SUCCESS, UPDATE_SERVICE_SUCCESS } from '../../../commom/messageConstant';
import DeleteForm from '../../UI/DeleteForm';
import GenericForm from '../../UI/GenericForm';
import Modal from '../../UI/Modal ';
import Pagination from '../../UI/Pagination';
import { RenderStars } from '../../UI/renderStars';
import { Service, columnNameService, serviceFormFields } from '../../utils/DataForm';
import { CURRENT_DATE } from '../../utils/utils';

export default function ServiceManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isUpdatingService, setIsUpdatingService] = React.useState(false);
  const [initialServiceData, setInitialServiceData] = React.useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [serviceSpas, setServiceSpas] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);

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
    setInitialServiceData(null);
  };

  const submitAddOrUpdateService = (serviceData) => {
    if (isUpdatingService) {
      updateServiceSpaAPI(`services/update-service/${serviceData?.id}/service-id`, serviceData).then((res) => {
        if (res) {
          getAllServiceSpa()
          closeModal()
          toast.success(UPDATE_SERVICE_SUCCESS)
        }
      }).catch((error) => {
        closeModal()
        toast.error(error.response?.data?.message)
      })
    } else {
      createServiceSpaAPI(`services`, serviceData).then((res) => {
        if (res) {
          getAllServiceSpa()
          closeModal()
          toast.success(CREATE_SERVICE_SUCCESS)
        }
      }).catch((error) => {
        closeModal()
        toast.error(error.response?.data?.message)
      })
    }
  };

  const handleAddService = () => {
    setIsUpdatingService(false);
    setInitialServiceData(null);
    openModal()
  };

  const DeleteService = (id) => {
    setInitialServiceData(id);
    setIsDelete(true)
    openModal()
  };

  const submitDeleteService = (serviceId) => {
    deleteServiceSpaAPI(`services/${serviceId}/service-id`).then((res) => {
      if (res) {
        getAllServiceSpa()
        closeModal()
        toast.success(DELETE_SERVICE_SUCCESS)
      }
    }).catch((error) => {
      closeModal()
      toast.error(error.response?.data?.message)
    })
  };

  const handleUpdateService = (service) => {
    const newJobs = service?.jobs.map(item => ({
      taskId: item.task.id,
      dayGap: item.dayGap,
    }));
    Service.id = service.id
    Service.categoryId = service.category.id
    Service.name = service.name
    Service.description = service.description
    Service.price = service.price
    Service.images = service.images
    Service.jobs = newJobs
    Service.isActive = service.isActive
    setInitialServiceData(Service);
    setIsUpdatingService(true);
    openModal()
  };

  const getAllTask = () => {
    getAllTaskAPI(`tasks`).then((res) => {
      if (res) {
        setTasks(res.data.data)
      }
    }).catch((error) => {
      toast.error(error.response?.data?.message)
    })
  }


  const getAllCategory = () => {
    getAllCategoryAPI(`service-categories`).then((res) => {
      if (res) {
        setCategories(res.data.data)
      }
    }).catch((error) => {
      toast.error(error.response?.data?.message)
    })
  }

  const getAllServiceSpa = () => {
    getAllServiceSpaAPI(`services`).then((res) => {
      if (res) {
        setServiceSpas(res.data.data)
      }
    }).catch((error) => {
      toast.error(error.response?.data?.message)
    })
  }

  useEffect(() => {
    getAllServiceSpa()
    getAllCategory()
    getAllTask()
  }, []);

  return (
    <div className="w-full px-6 py-6 mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="min-h-[60vh] relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl drop-shadow-lg overflow-hidden rounded-2xl bg-clip-border">
            <div className='flex justify-between'>
              <div className="p-6 pb-0 mb-3 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h4 className='text-lg font-semibold'> Quản Lý Dịch Vụ</h4>
              </div>
              <div className="p-6 pb-0 mb-3 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <button onClick={handleAddService} className='px-4 py-2 font-medium text-xs bg-black text-white rounded-lg shadow-sm' > <FontAwesomeIcon icon={faPlus} className='h-4 w-4 ' /> Thêm Người Dùng</button>
              </div>
            </div>
            <div className="flex-auto px-0 pt-0 relative">
              <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      {columnNameService.map((columnName, index) => (
                        <th key={index} className={`${index === 0 && '!text-left '} px-6 py-3 font-bold uppercase text-center align-middle bg-transparent border-b border-gray-200 shadow-none text-base border-b-solid tracking-none whitespace-nowrap text-slate-800`}>{columnName.name}</th>
                      ))}
                      <th className="px-6 py-3 font-bold  uppercase align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-800 ">thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceSpas.map((item) => (
                      <tr key={item.id}>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs px-3 py-1 font-semibold leading-tight text-slate-400">{item.name}</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-400">{item.description}</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <div className="flex items-center justify-center">
                            {item?.images?.slice(0, 3).map((image, index) =>
                            (
                              <img key={index} src={image} className="items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 " alt="user1" />
                            ))}
                          </div>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <div className='my-3 flex  justify-center'>
                            {RenderStars(item.rating)}
                          </div>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-400">{item.price}</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-400">{CURRENT_DATE(item.createdAt)}</span>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className={`${item.isActive ? ' from-green-600 to-lime-500 ' : 'from-red-600 to-red-500 '} bg-gradient-to-tl  px-2 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-normal  leading-none text-white`}
                          >{item.isActive ? 'Đang Hoạt Động' : 'Dừng Hoạt Động'}</span>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparen">
                          <Link onClick={() => handleUpdateService(item)} className="text-xs font-semibold leading-tight text-yellow-500 mr-4"><FontAwesomeIcon icon={faPenToSquare} className='' /> Edit </Link>
                          <Link onClick={() => DeleteService(item.id)} className="text-xs font-semibold leading-tight text-red-500"><FontAwesomeIcon icon={faTrashCan} /> Del </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='flex justify-end mr-4 mt-4 absolute bottom-0 right-0'>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={isDelete ? "Xóa Người Dùng " : isUpdatingService ? 'Cập nhật' : 'Thêm người dùng'}>
        {isDelete ? <DeleteForm id={initialServiceData} onCancel={closeModal} onSubmit={submitDeleteService} title={"Bạn có muốn xóa người dùng này không"} /> :
          <GenericForm
            formFields={serviceFormFields}
            onSubmit={submitAddOrUpdateService}
            isUpdate={isUpdatingService}
            initialData={initialServiceData}
            selectData={categories}
            dataJobOfServie={tasks}
            typeForm={'serviceSpa'}
          />
        }
      </Modal>
    </div>
  )
}
