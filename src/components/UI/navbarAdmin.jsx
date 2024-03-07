import { faPowerOff, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLoggedIn, setRole, setUsername } from '../../redux/slice/userSlice';
import { persistor } from '../../redux/store';

export default function NavbarAdmin() {
    const dispatch = useDispatch();

    const Logout = () => {
        persistor.purge()
        dispatch(setLoggedIn(false))
        dispatch(setUsername(null))
        dispatch(setRole(''))
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('access_token')
        localStorage.removeItem('persist:root')
    }

    return (
        <div className="relative flex flex-wrap items-center justify-between px-0 py-4 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start" navbar-main navbar-scroll="true">
            <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                    <div className="flex items-center md:ml-auto md:pr-4">
                        <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                            <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                                <FontAwesomeIcon icon={faSearch} className='h-4 w-4 text-2xl pr-1' />
                            </span>
                            <input type="text" className="pl-8 text-sm  ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="Type here..." />
                        </div>
                    </div>
                    <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                        <li className="flex items-center">
                            {/* <Link className="flex px-0 py-2 text-sm font-semibold transition-all ease-nav-brand text-slate-500">
                                <FontAwesomeIcon icon={faUser} className='h-4 w-4 text-2xl pr-1' />
                                <span className="hidden sm:inline">Sign In</span>
                            </Link> */}
                        </li>
                        <li className="flex items-center px-4">
                            <Link to={'/GabiSpa'} className="p-0 text-sm transition-all ease-nav-brand text-slate-500" onClick={() => Logout()}>
                                <FontAwesomeIcon icon={faPowerOff} className="block h-4 w-4 rounded-sm " />
                                {/* fixed-plugin-button-nav  */}
                            </Link>
                        </li>
                        {/* notifications */}
                    </ul>
                </div>
            </div>
        </div>
    )
}
