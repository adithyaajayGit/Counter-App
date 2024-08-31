import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";



export const store=configureStore({
    reducer:{
        //reducer should be in key value pair
        counterReducer:CounterSlice
    }
})