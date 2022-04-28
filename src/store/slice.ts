import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {
		username: '',
		password: '',
	},
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, { payload }) {
			state.user = payload;
		},
		logout(state) {
			state.user = null;
		},
	},
});

export const userSelector = (state: { user: string }) => state.user;
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
