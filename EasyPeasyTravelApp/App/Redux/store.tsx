import { configureStore } from "@reduxjs/toolkit";
import daySlice from "./Slices/daySlice";
const store = configureStore({
    reducer:{
        day:daySlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export default store;