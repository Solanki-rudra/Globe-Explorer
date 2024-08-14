import {configureStore} from '@reduxjs/toolkit'
import countryReducer from '../features/country/countrySlice'
import quizReducer from '../features/country/quizSlice'

export const store = configureStore({
    reducer: {
        country: countryReducer,
        quiz: quizReducer
    }
}) 