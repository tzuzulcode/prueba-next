import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth",
    initialState:{
        logged:false,
        loading:false,
        email:"",
        id:""
    },
    reducers:{
        login:(state,action)=>{
            state.logged = true 
        },
        logout:(state,action)=>{
            state.logged = false
        }
        
    }
})
const authReducer = authSlice.reducer
export default authReducer

export const {login,logout} = authSlice.actions