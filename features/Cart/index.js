import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const saveCart = createAsyncThunk("cart/saveCart",async (cart,{getState})=>{
    const {cart:{items}} = getState()
    
    const result = await fetch("http://localhost:3000/api/cart",{
        method:"POST",
        body:JSON.stringify({username:"tzuzulcode",data:{items}}),
        headers:{
            "Content-Type":"application/json"
        }
    })

    const data = await result.json()
    console.log(data)

    return data
})

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        loading:false,
        error:false,
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
    },
    extraReducers(builder){
        builder.addCase(saveCart.pending,(state,action)=>{
            state.loading = true
        }).addCase(saveCart.fulfilled,(state,action)=>{
            state.loading = false
            state.error = false
            console.log(action.payload)
        }).addCase(saveCart.rejected,(state,action)=>{
            state.loading = false
            state.error = true
        })
    }
})
const cartReducer = cartSlice.reducer
export default cartReducer

export const {addToCart,removeFromCart,reduceFromCart} = cartSlice.actions