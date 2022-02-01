import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            // action.payload es el nuevo producto
            const index = state.items.findIndex(item=>item.id===action.payload.id)
            if(index!==-1){
                state.items[index].cantidad +=1
            }else{
                action.payload.cantidad = 1
                state.items.push(action.payload)
            }
            
            // Redux toolkit hace esto por detrás setState({...state})
        },
        removeFromCart:(state,{payload})=>{
            state.items = state.items.filter(product=>product.id!==payload.id)
        },
        reduceFromCart:(state,{payload})=>{
            const index = state.items.findIndex(item=>item.id===payload.id)
            if(index!==-1){
                const item = state.items[index]
                item.cantidad -= 1
                if(item.cantidad===0){
                    state.items.splice(index,1)
                }
            }
        }
    }
})
const cartReducer = cartSlice.reducer
export default cartReducer

export const {addToCart,removeFromCart,reduceFromCart} = cartSlice.actions