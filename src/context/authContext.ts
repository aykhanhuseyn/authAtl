import { createContext } from 'react';

type User = {
	username: string;
	password: string;
};
type State = {
	user?: User;
};
type Action =
	| {
			type: 'LOGIN';
			payload: User;
	  }
	| {
			type: 'LOGOUT';
	  };

export const initialState: State = {};

export const AuthContext = createContext<{
	state: State;
	dispatch: React.Dispatch<Action>;
}>({
	state: initialState,
	dispatch: () => null,
});

export function reducer(state: State, action: Action) {
	switch (action.type) {
		case 'LOGIN':
			state.user = action.payload;
			return state;
		case 'LOGOUT':
			state.user = undefined;
			return state;
		default:
			return state;
	}
}
