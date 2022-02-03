import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../features/Cart'
import paymentReducer from '../features/Ejemplo'

const store = configureStore({
    reducer:{
        cart:cartReducer,
        payment:paymentReducer
    }
})

export default store