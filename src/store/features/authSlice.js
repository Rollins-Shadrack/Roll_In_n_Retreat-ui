import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token:null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken, refreshToken, role } = action.payload;
            state.user = user;
            state.token = accessToken;
            state.refreshToken = refreshToken;
            state.role = role;
        },
        logOut: (state, action) => {
            state.user = null;
            state.token = null;
        },
        setAccessToken: (state, action) => {
            state.token = action.payload;
        }
    }
})

export const { setCredentials, logOut } = authSlice.actions;

export const selectUserAuth = (state) => state.auth;

export const currentUser = (state) => state.auth.user;

export const currentUserRole = (state) => state.auth.role

export default authSlice.reducer;