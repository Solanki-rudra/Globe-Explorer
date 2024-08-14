import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countryData: [],
    backUpData: [],
    searchedCountry: {},
    compareCountries:[]
};

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        setCountryData: (state, action) => {
            state.countryData = action.payload;
            state.backUpData = action.payload;
        },
        filteringCountry: (state, action) => {
            state.countryData = state.backUpData?.filter(country => country.name.toLowerCase().includes(action.payload.toLowerCase().trim()));
        },
        searchCountry: (state, action) => {
            const { countryData, countryName } = action.payload;
            state.searchedCountry = countryData?.find(country => country.name.toLowerCase().trim() === countryName.toLowerCase().trim());
        },
        sortByMaxPopulation:(state,action) => {
            state.countryData?.sort((cntry_a,cntry_b)=>cntry_b.population - cntry_a.population)
        },
        sortByMinPopulation:(state,action)=>{
            state.countryData?.sort((cntry_a,cntry_b)=>cntry_a.population - cntry_b.population)
        },
        sortByAtoZName:(state,action)=>{
            state.countryData?.sort((cntry_a,cntry_b)=>cntry_a.name.localeCompare(cntry_b.name));
        },
        sortByZtoAName:(state,action)=>{
            state.countryData?.sort((cntry_a,cntry_b)=>cntry_b.name.localeCompare(cntry_a.name));
        },
        selectedCountries:(state,action)=>{
            const {countryData,compareCountries} = action.payload;
            state.compareCountries = countryData.filter(country => Object.values(compareCountries).includes(country.name))
        }
    }
});

export const { setCountryData,selectedCountries, filteringCountry, searchCountry, sortByMinArea, sortByMaxArea, sortByMaxPopulation, sortByMinPopulation, sortByAtoZName ,sortByZtoAName} = countrySlice.actions;
export default countrySlice.reducer;
