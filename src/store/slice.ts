import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';

type User = {
	username: string;
	password: string;
}
type State = {
	user: User | null;
};

const initialState: State = {
	user: {
		username: '',
		password: '',
	},
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, { payload }: PayloadAction<User>) {
			state.user = payload;
		},
		logout(state) {
			state.user = null;
		},
	},
});

export const userSelector = (state: RootState) => state.user;
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
