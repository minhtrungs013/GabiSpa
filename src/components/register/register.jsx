import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { registerAPI } from '../../api/service/AuthService';
import { CONFIRM_PASSWORD_INCORRECT, REGEX, ROLE_DEFAULT, USER_NAME_CHARACTERS } from '../../commom/messageConstant';

export default function Register({ showModal, closeModal, switchLogin }) {
    const [newAccount, setNewAccount] = useState({
        username: null,
        password: null,
        confirmPassword: null,
        role: ROLE_DEFAULT,
    });

    /**
       * Handle changes in the registration form fields and update the user data accordingly.
       * 
       * @param {Event} event - The event triggered by a form field change.
       */
    const handleRegisterForm = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setNewAccount((prevNewAccount) => ({
            ...prevNewAccount,
            [name]: value,
        }));
    };


    /**
      * Handle user registration form submission.
      *
      * @param {Event} event - The form submission event.
      */
    const handleRegisterSubmit = async (event) => {
        event.preventDefault();

        if (REGEX.test(newAccount.username)) {
            toast.warning(USER_NAME_CHARACTERS)
            return
        }

        if (newAccount.password !== newAccount.confirmPassword) {
            toast.warning(CONFIRM_PASSWORD_INCORRECT)
            return
        }

        await registerAPI('auth/sign-up', newAccount)
            .then((response) => {
                closeModal();
                switchLogin()
            })
            .catch((error) => {
                toast.error(error.response.data.message)
            });
    };

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    }, [closeModal]);

    useEffect(() => {
        if (showModal) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showModal, handleKeyDown]);

    return (
        <div className={`fixed inset-0 bg-gray-200 bg-opacity-50 flex justify-center !z-10 items-center ${showModal ? '' : 'hidden'}`} onClick={closeModal}>
            <div className="" onClick={(e) => e.stopPropagation()}>
                <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 ">
                    <div className="relative py-3 max-w-xl mx-auto">
                        <FontAwesomeIcon icon={faXmark} onClick={closeModal} className="text-xl  !z-10 cursor-pointer absolute top-7 right-5 text-gray-600 hover:text-gray-800" />
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-[#214581] to-sky-500 shadow-lg transform skew-y-0 -rotate-6 rounded-3xl">
                        </div>
                        <div className="relative bg-white shadow-lg rounded-3xl lg:p-20 md:p-20 sm:p-10 p-10">
                            <div className="max-w-md mx-auto">
                                <div className='flex text-center items-center '>
                                    <img className='h-[80px]' src={"https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png"} alt="" />
                                    <h1 className="text-2xl font-semibold">Đăng ký</h1>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <form onSubmit={handleRegisterSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative">
                                            <input autocomplete="off" id="email" name="username" onChange={handleRegisterForm} type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 text-sm" placeholder="Tài Khoản" />
                                            <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Tên Đăng Nhập </label>
                                        </div>
                                        <div className="relative">
                                            <input autocomplete="off" id="password" name="password" onChange={handleRegisterForm} type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 text-sm" placeholder="Mật Khẩu" />
                                            <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Mật Khẩu</label>
                                        </div>
                                        <div className="relative">
                                            <input autocomplete="off" id="password" name="confirmPassword" onChange={handleRegisterForm} type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 text-sm" placeholder="Mật Khẩu" />
                                            <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Nhập Lại Mật Khẩu</label>
                                        </div>
                                        <div className="relative">
                                            <button className="bg-[#214581] text-white w-32 rounded-md px-2 py-1 text-base">Xác Nhận</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <span>bạn đã có tài khoản? </span>
                                <span className='pl-2 text-blue-700 underline cursor-pointer' onClick={switchLogin}>Đăng Nhập </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
