import { useReducer, useContext } from 'react';
import { AuthContext } from '../../context';
// import { useDispatch } from 'react-redux';
// import { login } from '../../store/slice';
import type { User } from '../../store/slice';

const initialForm: User = {
	username: '',
	password: '',
};

type Action = {
	type: 'field';
	payload: {
		field: 'username' | 'password';
		value: string;
	};
};

function loginReducer(state: User, action: Action) {
	switch (action.type) {
		case 'field':
			return {
				...state,
				[action.payload.field]: action.payload.value,
			};
		default:
			return state;
	}
}

export const Login = () => {
	// redux dispatch
	// const dispatch = useDispatch();
	// local state as use reducer
	const [state, reduce] = useReducer(loginReducer, initialForm);
	const { username, password } = state;

	const context = useContext(AuthContext);

	console.log('login', { username, password }, context.state.user);

	const logIn = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (username && password) {
			// dispatch(login({ username, password }));

			context.dispatch({ type: 'LOGIN', payload: { username, password } });
		}
	};

	return (
		<form onSubmit={logIn}>
			<input
				value={username}
				onChange={({ target: { value } }) => {
					reduce({
						type: 'field',
						payload: {
							field: 'username',
							value,
						},
					});
				}}
				type='text'
				name='username'
			/>
			<input
				value={password}
				onChange={({ target: { value } }) => {
					reduce({
						type: 'field',
						payload: {
							field: 'password',
							value,
						},
					});
				}}
				type='password'
				name='password'
			/>
			<button type='submit'>log in</button>
		</form>
	);
};
