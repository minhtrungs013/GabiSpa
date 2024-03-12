import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    serviceId: null,
}

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setServiceId: (state, action) => {
            state.serviceId = action.payload
        },
        clearServiceSlice: (state, action) => {
            state.serviceId = null;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setServiceId, clearServiceSlice } = serviceSlice.actions

export default serviceSlice.reducer