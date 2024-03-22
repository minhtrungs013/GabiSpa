import { faBars, faPowerOff, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../../redux/slice/authSlice';
import { clearUserSlice, setLoggedIn, setRole, setUsername } from '../../redux/slice/userSlice';
import { persistor } from '../../redux/store';
import SlideBar from './slideBar';

export default function NavbarAdmin() {
    const [showPanigate, setShowPanigate] = useState(false)
    const dispatch = useDispatch();

    const Logout = () => {
        persistor.purge()
        dispatch(setLoggedIn(false))
        dispatch(setUsername(null))
        dispatch(setRole(''))
        dispatch(clearUserSlice())
        dispatch(clearAuth())
    }

    const handleShowPanigate = () => {
        setShowPanigate(!showPanigate)
    }

    return (
        <div className="relative flex flex-wrap items-center justify-between px-0 py-4 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start" navbar-main navbar-scroll="true">
            <div className="flex items-center justify-between w-full lg:px-4 py-1 mx-auto flex-wrap-inherit">
                <div className="flex justify-between items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                    <div className="flex items-center md:ml-auto md:pr-4">
                        <div className="relative flex items-center flex-wrap  w-full transition-all rounded-lg ease-soft">
                            <span className="block lg:hidden md:hidden text-sm ease-soft leading-5.6 absolute z-50 -ml-px  h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                                <FontAwesomeIcon icon={faBars} className='h-4 w-4 text-2xl pr-1' onClick={handleShowPanigate} />
                            </span>
                            <span className="hidden text-sm ease-soft leading-5.6 absolute z-50 -ml-px lg:flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                                <FontAwesomeIcon icon={faSearch} className='h-4 w-4 text-2xl pr-1' />
                            </span>
                            <input type="text" className="hidden pl-8 text-sm  ease-soft w-1/100 leading-5.6 relative -ml-px lg:block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="Type here..." />
                        </div>
                    </div>
                    <div className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                        <li className="flex items-center">
                        </li>
                        <li className="flex items-center px-4">
                            <Link to={'/GabiSpa'} className="p-0 text-sm transition-all ease-nav-brand text-slate-500" onClick={() => Logout()}>
                                <FontAwesomeIcon icon={faPowerOff} className="block h-4 w-4 rounded-sm " />
                            </Link>
                        </li>
                    </div>
                </div>
            </div>
            <div className={` z-50 fixed top-0 bottom-0 ${showPanigate ? '!left-[-24px] slideIn' : '!left-[-350px]  slideOut'} `}>
                <SlideBar handleShowPanigate={handleShowPanigate} />
            </div>
        </div>
    )
}
