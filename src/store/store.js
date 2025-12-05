import { configureStore } from '@reduxjs/toolkit'
import shelterReducer from './shelterSlice'

export const store = configureStore({
  reducer: {
    shelter: shelterReducer,
  },
})
