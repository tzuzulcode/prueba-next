import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            // action.payload es el nuevo producto
            state.push(action.payload)
            // Redux toolkit hace esto por detrás setState([...state])
        },
        removeFromCart:(state,{payload})=>{
            state = state.filter(product=>product.id!==payload.id)
        }
    }
})
const cartReducer = cartSlice.reducer
export default cartReducer

export const {addToCart,removeFromCart} = cartSlice.actions