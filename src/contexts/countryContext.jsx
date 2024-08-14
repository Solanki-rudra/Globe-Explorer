import React, { createContext, useContext, useEffect, useState } from 'react'
import {REST_CONTRIES} from '../config/apis'

const countryCreateContext = createContext()

const CountryContext = ({children}) => {
    const [countryData, setCountryData] = useState();
    useEffect(()=>{
        fetchApi()
    },[])
    const fetchApi = async() => {
        try {
            const response = await fetch(REST_CONTRIES)
            const result = await response.json()
            setCountryData(result)
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <countryCreateContext.Provider value={countryData}>
      {children}
    </countryCreateContext.Provider>
  )
}
export const useCountryData = () => {
  return useContext(countryCreateContext)
}
export default CountryContext
