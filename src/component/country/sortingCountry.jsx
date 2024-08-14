import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { sortByAtoZName, sortByMaxArea, sortByMaxPopulation,sortByMinArea,sortByMinPopulation, sortByZtoAName } from '../../features/country/countrySlice';

const SortingCountry = () => {
    const dispatch = useDispatch()
    const [showDropDown, setShowDropDown] = useState(false);
    return (
            <div className=' relative '>
                <button
                    onClick={()=>setShowDropDown(!showDropDown)}
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm h-max lg:px-5 lg:py-4 p-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                >
                    Sort Country
                    <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </button>
                <div
                    id="dropdown"
                    className={`z-10 ${showDropDown ? '':'hidden'} left-0 bg-white divide-y absolute divide-gray-100 rounded-lg shadow sm:w-44  dark:bg-gray-700`}
                >
                    <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                    >
                        <li className='bg-gray-600 m-1'>
                            <button
                                onClick={()=>{dispatch(sortByAtoZName())
                                             setShowDropDown(false)}}
                                className="block px-4 py-2   dark:hover:text-white"
                            >
                                A - Z
                            </button>
                        </li>
                        <li className='bg-gray-600 m-1'>
                            <button
                                onClick={()=>{dispatch(sortByZtoAName())
                                             setShowDropDown(false)}}
                                className="block px-4 py-2   dark:hover:text-white"
                            >
                                Z - A
                            </button>
                        </li>
                        <li className='bg-gray-600 m-1'>
                            <button
                                onClick={()=>{dispatch(sortByMaxPopulation())
                                    setShowDropDown(false)
                                }}
                                className="block px-4 py-2   dark:hover:text-white"
                            >
                                Max Population
                            </button>
                        </li>
                        <li className='bg-gray-600 m-1'>
                            <button
                                onClick={()=>{dispatch(sortByMinPopulation())
                                    setShowDropDown(false)
                                }}
                                className="block px-4 py-2   dark:hover:text-white"
                            >
                                Min Population
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default SortingCountry
