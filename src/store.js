import userReducer from './Features/User/userSlice'
import cartReducer from './Features/Cart/CartSlice'
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    }
})