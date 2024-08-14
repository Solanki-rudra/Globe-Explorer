import React, { useEffect } from 'react'
import { useCountryData } from '../../contexts/countryContext'
import { useDispatch, useSelector } from 'react-redux';
import { selectedCountries } from '../../features/country/countrySlice';
import { Link } from 'react-router-dom';

const CountriesComparison = ({ compareCountries,setCompareCountries }) => {
    const countryData = useCountryData()
    const dispatch = useDispatch()
    const compareCountriesDetails = useSelector(state => state.country.compareCountries)
    useEffect(() => {
        console.log(compareCountries)
        dispatch(selectedCountries({ countryData, compareCountries }))
    }, []);
    let country1 = compareCountriesDetails[0]
    let country2 = compareCountriesDetails[1]
    return (
        <div className="relative sm:w-[90vw] sm:py-5 mx-auto  overflow-x-auto">
            {compareCountriesDetails && compareCountriesDetails.length > 0 && <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">
                            Details
                        </th>
                        <th className="px-6 py-3">
                            <div className='flex justify-center items-center'><span>{country1.name}</span> <span><img width={20} height={20} className='ml-2' src={country1.flag} /></span></div>
                        </th>
                        <th className="px-6 py-3">
                            <div className='flex items-center justify-center'><span>{country2.name}</span> <span><img width={20} height={20} className='ml-2' src={country2.flag} /></span></div>
                        </th>
                    </tr>
                </thead>
                <tbody className='text-gray-700 text-center bg-gray-50 dark:bg-gray-600 dark:text-gray-400'>
                    <tr className='border-b-2 border-gray-700'>
                        <th className="px-6 py-3 uppercase">Flag</th>
                        <td className="px-6 py-3">
                            <img src={country1.flags.png} className='mx-auto' width={70} />
                        </td>
                        <td className="px-6 py-3 ">
                            <img src={country2.flags.png} className='mx-auto' width={70} />
                        </td>
                    </tr>
                    <tr className='border-b-2 border-gray-700'>
                        <th className="px-6 py-3 uppercase">Alpha codes</th>
                        <td className="px-6 py-3">
                            {country1.alpha2Code}, {country1.alpha3Code}
                        </td>
                        <td className="px-6 py-3">
                            {country2.alpha2Code}, {country2.alpha3Code}
                        </td>
                    </tr>
                    <tr className='border-b-2 border-gray-700'>
                        <th className="px-6 py-3 uppercase">Capital</th>
                        <td className="px-6 py-3">
                            {country1.capital}
                        </td>
                        <td className="px-6 py-3">
                            {country2.capital}
                        </td>
                    </tr>
                    <tr className='border-b-2 border-gray-700'>
                        <th className="px-6 py-3 uppercase">Independent</th>
                        <td className={`px-6 py-3 ${country1.independent ? 'text-green-600' : 'text-red-600'}`}>
                            {String(country1.independent)}
                        </td>
                        <td className={`px-6 py-3 ${country2.independent ? 'text-green-600' : 'text-red-600'}`}>
                            {String(country2.independent)}
                        </td>
                    </tr>
                    <tr className='border-b-2 border-gray-700'>
                        <th className="px-6 py-3 uppercase">Area</th>
                        <td className={`px-6 py-3 ${country1.area > country2.area ? 'text-green-600' : 'text-red-600'}`}>
                            {country1.area} sq. km
                        </td>
                        <td className={`px-6 py-3 ${country2.area > country1.area ? 'text-green-600' : 'text-red-600'}`}>
                            {country2.area} sq. km
                        </td>
                    </tr>
                    <tr className='border-b-2 border-gray-700'>
                        <th className="px-6 py-3 uppercase">Population</th>
                        <td className={`px-6 py-3 ${country1.population > country2.population ? 'text-green-600' : 'text-red-600'}`}>
                            {country1.population} 
                        </td>
                        <td className={`px-6 py-3 ${country2.population > country1.population ? 'text-green-600' : 'text-red-600'}`}>
                            {country2.population} 
                        </td>
                    </tr>
                    <tr className='border-b-2 border-gray-700'>
                        <th className="px-6 py-3 uppercase">Languages</th>
                        <td className={`px-6 py-3 ${country1.languages.length > country2.languages.length && 'text-green-600' }`}>
                            {country1.languages.length}X {country1.languages.map(l=>l.name).join(', ')} 
                        </td>
                        <td className={`px-6 py-3 ${country2.languages.length > country1.languages.length && 'text-green-600' }`}>
                            {country2.languages.length}X {country2.languages.map(l=>l.name).join(', ')} 
                        </td>
                    </tr>
                    <tr className='border-b-2 border-gray-700'>
                        <th className="px-6 py-3 uppercase">Currencies</th>
                        <td className={`px-6 py-3`}>
                            {country1.currencies.length}X {country1.currencies.map(l=>l.name +' '+ l.symbol).join(', ')} 
                        </td>
                        <td className={`px-6 py-3`}>
                            {country2.currencies.length}X {country2.currencies.map(l=>l.name +' '+ l.symbol).join(', ')} 
                        </td>
                    </tr>
                    <tr className='border-b-2 border-gray-700'>
                        <th className="px-6 py-3 uppercase">Borders</th>
                        <td className="px-6 py-3">
                            {country1.borders && country1.borders.length > 0 
                                ? `${country1.borders.length}X ${country1.borders.join(', ')}`
                                : 'No borders shared'}
                        </td>
                        <td className="px-6 py-3">
                            {country2.borders && country2.borders.length > 0 
                                ? `${country2.borders.length}X ${country2.borders.join(', ')}`
                                : 'No borders shared'}
                        </td>
                    </tr>
                    <tr className='border-b-2 border-gray-700'>
                        <th className="px-6 py-3 uppercase">Calling Codes</th>
                        <td className={`px-6 py-3`}>
                            {country1.callingCodes.length}X {country1.callingCodes.join(', ')} 
                        </td>
                        <td className={`px-6 py-3`}>
                            {country2.callingCodes.length}X {country2.callingCodes.join(', ')} 
                        </td>
                    </tr>
                </tbody>
            </table>}
            <button className='bg-blue-700 border-2 border-blue-800 p-2 px-4 text-white rounded my-2' onClick={()=>setCompareCountries(null)}>Back</button>
        </div>

    )
}

export default CountriesComparison
