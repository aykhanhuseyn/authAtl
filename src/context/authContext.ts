import { createContext } from 'react';

type User = {
	name: string;
};
type Database = {
	user?: User;
};
type Action = {
	payload: User;
	type: 'LOGIN' | 'LOGOUT';
};

export const initialState: Database = {};

export const AuthContext = createContext<{
	user: Database;
	dispatch: React.Dispatch<any>;
}>({
	user: initialState,
	dispatch: () => null,
});

export const reducer = (state: Database, action: Action) => {
	console.log('reducer', state, action);

	switch (action.type) {
		case 'LOGIN':
			state.user = { name: String(action.payload) };
			return state;
		case 'LOGOUT':
			state.user = undefined;
			return state;
		default:
			return state;
	}
};
