import { createSlice } from "@reduxjs/toolkit";

interface RandomNumberState {
    numbers: number[];
}

const initialState: RandomNumberState = {
    numbers: []
};

const randomNumberSlice = createSlice({
    name: 'randomNumber',
    initialState,
    reducers: {
        addRandomNumber: (state) => {
            const randomNum = Math.floor(Math.random() * 100) + 1; // Random number 1-100
            state.numbers.push(randomNum);
        },

    }
});

export const { addRandomNumber } = randomNumberSlice.actions;
export const randomNumberReducer = randomNumberSlice.reducer;