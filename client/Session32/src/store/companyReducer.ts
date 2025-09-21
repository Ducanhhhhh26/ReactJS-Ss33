import { createSlice } from "@reduxjs/toolkit";

interface CompanyState {
    name: string;
}

const initialState: CompanyState = {
    name: "Rikkei Academy"
};

const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        changeCompanyName: (state) => {
            // Chuyển đổi giữa "Rikkei Academy" và "RikkeiSoft"
            state.name = state.name === "Rikkei Academy" ? "RikkeiSoft" : "Rikkei Academy";
        },
        setCompanyName: (state, action) => {
            state.name = action.payload;
        }
    }
});

export const { changeCompanyName, setCompanyName } = companySlice.actions;
export const companyReducer = companySlice.reducer;