import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const DaySlice = createSlice({
    name:'day',
    initialState:{
        activeDay:''
    },
    reducers:{
        dayChange(state,action) {
            console.log(action);
            state.activeDay = action.payload;
        }
    }
})

export const selectActiveDay = (state:RootState) => state.day.activeDay;
export const {dayChange} = DaySlice.actions;
export default DaySlice.reducer;