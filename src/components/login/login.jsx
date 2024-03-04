import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI } from '../../api/service/AuthService';
import { ACCESS_TOKEN, ENTER_ALL_INFORMATION, REFRESH_TOKEN, REGEX, USER_NAME_CHARACTERS } from '../../commom/messageConstant';
import { setIdUser, setLoggedIn, setRole, setUsername } from '../../redux/slice/userSlice';
export default function Login({ showModal, closeModal, switchRegister }) {
    const dispatch = useDispatch();
    const [userLogin, setUserLogin] = useState({
        username: null,
        password: null
    });

    const handleCloseModal = useCallback(() => {
        setUserLogin({ username: '', password: '', });
        closeModal();
    }, [setUserLogin, closeModal]);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') {
            handleCloseModal();
        }
    }, [handleCloseModal]);

    const handleLoginForm = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setUserLogin((prevUser) => ({ ...prevUser, [name]: value, }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (REGEX.test(userLogin.username)) {
            toast.warning(USER_NAME_CHARACTERS)
            return
        }

        if (userLogin.username === null || userLogin.password === null) {
            toast.warning(ENTER_ALL_INFORMATION)
            return
        }
        await loginAPI('auth/sign-in', userLogin)
            .then((response) => {
                if (response) {
                    localStorage.setItem(ACCESS_TOKEN, response.data.data.tokens.accessToken)
                    localStorage.setItem(REFRESH_TOKEN, response.data.data.tokens.refreshToken)
                    dispatch(setLoggedIn(true))
                    dispatch(setRole(response.data.data.user.role))
                    dispatch(setUsername(response.data.data.user.username))
                    dispatch(setIdUser(response.data.data.user.id))
                    handleCloseModal()
                }
            })
            .catch((error) => {
                toast.warning(error.response?.data?.message)
            });
    };

    useEffect(() => {
        if (showModal) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showModal, handleKeyDown]);

    return (
        <div className={`fixed inset-0 bg-gray-200 bg-opacity-50 flex justify-center !z-10 items-center ${showModal ? '' : 'hidden'}`} onClick={handleCloseModal}>
            <div className="" onClick={(e) => e.stopPropagation()}>
                <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 ">
                    <div className="relative py-3 max-w-xl mx-auto">
                        <FontAwesomeIcon icon={faXmark} onClick={handleCloseModal} className="text-xl  !z-10 cursor-pointer absolute top-7 right-5 text-gray-600 hover:text-gray-800" />
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-[#214581] to-sky-500 shadow-lg transform skew-y-0 -rotate-6 rounded-3xl">
                        </div>
                        <div className="relative bg-white shadow-lg rounded-3xl lg:p-20 md:p-20 sm:p-10 p-10">
                            <div className="max-w-md mx-auto">
                                <div className='flex text-center items-center '>
                                    <img className='h-[80px]' src={"https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png"} alt="" />
                                    <h1 className="text-2xl font-semibold">Đăng Nhập</h1>
                                </div>
                                <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative">
                                            <input autocomplete="off" id="email" value={userLogin.username} name="username" onChange={handleLoginForm} type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 text-sm" placeholder="Tên Đăng Nhập" />
                                            <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Tên Đăng Nhập </label>
                                        </div>
                                        <div className="relative">
                                            <input autocomplete="off" id="password" value={userLogin.password} name="password" onChange={handleLoginForm} type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 text-sm" placeholder="Mật Khẩu" />
                                            <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Mật Khẩu</label>
                                        </div>
                                        <div className="relative">
                                            <button className="bg-[#214581] text-white w-32 rounded-md px-2 py-1" >Đăng Nhập</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="w-full flex justify-center">
                                <span>bạn chưa có tài khoản? </span>
                                <span className='pl-2 text-blue-700 underline cursor-pointer' onClick={switchRegister}>Đăng Ký </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
