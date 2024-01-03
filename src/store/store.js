import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { persistReducer, persistStore, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { apiSlice } from './api/apiSlice'
import authReducer from './features/authSlice'

const rootReducer = combineReducers({
    auth: authReducer,
    [apiSlice.reducerPath] : apiSlice.reducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['auth'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        }).concat([apiSlice.middleware]),
    devTools: true
})

export const persistor = persistStore(store)

setupListeners(store.dispatch)

export default store;
