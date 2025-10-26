import { configureStore } from "@reduxjs/toolkit"

import cardReducer from './features/cart/cartSlice.js'
import booksApi from "./features/books/booksApi.js"
import ordersApi from "./features/orders/ordersApi.js"

export const store = configureStore({
    reducer: {
        cart: cardReducer,
        [booksApi.reducerPath]: booksApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
})