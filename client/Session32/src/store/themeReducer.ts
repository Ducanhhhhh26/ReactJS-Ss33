import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
    isDarkMode: boolean;
}

const initialState: ThemeState = {
    isDarkMode: false // Mặc định là chế độ sáng
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        setLightMode: (state) => {
            state.isDarkMode = false;
        },
        setDarkMode: (state) => {
            state.isDarkMode = true;
        }
    }
});

export const { toggleTheme, setLightMode, setDarkMode } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;