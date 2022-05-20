import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './slices/userinfoSlice'
import ciReducer from './slices/courseinfoslice'

export const store=configureStore({
    reducer:{
        ui: uiReducer,
        ci: ciReducer
    }
})
