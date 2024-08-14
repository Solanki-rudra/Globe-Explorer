import React, { useEffect, useState } from 'react'
import { useCountryData } from '../../contexts/countryContext'
import SelectInput from './selectInput'

const SelectionMenu = ({forCompareCountries}) => {
    const countryData = useCountryData()
    const [countryNames, setCountryNames] = useState([]);
    const [selectError, setSelectError] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState({c_1:null, c_2:null});
  
    function handleSubmit(e) {
      e.preventDefault()
      if(selectedCountries.c_1 === selectedCountries.c_2){
        setSelectError('Please select different countries')
      }else if(!Object.values(selectedCountries).includes(null)){
        setSelectError(null)
        forCompareCountries(selectedCountries)
      }else{
        setSelectError('Please select country')
      }
    }
    
    useEffect(() => {
      if (!countryData) return;
        setCountryNames(countryData.map(country => country.name));
    }, [countryData]);
    return (
        <form onSubmit={handleSubmit} className='flex flex-col w-[80vw] sm:w-[40vw] gap-2 p-2 sm:p-10 mx-auto'>
            <SelectInput countryNames={countryNames} selectedCountry={(country) => setSelectedCountries(pv => ({ ...pv, c_1: country }))} />
            <SelectInput countryNames={countryNames} selectedCountry={(country) => setSelectedCountries(pv => ({ ...pv, c_2: country }))} />
            {selectError && <p className='text-red-800'>{selectError}</p>}
            <button className='text-white w-fit bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm h-max px-5 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Search</button>
        </form>
    )
}

export default SelectionMenu   
