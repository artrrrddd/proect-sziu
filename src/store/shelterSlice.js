import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  animalsHelped: 7780,
  cats: 500,
  sickCats: 100,
}

export const shelterSlice = createSlice({
  name: 'shelter',
  initialState,
  reducers: {
    incrementAnimals: (state) => {
      state.animalsHelped += 1
    },
    setAnimalsHelped: (state, action) => {
      state.animalsHelped = action.payload
    },
  },
})

export const { incrementAnimals, setAnimalsHelped } = shelterSlice.actions

export default shelterSlice.reducer

