import React from 'react'
import { useNavigate } from 'react-router-dom'

const CountryList = ({ dataFromStore }) => {
    const navigate = useNavigate()
    return (
        <>
            {
                dataFromStore.map((country, index) => (
                    <div className='cursor-pointer hover:scale-105 hover:shadow-xl shadow-black transition-all' onClick={()=>navigate('/country/'+country.name)} key={index}>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img className="rounded-t-lg h-40 w-80 " src={country.flag} alt={country.name} />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{country.name.length > 20 ? country.name.substring(0, 20) + ' ...' : country.name}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{country.alpha3Code}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}


export default CountryList
