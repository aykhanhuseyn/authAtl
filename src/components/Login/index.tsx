import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { login, User } from '../../store/slice';

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
				[action.payload.field]: action.payload,
			};
		default:
			return state;
	}
}

export const Login = () => {
	// redux dispatch
	const dispatch = useDispatch();
	// local state as use reducer 
	const [state, reduce] = useReducer(loginReducer, initialForm);
	const { username, password } = state;

	const logIn = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (username && password) {
			dispatch(login({ username, password }));
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
