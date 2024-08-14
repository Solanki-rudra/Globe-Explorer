import React, { useState } from 'react'
import SelectionMenu from './selectionMenu'
import CountriesComparison from './countriesCompare';

const Compare = () => {
  const [compareCountries, setCompareCountries] = useState(null);
  return (
    <div className='pt-14 lg:p-14 bg-slate-700 min-h-screen'>
      {compareCountries?<CountriesComparison setCompareCountries={setCompareCountries} compareCountries={compareCountries}/>:<SelectionMenu forCompareCountries={(countries)=>setCompareCountries(countries)}/>}
    </div>
  )
}

export default Compare
