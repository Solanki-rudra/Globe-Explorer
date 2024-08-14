import React, { useEffect, useState } from 'react'

const SelectInput = ({ countryNames, selectedCountry }) => {
    const [search, setSearch] = useState('');
    const [isSelectMenu, setIsSelectMenu] = useState(false);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        !search ? setCountries(countryNames) : setCountries(countryNames.filter(country => country.toLowerCase().includes(search.toLowerCase())));
    }, [countryNames, search]);

    function handleChange(e) {
        selectedCountry(null)
        setIsSelectMenu(true)
        setSearch(e.target.value)
    }
    function handleCountryName(name) {
        setSearch(name)
        setIsSelectMenu(false)
        selectedCountry(name)
    }
    return (
        <div >
            <input
                type="text"
                placeholder="Search for a country..."
                value={search}
                className='block w-full p-4 mb-1 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                onChange={handleChange}
            />
            {isSelectMenu && search && <ul className='border-2 border-black bg-gray-700 p-2 rounded text-white overflow-y-scroll max-h-60'>
                {countries.length === 0 ? <li className='rounded'>No Country Found</li> : countries.map((country, index) => (
                    <li onClick={() => handleCountryName(country)} className='bg-gray-600 p-2 rounded my-1 cursor-pointer' key={index}>{country}</li>
                ))}
            </ul>}
        </div>
    )
}

export default SelectInput
