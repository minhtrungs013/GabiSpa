import { createSlice } from '@reduxjs/toolkit'

const AuthState = {
    refreshToken: null,
    accessToken: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: AuthState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload
        },
        clearAuth: (state) => {
            state.accessToken = null
            state.refreshToken = null
        }
    },
})

// Action creators are generated for each case reducer function
export const { setAccessToken, setRefreshToken, clearAuth } = authSlice.actions

export default authSlice.reducer