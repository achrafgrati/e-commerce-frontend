import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleSlice"
import cartSliceReducer from "../features/cartSlice"
import scaategoriesReducer from "../features/scategorieSlice"
import authReducer from "../features/authSlice"

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,

}
const persistedReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({
    reducer: {
        storearticles: articlesReducer,
        storescategories: scaategoriesReducer,
        storecart: cartSliceReducer,
        auth: persistedReducer
    },
    middleware: [thunk]
})
export default store