import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slice';

export const Login = () => {
	const dispatch = useDispatch();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

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
					setUsername(value);
				}}
				type='text'
				name='username'
			/>
			<input
				value={password}
				onChange={({ target: { value } }) => {
					setPassword(value);
				}}
				type='text'
				name='password'
			/>
			<button type='submit'>log in</button>
		</form>
	);
};
