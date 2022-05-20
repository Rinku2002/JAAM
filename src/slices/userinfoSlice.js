import { createSlice } from "@reduxjs/toolkit";
  
export const info=createSlice({
    
    reducers:{
        addinfo:(state,action)=>{
            state.push(action.payload)
        }
    },
    name: "ui",
    initialState:[]
})
export const {addinfo}=info.actions

export default info.reducer