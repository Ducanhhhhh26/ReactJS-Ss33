import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserAccount {
    email: string;
    password: string;
    fullName: string;
}

interface AuthState {
    registeredAccount: UserAccount | null;
    currentView: 'register' | 'login';
    isLoggedIn: boolean;
    loginForm: {
        email: string;
        password: string;
    };
}

const initialState: AuthState = {
    registeredAccount: null,
    currentView: 'register',
    isLoggedIn: false,
    loginForm: {
        email: '',
        password: ''
    }
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerUser: (state, action: PayloadAction<UserAccount>) => {
            state.registeredAccount = action.payload;
            state.currentView = 'login';
            // Auto-fill login form với thông tin vừa đăng ký
            state.loginForm.email = action.payload.email;
            state.loginForm.password = action.payload.password;
        },
        switchToLogin: (state) => {
            state.currentView = 'login';
        },
        switchToRegister: (state) => {
            state.currentView = 'register';
        },
        updateLoginForm: (state, action: PayloadAction<{ field: 'email' | 'password'; value: string }>) => {
            state.loginForm[action.payload.field] = action.payload.value;
        },
        clearLoginForm: (state) => {
            state.loginForm = { email: '', password: '' };
        },
        loginUser: (state) => {
            state.isLoggedIn = true;
        },
        logoutUser: (state) => {
            state.isLoggedIn = false;
            state.loginForm = { email: '', password: '' };
        }
    }
});

export const {
    registerUser,
    switchToLogin,
    switchToRegister,
    updateLoginForm,
    clearLoginForm,
    loginUser,
    logoutUser
} = authSlice.actions;

export const authReducer = authSlice.reducer;
export type { UserAccount };