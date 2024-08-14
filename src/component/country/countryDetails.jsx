import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { searchCountry } from '../../features/country/countrySlice';
import { useCountryData } from '../../contexts/countryContext';

const CountryDetails = () => {
    const searchedCountry = useSelector(state => state.country.searchedCountry);
    const countryData = useCountryData();
    const dispatch = useDispatch();
    const { countryName } = useParams();

    useEffect(() => {
        if (countryData) {
            dispatch(searchCountry({ countryData, countryName }));
        }
    }, [dispatch, countryData, countryName]);

    return (
        <div className='pt-14 bg-slate-700 min-h-screen'>
            {searchedCountry ? (
                <div className="bg-cover bg-center w-[100vw] h-[92vh] grid place-items-center" style={{ backgroundImage: `url(${searchedCountry.flag})` }}>
                    <div className='bg-black/80 min-w-[50vw] text-white sm:p-10 p-5 rounded w-fit'>
                        <div className='py-2 flex justify-between border-b-2'><h1>Name</h1><h1 className='flex'>{searchedCountry.name} <img width={20} height={20} className='ml-2' src={searchedCountry.flags?.svg} /></h1></div>
                        <div className='py-2 flex justify-between border-b-2'><h1>Native name</h1><h1>{searchedCountry.nativeName}</h1></div>
                        <div className='py-2 flex justify-between border-b-2'><h1>Capital</h1><h1>{searchedCountry.capital}</h1></div>
                        <div className='py-2 flex justify-between border-b-2'><h1>Area</h1><h1>{searchedCountry.area} sq. km</h1></div>
                        <div className='py-2 flex justify-between border-b-2'><h1>Population</h1><h1>{searchedCountry.population}</h1></div>
                        <div className='py-2 flex justify-between border-b-2'><h1>Region</h1><h1>{searchedCountry.region}</h1></div>
                        <div className='py-2 flex justify-between border-b-2'><h1>Calling codes</h1><h1>{searchedCountry.callingCodes?.join(', ')}</h1></div>
                        <div className='py-2 flex justify-between border-b-2'><h1>Share borders</h1><h1>{searchedCountry.borders?.join(', ')}</h1></div>
                        <div className='py-2 flex justify-between border-b-2'><h1>Timezones</h1><h1>{searchedCountry.timezones?.join(', ')}</h1></div>
                        <div className='py-2 flex justify-between border-b-2'><h1>Top level domain</h1><h1>{searchedCountry.topLevelDomain?.join(', ')}</h1></div>
                        <div className='py-2 flex justify-between border-b-2'><h1>Alpha code 3</h1><h1>{searchedCountry.alpha3Code}</h1></div>
                        <div className='py-2 flex justify-between border-b-2'><h1>Currencies</h1><h1>{searchedCountry.currencies?.map(cur=>cur.code+' | '+cur.name+' | '+cur.symbol).join(', ')}</h1></div>
                        <div className='py-2 flex justify-between border-b-2'><h1>Languages</h1><h1>{searchedCountry.languages?.map(lan=>lan.name+' | '+lan.nativeName+' | '+lan.iso639_2).join(', ')}</h1></div>
                        <div className='py-2 flex justify-between border-b-2'><h1>Demonym</h1><h1>{searchedCountry.demonym}</h1></div>
                    </div>
                    <Link to='/country' className='bg-blue-700 border-2 border-blue-800 p-2 px-4 text-white rounded m-2'>Back</Link>
                </div>
            ) : (
                <p className='text-xl text-center'>Country not found</p>
            )}
        </div>
    );
}

export default CountryDetails;
