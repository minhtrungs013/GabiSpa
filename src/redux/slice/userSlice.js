import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    role: '',
    usename: null,
    idUser: null,
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
        setIdUser: (state, action) => {
            state.idUser = action.payload
        },
        clearUserSlice: (state, action) => {
            state.isLoggedIn = false;
            state.role = '';
            state.usename = null;
            state.idUser = null;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setLoggedIn, setRole, setUsername, setIdUser, clearUserSlice } = userSlice.actions

export default userSlice.reducer