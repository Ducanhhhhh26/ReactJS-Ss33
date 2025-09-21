import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterReducer";
import { userReducer } from "./userReducer";
import { randomNumberReducer } from "./randomNumberReducer";
import { companyReducer } from "./companyReducer";
import { themeReducer } from "./themeReducer";
import { authReducer } from "./authReducer";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        randomNumber: randomNumberReducer,
        company: companyReducer,
        theme: themeReducer,
        auth: authReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;