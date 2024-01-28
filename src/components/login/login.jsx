import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect } from 'react';

export default function Login({ showModal, closeModal }) {
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
                                <div>
                                    <h1 className="text-2xl font-semibold">Login</h1>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative">
                                            <input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                            <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                        </div>
                                        <div className="relative">
                                            <input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                            <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        </div>
                                        <div className="relative">
                                            <button className="bg-[#214581] text-white w-32 rounded-md px-2 py-1">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex justify-center">
                                <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                    <FontAwesomeIcon icon={faGoogle} className="h-6 w-6 mr-2 text-red-600" />
                                    <span>Continue with Google</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
