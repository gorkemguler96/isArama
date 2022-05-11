import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        favoryAdd: (state,action) => {
            state.value = action.payload
        },
        removeItem: (state,action) => {
            state.value = action.payload
        }
    },
})

export const { favoryAdd, removeItem } = counterSlice.actions

export default counterSlice.reducer
