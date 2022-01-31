import { configureStore } from '@reduxjs/toolkit'

import productModalReducer from './product-modal/productModalSlide'

import cartItemsReducer from './shopping-cart/cartItemSlide'

export const store = configureStore({
    reducer: {
        productModal: productModalReducer,
        cartItems: cartItemsReducer
    },
})