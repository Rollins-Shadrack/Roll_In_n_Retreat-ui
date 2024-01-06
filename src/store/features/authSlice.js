import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null },
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken, refreshToken } = action.payload;
            state.user = user
            state.token = accessToken
            state.refreshToken = refreshToken
        },
        setAccessToken: (state, action) => {
            state.token = action.payload
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
        }
    }
})

export const { setCredentials, logOut, setAccessToken } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentRefreshToken = (state) => state.auth.refreshToken;