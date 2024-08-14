'use client'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../component/auth/auth'

export default function Header() {
    const auth = useAuth()
    const [navigation, setNavigation] = useState(false)

    return (
        <header className='fixed z-30 left-0 right-0 '>
            <nav className="bg-white  border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-500/75">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <NavLink to='/' className="flex items-center">
                        <span className="self-center py-2 text-xl font-semibold whitespace-nowrap dark:text-white">
                            GE
                        </span>
                    </NavLink>
                    <div className="flex items-center lg:order-2">
                        {!auth.user && <NavLink
                            to="login"
                            className="text-gray-800 dark:text-white hover:bg-gray-50 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700"
                        >
                            Log in
                        </NavLink>}
                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            onClick={() => setNavigation(!navigation)}
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                        >
                            {
                                !navigation ?
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg> :
                                    <svg
                                        className=" w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                            }
                        </button>
                    </div>
                    <div
                        className={`justify-between items-center transition-all delay-75 w-full lg:flex lg:w-auto lg:order-1 ${!navigation ? 'hidden' : ''}`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? 'text-white' : 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/country"
                                    className={({ isActive }) =>
                                        isActive ? 'text-white' : 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                                    }
                                >
                                    Country
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/compare"
                                    className={({ isActive }) =>
                                        isActive ? 'text-white' : 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                                    }
                                >
                                    Compare
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/quiz"
                                    className={({ isActive }) =>
                                        isActive ? 'text-white' : 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                                    }
                                >
                                    Quiz
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/account"
                                    className={({ isActive }) =>
                                        isActive ? 'text-white' : 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                                    }
                                >
                                    Account
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
