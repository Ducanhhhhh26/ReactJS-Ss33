import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        default: (state) => {
            state.value = 0;
        }
    }
});

export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;