import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
    name: "timer",
    initialState: {
        timer: "",
    },
    reducers: {
        storeTimer: (state, action) => {
            console.log(action)
            state.timer = action.payload;
        },
    },
});

export const { storeTimer } = timerSlice.actions;
export default timerSlice.reducer;
