import { configureStore } from "@reduxjs/toolkit"

import cardReducer from './features/cart/cartSlice.js'

export const store = configureStore({
    reducer: {
        cart: cardReducer
    },
})