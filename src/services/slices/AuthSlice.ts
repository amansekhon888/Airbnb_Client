import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: !!localStorage.getItem('token'), // Check token for initial auth state
        openModal: false,
    },
    reducers: {
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setOpenModal: (state, action) => {
            state.openModal = action.payload;
        },
        logout: (state) => {
            localStorage.removeItem("token");
            state.isAuthenticated = false;
        },
    },
});

export const { setIsAuthenticated, setOpenModal, logout } = authSlice.actions;
export default authSlice.reducer;