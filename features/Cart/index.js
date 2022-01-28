import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[{name:"Producto 1"}],
    reducers:{
        addToCart:()=>{
            // Agregar funcionalidad
        }
    }
})
const cartReducer = cartSlice.reducer
export default cartReducer

export const {addToCart} = cartSlice.actions