import { faPenToSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createTaskAPI, deleteTaskAPI, getAllTaskAPI, updateTaskAPI } from '../../../api/service/taskService';
import { CREATE_TASK_SUCCESS, DELETE_TASK_SUCCESS, UPDATE_TASK_SUCCESS } from '../../../commom/messageConstant';
import DeleteForm from '../../UI/DeleteForm';
import GenericForm from '../../UI/GenericForm';
import Modal from '../../UI/Modal ';
import { ObjectTask, columnNameTask, taskFormFields } from '../../utils/DataForm';
import { formatDate } from '../../utils/utils';

export default function TaskManagement() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isUpdatingTask, setIsUpdatingTask] = React.useState(false);
  const [initialTaskData, setInitialTaskData] = React.useState(null)
  const [tasks, setTasks] = useState([]);
  const [totalPages, setTotalPages] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsDelete(false);
    setInitialTaskData(null);
  };

  const submitAddOrUpdateTask = (taskData) => {
    taskData.workingTimePerDay = parseInt(taskData.workingTimePerDay, 10)
    if (isUpdatingTask) {
      updateTaskAPI(`tasks/${taskData?.id}/task-id`, taskData).then((res) => {
        if (res) {
          getAllTask(currentPage)
          toast.success(UPDATE_TASK_SUCCESS)
        }
      }).catch((error) => {
        toast.error(error.response?.data?.message)
      })
    } else {
      createTaskAPI(`tasks`, taskData).then((res) => {
        if (res) {
          getAllTask(currentPage)
          toast.success(CREATE_TASK_SUCCESS)
        }
      }).catch((error) => {
        toast.error(error.response?.data?.message)
      })
    }
    closeModal()
  };

  const handleAddTask = () => {
    setIsUpdatingTask(false);
    setInitialTaskData(null);
    openModal()
  };

  const DeleteTask = (task) => {
    setInitialTaskData(task);
    setIsDelete(true)
    openModal()
  };

  const submitDeleteTask = (taskId) => {
    deleteTaskAPI(`tasks/${taskId}/task-id`).then((res) => {
      if (res) {
        getAllTask(currentPage)
        toast.success(DELETE_TASK_SUCCESS)
      }
    }).catch((error) => {
      toast.error(error.response?.data?.message)
    })
    closeModal()
  };

  const handleUpdateTask = (Task) => {
    setInitialTaskData(Task);
    setIsUpdatingTask(true);
    openModal()
  };

  const getAllTask = (currentPage) => {
    const data = {
      page: currentPage,
      limit: 6,
      sort: "createdAt",
      order: "desc"
    }
    
    getAllTaskAPI(`tasks/get-many`, data).then((res) => {
      if (res) {
        setTasks(res.data.data.items)
        setTotalPages(res.data.data?.totalPages)
        setCurrentPage(res.data.data?.page)
      }
    }).catch((error) => {
      toast.error(error.response?.data?.message)
    })
  }

  useEffect(() => {
    getAllTask(currentPage, totalPages)
  }, [currentPage, totalPages]);

  return (
    <div className="w-full px-6 py-6 mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="min-h-[60vh] relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl drop-shadow-lg overflow-hidden rounded-2xl bg-clip-border">
            <div className='flex justify-between'>
              <div className="p-6 pb-0 mb-3 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h4 className='text-lg font-semibold'> Quản Lý Nhiệm Vụ</h4>
              </div>
              <div className="p-6 pb-0 mb-3 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <button onClick={handleAddTask} className='px-4 py-2 font-medium text-xs bg-black text-white rounded-lg shadow-sm' > <FontAwesomeIcon icon={faPlus} className='h-4 w-4 ' /> Thêm Nhiệm Vụ</button>
              </div>
            </div>
            <div className="flex-auto px-0 pt-0 relative">
              <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      {columnNameTask.map((columnName, index) => (
                        <th key={index} className={`${index === 0 && '!text-left '} px-6 py-3 font-bold uppercase text-center align-middle bg-transparent border-b border-gray-200 shadow-none text-base border-b-solid tracking-none whitespace-nowrap text-slate-800`}>{columnName.name}</th>
                      ))}
                      <th className="px-6 py-3 font-bold  uppercase align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-800 ">thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map((item) => (
                      <tr key={item.id}>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs px-3 py-1 font-semibold leading-tight text-slate-400">{item.name}</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-400">{item.description}</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-400">{item.object}</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-400">{formatDate(item?.createdAt)}</span>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className={`${item.isActive ? ' from-green-600 to-lime-500 ' : 'from-red-600 to-red-500 '} bg-gradient-to-tl  px-2 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-normal  leading-none text-white`}
                          >{item.isActive ? 'Đang Hoạt Động' : 'Dừng Hoạt Động'}</span>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparen">
                          <Link onClick={() => handleUpdateTask(item)} className="text-xs font-semibold leading-tight text-yellow-500 mr-4"><FontAwesomeIcon icon={faPenToSquare} className='' /> Edit </Link>
                          <Link onClick={() => DeleteTask(item.id)} className="text-xs font-semibold leading-tight text-red-500"><FontAwesomeIcon icon={faTrashCan} /> Del </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={isDelete ? "Xóa Nhiệm Vụ " : isUpdatingTask ? 'Cập nhật' : 'Thêm Nhiệm Vụ'}>
        {isDelete ? <DeleteForm id={initialTaskData} onCancel={closeModal} onSubmit={submitDeleteTask} title={"Bạn có muốn xóa nhiệm vụ này không"} /> :
          <GenericForm
            formFields={taskFormFields}
            onSubmit={submitAddOrUpdateTask}
            isUpdate={isUpdatingTask}
            initialData={initialTaskData}
            selectData={ObjectTask}
          />
        }
      </Modal>
    </div>
  )
}
