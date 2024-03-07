import { faPenToSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createCategoryAPI, deleteCategoryAPI, getAllCategoryAPI, updateCategoryAPI } from '../../../api/service/categories';
import { CREATE_CATEGORY_SUCCESS, DELETE_CATEGORY_SUCCESS, UPDATE_CATEGORY_SUCCESS } from '../../../commom/messageConstant';
import DeleteForm from '../../UI/DeleteForm';
import GenericForm from '../../UI/GenericForm';
import Modal from '../../UI/Modal ';
import { categoryFormFields, columnNameCategories } from '../../utils/DataForm';
import { formatDate } from '../../utils/utils';

export default function CategoriesManagement() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isUpdatingCategory, setIsUpdatingCategory] = React.useState(false);
  const [initialCategoryData, setInitialCategoryData] = React.useState(null)
  const [categories, setCategories] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsDelete(false);
    setInitialCategoryData(null);
  };

  const submitAddOrUpdateCategory = (CategoryData) => {
    if (isUpdatingCategory) {
      updateCategoryAPI(`service-categories/${CategoryData?.id}/service-category-id`, CategoryData).then((res) => {
        if (res) {
          getAllCategory()
          toast.success(UPDATE_CATEGORY_SUCCESS)
        }
      }).catch((error) => {
        toast.error(error.response?.data?.message)
      })
    } else {
      createCategoryAPI(`service-categories`, CategoryData).then((res) => {
        if (res) {
          getAllCategory()
          toast.success(CREATE_CATEGORY_SUCCESS)
        }
      }).catch((error) => {
        toast.error(error.response?.data?.message)
      })
    }
    closeModal()
  };

  const handleAddCategory = () => {
    setIsUpdatingCategory(false);
    setInitialCategoryData(null);
    openModal()
  };

  const DeleteCategory = (CategoryId) => {
    setInitialCategoryData(CategoryId);
    setIsDelete(true)
    openModal()
  };

  const submitDeleteCategory = (CategoryId) => {
    deleteCategoryAPI(`service-categories/${CategoryId}/service-category-id`).then((res) => {
      if (res) {
        getAllCategory()
        toast.success(DELETE_CATEGORY_SUCCESS)
      }
    }).catch((error) => {
      toast.error(error.response?.data?.message)
    })
    closeModal()
  };

  const handleUpdateCategory = (Category) => {
    setInitialCategoryData(Category);
    setIsUpdatingCategory(true);
    openModal()
  };

  const getAllCategory = () => {
    getAllCategoryAPI(`service-categories`).then((res) => {
      if (res) {
        setCategories(res.data.data)
      }
    }).catch((error) => {
      toast.error(error.response?.data?.message)
    })
  }

  useEffect(() => {
    getAllCategory()
  }, []);

  return (
    <div className="w-full px-6 py-6 mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="min-h-[60vh] relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl drop-shadow-lg overflow-hidden rounded-2xl bg-clip-border">
            <div className='flex justify-between'>
              <div className="p-6 pb-0 mb-3 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h4 className='text-lg font-semibold'> Quản Lý Danh Mục</h4>
              </div>
              <div className="p-6 pb-0 mb-3 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <button onClick={handleAddCategory} className='px-4 py-2 font-medium text-xs bg-black text-white rounded-lg shadow-sm' > <FontAwesomeIcon icon={faPlus} className='h-4 w-4 ' /> Thêm Danh Mục</button>
              </div>
            </div>
            <div className="flex-auto px-0 pt-0 relative">
              <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      {columnNameCategories.map((columnName, index) => (
                        <th key={index} className={`${index === 0 && '!text-left '} px-6 py-3 font-bold uppercase text-center align-middle bg-transparent border-b border-gray-200 shadow-none text-base border-b-solid tracking-none whitespace-nowrap text-slate-800`}>{columnName.name}</th>
                      ))}
                      <th className="px-6 py-3 font-bold  uppercase align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-800 ">thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((item) => (
                      <tr key={item.id}>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs px-3 py-1 font-semibold leading-tight text-slate-400">{item.name}</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-400">{item.description}</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-400">{formatDate(item.createdAt)}</span>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className={`${item.isActive ? ' from-green-600 to-lime-500 ' : 'from-red-600 to-red-500 '} bg-gradient-to-tl  px-2 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-normal  leading-none text-white`}
                          >{item.isActive ? 'Đang Hoạt Động' : 'Dừng Hoạt Động'}</span>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparen">
                          <Link onClick={() => handleUpdateCategory(item)} className="text-xs font-semibold leading-tight text-yellow-500 mr-4"><FontAwesomeIcon icon={faPenToSquare} className='' /> Edit </Link>
                          <Link onClick={() => DeleteCategory(item.id)} className="text-xs font-semibold leading-tight text-red-500"><FontAwesomeIcon icon={faTrashCan} /> Del </Link>
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
      <Modal isOpen={isModalOpen} onClose={closeModal} title={isDelete ? "Xóa Danh Mục " : isUpdatingCategory ? 'Cập nhật' : 'Thêm Danh Mục'}>
        {isDelete ? <DeleteForm id={initialCategoryData} onCancel={closeModal} onSubmit={submitDeleteCategory} title={"Bạn có muốn xóa danh mục này không"} /> :
          <GenericForm
            formFields={categoryFormFields}
            onSubmit={submitAddOrUpdateCategory}
            isUpdate={isUpdatingCategory}
            initialData={initialCategoryData}
          />
        }
      </Modal>
    </div>
  )
}
