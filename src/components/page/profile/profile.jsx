import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { changePasswordAPI } from '../../../api/service/AuthService';
import { getUserByIdAPI, updateUserAPI } from '../../../api/service/UserService';
import { CONFIRM_PASSWORD_INCORRECT, DEFAULT_IMAGE } from '../../../commom/messageConstant';
import { setIdUser, setLoggedIn, setUsername } from '../../../redux/slice/userSlice';
import { ChangePassword, UserDetails } from '../../utils/DataForm';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { handleUpload } from '../../utils/utils';
import { Helmet } from 'react-helmet-async';

export default function Profile() {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);
    const idUser = useSelector(state => state.userReducer.idUser);
    const dispatch = useDispatch();
    const [isUpdateUser, setIsUpdateUser] = useState(false)
    const [isUpdateAccount, setIsUpdateAccount] = useState(false)
    const [account, setAccount] = useState(ChangePassword);
    const [userUpdate, setUserUpdate] = useState(UserDetails);
    const [userById, setUserById] = useState(UserDetails);
    const handleAccountForm = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setAccount((prevAccount) => ({
            ...prevAccount,
            [name]: value,
        }));
    };
    const handleUserForm = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setUserUpdate((prevUserUpdate) => ({
            ...prevUserUpdate,
            [name]: value,
        }));
    };

    const handleUpdateAccount = () => {

        if (account.newPassword !== account.confirmPassword) {
            toast.warning(CONFIRM_PASSWORD_INCORRECT)
            return
        }
        changePasswordAPI(`users/change-password/${idUser}/user-id`, account).then((res) => {
            if (res) {
                dispatch(setUsername(null))
                dispatch(setLoggedIn(false))
                dispatch(setIdUser(null))
                setIsUpdateAccount(false)
                navigate("/");
            }
        }).catch((error) => {
            toast.error(error.response?.data?.message)
        })
    }

    const cancelUpdate = () => {
        cancelCourse()
        setUserUpdate(userById)
        setIsUpdateUser(!isUpdateUser)
    }

    const handleUpdateUser = () => {
        const convertAge = parseInt(userUpdate.age, 10)
        userUpdate.age = convertAge
        updateUserAPI(`users/update-user-detail/${idUser}/user-id`, userUpdate).then((res) => {
            if (res) {
                getUserById(idUser)
                setIsUpdateUser(false)
                toast.success("Cập Nhật Thông Tin Cá Nhân Thành Công")
            }
        }).catch((error) => {
            toast.error(error.response?.data?.message)
        })
    }

    const handleFileChange = async (event) => {
        const files = event.target?.files
        const images = await handleUpload(files)
        if (images && images?.length > 0) {
            userUpdate.avatar = images[0]
            handleUpdateUser()
        }

    }

    const getUserById = (idUser) => {
        
        getUserByIdAPI(`users/get-user-detail/${idUser}/user-id`).then((res) => {
            if (res) {
                setUserById(res.data.data)
                setUserById((item) => ({ ...item, dateOfBirth: res.data.data?.dateOfBirth ? res.data.data.dateOfBirth.slice(0, 10) : '' }))
                setUserUpdate(res.data.data)
            }
        }).catch((error) => {
            toast.error(error.response?.data?.message)
        })
    }

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    useEffect(() => {
        getUserById(idUser)
    }, [idUser]);

    const cancelCourse = () => {
        const form = document.getElementById("create-course-form");
        if (form) {
            form.reset();
        }
    };

    return (
        <div>
             <Helmet>
                <title>Gabi Spa - Trang Cá Nhân</title>
                <meta name="description" content="Gabi Spa Trang Cá Nhân" />
                <meta name="keywords" content="Gabi Spa Trang Cá Nhân" />
                <link rel="Gabi Spa - Trang Cá Nhân" href="https://gabi-spa.vercel.app/trang-ca-nhan" />
            </Helmet>
            <div className="mt-16 md:mt-0 mb-4">
                <h2 className="text-2xl lg:text-2xl font-bold lg:tracking-tight text-[#214581]">
                    TRANG CÁ NHÂN
                </h2>
            </div>
            <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-4 xl:grid-cols-4 shadow-lg rounded-md min-h-[60vh]">
                <div className="xl:col-span-1 lg:col-span-1 md:col-span-1  lg:block ">
                    <div className="relative cursor-pointer flex justify-center ">
                        <img className='h-60 w-60 rounded-full' src={userById?.avatar && userById?.avatar !== null ? userById?.avatar : DEFAULT_IMAGE} alt="" />
                        <div className='absolute rounded-full bottom-[-5px] '>
                            <FontAwesomeIcon icon={faUpload} className='cursor-pointer text-4xl text-gray-500 hover:text-gray-300   z-10' />
                            <input type="file" className='cursor-pointer absolute z-20 bottom-0 left-0 opacity-0 h-10 w-10' onChange={handleFileChange} />
                        </div>
                    </div>
                    <div className='flex justify-center space-x-4 mt-4'>
                        <p className='pl-3 text-xl font-medium'>Đỗ Minh Trung</p>
                    </div>
                </div>
                <div className="xl:col-span-3 lg:col-span-4 md:col-span-4">
                    <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-4 xl:grid-cols-4">
                        <div className="xl:col-span-2 lg:col-span-2 md:col-span-2 p-2 lg:block ">
                            <div className='flex justify-between items-center'>
                                <h2 className="text-xl lg:text-xl font-bold lg:tracking-tight text-[#214581]">
                                    Thông Tin Cá Nhân
                                </h2>
                                {!isUpdateUser ? <button onClick={() => setIsUpdateUser(!isUpdateUser)} className=' rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-[#214581] text-white hover:bg-[#2e4d81]  border-2 border-transparent' >Chỉnh Sửa</button>
                                    : <button onClick={() => cancelUpdate()} className='min-w-[108px] rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2  text-black border-[2px] border-[#2e4d81]' >Hủy</button>}
                            </div>
                            <form action='' id="create-course-form" className="mt-4 ">
                                <div className='flex items-center justify-between px-1 mb-1'>
                                    <span className='text-lg font-medium outline-none '>Họ Và Tên</span>
                                    <input type="text" className='w-72 p-3 bg-slate-50 ' name='fullName' defaultValue={userById?.fullName} disabled={!isUpdateUser} onChange={handleUserForm} />
                                </div>
                                <div className='flex items-center justify-between px-1 mb-1'>
                                    <span className='text-lg font-medium outline-none '>Email</span>
                                    <input type="email" className='w-72 p-3 bg-slate-50 ' name='email' defaultValue={userById?.email} disabled={!isUpdateUser} onChange={handleUserForm} />
                                </div>
                                <div className='flex items-center justify-between px-1 mb-1'>
                                    <span className='text-lg font-medium outline-none '>Tuổi</span>
                                    <input type="number" className='w-72 p-3 bg-slate-50 ' name='age' defaultValue={userById?.age} disabled={!isUpdateUser} onChange={handleUserForm} />
                                </div>
                                <div className='flex items-center justify-between px-1 mb-1'>
                                    <span className='text-lg font-medium outline-none '>Năm Sinh</span>
                                    <input type="date" className='w-72 p-3 bg-slate-50 ' name='dateOfBirth' defaultValue={userById?.dateOfBirth} disabled={!isUpdateUser} onChange={handleUserForm} />
                                </div>
                                <div className='flex items-center justify-between px-1 mb-1'>
                                    <span className='text-lg font-medium outline-none '>Địa Chỉ</span>
                                    <input type="text" className='w-72 p-3 bg-slate-50 ' name='address' defaultValue={userById?.address} disabled={!isUpdateUser} onChange={handleUserForm} />
                                </div>
                                <div className='flex items-center justify-between px-1 mb-1'>
                                    <span className='text-lg font-medium outline-none '>Số Điện Thoại</span>
                                    <input type="number" className='w-72 p-3 bg-slate-50 ' name='phone' defaultValue={userById?.phone} disabled={!isUpdateUser} onChange={handleUserForm} />
                                </div>
                            </form>
                            {isUpdateUser &&
                                <div className="mt-4 ">
                                    <button onClick={() => handleUpdateUser()} className=' rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-[#214581] text-white hover:bg-[#2e4d81]  border-2 border-transparent' >Xác Nhận</button>
                                </div>}
                        </div>
                        <div className="xl:col-span-2 lg:col-span-2 md:col-span-2 p-2 ">
                            <div className='flex justify-between items-center'>
                                <h2 className="text-xl lg:text-xl font-bold lg:tracking-tight text-[#214581]">
                                    Thông Tin Tài Khoản
                                </h2>
                                {!isUpdateAccount ? <button onClick={() => setIsUpdateAccount(!isUpdateAccount)} className=' rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-[#214581] text-white hover:bg-[#2e4d81]  border-2 border-transparent' >Chỉnh Sửa</button>
                                    : <button onClick={() => setIsUpdateAccount(!isUpdateAccount)} className='min-w-[107px] rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 text-black border-[2px] border-[#2e4d81]' >Hủy</button>}
                            </div>
                            <div className="mt-4 ">
                                <div className='flex items-center justify-between px-1 mb-1'>
                                    <span className='text-lg font-medium outline-none ' >Tài Khoản</span>
                                    <input type="text" className='w-72 p-3 bg-slate-50 ' value={'minhtrung'} disabled={!isUpdateAccount} />
                                </div>
                                <div className='flex items-center justify-between px-1 mb-1'>
                                    <span className='text-lg font-medium outline-none '>Mật Khẩu {isUpdateAccount && ' Cũ'} </span>
                                    <input type="password" name='oldPassword' className='w-72 p-3 bg-slate-50 ' defaultValue={isUpdateAccount ? '' : '000000'} disabled={!isUpdateAccount} onChange={handleAccountForm} />
                                </div>
                                {isUpdateAccount &&
                                    <>
                                        <div className='flex items-center justify-between px-1 mb-1'>
                                            <span className='text-lg font-medium outline-none '>Mật Khẩu Mới</span>
                                            <input type="password" name='newPassword' className='w-72 p-3 bg-slate-50 ' onChange={handleAccountForm} />
                                        </div>
                                        <div className='flex items-center justify-between px-1 mb-1'>
                                            <span className='text-lg font-medium outline-none '>Nhập Lại Mật Khẩu</span>
                                            <input type="password" name='confirmPassword' className='w-72 p-3 bg-slate-50 ' onChange={handleAccountForm} />
                                        </div>
                                    </>
                                }
                                <div className='flex items-center justify-between px-1 mb-1'>
                                    <span className='text-lg font-medium outline-none '>Quyền Truy Cập</span>
                                    <input type="text" className='w-72 p-3 bg-slate-50 ' value={'Khách hàng'} disabled />
                                </div>

                            </div>
                            {isUpdateAccount &&
                                <div className="mt-4 ">
                                    <button onClick={() => handleUpdateAccount()} className='rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-[#214581] text-white hover:bg-[#2e4d81]  border-2 border-transparent' >Xác Nhận</button>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
