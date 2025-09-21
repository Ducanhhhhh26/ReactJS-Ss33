import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: number;
    userName: string;
    gender: string;
    dateBirth: string;
    address: string;
}

interface UserState {
    users: User[];
}

const initialState: UserState = {
    users: [
        {
            id: 1,
            userName: "Nguyễn Văn A",
            gender: "Nam",
            dateBirth: "20/11/2023",
            address: "Thanh Xuân, Hà Nội"
        },
        {
            id: 2,
            userName: "Nguyễn Thị B",
            gender: "Nữ",
            dateBirth: "20/11/2023",
            address: "Cau Giấy, Hà Nội"
        }
    ]
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
        },
        updateUser: (state, action: PayloadAction<User>) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        }
    }
});

export const {
    addUser,
    updateUser,
    deleteUser,
    setUsers
} = userSlice.actions;

export const userReducer = userSlice.reducer;
export type { User };