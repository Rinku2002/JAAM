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

//imported as uiReducer
export default info.reducer