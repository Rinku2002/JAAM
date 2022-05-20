import { createSlice } from "@reduxjs/toolkit";
  
export const cinfo=createSlice({

    reducers:{
        addcinfo:(state,action)=>{
            state.pop()
            state.push(action.payload)
        }
    },
    name: "ci",
    initialState:[]
})
export const {addcinfo}=cinfo.actions

export default cinfo.reducer