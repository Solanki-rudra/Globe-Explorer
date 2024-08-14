import React, { useEffect, useState } from 'react'
import { useCountryData } from '../../contexts/countryContext'
import { useSelector, useDispatch } from 'react-redux'
import { setCountryData, filteringCountry } from '../../features/country/countrySlice'
import CountryList from '../country/countryList'
import SearchInput from './searchInput'
import Pagination from '../../shared/pagination'
import SortingCountry from './sortingCountry'

const CountryHome = () => {
    const dataFromStore = useSelector(state => state.country.countryData)
    const dispatch = useDispatch()
    const countryData = useCountryData()
    useEffect(() => {
            dispatch(setCountryData(countryData));
    }, [countryData]);

    // pagination 
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);
    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = dataFromStore?.slice(firstPostIndex, lastPostIndex)

    const handleChange = (value) => {
        let timer;
        clearTimeout(timer)
        timer = setTimeout(() => {
            dispatch(filteringCountry(value))
        }, 500)
    }


    return (
        <div className='pt-14 bg-slate-700 min-h-screen'>
            <div className='flex justify-center items-center gap-1 sm:gap-4'>
                <SearchInput handleChange={(e) => handleChange(e.target.value)} />
                <SortingCountry />
            </div>
            <div className='flex flex-wrap gap-3 justify-center'>
                {
                    dataFromStore ? dataFromStore.length === 0 ? <p>No Data Found</p> : <><CountryList dataFromStore={currentPosts} /> <Pagination totalPosts={dataFromStore.length} postsPerPage={postsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} /></> : <div className="lds-ripple"><div></div><div></div></div>
                }
            </div>
        </div>
    )
}

export default CountryHome
