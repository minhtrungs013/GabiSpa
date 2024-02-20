import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    role: 'Admin',
    usename: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        },
        setRole: (state, action) => {
            state.role = action.payload
        },
        setUsername: (state, action) => {
            state.usename = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setLoggedIn, setRole, setUsername } = userSlice.actions

export default userSlice.reducer